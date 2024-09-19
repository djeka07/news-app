import { NextRequest, NextResponse } from 'next/server';
import 'server-only';
import { isValid } from '../helpers/authorization';
import { getSession } from '../helpers/session';

const publicRoutes = ['/login', '/robots.txt', '/sitemap.xml'];

const withAuth = async (request: NextRequest) => {
  const session = await getSession();
  const sessionIsValid = isValid(session);
  const pathname = request.nextUrl?.pathname;
  if (publicRoutes.includes(pathname) && sessionIsValid) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!publicRoutes.includes(pathname) && !sessionIsValid) {
    return NextResponse.redirect(new URL(`/login`, request.nextUrl));
  }

  return NextResponse.next();
};

export default withAuth;
