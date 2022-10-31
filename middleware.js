import { MiddlewareRequest } from "@netlify/next";
// const API = "https://sage-sunburst-c1ae76.netlify.app/";

// import { Context } from "https://edge.netlify.com";

export async function middleware(NextRequest) {
  const request = new MiddlewareRequest(NextRequest);
  const response = await request.next();
  //   console.log("request :>> ", request.context);

  if (NextRequest.nextUrl.pathname === "/") {
    const greeting = request.context.cookies.get("personalGreeting");
    if (greeting) {
      const message = decodeURIComponent(greeting);
      response.replaceText("#header", (prop) => {
        return message;
      });
      response.setPageProp("header", message);
    }
  }

  return response;
}
