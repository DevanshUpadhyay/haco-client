import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/register";
  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/login",
    "/my-account",
    "/register",
    "/change-password",
    "/forget-password",
    "/my-courses",
    "/payment-fail",
    "/payment-success",
    "/reset-password",
    "/subscribe/:path*",
    "/update-profile",
    "/verify-email",
  ],
};
