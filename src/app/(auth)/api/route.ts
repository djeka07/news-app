import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams?.get('url')!;
  const res = await fetch(url);
  const blob = await res.arrayBuffer();
  const headers = new Headers();
  headers.set('Content-Type', 'image/png');
  return new NextResponse(blob, { status: 200, statusText: 'OK', headers });
}
