import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, i as Slot } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as CardContent, r as cn, t as Card } from "./card-DWqAQnJG.mjs";
import { S as BriefcaseBusiness, a as Target, c as Sparkles, d as Menu, f as Medal, h as Facebook, i as Twitter, m as Instagram, p as MapPin, s as Star, t as Youtube, u as Phone, v as Clock8, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Root2, i as Portal2, n as Group2, o as Trigger, r as Item2, t as Content2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CovYKuEp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var AboutUs = ({ stats }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about-us",
		className: "bg-muted py-8 sm:py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 space-y-4 text-center md:mb-16 lg:mb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl",
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xl",
						children: "Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced challenges, celebrated victories, and woven a narrative of growth and success."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						asChild: true,
						className: "group rounded-lg text-base has-[>svg]:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							children: ["Read more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "transition-transform duration-200 group-hover:translate-x-0.5" })]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-8 h-full w-full max-lg:space-y-6 sm:mb-16 lg:mb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video w-full overflow-hidden rounded-xl lg:h-[644px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						width: "100%",
						height: "100%",
						src: "https://www.youtube.com/embed/RQYZXwLBY8A?si=MvvPX6xaOdzySLfb",
						title: "YouTube video player",
						frameBorder: "0",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
						referrerPolicy: "strict-origin-when-cross-origin",
						allowFullScreen: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-background grid gap-10 rounded-md border p-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 lg:px-10 xl:w-max",
					children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center justify-center gap-2.5 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-7 items-center justify-center [&>svg]:size-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-semibold",
								children: stat.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-lg",
								children: stat.description
							})
						]
					}, index))
				})]
			})]
		})
	});
};
function Avatar({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "avatar",
		className: cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "avatar-fallback",
		className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
		...props
	});
}
var ContactUs = ({ contactInfo }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacts",
		className: "bg-muted py-8 sm:py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold md:text-3xl lg:text-4xl",
					children: "Contact Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-primary absolute top-9 left-0 h-px w-full" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/contact-us/image-1.png",
					alt: "Contact illustration",
					className: "size-full rounded-md object-cover max-lg:max-h-70"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-6 text-2xl font-semibold",
						children: "Happy to help you!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mb-10 text-lg font-medium",
						children: "shadcn/studio gives you the blocks and components you need to create a truly professional website, landing page or admin panel for your SaaS and gives the blocks."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: contactInfo.map((info, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
							className: "border-none shadow-none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
								className: "flex flex-col items-center gap-4 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									className: "size-9 border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
										className: "bg-transparent [&>svg]:size-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info.icon, {})
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-lg font-semibold",
										children: info.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted-foreground text-base font-medium",
										children: info.description.split("\n").map((line, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, idx))
									})]
								})]
							})
						}, index))
					})
				] })]
			})]
		})
	});
};
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "separator",
		role: "separator",
		"aria-orientation": orientation,
		className: cn("bg-border shrink-0", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
var Logo$1 = (props) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "1em",
		height: "1em",
		viewBox: "0 0 328 329",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				y: "0.5",
				width: "328",
				height: "328",
				rx: "164",
				fill: "black",
				className: "dark:fill-white"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288",
				stroke: "white",
				strokeWidth: "20",
				className: "dark:stroke-black"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771",
				stroke: "white",
				strokeWidth: "20",
				className: "dark:stroke-black"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "238.136",
				y1: "98.8184",
				x2: "196.76",
				y2: "139.707",
				stroke: "white",
				strokeWidth: "20",
				className: "dark:stroke-black"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "135.688",
				y1: "200.957",
				x2: "94.3128",
				y2: "241.845",
				stroke: "white",
				strokeWidth: "20",
				className: "dark:stroke-black"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "133.689",
				y1: "137.524",
				x2: "92.5566",
				y2: "96.3914",
				stroke: "white",
				strokeWidth: "20",
				className: "dark:stroke-black"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "237.679",
				y1: "241.803",
				x2: "196.547",
				y2: "200.671",
				stroke: "white",
				strokeWidth: "20",
				className: "dark:stroke-black"
			})
		]
	});
};
var Logo = ({ className }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo$1, { className: "size-8.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xl font-bold",
			children: "shadcn/studio"
		})]
	});
};
var Footer = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "gap-3" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5 whitespace-nowrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: "Features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: "Works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: "Career"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Twitter, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "size-5" })
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center font-medium text-balance",
				children: [
					`©${(/* @__PURE__ */ new Date()).getFullYear()}`,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						children: "Shadcn/studio"
					}),
					", Made with ❤️ for better web."
				]
			})
		})
	] });
};
var Gallery = ({ sections }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "py-8 sm:py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 space-y-4 text-center sm:mb-16 lg:mb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-semibold md:text-3xl lg:text-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative z-1",
							children: ["Explore our", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-primary absolute bottom-1 left-0 -z-1 h-px w-full",
								"aria-hidden": "true"
							})]
						}),
						" ",
						"Products"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-xl",
					children: "Explore our gallery to learn more about our amazing products and their features."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: sections.map((section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn({ "grid grid-cols-2 gap-6": section.type === "grid" }),
					children: section.images.map((image, imageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: image.src,
						alt: image.alt,
						className: "rounded-lg object-cover"
					}, imageIndex))
				}, sectionIndex))
			})]
		})
	});
};
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "span", {
		"data-slot": "badge",
		"data-variant": variant,
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var HeroSection = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "AI-Powered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "Solution for client-facing businesses"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl",
					children: [
						"Sizzling Summer Delights",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative",
							children: ["Effortless", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "223",
								height: "12",
								viewBox: "0 0 223 12",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								className: "absolute inset-x-0 bottom-0 w-full translate-y-1/2 max-sm:hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551",
									stroke: "url(#paint0_linear_10365_68643)",
									strokeWidth: "2",
									strokeLinecap: "round"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "paint0_linear_10365_68643",
									x1: "18.8541",
									y1: "3.72033",
									x2: "42.6487",
									y2: "66.6308",
									gradientUnits: "userSpaceOnUse",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "var(--primary)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "1",
										stopColor: "var(--primary-foreground)"
									})]
								}) })]
							})]
						}),
						" ",
						"Recipes for Parties!"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground",
					children: [
						"Dive into a world of flavor this summer with our collection of Sizzling Summer Delights!",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"From refreshing appetizers to delightful desserts"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						children: "Try It Now"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/hero/image-19.png",
			alt: "Dishes",
			className: "min-h-67 w-full object-cover"
		})]
	});
};
function DropdownMenu$1({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ className, align = "start", sideOffset = 4, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		"data-slot": "dropdown-menu-content",
		sideOffset,
		align,
		className: cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props
	}) });
}
function DropdownMenuGroup({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group2, {
		"data-slot": "dropdown-menu-group",
		...props
	});
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		...props
	});
}
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = (0, import_react.useState)("auto");
	(0, import_react.useEffect)(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	(0, import_react.useEffect)(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode}. Click to switch mode.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm font-semibold text-[var(--sea-ink)] shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5",
		children: mode === "auto" ? "Auto" : mode === "dark" ? "Dark" : "Light"
	});
}
function ModeToggle() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {});
}
var Navbar = ({ navigationData }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "bg-background sticky top-0 z-50 border-b",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "hover:text-primary max-md:hidden",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#products",
						className: "hover:text-primary max-md:hidden",
						children: "Products"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "hover:text-primary max-md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-foreground gap-3" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about-us",
						className: "hover:text-primary max-md:hidden",
						children: "About Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contacts",
						className: "hover:text-primary max-md:hidden",
						children: "Contacts"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dashboard",
							children: "Dashboard"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						className: "md:hidden",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "icon",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Menu"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
						className: "w-56",
						align: "end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuGroup, { children: navigationData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							children: item.title
						}) }, index)) })
					})] })
				]
			})]
		})
	});
};
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { navigationData: [
			{
				title: "Home",
				href: "#home"
			},
			{
				title: "Products",
				href: "#products"
			},
			{
				title: "About Us",
				href: "#about-us"
			},
			{
				title: "Contacts",
				href: "#contacts"
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { sections: [
			{ images: [{
				src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-10.png",
				alt: "Coastal cliffs and ocean view"
			}] },
			{
				type: "grid",
				images: [
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-9.png",
						alt: "Silhouettes on beach"
					},
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-8.png",
						alt: "Snowy mountain peaks"
					},
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-7.png",
						alt: "Rolling green hills"
					},
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-6.png",
						alt: "Sunset landscape"
					}
				]
			},
			{
				type: "grid",
				images: [
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-4.png",
						alt: "Silhouettes on beach"
					},
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-3.png",
						alt: "Snowy mountain peaks"
					},
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-2.png",
						alt: "Rolling green hills"
					},
					{
						src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-1.png",
						alt: "Sunset landscape"
					}
				]
			},
			{ images: [{
				src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-5.png",
				alt: "Coastal cliffs and ocean view"
			}] }
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutUs, { stats: [
			{
				icon: Sparkles,
				value: "20+",
				description: "Years of Experience"
			},
			{
				icon: Target,
				value: "70+",
				description: "Successful Projects"
			},
			{
				icon: Star,
				value: "550+",
				description: "Customer Reviews"
			},
			{
				icon: Medal,
				value: "25",
				description: "Achieve Awards"
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactUs, { contactInfo: [
			{
				title: "Office Hours",
				icon: Clock8,
				description: "Monday-Friday\n8:00 am to 5:00 pm"
			},
			{
				title: "Our Address",
				icon: MapPin,
				description: "802 Perston Rd,Maine\n96812, USA"
			},
			{
				title: "Office 2",
				icon: BriefcaseBusiness,
				description: "802 Perston Rd,Maine\n96812, USA"
			},
			{
				title: "Get in Touch",
				icon: Phone,
				description: "+1-316-888-9685\n+1-316-477-0169"
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { App as component };
