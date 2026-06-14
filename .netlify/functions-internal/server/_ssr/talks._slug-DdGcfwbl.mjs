import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./talks._slug-B5FZyYeB.mjs";
import { T as ArrowLeft, _ as Clock, o as Tag, r as User } from "../_libs/lucide-react.mjs";
import { t as marked } from "../_libs/marked.mjs";
import { t as RemyAssistant } from "./RemyAssistant-Cg2yjBg5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talks._slug-DdGcfwbl.js
var import_jsx_runtime = require_jsx_runtime();
function TalkDetailPage() {
	const { talk, speaker } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemyAssistant, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/talks",
					className: "inline-flex items-center gap-2 text-cream/60 hover:text-gold transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All Sessions" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[40vh] max-w-7xl mx-auto px-6 mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full h-full rounded-2xl overflow-hidden border border-border/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: `/${talk.image}`,
						alt: talk.title,
						className: "w-full h-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-6 bg-gradient-to-t from-charcoal/60 to-transparent rounded-2xl pointer-events-none" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 mb-6",
						children: talk.topics.map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium tracking-wide uppercase bg-gold/15 text-gold border border-gold/30 rounded-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "w-3 h-3" }), topic]
						}, topic))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl font-bold text-cream mb-6 leading-tight",
						children: talk.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-border/50",
						children: [speaker ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: `/speakers/${speaker.slug}`,
							className: "flex items-center gap-3 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full overflow-hidden border border-border/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `/${speaker.headshot}`,
									alt: speaker.name,
									className: "w-full h-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream group-hover:text-gold transition-colors font-medium",
								children: talk.speaker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/50 text-sm",
								children: speaker.restaurant
							})] })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-cream/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "w-5 h-5 text-copper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: talk.speaker })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-cream/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-5 h-5 text-copper" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lg",
								children: talk.duration
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose prose-lg max-w-none prose-invert prose-p:text-cream/80 prose-headings:text-cream prose-headings:font-display prose-strong:text-cream prose-a:text-gold prose-li:text-cream/80 prose-ul:text-cream/80 font-body text-lg leading-relaxed pb-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: marked(talk.content) } })
					})
				]
			})
		]
	});
}
//#endregion
export { TalkDetailPage as component };
