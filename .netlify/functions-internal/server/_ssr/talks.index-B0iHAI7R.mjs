import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as allTalks_default } from "./allTalks-CJqrU6wL.mjs";
import { t as RemyAssistant } from "./RemyAssistant-Cg2yjBg5.mjs";
import { t as TalkCard } from "./TalkCard-DkEMWTRT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talks.index-B0iHAI7R.js
var import_jsx_runtime = require_jsx_runtime();
function TalksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemyAssistant, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative py-16 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl md:text-6xl font-bold text-cream mb-4",
					children: ["Conference ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold italic",
						children: "Sessions"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-cream/70 max-w-2xl mx-auto font-body",
					children: "Immerse yourself in masterclasses and demonstrations covering every aspect of artisan baking and pastry."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-8",
				children: allTalks_default.map((talk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalkCard, { talk }, talk.slug))
			})
		})]
	})] });
}
//#endregion
export { TalksPage as component };
