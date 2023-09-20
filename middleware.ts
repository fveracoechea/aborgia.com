import { NextRequest, NextResponse } from 'next/server';

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

import { DEFAULT_LOCALE, LOCALES } from 'shared/constants';

function getLocale(request: NextRequest) {
  // Negotiator expects plain object so we need to transform headers
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => (headers[key] = value));

  const locales = [...LOCALES];
  let languages = new Negotiator({ headers }).languages(locales);

  return match(languages, locales, DEFAULT_LOCALE);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = LOCALES.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Matcher ignoring `/_next/` and `/api/`
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
