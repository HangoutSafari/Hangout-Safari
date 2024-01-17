// import { createStore } from './store.js';

export const load = async (serverLoadEvent) => {
    try {

      const { fetch } = serverLoadEvent;

      let res = await fetch("http://localhost:3010/auth/session/", {
          credentials: "include",
      });
      const response = await res.json();

      res = await fetch(`http://localhost:3010/users/dashboards/${response.user}/`);
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
