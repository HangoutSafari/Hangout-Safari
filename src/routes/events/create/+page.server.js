import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies, fetch }) => {
    const data = await request.formData();
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));
    obj["category_id"] = 3;
    const req = await fetch(`http://localhost:3010/events/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
      credentials: "include",
    });
    if (req.status == 200)
      throw redirect(303, `/events/${(await req.json())[0]["id"]}`);
  },
};
