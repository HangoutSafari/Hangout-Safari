import { checkSession } from "../../session.js";

export const load = async (ServerLoadEvent) => {
  await checkSession(ServerLoadEvent);
};
