import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: 'listando productos' })
}

export function POST() {
    return NextResponse.json({ message: 'creando productos' })
}