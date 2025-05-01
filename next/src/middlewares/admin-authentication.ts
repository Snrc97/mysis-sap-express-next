import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jwt from '@/helpers/extensions/modules/jwt-jose';

const authUrls = {
  loginUrl: '/panel/auth/login',
  registerUrl: '/panel/auth/register',
}; // Adjust this based on your authentication routes

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  const cookie = req.cookies.get('auth-token')?.value;

  const token =
    cookie ?? req.headers.get('Authorization')?.replace('Bearer ', '') ?? '';

  try {
    const decoded = await jwt.verify(token);
    (req as any).user = decoded;
  } catch (err: any) {
    // return NextResponse.json({ msg: 'Invalid JWT Token: ' + err.message || '' });
    if ((req as any).force_out) {
      if (url != '/') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }
  }

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
