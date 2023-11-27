import * as server from '../entries/pages/safari/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/safari/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/safari/+page.server.js";
export const imports = ["_app/immutable/nodes/9.97056379.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/header.a25d8ca1.js"];
export const stylesheets = [];
export const fonts = [];
