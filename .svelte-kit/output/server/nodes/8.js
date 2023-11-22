import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.0a3f2d69.js","_app/immutable/chunks/index.2921e8e9.js","_app/immutable/chunks/circle.0c094f1e.js","_app/immutable/chunks/singletons.b7a9429b.js"];
export const stylesheets = [];
export const fonts = [];
