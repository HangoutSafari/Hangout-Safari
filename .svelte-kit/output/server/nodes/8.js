import * as server from '../entries/pages/events/_slug_/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/8.bb8580bd.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/Map.2e6a20f4.js","_app/immutable/chunks/store.190fef57.js","_app/immutable/chunks/index.a8d8cf0e.js"];
export const stylesheets = ["_app/immutable/assets/8.9ba63ef8.css"];
export const fonts = [];
