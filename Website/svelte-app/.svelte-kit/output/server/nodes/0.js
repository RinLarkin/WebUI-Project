import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C1um6Xs2.js","_app/immutable/chunks/CGKKezW_.js","_app/immutable/chunks/DqwmLoc1.js","_app/immutable/chunks/CBK3jd-H.js","_app/immutable/chunks/CUPjN4PS.js"];
export const stylesheets = ["_app/immutable/assets/0.COD2Zl34.css"];
export const fonts = [];
