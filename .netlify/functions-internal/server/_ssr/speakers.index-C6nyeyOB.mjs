import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as allSpeakers_default } from "./allSpeakers-hNQhiJqb.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as CardContent, t as Card } from "./card-DWqAQnJG.mjs";
import { p as MapPin } from "../_libs/lucide-react.mjs";
import { t as RemyAssistant } from "./RemyAssistant-Cg2yjBg5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speakers.index-C6nyeyOB.js
var import_jsx_runtime = require_jsx_runtime();
function SpeakerCard({ speaker, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: `/speakers/${speaker.slug}`,
		className: "group relative block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: `relative overflow-hidden bg-card border-border/50 card-hover
          ${featured ? "aspect-square" : "aspect-square"}
          hover:border-copper/50`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/${speaker.headshot}`,
						alt: speaker.name,
						className: "w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "absolute bottom-0 left-0 right-0 p-6 z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-copper/20 text-copper-light rounded-full border border-copper/30",
								children: speaker.specialty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-semibold text-cream group-hover:text-gold transition-colors",
								children: speaker.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/70 font-body text-lg",
								children: speaker.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-cream/50 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									speaker.restaurant,
									", ",
									speaker.location
								] })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 right-0 w-20 h-20 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-copper/20 to-transparent transform rotate-45 translate-x-14 -translate-y-14" })
				})
			]
		})
	});
}
function SpeakersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemyAssistant, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative py-16 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-5xl md:text-6xl font-bold text-cream mb-4",
					children: [
						"Our ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold italic",
							children: "Distinguished"
						}),
						" ",
						"Speakers"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl text-cream/70 max-w-2xl mx-auto font-body",
					children: "Meet the world-renowned pastry chefs and master bakers who will share their expertise at Haute Pâtisserie 2026."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto px-6 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: allSpeakers_default.map((speaker) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeakerCard, { speaker }, speaker.slug))
			})
		})]
	})] });
}
//#endregion
export { SpeakersPage as component };
