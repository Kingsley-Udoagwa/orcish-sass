import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Qs } from "../_libs/streamdown+[...].mjs";
import { b as ChefHat, g as Croissant, l as Send, n as X } from "../_libs/lucide-react.mjs";
import { t as Store } from "../_libs/tanstack__store.mjs";
import { i as fetchServerSentEvents, n as createChatClientOptions } from "../_libs/tanstack__ai-client.mjs";
import { t as useChat } from "../_libs/tanstack__ai-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RemyAssistant-Cg2yjBg5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
createChatClientOptions({ connection: fetchServerSentEvents("/api/remy-chat") });
var useConferenceChat = (speakerSlug, talkSlug) => {
	return useChat(createChatClientOptions({ connection: fetchServerSentEvents("/api/remy-chat", { body: {
		speakerSlug,
		talkSlug
	} }) }));
};
function Messages({ messages }) {
	const messagesContainerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (messagesContainerRef.current) messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
	}, [messages]);
	if (!messages.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col items-center justify-center text-cream/60 text-sm px-6 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "w-12 h-12 text-copper/60 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Croissant, { className: "w-6 h-6 text-gold/60 absolute -bottom-1 -right-1" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-cream/80 font-medium font-display text-lg",
				children: "Bonjour! I'm Remy 👨‍🍳"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-cream/40 mt-2 text-center max-w-[220px]",
				children: "Your culinary guide to Haute Pâtisserie 2026. Ask about speakers, sessions, or pastry techniques!"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: messagesContainerRef,
		className: "flex-1 overflow-y-auto",
		children: messages.map(({ id, role, parts }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `py-3 ${role === "assistant" ? "bg-gradient-to-r from-copper/5 via-gold/5 to-copper/5" : "bg-transparent"}`,
			children: parts.map((part, index) => {
				if (part.type === "text" && part.content) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 px-4",
					children: [role === "assistant" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-7 h-7 rounded-full bg-gradient-to-br from-copper via-copper-dark to-gold flex items-center justify-center text-xs font-bold text-charcoal flex-shrink-0 shadow-lg shadow-copper/20",
						children: "👨‍🍳"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-7 h-7 rounded-full bg-charcoal-light flex items-center justify-center text-xs font-medium text-cream flex-shrink-0 border border-border/50",
						children: "You"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 min-w-0 text-cream prose dark:prose-invert max-w-none prose-sm prose-p:text-cream prose-headings:text-cream prose-strong:text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qs, { children: part.content })
					})]
				}, index);
				return null;
			})
		}, id))
	});
}
var showRemyAssistant = new Store(false);
function RemyAssistant({ speakerSlug, talkSlug, contextTitle }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const { messages, sendMessage, isLoading } = useConferenceChat(speakerSlug, talkSlug);
	const [input, setInput] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const subscription = showRemyAssistant.subscribe(() => {
			setIsOpen(showRemyAssistant.state);
		});
		return () => {
			subscription.unsubscribe();
		};
	}, []);
	const handleToggle = () => {
		const newState = !isOpen;
		setIsOpen(newState);
		showRemyAssistant.setState(() => newState);
	};
	const handleSend = () => {
		if (input.trim()) {
			sendMessage(input);
			setInput("");
		}
	};
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed top-36 right-4 z-[100] w-[400px] h-[520px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-copper/20 backdrop-blur-xl bg-gradient-to-b from-charcoal/98 via-charcoal/95 to-charcoal-light/98",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-copper/10 via-gold/5 to-transparent pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-between p-4 border-b border-copper/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-10 h-10 rounded-xl bg-gradient-to-br from-copper via-copper-dark to-gold flex items-center justify-center shadow-lg shadow-copper/30 rotate-3 hover:rotate-0 transition-transform",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg",
							children: "👨‍🍳"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display font-bold text-cream text-base tracking-tight",
						children: "Remy"
					}), contextTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-copper/70 truncate max-w-[220px]",
						children: ["🥐 ", contextTitle]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleToggle,
					className: "text-cream/50 hover:text-cream transition-colors p-2 hover:bg-white/5 rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Messages, { messages }),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-3 border-t border-copper/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-copper/80 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 bg-copper rounded-full animate-bounce [animation-delay:-0.3s]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 bg-copper-light rounded-full animate-bounce" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Crafting a response..."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative p-4 border-t border-copper/10 bg-charcoal/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						handleSend();
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							placeholder: "Ask about speakers, sessions, techniques...",
							disabled: isLoading,
							className: "w-full rounded-xl border border-copper/20 bg-charcoal-light/50 pl-4 pr-12 py-3 text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-copper/40 focus:border-transparent resize-none overflow-hidden disabled:opacity-50 transition-all",
							rows: 1,
							style: {
								minHeight: "48px",
								maxHeight: "100px"
							},
							onInput: (e) => {
								const target = e.target;
								target.style.height = "auto";
								target.style.height = Math.min(target.scrollHeight, 100) + "px";
							},
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey && input.trim() && !isLoading) {
									e.preventDefault();
									handleSend();
								}
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: !input.trim() || isLoading,
							className: "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-copper to-copper-dark text-charcoal disabled:opacity-30 disabled:bg-gray-600 disabled:from-gray-600 disabled:to-gray-600 transition-all hover:shadow-lg hover:shadow-copper/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" })
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { RemyAssistant as t };
