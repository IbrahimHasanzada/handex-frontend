import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['az', 'en', 'ru'];
const defaultLocale = routing.defaultLocale || 'az';
const intlMiddleware = createMiddleware(routing);

async function fetchRedirects() {
    const redirectMap: Record<string, { to: string; permanent: boolean; }> = {};

    try {
        const res = await fetch('https://api.drafts.az/api/redirect');
        if (!res.ok) throw new Error('Redirect data fetch failed');

        const data: Array<{ from: string; to: string; permanent: boolean; }> = await res.json();

        for (const { from, to, permanent } of data) {
            redirectMap[from] = { to, permanent };
        }
    } catch (error) {
        console.error('Failed to load redirect data:', error);
    }

    return redirectMap;
}

export default async function middleware(request: NextRequest) {
    const { pathname, search } = request.nextUrl;
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.(png|jpe?g|svg|gif|webp)$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    const redirects = await fetchRedirects();

    const match = redirects[request.url];


    if (match) {
        const destination = new URL(match.to, request.url);
        return NextResponse.redirect(destination, match.permanent ? 308 : 307);
    }

    const hasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (!hasLocale && pathname !== '/') {
        const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
        newUrl.search = search;
        return NextResponse.redirect(newUrl);
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/(.*)', '/'],
};
