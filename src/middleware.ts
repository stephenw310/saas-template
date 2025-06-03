export { auth as middleware } from "@/lib/auth";

// Match all routes except home page, api, static, image, and favicon
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"],
};
