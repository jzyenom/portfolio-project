import { NextResponse } from 'next/server';
import { deleteAuthCookie } from '@/lib/cookies';

export async function POST() {
  deleteAuthCookie();
  return NextResponse.json({ message: 'Logged out successfully' });
}
