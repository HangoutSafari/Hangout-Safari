import * as server from '../entries/pages/eventShow/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/eventShow/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/eventShow/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.59803a75.js","_app/immutable/chunks/index.68cfbe9d.js"];
export const stylesheets = ["_app/immutable/assets/5.e6cac3db.css"];
export const fonts = [];
