import { error } from "@sveltejs/kit";
export async function checkSession(serverLoadEvent = null) {
  if (serverLoadEvent) {
    const { fetch } = serverLoadEvent;
    const res = await fetch(`http://apigateway:3010/auth/session`, {
      credentials: "include",
    });
    if (res.status == 200) return await res.json();
    else throw error(res.status);
  } else {
    const res = await fetch(`http://apigateway:3010/auth/session`, {
      credentials: "include",
    });
    if (res.status == 200) return await res.json();
    else throw error(res.status);
  }
}
