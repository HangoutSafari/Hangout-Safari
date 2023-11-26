import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.f1725091.js","_app/immutable/chunks/index.f044562a.js","_app/immutable/chunks/circle.da91685e.js","_app/immutable/chunks/singletons.ce2a1206.js"];
export const stylesheets = [];
export const fonts = [];
