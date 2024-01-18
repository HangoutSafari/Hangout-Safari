import { checkSession } from "../../session.js";

export const load = async (ServerLoadEvent) => {
  // const {fetch} = ServerLoadEvent;
    const res = await fetch('http://apigateway:3010/events/free')
    return {data: await res.json()};
};
