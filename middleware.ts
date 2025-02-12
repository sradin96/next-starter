import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  console.log({ token });

  const isAuthRoute =
    req.nextUrl.pathname.startsWith('/login') ||
    req.nextUrl.pathname.startsWith('/register');
  const isProtectedRoute = req.nextUrl.pathname.startsWith('/portal');

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL('/portal', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*', '/login', '/register'],
};
