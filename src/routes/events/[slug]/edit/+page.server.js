import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    let res = await fetch(`http://localhost:3010/events/free/${params.slug}`);
    const event = await res.json();
    return event;
  } catch (error) {
    return { error };
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies, fetch, params }) => {
    const data = await request.formData();
    const obj = {};
    data.forEach((value, key) => (obj[key] = value));
    obj["category_id"] = 3;
    console.log(obj);
    const req = await fetch(
      `http://localhost:3010/events/auth/${params.slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        credentials: "include",
      }
    );
    if (req.status == 200) throw redirect(303, `/events/${params.slug}`);
  },
};
