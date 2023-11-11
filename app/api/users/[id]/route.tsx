import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) return NextResponse.json({ error: "user not found" });
  return NextResponse.json({ id: 1, name: "mosh" });
}
