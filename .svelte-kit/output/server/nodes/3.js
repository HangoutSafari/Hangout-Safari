import * as server from '../entries/pages/events/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/3.3963ef05.js","_app/immutable/chunks/index.f044562a.js","_app/immutable/chunks/header.ec299506.js"];
export const stylesheets = [];
export const fonts = [];
