import * as universal from '../entries/pages/dashboard/_page.ts.js';
import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+page.ts";
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.dd530016.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/profileCard.de922c69.js","_app/immutable/chunks/eventcard.807ff462.js"];
export const stylesheets = [];
export const fonts = [];
