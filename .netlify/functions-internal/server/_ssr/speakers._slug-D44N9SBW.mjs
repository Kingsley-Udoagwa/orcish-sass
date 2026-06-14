import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./speakers._slug-BUvAS1LV.mjs";
import { C as Award, T as ArrowLeft, p as MapPin } from "../_libs/lucide-react.mjs";
import { t as marked } from "../_libs/marked.mjs";
import { t as RemyAssistant } from "./RemyAssistant-Cg2yjBg5.mjs";
import { t as TalkCard } from "./TalkCard-DkEMWTRT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/speakers._slug-D44N9SBW.js
var import_jsx_runtime = require_jsx_runtime();
function SpeakerDetailPage() {
	const { speaker, speakerTalks } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemyAssistant, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/speakers",
					className: "inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All Speakers" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative py-12 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-7xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square rounded-2xl overflow-hidden border border-border/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/${speaker.headshot}`,
									alt: speaker.name,
									className: "w-full h-full object-cover"
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block w-fit px-4 py-1.5 text-sm font-medium tracking-wider uppercase bg-copper/20 text-copper-light rounded-full border border-copper/30 mb-4",
									children: speaker.specialty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-5xl md:text-6xl font-bold text-cream mb-3",
									children: speaker.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl text-gold font-display italic mb-4",
									children: speaker.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-cream/60 text-lg mb-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-copper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										speaker.restaurant,
										", ",
										speaker.location
									] })]
								}),
								speaker.awards && speaker.awards.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-medium tracking-wider uppercase text-cream/50",
										children: "Awards & Recognition"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: speaker.awards.map((award) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gold/10 text-gold/90 rounded-lg border border-gold/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "w-3.5 h-3.5" }), award]
										}, award))
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-4xl mx-auto px-6 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose prose-lg max-w-none prose-invert prose-p:text-cream/80 prose-headings:text-cream prose-headings:font-display prose-strong:text-cream prose-a:text-gold font-body text-lg leading-relaxed",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: marked(speaker.content) } })
				})
			}),
			speakerTalks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto px-6 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-bold text-cream mb-8",
					children: ["Sessions by ", speaker.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: speakerTalks.map((talk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TalkCard, { talk }, talk.slug))
				})]
			})
		]
	});
}
//#endregion
export { SpeakerDetailPage as component };
