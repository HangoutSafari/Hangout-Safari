import * as server from '../entries/pages/login/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/6.698d69f6.js","_app/immutable/chunks/index.676b468f.js"];
export const stylesheets = [];
export const fonts = [];
