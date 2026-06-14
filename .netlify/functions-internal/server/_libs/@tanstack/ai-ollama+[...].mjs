import { a as normalizeSystemPrompts, n as BaseTextAdapter, o as buildBaseUsage } from "./ai+[...].mjs";
import { t as EventType } from "../ag-ui__core+zod.mjs";
import { r as generateId$1 } from "./ai-anthropic+[...].mjs";
import fs, { promises } from "node:fs";
import { resolve } from "node:path";
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/usage.js
function buildOllamaUsage(response) {
	const promptTokens = response.prompt_eval_count || 0;
	const completionTokens = response.eval_count || 0;
	const hasTokenCounts = promptTokens > 0 || completionTokens > 0;
	const result = buildBaseUsage({
		promptTokens,
		completionTokens,
		totalTokens: promptTokens + completionTokens
	});
	const providerDetails = {
		...response.load_duration ? { loadDuration: response.load_duration } : {},
		...response.prompt_eval_duration ? { promptEvalDuration: response.prompt_eval_duration } : {},
		...response.eval_duration ? { evalDuration: response.eval_duration } : {},
		...response.total_duration ? { totalDuration: response.total_duration } : {}
	};
	const hasProviderDetails = Object.keys(providerDetails).length > 0;
	if (hasProviderDetails) result.providerUsageDetails = providerDetails;
	if (!hasTokenCounts && !hasProviderDetails) return;
	return result;
}
//#endregion
//#region node_modules/.pnpm/whatwg-fetch@3.6.20/node_modules/whatwg-fetch/fetch.js
var g = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global || {};
var support = {
	searchParams: "URLSearchParams" in g,
	iterable: "Symbol" in g && "iterator" in Symbol,
	blob: "FileReader" in g && "Blob" in g && (function() {
		try {
			new Blob();
			return true;
		} catch (e) {
			return false;
		}
	})(),
	formData: "FormData" in g,
	arrayBuffer: "ArrayBuffer" in g
};
function isDataView(obj) {
	return obj && DataView.prototype.isPrototypeOf(obj);
}
if (support.arrayBuffer) {
	var viewClasses = [
		"[object Int8Array]",
		"[object Uint8Array]",
		"[object Uint8ClampedArray]",
		"[object Int16Array]",
		"[object Uint16Array]",
		"[object Int32Array]",
		"[object Uint32Array]",
		"[object Float32Array]",
		"[object Float64Array]"
	];
	var isArrayBufferView = ArrayBuffer.isView || function(obj) {
		return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	};
}
function normalizeName(name) {
	if (typeof name !== "string") name = String(name);
	if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") throw new TypeError("Invalid character in header field name: \"" + name + "\"");
	return name.toLowerCase();
}
function normalizeValue(value) {
	if (typeof value !== "string") value = String(value);
	return value;
}
function iteratorFor(items) {
	var iterator = { next: function() {
		var value = items.shift();
		return {
			done: value === void 0,
			value
		};
	} };
	if (support.iterable) iterator[Symbol.iterator] = function() {
		return iterator;
	};
	return iterator;
}
function Headers$1(headers) {
	this.map = {};
	if (headers instanceof Headers$1) headers.forEach(function(value, name) {
		this.append(name, value);
	}, this);
	else if (Array.isArray(headers)) headers.forEach(function(header) {
		if (header.length != 2) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
		this.append(header[0], header[1]);
	}, this);
	else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
		this.append(name, headers[name]);
	}, this);
}
Headers$1.prototype.append = function(name, value) {
	name = normalizeName(name);
	value = normalizeValue(value);
	var oldValue = this.map[name];
	this.map[name] = oldValue ? oldValue + ", " + value : value;
};
Headers$1.prototype["delete"] = function(name) {
	delete this.map[normalizeName(name)];
};
Headers$1.prototype.get = function(name) {
	name = normalizeName(name);
	return this.has(name) ? this.map[name] : null;
};
Headers$1.prototype.has = function(name) {
	return this.map.hasOwnProperty(normalizeName(name));
};
Headers$1.prototype.set = function(name, value) {
	this.map[normalizeName(name)] = normalizeValue(value);
};
Headers$1.prototype.forEach = function(callback, thisArg) {
	for (var name in this.map) if (this.map.hasOwnProperty(name)) callback.call(thisArg, this.map[name], name, this);
};
Headers$1.prototype.keys = function() {
	var items = [];
	this.forEach(function(value, name) {
		items.push(name);
	});
	return iteratorFor(items);
};
Headers$1.prototype.values = function() {
	var items = [];
	this.forEach(function(value) {
		items.push(value);
	});
	return iteratorFor(items);
};
Headers$1.prototype.entries = function() {
	var items = [];
	this.forEach(function(value, name) {
		items.push([name, value]);
	});
	return iteratorFor(items);
};
if (support.iterable) Headers$1.prototype[Symbol.iterator] = Headers$1.prototype.entries;
function consumed(body) {
	if (body._noBody) return;
	if (body.bodyUsed) return Promise.reject(/* @__PURE__ */ new TypeError("Already read"));
	body.bodyUsed = true;
}
function fileReaderReady(reader) {
	return new Promise(function(resolve, reject) {
		reader.onload = function() {
			resolve(reader.result);
		};
		reader.onerror = function() {
			reject(reader.error);
		};
	});
}
function readBlobAsArrayBuffer(blob) {
	var reader = new FileReader();
	var promise = fileReaderReady(reader);
	reader.readAsArrayBuffer(blob);
	return promise;
}
function readBlobAsText(blob) {
	var reader = new FileReader();
	var promise = fileReaderReady(reader);
	var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
	var encoding = match ? match[1] : "utf-8";
	reader.readAsText(blob, encoding);
	return promise;
}
function readArrayBufferAsText(buf) {
	var view = new Uint8Array(buf);
	var chars = new Array(view.length);
	for (var i = 0; i < view.length; i++) chars[i] = String.fromCharCode(view[i]);
	return chars.join("");
}
function bufferClone(buf) {
	if (buf.slice) return buf.slice(0);
	else {
		var view = new Uint8Array(buf.byteLength);
		view.set(new Uint8Array(buf));
		return view.buffer;
	}
}
function Body() {
	this.bodyUsed = false;
	this._initBody = function(body) {
		this.bodyUsed = this.bodyUsed;
		this._bodyInit = body;
		if (!body) {
			this._noBody = true;
			this._bodyText = "";
		} else if (typeof body === "string") this._bodyText = body;
		else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
		else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
		else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this._bodyText = body.toString();
		else if (support.arrayBuffer && support.blob && isDataView(body)) {
			this._bodyArrayBuffer = bufferClone(body.buffer);
			this._bodyInit = new Blob([this._bodyArrayBuffer]);
		} else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) this._bodyArrayBuffer = bufferClone(body);
		else this._bodyText = body = Object.prototype.toString.call(body);
		if (!this.headers.get("content-type")) {
			if (typeof body === "string") this.headers.set("content-type", "text/plain;charset=UTF-8");
			else if (this._bodyBlob && this._bodyBlob.type) this.headers.set("content-type", this._bodyBlob.type);
			else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
		}
	};
	if (support.blob) this.blob = function() {
		var rejected = consumed(this);
		if (rejected) return rejected;
		if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
		else if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
		else if (this._bodyFormData) throw new Error("could not read FormData body as blob");
		else return Promise.resolve(new Blob([this._bodyText]));
	};
	this.arrayBuffer = function() {
		if (this._bodyArrayBuffer) {
			var isConsumed = consumed(this);
			if (isConsumed) return isConsumed;
			else if (ArrayBuffer.isView(this._bodyArrayBuffer)) return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
			else return Promise.resolve(this._bodyArrayBuffer);
		} else if (support.blob) return this.blob().then(readBlobAsArrayBuffer);
		else throw new Error("could not read as ArrayBuffer");
	};
	this.text = function() {
		var rejected = consumed(this);
		if (rejected) return rejected;
		if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
		else if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
		else if (this._bodyFormData) throw new Error("could not read FormData body as text");
		else return Promise.resolve(this._bodyText);
	};
	if (support.formData) this.formData = function() {
		return this.text().then(decode);
	};
	this.json = function() {
		return this.text().then(JSON.parse);
	};
	return this;
}
var methods = [
	"CONNECT",
	"DELETE",
	"GET",
	"HEAD",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
	"TRACE"
];
function normalizeMethod(method) {
	var upcased = method.toUpperCase();
	return methods.indexOf(upcased) > -1 ? upcased : method;
}
function Request(input, options) {
	if (!(this instanceof Request)) throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
	options = options || {};
	var body = options.body;
	if (input instanceof Request) {
		if (input.bodyUsed) throw new TypeError("Already read");
		this.url = input.url;
		this.credentials = input.credentials;
		if (!options.headers) this.headers = new Headers$1(input.headers);
		this.method = input.method;
		this.mode = input.mode;
		this.signal = input.signal;
		if (!body && input._bodyInit != null) {
			body = input._bodyInit;
			input.bodyUsed = true;
		}
	} else this.url = String(input);
	this.credentials = options.credentials || this.credentials || "same-origin";
	if (options.headers || !this.headers) this.headers = new Headers$1(options.headers);
	this.method = normalizeMethod(options.method || this.method || "GET");
	this.mode = options.mode || this.mode || null;
	this.signal = options.signal || this.signal || function() {
		if ("AbortController" in g) return new AbortController().signal;
	}();
	this.referrer = null;
	if ((this.method === "GET" || this.method === "HEAD") && body) throw new TypeError("Body not allowed for GET or HEAD requests");
	this._initBody(body);
	if (this.method === "GET" || this.method === "HEAD") {
		if (options.cache === "no-store" || options.cache === "no-cache") {
			var reParamSearch = /([?&])_=[^&]*/;
			if (reParamSearch.test(this.url)) this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
			else {
				var reQueryString = /\?/;
				this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
			}
		}
	}
}
Request.prototype.clone = function() {
	return new Request(this, { body: this._bodyInit });
};
function decode(body) {
	var form = new FormData();
	body.trim().split("&").forEach(function(bytes) {
		if (bytes) {
			var split = bytes.split("=");
			var name = split.shift().replace(/\+/g, " ");
			var value = split.join("=").replace(/\+/g, " ");
			form.append(decodeURIComponent(name), decodeURIComponent(value));
		}
	});
	return form;
}
function parseHeaders(rawHeaders) {
	var headers = new Headers$1();
	rawHeaders.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(header) {
		return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
	}).forEach(function(line) {
		var parts = line.split(":");
		var key = parts.shift().trim();
		if (key) {
			var value = parts.join(":").trim();
			try {
				headers.append(key, value);
			} catch (error) {
				console.warn("Response " + error.message);
			}
		}
	});
	return headers;
}
Body.call(Request.prototype);
function Response(bodyInit, options) {
	if (!(this instanceof Response)) throw new TypeError("Please use the \"new\" operator, this DOM object constructor cannot be called as a function.");
	if (!options) options = {};
	this.type = "default";
	this.status = options.status === void 0 ? 200 : options.status;
	if (this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
	this.ok = this.status >= 200 && this.status < 300;
	this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
	this.headers = new Headers$1(options.headers);
	this.url = options.url || "";
	this._initBody(bodyInit);
}
Body.call(Response.prototype);
Response.prototype.clone = function() {
	return new Response(this._bodyInit, {
		status: this.status,
		statusText: this.statusText,
		headers: new Headers$1(this.headers),
		url: this.url
	});
};
Response.error = function() {
	var response = new Response(null, {
		status: 200,
		statusText: ""
	});
	response.ok = false;
	response.status = 0;
	response.type = "error";
	return response;
};
var redirectStatuses = [
	301,
	302,
	303,
	307,
	308
];
Response.redirect = function(url, status) {
	if (redirectStatuses.indexOf(status) === -1) throw new RangeError("Invalid status code");
	return new Response(null, {
		status,
		headers: { location: url }
	});
};
var DOMException = g.DOMException;
try {
	new DOMException();
} catch (err) {
	DOMException = function(message, name) {
		this.message = message;
		this.name = name;
		var error = Error(message);
		this.stack = error.stack;
	};
	DOMException.prototype = Object.create(Error.prototype);
	DOMException.prototype.constructor = DOMException;
}
function fetch$1(input, init) {
	return new Promise(function(resolve, reject) {
		var request = new Request(input, init);
		if (request.signal && request.signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
		var xhr = new XMLHttpRequest();
		function abortXhr() {
			xhr.abort();
		}
		xhr.onload = function() {
			var options = {
				statusText: xhr.statusText,
				headers: parseHeaders(xhr.getAllResponseHeaders() || "")
			};
			if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) options.status = 200;
			else options.status = xhr.status;
			options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
			var body = "response" in xhr ? xhr.response : xhr.responseText;
			setTimeout(function() {
				resolve(new Response(body, options));
			}, 0);
		};
		xhr.onerror = function() {
			setTimeout(function() {
				reject(/* @__PURE__ */ new TypeError("Network request failed"));
			}, 0);
		};
		xhr.ontimeout = function() {
			setTimeout(function() {
				reject(/* @__PURE__ */ new TypeError("Network request timed out"));
			}, 0);
		};
		xhr.onabort = function() {
			setTimeout(function() {
				reject(new DOMException("Aborted", "AbortError"));
			}, 0);
		};
		function fixUrl(url) {
			try {
				return url === "" && g.location.href ? g.location.href : url;
			} catch (e) {
				return url;
			}
		}
		xhr.open(request.method, fixUrl(request.url), true);
		if (request.credentials === "include") xhr.withCredentials = true;
		else if (request.credentials === "omit") xhr.withCredentials = false;
		if ("responseType" in xhr) {
			if (support.blob) xhr.responseType = "blob";
			else if (support.arrayBuffer) xhr.responseType = "arraybuffer";
		}
		if (init && typeof init.headers === "object" && !(init.headers instanceof Headers$1 || g.Headers && init.headers instanceof g.Headers)) {
			var names = [];
			Object.getOwnPropertyNames(init.headers).forEach(function(name) {
				names.push(normalizeName(name));
				xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
			});
			request.headers.forEach(function(value, name) {
				if (names.indexOf(name) === -1) xhr.setRequestHeader(name, value);
			});
		} else request.headers.forEach(function(value, name) {
			xhr.setRequestHeader(name, value);
		});
		if (request.signal) {
			request.signal.addEventListener("abort", abortXhr);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) request.signal.removeEventListener("abort", abortXhr);
			};
		}
		xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
	});
}
fetch$1.polyfill = true;
if (!g.fetch) {
	g.fetch = fetch$1;
	g.Headers = Headers$1;
	g.Request = Request;
	g.Response = Response;
}
//#endregion
//#region node_modules/.pnpm/ollama@0.6.3/node_modules/ollama/dist/browser.mjs
var defaultPort = "11434";
var defaultHost = `http://127.0.0.1:${defaultPort}`;
var version = "0.6.3";
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
	__defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var ResponseError = class ResponseError extends Error {
	constructor(error, status_code) {
		super(error);
		this.error = error;
		this.status_code = status_code;
		this.name = "ResponseError";
		if (Error.captureStackTrace) Error.captureStackTrace(this, ResponseError);
	}
};
var AbortableAsyncIterator = class {
	constructor(abortController, itr, doneCallback) {
		__publicField$1(this, "abortController");
		__publicField$1(this, "itr");
		__publicField$1(this, "doneCallback");
		this.abortController = abortController;
		this.itr = itr;
		this.doneCallback = doneCallback;
	}
	abort() {
		this.abortController.abort();
	}
	async *[Symbol.asyncIterator]() {
		for await (const message of this.itr) {
			if ("error" in message) throw new Error(message.error);
			yield message;
			if (message.done || message.status === "success") {
				this.doneCallback();
				return;
			}
		}
		throw new Error("Did not receive done or success response in stream.");
	}
};
var checkOk = async (response) => {
	if (response.ok) return;
	let message = `Error ${response.status}: ${response.statusText}`;
	let errorData = null;
	if (response.headers.get("content-type")?.includes("application/json")) try {
		errorData = await response.json();
		message = errorData.error || message;
	} catch (error) {
		console.log("Failed to parse error response as JSON");
	}
	else try {
		console.log("Getting text from response");
		message = await response.text() || message;
	} catch (error) {
		console.log("Failed to get text from error response");
	}
	throw new ResponseError(message, response.status);
};
function getPlatform() {
	if (typeof window !== "undefined" && window.navigator) {
		const nav = navigator;
		if ("userAgentData" in nav && nav.userAgentData?.platform) return `${nav.userAgentData.platform.toLowerCase()} Browser/${navigator.userAgent};`;
		if (navigator.platform) return `${navigator.platform.toLowerCase()} Browser/${navigator.userAgent};`;
		return `unknown Browser/${navigator.userAgent};`;
	} else if (typeof process !== "undefined") return `${process.arch} ${process.platform} Node.js/${process.version}`;
	return "";
}
function normalizeHeaders(headers) {
	if (headers instanceof Headers) {
		const obj = {};
		headers.forEach((value, key) => {
			obj[key] = value;
		});
		return obj;
	} else if (Array.isArray(headers)) return Object.fromEntries(headers);
	else return headers || {};
}
var readEnvVar = (obj, key) => {
	return obj[key];
};
var fetchWithHeaders = async (fetch, url, options = {}) => {
	const defaultHeaders = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"User-Agent": `ollama-js/${version} (${getPlatform()})`
	};
	options.headers = normalizeHeaders(options.headers);
	try {
		const parsed = new URL(url);
		if (parsed.protocol === "https:" && parsed.hostname === "ollama.com") {
			const apiKey = typeof process === "object" && process !== null && typeof process.env === "object" && process.env !== null ? readEnvVar(process.env, "OLLAMA_API_KEY") : void 0;
			if (!(options.headers["authorization"] || options.headers["Authorization"]) && apiKey) options.headers["Authorization"] = `Bearer ${apiKey}`;
		}
	} catch (error) {
		console.error("error parsing url", error);
	}
	const customHeaders = Object.fromEntries(Object.entries(options.headers).filter(([key]) => !Object.keys(defaultHeaders).some((defaultKey) => defaultKey.toLowerCase() === key.toLowerCase())));
	options.headers = {
		...defaultHeaders,
		...customHeaders
	};
	return fetch(url, options);
};
var get = async (fetch, host, options) => {
	const response = await fetchWithHeaders(fetch, host, { headers: options?.headers });
	await checkOk(response);
	return response;
};
var post = async (fetch, host, data, options) => {
	const isRecord = (input) => {
		return input !== null && typeof input === "object" && !Array.isArray(input);
	};
	const response = await fetchWithHeaders(fetch, host, {
		method: "POST",
		body: isRecord(data) ? JSON.stringify(data) : data,
		signal: options?.signal,
		headers: options?.headers
	});
	await checkOk(response);
	return response;
};
var del = async (fetch, host, data, options) => {
	const response = await fetchWithHeaders(fetch, host, {
		method: "DELETE",
		body: JSON.stringify(data),
		headers: options?.headers
	});
	await checkOk(response);
	return response;
};
var parseJSON = async function* (itr) {
	const decoder = new TextDecoder("utf-8");
	let buffer = "";
	const reader = itr.getReader();
	while (true) {
		const { done, value: chunk } = await reader.read();
		if (done) break;
		buffer += decoder.decode(chunk, { stream: true });
		const parts = buffer.split("\n");
		buffer = parts.pop() ?? "";
		for (const part of parts) try {
			yield JSON.parse(part);
		} catch (error) {
			console.warn("invalid json: ", part);
		}
	}
	buffer += decoder.decode();
	for (const part of buffer.split("\n").filter((p) => p !== "")) try {
		yield JSON.parse(part);
	} catch (error) {
		console.warn("invalid json: ", part);
	}
};
var formatHost = (host) => {
	if (!host) return defaultHost;
	let isExplicitProtocol = host.includes("://");
	if (host.startsWith(":")) {
		host = `http://127.0.0.1${host}`;
		isExplicitProtocol = true;
	}
	if (!isExplicitProtocol) host = `http://${host}`;
	const url = new URL(host);
	let port = url.port;
	if (!port) if (!isExplicitProtocol) port = defaultPort;
	else port = url.protocol === "https:" ? "443" : "80";
	let auth = "";
	if (url.username) {
		auth = url.username;
		if (url.password) auth += `:${url.password}`;
		auth += "@";
	}
	let formattedHost = `${url.protocol}//${auth}${url.hostname}:${port}${url.pathname}`;
	if (formattedHost.endsWith("/")) formattedHost = formattedHost.slice(0, -1);
	return formattedHost;
};
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var Ollama$1 = class Ollama {
	constructor(config) {
		__publicField(this, "config");
		__publicField(this, "fetch");
		__publicField(this, "ongoingStreamedRequests", []);
		this.config = {
			host: "",
			headers: config?.headers
		};
		if (!config?.proxy) this.config.host = formatHost(config?.host ?? defaultHost);
		this.fetch = config?.fetch ?? fetch;
	}
	abort() {
		for (const request of this.ongoingStreamedRequests) request.abort();
		this.ongoingStreamedRequests.length = 0;
	}
	/**
	* Processes a request to the Ollama server. If the request is streamable, it will return a
	* AbortableAsyncIterator that yields the response messages. Otherwise, it will return the response
	* object.
	* @param endpoint {string} - The endpoint to send the request to.
	* @param request {object} - The request object to send to the endpoint.
	* @protected {T | AbortableAsyncIterator<T>} - The response object or a AbortableAsyncIterator that yields
	* response messages.
	* @throws {Error} - If the response body is missing or if the response is an error.
	* @returns {Promise<T | AbortableAsyncIterator<T>>} - The response object or a AbortableAsyncIterator that yields the streamed response.
	*/
	async processStreamableRequest(endpoint, request) {
		request.stream = request.stream ?? false;
		const host = `${this.config.host}/api/${endpoint}`;
		if (request.stream) {
			const abortController = new AbortController();
			const response2 = await post(this.fetch, host, request, {
				signal: abortController.signal,
				headers: this.config.headers
			});
			if (!response2.body) throw new Error("Missing body");
			const abortableAsyncIterator = new AbortableAsyncIterator(abortController, parseJSON(response2.body), () => {
				const i = this.ongoingStreamedRequests.indexOf(abortableAsyncIterator);
				if (i > -1) this.ongoingStreamedRequests.splice(i, 1);
			});
			this.ongoingStreamedRequests.push(abortableAsyncIterator);
			return abortableAsyncIterator;
		}
		return await (await post(this.fetch, host, request, { headers: this.config.headers })).json();
	}
	/**
	* Encodes an image to base64 if it is a Uint8Array.
	* @param image {Uint8Array | string} - The image to encode.
	* @returns {Promise<string>} - The base64 encoded image.
	*/
	async encodeImage(image) {
		if (typeof image !== "string") {
			const uint8Array = new Uint8Array(image);
			let byteString = "";
			const len = uint8Array.byteLength;
			for (let i = 0; i < len; i++) byteString += String.fromCharCode(uint8Array[i]);
			return btoa(byteString);
		}
		return image;
	}
	/**
	* Generates a response from a text prompt.
	* @param request {GenerateRequest} - The request object.
	* @returns {Promise<GenerateResponse | AbortableAsyncIterator<GenerateResponse>>} - The response object or
	* an AbortableAsyncIterator that yields response messages.
	*/
	async generate(request) {
		if (request.images) request.images = await Promise.all(request.images.map(this.encodeImage.bind(this)));
		return this.processStreamableRequest("generate", request);
	}
	/**
	* Chats with the model. The request object can contain messages with images that are either
	* Uint8Arrays or base64 encoded strings. The images will be base64 encoded before sending the
	* request.
	* @param request {ChatRequest} - The request object.
	* @returns {Promise<ChatResponse | AbortableAsyncIterator<ChatResponse>>} - The response object or an
	* AbortableAsyncIterator that yields response messages.
	*/
	async chat(request) {
		if (request.messages) {
			for (const message of request.messages) if (message.images) message.images = await Promise.all(message.images.map(this.encodeImage.bind(this)));
		}
		return this.processStreamableRequest("chat", request);
	}
	/**
	* Creates a new model from a stream of data.
	* @param request {CreateRequest} - The request object.
	* @returns {Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>} - The response object or a stream of progress responses.
	*/
	async create(request) {
		return this.processStreamableRequest("create", { ...request });
	}
	/**
	* Pulls a model from the Ollama registry. The request object can contain a stream flag to indicate if the
	* response should be streamed.
	* @param request {PullRequest} - The request object.
	* @returns {Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>} - The response object or
	* an AbortableAsyncIterator that yields response messages.
	*/
	async pull(request) {
		return this.processStreamableRequest("pull", {
			name: request.model,
			stream: request.stream,
			insecure: request.insecure
		});
	}
	/**
	* Pushes a model to the Ollama registry. The request object can contain a stream flag to indicate if the
	* response should be streamed.
	* @param request {PushRequest} - The request object.
	* @returns {Promise<ProgressResponse | AbortableAsyncIterator<ProgressResponse>>} - The response object or
	* an AbortableAsyncIterator that yields response messages.
	*/
	async push(request) {
		return this.processStreamableRequest("push", {
			name: request.model,
			stream: request.stream,
			insecure: request.insecure
		});
	}
	/**
	* Deletes a model from the server. The request object should contain the name of the model to
	* delete.
	* @param request {DeleteRequest} - The request object.
	* @returns {Promise<StatusResponse>} - The response object.
	*/
	async delete(request) {
		await del(this.fetch, `${this.config.host}/api/delete`, { name: request.model }, { headers: this.config.headers });
		return { status: "success" };
	}
	/**
	* Copies a model from one name to another. The request object should contain the name of the
	* model to copy and the new name.
	* @param request {CopyRequest} - The request object.
	* @returns {Promise<StatusResponse>} - The response object.
	*/
	async copy(request) {
		await post(this.fetch, `${this.config.host}/api/copy`, { ...request }, { headers: this.config.headers });
		return { status: "success" };
	}
	/**
	* Lists the models on the server.
	* @returns {Promise<ListResponse>} - The response object.
	* @throws {Error} - If the response body is missing.
	*/
	async list() {
		return await (await get(this.fetch, `${this.config.host}/api/tags`, { headers: this.config.headers })).json();
	}
	/**
	* Shows the metadata of a model. The request object should contain the name of the model.
	* @param request {ShowRequest} - The request object.
	* @returns {Promise<ShowResponse>} - The response object.
	*/
	async show(request) {
		return await (await post(this.fetch, `${this.config.host}/api/show`, { ...request }, { headers: this.config.headers })).json();
	}
	/**
	* Embeds text input into vectors.
	* @param request {EmbedRequest} - The request object.
	* @returns {Promise<EmbedResponse>} - The response object.
	*/
	async embed(request) {
		return await (await post(this.fetch, `${this.config.host}/api/embed`, { ...request }, { headers: this.config.headers })).json();
	}
	/**
	* Embeds a text prompt into a vector.
	* @param request {EmbeddingsRequest} - The request object.
	* @returns {Promise<EmbeddingsResponse>} - The response object.
	*/
	async embeddings(request) {
		return await (await post(this.fetch, `${this.config.host}/api/embeddings`, { ...request }, { headers: this.config.headers })).json();
	}
	/**
	* Lists the running models on the server
	* @returns {Promise<ListResponse>} - The response object.
	* @throws {Error} - If the response body is missing.
	*/
	async ps() {
		return await (await get(this.fetch, `${this.config.host}/api/ps`, { headers: this.config.headers })).json();
	}
	/**
	* Returns the Ollama server version.
	* @returns {Promise<VersionResponse>} - The server version object.
	*/
	async version() {
		return await (await get(this.fetch, `${this.config.host}/api/version`, { headers: this.config.headers })).json();
	}
	/**
	* Performs web search using the Ollama web search API
	* @param request {WebSearchRequest} - The search request containing query and options
	* @returns {Promise<WebSearchResponse>} - The search results
	* @throws {Error} - If the request is invalid or the server returns an error
	*/
	async webSearch(request) {
		if (!request.query || request.query.length === 0) throw new Error("Query is required");
		return await (await post(this.fetch, `https://ollama.com/api/web_search`, { ...request }, { headers: this.config.headers })).json();
	}
	/**
	* Fetches a single page using the Ollama web fetch API
	* @param request {WebFetchRequest} - The fetch request containing a URL
	* @returns {Promise<WebFetchResponse>} - The fetch result
	* @throws {Error} - If the request is invalid or the server returns an error
	*/
	async webFetch(request) {
		if (!request.url || request.url.length === 0) throw new Error("URL is required");
		return await (await post(this.fetch, `https://ollama.com/api/web_fetch`, { ...request }, { headers: this.config.headers })).json();
	}
};
new Ollama$1();
//#endregion
//#region node_modules/.pnpm/ollama@0.6.3/node_modules/ollama/dist/index.mjs
var Ollama = class extends Ollama$1 {
	async encodeImage(image) {
		if (typeof image !== "string") return Buffer.from(image).toString("base64");
		try {
			if (fs.existsSync(image)) {
				const fileBuffer = await promises.readFile(resolve(image));
				return Buffer.from(fileBuffer).toString("base64");
			}
		} catch {}
		return image;
	}
	/**
	* checks if a file exists
	* @param path {string} - The path to the file
	* @private @internal
	* @returns {Promise<boolean>} - Whether the file exists or not
	*/
	async fileExists(path) {
		try {
			await promises.access(path);
			return true;
		} catch {
			return false;
		}
	}
	async create(request) {
		if (request.from && await this.fileExists(resolve(request.from))) throw Error("Creating with a local path is not currently supported from ollama-js");
		if (request.stream) return super.create(request);
		else return super.create(request);
	}
};
new Ollama();
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/utils/client.js
function createOllamaClient(config = {}) {
	return new Ollama({
		host: config.host || "http://localhost:11434",
		headers: config.headers
	});
}
function getOllamaHostFromEnv() {
	return (typeof globalThis !== "undefined" && globalThis.window ? globalThis.window.env : typeof process !== "undefined" ? process.env : void 0)?.["OLLAMA_HOST"] || "http://localhost:11434";
}
function generateId(prefix = "msg") {
	return generateId$1(prefix);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/tools/function-tool.js
function convertFunctionToolToAdapterFormat(tool) {
	const inputSchema = tool.inputSchema ?? {
		type: "object",
		properties: {},
		required: []
	};
	return {
		type: "function",
		function: {
			name: tool.name,
			description: tool.description,
			parameters: inputSchema
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/tools/tool-converter.js
function convertToolsToProviderFormat(tools) {
	if (!tools || tools.length === 0) return;
	return tools.map((tool) => convertFunctionToolToAdapterFormat(tool));
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/adapters/text.js
var OllamaTextAdapter = class extends BaseTextAdapter {
	kind = "text";
	name = "ollama";
	client;
	constructor(hostOrClientOrConfig, model) {
		super({}, model);
		if (typeof hostOrClientOrConfig === "string" || hostOrClientOrConfig === void 0) this.client = createOllamaClient({ host: hostOrClientOrConfig });
		else if ("chat" in hostOrClientOrConfig) this.client = hostOrClientOrConfig;
		else this.client = createOllamaClient(hostOrClientOrConfig);
	}
	async *chatStream(options) {
		const mappedOptions = this.mapCommonOptionsToOllama(options);
		const { logger } = options;
		try {
			logger.request(`activity=chat provider=ollama model=${this.model} messages=${options.messages.length} tools=${options.tools?.length ?? 0} stream=true`, {
				provider: "ollama",
				model: this.model
			});
			const response = await this.client.chat({
				...mappedOptions,
				stream: true
			});
			yield* this.processOllamaStreamChunks(response, options, logger);
		} catch (error) {
			logger.errors("ollama.chatStream fatal", {
				error,
				source: "ollama.chatStream"
			});
			throw error;
		}
	}
	/**
	* Generate structured output using Ollama's JSON format option.
	* Uses format: 'json' with the schema to ensure structured output.
	* The outputSchema is already JSON Schema (converted in the ai layer).
	*/
	async structuredOutput(options) {
		const { chatOptions, outputSchema } = options;
		const { logger } = chatOptions;
		const mappedOptions = this.mapCommonOptionsToOllama(chatOptions);
		try {
			logger.request(`activity=chat provider=ollama model=${this.model} messages=${chatOptions.messages.length} tools=${chatOptions.tools?.length ?? 0} stream=false`, {
				provider: "ollama",
				model: this.model
			});
			const response = await this.client.chat({
				...mappedOptions,
				stream: false,
				format: outputSchema
			});
			const rawText = response.message.content;
			let parsed;
			try {
				parsed = JSON.parse(rawText);
			} catch {
				throw new Error(`Failed to parse structured output as JSON. Content: ${rawText.slice(0, 200)}${rawText.length > 200 ? "..." : ""}`);
			}
			return {
				data: parsed,
				rawText,
				usage: buildOllamaUsage(response)
			};
		} catch (error) {
			const err = error;
			logger.errors("ollama.structuredOutput fatal", {
				error,
				source: "ollama.structuredOutput"
			});
			throw new Error(`Structured output generation failed: ${err.message || "Unknown error occurred"}`);
		}
	}
	async *processOllamaStreamChunks(stream, options, logger) {
		let accumulatedContent = "";
		let accumulatedReasoning = "";
		const toolCallsEmitted = /* @__PURE__ */ new Set();
		const runId = options.runId ?? generateId("run");
		const threadId = options.threadId ?? generateId("thread");
		const messageId = generateId("msg");
		let stepId = null;
		let reasoningMessageId = null;
		let hasClosedReasoning = false;
		let hasEmittedRunStarted = false;
		let hasEmittedTextMessageStart = false;
		let hasEmittedStepStarted = false;
		for await (const chunk of stream) {
			logger.provider(`provider=ollama`, { chunk });
			if (!hasEmittedRunStarted) {
				hasEmittedRunStarted = true;
				yield {
					type: EventType.RUN_STARTED,
					runId,
					threadId,
					model: chunk.model,
					timestamp: Date.now(),
					parentRunId: options.parentRunId
				};
			}
			const handleToolCall = (toolCall) => {
				const actualToolCall = toolCall;
				const toolCallId = actualToolCall.id || `${actualToolCall.function.name}_${Date.now()}`;
				const events = [];
				if (!toolCallsEmitted.has(toolCallId)) {
					toolCallsEmitted.add(toolCallId);
					events.push({
						type: EventType.TOOL_CALL_START,
						toolCallId,
						toolCallName: actualToolCall.function.name || "",
						toolName: actualToolCall.function.name || "",
						model: chunk.model,
						timestamp: Date.now(),
						index: actualToolCall.function.index
					});
				}
				let parsedInput = {};
				const argsStr = typeof actualToolCall.function.arguments === "string" ? actualToolCall.function.arguments : JSON.stringify(actualToolCall.function.arguments);
				try {
					const parsed = JSON.parse(argsStr);
					parsedInput = parsed && typeof parsed === "object" ? parsed : {};
				} catch {
					parsedInput = actualToolCall.function.arguments;
				}
				events.push({
					type: EventType.TOOL_CALL_ARGS,
					toolCallId,
					model: chunk.model,
					timestamp: Date.now(),
					delta: argsStr,
					args: argsStr
				});
				events.push({
					type: EventType.TOOL_CALL_END,
					toolCallId,
					toolCallName: actualToolCall.function.name || "",
					toolName: actualToolCall.function.name || "",
					model: chunk.model,
					timestamp: Date.now(),
					input: parsedInput
				});
				return events;
			};
			if (chunk.done) {
				if (chunk.message.tool_calls && chunk.message.tool_calls.length > 0) for (const toolCall of chunk.message.tool_calls) {
					const events = handleToolCall(toolCall);
					for (const event of events) yield event;
				}
				if (reasoningMessageId && !hasClosedReasoning) {
					hasClosedReasoning = true;
					yield {
						type: EventType.REASONING_MESSAGE_END,
						messageId: reasoningMessageId,
						model: chunk.model,
						timestamp: Date.now()
					};
					yield {
						type: EventType.REASONING_END,
						messageId: reasoningMessageId,
						model: chunk.model,
						timestamp: Date.now()
					};
				}
				if (hasEmittedTextMessageStart) yield {
					type: EventType.TEXT_MESSAGE_END,
					messageId,
					model: chunk.model,
					timestamp: Date.now()
				};
				const finishUsage = buildOllamaUsage(chunk);
				yield {
					type: EventType.RUN_FINISHED,
					runId,
					threadId,
					model: chunk.model,
					timestamp: Date.now(),
					finishReason: toolCallsEmitted.size > 0 ? "tool_calls" : "stop",
					...finishUsage && { usage: finishUsage }
				};
				continue;
			}
			if (chunk.message.content) {
				if (reasoningMessageId && !hasClosedReasoning) {
					hasClosedReasoning = true;
					yield {
						type: EventType.REASONING_MESSAGE_END,
						messageId: reasoningMessageId,
						model: chunk.model,
						timestamp: Date.now()
					};
					yield {
						type: EventType.REASONING_END,
						messageId: reasoningMessageId,
						model: chunk.model,
						timestamp: Date.now()
					};
				}
				if (!hasEmittedTextMessageStart) {
					hasEmittedTextMessageStart = true;
					yield {
						type: EventType.TEXT_MESSAGE_START,
						messageId,
						model: chunk.model,
						timestamp: Date.now(),
						role: "assistant"
					};
				}
				accumulatedContent += chunk.message.content;
				yield {
					type: EventType.TEXT_MESSAGE_CONTENT,
					messageId,
					model: chunk.model,
					timestamp: Date.now(),
					delta: chunk.message.content,
					content: accumulatedContent
				};
			}
			if (chunk.message.tool_calls && chunk.message.tool_calls.length > 0) for (const toolCall of chunk.message.tool_calls) {
				const events = handleToolCall(toolCall);
				for (const event of events) yield event;
			}
			if (chunk.message.thinking) {
				if (!hasEmittedStepStarted) {
					hasEmittedStepStarted = true;
					stepId = generateId("step");
					reasoningMessageId = generateId("msg");
					yield {
						type: EventType.REASONING_START,
						messageId: reasoningMessageId,
						model: chunk.model,
						timestamp: Date.now()
					};
					yield {
						type: EventType.REASONING_MESSAGE_START,
						messageId: reasoningMessageId,
						role: "reasoning",
						model: chunk.model,
						timestamp: Date.now()
					};
					yield {
						type: EventType.STEP_STARTED,
						stepName: stepId,
						stepId,
						model: chunk.model,
						timestamp: Date.now(),
						stepType: "thinking"
					};
				}
				accumulatedReasoning += chunk.message.thinking;
				if (reasoningMessageId) yield {
					type: EventType.REASONING_MESSAGE_CONTENT,
					messageId: reasoningMessageId,
					delta: chunk.message.thinking,
					model: chunk.model,
					timestamp: Date.now()
				};
				yield {
					type: EventType.STEP_FINISHED,
					stepName: stepId || generateId("step"),
					stepId: stepId || generateId("step"),
					model: chunk.model,
					timestamp: Date.now(),
					delta: chunk.message.thinking,
					content: accumulatedReasoning
				};
			}
		}
	}
	convertToolsToOllamaFormat(tools) {
		return convertToolsToProviderFormat(tools);
	}
	formatMessages(messages) {
		return messages.map((msg) => {
			let textContent = "";
			const images = [];
			if (Array.isArray(msg.content)) {
				for (const part of msg.content) if (part.type === "text") textContent += part.content;
				else if (part.type === "image") if (part.source.type === "data") images.push(part.source.value);
				else images.push(part.source.value);
			} else textContent = msg.content || "";
			const hasToolCallId = msg.role === "tool" && msg.toolCallId;
			return {
				role: hasToolCallId ? "tool" : msg.role,
				content: hasToolCallId ? typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content) : textContent,
				...images.length > 0 ? { images } : {},
				...msg.role === "assistant" && msg.toolCalls && msg.toolCalls.length > 0 ? { tool_calls: msg.toolCalls.map((toolCall) => {
					let parsedArguments = {};
					if (typeof toolCall.function.arguments === "string") try {
						parsedArguments = JSON.parse(toolCall.function.arguments);
					} catch {
						parsedArguments = {};
					}
					else parsedArguments = {};
					return {
						id: toolCall.id,
						type: toolCall.type,
						function: {
							name: toolCall.function.name,
							arguments: parsedArguments
						}
					};
				}) } : {}
			};
		});
	}
	mapCommonOptionsToOllama(options) {
		const model = options.model;
		const modelOptions = options.modelOptions;
		const formattedMessages = this.formatMessages(options.messages);
		const prompts = normalizeSystemPrompts(options.systemPrompts);
		if (prompts.length > 0) formattedMessages.unshift({
			role: "system",
			content: prompts.map((p) => p.content).join("\n")
		});
		const convertedTools = this.convertToolsToOllamaFormat(options.tools);
		return {
			model,
			messages: formattedMessages,
			options: { ...modelOptions?.options },
			...modelOptions?.format !== void 0 && { format: modelOptions.format },
			...modelOptions?.keep_alive !== void 0 && { keep_alive: modelOptions.keep_alive },
			...modelOptions?.logprobs !== void 0 && { logprobs: modelOptions.logprobs },
			...modelOptions?.top_logprobs !== void 0 && { top_logprobs: modelOptions.top_logprobs },
			...modelOptions && "think" in modelOptions && modelOptions.think !== void 0 ? { think: modelOptions.think } : {},
			...convertedTools !== void 0 && { tools: convertedTools }
		};
	}
};
function ollamaText(model) {
	return new OllamaTextAdapter(getOllamaHostFromEnv(), model);
}
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-athene.js
var ATHENE_MODELS = [{ name: "athene-v2:latest" }.name, { name: "athene-v2:72b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-aya.js
var AYA_MODELS = [
	{ name: "aya:latest" }.name,
	{ name: "aya:8b" }.name,
	{ name: "aya:35b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-codegemma.js
var CODEGEMMA_MODELS = [
	{ name: "codegemma:latest" }.name,
	{ name: "codegemma:2b" }.name,
	{ name: "codegemma:7b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-codellama.js
var CODELLAMA_MODELS = [
	{ name: "codellama:latest" }.name,
	{ name: "codellama:7b" }.name,
	{ name: "codellama:13b" }.name,
	{ name: "codellama:34b" }.name,
	{ name: "codellama:70b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-command-r.js
var COMMAND_R_MODELS = [{ name: "command-r:latest" }.name, { name: "command-r:35b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-command-r-plus.js
var COMMAND_R_PLUS_MODELS = [{ name: "command-r-plus:latest" }.name, { name: "command-r-plus:104b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-command-r7b.js
var COMMAND_R_7b_MODELS = [{ name: "command-r7b:latest" }.name, { name: "command-r7b:7b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-deepseek-coder-v2.js
var DEEPSEEK_CODER_V2_MODELS = [
	{ name: "deepseek-coder-v2:latest" }.name,
	{ name: "deepseek-coder-v2:16b" }.name,
	{ name: "deepseek-coder-v2:236b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-deepseek-ocr.js
var DEEPSEEK_OCR_MODELS = [{ name: "deepseek-ocr:latest" }.name, { name: "deepseek-ocr:3b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-deepseek-r1.js
var DEEPSEEK_R1_MODELS = [
	{ name: "deepseek-r1:latest" }.name,
	{ name: "deepseek-r1:1.5b" }.name,
	{ name: "deepseek-r1:7b" }.name,
	{ name: "deepseek-r1:8b" }.name,
	{ name: "deepseek-r1:32b" }.name,
	{ name: "deepseek-r1:70b" }.name,
	{ name: "deepseek-r1:671b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-deepseek-v3.1.js
var DEEPSEEK_V3_1_MODELS = [
	{ name: "deepseek-v3.1:latest" }.name,
	{ name: "deepseek-v3.1:671b" }.name,
	{ name: "deepseek-v3.1:671b-cloud" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-devstral.js
var DEVSTRAL_MODELS = [{ name: "devstral:latest" }.name, { name: "devstral:24b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-dolphin3.js
var DOLPHIN3_MODELS = [{ name: "dolphin3:latest" }.name, { name: "dolphin3:8b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-exaone3.5.js
var EXAONE3_5MODELS = [
	{ name: "exaone3.5:latest" }.name,
	{ name: "exaone3.5:2.4b" }.name,
	{ name: "exaone3.5:7.8b" }.name,
	{ name: "exaone3.5:32b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-falcon2.js
var FALCON2_MODELS = [{ name: "falcon2:latest" }.name, { name: "falcon2:11b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-falcon3.js
var FALCON3_MODELS = [
	{ name: "falcon3:latest" }.name,
	{ name: "falcon3:1b" }.name,
	{ name: "falcon3:3b" }.name,
	{ name: "falcon3:7b" }.name,
	{ name: "falcon3:10b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-firefunction-v2.js
var FIREFUNCTION_V2_MODELS = [{ name: "firefunction-v2:latest" }.name, { name: "firefunction-v2:70b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-gemma.js
var GEMMA_MODELS = [
	{ name: "gemma:latest" }.name,
	{ name: "gemma:2b" }.name,
	{ name: "gemma:7b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-gemma2.js
var GEMMA2_MODELS = [
	{ name: "gemma2:latest" }.name,
	{ name: "gemma2:2b" }.name,
	{ name: "gemma2:9b" }.name,
	{ name: "gemma2:27b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-gemma3.js
var GEMMA3_MODELS = [
	{ name: "gemma3:latest" }.name,
	{ name: "gemma3:270m" }.name,
	{ name: "gemma3:1b" }.name,
	{ name: "gemma3:4b" }.name,
	{ name: "gemma3:12b" }.name,
	{ name: "gemma3:27b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-gpt-oss.js
var GPT_OSS_MODELS = [
	{ name: "gpt-oss:latest" }.name,
	{ name: "gpt-oss:20b" }.name,
	{ name: "gpt-oss:120b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-granite3-dense.js
var GRANITE3_DENSE_MODELS = [
	{ name: "granite3-dense:latest" }.name,
	{ name: "granite3-dense:2b" }.name,
	{ name: "granite3-dense:8b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-granite3-guardian.js
var GRANITE3_GUARDIAN_MODELS = [
	{ name: "granite3-guardian:latest" }.name,
	{ name: "granite3-guardian:2b" }.name,
	{ name: "granite3-guardian:8b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-granite3-moe.js
var GRANITE3_MOE_MODELS = [
	{ name: "granite3-moe:latest" }.name,
	{ name: "granite3-moe:1b" }.name,
	{ name: "granite3-moe:3b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-granite3.1-dense.js
var GRANITE3_1_DENSE_MODELS = [
	{ name: "granite3.1-dense:latest" }.name,
	{ name: "granite3.1-dense:2b" }.name,
	{ name: "granite3.1-dense:8b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-granite3.1-moe.js
var GRANITE3_1_MOE_MODELS = [
	{ name: "granite3.1-moe:latest" }.name,
	{ name: "granite3.1-moe:1b" }.name,
	{ name: "granite3.1-moe:3b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama-guard3.js
var LLAMA_GUARD3_MODELS = [
	{ name: "llama-guard3:latest" }.name,
	{ name: "llama-guard3:1b" }.name,
	{ name: "llama-guard3:8b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama2.js
var LLAMA2_MODELS = [
	{ name: "llama2:latest" }.name,
	{ name: "llama2:7b" }.name,
	{ name: "llama2:13b" }.name,
	{ name: "llama2:70b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3.js
var LLAMA3_MODELS = [
	{ name: "llama3:latest" }.name,
	{ name: "llama3:8b" }.name,
	{ name: "llama3:70b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3-chatqa.js
var LLAMA3_CHATQA_MODELS = [
	{ name: "llama3-chatqa:latest" }.name,
	{ name: "llama3-chatqa:8b" }.name,
	{ name: "llama3-chatqa:70b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3-gradient.js
var LLAMA3_GRADIENT_MODELS = [
	{ name: "llama3-gradient:latest" }.name,
	{ name: "llama3-gradient:8b" }.name,
	{ name: "llama3-gradient:70b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3.1.js
var LLAMA3_1_MODELS = [
	{ name: "llama3.1:latest" }.name,
	{ name: "llama3.1:8b" }.name,
	{ name: "llama3.1:70b" }.name,
	{ name: "llama3.1:405b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3.2.js
var LLAMA3_2_MODELS = [
	{ name: "llama3.2:latest" }.name,
	{ name: "llama3.2:1b" }.name,
	{ name: "llama3.2:3b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3.2-vision.js
var LLAMA3_2_VISION_MODELS = [
	{ name: "llama3.2:latest" }.name,
	{ name: "llama3.2:11b" }.name,
	{ name: "llama3.2:90b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama3.3.js
var LLAMA3_3_MODELS = [{ name: "llama3.3:latest" }.name, { name: "llama3.3:70b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llama4.js
var LLAMA4_MODELS = [
	{ name: "llama4:latest" }.name,
	{ name: "llama4:16x17b" }.name,
	{ name: "llama4:128x17b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llava.js
var LLAVA_MODELS = [
	{ name: "llava:latest" }.name,
	{ name: "llava:7b" }.name,
	{ name: "llava:13b" }.name,
	{ name: "llava:34b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llava-llama3.js
var LLAVA_LLAMA3_MODELS = [{ name: "llava-llama3:latest" }.name, { name: "llava-llama3:8b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-llava-phi3.js
var LLAVA_PHI3_MODELS = [{ name: "llava-phi3:latest" }.name, { name: "llava-phi3:8b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-marco-o1.js
var MARCO_O1_MODELS = [{ name: "marco-o1:latest" }.name, { name: "marco-o1:7b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-mistral.js
var MISTRAL_MODELS = [{ name: "mistral:latest" }.name, { name: "mistral:7b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-mistral-large.js
var MISTRAL_LARGE_MODELS = [{ name: "mistral-large:latest" }.name, { name: "mistral-large:123b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-mistral-nemo.js
var MISTRAL_NEMO_MODELS = [{ name: "mistral-nemo:latest" }.name, { name: "mistral-nemo:12b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-mistral-small.js
var MISTRAL_SMALL_MODELS = [
	{ name: "mistral-small:latest" }.name,
	{ name: "mistral-small:22b" }.name,
	{ name: "mistral-small:24b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-mixtral.js
var MIXTRAL_MODELS = [
	{ name: "mixtral:latest" }.name,
	{ name: "mixtral:8x7b" }.name,
	{ name: "mixtral:8x22b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-moondream.js
var MOONDREAM_MODELS = [{ name: "moondream:latest" }.name, { name: "moondream:1.8b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-nemotron.js
var NEMOTRON_MODELS = [{ name: "nemotron:latest" }.name, { name: "nemotron:70b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-nemotron-mini.js
var NEMOTRON_MINI_MODELS = [{ name: "nemotron-mini:latest" }.name, { name: "nemotron-mini:4b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-olmo2.js
var OLMO2_MODELS = [
	{ name: "olmo2:latest" }.name,
	{ name: "olmo2:7b" }.name,
	{ name: "olmo2:13b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-opencoder.js
var OPENCODER_MODELS = [
	{ name: "opencoder:latest" }.name,
	{ name: "opencoder:1.5b" }.name,
	{ name: "opencoder:8b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-openhermes.js
var OPENHERMES_MODELS = [
	{ name: "openhermes:latest" }.name,
	{ name: "openhermes:v2" }.name,
	{ name: "openhermes:v2.5" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-phi3.js
var PHI3_MODELS = [
	{ name: "phi3:latest" }.name,
	{ name: "phi3:8b" }.name,
	{ name: "phi3:14b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-phi4.js
var PHI4_MODELS = [{ name: "phi4:latest" }.name, { name: "phi4:14b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-qwen.js
var QWEN_MODELS = [
	{ name: "qwen:latest" }.name,
	{ name: "qwen:0.5b" }.name,
	{ name: "qwen:1.8b" }.name,
	{ name: "qwen:4b" }.name,
	{ name: "qwen:7b" }.name,
	{ name: "qwen:14b" }.name,
	{ name: "qwen:32b" }.name,
	{ name: "qwen:72b" }.name,
	{ name: "qwen:110b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-qwen2.js
var QWEN2_MODELS = [
	{ name: "qwen2:latest" }.name,
	{ name: "qwen2:0.5b" }.name,
	{ name: "qwen2:1.5b" }.name,
	{ name: "qwen2:7b" }.name,
	{ name: "qwen2:72b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-qwen2.5.js
var QWEN2_5_MODELS = [
	{ name: "qwen2.5:latest" }.name,
	{ name: "qwen2.5:0.5b" }.name,
	{ name: "qwen2.5:1.5b" }.name,
	{ name: "qwen2.5:3b" }.name,
	{ name: "qwen2.5:7b" }.name,
	{ name: "qwen2.5:32b" }.name,
	{ name: "qwen2.5:72b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-qwen2.5-coder.js
var QWEN2_5_CODER_MODELS = [
	{ name: "qwen2.5-coder:latest" }.name,
	{ name: "qwen2.5-coder:0.5b" }.name,
	{ name: "qwen2.5-coder:1.5b" }.name,
	{ name: "qwen2.5-coder:3b" }.name,
	{ name: "qwen2.5-coder:7b" }.name,
	{ name: "qwen2.5-coder:14b" }.name,
	{ name: "qwen2.5-coder:32b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-qwen3.js
var QWEN3_MODELS = [
	{ name: "qwen3:latest" }.name,
	{ name: "qwen3:0.6b" }.name,
	{ name: "qwen3:1.7b" }.name,
	{ name: "qwen3:4b" }.name,
	{ name: "qwen3:8b" }.name,
	{ name: "qwen3:14b" }.name,
	{ name: "qwen3:30b" }.name,
	{ name: "qwen3:32b" }.name,
	{ name: "qwen3:235b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-qwq.js
var QWQ_MODELS = [{ name: "qwq:latest" }.name, { name: "qwq:32b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-sailor2.js
var SAILOR2_MODELS = [
	{ name: "sailor2:latest" }.name,
	{ name: "sailor2:8b" }.name,
	{ name: "sailor2:20b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-shieldgemma.js
var SHIELDGEMMA_MODELS = [
	{ name: "shieldgemma:latest" }.name,
	{ name: "shieldgemma:2b" }.name,
	{ name: "shieldgemma:9b" }.name,
	{ name: "shieldgemma:27b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-smalltinker.js
var SMALLTINKER_MODELS = [{ name: "smalltinker:latest" }.name, { name: "smalltinker:3b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-smollm.js
var SMOLLM_MODELS = [
	{ name: "smollm:latest" }.name,
	{ name: "smollm:135m" }.name,
	{ name: "smollm:360m" }.name,
	{ name: "smollm:1.7b" }.name
];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-tinyllama.js
var TINYLLAMA_MODELS = [{ name: "tinyllama:latest" }.name, { name: "tinyllama:1.1b" }.name];
//#endregion
//#region node_modules/.pnpm/@tanstack+ai-ollama@0.8.1_@tanstack+ai@0.28.0/node_modules/@tanstack/ai-ollama/dist/esm/meta/model-meta-tulu3.js
var TULU3_MODELS = [
	{ name: "tulu3:latest" }.name,
	{ name: "tulu3:8b" }.name,
	{ name: "tulu3:70b" }.name
];
[
	...ATHENE_MODELS,
	...AYA_MODELS,
	...CODEGEMMA_MODELS,
	...CODELLAMA_MODELS,
	...COMMAND_R_PLUS_MODELS,
	...COMMAND_R_MODELS,
	...COMMAND_R_7b_MODELS,
	...DEEPSEEK_CODER_V2_MODELS,
	...DEEPSEEK_OCR_MODELS,
	...DEEPSEEK_R1_MODELS,
	...DEEPSEEK_V3_1_MODELS,
	...DEVSTRAL_MODELS,
	...DOLPHIN3_MODELS,
	...EXAONE3_5MODELS,
	...FALCON2_MODELS,
	...FALCON3_MODELS,
	...FIREFUNCTION_V2_MODELS,
	...GEMMA_MODELS,
	...GEMMA2_MODELS,
	...GEMMA3_MODELS,
	...GPT_OSS_MODELS,
	...GRANITE3_DENSE_MODELS,
	...GRANITE3_GUARDIAN_MODELS,
	...GRANITE3_MOE_MODELS,
	...GRANITE3_1_DENSE_MODELS,
	...GRANITE3_1_MOE_MODELS,
	...LLAMA_GUARD3_MODELS,
	...LLAMA2_MODELS,
	...LLAMA3_CHATQA_MODELS,
	...LLAMA3_GRADIENT_MODELS,
	...LLAMA3_1_MODELS,
	...LLAMA3_2_MODELS,
	...LLAMA3_2_VISION_MODELS,
	...LLAMA3_3_MODELS,
	...LLAMA3_MODELS,
	...LLAMA4_MODELS,
	...LLAVA_LLAMA3_MODELS,
	...LLAVA_PHI3_MODELS,
	...LLAVA_MODELS,
	...MARCO_O1_MODELS,
	...MISTRAL_LARGE_MODELS,
	...MISTRAL_NEMO_MODELS,
	...MISTRAL_SMALL_MODELS,
	...MISTRAL_MODELS,
	...MIXTRAL_MODELS,
	...MOONDREAM_MODELS,
	...NEMOTRON_MINI_MODELS,
	...NEMOTRON_MODELS,
	...OLMO2_MODELS,
	...OPENCODER_MODELS,
	...OPENHERMES_MODELS,
	...PHI3_MODELS,
	...PHI4_MODELS,
	...QWEN_MODELS,
	...QWEN2_5_CODER_MODELS,
	...QWEN2_5_MODELS,
	...QWEN2_MODELS,
	...QWEN3_MODELS,
	...QWQ_MODELS,
	...SAILOR2_MODELS,
	...SHIELDGEMMA_MODELS,
	...SMALLTINKER_MODELS,
	...SMOLLM_MODELS,
	...TINYLLAMA_MODELS,
	...TULU3_MODELS
];
//#endregion
export { ollamaText as t };
