import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing, type Locale } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

function resolveLocale(request: NextRequest): Locale {
  const { pathname } = request.nextUrl;
  const prefixMatch = pathname.match(/^\/(ar|en)(?=\/|$)/);
  if (prefixMatch) return prefixMatch[1] as Locale;

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale === "ar" || cookieLocale === "en") return cookieLocale;

  return routing.defaultLocale;
}

export default function middleware(request: NextRequest) {
  const locale = resolveLocale(request);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const modifiedRequest = new NextRequest(request.url, {
    headers: requestHeaders,
  });

  return intlMiddleware(modifiedRequest);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
