import * as server from '../entries/pages/safari/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/safari/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/safari/+page.server.js";
export const imports = ["_app/immutable/nodes/9.188b094e.js","_app/immutable/chunks/index.f1d1c83d.js","_app/immutable/chunks/sidebar.d24a6dfe.js"];
export const stylesheets = [];
export const fonts = [];
