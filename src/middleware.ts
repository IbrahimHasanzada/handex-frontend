import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['az', 'en', 'ru'];
const defaultLocale = routing.defaultLocale || 'az';
const intlMiddleware = createMiddleware(routing);

let redirectMap: Record<string, { to: string; permanent: boolean; }> | null = null;

async function fetchRedirects() {
    console.log(redirectMap);
    
    if (redirectMap) return redirectMap;

    try {
        const res = await fetch('http://localhost:3000/api/redirect');
        if (!res.ok) throw new Error('Redirect data fetch failed');

        const data = await res.json();
        console.log(data);
        
        redirectMap = {};

        for (const item of data) {
            redirectMap[item.from] = { to: item.to, permanent: item.permanent };
        }
    } catch (error) {
        console.error('Failed to load redirect data:', error);
        redirectMap = {};
    }

    return redirectMap;
}

export default async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.match(/\.(png|jpg|jpeg|svg|gif|webp)$/)
    ) {
        return NextResponse.next();
    }

    const redirects = await fetchRedirects();
    console.log(redirects);
    
    const match = redirects[request.url];

    if (match) {
        return NextResponse.redirect(new URL(match.to, request.url), {
            status: match.permanent ? 308 : 307,
        });
    }

    const pathnameHasValidLocale = locales.some(locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

    if (!pathnameHasValidLocale && pathname !== '/') {
        const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
        newUrl.search = request.nextUrl.search;
        return NextResponse.redirect(newUrl);
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/(.*)', '/']
};