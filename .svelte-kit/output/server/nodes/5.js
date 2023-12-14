import * as server from '../entries/pages/events/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/5.b61d5e12.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/header.65cedfd0.js","_app/immutable/chunks/eventcard.807ff462.js"];
export const stylesheets = [];
export const fonts = [];
