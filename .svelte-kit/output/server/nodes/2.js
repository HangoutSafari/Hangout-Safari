import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.bc50cd53.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/navigation.359b3b69.js","_app/immutable/chunks/singletons.c16db320.js"];
export const stylesheets = [];
export const fonts = [];
