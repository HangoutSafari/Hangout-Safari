import * as server from '../entries/pages/events/_slug_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.2c1281bf.js","_app/immutable/chunks/index.4a4bc412.js"];
export const stylesheets = ["_app/immutable/assets/4.9ba63ef8.css"];
export const fonts = [];
