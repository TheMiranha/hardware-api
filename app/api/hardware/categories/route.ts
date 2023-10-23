import { NextRequest, NextResponse } from "next/server";

export const GET = async() => {
    const categories = ['graphics-card', 'cpu', 'motherboard', 'ssd', 'memory']
    return NextResponse.json({categories})
}