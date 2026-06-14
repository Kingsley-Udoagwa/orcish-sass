import { _ as toRunErrorRawEvent, a as normalizeSystemPrompts, n as BaseTextAdapter, o as buildBaseUsage } from "./@tanstack/ai+[...].mjs";
import { t as EventType } from "./ag-ui__core+zod.mjs";
import { n as getApiKeyFromEnv, r as generateId$1 } from "./@tanstack/ai-anthropic+[...].mjs";
import { n as GoogleGenAI, t as FinishReason } from "./@google/genai.mjs";
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/code-execution-tool.js
function convertCodeExecutionToolToAdapterFormat(_tool) {
	return { codeExecution: {} };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/computer-use-tool.js
function convertComputerUseToolToAdapterFormat(tool) {
	const metadata = tool.metadata;
	return { computerUse: {
		...metadata.environment !== void 0 && { environment: metadata.environment },
		...metadata.excludedPredefinedFunctions !== void 0 && { excludedPredefinedFunctions: metadata.excludedPredefinedFunctions }
	} };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/file-search-tool.js
function convertFileSearchToolToAdapterFormat(tool) {
	return { fileSearch: tool.metadata };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/google-maps-tool.js
function convertGoogleMapsToolToAdapterFormat(tool) {
	return { googleMaps: tool.metadata };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/google-search-retriveal-tool.js
function convertGoogleSearchRetrievalToolToAdapterFormat(tool) {
	return { googleSearchRetrieval: tool.metadata };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/google-search-tool.js
function convertGoogleSearchToolToAdapterFormat(tool) {
	return { googleSearch: tool.metadata };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/url-context-tool.js
function convertUrlContextToolToAdapterFormat(_tool) {
	return { urlContext: {} };
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/tools/tool-converter.js
function convertToolsToProviderFormat(tools) {
	if (!tools || tools.length === 0) return [];
	const result = [];
	const functionDeclarations = [];
	for (const tool of tools) switch (tool.name) {
		case "code_execution":
			result.push(convertCodeExecutionToolToAdapterFormat());
			break;
		case "computer_use":
			result.push(convertComputerUseToolToAdapterFormat(tool));
			break;
		case "file_search":
			result.push(convertFileSearchToolToAdapterFormat(tool));
			break;
		case "google_maps":
			result.push(convertGoogleMapsToolToAdapterFormat(tool));
			break;
		case "google_search_retrieval":
			result.push(convertGoogleSearchRetrievalToolToAdapterFormat(tool));
			break;
		case "google_search":
			result.push(convertGoogleSearchToolToAdapterFormat(tool));
			break;
		case "url_context":
			result.push(convertUrlContextToolToAdapterFormat());
			break;
		default:
			if (!tool.description) throw new Error(`Tool ${tool.name} requires a description for Gemini adapter`);
			functionDeclarations.push({
				name: tool.name,
				description: tool.description,
				parameters: tool.inputSchema ?? {
					type: "object",
					properties: {},
					required: []
				}
			});
			break;
	}
	if (functionDeclarations.length > 0) result.push({ functionDeclarations });
	return result;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/usage.js
function flattenModalityTokenCounts(modalities) {
	if (!modalities || modalities.length === 0) return {};
	const result = {};
	for (const item of modalities) {
		if (!item.modality || item.tokenCount === void 0) continue;
		const modality = item.modality.toUpperCase();
		const count = item.tokenCount;
		switch (modality) {
			case "TEXT":
				result.textTokens = (result.textTokens ?? 0) + count;
				break;
			case "IMAGE":
				result.imageTokens = (result.imageTokens ?? 0) + count;
				break;
			case "AUDIO":
				result.audioTokens = (result.audioTokens ?? 0) + count;
				break;
			case "VIDEO":
				result.videoTokens = (result.videoTokens ?? 0) + count;
				break;
			case "DOCUMENT":
				result.documentTokens = (result.documentTokens ?? 0) + count;
				break;
		}
	}
	return result;
}
function hasModalityTokens(tokens) {
	return tokens.textTokens !== void 0 || tokens.imageTokens !== void 0 || tokens.audioTokens !== void 0 || tokens.videoTokens !== void 0 || tokens.documentTokens !== void 0;
}
function buildGeminiUsage(usageMetadata) {
	if (!usageMetadata) return void 0;
	const promptTokens = usageMetadata.promptTokenCount ?? 0;
	const completionTokens = usageMetadata.candidatesTokenCount ?? 0;
	const result = buildBaseUsage({
		promptTokens,
		completionTokens,
		totalTokens: usageMetadata.totalTokenCount ?? promptTokens + completionTokens
	});
	const promptModalities = flattenModalityTokenCounts(usageMetadata.promptTokensDetails);
	const cachedTokens = usageMetadata.cachedContentTokenCount;
	const promptTokensDetails = {
		...hasModalityTokens(promptModalities) ? promptModalities : {},
		...cachedTokens !== void 0 && cachedTokens > 0 ? { cachedTokens } : {}
	};
	const completionModalities = flattenModalityTokenCounts(usageMetadata.candidatesTokensDetails);
	const thoughtsTokens = usageMetadata.thoughtsTokenCount;
	const completionTokensDetails = {
		...hasModalityTokens(completionModalities) ? completionModalities : {},
		...thoughtsTokens !== void 0 && thoughtsTokens > 0 ? { reasoningTokens: thoughtsTokens } : {}
	};
	const providerDetails = {
		...usageMetadata.trafficType ? { trafficType: usageMetadata.trafficType } : {},
		...usageMetadata.toolUsePromptTokenCount !== void 0 && usageMetadata.toolUsePromptTokenCount > 0 ? { toolUsePromptTokenCount: usageMetadata.toolUsePromptTokenCount } : {},
		...usageMetadata.toolUsePromptTokensDetails && usageMetadata.toolUsePromptTokensDetails.length > 0 ? { toolUsePromptTokensDetails: usageMetadata.toolUsePromptTokensDetails.map((item) => ({
			modality: item.modality || "UNKNOWN",
			tokenCount: item.tokenCount ?? 0
		})) } : {},
		...usageMetadata.cacheTokensDetails && usageMetadata.cacheTokensDetails.length > 0 ? { cacheTokensDetails: usageMetadata.cacheTokensDetails.map((item) => ({
			modality: item.modality || "UNKNOWN",
			tokenCount: item.tokenCount ?? 0
		})) } : {}
	};
	if (Object.keys(promptTokensDetails).length > 0) result.promptTokensDetails = promptTokensDetails;
	if (Object.keys(providerDetails).length > 0) result.providerUsageDetails = providerDetails;
	if (Object.keys(completionTokensDetails).length > 0) result.completionTokensDetails = completionTokensDetails;
	return result;
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/utils/client.js
function createGeminiClient(config) {
	return new GoogleGenAI({
		...config,
		apiKey: config.apiKey
	});
}
function getGeminiApiKeyFromEnv() {
	try {
		return getApiKeyFromEnv("GOOGLE_API_KEY");
	} catch {
		try {
			return getApiKeyFromEnv("GEMINI_API_KEY");
		} catch {
			throw new Error("GOOGLE_API_KEY or GEMINI_API_KEY is not set. Please set one of these environment variables or pass the API key directly.");
		}
	}
}
function generateId(prefix) {
	return generateId$1(prefix);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/model-meta.js
var GEMINI_3_1_PRO = { name: "gemini-3.1-pro-preview" };
var GEMINI_3_PRO = { name: "gemini-3-pro-preview" };
var GEMINI_3_FLASH = { name: "gemini-3-flash-preview" };
var GEMINI_3_PRO_IMAGE = { name: "gemini-3-pro-image-preview" };
var GEMINI_3_1_FLASH_IMAGE = { name: "gemini-3.1-flash-image-preview" };
var GEMINI_3_1_FLASH_LITE = { name: "gemini-3.1-flash-lite-preview" };
var GEMINI_2_5_PRO = { name: "gemini-2.5-pro" };
var GEMINI_2_5_PRO_TTS = { name: "gemini-2.5-pro-preview-tts" };
var GEMINI_2_5_FLASH = { name: "gemini-2.5-flash" };
var GEMINI_2_5_FLASH_PREVIEW = { name: "gemini-2.5-flash-preview-09-2025" };
var GEMINI_2_5_FLASH_IMAGE = { name: "gemini-2.5-flash-image" };
var GEMINI_2_5_FLASH_TTS = { name: "gemini-2.5-flash-preview-tts" };
var GEMINI_3_1_FLASH_TTS = { name: "gemini-3.1-flash-tts-preview" };
var LYRIA_3_PRO = { name: "lyria-3-pro-preview" };
var LYRIA_3_CLIP = { name: "lyria-3-clip-preview" };
var GEMINI_2_5_FLASH_LITE = { name: "gemini-2.5-flash-lite" };
var GEMINI_2_5_FLASH_LITE_PREVIEW = { name: "gemini-2.5-flash-lite-preview-09-2025" };
var GEMINI_2_FLASH = { name: "gemini-2.0-flash" };
var GEMINI_2_FLASH_IMAGE = { name: "gemini-2.0-flash-preview-image-generation" };
var GEMINI_2_FLASH_LITE = { name: "gemini-2.0-flash-lite" };
var IMAGEN_4_GENERATE = { name: "imagen-4.0-generate-001" };
var IMAGEN_4_GENERATE_ULTRA = { name: "imagen-4.0-ultra-generate-001" };
var IMAGEN_4_GENERATE_FAST = { name: "imagen-4.0-fast-generate-001" };
var IMAGEN_3 = { name: "imagen-3.0-generate-002" };
var GEMINI_3_5_FLASH = { name: "gemini-3.5-flash" };
GEMINI_3_1_PRO.name, GEMINI_3_PRO.name, GEMINI_3_FLASH.name, GEMINI_3_1_FLASH_LITE.name, GEMINI_2_5_PRO.name, GEMINI_2_5_FLASH.name, GEMINI_2_5_FLASH_PREVIEW.name, GEMINI_2_5_FLASH_LITE.name, GEMINI_2_5_FLASH_LITE_PREVIEW.name, GEMINI_2_FLASH.name, GEMINI_2_FLASH_LITE.name, GEMINI_3_5_FLASH.name;
var GEMINI_COMBINED_TOOLS_AND_SCHEMA_MODELS = /* @__PURE__ */ new Set([
	GEMINI_3_1_PRO.name,
	GEMINI_3_PRO.name,
	GEMINI_3_FLASH.name,
	GEMINI_3_1_FLASH_LITE.name,
	GEMINI_3_5_FLASH.name
]);
GEMINI_3_1_FLASH_IMAGE.name, GEMINI_3_PRO_IMAGE.name, GEMINI_2_5_FLASH_IMAGE.name, GEMINI_2_FLASH_IMAGE.name, IMAGEN_3.name, IMAGEN_4_GENERATE.name, IMAGEN_4_GENERATE_FAST.name, IMAGEN_4_GENERATE_ULTRA.name;
GEMINI_3_1_FLASH_TTS.name, GEMINI_2_5_FLASH_TTS.name, GEMINI_2_5_PRO_TTS.name;
LYRIA_3_PRO.name, LYRIA_3_CLIP.name;
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-gemini@0.15.1_@modelcontextprotocol+sdk@1.29.0_zod@4.4.3__@tanstack+ai@0.28.0/node_modules/@tanstack/ai-gemini/dist/esm/adapters/text.js
var GeminiTextAdapter = class extends BaseTextAdapter {
	kind = "text";
	name = "gemini";
	client;
	constructor(config, model) {
		super({}, model);
		this.client = createGeminiClient(config);
	}
	async *chatStream(options) {
		const mappedOptions = this.mapCommonOptionsToGemini(options);
		const { logger } = options;
		try {
			logger.request(`activity=chat provider=gemini model=${this.model} messages=${options.messages.length} tools=${options.tools?.length ?? 0} stream=true`, {
				provider: "gemini",
				model: this.model
			});
			const result = await this.client.models.generateContentStream(mappedOptions);
			yield* this.processStreamChunks(result, options, logger);
		} catch (error) {
			const rawEvent = toRunErrorRawEvent(error);
			logger.errors("gemini.chatStream fatal", {
				error,
				source: "gemini.chatStream"
			});
			yield {
				type: EventType.RUN_ERROR,
				model: options.model,
				timestamp: Date.now(),
				message: error instanceof Error ? error.message : "An unknown error occurred during the chat stream.",
				...rawEvent !== void 0 && { rawEvent },
				error: { message: error instanceof Error ? error.message : "An unknown error occurred during the chat stream." }
			};
		}
	}
	/**
	* Generate structured output using Gemini's native JSON response format.
	* Uses responseMimeType: 'application/json' and responseSchema for structured output.
	* The outputSchema is already JSON Schema (converted in the ai layer).
	*/
	async structuredOutput(options) {
		const { chatOptions, outputSchema } = options;
		const { logger } = chatOptions;
		const mappedOptions = this.mapCommonOptionsToGemini(chatOptions);
		try {
			logger.request(`activity=chat provider=gemini model=${this.model} messages=${chatOptions.messages.length} tools=${chatOptions.tools?.length ?? 0} stream=false`, {
				provider: "gemini",
				model: this.model
			});
			const result = await this.client.models.generateContent({
				...mappedOptions,
				config: {
					...mappedOptions.config,
					responseMimeType: "application/json",
					responseSchema: outputSchema
				}
			});
			const rawText = this.extractTextFromResponse(result);
			let parsed;
			try {
				parsed = JSON.parse(rawText);
			} catch {
				throw new Error(`Failed to parse structured output as JSON. Content: ${rawText.slice(0, 200)}${rawText.length > 200 ? "..." : ""}`);
			}
			return {
				data: parsed,
				rawText,
				usage: result.usageMetadata ? buildGeminiUsage(result.usageMetadata) : void 0
			};
		} catch (error) {
			logger.errors("gemini.structuredOutput fatal", {
				error,
				source: "gemini.structuredOutput"
			});
			throw new Error(error instanceof Error ? error.message : "An unknown error occurred during structured output generation.");
		}
	}
	/**
	* Extract text content from a non-streaming response
	*/
	extractTextFromResponse(response) {
		let textContent = "";
		if (response.candidates?.[0]?.content?.parts) {
			for (const part of response.candidates[0].content.parts) if (part.text) textContent += part.text;
		}
		return textContent;
	}
	async *processStreamChunks(result, options, logger) {
		const model = options.model;
		let accumulatedContent = "";
		let accumulatedThinking = "";
		const toolCallMap = /* @__PURE__ */ new Map();
		let nextToolIndex = 0;
		const runId = options.runId ?? generateId(this.name);
		const threadId = options.threadId ?? generateId(this.name);
		const messageId = generateId(this.name);
		let stepId = null;
		let reasoningMessageId = null;
		let hasClosedReasoning = false;
		let hasEmittedRunStarted = false;
		let hasEmittedTextMessageStart = false;
		let hasEmittedStepStarted = false;
		for await (const chunk of result) {
			logger.provider(`provider=gemini`, { chunk });
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
			if (chunk.candidates?.[0]?.content?.parts) {
				const parts = chunk.candidates[0].content.parts;
				for (const part of parts) {
					if (part.text) {
						if (part.thought) {
							if (!hasEmittedStepStarted) {
								hasEmittedStepStarted = true;
								stepId = generateId(this.name);
								reasoningMessageId = generateId(this.name);
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
							accumulatedThinking += part.text;
							if (!reasoningMessageId) continue;
							yield {
								type: EventType.REASONING_MESSAGE_CONTENT,
								messageId: reasoningMessageId,
								delta: part.text,
								model,
								timestamp: Date.now()
							};
							yield {
								type: EventType.STEP_FINISHED,
								stepName: stepId || generateId(this.name),
								stepId: stepId || generateId(this.name),
								model,
								timestamp: Date.now(),
								delta: part.text,
								content: accumulatedThinking
							};
						} else if (part.text.trim()) {
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
							accumulatedContent += part.text;
							yield {
								type: EventType.TEXT_MESSAGE_CONTENT,
								messageId,
								model,
								timestamp: Date.now(),
								delta: part.text,
								content: accumulatedContent
							};
						}
					}
					const functionCall = part.functionCall;
					if (functionCall) {
						const toolCallId = functionCall.id || `${functionCall.name}_${Date.now()}_${nextToolIndex}`;
						const functionArgs = functionCall.args || {};
						const partThoughtSignature = part.thoughtSignature || void 0;
						let toolCallData = toolCallMap.get(toolCallId);
						if (!toolCallData) {
							toolCallData = {
								name: functionCall.name || "",
								args: typeof functionArgs === "string" ? functionArgs : JSON.stringify(functionArgs),
								index: nextToolIndex++,
								started: false,
								...partThoughtSignature !== void 0 && { thoughtSignature: partThoughtSignature }
							};
							toolCallMap.set(toolCallId, toolCallData);
						} else {
							if (!toolCallData.thoughtSignature && partThoughtSignature) toolCallData.thoughtSignature = partThoughtSignature;
							try {
								const existingArgs = JSON.parse(toolCallData.args);
								const newArgs = typeof functionArgs === "string" ? JSON.parse(functionArgs) : functionArgs;
								const mergedArgs = {
									...existingArgs,
									...newArgs
								};
								toolCallData.args = JSON.stringify(mergedArgs);
							} catch {
								toolCallData.args = typeof functionArgs === "string" ? functionArgs : JSON.stringify(functionArgs);
							}
						}
						if (!toolCallData.started) {
							toolCallData.started = true;
							yield {
								type: EventType.TOOL_CALL_START,
								toolCallId,
								toolCallName: toolCallData.name,
								toolName: toolCallData.name,
								model,
								timestamp: Date.now(),
								index: toolCallData.index,
								...toolCallData.thoughtSignature && { metadata: { thoughtSignature: toolCallData.thoughtSignature } }
							};
						}
						yield {
							type: EventType.TOOL_CALL_ARGS,
							toolCallId,
							model,
							timestamp: Date.now(),
							delta: toolCallData.args,
							args: toolCallData.args
						};
					}
				}
			} else if (chunk.data && chunk.data.trim()) {
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
				accumulatedContent += chunk.data;
				yield {
					type: EventType.TEXT_MESSAGE_CONTENT,
					messageId,
					model,
					timestamp: Date.now(),
					delta: chunk.data,
					content: accumulatedContent
				};
			}
			if (chunk.candidates?.[0]?.finishReason) {
				const finishReason = chunk.candidates[0].finishReason;
				if (finishReason === FinishReason.UNEXPECTED_TOOL_CALL) {
					if (chunk.candidates[0].content?.parts) for (const part of chunk.candidates[0].content.parts) {
						const functionCall = part.functionCall;
						if (functionCall) {
							const toolCallId = functionCall.id || `${functionCall.name}_${Date.now()}_${nextToolIndex}`;
							const functionArgs = functionCall.args || {};
							const argsString = typeof functionArgs === "string" ? functionArgs : JSON.stringify(functionArgs);
							toolCallMap.set(toolCallId, {
								name: functionCall.name || "",
								args: argsString,
								index: nextToolIndex++,
								started: true
							});
							yield {
								type: EventType.TOOL_CALL_START,
								toolCallId,
								toolCallName: functionCall.name || "",
								toolName: functionCall.name || "",
								model,
								timestamp: Date.now(),
								index: nextToolIndex - 1
							};
							let parsedInput = {};
							try {
								const parsed = typeof functionArgs === "string" ? JSON.parse(functionArgs) : functionArgs;
								parsedInput = parsed && typeof parsed === "object" ? parsed : {};
							} catch {
								parsedInput = {};
							}
							yield {
								type: EventType.TOOL_CALL_END,
								toolCallId,
								toolCallName: functionCall.name || "",
								toolName: functionCall.name || "",
								model,
								timestamp: Date.now(),
								input: parsedInput
							};
						}
					}
				}
				for (const [toolCallId, toolCallData] of toolCallMap.entries()) {
					let parsedInput = {};
					try {
						const parsed = JSON.parse(toolCallData.args);
						parsedInput = parsed && typeof parsed === "object" ? parsed : {};
					} catch {
						parsedInput = {};
					}
					yield {
						type: EventType.TOOL_CALL_END,
						toolCallId,
						toolCallName: toolCallData.name,
						toolName: toolCallData.name,
						model,
						timestamp: Date.now(),
						input: parsedInput
					};
				}
				if (toolCallMap.size > 0) hasEmittedTextMessageStart = false;
				if (finishReason === FinishReason.MAX_TOKENS) yield {
					type: EventType.RUN_ERROR,
					runId,
					model,
					timestamp: Date.now(),
					message: "The response was cut off because the maximum token limit was reached.",
					code: "max_tokens",
					error: {
						message: "The response was cut off because the maximum token limit was reached.",
						code: "max_tokens"
					}
				};
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
				if (hasEmittedTextMessageStart) yield {
					type: EventType.TEXT_MESSAGE_END,
					messageId,
					model,
					timestamp: Date.now()
				};
				yield {
					type: EventType.RUN_FINISHED,
					runId,
					threadId,
					model,
					timestamp: Date.now(),
					finishReason: toolCallMap.size > 0 ? "tool_calls" : "stop",
					...chunk.usageMetadata && { usage: buildGeminiUsage(chunk.usageMetadata) }
				};
			}
		}
	}
	convertContentPartToGemini(part) {
		switch (part.type) {
			case "text": return { text: part.content };
			case "image":
			case "audio":
			case "video":
			case "document": if (part.source.type === "data") return { inlineData: {
				data: part.source.value,
				mimeType: part.source.mimeType
			} };
			else {
				const defaultMimeType = {
					image: "image/jpeg",
					audio: "audio/mp3",
					video: "video/mp4",
					document: "application/pdf"
				}[part.type];
				return { fileData: {
					fileUri: part.source.value,
					mimeType: part.source.mimeType ?? defaultMimeType
				} };
			}
			default: throw new Error(`Unsupported content part type: ${part.type}`);
		}
	}
	formatMessages(messages) {
		const toolCallIdToName = /* @__PURE__ */ new Map();
		for (const msg of messages) if (msg.role === "assistant" && msg.toolCalls) for (const tc of msg.toolCalls) toolCallIdToName.set(tc.id, tc.function.name);
		const formatted = messages.map((msg) => {
			const role = msg.role === "assistant" ? "model" : "user";
			const parts = [];
			if (Array.isArray(msg.content)) for (const contentPart of msg.content) parts.push(this.convertContentPartToGemini(contentPart));
			else if (msg.content && msg.role !== "tool") parts.push({ text: msg.content });
			if (msg.role === "assistant" && msg.toolCalls?.length) for (const toolCall of msg.toolCalls) {
				let parsedArgs = {};
				try {
					parsedArgs = toolCall.function.arguments ? JSON.parse(toolCall.function.arguments) : {};
				} catch {
					parsedArgs = {};
				}
				const thoughtSignature = toolCall.metadata?.thoughtSignature;
				const part = { functionCall: {
					id: toolCall.id,
					name: toolCall.function.name,
					args: parsedArgs
				} };
				if (thoughtSignature) part.thoughtSignature = thoughtSignature;
				parts.push(part);
			}
			if (msg.role === "tool" && msg.toolCallId) {
				const functionName = toolCallIdToName.get(msg.toolCallId) || msg.toolCallId;
				const toolContent = msg.content;
				if (Array.isArray(toolContent)) {
					const textChunks = [];
					const mediaParts = [];
					for (const part of toolContent) if (part.type === "text") textChunks.push(part.content);
					else if (part.source.type === "data") mediaParts.push({ inlineData: {
						data: part.source.value,
						mimeType: part.source.mimeType
					} });
					else {
						const defaultMimeType = {
							image: "image/jpeg",
							audio: "audio/mp3",
							video: "video/mp4",
							document: "application/pdf"
						}[part.type];
						mediaParts.push({ fileData: {
							fileUri: part.source.value,
							mimeType: part.source.mimeType ?? defaultMimeType
						} });
					}
					parts.push({ functionResponse: {
						id: msg.toolCallId,
						name: functionName,
						response: { content: textChunks.join("\n") },
						...mediaParts.length > 0 && { parts: mediaParts }
					} });
				} else parts.push({ functionResponse: {
					id: msg.toolCallId,
					name: functionName,
					response: { content: toolContent || "" }
				} });
			}
			return {
				role,
				parts: parts.length > 0 ? parts : [{ text: "" }]
			};
		});
		return this.mergeConsecutiveSameRoleMessages(formatted);
	}
	/**
	* Merge consecutive messages of the same role into a single message.
	* Gemini's API requires strictly alternating user/model roles.
	* Tool results are mapped to role:'user', which can collide with actual
	* user messages in multi-turn conversations.
	*
	* Also filters out empty model messages (e.g., from a previous failed request)
	* and deduplicates functionResponse parts with the same name (tool call ID).
	*/
	mergeConsecutiveSameRoleMessages(messages) {
		const merged = [];
		for (const msg of messages) {
			const parts = msg.parts || [];
			if (msg.role === "model") {
				if (!(parts.length > 0 && !parts.every((p) => "text" in p && p.text === ""))) continue;
			}
			const prev = merged[merged.length - 1];
			if (prev && prev.role === msg.role) prev.parts = [...prev.parts || [], ...parts];
			else merged.push({
				...msg,
				parts: [...parts]
			});
		}
		for (const msg of merged) {
			if (!msg.parts) continue;
			const seenFunctionResponseNames = /* @__PURE__ */ new Set();
			msg.parts = msg.parts.filter((part) => {
				if ("functionResponse" in part && part.functionResponse?.name) {
					if (seenFunctionResponseNames.has(part.functionResponse.name)) return false;
					seenFunctionResponseNames.add(part.functionResponse.name);
				}
				return true;
			});
		}
		return merged;
	}
	mapCommonOptionsToGemini(options) {
		const { thinkingConfig, ...modelOpts } = options.modelOptions ?? {};
		const mappedThinkingConfig = thinkingConfig ? {
			...thinkingConfig.includeThoughts !== void 0 && { includeThoughts: thinkingConfig.includeThoughts },
			...thinkingConfig.thinkingBudget !== void 0 && { thinkingBudget: thinkingConfig.thinkingBudget },
			...thinkingConfig.thinkingLevel ? { thinkingLevel: thinkingConfig.thinkingLevel } : {}
		} : void 0;
		const normalizedPrompts = normalizeSystemPrompts(options.systemPrompts);
		const systemInstruction = normalizedPrompts.length > 0 ? normalizedPrompts.map((p) => p.content).join("\n") : void 0;
		const combinedSchema = options.outputSchema;
		const combinedSchemaConfig = combinedSchema ? {
			responseMimeType: "application/json",
			responseSchema: combinedSchema
		} : void 0;
		return {
			model: options.model,
			contents: this.formatMessages(options.messages),
			config: {
				...modelOpts,
				...mappedThinkingConfig !== void 0 && { thinkingConfig: mappedThinkingConfig },
				...systemInstruction !== void 0 && { systemInstruction },
				tools: convertToolsToProviderFormat(options.tools),
				...combinedSchemaConfig ?? {}
			}
		};
	}
	/**
	* Gemini 3.x natively combines `tools` + `responseSchema` in a single
	* streaming `generateContentStream` call (issue #605). Gemini 2.x is
	* documented as brittle for the combination and keeps the engine's
	* legacy finalization path.
	*/
	supportsCombinedToolsAndSchema() {
		return GEMINI_COMBINED_TOOLS_AND_SCHEMA_MODELS.has(this.model);
	}
};
function createGeminiChat(model, apiKey, config) {
	return new GeminiTextAdapter({
		apiKey,
		...config
	}, model);
}
function geminiText(model, config) {
	return createGeminiChat(model, getGeminiApiKeyFromEnv(), config);
}
//#endregion
export { geminiText as t };
