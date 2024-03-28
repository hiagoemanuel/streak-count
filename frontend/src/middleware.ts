import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  for (const path of ['/login', '/signup']) {
    if (req.nextUrl.pathname === path) return NextResponse.next()
  }

  if (req.cookies.get('streak-count.token')) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
