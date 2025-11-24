// routes/set-locale.ts
import { redirect } from "react-router";
import { i18nextMiddleware, getLocale, localeCookie } from "~/middleware/i18next";
import type { Route } from "./+types/set-locale";
export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let lng = formData.get("lng");

  return redirect(request.headers.get("Referer") ?? "/", {
    headers: {
      "Set-Cookie": await localeCookie.serialize(lng),
    },
  });
}
