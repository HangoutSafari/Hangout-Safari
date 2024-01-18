import { redirect } from "@sveltejs/kit";

export async function load({ params, fetch }) {
  try {
    let res = await fetch(`http://apigateway:3010/events/free/${params.slug}`);
    const event = await res.json();
    res = await fetch(`http://apigateway:3010/events/auth/`, {
      credentials: "include",
    });

    const subscribed_events = await res.json();
    let isSubscribed = false;
    subscribed_events.forEach((sub_event) => {
      if (sub_event.id == event.id) {
        isSubscribed = true;
      }
    });

    return { event, isSubscribed };
  } catch (error) {
    return { error };
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request, cookies, fetch, params }) => {
    const req = await fetch(
      `http://apigateway:3010/events/auth/${params.slug}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    throw redirect(303, "/events");
  },
  subscribe: async ({ request, cookies, fetch, params }) => {
    const eventInfo = await request.formData();
    const info = {};
    eventInfo.forEach((value, key) => (info[key] = value));
    info["event_id"] = params.slug;
    const req = await fetch(`http://apigateway:3010/events/auth/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(info),
    });
    throw redirect(303, "/dashboard");
  },
  attend: async ({ request, cookies, fetch, params }) => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const current_date = {
      attended_at: `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`,
    };
    const req = await fetch(
      `http://apigateway:3010/events/auth/attend/${params.slug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(current_date),
      }
    );
    throw redirect(303, "/dashboard");
  },
};
