import * as server from '../entries/pages/events/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/3.afc25ab8.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/header.a25d8ca1.js","_app/immutable/chunks/eventcard.8af045bc.js"];
export const stylesheets = [];
export const fonts = [];
