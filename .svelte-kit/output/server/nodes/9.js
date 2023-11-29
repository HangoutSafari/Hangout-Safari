import * as server from '../entries/pages/safari/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/safari/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/safari/+page.server.js";
export const imports = ["_app/immutable/nodes/9.80f5ebdd.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/header.3348b22a.js"];
export const stylesheets = [];
export const fonts = [];
