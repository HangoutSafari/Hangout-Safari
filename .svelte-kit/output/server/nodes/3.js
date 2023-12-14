import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.1a0836c7.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/navigation.24a68d27.js","_app/immutable/chunks/singletons.489fad4f.js","_app/immutable/chunks/index.a8d8cf0e.js"];
export const stylesheets = [];
export const fonts = [];
