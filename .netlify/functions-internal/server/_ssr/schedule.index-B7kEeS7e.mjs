import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as allSpeakers_default } from "./allSpeakers-hNQhiJqb.mjs";
import { t as allTalks_default } from "./allTalks-CJqrU6wL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Clock, p as MapPin, x as Calendar, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as RemyAssistant } from "./RemyAssistant-Cg2yjBg5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schedule.index-B7kEeS7e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getSpeakerByName(name) {
	return allSpeakers_default.find((s) => s.name.toLowerCase() === name.toLowerCase());
}
var scheduleData = [
	{
		day: 1,
		date: "March 15, 2026",
		dayName: "Day One",
		theme: "French Foundations",
		sessions: [
			{
				time: "9:00 AM",
				talkSlug: "french-macaron-mastery"
			},
			{
				time: "11:30 AM",
				talkSlug: "croissant-lamination-secrets"
			},
			{
				time: "3:00 PM",
				talkSlug: "the-science-of-sugar"
			}
		]
	},
	{
		day: 2,
		date: "March 16, 2026",
		dayName: "Day Two",
		theme: "Global Traditions",
		sessions: [
			{
				time: "9:00 AM",
				talkSlug: "sourdough-from-starter-to-masterpiece"
			},
			{
				time: "11:30 AM",
				talkSlug: "umami-in-pastry-east-meets-west"
			},
			{
				time: "2:30 PM",
				talkSlug: "savory-breads-of-the-mediterranean"
			}
		]
	},
	{
		day: 3,
		date: "March 17, 2026",
		dayName: "Day Three",
		theme: "Artisan Mastery",
		sessions: [{
			time: "9:00 AM",
			talkSlug: "the-art-of-the-perfect-tart"
		}, {
			time: "11:00 AM",
			talkSlug: "neapolitan-pizza-tradition-meets-innovation"
		}]
	}
];
function SchedulePage() {
	const [selectedDay, setSelectedDay] = (0, import_react.useState)(1);
	const currentDayData = scheduleData.find((d) => d.day === selectedDay);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemyAssistant, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative py-16 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-copper/10 border border-copper/30 text-copper-light text-sm font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "March 15-17, 2026" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-copper/40",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Paris, France" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-6xl font-bold text-cream mb-4",
							children: ["Conference ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic",
								children: "Schedule"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl text-cream/70 max-w-2xl mx-auto font-body",
							children: "Three days of masterclasses, demonstrations, and culinary inspiration from the world's finest pastry artisans."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6 mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex bg-card/50 rounded-2xl p-2 border border-border/50",
						children: scheduleData.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedDay(day.day),
							className: `relative px-8 py-4 rounded-xl font-display font-semibold transition-all duration-300 ${selectedDay === day.day ? "bg-gradient-to-br from-copper to-copper-dark text-charcoal shadow-lg shadow-copper/20" : "text-cream/70 hover:text-cream hover:bg-card"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs uppercase tracking-wider opacity-75",
								children: day.dayName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-lg",
								children: day.date.split(",")[0].split(" ").slice(0, 2).join(" ")
							})]
						}, day.day))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-6 mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl font-bold text-cream mb-2",
						children: [
							currentDayData.dayName,
							":",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic",
								children: currentDayData.theme
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-cream/50 font-body",
						children: currentDayData.date
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-5xl mx-auto px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-copper via-gold to-copper/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8",
						children: currentDayData.sessions.map((session, index) => {
							const talk = allTalks_default.find((t) => t.slug === session.talkSlug);
							if (!talk) return null;
							const speaker = getSpeakerByName(talk.speaker);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: `/talks/${talk.slug}`,
								className: "group block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex gap-6 md:gap-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-shrink-0 w-16 md:w-24 pt-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute -right-[13px] md:-right-[17px] top-0 w-6 h-6 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center group-hover:border-copper group-hover:scale-110 transition-all",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-gold group-hover:bg-copper transition-colors" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-right text-sm md:text-base font-display font-semibold text-copper-light",
												children: session.time
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 relative overflow-hidden rounded-2xl bg-card border border-border/50 \n                          group-hover:border-gold/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gold/5\n                          group-hover:-translate-y-1",
										style: { animationDelay: `${index * 100}ms` },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: `/${talk.image}`,
												alt: talk.title,
												className: "w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/80" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start",
											children: [
												speaker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-shrink-0",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-gold/30 group-hover:border-gold/60 transition-colors shadow-lg",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: `/${speaker.headshot}`,
															alt: speaker.name,
															className: "w-full h-full object-cover"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" })]
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex-1 min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex flex-wrap gap-2 mb-3",
															children: talk.topics.slice(0, 3).map((topic) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase bg-gold/10 text-gold border border-gold/20 rounded-full",
																children: topic
															}, topic))
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "font-display text-xl md:text-2xl font-semibold text-cream group-hover:text-gold transition-colors mb-2 leading-tight",
															children: talk.title
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center gap-4 text-cream/60 text-sm mb-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-medium text-copper-light",
																children: talk.speaker
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: talk.duration })]
															})]
														}),
														speaker && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-cream/50 text-sm font-body",
															children: [
																speaker.title,
																" at ",
																speaker.restaurant
															]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-shrink-0 self-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 transition-all",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-gold group-hover:translate-x-0.5 transition-transform" })
													})
												})
											]
										})]
									})]
								})
							}, session.talkSlug);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-4xl mx-auto px-6 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-charcoal border border-border/50 overflow-hidden text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl md:text-3xl font-bold text-cream mb-3",
									children: "Don't Miss a Single Session"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-cream/60 font-body mb-6 max-w-xl mx-auto",
									children: "Each masterclass offers hands-on learning from the world's finest pastry artisans."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap justify-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/talks",
										className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-copper to-copper-dark text-charcoal font-semibold transition-all hover:shadow-lg hover:shadow-copper/30 hover:scale-[1.02]",
										children: "Browse All Sessions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/speakers",
										className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold/50 text-gold font-semibold transition-all hover:bg-gold/10 hover:border-gold",
										children: "Meet the Speakers"
									})]
								})
							]
						})
					]
				})
			})
		]
	})] });
}
//#endregion
export { SchedulePage as component };
