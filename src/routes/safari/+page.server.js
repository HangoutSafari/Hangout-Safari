import { error } from "@sveltejs/kit";
import { checkSession } from "../../session.js";

export const load = async (serverLoadEvent) => {
  await checkSession(serverLoadEvent);
  try {
    const { fetch } = serverLoadEvent;

    const res = await fetch(`http://apigateway:3010/animals/auth/full`, {
      credentials: "include",
    });

    const animals = await res.json();
    return { animals };
  } catch (error) {
    return {
      error,
    };
  }
};
