import * as server from '../entries/pages/register/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.js";
export const imports = ["_app/immutable/nodes/8.ac75133d.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/navigation.359b3b69.js","_app/immutable/chunks/singletons.c16db320.js","_app/immutable/chunks/circle.8d96f90e.js"];
export const stylesheets = [];
export const fonts = [];
