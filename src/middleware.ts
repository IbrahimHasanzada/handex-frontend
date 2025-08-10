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
        const res = await fetch('https://backend.handex.edu.az/api/redirect');
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

    if (pathname.startsWith('/sitemap.xml') || pathname.startsWith('/robots.txt') || pathname.startsWith('/favicon') || pathname.startsWith('/icon')) {
        return NextResponse.next();
    }

    const redirects = await fetchRedirects();

    // Debug məlumatları
    console.log('Request URL:', request.url);
    console.log('Pathname:', pathname);
    console.log('Available redirects:', Object.keys(redirects));

    // Həm tam URL həm də pathname ilə redirect yoxla
    const match = redirects[request.url] || redirects[pathname];
    console.log('Matchs:',match);
    
    if (match) {
        console.log('Redirect found:', match);
        const destination = new URL(match.to, request.url);
        destination.search = search;
        return NextResponse.redirect(destination, match.permanent ? 308 : 307);
    }

    const hasLocale = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
    );

    if (!hasLocale && pathname !== '/') {
        return intlMiddleware(request);
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/(.*)', '/'],
};