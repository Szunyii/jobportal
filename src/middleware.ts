import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
//ezzel tudom kiofolni  azt hogy nem enged valahova
export default authMiddleware({
  publicRoutes: ["/", "/contact"],
});

//egyszerűbb ha csökkentem a protected routeokat majd
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
