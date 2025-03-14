// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['az', 'en', 'ru'];
const defaultLocale = routing.defaultLocale || 'az';
console.log(locales)
const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.match(/\.(png|jpg|jpeg|svg|gif|webp)$/)
    ) {
        return NextResponse.next();
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