import { NextResponse, type NextRequest } from 'next/server';
import { middleware as UserAuthentication } from '@/middlewares/user-authentication';
import { middleware as AdminAuthentication } from '@/middlewares/admin-authentication';

export async function middleware(req: NextRequest) {

  
    let response = await UserAuthentication(req);
    if (response?.redirected || response?.status !== 200) return response;
  

    response = await AdminAuthentication(req);
    if (response?.redirected || response?.status !== 200) return response;
  
    return NextResponse.next();
}

export const config = {
  matcher: ['/', '/web' , '/web/:path', '/panel','/panel/:path*', '/profile/:path*'], // Protect specific routes
};
