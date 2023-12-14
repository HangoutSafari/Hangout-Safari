

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/crud/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.2ba6004f.js","_app/immutable/chunks/index.1beed945.js","_app/immutable/chunks/FormTitle.2f0c3fb1.js","_app/immutable/chunks/index.a8d8cf0e.js","_app/immutable/chunks/store.190fef57.js"];
export const stylesheets = [];
export const fonts = [];
