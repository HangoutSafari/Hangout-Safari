import * as server from '../entries/pages/register/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/9.8356486b.js","_app/immutable/chunks/index.68cfbe9d.js"];
export const stylesheets = [];
export const fonts = [];
