import * as server from '../entries/pages/events/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/events/+page.server.js";
export const imports = ["_app/immutable/nodes/3.68b63635.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/header.3348b22a.js","_app/immutable/chunks/eventcard.fcd7749b.js"];
export const stylesheets = [];
export const fonts = [];
