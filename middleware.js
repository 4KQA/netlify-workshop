import { MiddlewareRequest } from "@netlify/next";

const fetchAvatarSrc = (avatar) => {
    const params = Object.entries(avatar).map(
        ([key, value]) => `${key}=${value}`
    );
    const searchParams = params.join("&");
    const avatarUrl = `https://avataaars.io/?${searchParams}`;
    return avatarUrl;
};

export async function middleware(NextRequest) {
    const request = new MiddlewareRequest(NextRequest);
    const response = await request.next();

    if (NextRequest.nextUrl.pathname === "/") {
        const cookie = request.context.cookies.get("avatar");
        const avatar =
            cookie &&
            JSON.parse(
                decodeURIComponent(request.context.cookies.get("avatar"))
            );

        if (avatar) {
            console.log("avatar", avatar);
            const avatarSrc = fetchAvatarSrc(avatar.avatar);
            response.replaceText("#header", (prop) => {
                return avatar.user.name;
            });
            response.setPageProp("header", avatar.user.name);
            response.setPageProp("colorScheme", avatar.preferences.colorScheme);
            response.setPageProp("avatarSrc", avatarSrc);
            response.setPageProp("avatar", avatar.avatar);
            response.rewriteHTML("#avatar", {
                element: (e) => {
                    e.setAttribute("src", avatarSrc);
                },
            });
        }
    }

    return response;
}
