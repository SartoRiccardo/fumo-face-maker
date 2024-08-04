import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await fetch(
    process.env.PRIVATE_BACKEND +
      "/face?" +
      request.nextUrl.searchParams.toString()
  );
  const file = await response.blob();
  return new NextResponse(file, { status: 200 });
}
