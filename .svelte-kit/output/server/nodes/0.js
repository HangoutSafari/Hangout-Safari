

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fc8cc0dd.js","_app/immutable/chunks/index.676b468f.js"];
export const stylesheets = ["_app/immutable/assets/0.427980db.css"];
export const fonts = [];
