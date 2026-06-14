import { t as allSpeakers_default } from "./allSpeakers-hNQhiJqb.mjs";
import { t as allTalks_default } from "./allTalks-CJqrU6wL.mjs";
import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speakers._slug-BUvAS1LV.js
var $$splitComponentImporter = () => import("./speakers._slug-D44N9SBW.mjs");
var Route = createFileRoute("/speakers/$slug")({
	loader: async ({ params }) => {
		const speaker = allSpeakers_default.find((s) => s.slug === params.slug);
		if (!speaker) throw new Error("Speaker not found");
		return {
			speaker,
			speakerTalks: allTalks_default.filter((t) => t.speaker === speaker.name)
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
