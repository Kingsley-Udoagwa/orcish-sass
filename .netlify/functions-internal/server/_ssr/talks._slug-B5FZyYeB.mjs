import { t as allSpeakers_default } from "./allSpeakers-hNQhiJqb.mjs";
import { t as allTalks_default } from "./allTalks-CJqrU6wL.mjs";
import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talks._slug-B5FZyYeB.js
var $$splitComponentImporter = () => import("./talks._slug-DdGcfwbl.mjs");
var Route = createFileRoute("/talks/$slug")({
	loader: async ({ params }) => {
		const talk = allTalks_default.find((t) => t.slug === params.slug);
		if (!talk) throw new Error("Talk not found");
		return {
			talk,
			speaker: allSpeakers_default.find((s) => s.name === talk.speaker)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
