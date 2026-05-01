import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Using jose for edge compatibility in middleware

const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Paths that require authentication
  const protectedPaths = ["/dashboard", "/scan", "/history"];
  const isProtected = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtected) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // Verify token using jose (standard JWT lib doesn't work in Edge runtime)
      const secret = new TextEncoder().encode(JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If user is already logged in, don't let them go to login/register
  if (token && (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/scan/:path*", "/history/:path*", "/login", "/register"],
};
