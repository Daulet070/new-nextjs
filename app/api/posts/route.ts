import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    return NextResponse.json({ message: 'hello' })
}

export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json({ body });
}