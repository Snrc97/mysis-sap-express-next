import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const authUrls = [
    '/panel/auth/login', 
    '/panel/auth/register', 
]; // Adjust this based on your authentication routes

export function middleware(req: NextRequest) {
    const token = req.cookies.get('auth-token')?.value;


    const url = req.nextUrl.pathname;
    if (!authUrls.includes(url) && !token) {
        return NextResponse.redirect(new URL('/panel/auth/login', req.url));
    }
    else if(token && url == authUrls[0])
    {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/','/panel/:path*','/dashboard/:path*', '/profile/:path*'], // Protect specific routes
};
