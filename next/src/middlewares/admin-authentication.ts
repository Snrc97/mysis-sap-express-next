import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authUrls = {
  loginUrl: '/panel/auth/login',
  registerUrl: '/panel/auth/register',
}; // Adjust this based on your authentication routes

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;


  if (url.includes('/panel')) {
    const user = (req as any).user;
    if (!user && url != authUrls.loginUrl && url != authUrls.registerUrl) {
      return NextResponse.redirect(new URL(authUrls.loginUrl, req.url));
    } else if (user && url == authUrls.loginUrl) {
      return NextResponse.redirect(new URL('/panel', req.url));
    }
  }

  return NextResponse.next();
}
