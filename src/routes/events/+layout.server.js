import { checkSession } from "../../session.js";

export const load = async (ServerLoadEvent) => {
  return await checkSession(ServerLoadEvent);
};
