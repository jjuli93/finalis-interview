import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth-token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  //TODO: add matcher to only allow admins to see prospects
  // matcher: ["/prospects/:path*"],
  matcher: [],
};
