import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.2fbbe0e3.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/circle.d43bd35d.js","_app/immutable/chunks/singletons.db365ca3.js"];
export const stylesheets = [];
export const fonts = [];
