import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CtS5Z3P0.js","_app/immutable/chunks/disclose-version.DgpG3m5-.js","_app/immutable/chunks/runtime.CaJm-uie.js","_app/immutable/chunks/lifecycle.DeN6Z2CO.js","_app/immutable/chunks/index.BnCl-ws-.js","_app/immutable/chunks/props.xFLg9kCF.js"];
export const stylesheets = ["_app/immutable/assets/2.DczUvqW-.css"];
export const fonts = [];
