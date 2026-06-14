import { i as toRequest, n as HTTPError } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/vite-services
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var viteServices = { ["ssr"]: lazyService(() => import("../_ssr/ssr.mjs")) };
//#endregion
//#region node_modules/.pnpm/nitro-nightly@3.0.1-20260611-123640-7765bcb7_chokidar@5.0.0_dotenv@17.4.2_jiti@2.7.0_lr_270c7ead0d4141eb711f45cf64ebeb31/node_modules/nitro-nightly/dist/runtime/vite.mjs
function fetchViteEnv(viteEnvName, input, init) {
	const viteEnv = viteServices[viteEnvName];
	if (!viteEnv) throw HTTPError.status(404);
	return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
//#endregion
//#region node_modules/.pnpm/nitro-nightly@3.0.1-20260611-123640-7765bcb7_chokidar@5.0.0_dotenv@17.4.2_jiti@2.7.0_lr_270c7ead0d4141eb711f45cf64ebeb31/node_modules/nitro-nightly/dist/runtime/internal/vite/ssr-renderer.mjs
/** @param {{ req: Request }} HTTPEvent */
function ssrRenderer({ req }) {
	return fetchViteEnv("ssr", req);
}
//#endregion
export { ssrRenderer as default };
