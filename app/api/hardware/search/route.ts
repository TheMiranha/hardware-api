import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest) => {
    const {searchParams} = new URL(req.url);
    const term = searchParams.get("term");
    const category = searchParams.get('category') || ''
    const res = await fetch(`https://versus.com/api/search/?q=${term}&lang=br&category=${category}`).then(a => a.json())
    return NextResponse.json(res)
}