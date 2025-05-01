import { NextResponse, type NextRequest } from 'next/server';
import { middleware as UserAuthentication } from '@/middlewares/user-authentication';
import { middleware as AdminAuthentication } from '@/middlewares/admin-authentication';

export function middleware(req: NextRequest) {

  
    let response = UserAuthentication(req);
    if (response?.redirected || response?.status !== 200) return response;
  
    response = AdminAuthentication(req);
    if (response?.redirected || response?.status !== 200) return response;
  
    return NextResponse.next();
}

export const config = {
  matcher: ['/', '/web' , '/web/:path', '/panel','/panel/:path*', '/profile/:path*'], // Protect specific routes
};
