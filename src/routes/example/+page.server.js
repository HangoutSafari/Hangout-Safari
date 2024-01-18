import { checkSession } from "../../session.js";

export const load = async (ServerLoadEvent) => {
  const {fetch} = ServerLoadEvent;
    const res = await fetch('http://msevents/events/free')
    return await res.json();
};
