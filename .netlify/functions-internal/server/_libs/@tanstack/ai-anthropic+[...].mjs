import { _ as toRunErrorRawEvent, a as normalizeSystemPrompts, n as BaseTextAdapter, o as buildBaseUsage } from "./ai+[...].mjs";
import { t as EventType } from "../ag-ui__core+zod.mjs";
import { t as Anthropic } from "../@anthropic-ai/sdk+[...].mjs";
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/bash-tool.js
function convertBashToolToAdapterFormat(tool) {
	return tool.metadata;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/code-execution-tool.js
function convertCodeExecutionToolToAdapterFormat(tool) {
	return readCodeExecutionConfig(tool);
}
function readCodeExecutionConfig(tool) {
	return tool.metadata?.config;
}
function readCodeExecutionSkills(tool) {
	return tool.metadata?.skills;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/computer-use-tool.js
function convertComputerUseToolToAdapterFormat(tool) {
	return tool.metadata;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/custom-tool.js
function convertCustomToolToAdapterFormat(tool) {
	const metadata = tool.metadata || {};
	const jsonSchema = tool.inputSchema ?? {
		properties: {},
		required: []
	};
	const inputSchema = {
		type: "object",
		properties: jsonSchema.properties || null,
		required: jsonSchema.required || null
	};
	return {
		name: tool.name,
		type: "custom",
		description: tool.description,
		input_schema: inputSchema,
		cache_control: metadata.cacheControl || null
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/memory-tool.js
function convertMemoryToolToAdapterFormat(tool) {
	return {
		type: "memory_20250818",
		...tool.metadata
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/text-editor-tool.js
function convertTextEditorToolToAdapterFormat(tool) {
	return { ...tool.metadata };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/web-fetch-tool.js
function convertWebFetchToolToAdapterFormat(tool) {
	return {
		name: "web_fetch",
		type: "web_fetch_20250910",
		...tool.metadata
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/web-search-tool.js
function convertWebSearchToolToAdapterFormat(tool) {
	const metadata = tool.metadata;
	return {
		name: "web_search",
		type: "web_search_20250305",
		...metadata.allowedDomains !== void 0 && { allowed_domains: metadata.allowedDomains },
		...metadata.blockedDomains !== void 0 && { blocked_domains: metadata.blockedDomains },
		...metadata.maxUses !== void 0 && { max_uses: metadata.maxUses },
		...metadata.userLocation !== void 0 && { user_location: metadata.userLocation },
		cache_control: metadata.cacheControl || null
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/tools/tool-converter.js
function convertToolsToProviderFormat(tools) {
	return tools.map((tool) => {
		switch (tool.name) {
			case "bash": return convertBashToolToAdapterFormat(tool);
			case "code_execution": return convertCodeExecutionToolToAdapterFormat(tool);
			case "computer": return convertComputerUseToolToAdapterFormat(tool);
			case "memory": return convertMemoryToolToAdapterFormat(tool);
			case "str_replace_editor": return convertTextEditorToolToAdapterFormat(tool);
			case "web_fetch": return convertWebFetchToolToAdapterFormat(tool);
			case "web_search": return convertWebSearchToolToAdapterFormat(tool);
			default: return convertCustomToolToAdapterFormat(tool);
		}
	});
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/text/text-provider-options.js
var validateTopPandTemperature = (options) => {
	if (options.top_p !== void 0 && options.temperature !== void 0) throw new Error("You should either set top_p or temperature, but not both.");
};
var validateThinking = (options) => {
	const thinking = options.thinking;
	if (thinking && thinking.type === "enabled") {
		if (thinking.budget_tokens < 1024) throw new Error("thinking.budget_tokens must be at least 1024.");
		if (thinking.budget_tokens >= options.max_tokens) throw new Error("thinking.budget_tokens must be less than max_tokens.");
	}
};
var validateMaxTokens = (options) => {
	if (options.max_tokens < 1) throw new Error("max_tokens must be at least 1.");
};
var validateTextProviderOptions = (options) => {
	validateTopPandTemperature(options);
	validateThinking(options);
	validateMaxTokens(options);
};
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/usage.js
function buildAnthropicUsage(usage) {
	if (!usage) return void 0;
	const inputTokens = usage.input_tokens ?? 0;
	const outputTokens = usage.output_tokens || 0;
	const result = buildBaseUsage({
		promptTokens: inputTokens,
		completionTokens: outputTokens,
		totalTokens: inputTokens + outputTokens
	});
	const cacheCreation = usage.cache_creation_input_tokens;
	const cacheRead = usage.cache_read_input_tokens;
	const promptTokensDetails = {
		...cacheCreation ? { cacheWriteTokens: cacheCreation } : {},
		...cacheRead ? { cachedTokens: cacheRead } : {}
	};
	if (Object.keys(promptTokensDetails).length > 0) result.promptTokensDetails = promptTokensDetails;
	const serverToolUse = usage.server_tool_use;
	const serverToolUseDetails = {
		...serverToolUse?.web_search_requests ? { webSearchRequests: serverToolUse.web_search_requests } : {},
		...serverToolUse?.web_fetch_requests ? { webFetchRequests: serverToolUse.web_fetch_requests } : {}
	};
	if (Object.keys(serverToolUseDetails).length > 0) result.providerUsageDetails = { serverToolUse: serverToolUseDetails };
	return result;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-utils@0.2.1/node_modules/@tanstack/ai-utils/dist/esm/id.js
function generateId$1(prefix) {
	return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2)}`;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-utils@0.2.1/node_modules/@tanstack/ai-utils/dist/esm/env.js
function getApiKeyFromEnv(envVarName) {
	const apiKey = (typeof globalThis !== "undefined" && globalThis.window?.env ? globalThis.window.env : typeof process !== "undefined" ? process.env : void 0)?.[envVarName];
	if (!apiKey) throw new Error(`${envVarName} is not set. Please set the ${envVarName} environment variable or pass the API key directly.`);
	return apiKey;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/utils/client.js
function createAnthropicClient(config) {
	return new Anthropic({
		...config,
		apiKey: config.apiKey
	});
}
function getAnthropicApiKeyFromEnv() {
	return getApiKeyFromEnv("ANTHROPIC_API_KEY");
}
function generateId(prefix) {
	return generateId$1(prefix);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/model-meta.js
var CLAUDE_OPUS_4_6 = { id: "claude-opus-4-6" };
var CLAUDE_OPUS_4_5 = { id: "claude-opus-4-5" };
var CLAUDE_SONNET_4_6 = { id: "claude-sonnet-4-6" };
var CLAUDE_SONNET_4_5 = { id: "claude-sonnet-4-5" };
var CLAUDE_HAIKU_4_5 = { id: "claude-haiku-4-5" };
var CLAUDE_OPUS_4_1 = { id: "claude-opus-4-1" };
var CLAUDE_SONNET_4 = { id: "claude-sonnet-4" };
var CLAUDE_SONNET_3_7 = { id: "claude-3-7-sonnet" };
var CLAUDE_OPUS_4 = { id: "claude-opus-4" };
var CLAUDE_HAIKU_3_5 = { id: "claude-3-5-haiku" };
var CLAUDE_HAIKU_3 = { id: "claude-3-haiku" };
var CLAUDE_OPUS_4_6_FAST = { id: "claude-opus-4-6-fast" };
var CLAUDE_OPUS_4_7 = { id: "claude-opus-4-7" };
var CLAUDE_OPUS_4_7_FAST = { id: "claude-opus-4-7-fast" };
CLAUDE_OPUS_4_6.id, CLAUDE_OPUS_4_5.id, CLAUDE_SONNET_4_6.id, CLAUDE_SONNET_4_5.id, CLAUDE_HAIKU_4_5.id, CLAUDE_OPUS_4_1.id, CLAUDE_SONNET_4.id, CLAUDE_SONNET_3_7.id, CLAUDE_OPUS_4.id, CLAUDE_HAIKU_3_5.id, CLAUDE_HAIKU_3.id, CLAUDE_OPUS_4_6_FAST.id, CLAUDE_OPUS_4_7.id, CLAUDE_OPUS_4_7_FAST.id, { id: "claude-opus-4.8" }.id, { id: "claude-opus-4.8-fast" }.id;
var ANTHROPIC_COMBINED_TOOLS_AND_SCHEMA_MODELS = /* @__PURE__ */ new Set([
	CLAUDE_OPUS_4_5.id,
	CLAUDE_OPUS_4_6.id,
	CLAUDE_OPUS_4_6_FAST.id,
	CLAUDE_OPUS_4_7.id,
	CLAUDE_OPUS_4_7_FAST.id,
	CLAUDE_SONNET_4_5.id,
	CLAUDE_SONNET_4_6.id,
	CLAUDE_HAIKU_4_5.id
]);
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-anthropic@0.15.1_@tanstack+ai@0.28.0_zod@4.4.3/node_modules/@tanstack/ai-anthropic/dist/esm/adapters/text.js
function computeAnthropicBetas(tools, modelOptions) {
	const betas = /* @__PURE__ */ new Set();
	if (modelOptions?.thinking?.type === "enabled" && typeof modelOptions.thinking.budget_tokens === "number" && modelOptions.thinking.budget_tokens > 0) betas.add("interleaved-thinking-2025-05-14");
	const codeExecTool = tools?.find((t) => t.name === "code_execution");
	if (codeExecTool) {
		const cfgType = readCodeExecutionConfig(codeExecTool)?.type;
		betas.add(cfgType === "code_execution_20250522" ? "code-execution-2025-05-22" : "code-execution-2025-08-25");
	}
	if (tools?.some((t) => t.name === "code_execution" && (readCodeExecutionSkills(t)?.length ?? 0) > 0)) betas.add("skills-2025-10-02");
	return betas.size > 0 ? Array.from(betas) : void 0;
}
var AnthropicTextAdapter = class extends BaseTextAdapter {
	kind = "text";
	name = "anthropic";
	client;
	constructor(config, model) {
		super({}, model);
		this.client = createAnthropicClient(config);
	}
	async *chatStream(options) {
		const { logger } = options;
		try {
			const requestParams = this.mapCommonOptionsToAnthropic(options);
			logger.request(`activity=chat provider=anthropic model=${this.model} messages=${options.messages.length} tools=${options.tools?.length ?? 0} stream=true`, {
				provider: "anthropic",
				model: this.model
			});
			const betas = computeAnthropicBetas(options.tools, options.modelOptions);
			const stream = await this.client.beta.messages.create({
				...requestParams,
				stream: true,
				...betas && { betas }
			}, {
				signal: options.request?.signal,
				headers: options.request?.headers
			});
			yield* this.processAnthropicStream(stream, options, () => generateId(this.name), logger);
		} catch (error) {
			const err = error;
			const rawEvent = toRunErrorRawEvent(error);
			logger.errors("anthropic.chatStream fatal", {
				error,
				source: "anthropic.chatStream"
			});
			yield {
				type: EventType.RUN_ERROR,
				model: options.model,
				timestamp: Date.now(),
				message: err.message || "Unknown error occurred",
				code: err.code || String(err.status),
				...rawEvent !== void 0 && { rawEvent },
				error: {
					message: err.message || "Unknown error occurred",
					code: err.code || String(err.status)
				}
			};
		}
	}
	/**
	* Generate structured output using Anthropic's tool-based approach.
	* Anthropic doesn't have native structured output, so we use a tool with the schema
	* and force the model to call it.
	* The outputSchema is already JSON Schema (converted in the ai layer).
	*/
	async structuredOutput(options) {
		const { chatOptions, outputSchema } = options;
		const { logger } = chatOptions;
		const requestParams = this.mapCommonOptionsToAnthropic(chatOptions);
		const structuredOutputTool = {
			name: "structured_output",
			description: "Use this tool to provide your response in the required structured format.",
			input_schema: {
				type: "object",
				properties: outputSchema.properties ?? {},
				required: outputSchema.required ?? []
			}
		};
		try {
			logger.request(`activity=chat provider=anthropic model=${this.model} messages=${chatOptions.messages.length} tools=${chatOptions.tools?.length ?? 0} stream=false`, {
				provider: "anthropic",
				model: this.model
			});
			const betas = computeAnthropicBetas(chatOptions.tools, chatOptions.modelOptions);
			const response = await this.client.beta.messages.create({
				...requestParams,
				stream: false,
				tools: [structuredOutputTool],
				tool_choice: {
					type: "tool",
					name: "structured_output"
				},
				...betas && { betas }
			}, {
				signal: chatOptions.request?.signal,
				headers: chatOptions.request?.headers
			});
			let parsed = null;
			let rawText = "";
			for (const block of response.content) if (block.type === "tool_use" && block.name === "structured_output") {
				parsed = block.input;
				rawText = JSON.stringify(block.input);
				break;
			}
			if (parsed === null) {
				rawText = response.content.map((b) => {
					if (b.type === "text") return b.text;
					return "";
				}).join("");
				try {
					parsed = JSON.parse(rawText);
				} catch {
					throw new Error(`Failed to extract structured output from response. Content: ${rawText.slice(0, 200)}${rawText.length > 200 ? "..." : ""}`);
				}
			}
			return {
				data: parsed,
				rawText,
				usage: buildAnthropicUsage(response.usage)
			};
		} catch (error) {
			const err = error;
			logger.errors("anthropic.structuredOutput fatal", {
				error,
				source: "anthropic.structuredOutput"
			});
			throw new Error(`Structured output generation failed: ${err.message || "Unknown error occurred"}`);
		}
	}
	mapCommonOptionsToAnthropic(options) {
		const modelOptions = options.modelOptions;
		const formattedMessages = this.formatMessages(options.messages);
		const tools = options.tools ? convertToolsToProviderFormat(options.tools) : void 0;
		const validProviderOptions = {};
		if (modelOptions) {
			const validKeys = [
				"container",
				"context_management",
				"effort",
				"mcp_servers",
				"output_config",
				"service_tier",
				"stop_sequences",
				"thinking",
				"tool_choice",
				"top_k",
				"temperature",
				"top_p"
			];
			const droppedKeyExemptSet = /* @__PURE__ */ new Set([...validKeys, "max_tokens"]);
			const droppedKeys = Object.keys(modelOptions).filter((key) => !droppedKeyExemptSet.has(key));
			if (droppedKeys.length > 0) options.logger.errors(`anthropic.mapCommonOptionsToAnthropic dropped unknown modelOptions key(s): ${droppedKeys.join(", ")}`, {
				source: "anthropic.mapCommonOptionsToAnthropic",
				droppedKeys,
				hint: droppedKeys.includes("system") ? "pass system prompts via the top-level `systemPrompts` option; `modelOptions.system` is no longer honored" : void 0
			});
			for (const key of validKeys) if (key in modelOptions) {
				const value = modelOptions[key];
				if (key === "tool_choice" && typeof value === "string") validProviderOptions[key] = { type: value };
				else validProviderOptions[key] = value;
			}
		}
		const thinkingBudget = validProviderOptions.thinking?.type === "enabled" ? validProviderOptions.thinking.budget_tokens : void 0;
		const defaultMaxTokens = modelOptions?.max_tokens ?? 1024;
		const maxTokens = thinkingBudget && thinkingBudget >= defaultMaxTokens ? thinkingBudget + 1 : defaultMaxTokens;
		const systemBlocks = (() => {
			const normalized = normalizeSystemPrompts(options.systemPrompts);
			if (normalized.length === 0) return void 0;
			return normalized.map((p) => ({
				type: "text",
				text: p.content,
				...p.metadata?.cache_control && { cache_control: p.metadata.cache_control }
			}));
		})();
		const combinedSchema = options.outputSchema;
		const outputConfig = combinedSchema ? { output_config: {
			...validProviderOptions.output_config ?? {},
			format: {
				type: "json_schema",
				schema: combinedSchema
			}
		} } : void 0;
		const toolSkills = options.tools?.map((tool) => tool.name === "code_execution" ? readCodeExecutionSkills(tool) : void 0).find((skills) => skills && skills.length > 0);
		if (toolSkills && toolSkills.length > 0) validProviderOptions.container = {
			id: (validProviderOptions.container ?? void 0)?.id ?? null,
			skills: toolSkills
		};
		const requestParams = {
			model: options.model,
			max_tokens: maxTokens,
			messages: formattedMessages,
			...systemBlocks !== void 0 && { system: systemBlocks },
			...tools !== void 0 && { tools },
			...validProviderOptions,
			...outputConfig ?? {}
		};
		validateTextProviderOptions(requestParams);
		return requestParams;
	}
	/**
	* Anthropic supports `output_config.format` + `tools` in a single streaming
	* Messages request only for Claude 4.5+ (GA 2026-01-29). For 4.4 and
	* earlier we keep the forced-tool-use workaround in
	* {@link structuredOutput} via the engine's finalization path.
	*/
	supportsCombinedToolsAndSchema() {
		return ANTHROPIC_COMBINED_TOOLS_AND_SCHEMA_MODELS.has(this.model);
	}
	convertContentPartToAnthropic(part) {
		switch (part.type) {
			case "text": {
				const metadata = part.metadata;
				return {
					type: "text",
					text: part.content,
					...metadata
				};
			}
			case "image": {
				const metadata = part.metadata;
				return {
					type: "image",
					source: part.source.type === "data" ? {
						type: "base64",
						data: part.source.value,
						media_type: part.source.mimeType
					} : {
						type: "url",
						url: part.source.value
					},
					...metadata
				};
			}
			case "document": {
				const metadata = part.metadata;
				return {
					type: "document",
					source: part.source.type === "data" ? {
						type: "base64",
						data: part.source.value,
						media_type: part.source.mimeType
					} : {
						type: "url",
						url: part.source.value
					},
					...metadata
				};
			}
			case "audio":
			case "video": throw new Error(`Anthropic does not support ${part.type} content directly`);
			default: throw new Error(`Unsupported content part type: ${part.type}`);
		}
	}
	formatMessages(messages) {
		const formattedMessages = [];
		for (const message of messages) {
			const role = message.role;
			if (role === "tool" && message.toolCallId) {
				const toolContent = message.content;
				formattedMessages.push({
					role: "user",
					content: [{
						type: "tool_result",
						tool_use_id: message.toolCallId,
						content: Array.isArray(toolContent) ? toolContent.map((part) => this.convertContentPartToAnthropic(part)) : typeof toolContent === "string" ? toolContent : ""
					}]
				});
				continue;
			}
			if (role === "assistant" && message.toolCalls?.length) {
				const contentBlocks = [];
				this.appendThinkingBlocks(contentBlocks, message.thinking);
				if (message.content) {
					const textBlock = {
						type: "text",
						text: typeof message.content === "string" ? message.content : ""
					};
					contentBlocks.push(textBlock);
				}
				for (const toolCall of message.toolCalls) {
					let parsedInput = {};
					try {
						const parsed = toolCall.function.arguments ? JSON.parse(toolCall.function.arguments) : {};
						parsedInput = parsed && typeof parsed === "object" ? parsed : {};
					} catch {
						parsedInput = toolCall.function.arguments;
					}
					const toolUseBlock = {
						type: "tool_use",
						id: toolCall.id,
						name: toolCall.function.name,
						input: parsedInput
					};
					contentBlocks.push(toolUseBlock);
				}
				formattedMessages.push({
					role: "assistant",
					content: contentBlocks
				});
				continue;
			}
			if (role === "assistant") {
				const contentBlocks = [];
				this.appendThinkingBlocks(contentBlocks, message.thinking);
				if (Array.isArray(message.content)) for (const part of message.content) contentBlocks.push(this.convertContentPartToAnthropic(part));
				else if (message.content) contentBlocks.push({
					type: "text",
					text: message.content
				});
				formattedMessages.push({
					role: "assistant",
					content: contentBlocks.length > 0 ? contentBlocks : ""
				});
				continue;
			}
			if (role === "user" && Array.isArray(message.content)) {
				const contentBlocks = message.content.map((part) => this.convertContentPartToAnthropic(part));
				formattedMessages.push({
					role: "user",
					content: contentBlocks
				});
				continue;
			}
			formattedMessages.push({
				role: "user",
				content: typeof message.content === "string" ? message.content : message.content ? message.content.map((c) => this.convertContentPartToAnthropic(c)) : ""
			});
		}
		return this.mergeConsecutiveSameRoleMessages(formattedMessages);
	}
	appendThinkingBlocks(contentBlocks, thinkingParts) {
		if (!thinkingParts?.length) return;
		for (const thinking of thinkingParts) {
			if (!thinking.signature) continue;
			const block = {
				type: "thinking",
				thinking: thinking.content,
				signature: thinking.signature
			};
			contentBlocks.push(block);
		}
	}
	/**
	* Merge consecutive messages of the same role into a single message.
	* Anthropic's API requires strictly alternating user/assistant roles.
	* Tool results are wrapped as role:'user' messages, which can collide
	* with actual user messages in multi-turn conversations.
	*
	* Also filters out empty assistant messages (e.g., from a previous failed request).
	*/
	mergeConsecutiveSameRoleMessages(messages) {
		const merged = [];
		for (const msg of messages) {
			if (msg.role === "assistant") {
				if (!(Array.isArray(msg.content) ? msg.content.length > 0 : typeof msg.content === "string" && msg.content.length > 0)) continue;
			}
			const prev = merged[merged.length - 1];
			if (prev && prev.role === msg.role) {
				const prevBlocks = Array.isArray(prev.content) ? prev.content : typeof prev.content === "string" && prev.content ? [{
					type: "text",
					text: prev.content
				}] : [];
				const msgBlocks = Array.isArray(msg.content) ? msg.content : typeof msg.content === "string" && msg.content ? [{
					type: "text",
					text: msg.content
				}] : [];
				prev.content = [...prevBlocks, ...msgBlocks];
			} else merged.push({ ...msg });
		}
		for (const msg of merged) if (Array.isArray(msg.content)) {
			const seenToolResultIds = /* @__PURE__ */ new Set();
			msg.content = msg.content.filter((block) => {
				if (block.type === "tool_result" && block.tool_use_id) {
					if (seenToolResultIds.has(block.tool_use_id)) return false;
					seenToolResultIds.add(block.tool_use_id);
				}
				return true;
			});
		}
		return merged;
	}
	async *processAnthropicStream(stream, options, genId, logger) {
		const model = options.model;
		let accumulatedContent = "";
		let accumulatedThinking = "";
		let accumulatedSignature = "";
		const toolCallsMap = /* @__PURE__ */ new Map();
		let currentToolIndex = -1;
		let currentServerTool = null;
		const runId = options.runId ?? genId();
		const threadId = options.threadId ?? genId();
		const messageId = genId();
		let stepId = null;
		let reasoningMessageId = null;
		let hasClosedReasoning = false;
		let hasEmittedRunStarted = false;
		let hasEmittedTextMessageStart = false;
		let hasEmittedRunFinished = false;
		let currentBlockType = null;
		try {
			for await (const event of stream) {
				logger.provider(`provider=anthropic type=${event.type}`, { chunk: event });
				if (!hasEmittedRunStarted) {
					hasEmittedRunStarted = true;
					yield {
						type: EventType.RUN_STARTED,
						runId,
						threadId,
						model,
						timestamp: Date.now(),
						parentRunId: options.parentRunId
					};
				}
				if (event.type === "content_block_start") {
					currentBlockType = event.content_block.type;
					if (event.content_block.type === "tool_use") {
						currentToolIndex++;
						toolCallsMap.set(currentToolIndex, {
							id: event.content_block.id,
							name: event.content_block.name,
							input: "",
							started: false
						});
					} else if (event.content_block.type === "server_tool_use") currentServerTool = {
						id: event.content_block.id,
						name: event.content_block.name,
						input: ""
					};
					else if (event.content_block.type === "web_fetch_tool_result" || event.content_block.type === "web_search_tool_result") {
						const content = event.content_block.content;
						const errorBlock = !Array.isArray(content) && (content.type === "web_fetch_tool_result_error" || content.type === "web_search_tool_result_error") ? content : null;
						if (errorBlock) logger.errors(`anthropic.${event.content_block.type} error_code=${errorBlock.error_code}`, {
							toolUseId: event.content_block.tool_use_id,
							blockType: event.content_block.type,
							errorCode: errorBlock.error_code,
							source: "anthropic.processAnthropicStream"
						});
					} else if (event.content_block.type === "thinking") {
						accumulatedThinking = "";
						accumulatedSignature = "";
						stepId = genId();
						reasoningMessageId = genId();
						yield {
							type: EventType.REASONING_START,
							messageId: reasoningMessageId,
							model,
							timestamp: Date.now()
						};
						yield {
							type: EventType.REASONING_MESSAGE_START,
							messageId: reasoningMessageId,
							role: "reasoning",
							model,
							timestamp: Date.now()
						};
						yield {
							type: EventType.STEP_STARTED,
							stepName: stepId,
							stepId,
							model,
							timestamp: Date.now(),
							stepType: "thinking"
						};
					}
				} else if (event.type === "content_block_delta") {
					if (event.delta.type === "text_delta") {
						if (reasoningMessageId && !hasClosedReasoning) {
							hasClosedReasoning = true;
							yield {
								type: EventType.REASONING_MESSAGE_END,
								messageId: reasoningMessageId,
								model,
								timestamp: Date.now()
							};
							yield {
								type: EventType.REASONING_END,
								messageId: reasoningMessageId,
								model,
								timestamp: Date.now()
							};
						}
						if (!hasEmittedTextMessageStart) {
							hasEmittedTextMessageStart = true;
							yield {
								type: EventType.TEXT_MESSAGE_START,
								messageId,
								model,
								timestamp: Date.now(),
								role: "assistant"
							};
						}
						const delta = event.delta.text;
						accumulatedContent += delta;
						yield {
							type: EventType.TEXT_MESSAGE_CONTENT,
							messageId,
							model,
							timestamp: Date.now(),
							delta,
							content: accumulatedContent
						};
					} else if (event.delta.type === "thinking_delta" && reasoningMessageId) {
						const delta = event.delta.thinking;
						accumulatedThinking += delta;
						yield {
							type: EventType.REASONING_MESSAGE_CONTENT,
							messageId: reasoningMessageId,
							delta,
							model,
							timestamp: Date.now()
						};
						yield {
							type: EventType.STEP_FINISHED,
							stepName: stepId || genId(),
							stepId: stepId || genId(),
							model,
							timestamp: Date.now(),
							delta,
							content: accumulatedThinking
						};
					} else if (event.delta.type === "signature_delta") accumulatedSignature += event.delta.signature || "";
					else if (event.delta.type === "input_json_delta") {
						if (currentBlockType === "tool_use") {
							const existing = toolCallsMap.get(currentToolIndex);
							if (existing) {
								if (!existing.started) {
									existing.started = true;
									yield {
										type: EventType.TOOL_CALL_START,
										toolCallId: existing.id,
										toolCallName: existing.name,
										toolName: existing.name,
										model,
										timestamp: Date.now(),
										index: currentToolIndex
									};
								}
								existing.input += event.delta.partial_json;
								yield {
									type: EventType.TOOL_CALL_ARGS,
									toolCallId: existing.id,
									model,
									timestamp: Date.now(),
									delta: event.delta.partial_json,
									args: existing.input
								};
							}
						} else if (currentBlockType === "server_tool_use" && currentServerTool) currentServerTool.input += event.delta.partial_json;
					}
				} else if (event.type === "content_block_stop") {
					if (currentBlockType === "thinking") {
						if (accumulatedSignature && stepId) yield {
							type: EventType.STEP_FINISHED,
							stepName: stepId,
							stepId,
							model,
							timestamp: Date.now(),
							delta: "",
							content: accumulatedThinking,
							signature: accumulatedSignature
						};
					} else if (currentBlockType === "tool_use") {
						const existing = toolCallsMap.get(currentToolIndex);
						if (existing) {
							if (!existing.started) {
								existing.started = true;
								yield {
									type: EventType.TOOL_CALL_START,
									toolCallId: existing.id,
									toolCallName: existing.name,
									toolName: existing.name,
									model,
									timestamp: Date.now(),
									index: currentToolIndex
								};
							}
							let parsedInput = {};
							try {
								const parsed = existing.input ? JSON.parse(existing.input) : {};
								parsedInput = parsed && typeof parsed === "object" ? parsed : {};
							} catch {
								parsedInput = {};
							}
							yield {
								type: EventType.TOOL_CALL_END,
								toolCallId: existing.id,
								toolCallName: existing.name,
								toolName: existing.name,
								model,
								timestamp: Date.now(),
								input: parsedInput
							};
							hasEmittedTextMessageStart = false;
						}
					} else if (currentBlockType === "server_tool_use") {
						if (currentServerTool) logger.provider(`provider=anthropic server_tool_use name=${currentServerTool.name}`, {
							toolUseId: currentServerTool.id,
							name: currentServerTool.name,
							input: currentServerTool.input
						});
						currentServerTool = null;
					} else if (currentBlockType === "web_fetch_tool_result" || currentBlockType === "web_search_tool_result") {} else if (hasEmittedTextMessageStart && accumulatedContent) yield {
						type: EventType.TEXT_MESSAGE_END,
						messageId,
						model,
						timestamp: Date.now()
					};
					currentBlockType = null;
				} else if (event.type === "message_stop") {
					if (reasoningMessageId && !hasClosedReasoning) {
						hasClosedReasoning = true;
						yield {
							type: EventType.REASONING_MESSAGE_END,
							messageId: reasoningMessageId,
							model,
							timestamp: Date.now()
						};
						yield {
							type: EventType.REASONING_END,
							messageId: reasoningMessageId,
							model,
							timestamp: Date.now()
						};
					}
					if (!hasEmittedRunFinished) yield {
						type: EventType.RUN_FINISHED,
						runId,
						threadId,
						model,
						timestamp: Date.now(),
						finishReason: "stop"
					};
				} else if (event.type === "message_delta") {
					if (event.delta.stop_reason) {
						hasEmittedRunFinished = true;
						if (reasoningMessageId && !hasClosedReasoning) {
							hasClosedReasoning = true;
							yield {
								type: EventType.REASONING_MESSAGE_END,
								messageId: reasoningMessageId,
								model,
								timestamp: Date.now()
							};
							yield {
								type: EventType.REASONING_END,
								messageId: reasoningMessageId,
								model,
								timestamp: Date.now()
							};
						}
						switch (event.delta.stop_reason) {
							case "tool_use":
								yield {
									type: EventType.RUN_FINISHED,
									runId,
									threadId,
									model,
									timestamp: Date.now(),
									finishReason: "tool_calls",
									usage: buildAnthropicUsage(event.usage)
								};
								break;
							case "max_tokens":
								yield {
									type: EventType.RUN_ERROR,
									model,
									timestamp: Date.now(),
									message: "The response was cut off because the maximum token limit was reached.",
									code: "max_tokens",
									error: {
										message: "The response was cut off because the maximum token limit was reached.",
										code: "max_tokens"
									}
								};
								break;
							default: yield {
								type: EventType.RUN_FINISHED,
								runId,
								threadId,
								model,
								timestamp: Date.now(),
								finishReason: "stop",
								usage: buildAnthropicUsage(event.usage)
							};
						}
					}
				}
			}
		} catch (error) {
			const err = error;
			const rawEvent = toRunErrorRawEvent(error);
			logger.errors("anthropic.processAnthropicStream fatal", {
				error,
				source: "anthropic.processAnthropicStream"
			});
			yield {
				type: EventType.RUN_ERROR,
				model,
				timestamp: Date.now(),
				message: err.message || "Unknown error occurred",
				code: err.code || String(err.status),
				...rawEvent !== void 0 && { rawEvent },
				error: {
					message: err.message || "Unknown error occurred",
					code: err.code || String(err.status)
				}
			};
		}
	}
};
function createAnthropicChat(model, apiKey, config) {
	return new AnthropicTextAdapter({
		apiKey,
		...config
	}, model);
}
function anthropicText(model, config) {
	return createAnthropicChat(model, getAnthropicApiKeyFromEnv(), config);
}
//#endregion
export { getApiKeyFromEnv as n, generateId$1 as r, anthropicText as t };
