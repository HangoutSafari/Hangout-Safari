import * as universal from '../entries/pages/example/_page.js';
import * as server from '../entries/pages/example/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/example/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/example/+page.js";
export { server };
export const server_id = "src/routes/example/+page.server.js";
export const imports = ["_app/immutable/nodes/5.6b3fa763.js","_app/immutable/chunks/index.676b468f.js"];
export const stylesheets = [];
export const fonts = [];
