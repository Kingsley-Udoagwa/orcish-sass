import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "./@floating-ui/react-dom+[...].mjs";
import { r as ChatClient, t as createChatDevtoolsBridge } from "./tanstack__ai-client.mjs";
//#region node_modules/.pnpm/@tanstack+ai-react@0.15.4_@tanstack+ai@0.28.0_@types+react@19.2.17_react@19.2.7/node_modules/@tanstack/ai-react/dist/esm/use-chat.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useChat(options) {
	const hookId = (0, import_react.useId)();
	const clientId = options.id || hookId;
	const [messages, setMessages] = (0, import_react.useState)(options.initialMessages || []);
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(void 0);
	const [status, setStatus] = (0, import_react.useState)("ready");
	const [isSubscribed, setIsSubscribed] = (0, import_react.useState)(false);
	const [connectionStatus, setConnectionStatus] = (0, import_react.useState)("disconnected");
	const [sessionGenerating, setSessionGenerating] = (0, import_react.useState)(false);
	const messagesRef = (0, import_react.useRef)(options.initialMessages || []);
	const isFirstMountRef = (0, import_react.useRef)(true);
	const activeClientRef = (0, import_react.useRef)(null);
	const cleanupInvalidationRef = (0, import_react.useRef)(null);
	messagesRef.current = messages;
	const optionsRef = (0, import_react.useRef)(options);
	optionsRef.current = options;
	const client = (0, import_react.useMemo)(() => {
		const messagesToUse = options.initialMessages || [];
		isFirstMountRef.current = false;
		const initialOptions = optionsRef.current;
		const instance = new ChatClient({
			devtoolsBridgeFactory: createChatDevtoolsBridge,
			...initialOptions.connection ? { connection: initialOptions.connection } : { fetcher: initialOptions.fetcher },
			id: clientId,
			initialMessages: messagesToUse,
			...initialOptions.body !== void 0 && { body: initialOptions.body },
			...initialOptions.threadId !== void 0 && { threadId: initialOptions.threadId },
			...initialOptions.forwardedProps !== void 0 && { forwardedProps: initialOptions.forwardedProps },
			...initialOptions.persistence !== void 0 && { persistence: initialOptions.persistence },
			...initialOptions.context !== void 0 && { context: initialOptions.context },
			devtools: {
				...initialOptions.devtools,
				framework: "react",
				hookName: "useChat",
				outputKind: initialOptions.outputSchema ? "structured" : "chat"
			},
			onResponse: (response) => {
				if (activeClientRef.current !== instance) return;
				optionsRef.current.onResponse?.(response);
			},
			onChunk: (chunk) => {
				if (activeClientRef.current !== instance) return;
				optionsRef.current.onChunk?.(chunk);
			},
			onFinish: (message) => {
				if (activeClientRef.current !== instance) return;
				optionsRef.current.onFinish?.(message);
			},
			onError: (error2) => {
				if (activeClientRef.current !== instance) return;
				optionsRef.current.onError?.(error2);
			},
			...initialOptions.tools !== void 0 && { tools: initialOptions.tools },
			onCustomEvent: (eventType, data, context) => {
				if (activeClientRef.current !== instance) return;
				optionsRef.current.onCustomEvent?.(eventType, data, context);
			},
			...options.streamProcessor !== void 0 && { streamProcessor: options.streamProcessor },
			onMessagesChange: (newMessages) => {
				if (activeClientRef.current !== instance) return;
				setMessages(newMessages);
			},
			onLoadingChange: (newIsLoading) => {
				if (activeClientRef.current !== instance) return;
				setIsLoading(newIsLoading);
			},
			onErrorChange: (newError) => {
				if (activeClientRef.current !== instance) return;
				setError(newError);
			},
			onStatusChange: (status2) => {
				if (activeClientRef.current !== instance) return;
				setStatus(status2);
			},
			onSubscriptionChange: (nextIsSubscribed) => {
				if (activeClientRef.current !== instance) return;
				setIsSubscribed(nextIsSubscribed);
			},
			onConnectionStatusChange: (nextStatus) => {
				if (activeClientRef.current !== instance) return;
				setConnectionStatus(nextStatus);
			},
			onSessionGeneratingChange: (isGenerating) => {
				if (activeClientRef.current !== instance) return;
				setSessionGenerating(isGenerating);
			}
		});
		activeClientRef.current = instance;
		return instance;
	}, [clientId]);
	(0, import_react.useEffect)(() => {
		const clientMessages = client.getMessages();
		if (clientMessages !== messagesRef.current) setMessages(clientMessages);
	}, [client]);
	(0, import_react.useEffect)(() => {
		client.updateOptions({
			body: options.body,
			...options.forwardedProps !== void 0 && { forwardedProps: options.forwardedProps },
			context: options.context
		});
	}, [
		client,
		options.body,
		options.forwardedProps,
		options.context
	]);
	(0, import_react.useEffect)(() => {
		if (options.live) client.subscribe();
		else client.unsubscribe();
	}, [client, options.live]);
	(0, import_react.useEffect)(() => {
		if (cleanupInvalidationRef.current) {
			clearTimeout(cleanupInvalidationRef.current);
			cleanupInvalidationRef.current = null;
		}
		activeClientRef.current = client;
		client.mountDevtools();
		return () => {
			cleanupInvalidationRef.current = setTimeout(() => {
				if (activeClientRef.current === client) activeClientRef.current = null;
				cleanupInvalidationRef.current = null;
			}, 0);
			if (optionsRef.current.live) client.unsubscribe();
			else client.stop();
			client.dispose();
		};
	}, [client]);
	const sendMessage = (0, import_react.useCallback)(async (content) => {
		await client.sendMessage(content);
	}, [client]);
	const append = (0, import_react.useCallback)(async (message) => {
		await client.append(message);
	}, [client]);
	const reload = (0, import_react.useCallback)(async () => {
		await client.reload();
	}, [client]);
	const stop = (0, import_react.useCallback)(() => {
		client.stop();
	}, [client]);
	const clear = (0, import_react.useCallback)(() => {
		client.clear();
	}, [client]);
	const setMessagesManually = (0, import_react.useCallback)((newMessages) => {
		client.setMessagesManually(newMessages);
	}, [client]);
	const addToolResult = (0, import_react.useCallback)(async (result) => {
		await client.addToolResult(result);
	}, [client]);
	const addToolApprovalResponse = (0, import_react.useCallback)(async (response) => {
		await client.addToolApprovalResponse(response);
	}, [client]);
	const renderedMessages = client.getMessages();
	const activeStructuredPart = (0, import_react.useMemo)(() => {
		let lastUserIndex = -1;
		for (let i = renderedMessages.length - 1; i >= 0; i--) if (renderedMessages[i]?.role === "user") {
			lastUserIndex = i;
			break;
		}
		if (lastUserIndex === -1) return null;
		for (let i = renderedMessages.length - 1; i > lastUserIndex; i--) {
			const m = renderedMessages[i];
			if (m?.role !== "assistant") continue;
			const part = m.parts.find((p) => p.type === "structured-output");
			if (part) return part;
		}
		return null;
	}, [renderedMessages]);
	return {
		messages: renderedMessages,
		sendMessage,
		append,
		reload,
		stop,
		isLoading,
		error,
		status,
		isSubscribed,
		connectionStatus,
		sessionGenerating,
		setMessages: setMessagesManually,
		clear,
		addToolResult,
		addToolApprovalResponse,
		partial: (0, import_react.useMemo)(() => {
			if (!activeStructuredPart) return {};
			return activeStructuredPart.partial ?? activeStructuredPart.data ?? {};
		}, [activeStructuredPart]),
		final: (0, import_react.useMemo)(() => {
			if (!activeStructuredPart || activeStructuredPart.status !== "complete") return null;
			return activeStructuredPart.data;
		}, [activeStructuredPart])
	};
}
new Uint8Array(128).fill(128);
//#endregion
export { useChat as t };
