import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('streak-count.token')

  for (const path of ['/login', '/signup']) {
    if (req.nextUrl.pathname === path && token) return NextResponse.redirect(new URL('/', req.url))
    if (req.nextUrl.pathname === path) return NextResponse.next()
  }

  if (token) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
