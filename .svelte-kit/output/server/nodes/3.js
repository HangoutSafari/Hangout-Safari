import * as server from '../entries/pages/events/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/3.b2969f3d.js","_app/immutable/chunks/index.676b468f.js"];
export const stylesheets = [];
export const fonts = [];
