import { NextRequest } from 'next/server';
import 'server-only';
import { withAuth } from '~/auth/models/middlewares';

export default withAuth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)'],
};
