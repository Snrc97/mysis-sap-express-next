import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as jwt from '@/helpers/extensions/modules/jwt-jose';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  const cookie = req.cookies.get('auth-token')?.value;

  const token = cookie ?? req.headers.get('Authorization')?.replace('Bearer ', '') ?? '';


  try {
     const decoded = await jwt.verify(token);
     (req as any).user = decoded;
  } catch (err: any) {
    // res.status(401).json({ msg: 'Invalid JWT Token: ' + err.message || '' });
    if((req as any).force_out){
      if (url != '/') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }
    
  }
 

  return NextResponse.next();
}
