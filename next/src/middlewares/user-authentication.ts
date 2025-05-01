import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';


export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  const token = req.headers.get('Authorization')?.replace('Bearer ', '') || '';
  //   const token = req.cookies.get('auth-token')?.value || '';

  let decoded: any = null;
  try {
    const jwtSecret = process.env.JWT_SECRET || 'secret';
     decoded = jwt.verify(token, jwtSecret);
  } catch (err: any) {
    // res.status(401).json({ msg: 'Invalid JWT Token: ' + err.message || '' });
    if((req as any).force_out){
      if (url != '/') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }
    
  }
  finally
  {
    (req as any).user = decoded;
  }

  return NextResponse.next();
}
