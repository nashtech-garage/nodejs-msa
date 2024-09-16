import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken");
  const pathname = request.nextUrl.pathname;
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}

export const config = {
  matcher: [
    "/user/:path*",
    "/home/:path*",
    "/",
  ],
};