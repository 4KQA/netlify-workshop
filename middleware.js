import { MiddlewareRequest } from "@netlify/next";

export async function middleware(NextRequest) {
  const request = new MiddlewareRequest(NextRequest);
  const response = await request.next();

  if (NextRequest.nextUrl.pathname === "/") {
    const cookie = request.context.cookies.get("avatar");
    const avatar =
      cookie &&
      JSON.parse(decodeURIComponent(request.context.cookies.get("avatar")));

    if (avatar) {
      response.replaceText("#header", (prop) => {
        return avatar.user.name;
      });
      response.setPageProp("header", avatar.user.name);
      response.setPageProp("colorScheme", avatar.preferences.colorScheme);
    }
  }

  return response;
}
