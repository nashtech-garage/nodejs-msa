import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	if (pathname === '/') {
		return NextResponse.redirect(new URL('/home', request.url));
	}
}

export const config = {
	matcher: ['/user/:path*', '/home/:path*', '/'],
};
