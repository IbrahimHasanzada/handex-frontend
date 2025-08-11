import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

    // Statik faylları ötür
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        /\.(png|jpe?g|svg|gif|webp|ico|css|js)$/.test(pathname) ||
        pathname.startsWith('/sitemap.xml') ||
        pathname.startsWith('/robots.txt') ||
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/icon')
    ) {
        return NextResponse.next();
    }

    // API redirect-lər
    const redirects = await fetchRedirects();
    const match = redirects[pathname];
    if (match) {
        const destination = new URL(match.to, request.url);
        destination.search = search;
        return NextResponse.redirect(destination, match.permanent ? 301 : 302);
    }

    // Normal sorğular üçün - heç bir locale müdaxiləsi yoxdur
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next|api|.*\\..*).*)', '/'],
};