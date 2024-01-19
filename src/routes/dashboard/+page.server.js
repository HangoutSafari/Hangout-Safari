import { checkSession } from "../../session.js";

export const load = async (serverLoadEvent) => {
  const session = await checkSession(serverLoadEvent);
  try {
    const { fetch } = serverLoadEvent;
    let res = await fetch(
      `http://localhost:3010/users/dashboards/${await session.user.id}/`
    );
    const user = await res.json();

    res = await fetch(`http://localhost:3010/users/dashboards/`);
    const users = await res.json();

    res = await fetch(`http://localhost:3010/animals/auth/`, {
      credentials: "include",
    });
    const userLatestAnimal = await res.json();

    res = await fetch(`http://localhost:3010/events/auth/`, {
      credentials: "include",
    });
    const userEvents = await res.json();

    return { users, user, userEvents, userLatestAnimal };
  } catch (error) {
    return {
      error,
    };
  }
};
