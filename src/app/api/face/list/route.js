import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await fetch(process.env.PRIVATE_BACKEND + "/face/list");
  return NextResponse.json(await response.json(), { status: 200 });
}
