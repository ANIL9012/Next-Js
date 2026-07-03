// middleware.js
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Public paths
  const publicPaths = ["/login", "/signup"];
  const isPublicPath = publicPaths.includes(path);

  // Get token from cookie
  const token = request.cookies.get("token")?.value || "";
  const isAuthenticated = token ? !!verifyToken(token) : false;

  // Redirect logic
  if (isAuthenticated && isPublicPath) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isAuthenticated && !isPublicPath && path !== "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Configure which paths middleware runs on
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup", "/api/:path*"],
};
