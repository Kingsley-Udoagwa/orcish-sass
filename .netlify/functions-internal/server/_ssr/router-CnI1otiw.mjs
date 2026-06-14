import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as allSpeakers_default } from "./allSpeakers-hNQhiJqb.mjs";
import { t as allTalks_default } from "./allTalks-CJqrU6wL.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as createFileRoute, i as HeadContent, l as createRootRoute, o as createRouter, r as Scripts, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./talks._slug-B5FZyYeB.mjs";
import { t as Route$8 } from "./speakers._slug-BUvAS1LV.mjs";
import { c as chat, d as maxIterations, h as toServerSentEventsResponse, s as toolDefinition } from "../_libs/@tanstack/ai+[...].mjs";
import { t as anthropicText } from "../_libs/@tanstack/ai-anthropic+[...].mjs";
import { t as openaiText } from "../_libs/@tanstack/ai-openai+[...].mjs";
import { t as geminiText } from "../_libs/tanstack__ai-gemini.mjs";
import { t as ollamaText } from "../_libs/@tanstack/ai-ollama+[...].mjs";
import { n as object, r as string, t as array } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CnI1otiw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-_euhHOEt.css";
function ThemeProvider({ children, defaultTheme = "auto", storageKey = "theme" }) {
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		const stored = window.localStorage.getItem(storageKey);
		const theme = stored === "light" || stored === "dark" || stored === "auto" ? stored : defaultTheme;
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const resolved = theme === "auto" ? prefersDark ? "dark" : "light" : theme;
		root.classList.remove("light", "dark");
		root.classList.add(resolved);
		root.style.colorScheme = resolved;
		if (theme === "auto") root.removeAttribute("data-theme");
		else root.setAttribute("data-theme", theme);
	}, [defaultTheme, storageKey]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TanStack Start Starter" }
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: THEME_INIT_SCRIPT } }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("body", {
			className: "font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, {
				defaultTheme: "auto",
				storageKey: "theme",
				children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
			})
		})]
	});
}
var $$splitComponentImporter$4 = () => import("./about-D9herq5f.mjs");
var Route$5 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./routes-CovYKuEp.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./talks.index-B0iHAI7R.mjs");
var Route$3 = createFileRoute("/talks/")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./speakers.index-C6nyeyOB.mjs");
var Route$2 = createFileRoute("/speakers/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./schedule.index-B7kEeS7e.mjs");
var Route$1 = createFileRoute("/schedule/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var getSpeakerBySlug = toolDefinition({
	name: "getSpeakerBySlug",
	description: "Get the full profile and bio of a specific speaker. Use this when asked about a particular speaker.",
	inputSchema: object({ slug: string().describe("The slug of the speaker") }),
	outputSchema: object({
		name: string(),
		title: string(),
		specialty: string(),
		restaurant: string(),
		location: string(),
		bio: string(),
		awards: array(string())
	})
}).server(({ slug }) => {
	const speaker = allSpeakers_default.find((s) => s.slug === slug);
	if (!speaker) return {
		name: "Speaker not found",
		title: "",
		specialty: "",
		restaurant: "",
		location: "",
		bio: "The requested speaker was not found.",
		awards: []
	};
	return {
		name: speaker.name,
		title: speaker.title,
		specialty: speaker.specialty,
		restaurant: speaker.restaurant,
		location: speaker.location,
		bio: speaker.content,
		awards: speaker.awards || []
	};
});
var getTalkBySlug = toolDefinition({
	name: "getTalkBySlug",
	description: "Get the full details of a specific session/talk. Use this when asked about a particular session.",
	inputSchema: object({ slug: string().describe("The slug of the talk") }),
	outputSchema: object({
		title: string(),
		speaker: string(),
		duration: string(),
		topics: array(string()),
		description: string()
	})
}).server(({ slug }) => {
	const talk = allTalks_default.find((t) => t.slug === slug);
	if (!talk) return {
		title: "Session not found",
		speaker: "",
		duration: "",
		topics: [],
		description: "The requested session was not found."
	};
	return {
		title: talk.title,
		speaker: talk.speaker,
		duration: talk.duration,
		topics: talk.topics,
		description: talk.content
	};
});
var getAllSpeakers = toolDefinition({
	name: "getAllSpeakers",
	description: "Get a list of all speakers at the conference with their names, specialties, and restaurants.",
	inputSchema: object({}),
	outputSchema: array(object({
		slug: string(),
		name: string(),
		specialty: string(),
		restaurant: string(),
		location: string()
	}))
}).server(() => {
	return allSpeakers_default.map((speaker) => ({
		slug: speaker.slug,
		name: speaker.name,
		specialty: speaker.specialty,
		restaurant: speaker.restaurant,
		location: speaker.location
	}));
});
var getAllTalks = toolDefinition({
	name: "getAllTalks",
	description: "Get a list of all sessions/talks at the conference with their titles, speakers, and topics.",
	inputSchema: object({}),
	outputSchema: array(object({
		slug: string(),
		title: string(),
		speaker: string(),
		duration: string(),
		topics: array(string())
	}))
}).server(() => {
	return allTalks_default.map((talk) => ({
		slug: talk.slug,
		title: talk.title,
		speaker: talk.speaker,
		duration: talk.duration,
		topics: talk.topics
	}));
});
var searchConference = toolDefinition({
	name: "searchConference",
	description: "Search for speakers or sessions by keyword. Use this to find content matching user queries about topics, techniques, or names.",
	inputSchema: object({ query: string().describe("The search query") }),
	outputSchema: object({
		speakers: array(object({
			slug: string(),
			name: string(),
			specialty: string(),
			restaurant: string()
		})),
		talks: array(object({
			slug: string(),
			title: string(),
			speaker: string(),
			topics: array(string())
		}))
	})
}).server(({ query }) => {
	const queryLower = query.toLowerCase();
	return {
		speakers: allSpeakers_default.filter((speaker) => speaker.name.toLowerCase().includes(queryLower) || speaker.specialty.toLowerCase().includes(queryLower) || speaker.restaurant.toLowerCase().includes(queryLower) || speaker.content.toLowerCase().includes(queryLower)).map((speaker) => ({
			slug: speaker.slug,
			name: speaker.name,
			specialty: speaker.specialty,
			restaurant: speaker.restaurant
		})),
		talks: allTalks_default.filter((talk) => talk.title.toLowerCase().includes(queryLower) || talk.speaker.toLowerCase().includes(queryLower) || talk.topics.some((topic) => topic.toLowerCase().includes(queryLower)) || talk.content.toLowerCase().includes(queryLower)).map((talk) => ({
			slug: talk.slug,
			title: talk.title,
			speaker: talk.speaker,
			topics: talk.topics
		}))
	};
});
var Route = createFileRoute("/api/remy-chat")({ server: { handlers: { POST: async ({ request }) => {
	if (request.signal.aborted) return new Response(null, { status: 499 });
	const abortController = new AbortController();
	try {
		const body = await request.json();
		const { messages, speakerSlug, talkSlug } = body;
		body.data;
		const SYSTEM_PROMPT = `You are Remy, a charming and knowledgeable culinary assistant for the Haute Pâtisserie 2026 conference in Paris. You have a warm, enthusiastic personality and deep appreciation for the art of pastry and baking.

PERSONALITY:
- Speak with warmth and a touch of French flair (occasional "magnifique!", "c'est parfait!", etc.)
- Be genuinely passionate about pastry, bread, and culinary arts
- Knowledgeable about techniques, ingredients, and the history of baking
- Helpful and encouraging to both novices and professionals

CAPABILITIES:
1. Use getSpeakerBySlug to get detailed information about a specific speaker
2. Use getTalkBySlug to get detailed information about a specific session
3. Use getAllSpeakers to see the complete speaker lineup
4. Use getAllTalks to see all available sessions
5. Use searchConference to find speakers or sessions matching a topic or keyword

INSTRUCTIONS:
- When asked about the conference, speakers, or sessions, use your tools to provide accurate information
- Help attendees find sessions that match their interests
- Share enthusiasm about the speakers and their expertise
- If asked about pastry techniques, you can provide general knowledge while recommending relevant sessions
- Keep responses conversational but informative
- When recommending sessions, explain why they might be interesting based on the user's query

${speakerSlug ? `CONTEXT: The user is viewing the profile of the speaker with slug "${speakerSlug}".` : ""}
${talkSlug ? `CONTEXT: The user is viewing the session with slug "${talkSlug}".` : ""}

Remember: You are the friendly face of Haute Pâtisserie 2026. Make every attendee feel welcome and excited about the culinary journey ahead!`;
		let provider = "ollama";
		let model = "mistral:7b";
		if (process.env.ANTHROPIC_API_KEY) {
			provider = "anthropic";
			model = "claude-haiku-4-5";
		} else if (process.env.OPENAI_API_KEY) {
			provider = "openai";
			model = "gpt-4o";
		} else if (process.env.GEMINI_API_KEY) {
			provider = "gemini";
			model = "gemini-2.0-flash-exp";
		}
		return toServerSentEventsResponse(chat({
			adapter: {
				anthropic: () => anthropicText(model || "claude-haiku-4-5"),
				openai: () => openaiText(model || "gpt-4o"),
				gemini: () => geminiText(model || "gemini-2.0-flash-exp"),
				ollama: () => ollamaText(model || "mistral:7b")
			}[provider](),
			tools: [
				getSpeakerBySlug,
				getTalkBySlug,
				getAllSpeakers,
				getAllTalks,
				searchConference
			],
			systemPrompts: [SYSTEM_PROMPT],
			agentLoopStrategy: maxIterations(5),
			messages,
			abortController
		}), { abortController });
	} catch (error) {
		console.error("Remy chat error:", error);
		if (error.name === "AbortError" || abortController.signal.aborted) return new Response(null, { status: 499 });
		return new Response(JSON.stringify({
			error: "Failed to process chat request",
			message: error.message
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var TalksIndexRoute = Route$3.update({
	id: "/talks/",
	path: "/talks/",
	getParentRoute: () => Route$6
});
var SpeakersIndexRoute = Route$2.update({
	id: "/speakers/",
	path: "/speakers/",
	getParentRoute: () => Route$6
});
var ScheduleIndexRoute = Route$1.update({
	id: "/schedule/",
	path: "/schedule/",
	getParentRoute: () => Route$6
});
var TalksSlugRoute = Route$7.update({
	id: "/talks/$slug",
	path: "/talks/$slug",
	getParentRoute: () => Route$6
});
var SpeakersSlugRoute = Route$8.update({
	id: "/speakers/$slug",
	path: "/speakers/$slug",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ApiRemyChatRoute: Route.update({
		id: "/api/remy-chat",
		path: "/api/remy-chat",
		getParentRoute: () => Route$6
	}),
	SpeakersSlugRoute,
	TalksSlugRoute,
	ScheduleIndexRoute,
	SpeakersIndexRoute,
	TalksIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
