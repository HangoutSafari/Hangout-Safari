import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.3511e36e.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/circle.e844fe08.js","_app/immutable/chunks/singletons.c6bb41e1.js"];
export const stylesheets = [];
export const fonts = [];
