import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.1f725ceb.js","_app/immutable/chunks/index.676b468f.js"];
export const stylesheets = [];
export const fonts = [];
