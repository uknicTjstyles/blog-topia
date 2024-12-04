/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/jwt';

interface DecodedToken {
  role: string;
}

export async function middleware(req: Request) {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
  return NextResponse.redirect(new URL('/', req.url));
  }


  const decoded = verifyToken(token as string) as DecodedToken;
  if (!decoded) {
    // Log out the user and redirect if the token is invalid/expired
    return NextResponse.redirect(new URL('/logout', req.url));
  }

  const { role } = decoded;

  // Restrict access to admin pages
  if (req.url.includes('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next(); // Allow access
}

export const config = {
  matcher: ['/profiles/:path*', '/admin/:path*'], // Apply to these paths
};
