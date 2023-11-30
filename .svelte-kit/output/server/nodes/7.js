import * as universal from '../entries/pages/profile/_page.ts.js';
import * as server from '../entries/pages/profile/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/profile/+page.ts";
export { server };
export const server_id = "src/routes/profile/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.202c093b.js","_app/immutable/chunks/index.4a4bc412.js","_app/immutable/chunks/eventcard.fcd7749b.js"];
export const stylesheets = ["_app/immutable/assets/7.9de289ff.css"];
export const fonts = [];
