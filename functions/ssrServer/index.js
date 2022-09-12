var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};

// node_modules/undici/lib/core/symbols.js
var require_symbols = __commonJS({
  "node_modules/undici/lib/core/symbols.js"(exports, module2) {
    init_shims();
    module2.exports = {
      kClose: Symbol("close"),
      kDestroy: Symbol("destroy"),
      kDispatch: Symbol("dispatch"),
      kUrl: Symbol("url"),
      kWriting: Symbol("writing"),
      kResuming: Symbol("resuming"),
      kQueue: Symbol("queue"),
      kConnect: Symbol("connect"),
      kConnecting: Symbol("connecting"),
      kHeadersList: Symbol("headers list"),
      kKeepAliveDefaultTimeout: Symbol("default keep alive timeout"),
      kKeepAliveMaxTimeout: Symbol("max keep alive timeout"),
      kKeepAliveTimeoutThreshold: Symbol("keep alive timeout threshold"),
      kKeepAliveTimeoutValue: Symbol("keep alive timeout"),
      kKeepAlive: Symbol("keep alive"),
      kHeadersTimeout: Symbol("headers timeout"),
      kBodyTimeout: Symbol("body timeout"),
      kServerName: Symbol("server name"),
      kHost: Symbol("host"),
      kNoRef: Symbol("no ref"),
      kBodyUsed: Symbol("used"),
      kRunning: Symbol("running"),
      kBlocking: Symbol("blocking"),
      kPending: Symbol("pending"),
      kSize: Symbol("size"),
      kBusy: Symbol("busy"),
      kQueued: Symbol("queued"),
      kFree: Symbol("free"),
      kConnected: Symbol("connected"),
      kClosed: Symbol("closed"),
      kNeedDrain: Symbol("need drain"),
      kReset: Symbol("reset"),
      kDestroyed: Symbol("destroyed"),
      kMaxHeadersSize: Symbol("max headers size"),
      kRunningIdx: Symbol("running index"),
      kPendingIdx: Symbol("pending index"),
      kError: Symbol("error"),
      kClients: Symbol("clients"),
      kClient: Symbol("client"),
      kParser: Symbol("parser"),
      kOnDestroyed: Symbol("destroy callbacks"),
      kPipelining: Symbol("pipelinig"),
      kSocket: Symbol("socket"),
      kHostHeader: Symbol("host header"),
      kConnector: Symbol("connector"),
      kStrictContentLength: Symbol("strict content length"),
      kMaxRedirections: Symbol("maxRedirections"),
      kMaxRequests: Symbol("maxRequestsPerClient"),
      kProxy: Symbol("proxy agent options"),
      kCounter: Symbol("socket request counter")
    };
  }
});

// node_modules/undici/lib/core/errors.js
var require_errors = __commonJS({
  "node_modules/undici/lib/core/errors.js"(exports, module2) {
    "use strict";
    init_shims();
    var UndiciError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "UndiciError";
        this.code = "UND_ERR";
      }
    };
    var ConnectTimeoutError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ConnectTimeoutError);
        this.name = "ConnectTimeoutError";
        this.message = message || "Connect Timeout Error";
        this.code = "UND_ERR_CONNECT_TIMEOUT";
      }
    };
    var HeadersTimeoutError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, HeadersTimeoutError);
        this.name = "HeadersTimeoutError";
        this.message = message || "Headers Timeout Error";
        this.code = "UND_ERR_HEADERS_TIMEOUT";
      }
    };
    var HeadersOverflowError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, HeadersOverflowError);
        this.name = "HeadersOverflowError";
        this.message = message || "Headers Overflow Error";
        this.code = "UND_ERR_HEADERS_OVERFLOW";
      }
    };
    var BodyTimeoutError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, BodyTimeoutError);
        this.name = "BodyTimeoutError";
        this.message = message || "Body Timeout Error";
        this.code = "UND_ERR_BODY_TIMEOUT";
      }
    };
    var ResponseStatusCodeError = class extends UndiciError {
      constructor(message, statusCode, headers, body2) {
        super(message);
        Error.captureStackTrace(this, ResponseStatusCodeError);
        this.name = "ResponseStatusCodeError";
        this.message = message || "Response Status Code Error";
        this.code = "UND_ERR_RESPONSE_STATUS_CODE";
        this.body = body2;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers;
      }
    };
    var InvalidArgumentError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InvalidArgumentError);
        this.name = "InvalidArgumentError";
        this.message = message || "Invalid Argument Error";
        this.code = "UND_ERR_INVALID_ARG";
      }
    };
    var InvalidReturnValueError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InvalidReturnValueError);
        this.name = "InvalidReturnValueError";
        this.message = message || "Invalid Return Value Error";
        this.code = "UND_ERR_INVALID_RETURN_VALUE";
      }
    };
    var RequestAbortedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, RequestAbortedError);
        this.name = "AbortError";
        this.message = message || "Request aborted";
        this.code = "UND_ERR_ABORTED";
      }
    };
    var InformationalError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InformationalError);
        this.name = "InformationalError";
        this.message = message || "Request information";
        this.code = "UND_ERR_INFO";
      }
    };
    var RequestContentLengthMismatchError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, RequestContentLengthMismatchError);
        this.name = "RequestContentLengthMismatchError";
        this.message = message || "Request body length does not match content-length header";
        this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH";
      }
    };
    var ResponseContentLengthMismatchError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ResponseContentLengthMismatchError);
        this.name = "ResponseContentLengthMismatchError";
        this.message = message || "Response body length does not match content-length header";
        this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH";
      }
    };
    var ClientDestroyedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ClientDestroyedError);
        this.name = "ClientDestroyedError";
        this.message = message || "The client is destroyed";
        this.code = "UND_ERR_DESTROYED";
      }
    };
    var ClientClosedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ClientClosedError);
        this.name = "ClientClosedError";
        this.message = message || "The client is closed";
        this.code = "UND_ERR_CLOSED";
      }
    };
    var SocketError = class extends UndiciError {
      constructor(message, socket) {
        super(message);
        Error.captureStackTrace(this, SocketError);
        this.name = "SocketError";
        this.message = message || "Socket error";
        this.code = "UND_ERR_SOCKET";
        this.socket = socket;
      }
    };
    var NotSupportedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, NotSupportedError);
        this.name = "NotSupportedError";
        this.message = message || "Not supported error";
        this.code = "UND_ERR_NOT_SUPPORTED";
      }
    };
    var BalancedPoolMissingUpstreamError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, NotSupportedError);
        this.name = "MissingUpstreamError";
        this.message = message || "No upstream has been added to the BalancedPool";
        this.code = "UND_ERR_BPL_MISSING_UPSTREAM";
      }
    };
    var HTTPParserError = class extends Error {
      constructor(message, code, data) {
        super(message);
        Error.captureStackTrace(this, HTTPParserError);
        this.name = "HTTPParserError";
        this.code = code ? `HPE_${code}` : void 0;
        this.data = data ? data.toString() : void 0;
      }
    };
    module2.exports = {
      HTTPParserError,
      UndiciError,
      HeadersTimeoutError,
      HeadersOverflowError,
      BodyTimeoutError,
      RequestContentLengthMismatchError,
      ConnectTimeoutError,
      ResponseStatusCodeError,
      InvalidArgumentError,
      InvalidReturnValueError,
      RequestAbortedError,
      ClientDestroyedError,
      ClientClosedError,
      InformationalError,
      SocketError,
      NotSupportedError,
      ResponseContentLengthMismatchError,
      BalancedPoolMissingUpstreamError
    };
  }
});

// node_modules/undici/lib/core/util.js
var require_util = __commonJS({
  "node_modules/undici/lib/core/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var { kDestroyed, kBodyUsed } = require_symbols();
    var { IncomingMessage } = require("http");
    var stream = require("stream");
    var net = require("net");
    var { InvalidArgumentError } = require_errors();
    var { Blob: Blob3 } = require("buffer");
    var nodeUtil = require("util");
    function nop() {
    }
    function isStream(obj) {
      return obj && typeof obj.pipe === "function";
    }
    function isBlobLike(object) {
      return Blob3 && object instanceof Blob3 || object && typeof object === "object" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function buildURL(url, queryParams) {
      if (url.includes("?") || url.includes("#")) {
        throw new Error('Query params cannot be passed when url already contains "?" or "#".');
      }
      if (!isObject(queryParams)) {
        throw new Error("Query params must be an object");
      }
      const parts = [];
      for (let [key2, val] of Object.entries(queryParams)) {
        if (val === null || typeof val === "undefined") {
          continue;
        }
        if (!Array.isArray(val)) {
          val = [val];
        }
        for (const v of val) {
          if (isObject(v)) {
            throw new Error("Passing object as a query param is not supported, please serialize to string up-front");
          }
          parts.push(encode2(key2) + "=" + encode2(v));
        }
      }
      const serializedParams = parts.join("&");
      if (serializedParams) {
        url += "?" + serializedParams;
      }
      return url;
    }
    function parseURL(url) {
      if (typeof url === "string") {
        url = new URL(url);
      }
      if (!url || typeof url !== "object") {
        throw new InvalidArgumentError("invalid url");
      }
      if (url.port != null && url.port !== "" && !Number.isFinite(parseInt(url.port))) {
        throw new InvalidArgumentError("invalid port");
      }
      if (url.path != null && typeof url.path !== "string") {
        throw new InvalidArgumentError("invalid path");
      }
      if (url.pathname != null && typeof url.pathname !== "string") {
        throw new InvalidArgumentError("invalid pathname");
      }
      if (url.hostname != null && typeof url.hostname !== "string") {
        throw new InvalidArgumentError("invalid hostname");
      }
      if (url.origin != null && typeof url.origin !== "string") {
        throw new InvalidArgumentError("invalid origin");
      }
      if (!/^https?:/.test(url.origin || url.protocol)) {
        throw new InvalidArgumentError("invalid protocol");
      }
      if (!(url instanceof URL)) {
        const port = url.port != null ? url.port : url.protocol === "https:" ? 443 : 80;
        let origin = url.origin != null ? url.origin : `${url.protocol}//${url.hostname}:${port}`;
        let path = url.path != null ? url.path : `${url.pathname || ""}${url.search || ""}`;
        if (origin.endsWith("/")) {
          origin = origin.substring(0, origin.length - 1);
        }
        if (path && !path.startsWith("/")) {
          path = `/${path}`;
        }
        url = new URL(origin + path);
      }
      return url;
    }
    function parseOrigin(url) {
      url = parseURL(url);
      if (url.pathname !== "/" || url.search || url.hash) {
        throw new InvalidArgumentError("invalid url");
      }
      return url;
    }
    function getHostname(host) {
      if (host[0] === "[") {
        const idx2 = host.indexOf("]");
        assert(idx2 !== -1);
        return host.substr(1, idx2 - 1);
      }
      const idx = host.indexOf(":");
      if (idx === -1)
        return host;
      return host.substr(0, idx);
    }
    function getServerName(host) {
      if (!host) {
        return null;
      }
      assert.strictEqual(typeof host, "string");
      const servername = getHostname(host);
      if (net.isIP(servername)) {
        return "";
      }
      return servername;
    }
    function deepClone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    function isAsyncIterable(obj) {
      return !!(obj != null && typeof obj[Symbol.asyncIterator] === "function");
    }
    function isIterable(obj) {
      return !!(obj != null && (typeof obj[Symbol.iterator] === "function" || typeof obj[Symbol.asyncIterator] === "function"));
    }
    function bodyLength(body2) {
      if (body2 == null) {
        return 0;
      } else if (isStream(body2)) {
        const state = body2._readableState;
        return state && state.ended === true && Number.isFinite(state.length) ? state.length : null;
      } else if (isBlobLike(body2)) {
        return body2.size != null ? body2.size : null;
      } else if (isBuffer(body2)) {
        return body2.byteLength;
      }
      return null;
    }
    function isDestroyed(stream2) {
      return !stream2 || !!(stream2.destroyed || stream2[kDestroyed]);
    }
    function isReadableAborted(stream2) {
      const state = stream2 && stream2._readableState;
      return isDestroyed(stream2) && state && !state.endEmitted;
    }
    function destroy(stream2, err) {
      if (!isStream(stream2) || isDestroyed(stream2)) {
        return;
      }
      if (typeof stream2.destroy === "function") {
        if (Object.getPrototypeOf(stream2).constructor === IncomingMessage) {
          stream2.socket = null;
        }
        stream2.destroy(err);
      } else if (err) {
        process.nextTick((stream3, err2) => {
          stream3.emit("error", err2);
        }, stream2, err);
      }
      if (stream2.destroyed !== true) {
        stream2[kDestroyed] = true;
      }
    }
    var KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
    function parseKeepAliveTimeout(val) {
      const m2 = val.toString().match(KEEPALIVE_TIMEOUT_EXPR);
      return m2 ? parseInt(m2[1], 10) * 1e3 : null;
    }
    function parseHeaders(headers, obj = {}) {
      for (let i2 = 0; i2 < headers.length; i2 += 2) {
        const key2 = headers[i2].toString().toLowerCase();
        let val = obj[key2];
        if (!val) {
          if (Array.isArray(headers[i2 + 1])) {
            obj[key2] = headers[i2 + 1];
          } else {
            obj[key2] = headers[i2 + 1].toString();
          }
        } else {
          if (!Array.isArray(val)) {
            val = [val];
            obj[key2] = val;
          }
          val.push(headers[i2 + 1].toString());
        }
      }
      return obj;
    }
    function parseRawHeaders(headers) {
      return headers.map((header) => header.toString());
    }
    function isBuffer(buffer) {
      return buffer instanceof Uint8Array || Buffer.isBuffer(buffer);
    }
    function validateHandler(handler, method, upgrade) {
      if (!handler || typeof handler !== "object") {
        throw new InvalidArgumentError("handler must be an object");
      }
      if (typeof handler.onConnect !== "function") {
        throw new InvalidArgumentError("invalid onConnect method");
      }
      if (typeof handler.onError !== "function") {
        throw new InvalidArgumentError("invalid onError method");
      }
      if (typeof handler.onBodySent !== "function" && handler.onBodySent !== void 0) {
        throw new InvalidArgumentError("invalid onBodySent method");
      }
      if (upgrade || method === "CONNECT") {
        if (typeof handler.onUpgrade !== "function") {
          throw new InvalidArgumentError("invalid onUpgrade method");
        }
      } else {
        if (typeof handler.onHeaders !== "function") {
          throw new InvalidArgumentError("invalid onHeaders method");
        }
        if (typeof handler.onData !== "function") {
          throw new InvalidArgumentError("invalid onData method");
        }
        if (typeof handler.onComplete !== "function") {
          throw new InvalidArgumentError("invalid onComplete method");
        }
      }
    }
    function isDisturbed(body2) {
      return !!(body2 && (stream.isDisturbed ? stream.isDisturbed(body2) || body2[kBodyUsed] : body2[kBodyUsed] || body2.readableDidRead || body2._readableState && body2._readableState.dataEmitted || isReadableAborted(body2)));
    }
    function isErrored(body2) {
      return !!(body2 && (stream.isErrored ? stream.isErrored(body2) : /state: 'errored'/.test(
        nodeUtil.inspect(body2)
      )));
    }
    function isReadable(body2) {
      return !!(body2 && (stream.isReadable ? stream.isReadable(body2) : /state: 'readable'/.test(
        nodeUtil.inspect(body2)
      )));
    }
    function getSocketInfo(socket) {
      return {
        localAddress: socket.localAddress,
        localPort: socket.localPort,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
        remoteFamily: socket.remoteFamily,
        timeout: socket.timeout,
        bytesWritten: socket.bytesWritten,
        bytesRead: socket.bytesRead
      };
    }
    var ReadableStream3;
    function ReadableStreamFrom(iterable) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      if (ReadableStream3.from) {
        return ReadableStream3.from(iterable);
      }
      let iterator;
      return new ReadableStream3(
        {
          async start() {
            iterator = iterable[Symbol.asyncIterator]();
          },
          async pull(controller) {
            const { done, value } = await iterator.next();
            if (done) {
              queueMicrotask(() => {
                controller.close();
              });
            } else {
              const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
              controller.enqueue(new Uint8Array(buf));
            }
            return controller.desiredSize > 0;
          },
          async cancel(reason) {
            await iterator.return();
          }
        },
        0
      );
    }
    function isFormDataLike(chunk) {
      return chunk && chunk.constructor && chunk.constructor.name === "FormData";
    }
    var kEnumerableProperty = /* @__PURE__ */ Object.create(null);
    kEnumerableProperty.enumerable = true;
    module2.exports = {
      kEnumerableProperty,
      nop,
      isDisturbed,
      isErrored,
      isReadable,
      toUSVString: nodeUtil.toUSVString || ((val) => `${val}`),
      isReadableAborted,
      isBlobLike,
      parseOrigin,
      parseURL,
      getServerName,
      isStream,
      isIterable,
      isAsyncIterable,
      isDestroyed,
      parseRawHeaders,
      parseHeaders,
      parseKeepAliveTimeout,
      destroy,
      bodyLength,
      deepClone,
      ReadableStreamFrom,
      isBuffer,
      validateHandler,
      getSocketInfo,
      isFormDataLike,
      buildURL
    };
  }
});

// node_modules/undici/lib/fetch/constants.js
var require_constants = __commonJS({
  "node_modules/undici/lib/fetch/constants.js"(exports, module2) {
    "use strict";
    init_shims();
    var corsSafeListedMethods = ["GET", "HEAD", "POST"];
    var nullBodyStatus = [101, 204, 205, 304];
    var redirectStatus = [301, 302, 303, 307, 308];
    var referrerPolicy = [
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ];
    var requestRedirect = ["follow", "manual", "error"];
    var safeMethods = ["GET", "HEAD", "OPTIONS", "TRACE"];
    var requestMode = ["navigate", "same-origin", "no-cors", "cors"];
    var requestCredentials = ["omit", "same-origin", "include"];
    var requestCache = [
      "default",
      "no-store",
      "reload",
      "no-cache",
      "force-cache",
      "only-if-cached"
    ];
    var requestBodyHeader = [
      "content-encoding",
      "content-language",
      "content-location",
      "content-type"
    ];
    var forbiddenMethods = ["CONNECT", "TRACE", "TRACK"];
    var subresource = [
      "audio",
      "audioworklet",
      "font",
      "image",
      "manifest",
      "paintworklet",
      "script",
      "style",
      "track",
      "video",
      "xslt",
      ""
    ];
    var DOMException3 = globalThis.DOMException ?? (() => {
      try {
        atob("~");
      } catch (err) {
        return Object.getPrototypeOf(err).constructor;
      }
    })();
    module2.exports = {
      DOMException: DOMException3,
      subresource,
      forbiddenMethods,
      requestBodyHeader,
      referrerPolicy,
      requestRedirect,
      requestMode,
      requestCredentials,
      requestCache,
      redirectStatus,
      corsSafeListedMethods,
      nullBodyStatus,
      safeMethods
    };
  }
});

// node_modules/undici/lib/fetch/symbols.js
var require_symbols2 = __commonJS({
  "node_modules/undici/lib/fetch/symbols.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = {
      kUrl: Symbol("url"),
      kHeaders: Symbol("headers"),
      kSignal: Symbol("signal"),
      kState: Symbol("state"),
      kGuard: Symbol("guard"),
      kRealm: Symbol("realm")
    };
  }
});

// node_modules/undici/lib/fetch/webidl.js
var require_webidl = __commonJS({
  "node_modules/undici/lib/fetch/webidl.js"(exports, module2) {
    "use strict";
    init_shims();
    var { types: types3 } = require("util");
    var { hasOwn, toUSVString } = require_util2();
    var webidl = {};
    webidl.converters = {};
    webidl.util = {};
    webidl.errors = {};
    webidl.errors.exception = function(message) {
      throw new TypeError(`${message.header}: ${message.message}`);
    };
    webidl.errors.conversionFailed = function(context) {
      const plural = context.types.length === 1 ? "" : " one of";
      const message = `${context.argument} could not be converted to${plural}: ${context.types.join(", ")}.`;
      return webidl.errors.exception({
        header: context.prefix,
        message
      });
    };
    webidl.errors.invalidArgument = function(context) {
      return webidl.errors.exception({
        header: context.prefix,
        message: `"${context.value}" is an invalid ${context.type}.`
      });
    };
    webidl.util.Type = function(V) {
      switch (typeof V) {
        case "undefined":
          return "Undefined";
        case "boolean":
          return "Boolean";
        case "string":
          return "String";
        case "symbol":
          return "Symbol";
        case "number":
          return "Number";
        case "bigint":
          return "BigInt";
        case "function":
        case "object": {
          if (V === null) {
            return "Null";
          }
          return "Object";
        }
      }
    };
    webidl.util.ConvertToInt = function(V, bitLength, signedness, opts = {}) {
      let upperBound;
      let lowerBound;
      if (bitLength === 64) {
        upperBound = Math.pow(2, 53) - 1;
        if (signedness === "unsigned") {
          lowerBound = 0;
        } else {
          lowerBound = Math.pow(-2, 53) + 1;
        }
      } else if (signedness === "unsigned") {
        lowerBound = 0;
        upperBound = Math.pow(2, bitLength) - 1;
      } else {
        lowerBound = Math.pow(-2, bitLength) - 1;
        upperBound = Math.pow(2, bitLength - 1) - 1;
      }
      let x2 = Number(V);
      if (Object.is(-0, x2)) {
        x2 = 0;
      }
      if (opts.enforceRange === true) {
        if (Number.isNaN(x2) || x2 === Number.POSITIVE_INFINITY || x2 === Number.NEGATIVE_INFINITY) {
          webidl.errors.exception({
            header: "Integer conversion",
            message: `Could not convert ${V} to an integer.`
          });
        }
        x2 = webidl.util.IntegerPart(x2);
        if (x2 < lowerBound || x2 > upperBound) {
          webidl.errors.exception({
            header: "Integer conversion",
            message: `Value must be between ${lowerBound}-${upperBound}, got ${x2}.`
          });
        }
        return x2;
      }
      if (!Number.isNaN(x2) && opts.clamp === true) {
        x2 = Math.min(Math.max(x2, lowerBound), upperBound);
        if (Math.floor(x2) % 2 === 0) {
          x2 = Math.floor(x2);
        } else {
          x2 = Math.ceil(x2);
        }
        return x2;
      }
      if (Number.isNaN(x2) || Object.is(0, x2) || x2 === Number.POSITIVE_INFINITY || x2 === Number.NEGATIVE_INFINITY) {
        return 0;
      }
      x2 = webidl.util.IntegerPart(x2);
      x2 = x2 % Math.pow(2, bitLength);
      if (signedness === "signed" && x2 >= Math.pow(2, bitLength) - 1) {
        return x2 - Math.pow(2, bitLength);
      }
      return x2;
    };
    webidl.util.IntegerPart = function(n) {
      const r2 = Math.floor(Math.abs(n));
      if (n < 0) {
        return -1 * r2;
      }
      return r2;
    };
    webidl.sequenceConverter = function(converter) {
      return (V) => {
        var _a;
        if (webidl.util.Type(V) !== "Object") {
          webidl.errors.exception({
            header: "Sequence",
            message: `Value of type ${webidl.util.Type(V)} is not an Object.`
          });
        }
        const method = (_a = V == null ? void 0 : V[Symbol.iterator]) == null ? void 0 : _a.call(V);
        const seq = [];
        if (method === void 0 || typeof method.next !== "function") {
          webidl.errors.exception({
            header: "Sequence",
            message: "Object is not an iterator."
          });
        }
        while (true) {
          const { done, value } = method.next();
          if (done) {
            break;
          }
          seq.push(converter(value));
        }
        return seq;
      };
    };
    webidl.recordConverter = function(keyConverter, valueConverter) {
      return (V) => {
        const record = {};
        const type = webidl.util.Type(V);
        if (type === "Undefined" || type === "Null") {
          return record;
        }
        if (type !== "Object") {
          webidl.errors.exception({
            header: "Record",
            message: `Expected ${V} to be an Object type.`
          });
        }
        for (let [key2, value] of Object.entries(V)) {
          key2 = keyConverter(key2);
          value = valueConverter(value);
          record[key2] = value;
        }
        return record;
      };
    };
    webidl.interfaceConverter = function(i2) {
      return (V, opts = {}) => {
        if (opts.strict !== false && !(V instanceof i2)) {
          webidl.errors.exception({
            header: i2.name,
            message: `Expected ${V} to be an instance of ${i2.name}.`
          });
        }
        return V;
      };
    };
    webidl.dictionaryConverter = function(converters) {
      return (dictionary) => {
        const type = webidl.util.Type(dictionary);
        const dict = {};
        if (type !== "Null" && type !== "Undefined" && type !== "Object") {
          webidl.errors.exception({
            header: "Dictionary",
            message: `Expected ${dictionary} to be one of: Null, Undefined, Object.`
          });
        }
        for (const options2 of converters) {
          const { key: key2, defaultValue, required, converter } = options2;
          if (required === true) {
            if (!hasOwn(dictionary, key2)) {
              webidl.errors.exception({
                header: "Dictionary",
                message: `Missing required key "${key2}".`
              });
            }
          }
          let value = dictionary[key2];
          const hasDefault = hasOwn(options2, "defaultValue");
          if (hasDefault && value !== null) {
            value = value ?? defaultValue;
          }
          if (required || hasDefault || value !== void 0) {
            value = converter(value);
            if (options2.allowedValues && !options2.allowedValues.includes(value)) {
              webidl.errors.exception({
                header: "Dictionary",
                message: `${value} is not an accepted type. Expected one of ${options2.allowedValues.join(", ")}.`
              });
            }
            dict[key2] = value;
          }
        }
        return dict;
      };
    };
    webidl.nullableConverter = function(converter) {
      return (V) => {
        if (V === null) {
          return V;
        }
        return converter(V);
      };
    };
    webidl.converters.DOMString = function(V, opts = {}) {
      if (V === null && opts.legacyNullToEmptyString) {
        return "";
      }
      if (typeof V === "symbol") {
        throw new TypeError("Could not convert argument of type symbol to string.");
      }
      return String(V);
    };
    webidl.converters.ByteString = function(V) {
      const x2 = webidl.converters.DOMString(V);
      for (let index9 = 0; index9 < x2.length; index9++) {
        const charCode = x2.charCodeAt(index9);
        if (charCode > 255) {
          throw new TypeError(
            `Cannot convert argument to a ByteString because the character atindex ${index9} has a value of ${charCode} which is greater than 255.`
          );
        }
      }
      return x2;
    };
    webidl.converters.USVString = toUSVString;
    webidl.converters.boolean = function(V) {
      const x2 = Boolean(V);
      return x2;
    };
    webidl.converters.any = function(V) {
      return V;
    };
    webidl.converters["long long"] = function(V, opts) {
      const x2 = webidl.util.ConvertToInt(V, 64, "signed", opts);
      return x2;
    };
    webidl.converters["unsigned short"] = function(V) {
      const x2 = webidl.util.ConvertToInt(V, 16, "unsigned");
      return x2;
    };
    webidl.converters.ArrayBuffer = function(V, opts = {}) {
      if (webidl.util.Type(V) !== "Object" || !types3.isAnyArrayBuffer(V)) {
        webidl.errors.conversionFailed({
          prefix: `${V}`,
          argument: `${V}`,
          types: ["ArrayBuffer"]
        });
      }
      if (opts.allowShared === false && types3.isSharedArrayBuffer(V)) {
        webidl.errors.exception({
          header: "ArrayBuffer",
          message: "SharedArrayBuffer is not allowed."
        });
      }
      return V;
    };
    webidl.converters.TypedArray = function(V, T, opts = {}) {
      if (webidl.util.Type(V) !== "Object" || !types3.isTypedArray(V) || V.constructor.name !== T.name) {
        webidl.errors.conversionFailed({
          prefix: `${T.name}`,
          argument: `${V}`,
          types: [T.name]
        });
      }
      if (opts.allowShared === false && types3.isSharedArrayBuffer(V.buffer)) {
        webidl.errors.exception({
          header: "ArrayBuffer",
          message: "SharedArrayBuffer is not allowed."
        });
      }
      return V;
    };
    webidl.converters.DataView = function(V, opts = {}) {
      if (webidl.util.Type(V) !== "Object" || !types3.isDataView(V)) {
        webidl.errors.exception({
          header: "DataView",
          message: "Object is not a DataView."
        });
      }
      if (opts.allowShared === false && types3.isSharedArrayBuffer(V.buffer)) {
        webidl.errors.exception({
          header: "ArrayBuffer",
          message: "SharedArrayBuffer is not allowed."
        });
      }
      return V;
    };
    webidl.converters.BufferSource = function(V, opts = {}) {
      if (types3.isAnyArrayBuffer(V)) {
        return webidl.converters.ArrayBuffer(V, opts);
      }
      if (types3.isTypedArray(V)) {
        return webidl.converters.TypedArray(V, V.constructor);
      }
      if (types3.isDataView(V)) {
        return webidl.converters.DataView(V, opts);
      }
      throw new TypeError(`Could not convert ${V} to a BufferSource.`);
    };
    webidl.converters["sequence<ByteString>"] = webidl.sequenceConverter(
      webidl.converters.ByteString
    );
    webidl.converters["sequence<sequence<ByteString>>"] = webidl.sequenceConverter(
      webidl.converters["sequence<ByteString>"]
    );
    webidl.converters["record<ByteString, ByteString>"] = webidl.recordConverter(
      webidl.converters.ByteString,
      webidl.converters.ByteString
    );
    module2.exports = {
      webidl
    };
  }
});

// node_modules/undici/lib/fetch/file.js
var require_file = __commonJS({
  "node_modules/undici/lib/fetch/file.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Blob: Blob3 } = require("buffer");
    var { types: types3 } = require("util");
    var { kState } = require_symbols2();
    var { isBlobLike } = require_util2();
    var { webidl } = require_webidl();
    var File3 = class extends Blob3 {
      constructor(fileBits, fileName, options2 = {}) {
        if (arguments.length < 2) {
          throw new TypeError("2 arguments required");
        }
        fileBits = webidl.converters["sequence<BlobPart>"](fileBits);
        fileName = webidl.converters.USVString(fileName);
        options2 = webidl.converters.FilePropertyBag(options2);
        const n = fileName;
        const d = options2.lastModified;
        super(processBlobParts(fileBits, options2), { type: options2.type });
        this[kState] = {
          name: n,
          lastModified: d
        };
      }
      get name() {
        if (!(this instanceof File3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].name;
      }
      get lastModified() {
        if (!(this instanceof File3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].lastModified;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    var FileLike = class {
      constructor(blobLike, fileName, options2 = {}) {
        const n = fileName;
        const t2 = options2.type;
        const d = options2.lastModified ?? Date.now();
        this[kState] = {
          blobLike,
          name: n,
          type: t2,
          lastModified: d
        };
      }
      stream(...args) {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].blobLike.stream(...args);
      }
      arrayBuffer(...args) {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].blobLike.arrayBuffer(...args);
      }
      slice(...args) {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].blobLike.slice(...args);
      }
      text(...args) {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].blobLike.text(...args);
      }
      get size() {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].blobLike.size;
      }
      get type() {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].blobLike.type;
      }
      get name() {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].name;
      }
      get lastModified() {
        if (!(this instanceof FileLike)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    };
    webidl.converters.Blob = webidl.interfaceConverter(Blob3);
    webidl.converters.BlobPart = function(V, opts) {
      if (webidl.util.Type(V) === "Object") {
        if (isBlobLike(V)) {
          return webidl.converters.Blob(V, { strict: false });
        }
        return webidl.converters.BufferSource(V, opts);
      } else {
        return webidl.converters.USVString(V, opts);
      }
    };
    webidl.converters["sequence<BlobPart>"] = webidl.sequenceConverter(
      webidl.converters.BlobPart
    );
    webidl.converters.FilePropertyBag = webidl.dictionaryConverter([
      {
        key: "lastModified",
        converter: webidl.converters["long long"],
        get defaultValue() {
          return Date.now();
        }
      },
      {
        key: "type",
        converter: webidl.converters.DOMString,
        defaultValue: ""
      },
      {
        key: "endings",
        converter: (value) => {
          value = webidl.converters.DOMString(value);
          value = value.toLowerCase();
          if (value !== "native") {
            value = "transparent";
          }
          return value;
        },
        defaultValue: "transparent"
      }
    ]);
    function processBlobParts(parts, options2) {
      const bytes = [];
      for (const element of parts) {
        if (typeof element === "string") {
          let s3 = element;
          if (options2.endings === "native") {
            s3 = convertLineEndingsNative(s3);
          }
          bytes.push(new TextEncoder().encode(s3));
        } else if (types3.isAnyArrayBuffer(element) || types3.isTypedArray(element)) {
          if (!element.buffer) {
            bytes.push(new Uint8Array(element));
          } else {
            bytes.push(
              new Uint8Array(element.buffer, element.byteOffset, element.byteLength)
            );
          }
        } else if (isBlobLike(element)) {
          bytes.push(element);
        }
      }
      return bytes;
    }
    function convertLineEndingsNative(s3) {
      let nativeLineEnding = "\n";
      if (process.platform === "win32") {
        nativeLineEnding = "\r\n";
      }
      return s3.replace(/\r?\n/g, nativeLineEnding);
    }
    module2.exports = { File: File3, FileLike };
  }
});

// node_modules/undici/lib/fetch/util.js
var require_util2 = __commonJS({
  "node_modules/undici/lib/fetch/util.js"(exports, module2) {
    "use strict";
    init_shims();
    var { redirectStatus } = require_constants();
    var { performance: performance2 } = require("perf_hooks");
    var { isBlobLike, toUSVString, ReadableStreamFrom } = require_util();
    var assert = require("assert");
    var { isUint8Array } = require("util/types");
    var File3;
    var crypto3;
    try {
      crypto3 = require("crypto");
    } catch {
    }
    var badPorts = [
      "1",
      "7",
      "9",
      "11",
      "13",
      "15",
      "17",
      "19",
      "20",
      "21",
      "22",
      "23",
      "25",
      "37",
      "42",
      "43",
      "53",
      "69",
      "77",
      "79",
      "87",
      "95",
      "101",
      "102",
      "103",
      "104",
      "109",
      "110",
      "111",
      "113",
      "115",
      "117",
      "119",
      "123",
      "135",
      "137",
      "139",
      "143",
      "161",
      "179",
      "389",
      "427",
      "465",
      "512",
      "513",
      "514",
      "515",
      "526",
      "530",
      "531",
      "532",
      "540",
      "548",
      "554",
      "556",
      "563",
      "587",
      "601",
      "636",
      "989",
      "990",
      "993",
      "995",
      "1719",
      "1720",
      "1723",
      "2049",
      "3659",
      "4045",
      "5060",
      "5061",
      "6000",
      "6566",
      "6665",
      "6666",
      "6667",
      "6668",
      "6669",
      "6697",
      "10080"
    ];
    function responseURL(response) {
      const urlList = response.urlList;
      const length = urlList.length;
      return length === 0 ? null : urlList[length - 1].toString();
    }
    function responseLocationURL(response, requestFragment) {
      if (!redirectStatus.includes(response.status)) {
        return null;
      }
      let location = response.headersList.get("location");
      location = location ? new URL(location, responseURL(response)) : null;
      if (location && !location.hash) {
        location.hash = requestFragment;
      }
      return location;
    }
    function requestCurrentURL(request) {
      return request.urlList[request.urlList.length - 1];
    }
    function requestBadPort(request) {
      const url = requestCurrentURL(request);
      if (/^https?:/.test(url.protocol) && badPorts.includes(url.port)) {
        return "blocked";
      }
      return "allowed";
    }
    function isFileLike(object) {
      if (!File3) {
        File3 = require_file().File;
      }
      return object instanceof File3 || object && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(File)$/.test(object[Symbol.toStringTag]);
    }
    function isErrorLike(object) {
      var _a, _b;
      return object instanceof Error || (((_a = object == null ? void 0 : object.constructor) == null ? void 0 : _a.name) === "Error" || ((_b = object == null ? void 0 : object.constructor) == null ? void 0 : _b.name) === "DOMException");
    }
    function isValidReasonPhrase(statusText) {
      for (let i2 = 0; i2 < statusText.length; ++i2) {
        const c = statusText.charCodeAt(i2);
        if (!(c === 9 || c >= 32 && c <= 126 || c >= 128 && c <= 255)) {
          return false;
        }
      }
      return true;
    }
    function isTokenChar(c) {
      return !(c >= 127 || c <= 32 || c === "(" || c === ")" || c === "<" || c === ">" || c === "@" || c === "," || c === ";" || c === ":" || c === "\\" || c === '"' || c === "/" || c === "[" || c === "]" || c === "?" || c === "=" || c === "{" || c === "}");
    }
    function isValidHTTPToken(characters) {
      if (!characters || typeof characters !== "string") {
        return false;
      }
      for (let i2 = 0; i2 < characters.length; ++i2) {
        const c = characters.charCodeAt(i2);
        if (c > 127 || !isTokenChar(c)) {
          return false;
        }
      }
      return true;
    }
    function isValidHeaderName(potentialValue) {
      if (potentialValue.length === 0) {
        return false;
      }
      for (const char of potentialValue) {
        if (!isValidHTTPToken(char)) {
          return false;
        }
      }
      return true;
    }
    function isValidHeaderValue(potentialValue) {
      if (potentialValue.startsWith("	") || potentialValue.startsWith(" ") || potentialValue.endsWith("	") || potentialValue.endsWith(" ")) {
        return false;
      }
      if (potentialValue.includes("\0") || potentialValue.includes("\r") || potentialValue.includes("\n")) {
        return false;
      }
      return true;
    }
    function setRequestReferrerPolicyOnRedirect(request, actualResponse) {
      const policy = "";
      if (policy !== "") {
        request.referrerPolicy = policy;
      }
    }
    function crossOriginResourcePolicyCheck() {
      return "allowed";
    }
    function corsCheck() {
      return "success";
    }
    function TAOCheck() {
      return "success";
    }
    function appendFetchMetadata(httpRequest) {
      let header = null;
      header = httpRequest.mode;
      httpRequest.headersList.set("sec-fetch-mode", header);
    }
    function appendRequestOriginHeader(request) {
      let serializedOrigin = request.origin;
      if (request.responseTainting === "cors" || request.mode === "websocket") {
        if (serializedOrigin) {
          request.headersList.append("Origin", serializedOrigin);
        }
      } else if (request.method !== "GET" && request.method !== "HEAD") {
        switch (request.referrerPolicy) {
          case "no-referrer":
            serializedOrigin = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            if (/^https:/.test(request.origin) && !/^https:/.test(requestCurrentURL(request))) {
              serializedOrigin = null;
            }
            break;
          case "same-origin":
            if (!sameOrigin(request, requestCurrentURL(request))) {
              serializedOrigin = null;
            }
            break;
          default:
        }
        if (serializedOrigin) {
          request.headersList.append("Origin", serializedOrigin);
        }
      }
    }
    function coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
      return performance2.now();
    }
    function createOpaqueTimingInfo(timingInfo) {
      return {
        startTime: timingInfo.startTime ?? 0,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: timingInfo.startTime ?? 0,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 0,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
      };
    }
    function makePolicyContainer() {
      return {};
    }
    function clonePolicyContainer() {
      return {};
    }
    function determineRequestsReferrer2(request) {
      return "no-referrer";
    }
    function bytesMatch(bytes, metadataList) {
      if (crypto3 === void 0) {
        return true;
      }
      const parsedMetadata = parseMetadata(metadataList);
      if (parsedMetadata === "no metadata") {
        return true;
      }
      if (parsedMetadata.length === 0) {
        return true;
      }
      const metadata4 = parsedMetadata.sort((c, d) => d.algo.localeCompare(c.algo));
      for (const item of metadata4) {
        const algorithm = item.algo;
        const expectedValue = item.hash;
        const actualValue = crypto3.createHash(algorithm).update(bytes).digest("base64");
        if (actualValue === expectedValue) {
          return true;
        }
      }
      return false;
    }
    var parseHashWithOptions = /((?<algo>sha256|sha384|sha512)-(?<hash>[A-z0-9+/]{1}.*={1,2}))( +[\x21-\x7e]?)?/i;
    function parseMetadata(metadata4) {
      const result = [];
      let empty = true;
      const supportedHashes = crypto3.getHashes();
      for (const token of metadata4.split(" ")) {
        empty = false;
        const parsedToken = parseHashWithOptions.exec(token);
        if (parsedToken === null || parsedToken.groups === void 0) {
          continue;
        }
        const algorithm = parsedToken.groups.algo;
        if (supportedHashes.includes(algorithm.toLowerCase())) {
          result.push(parsedToken.groups);
        }
      }
      if (empty === true) {
        return "no metadata";
      }
      return result;
    }
    function tryUpgradeRequestToAPotentiallyTrustworthyURL(request) {
    }
    function sameOrigin(A2, B) {
      if (A2.protocol === B.protocol && A2.hostname === B.hostname && A2.port === B.port) {
        return true;
      }
      return false;
    }
    function createDeferredPromise() {
      let res;
      let rej;
      const promise = new Promise((resolve, reject) => {
        res = resolve;
        rej = reject;
      });
      return { promise, resolve: res, reject: rej };
    }
    function isAborted(fetchParams) {
      return fetchParams.controller.state === "aborted";
    }
    function isCancelled(fetchParams) {
      return fetchParams.controller.state === "aborted" || fetchParams.controller.state === "terminated";
    }
    function normalizeMethod(method) {
      return /^(DELETE|GET|HEAD|OPTIONS|POST|PUT)$/i.test(method) ? method.toUpperCase() : method;
    }
    function serializeJavascriptValueToJSONString(value) {
      const result = JSON.stringify(value);
      if (result === void 0) {
        throw new TypeError("Value is not JSON serializable");
      }
      assert(typeof result === "string");
      return result;
    }
    var esIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
    function makeIterator(iterator, name) {
      const i2 = {
        next() {
          if (Object.getPrototypeOf(this) !== i2) {
            throw new TypeError(
              `'next' called on an object that does not implement interface ${name} Iterator.`
            );
          }
          return iterator.next();
        },
        [Symbol.toStringTag]: `${name} Iterator`
      };
      Object.setPrototypeOf(i2, esIteratorPrototype);
      return Object.setPrototypeOf({}, i2);
    }
    async function fullyReadBody(body2, processBody, processBodyError) {
      try {
        const chunks = [];
        let length = 0;
        const reader = body2.stream.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done === true) {
            break;
          }
          assert(isUint8Array(value));
          chunks.push(value);
          length += value.byteLength;
        }
        const fulfilledSteps = (bytes) => queueMicrotask(() => {
          processBody(bytes);
        });
        fulfilledSteps(Buffer.concat(chunks, length));
      } catch (err) {
        queueMicrotask(() => processBodyError(err));
      }
    }
    var hasOwn = Object.hasOwn || ((dict, key2) => Object.prototype.hasOwnProperty.call(dict, key2));
    module2.exports = {
      isAborted,
      isCancelled,
      createDeferredPromise,
      ReadableStreamFrom,
      toUSVString,
      tryUpgradeRequestToAPotentiallyTrustworthyURL,
      coarsenedSharedCurrentTime,
      determineRequestsReferrer: determineRequestsReferrer2,
      makePolicyContainer,
      clonePolicyContainer,
      appendFetchMetadata,
      appendRequestOriginHeader,
      TAOCheck,
      corsCheck,
      crossOriginResourcePolicyCheck,
      createOpaqueTimingInfo,
      setRequestReferrerPolicyOnRedirect,
      isValidHTTPToken,
      requestBadPort,
      requestCurrentURL,
      responseURL,
      responseLocationURL,
      isBlobLike,
      isFileLike,
      isValidReasonPhrase,
      sameOrigin,
      normalizeMethod,
      serializeJavascriptValueToJSONString,
      makeIterator,
      isValidHeaderName,
      isValidHeaderValue,
      hasOwn,
      isErrorLike,
      fullyReadBody,
      bytesMatch
    };
  }
});

// node_modules/undici/lib/fetch/formdata.js
var require_formdata = __commonJS({
  "node_modules/undici/lib/fetch/formdata.js"(exports, module2) {
    "use strict";
    init_shims();
    var { isBlobLike, isFileLike, toUSVString, makeIterator } = require_util2();
    var { kState } = require_symbols2();
    var { File: File3, FileLike } = require_file();
    var { webidl } = require_webidl();
    var { Blob: Blob3 } = require("buffer");
    var _FormData = class {
      constructor(form) {
        if (arguments.length > 0 && form != null) {
          webidl.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: ["null"]
          });
        }
        this[kState] = [];
      }
      append(name, value, filename = void 0) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 2) {
          throw new TypeError(
            `Failed to execute 'append' on 'FormData': 2 arguments required, but only ${arguments.length} present.`
          );
        }
        if (arguments.length === 3 && !isBlobLike(value)) {
          throw new TypeError(
            "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
          );
        }
        name = webidl.converters.USVString(name);
        value = isBlobLike(value) ? webidl.converters.Blob(value, { strict: false }) : webidl.converters.USVString(value);
        filename = arguments.length === 3 ? webidl.converters.USVString(filename) : void 0;
        const entry = makeEntry(name, value, filename);
        this[kState].push(entry);
      }
      delete(name) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'delete' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.USVString(name);
        const next = [];
        for (const entry of this[kState]) {
          if (entry.name !== name) {
            next.push(entry);
          }
        }
        this[kState] = next;
      }
      get(name) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'get' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.USVString(name);
        const idx = this[kState].findIndex((entry) => entry.name === name);
        if (idx === -1) {
          return null;
        }
        return this[kState][idx].value;
      }
      getAll(name) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'getAll' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.USVString(name);
        return this[kState].filter((entry) => entry.name === name).map((entry) => entry.value);
      }
      has(name) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'has' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.USVString(name);
        return this[kState].findIndex((entry) => entry.name === name) !== -1;
      }
      set(name, value, filename = void 0) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 2) {
          throw new TypeError(
            `Failed to execute 'set' on 'FormData': 2 arguments required, but only ${arguments.length} present.`
          );
        }
        if (arguments.length === 3 && !isBlobLike(value)) {
          throw new TypeError(
            "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
          );
        }
        name = webidl.converters.USVString(name);
        value = isBlobLike(value) ? webidl.converters.Blob(value, { strict: false }) : webidl.converters.USVString(value);
        filename = arguments.length === 3 ? toUSVString(filename) : void 0;
        const entry = makeEntry(name, value, filename);
        const idx = this[kState].findIndex((entry2) => entry2.name === name);
        if (idx !== -1) {
          this[kState] = [
            ...this[kState].slice(0, idx),
            entry,
            ...this[kState].slice(idx + 1).filter((entry2) => entry2.name !== name)
          ];
        } else {
          this[kState].push(entry);
        }
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      entries() {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        return makeIterator(
          makeIterable(this[kState], "entries"),
          "FormData"
        );
      }
      keys() {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        return makeIterator(
          makeIterable(this[kState], "keys"),
          "FormData"
        );
      }
      values() {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        return makeIterator(
          makeIterable(this[kState], "values"),
          "FormData"
        );
      }
      forEach(callbackFn, thisArg = globalThis) {
        if (!(this instanceof _FormData)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'forEach' on 'FormData': 1 argument required, but only ${arguments.length} present.`
          );
        }
        if (typeof callbackFn !== "function") {
          throw new TypeError(
            "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
          );
        }
        for (const [key2, value] of this) {
          callbackFn.apply(thisArg, [value, key2, this]);
        }
      }
    };
    var FormData3 = _FormData;
    __publicField(FormData3, "name", "FormData");
    FormData3.prototype[Symbol.iterator] = FormData3.prototype.entries;
    function makeEntry(name, value, filename) {
      name = Buffer.from(name).toString("utf8");
      if (typeof value === "string") {
        value = Buffer.from(value).toString("utf8");
      } else {
        if (!isFileLike(value)) {
          value = value instanceof Blob3 ? new File3([value], "blob", { type: value.type }) : new FileLike(value, "blob", { type: value.type });
        }
        if (filename !== void 0) {
          value = value instanceof File3 ? new File3([value], filename, { type: value.type }) : new FileLike(value, filename, { type: value.type });
        }
      }
      return { name, value };
    }
    function* makeIterable(entries, type) {
      for (const { name, value } of entries) {
        if (type === "entries") {
          yield [name, value];
        } else if (type === "values") {
          yield value;
        } else {
          yield name;
        }
      }
    }
    module2.exports = { FormData: FormData3 };
  }
});

// node_modules/undici/lib/fetch/body.js
var require_body = __commonJS({
  "node_modules/undici/lib/fetch/body.js"(exports, module2) {
    "use strict";
    init_shims();
    var util = require_util();
    var { ReadableStreamFrom, toUSVString, isBlobLike } = require_util2();
    var { FormData: FormData3 } = require_formdata();
    var { kState } = require_symbols2();
    var { webidl } = require_webidl();
    var { Blob: Blob3 } = require("buffer");
    var { kBodyUsed } = require_symbols();
    var assert = require("assert");
    var { NotSupportedError } = require_errors();
    var { isErrored } = require_util();
    var { isUint8Array, isArrayBuffer } = require("util/types");
    var ReadableStream3;
    async function* blobGen(blob) {
      yield* blob.stream();
    }
    function extractBody(object, keepalive = false) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      let stream = null;
      let action = null;
      let source = null;
      let length = null;
      let contentType = null;
      if (object == null) {
      } else if (object instanceof URLSearchParams) {
        source = object.toString();
        contentType = "application/x-www-form-urlencoded;charset=UTF-8";
      } else if (isArrayBuffer(object)) {
        source = new Uint8Array(object.slice());
      } else if (ArrayBuffer.isView(object)) {
        source = new Uint8Array(object.buffer.slice(object.byteOffset, object.byteOffset + object.byteLength));
      } else if (util.isFormDataLike(object)) {
        const boundary = "----formdata-undici-" + Math.random();
        const prefix = `--${boundary}\r
Content-Disposition: form-data`;
        const escape3 = (str) => str.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
        const normalizeLinefeeds = (value) => value.replace(/\r?\n|\r/g, "\r\n");
        action = async function* (object2) {
          const enc = new TextEncoder();
          for (const [name, value] of object2) {
            if (typeof value === "string") {
              yield enc.encode(
                prefix + `; name="${escape3(normalizeLinefeeds(name))}"\r
\r
${normalizeLinefeeds(value)}\r
`
              );
            } else {
              yield enc.encode(
                prefix + `; name="${escape3(normalizeLinefeeds(name))}"` + (value.name ? `; filename="${escape3(value.name)}"` : "") + `\r
Content-Type: ${value.type || "application/octet-stream"}\r
\r
`
              );
              yield* blobGen(value);
              yield enc.encode("\r\n");
            }
          }
          yield enc.encode(`--${boundary}--`);
        };
        source = object;
        contentType = "multipart/form-data; boundary=" + boundary;
      } else if (isBlobLike(object)) {
        action = blobGen;
        source = object;
        length = object.size;
        if (object.type) {
          contentType = object.type;
        }
      } else if (typeof object[Symbol.asyncIterator] === "function") {
        if (keepalive) {
          throw new TypeError("keepalive");
        }
        if (util.isDisturbed(object) || object.locked) {
          throw new TypeError(
            "Response body object should not be disturbed or locked"
          );
        }
        stream = object instanceof ReadableStream3 ? object : ReadableStreamFrom(object);
      } else {
        source = toUSVString(object);
        contentType = "text/plain;charset=UTF-8";
      }
      if (typeof source === "string" || util.isBuffer(source)) {
        length = Buffer.byteLength(source);
      }
      if (action != null) {
        let iterator;
        stream = new ReadableStream3({
          async start() {
            iterator = action(object)[Symbol.asyncIterator]();
          },
          async pull(controller) {
            const { value, done } = await iterator.next();
            if (done) {
              queueMicrotask(() => {
                controller.close();
              });
            } else {
              if (!isErrored(stream)) {
                controller.enqueue(new Uint8Array(value));
              }
            }
            return controller.desiredSize > 0;
          },
          async cancel(reason) {
            await iterator.return();
          }
        });
      } else if (!stream) {
        stream = new ReadableStream3({
          async pull(controller) {
            controller.enqueue(
              typeof source === "string" ? new TextEncoder().encode(source) : source
            );
            queueMicrotask(() => {
              controller.close();
            });
          }
        });
      }
      const body2 = { stream, source, length };
      return [body2, contentType];
    }
    function safelyExtractBody(object, keepalive = false) {
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      if (object instanceof ReadableStream3) {
        assert(!util.isDisturbed(object), "disturbed");
        assert(!object.locked, "locked");
      }
      return extractBody(object, keepalive);
    }
    function cloneBody(body2) {
      const [out1, out2] = body2.stream.tee();
      body2.stream = out1;
      return {
        stream: out2,
        length: body2.length,
        source: body2.source
      };
    }
    async function* consumeBody2(body2) {
      if (body2) {
        if (isUint8Array(body2)) {
          yield body2;
        } else {
          const stream = body2.stream;
          if (util.isDisturbed(stream)) {
            throw new TypeError("disturbed");
          }
          if (stream.locked) {
            throw new TypeError("locked");
          }
          stream[kBodyUsed] = true;
          yield* stream;
        }
      }
    }
    function bodyMixinMethods(instance) {
      const methods = {
        async blob() {
          if (!(this instanceof instance)) {
            throw new TypeError("Illegal invocation");
          }
          const chunks = [];
          for await (const chunk of consumeBody2(this[kState].body)) {
            if (!isUint8Array(chunk)) {
              throw new TypeError("Expected Uint8Array chunk");
            }
            chunks.push(new Blob3([chunk]));
          }
          return new Blob3(chunks, { type: this.headers.get("Content-Type") || "" });
        },
        async arrayBuffer() {
          if (!(this instanceof instance)) {
            throw new TypeError("Illegal invocation");
          }
          const contentLength = this.headers.get("content-length");
          const encoded = this.headers.has("content-encoding");
          if (!encoded && contentLength) {
            const buffer2 = new Uint8Array(contentLength);
            let offset2 = 0;
            for await (const chunk of consumeBody2(this[kState].body)) {
              if (!isUint8Array(chunk)) {
                throw new TypeError("Expected Uint8Array chunk");
              }
              buffer2.set(chunk, offset2);
              offset2 += chunk.length;
            }
            return buffer2.buffer;
          }
          const chunks = [];
          let size = 0;
          for await (const chunk of consumeBody2(this[kState].body)) {
            if (!isUint8Array(chunk)) {
              throw new TypeError("Expected Uint8Array chunk");
            }
            chunks.push(chunk);
            size += chunk.byteLength;
          }
          const buffer = new Uint8Array(size);
          let offset = 0;
          for (const chunk of chunks) {
            buffer.set(chunk, offset);
            offset += chunk.byteLength;
          }
          return buffer.buffer;
        },
        async text() {
          if (!(this instanceof instance)) {
            throw new TypeError("Illegal invocation");
          }
          let result = "";
          const textDecoder = new TextDecoder();
          for await (const chunk of consumeBody2(this[kState].body)) {
            if (!isUint8Array(chunk)) {
              throw new TypeError("Expected Uint8Array chunk");
            }
            result += textDecoder.decode(chunk, { stream: true });
          }
          result += textDecoder.decode();
          return result;
        },
        async json() {
          if (!(this instanceof instance)) {
            throw new TypeError("Illegal invocation");
          }
          return JSON.parse(await this.text());
        },
        async formData() {
          if (!(this instanceof instance)) {
            throw new TypeError("Illegal invocation");
          }
          const contentType = this.headers.get("Content-Type");
          if (/multipart\/form-data/.test(contentType)) {
            throw new NotSupportedError("multipart/form-data not supported");
          } else if (/application\/x-www-form-urlencoded/.test(contentType)) {
            let entries;
            try {
              let text = "";
              const textDecoder = new TextDecoder("utf-8", { ignoreBOM: true });
              for await (const chunk of consumeBody2(this[kState].body)) {
                if (!isUint8Array(chunk)) {
                  throw new TypeError("Expected Uint8Array chunk");
                }
                text += textDecoder.decode(chunk, { stream: true });
              }
              text += textDecoder.decode();
              entries = new URLSearchParams(text);
            } catch (err) {
              throw Object.assign(new TypeError(), { cause: err });
            }
            const formData = new FormData3();
            for (const [name, value] of entries) {
              formData.append(name, value);
            }
            return formData;
          } else {
            webidl.errors.exception({
              header: `${instance.name}.formData`,
              value: "Could not parse content as FormData."
            });
          }
        }
      };
      return methods;
    }
    var properties = {
      body: {
        enumerable: true,
        get() {
          if (!this || !this[kState]) {
            throw new TypeError("Illegal invocation");
          }
          return this[kState].body ? this[kState].body.stream : null;
        }
      },
      bodyUsed: {
        enumerable: true,
        get() {
          if (!this || !this[kState]) {
            throw new TypeError("Illegal invocation");
          }
          return !!this[kState].body && util.isDisturbed(this[kState].body.stream);
        }
      }
    };
    function mixinBody(prototype) {
      Object.assign(prototype.prototype, bodyMixinMethods(prototype));
      Object.defineProperties(prototype.prototype, properties);
    }
    module2.exports = {
      extractBody,
      safelyExtractBody,
      cloneBody,
      mixinBody
    };
  }
});

// node_modules/undici/lib/core/request.js
var require_request = __commonJS({
  "node_modules/undici/lib/core/request.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      InvalidArgumentError,
      NotSupportedError
    } = require_errors();
    var assert = require("assert");
    var util = require_util();
    var tokenRegExp = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/;
    var headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
    var invalidPathRegex = /[^\u0021-\u00ff]/;
    var kHandler = Symbol("handler");
    var channels = {};
    var extractBody;
    var nodeVersion = process.versions.node.split(".");
    var nodeMajor = Number(nodeVersion[0]);
    var nodeMinor = Number(nodeVersion[1]);
    try {
      const diagnosticsChannel = require("diagnostics_channel");
      channels.create = diagnosticsChannel.channel("undici:request:create");
      channels.bodySent = diagnosticsChannel.channel("undici:request:bodySent");
      channels.headers = diagnosticsChannel.channel("undici:request:headers");
      channels.trailers = diagnosticsChannel.channel("undici:request:trailers");
      channels.error = diagnosticsChannel.channel("undici:request:error");
    } catch {
      channels.create = { hasSubscribers: false };
      channels.bodySent = { hasSubscribers: false };
      channels.headers = { hasSubscribers: false };
      channels.trailers = { hasSubscribers: false };
      channels.error = { hasSubscribers: false };
    }
    var Request4 = class {
      constructor(origin, {
        path,
        method,
        body: body2,
        headers,
        query,
        idempotent,
        blocking,
        upgrade,
        headersTimeout,
        bodyTimeout,
        throwOnError
      }, handler) {
        if (typeof path !== "string") {
          throw new InvalidArgumentError("path must be a string");
        } else if (path[0] !== "/" && !(path.startsWith("http://") || path.startsWith("https://")) && method !== "CONNECT") {
          throw new InvalidArgumentError("path must be an absolute URL or start with a slash");
        } else if (invalidPathRegex.exec(path) !== null) {
          throw new InvalidArgumentError("invalid request path");
        }
        if (typeof method !== "string") {
          throw new InvalidArgumentError("method must be a string");
        } else if (tokenRegExp.exec(method) === null) {
          throw new InvalidArgumentError("invalid request method");
        }
        if (upgrade && typeof upgrade !== "string") {
          throw new InvalidArgumentError("upgrade must be a string");
        }
        if (headersTimeout != null && (!Number.isFinite(headersTimeout) || headersTimeout < 0)) {
          throw new InvalidArgumentError("invalid headersTimeout");
        }
        if (bodyTimeout != null && (!Number.isFinite(bodyTimeout) || bodyTimeout < 0)) {
          throw new InvalidArgumentError("invalid bodyTimeout");
        }
        this.headersTimeout = headersTimeout;
        this.bodyTimeout = bodyTimeout;
        this.throwOnError = throwOnError === true;
        this.method = method;
        if (body2 == null) {
          this.body = null;
        } else if (util.isStream(body2)) {
          this.body = body2;
        } else if (util.isBuffer(body2)) {
          this.body = body2.byteLength ? body2 : null;
        } else if (ArrayBuffer.isView(body2)) {
          this.body = body2.buffer.byteLength ? Buffer.from(body2.buffer, body2.byteOffset, body2.byteLength) : null;
        } else if (body2 instanceof ArrayBuffer) {
          this.body = body2.byteLength ? Buffer.from(body2) : null;
        } else if (typeof body2 === "string") {
          this.body = body2.length ? Buffer.from(body2) : null;
        } else if (util.isFormDataLike(body2) || util.isIterable(body2) || util.isBlobLike(body2)) {
          this.body = body2;
        } else {
          throw new InvalidArgumentError("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
        }
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade || null;
        this.path = query ? util.buildURL(path, query) : path;
        this.origin = origin;
        this.idempotent = idempotent == null ? method === "HEAD" || method === "GET" : idempotent;
        this.blocking = blocking == null ? false : blocking;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = "";
        if (Array.isArray(headers)) {
          if (headers.length % 2 !== 0) {
            throw new InvalidArgumentError("headers array must be even");
          }
          for (let i2 = 0; i2 < headers.length; i2 += 2) {
            processHeader(this, headers[i2], headers[i2 + 1]);
          }
        } else if (headers && typeof headers === "object") {
          const keys = Object.keys(headers);
          for (let i2 = 0; i2 < keys.length; i2++) {
            const key2 = keys[i2];
            processHeader(this, key2, headers[key2]);
          }
        } else if (headers != null) {
          throw new InvalidArgumentError("headers must be an object or an array");
        }
        if (util.isFormDataLike(this.body)) {
          if (nodeMajor < 16 || nodeMajor === 16 && nodeMinor < 8) {
            throw new InvalidArgumentError("Form-Data bodies are only supported in node v16.8 and newer.");
          }
          if (!extractBody) {
            extractBody = require_body().extractBody;
          }
          const [bodyStream, contentType] = extractBody(body2);
          if (this.contentType == null) {
            this.contentType = contentType;
            this.headers += `content-type: ${contentType}\r
`;
          }
          this.body = bodyStream.stream;
        } else if (util.isBlobLike(body2) && this.contentType == null && body2.type) {
          this.contentType = body2.type;
          this.headers += `content-type: ${body2.type}\r
`;
        }
        util.validateHandler(handler, method, upgrade);
        this.servername = util.getServerName(this.host);
        this[kHandler] = handler;
        if (channels.create.hasSubscribers) {
          channels.create.publish({ request: this });
        }
      }
      onBodySent(chunk) {
        if (this[kHandler].onBodySent) {
          try {
            this[kHandler].onBodySent(chunk);
          } catch (err) {
            this.onError(err);
          }
        }
      }
      onRequestSent() {
        if (channels.bodySent.hasSubscribers) {
          channels.bodySent.publish({ request: this });
        }
      }
      onConnect(abort) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onConnect(abort);
      }
      onHeaders(statusCode, headers, resume, statusText) {
        assert(!this.aborted);
        assert(!this.completed);
        if (channels.headers.hasSubscribers) {
          channels.headers.publish({ request: this, response: { statusCode, headers, statusText } });
        }
        return this[kHandler].onHeaders(statusCode, headers, resume, statusText);
      }
      onData(chunk) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onData(chunk);
      }
      onUpgrade(statusCode, headers, socket) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onUpgrade(statusCode, headers, socket);
      }
      onComplete(trailers) {
        assert(!this.aborted);
        this.completed = true;
        if (channels.trailers.hasSubscribers) {
          channels.trailers.publish({ request: this, trailers });
        }
        return this[kHandler].onComplete(trailers);
      }
      onError(error2) {
        if (channels.error.hasSubscribers) {
          channels.error.publish({ request: this, error: error2 });
        }
        if (this.aborted) {
          return;
        }
        this.aborted = true;
        return this[kHandler].onError(error2);
      }
      addHeader(key2, value) {
        processHeader(this, key2, value);
        return this;
      }
    };
    function processHeader(request, key2, val) {
      if (val && typeof val === "object") {
        throw new InvalidArgumentError(`invalid ${key2} header`);
      } else if (val === void 0) {
        return;
      }
      if (request.host === null && key2.length === 4 && key2.toLowerCase() === "host") {
        request.host = val;
      } else if (request.contentLength === null && key2.length === 14 && key2.toLowerCase() === "content-length") {
        request.contentLength = parseInt(val, 10);
        if (!Number.isFinite(request.contentLength)) {
          throw new InvalidArgumentError("invalid content-length header");
        }
      } else if (request.contentType === null && key2.length === 12 && key2.toLowerCase() === "content-type" && headerCharRegex.exec(val) === null) {
        request.contentType = val;
        request.headers += `${key2}: ${val}\r
`;
      } else if (key2.length === 17 && key2.toLowerCase() === "transfer-encoding") {
        throw new InvalidArgumentError("invalid transfer-encoding header");
      } else if (key2.length === 10 && key2.toLowerCase() === "connection") {
        throw new InvalidArgumentError("invalid connection header");
      } else if (key2.length === 10 && key2.toLowerCase() === "keep-alive") {
        throw new InvalidArgumentError("invalid keep-alive header");
      } else if (key2.length === 7 && key2.toLowerCase() === "upgrade") {
        throw new InvalidArgumentError("invalid upgrade header");
      } else if (key2.length === 6 && key2.toLowerCase() === "expect") {
        throw new NotSupportedError("expect header not supported");
      } else if (tokenRegExp.exec(key2) === null) {
        throw new InvalidArgumentError("invalid header key");
      } else if (headerCharRegex.exec(val) !== null) {
        throw new InvalidArgumentError(`invalid ${key2} header`);
      } else {
        request.headers += `${key2}: ${val}\r
`;
      }
    }
    module2.exports = Request4;
  }
});

// node_modules/undici/lib/dispatcher.js
var require_dispatcher = __commonJS({
  "node_modules/undici/lib/dispatcher.js"(exports, module2) {
    "use strict";
    init_shims();
    var EventEmitter = require("events");
    var Dispatcher = class extends EventEmitter {
      dispatch() {
        throw new Error("not implemented");
      }
      close() {
        throw new Error("not implemented");
      }
      destroy() {
        throw new Error("not implemented");
      }
    };
    module2.exports = Dispatcher;
  }
});

// node_modules/undici/lib/dispatcher-base.js
var require_dispatcher_base = __commonJS({
  "node_modules/undici/lib/dispatcher-base.js"(exports, module2) {
    "use strict";
    init_shims();
    var Dispatcher = require_dispatcher();
    var {
      ClientDestroyedError,
      ClientClosedError,
      InvalidArgumentError
    } = require_errors();
    var { kDestroy, kClose, kDispatch } = require_symbols();
    var kDestroyed = Symbol("destroyed");
    var kClosed = Symbol("closed");
    var kOnDestroyed = Symbol("onDestroyed");
    var kOnClosed = Symbol("onClosed");
    var DispatcherBase = class extends Dispatcher {
      constructor() {
        super();
        this[kDestroyed] = false;
        this[kOnDestroyed] = [];
        this[kClosed] = false;
        this[kOnClosed] = [];
      }
      get destroyed() {
        return this[kDestroyed];
      }
      get closed() {
        return this[kClosed];
      }
      close(callback) {
        if (callback === void 0) {
          return new Promise((resolve, reject) => {
            this.close((err, data) => {
              return err ? reject(err) : resolve(data);
            });
          });
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        if (this[kDestroyed]) {
          queueMicrotask(() => callback(new ClientDestroyedError(), null));
          return;
        }
        if (this[kClosed]) {
          if (this[kOnClosed]) {
            this[kOnClosed].push(callback);
          } else {
            queueMicrotask(() => callback(null, null));
          }
          return;
        }
        this[kClosed] = true;
        this[kOnClosed].push(callback);
        const onClosed = () => {
          const callbacks = this[kOnClosed];
          this[kOnClosed] = null;
          for (let i2 = 0; i2 < callbacks.length; i2++) {
            callbacks[i2](null, null);
          }
        };
        this[kClose]().then(() => this.destroy()).then(() => {
          queueMicrotask(onClosed);
        });
      }
      destroy(err, callback) {
        if (typeof err === "function") {
          callback = err;
          err = null;
        }
        if (callback === void 0) {
          return new Promise((resolve, reject) => {
            this.destroy(err, (err2, data) => {
              return err2 ? reject(err2) : resolve(data);
            });
          });
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        if (this[kDestroyed]) {
          if (this[kOnDestroyed]) {
            this[kOnDestroyed].push(callback);
          } else {
            queueMicrotask(() => callback(null, null));
          }
          return;
        }
        if (!err) {
          err = new ClientDestroyedError();
        }
        this[kDestroyed] = true;
        this[kOnDestroyed].push(callback);
        const onDestroyed = () => {
          const callbacks = this[kOnDestroyed];
          this[kOnDestroyed] = null;
          for (let i2 = 0; i2 < callbacks.length; i2++) {
            callbacks[i2](null, null);
          }
        };
        this[kDestroy](err).then(() => {
          queueMicrotask(onDestroyed);
        });
      }
      dispatch(opts, handler) {
        if (!handler || typeof handler !== "object") {
          throw new InvalidArgumentError("handler must be an object");
        }
        try {
          if (!opts || typeof opts !== "object") {
            throw new InvalidArgumentError("opts must be an object.");
          }
          if (this[kDestroyed]) {
            throw new ClientDestroyedError();
          }
          if (this[kClosed]) {
            throw new ClientClosedError();
          }
          return this[kDispatch](opts, handler);
        } catch (err) {
          if (typeof handler.onError !== "function") {
            throw new InvalidArgumentError("invalid onError method");
          }
          handler.onError(err);
          return false;
        }
      }
    };
    module2.exports = DispatcherBase;
  }
});

// node_modules/undici/lib/handler/redirect.js
var require_redirect = __commonJS({
  "node_modules/undici/lib/handler/redirect.js"(exports, module2) {
    "use strict";
    init_shims();
    var util = require_util();
    var { kBodyUsed } = require_symbols();
    var assert = require("assert");
    var { InvalidArgumentError } = require_errors();
    var EE = require("events");
    var redirectableStatusCodes = [300, 301, 302, 303, 307, 308];
    var kBody = Symbol("body");
    var BodyAsyncIterable = class {
      constructor(body2) {
        this[kBody] = body2;
        this[kBodyUsed] = false;
      }
      async *[Symbol.asyncIterator]() {
        assert(!this[kBodyUsed], "disturbed");
        this[kBodyUsed] = true;
        yield* this[kBody];
      }
    };
    var RedirectHandler = class {
      constructor(dispatcher, maxRedirections, opts, handler) {
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
          throw new InvalidArgumentError("maxRedirections must be a positive number");
        }
        util.validateHandler(handler, opts.method, opts.upgrade);
        this.dispatcher = dispatcher;
        this.location = null;
        this.abort = null;
        this.opts = { ...opts, maxRedirections: 0 };
        this.maxRedirections = maxRedirections;
        this.handler = handler;
        this.history = [];
        if (util.isStream(this.opts.body)) {
          if (util.bodyLength(this.opts.body) === 0) {
            this.opts.body.on("data", function() {
              assert(false);
            });
          }
          if (typeof this.opts.body.readableDidRead !== "boolean") {
            this.opts.body[kBodyUsed] = false;
            EE.prototype.on.call(this.opts.body, "data", function() {
              this[kBodyUsed] = true;
            });
          }
        } else if (this.opts.body && typeof this.opts.body.pipeTo === "function") {
          this.opts.body = new BodyAsyncIterable(this.opts.body);
        } else if (this.opts.body && typeof this.opts.body !== "string" && !ArrayBuffer.isView(this.opts.body) && util.isIterable(this.opts.body)) {
          this.opts.body = new BodyAsyncIterable(this.opts.body);
        }
      }
      onConnect(abort) {
        this.abort = abort;
        this.handler.onConnect(abort, { history: this.history });
      }
      onUpgrade(statusCode, headers, socket) {
        this.handler.onUpgrade(statusCode, headers, socket);
      }
      onError(error2) {
        this.handler.onError(error2);
      }
      onHeaders(statusCode, headers, resume, statusText) {
        this.location = this.history.length >= this.maxRedirections || util.isDisturbed(this.opts.body) ? null : parseLocation(statusCode, headers);
        if (this.opts.origin) {
          this.history.push(new URL(this.opts.path, this.opts.origin));
        }
        if (!this.location) {
          return this.handler.onHeaders(statusCode, headers, resume, statusText);
        }
        const { origin, pathname, search } = util.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin)));
        const path = search ? `${pathname}${search}` : pathname;
        this.opts.headers = cleanRequestHeaders(this.opts.headers, statusCode === 303, this.opts.origin !== origin);
        this.opts.path = path;
        this.opts.origin = origin;
        this.opts.maxRedirections = 0;
        if (statusCode === 303 && this.opts.method !== "HEAD") {
          this.opts.method = "GET";
          this.opts.body = null;
        }
      }
      onData(chunk) {
        if (this.location) {
        } else {
          return this.handler.onData(chunk);
        }
      }
      onComplete(trailers) {
        if (this.location) {
          this.location = null;
          this.abort = null;
          this.dispatcher.dispatch(this.opts, this);
        } else {
          this.handler.onComplete(trailers);
        }
      }
      onBodySent(chunk) {
        if (this.handler.onBodySent) {
          this.handler.onBodySent(chunk);
        }
      }
    };
    function parseLocation(statusCode, headers) {
      if (redirectableStatusCodes.indexOf(statusCode) === -1) {
        return null;
      }
      for (let i2 = 0; i2 < headers.length; i2 += 2) {
        if (headers[i2].toString().toLowerCase() === "location") {
          return headers[i2 + 1];
        }
      }
    }
    function shouldRemoveHeader(header, removeContent, unknownOrigin) {
      return header.length === 4 && header.toString().toLowerCase() === "host" || removeContent && header.toString().toLowerCase().indexOf("content-") === 0 || unknownOrigin && header.length === 13 && header.toString().toLowerCase() === "authorization" || unknownOrigin && header.length === 6 && header.toString().toLowerCase() === "cookie";
    }
    function cleanRequestHeaders(headers, removeContent, unknownOrigin) {
      const ret = [];
      if (Array.isArray(headers)) {
        for (let i2 = 0; i2 < headers.length; i2 += 2) {
          if (!shouldRemoveHeader(headers[i2], removeContent, unknownOrigin)) {
            ret.push(headers[i2], headers[i2 + 1]);
          }
        }
      } else if (headers && typeof headers === "object") {
        for (const key2 of Object.keys(headers)) {
          if (!shouldRemoveHeader(key2, removeContent, unknownOrigin)) {
            ret.push(key2, headers[key2]);
          }
        }
      } else {
        assert(headers == null, "headers must be an object or an array");
      }
      return ret;
    }
    module2.exports = RedirectHandler;
  }
});

// node_modules/undici/lib/core/connect.js
var require_connect = __commonJS({
  "node_modules/undici/lib/core/connect.js"(exports, module2) {
    "use strict";
    init_shims();
    var net = require("net");
    var assert = require("assert");
    var util = require_util();
    var { InvalidArgumentError, ConnectTimeoutError } = require_errors();
    var tls;
    function buildConnector({ maxCachedSessions, socketPath, timeout, ...opts }) {
      if (maxCachedSessions != null && (!Number.isInteger(maxCachedSessions) || maxCachedSessions < 0)) {
        throw new InvalidArgumentError("maxCachedSessions must be a positive integer or zero");
      }
      const options2 = { path: socketPath, ...opts };
      const sessionCache = /* @__PURE__ */ new Map();
      timeout = timeout == null ? 1e4 : timeout;
      maxCachedSessions = maxCachedSessions == null ? 100 : maxCachedSessions;
      return function connect({ hostname, host, protocol: protocol2, port, servername, httpSocket }, callback) {
        let socket;
        if (protocol2 === "https:") {
          if (!tls) {
            tls = require("tls");
          }
          servername = servername || options2.servername || util.getServerName(host) || null;
          const sessionKey = servername || hostname;
          const session = sessionCache.get(sessionKey) || null;
          assert(sessionKey);
          socket = tls.connect({
            highWaterMark: 16384,
            ...options2,
            servername,
            session,
            socket: httpSocket,
            port: port || 443,
            host: hostname
          });
          socket.on("session", function(session2) {
            if (maxCachedSessions === 0) {
              return;
            }
            if (sessionCache.size >= maxCachedSessions) {
              const { value: oldestKey } = sessionCache.keys().next();
              sessionCache.delete(oldestKey);
            }
            sessionCache.set(sessionKey, session2);
          }).on("error", function(err) {
            if (sessionKey && err.code !== "UND_ERR_INFO") {
              sessionCache.delete(sessionKey);
            }
          });
        } else {
          assert(!httpSocket, "httpSocket can only be sent on TLS update");
          socket = net.connect({
            highWaterMark: 64 * 1024,
            ...options2,
            port: port || 80,
            host: hostname
          });
        }
        const cancelTimeout = setupTimeout(() => onConnectTimeout(socket), timeout);
        socket.setNoDelay(true).once(protocol2 === "https:" ? "secureConnect" : "connect", function() {
          cancelTimeout();
          if (callback) {
            const cb = callback;
            callback = null;
            cb(null, this);
          }
        }).on("error", function(err) {
          cancelTimeout();
          if (callback) {
            const cb = callback;
            callback = null;
            cb(err);
          }
        });
        return socket;
      };
    }
    function setupTimeout(onConnectTimeout2, timeout) {
      if (!timeout) {
        return () => {
        };
      }
      let s1 = null;
      let s22 = null;
      const timeoutId = setTimeout(() => {
        s1 = setImmediate(() => {
          if (process.platform === "win32") {
            s22 = setImmediate(() => onConnectTimeout2());
          } else {
            onConnectTimeout2();
          }
        });
      }, timeout);
      return () => {
        clearTimeout(timeoutId);
        clearImmediate(s1);
        clearImmediate(s22);
      };
    }
    function onConnectTimeout(socket) {
      util.destroy(socket, new ConnectTimeoutError());
    }
    module2.exports = buildConnector;
  }
});

// node_modules/undici/lib/llhttp/utils.js
var require_utils = __commonJS({
  "node_modules/undici/lib/llhttp/utils.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.enumToMap = void 0;
    function enumToMap(obj) {
      const res = {};
      Object.keys(obj).forEach((key2) => {
        const value = obj[key2];
        if (typeof value === "number") {
          res[key2] = value;
        }
      });
      return res;
    }
    exports.enumToMap = enumToMap;
  }
});

// node_modules/undici/lib/llhttp/constants.js
var require_constants2 = __commonJS({
  "node_modules/undici/lib/llhttp/constants.js"(exports) {
    "use strict";
    init_shims();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SPECIAL_HEADERS = exports.HEADER_STATE = exports.MINOR = exports.MAJOR = exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS = exports.TOKEN = exports.STRICT_TOKEN = exports.HEX = exports.URL_CHAR = exports.STRICT_URL_CHAR = exports.USERINFO_CHARS = exports.MARK = exports.ALPHANUM = exports.NUM = exports.HEX_MAP = exports.NUM_MAP = exports.ALPHA = exports.FINISH = exports.H_METHOD_MAP = exports.METHOD_MAP = exports.METHODS_RTSP = exports.METHODS_ICE = exports.METHODS_HTTP = exports.METHODS = exports.LENIENT_FLAGS = exports.FLAGS = exports.TYPE = exports.ERROR = void 0;
    var utils_1 = require_utils();
    var ERROR;
    (function(ERROR2) {
      ERROR2[ERROR2["OK"] = 0] = "OK";
      ERROR2[ERROR2["INTERNAL"] = 1] = "INTERNAL";
      ERROR2[ERROR2["STRICT"] = 2] = "STRICT";
      ERROR2[ERROR2["LF_EXPECTED"] = 3] = "LF_EXPECTED";
      ERROR2[ERROR2["UNEXPECTED_CONTENT_LENGTH"] = 4] = "UNEXPECTED_CONTENT_LENGTH";
      ERROR2[ERROR2["CLOSED_CONNECTION"] = 5] = "CLOSED_CONNECTION";
      ERROR2[ERROR2["INVALID_METHOD"] = 6] = "INVALID_METHOD";
      ERROR2[ERROR2["INVALID_URL"] = 7] = "INVALID_URL";
      ERROR2[ERROR2["INVALID_CONSTANT"] = 8] = "INVALID_CONSTANT";
      ERROR2[ERROR2["INVALID_VERSION"] = 9] = "INVALID_VERSION";
      ERROR2[ERROR2["INVALID_HEADER_TOKEN"] = 10] = "INVALID_HEADER_TOKEN";
      ERROR2[ERROR2["INVALID_CONTENT_LENGTH"] = 11] = "INVALID_CONTENT_LENGTH";
      ERROR2[ERROR2["INVALID_CHUNK_SIZE"] = 12] = "INVALID_CHUNK_SIZE";
      ERROR2[ERROR2["INVALID_STATUS"] = 13] = "INVALID_STATUS";
      ERROR2[ERROR2["INVALID_EOF_STATE"] = 14] = "INVALID_EOF_STATE";
      ERROR2[ERROR2["INVALID_TRANSFER_ENCODING"] = 15] = "INVALID_TRANSFER_ENCODING";
      ERROR2[ERROR2["CB_MESSAGE_BEGIN"] = 16] = "CB_MESSAGE_BEGIN";
      ERROR2[ERROR2["CB_HEADERS_COMPLETE"] = 17] = "CB_HEADERS_COMPLETE";
      ERROR2[ERROR2["CB_MESSAGE_COMPLETE"] = 18] = "CB_MESSAGE_COMPLETE";
      ERROR2[ERROR2["CB_CHUNK_HEADER"] = 19] = "CB_CHUNK_HEADER";
      ERROR2[ERROR2["CB_CHUNK_COMPLETE"] = 20] = "CB_CHUNK_COMPLETE";
      ERROR2[ERROR2["PAUSED"] = 21] = "PAUSED";
      ERROR2[ERROR2["PAUSED_UPGRADE"] = 22] = "PAUSED_UPGRADE";
      ERROR2[ERROR2["PAUSED_H2_UPGRADE"] = 23] = "PAUSED_H2_UPGRADE";
      ERROR2[ERROR2["USER"] = 24] = "USER";
    })(ERROR = exports.ERROR || (exports.ERROR = {}));
    var TYPE;
    (function(TYPE2) {
      TYPE2[TYPE2["BOTH"] = 0] = "BOTH";
      TYPE2[TYPE2["REQUEST"] = 1] = "REQUEST";
      TYPE2[TYPE2["RESPONSE"] = 2] = "RESPONSE";
    })(TYPE = exports.TYPE || (exports.TYPE = {}));
    var FLAGS;
    (function(FLAGS2) {
      FLAGS2[FLAGS2["CONNECTION_KEEP_ALIVE"] = 1] = "CONNECTION_KEEP_ALIVE";
      FLAGS2[FLAGS2["CONNECTION_CLOSE"] = 2] = "CONNECTION_CLOSE";
      FLAGS2[FLAGS2["CONNECTION_UPGRADE"] = 4] = "CONNECTION_UPGRADE";
      FLAGS2[FLAGS2["CHUNKED"] = 8] = "CHUNKED";
      FLAGS2[FLAGS2["UPGRADE"] = 16] = "UPGRADE";
      FLAGS2[FLAGS2["CONTENT_LENGTH"] = 32] = "CONTENT_LENGTH";
      FLAGS2[FLAGS2["SKIPBODY"] = 64] = "SKIPBODY";
      FLAGS2[FLAGS2["TRAILING"] = 128] = "TRAILING";
      FLAGS2[FLAGS2["TRANSFER_ENCODING"] = 512] = "TRANSFER_ENCODING";
    })(FLAGS = exports.FLAGS || (exports.FLAGS = {}));
    var LENIENT_FLAGS;
    (function(LENIENT_FLAGS2) {
      LENIENT_FLAGS2[LENIENT_FLAGS2["HEADERS"] = 1] = "HEADERS";
      LENIENT_FLAGS2[LENIENT_FLAGS2["CHUNKED_LENGTH"] = 2] = "CHUNKED_LENGTH";
      LENIENT_FLAGS2[LENIENT_FLAGS2["KEEP_ALIVE"] = 4] = "KEEP_ALIVE";
    })(LENIENT_FLAGS = exports.LENIENT_FLAGS || (exports.LENIENT_FLAGS = {}));
    var METHODS;
    (function(METHODS2) {
      METHODS2[METHODS2["DELETE"] = 0] = "DELETE";
      METHODS2[METHODS2["GET"] = 1] = "GET";
      METHODS2[METHODS2["HEAD"] = 2] = "HEAD";
      METHODS2[METHODS2["POST"] = 3] = "POST";
      METHODS2[METHODS2["PUT"] = 4] = "PUT";
      METHODS2[METHODS2["CONNECT"] = 5] = "CONNECT";
      METHODS2[METHODS2["OPTIONS"] = 6] = "OPTIONS";
      METHODS2[METHODS2["TRACE"] = 7] = "TRACE";
      METHODS2[METHODS2["COPY"] = 8] = "COPY";
      METHODS2[METHODS2["LOCK"] = 9] = "LOCK";
      METHODS2[METHODS2["MKCOL"] = 10] = "MKCOL";
      METHODS2[METHODS2["MOVE"] = 11] = "MOVE";
      METHODS2[METHODS2["PROPFIND"] = 12] = "PROPFIND";
      METHODS2[METHODS2["PROPPATCH"] = 13] = "PROPPATCH";
      METHODS2[METHODS2["SEARCH"] = 14] = "SEARCH";
      METHODS2[METHODS2["UNLOCK"] = 15] = "UNLOCK";
      METHODS2[METHODS2["BIND"] = 16] = "BIND";
      METHODS2[METHODS2["REBIND"] = 17] = "REBIND";
      METHODS2[METHODS2["UNBIND"] = 18] = "UNBIND";
      METHODS2[METHODS2["ACL"] = 19] = "ACL";
      METHODS2[METHODS2["REPORT"] = 20] = "REPORT";
      METHODS2[METHODS2["MKACTIVITY"] = 21] = "MKACTIVITY";
      METHODS2[METHODS2["CHECKOUT"] = 22] = "CHECKOUT";
      METHODS2[METHODS2["MERGE"] = 23] = "MERGE";
      METHODS2[METHODS2["M-SEARCH"] = 24] = "M-SEARCH";
      METHODS2[METHODS2["NOTIFY"] = 25] = "NOTIFY";
      METHODS2[METHODS2["SUBSCRIBE"] = 26] = "SUBSCRIBE";
      METHODS2[METHODS2["UNSUBSCRIBE"] = 27] = "UNSUBSCRIBE";
      METHODS2[METHODS2["PATCH"] = 28] = "PATCH";
      METHODS2[METHODS2["PURGE"] = 29] = "PURGE";
      METHODS2[METHODS2["MKCALENDAR"] = 30] = "MKCALENDAR";
      METHODS2[METHODS2["LINK"] = 31] = "LINK";
      METHODS2[METHODS2["UNLINK"] = 32] = "UNLINK";
      METHODS2[METHODS2["SOURCE"] = 33] = "SOURCE";
      METHODS2[METHODS2["PRI"] = 34] = "PRI";
      METHODS2[METHODS2["DESCRIBE"] = 35] = "DESCRIBE";
      METHODS2[METHODS2["ANNOUNCE"] = 36] = "ANNOUNCE";
      METHODS2[METHODS2["SETUP"] = 37] = "SETUP";
      METHODS2[METHODS2["PLAY"] = 38] = "PLAY";
      METHODS2[METHODS2["PAUSE"] = 39] = "PAUSE";
      METHODS2[METHODS2["TEARDOWN"] = 40] = "TEARDOWN";
      METHODS2[METHODS2["GET_PARAMETER"] = 41] = "GET_PARAMETER";
      METHODS2[METHODS2["SET_PARAMETER"] = 42] = "SET_PARAMETER";
      METHODS2[METHODS2["REDIRECT"] = 43] = "REDIRECT";
      METHODS2[METHODS2["RECORD"] = 44] = "RECORD";
      METHODS2[METHODS2["FLUSH"] = 45] = "FLUSH";
    })(METHODS = exports.METHODS || (exports.METHODS = {}));
    exports.METHODS_HTTP = [
      METHODS.DELETE,
      METHODS.GET,
      METHODS.HEAD,
      METHODS.POST,
      METHODS.PUT,
      METHODS.CONNECT,
      METHODS.OPTIONS,
      METHODS.TRACE,
      METHODS.COPY,
      METHODS.LOCK,
      METHODS.MKCOL,
      METHODS.MOVE,
      METHODS.PROPFIND,
      METHODS.PROPPATCH,
      METHODS.SEARCH,
      METHODS.UNLOCK,
      METHODS.BIND,
      METHODS.REBIND,
      METHODS.UNBIND,
      METHODS.ACL,
      METHODS.REPORT,
      METHODS.MKACTIVITY,
      METHODS.CHECKOUT,
      METHODS.MERGE,
      METHODS["M-SEARCH"],
      METHODS.NOTIFY,
      METHODS.SUBSCRIBE,
      METHODS.UNSUBSCRIBE,
      METHODS.PATCH,
      METHODS.PURGE,
      METHODS.MKCALENDAR,
      METHODS.LINK,
      METHODS.UNLINK,
      METHODS.PRI,
      METHODS.SOURCE
    ];
    exports.METHODS_ICE = [
      METHODS.SOURCE
    ];
    exports.METHODS_RTSP = [
      METHODS.OPTIONS,
      METHODS.DESCRIBE,
      METHODS.ANNOUNCE,
      METHODS.SETUP,
      METHODS.PLAY,
      METHODS.PAUSE,
      METHODS.TEARDOWN,
      METHODS.GET_PARAMETER,
      METHODS.SET_PARAMETER,
      METHODS.REDIRECT,
      METHODS.RECORD,
      METHODS.FLUSH,
      METHODS.GET,
      METHODS.POST
    ];
    exports.METHOD_MAP = utils_1.enumToMap(METHODS);
    exports.H_METHOD_MAP = {};
    Object.keys(exports.METHOD_MAP).forEach((key2) => {
      if (/^H/.test(key2)) {
        exports.H_METHOD_MAP[key2] = exports.METHOD_MAP[key2];
      }
    });
    var FINISH;
    (function(FINISH2) {
      FINISH2[FINISH2["SAFE"] = 0] = "SAFE";
      FINISH2[FINISH2["SAFE_WITH_CB"] = 1] = "SAFE_WITH_CB";
      FINISH2[FINISH2["UNSAFE"] = 2] = "UNSAFE";
    })(FINISH = exports.FINISH || (exports.FINISH = {}));
    exports.ALPHA = [];
    for (let i2 = "A".charCodeAt(0); i2 <= "Z".charCodeAt(0); i2++) {
      exports.ALPHA.push(String.fromCharCode(i2));
      exports.ALPHA.push(String.fromCharCode(i2 + 32));
    }
    exports.NUM_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    };
    exports.HEX_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    };
    exports.NUM = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ];
    exports.ALPHANUM = exports.ALPHA.concat(exports.NUM);
    exports.MARK = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
    exports.USERINFO_CHARS = exports.ALPHANUM.concat(exports.MARK).concat(["%", ";", ":", "&", "=", "+", "$", ","]);
    exports.STRICT_URL_CHAR = [
      "!",
      '"',
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~"
    ].concat(exports.ALPHANUM);
    exports.URL_CHAR = exports.STRICT_URL_CHAR.concat(["	", "\f"]);
    for (let i2 = 128; i2 <= 255; i2++) {
      exports.URL_CHAR.push(i2);
    }
    exports.HEX = exports.NUM.concat(["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"]);
    exports.STRICT_TOKEN = [
      "!",
      "#",
      "$",
      "%",
      "&",
      "'",
      "*",
      "+",
      "-",
      ".",
      "^",
      "_",
      "`",
      "|",
      "~"
    ].concat(exports.ALPHANUM);
    exports.TOKEN = exports.STRICT_TOKEN.concat([" "]);
    exports.HEADER_CHARS = ["	"];
    for (let i2 = 32; i2 <= 255; i2++) {
      if (i2 !== 127) {
        exports.HEADER_CHARS.push(i2);
      }
    }
    exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS.filter((c) => c !== 44);
    exports.MAJOR = exports.NUM_MAP;
    exports.MINOR = exports.MAJOR;
    var HEADER_STATE;
    (function(HEADER_STATE2) {
      HEADER_STATE2[HEADER_STATE2["GENERAL"] = 0] = "GENERAL";
      HEADER_STATE2[HEADER_STATE2["CONNECTION"] = 1] = "CONNECTION";
      HEADER_STATE2[HEADER_STATE2["CONTENT_LENGTH"] = 2] = "CONTENT_LENGTH";
      HEADER_STATE2[HEADER_STATE2["TRANSFER_ENCODING"] = 3] = "TRANSFER_ENCODING";
      HEADER_STATE2[HEADER_STATE2["UPGRADE"] = 4] = "UPGRADE";
      HEADER_STATE2[HEADER_STATE2["CONNECTION_KEEP_ALIVE"] = 5] = "CONNECTION_KEEP_ALIVE";
      HEADER_STATE2[HEADER_STATE2["CONNECTION_CLOSE"] = 6] = "CONNECTION_CLOSE";
      HEADER_STATE2[HEADER_STATE2["CONNECTION_UPGRADE"] = 7] = "CONNECTION_UPGRADE";
      HEADER_STATE2[HEADER_STATE2["TRANSFER_ENCODING_CHUNKED"] = 8] = "TRANSFER_ENCODING_CHUNKED";
    })(HEADER_STATE = exports.HEADER_STATE || (exports.HEADER_STATE = {}));
    exports.SPECIAL_HEADERS = {
      "connection": HEADER_STATE.CONNECTION,
      "content-length": HEADER_STATE.CONTENT_LENGTH,
      "proxy-connection": HEADER_STATE.CONNECTION,
      "transfer-encoding": HEADER_STATE.TRANSFER_ENCODING,
      "upgrade": HEADER_STATE.UPGRADE
    };
  }
});

// node_modules/undici/lib/llhttp/llhttp.wasm.js
var require_llhttp_wasm = __commonJS({
  "node_modules/undici/lib/llhttp/llhttp.wasm.js"(exports, module2) {
    init_shims();
    module2.exports = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAAzk4AwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAYGAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAAMEBQFwAQ4OBQMBAAIGCAF/AUGAuAQLB/UEHwZtZW1vcnkCAAtfaW5pdGlhbGl6ZQAJGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAtsbGh0dHBfaW5pdAAKGGxsaHR0cF9zaG91bGRfa2VlcF9hbGl2ZQA1DGxsaHR0cF9hbGxvYwAMBm1hbGxvYwA6C2xsaHR0cF9mcmVlAA0EZnJlZQA8D2xsaHR0cF9nZXRfdHlwZQAOFWxsaHR0cF9nZXRfaHR0cF9tYWpvcgAPFWxsaHR0cF9nZXRfaHR0cF9taW5vcgAQEWxsaHR0cF9nZXRfbWV0aG9kABEWbGxodHRwX2dldF9zdGF0dXNfY29kZQASEmxsaHR0cF9nZXRfdXBncmFkZQATDGxsaHR0cF9yZXNldAAUDmxsaHR0cF9leGVjdXRlABUUbGxodHRwX3NldHRpbmdzX2luaXQAFg1sbGh0dHBfZmluaXNoABcMbGxodHRwX3BhdXNlABgNbGxodHRwX3Jlc3VtZQAZG2xsaHR0cF9yZXN1bWVfYWZ0ZXJfdXBncmFkZQAaEGxsaHR0cF9nZXRfZXJybm8AGxdsbGh0dHBfZ2V0X2Vycm9yX3JlYXNvbgAcF2xsaHR0cF9zZXRfZXJyb3JfcmVhc29uAB0UbGxodHRwX2dldF9lcnJvcl9wb3MAHhFsbGh0dHBfZXJybm9fbmFtZQAfEmxsaHR0cF9tZXRob2RfbmFtZQAgGmxsaHR0cF9zZXRfbGVu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f2pB5ABJDQAgAEHMAUYNACAAQbACRg0AQQQhBSAEQYgEcUGABEYNAiAEQShxRQ0CC0EADwtBAEEDIAApAyBQGyEFCyAFC10BAn9BACEBAkAgAC0AKEEBRg0AIAAvATIiAkGcf2pB5ABJDQAgAkHMAUYNACACQbACRg0AIAAvATAiAEHAAHENAEEBIQEgAEGIBHFBgARGDQAgAEEocUUhAQsgAQuiAQEDfwJAAkACQCAALQAqRQ0AIAAtACtFDQBBACEDIAAvATAiBEECcUUNAQwCC0EAIQMgAC8BMCIEQQFxRQ0BC0EBIQMgAC0AKEEBRg0AIAAvATIiBUGcf2pB5ABJDQAgBUHMAUYNACAFQbACRg0AIARBwABxDQBBACEDIARBiARxQYAERg0AIARBKHFBAEchAwsgAEEAOwEwIABBADoALyADC5QBAQJ/AkACQAJAIAAtACpFDQAgAC0AK0UNAEEAIQEgAC8BMCICQQJxRQ0BDAILQQAhASAALwEwIgJBAXFFDQELQQEhASAALQAoQQFGDQAgAC8BMiIAQZx/akHkAEkNACAAQcwBRg0AIABBsAJGDQAgAkHAAHENAEEAIQEgAkGIBHFBgARGDQAgAkEocUEARyEBCyABC08AIABBGGpCADcDACAAQgA3AwAgAEEwakIANwMAIABBKGpCADcDACAAQSBqQgA3AwAgAEEQakIANwMAIABBCGpCADcDACAAQbwBNgIcQQALewEBfwJAIAAoAgwiAw0AAkAgACgCBEUNACAAIAE2AgQLAkAgACABIAIQuICAgAAiAw0AIAAoAgwPCyAAIAM2AhxBACEDIAAoAgQiAUUNACAAIAEgAiAAKAIIEYGAgIAAACIBRQ0AIAAgAjYCFCAAIAE2AgwgASEDCyADC9POAQMcfwN+BX8jgICAgABBEGsiAySAgICAACABIQQgASEFIAEhBiABIQcgASEIIAEhCSABIQogASELIAEhDCABIQ0gASEOIAEhDyABIRAgASERIAEhEiABIRMgASEUIAEhFSABIRYgASEXIAEhGCABIRkgASEaIAEhGyABIRwgASEdAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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HgwTC0GZASEeDBILQZ0BIR4MEQtBmgEhHgwQC0EBIR4MDwtBmwEhHgwOC0GcASEeDA0LQZ4BIR4MDAtBoAEhHgwLC0GfASEeDAoLQaEBIR4MCQtBogEhHgwIC0GjASEeDAcLQaQBIR4MBgtBpQEhHgwFC0GmASEeDAQLQacBIR4MAwtBqAEhHgwCC0GpASEeDAELQa8BIR4LA0ACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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AbsBuwG7AbsBuwG7AbsBuwG7AQG7AQsgCEEBaiEBQdQAIR4MmAILIAhBAWohAUHVACEeDJcCC0HnACEeIAEiIiACRg2mAiACICJrIAAoAgAiJmohIyAiIQggJiEBAkADQCAILQAAIAFB7bOAgABqLQAARw25ASABQQJGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICM2AgAMpwILIABBADYCACAiICZrQQNqIQFBECEeDLYBC0HoACEeIAEiIiACRg2lAiACICJrIAAoAgAiJmohIyAiIQggJiEBAkADQCAILQAAIAFB9rKAgABqLQAARw24ASABQQVGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICM2AgAMpgILIABBADYCACAiICZrQQZqIQFBFiEeDLUBC0HpACEeIAEiIiACRg2kAiACICJrIAAoAgAiJmohIyAiIQggJiEBAkADQCAILQAAIAFB/LKAgABqLQAARw23ASABQQNGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICM2AgAMpQILIABBADYCACAiICZrQQRqIQFBBSEeDLQBCwJAIAEiCCACRw0AQeoAIR4MpAILIAgtAABB2QBHDbUBIAhBAWohAUEIIR4MswELAkAgASIIIAJHDQBB6wAhHgyjAgsCQAJAIAgtAABBsn9qDgMAtgEBtgELIAhBAWohAUHZACEeDJMCCyAIQQFqIQFB2gAhHgySAgsCQCABIgggAkcNAEHsACEeDKICCwJAAkAgCC0AAEG4f2oOCAC1AbUBtQG1AbUBtQEBtQELIAhBAWohAUHYACEeDJICCyAIQQFqIQFB2wAhHgyRAgtB7QAhHiABIiIgAkYNoAIgAiAiayAAKAIAIiZqISMgIiEIICYhAQJAA0AgCC0AACABQYCzgIAAai0AAEcNswEgAUECRg0BIAFBAWohASAIQQFqIgggAkcNAAsgACAjNgIADKECC0EAIR4gAEEANgIAICIgJmtBA2ohAQywAQtB7gAhHiABIiIgAkYNnwIgAiAiayAAKAIAIiZqISMgIiEIICYhAQJAA0AgCC0AACABQYOzgIAAai0AAEcNsgEgAUEERg0BIAFBAWohASAIQQFqIgggAkcNAAsgACAjNgIADKACCyAAQQA2AgAgIiAma0EFaiEBQSMhHgyvAQsCQCABIgggAkcN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ImohJiAeIQggIiEBAkADQCAILQAAIAFBp7OAgABqLQAARw2gASABQQFGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICY2AgBBgAEhHgyOAgsgAEEANgIAIB4gImtBAmohAUELIR4MnQELAkAgASIIIAJHDQBBgQEhHgyNAgsCQAJAAkACQCAILQAAQVNqDiMAogGiAaIBogGiAaIBogGiAaIBogGiAaIBogGiAaIBogGiAaIBogGiAaIBogGiAQGiAaIBogGiAaIBAqIBogGiAQOiAQsgCEEBaiEBQekAIR4M/wELIAhBAWohAUHqACEeDP4BCyAIQQFqIQFB7wAhHgz9AQsgCEEBaiEBQfAAIR4M/AELAkAgASIeIAJHDQBBggEhHgyMAgsgAiAeayAAKAIAIiJqISYgHiEIICIhAQJAA0AgCC0AACABQamzgIAAai0AAEcNngEgAUEERg0BIAFBAWohASAIQQFqIgggAkcNAAsgACAmNgIAQYIBIR4MjAILIABBADYCACAeICJrQQVqIQFBGSEeDJsBCwJAIAEiIiACRw0AQYMBIR4MiwILIAIgImsgACgCACImaiEeICIhCCAmIQECQANAIAgtAAAgAUGus4CAAGotAABHDZ0BIAFBBUYNASABQQFqIQEgCEEBaiIIIAJHDQALIAAgHjYCAEGDASEeDIsCCyAAQQA2AgBBBiEeICIgJmtBBmohAQyaAQsCQCABIh4gAkcNAEGEASEeDIoCCyACIB5rIAAoAgAiImohJiAeIQggIiEBAkADQCAILQAAIAFBtLOAgABqLQAARw2cASABQQFGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICY2AgBBhAEhHgyKAgsgAEEANgIAIB4gImtBAmohAUEcIR4MmQELAkAgASIeIAJHDQBBhQEhHgyJAgsgAiAeayAAKAIAIiJqISYgHiEIICIhAQJAA0AgCC0AACABQbazgIAAai0AAEcNmwEgAUEBRg0BIAFBAWohASAIQQFqIgggAkcNAAsgACAmNgIAQYUBIR4MiQILIABBADYCACAeICJrQQJqIQFBJyEeDJgBCwJAIAEiCCACRw0AQYYBIR4MiAILAkACQCAILQAAQax/ag4CAAGbAQsgCEEBaiEBQfQAIR4M+AELIAhBAWohAUH1ACEeDPcBCwJAIAEiHiAC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IiEBDDELIABBxAA2AhwgACAiNgIUIAAgATYCDEEAIR4MeQsgACgCBCEBIABBADYCBAJAIAAgASAiEKSAgIAAIgENACAiIQEMMQsgAEHFADYCHCAAICI2AhQgACABNgIMQQAhHgx4CyAAKAIEIQEgAEEANgIEAkAgACABICIQpICAgAAiAQ0AICIhAQw1CyAAQdAANgIcIAAgIjYCFCAAIAE2AgxBACEeDHcLIABBADYCHCAAICI2AhQgAEHQjICAADYCECAAQQc2AgxBACEeDHYLIABBADYCHCAAIAE2AhQgAEHQjICAADYCECAAQQc2AgxBACEeDHULQQAhHiAAQQA2AhwgACAiNgIUIABBv5SAgAA2AhAgAEEHNgIMDHQLIABBADYCHCAAICI2AhQgAEG/lICAADYCECAAQQc2AgxBACEeDHMLIABBADYCHCAAICI2AhQgAEHUjoCAADYCECAAQQc2AgxBACEeDHILIABBADYCHCAAIAE2AhQgAEHBk4CAADYCECAAQQY2AgxBACEeDHELIABBADYCACAiICZrQQZqIQFBJCEeCyAAIB46ACkgASEBDE4LIABBADYCAAtBACEeIABBADYCHCAAIAg2AhQgAEGklICAADYCECAAQQY2AgwMbQsgACgCBCETIABBADYCBCAAIBMgHhCmgICAACITDQEgHkEBaiETC0GdASEeDFsLIABBqgE2AhwgACATNgIMIAAgHkEBajYCFEEAIR4MagsgACgCBCEUIABBADYCBCAAIBQgHhCmgICAACIUDQEgHkEBaiEUC0GaASEeDFgLIABBqwE2AhwgACAUNgIMIAAgHkEBajYCFEEAIR4MZwsgAEEANgIcIAAgFTYCFCAAQfOKgIAANgIQIABBDTYCDEEAIR4MZgsgAEEANgIcIAAgFjYCFCAAQc6NgIAANgIQIABBCTYCDEEAIR4MZQtBASEeCyAAIB46ACsgF0EBaiEWDC4LIABBADYCHCAAIBc2AhQgAEGijYCAADYCECAAQQk2AgxBACEeDGILIABBADYCHCAAIBg2AhQgAEHFioCAADYCECAAQQk2AgxBACEeDGELQQEhHgsgACAeOgAqIBlBAWohGAwsCyAAQQA2AhwgACAZNgIUIABBuI2AgAA2AhAgAEEJNgIMQQAhHgxeCyAAQQA2AhwgACAZNgIUIABBuZuAgAA2AhAgAEEINgIMIABBADYCAEEAIR4MXQsgAEEANgIAC0EAIR4gAEEANgIcIAAgCDYCFCAAQYuUgIAANgIQIABBCDYCDAxbCyAAQQI6ACggAEEANgIAIBsgGWtBA2ohGQw2CyAAQQI6AC8gACAIIAIQo4CAgAAiHg0BQa8BIR4MSQsgAC0AKEF/ag4CHiAfCyAeQRVHDScgAEG7ATYCHCAAIAg2AhQgAEGnkoCAADYCECAAQRU2AgxBACEeDFcLQQAhHgxGC0ECIR4MRQtBDiEeDEQLQRAhHgxDC0EcIR4MQgtBFCEeDEELQRYhHgxAC0EXIR4MPwtBGSEeDD4LQRohHgw9C0E6IR4MPAtBIyEeDDsLQSQhHgw6C0EwIR4MOQtBOyEeDDgLQTwhHgw3C0E+IR4MNgtBPyEeDDULQcAAIR4MNAtBwQAhHgwzC0HFACEeDDILQccAIR4MMQtByAAhHgwwC0HKACEeDC8LQd8AIR4MLgtB4gAhHgwtC0H7ACEeDCwLQYUBIR4MKwtBlwEhHgwqC0GZASEeDCkLQakBIR4MKAtBpAEhHgwnC0GbASEeDCYLQZ4BIR4MJQtBnwEhHgwkC0GhASEeDCMLQaIBIR4MIgtBpwEhHgwhC0GoASEeDCALIABBADYCHCAAIAg2AhQgAEHmi4CAADYCECAAQRA2AgxBACEeDC8LIABBADYCBCAAIB0gHRCqgICAACIBRQ0BIABBLTYCHCAAIAE2AgwgACAdQQFqNgIUQQAhHgwuCyAAKAIEIQggAEEANgIEAkAgACAIIAEQqoCAgAAiCEUNACAAQS42AhwgACAINgIMIAAgAUEBajYCFEEAIR4MLgsgAUEBaiEBDB4LIB1BAWohAQweCyAAQQA2AhwgACAdNgIUIABBuo+AgAA2AhAgAEEENgIMQQAhHgwrCyAAQSk2AhwgACABNgIUIAAgCDYCDEEAIR4MKgsgHEEBaiEBDB4LIABBCjYCHCAAIAE2AhQgAEGRkoCAADYCECAAQRU2AgxBACEeDCgLIABBEDYCHCAAIAE2AhQgAEG+koCAADYCECAAQRU2AgxBACEeDCcLIABBADYCHCAAIB42AhQgAEGIjICAADYCECAAQRQ2AgxBACEeDCYLIABBBDYCHCAAIAE2AhQgAEHWkoCAADYCECAAQRU2AgxBACEeDCULIABBADYCACAIICJrQQVqIRkLQaMBIR4MEwsgAEEANgIAICIgJmtBAmohAUHjACEeDBILIABBADYCACAAQYEEOwEoIBogHmtBAmohAQtB0wAhHgwQCyABIQECQCAALQApQQVHDQBB0gAhHgwQC0HRACEeDA8LQQAhHiAAQQA2AhwgAEG6joCAADYCECAAQQc2AgwgACAiQQFqNgIUDB4LIABBADYCACAmICNrQQJqIQFBNCEeDA0LIAEhAQtBLSEeDAsLAkAgASIdIAJGDQADQAJAIB0tAABBgKKAgABqLQAAIgFBAUYNACABQQJHDQMgHUEBaiEBDAQLIB1BAWoiHSACRw0AC0ExIR4MGwtBMSEeDBoLIABBADoALCAdIQEMAQtBDCEeDAgLQS8hHgwHCyABQQFqIQFBIiEeDAYLQR8hHgwFCyAAQQA2AgAgIyAka0EEaiEBQQYhHgsgACAeOgAsIAEhAUENIR4MAwsgAEEANgIAICYgI2tBB2ohAUELIR4MAgsgAEEANgIACyAAQQA6ACwgHCEBQQkhHgwACwtBACEeIABBADYCHCAAIAE2AhQgAEG4kYCAADYCECAAQQ82AgwMDgtBACEeIABBADYCHCAAIAE2AhQgAEG4kYCAADYCECAAQQ82AgwMDQtBACEeIABBADYCHCAAIAE2AhQgAEGWj4CAADYCECAAQQs2AgwMDAtBACEeIABBADYCHCAAIAE2AhQgAEHxiICAADYCECAAQQs2AgwMCwtBACEeIABBADYCHCAAIAE2AhQgAEGIjYCAADYCECAAQQo2AgwMCgsgAEECNgIcIAAgATYCFCAAQfCSgIAANgIQIABBFjYCDEEAIR4MCQtBASEeDAgLQcYAIR4gASIBIAJGDQcgA0EIaiAAIAEgAkHYpoCAAEEKELmAgIAAIAMoAgwhASADKAIIDgMBBwIACxC/gICAAAALIABBADYCHCAAQYmTgIAANgIQIABBFzYCDCAAIAFBAWo2AhRBACEeDAULIABBADYCHCAAIAE2AhQgAEGek4CAADYCECAAQQk2AgxBACEeDAQLAkAgASIBIAJHDQBBISEeDAQLAkAgAS0AAEEKRg0AIABBADYCHCAAIAE2AhQgAEHujICAADYCECAAQQo2AgxBACEeDAQLIAAoAgQhCCAAQQA2AgQgACAIIAEQqoCAgAAiCA0BIAFBAWohAQtBACEeIABBADYCHCAAIAE2AhQgAEHqkICAADYCECAAQRk2AgwMAgsgAEEgNgIcIAAgCDYCDCAAIAFBAWo2AhRBACEeDAELAkAgASIBIAJHDQBBFCEeDAELIABBiYCAgAA2AgggACABNgIEQRMhHgsgA0EQaiSAgICAACAeC68BAQJ/IAEoAgAhBgJAAkAgAiADRg0AIAQgBmohBCAGIANqIAJrIQcgAiAGQX9zIAVqIgZqIQUDQAJAIAItAAAgBC0AAEYNAEECIQQMAwsCQCAGDQBBACEEIAUhAgwDCyAGQX9qIQYgBEEBaiEEIAJBAWoiAiADRw0ACyAHIQYgAyECCyAAQQE2AgAgASAGNgIAIAAgAjYCBA8LIAFBADYCACAAIAQ2AgAgACACNgIECwoAIAAQu4CAgAALlTcBC38jgICAgABBEGsiASSAgICAAAJAQQAoAqC0gIAADQBBABC+gICAAEGAuISAAGsiAkHZAEkNAEEAIQMCQEEAKALgt4CAACIEDQBBAEJ/NwLst4CAAEEAQoCAhICAgMAANwLkt4CAAEEAIAFBCGpBcHFB2KrVqgVzIgQ2AuC3gIAAQQBBADYC9LeAgABBAEEANgLEt4CAAAtBACACNgLMt4CAAEEAQYC4hIAANgLIt4CAAEEAQYC4hIAANgKYtICAAEEAIAQ2Aqy0gIAAQQBBfzYCqLSAgAADQCADQcS0gIAAaiADQbi0gIAAaiIENgIAIAQgA0GwtICAAGoiBTYCACADQby0gIAAaiAFNgIAIANBzLSAgABqIANBwLSAgABqIgU2AgAgBSAENgIAIANB1LSAgABqIANByLSAgABqIgQ2AgAgBCAFNgIAIANB0LSAgABqIAQ2AgAgA0EgaiIDQYACRw0AC0GAuISAAEF4QYC4hIAAa0EPcUEAQYC4hIAAQQhqQQ9xGyIDaiIEQQRqIAIgA2tBSGoiA0EBcjYCAEEAQQAoAvC3gIAANgKktICAAEEAIAQ2AqC0gIAAQQAgAzYClLSAgAAgAkGAuISAAGpBTGpBODYCAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkAgAEHsAUsNAAJAQQAoAoi0gIAAIgZBECAAQRNqQXBxIABBC0kbIgJBA3YiBHYiA0EDcUUNACADQQFxIARyQQFzIgVBA3QiAEG4tICAAGooAgAiBEEIaiEDAkACQCAEKAIIIgIgAEGwtICAAGoiAEcNAEEAIAZBfiAFd3E2Aoi0gIAADAELIAAgAjYCCCACIAA2AgwLIAQgBUEDdCIFQQNyNgIEIAQgBWpBBGoiBCAEKAIAQQFyNgIADAwLIAJBACgCkLSAgAAiB00NAQJAIANFDQACQAJAIAMgBHRBAiAEdCIDQQAgA2tycSIDQQAgA2txQX9qIgMgA0EMdkEQcSIDdiIEQQV2QQhxIgUgA3IgBCAFdiIDQQJ2QQRxIgRyIAMgBHYiA0EBdkECcSIEciADIAR2IgNBAXZBAXEiBHIgAyAEdmoiBUEDdCIAQbi0gIAAaigCACIEKAIIIgMgAEGwtICAAGoiAEcNAEEAIAZBfiAFd3EiBjYCiLSAgAAMAQsgACADNgIIIAMgADYCDAsgBEEIaiEDIAQgAkEDcjYCBCAEIAVBA3QiBWogBSACayIFNgIAIAQgAmoiACAFQQFyNgIEAkAgB0UNACAHQQN2IghBA3RBsLSAgABqIQJBACgCnLSAgAAhBAJAAkAgBkEBIAh0IghxDQBBACAGIAhyNgKItICAACACIQgMAQsgAigCCCEICyAIIAQ2AgwgAiAENgIIIAQgAjYCDCAEIAg2AggLQQAgADYCnLSAgABBACAFNgKQtICAAAwMC0EAKAKMtICAACIJRQ0BIAlBACAJa3FBf2oiAyADQQx2QRBxIgN2IgRBBXZBCHEiBSADciAEIAV2IgNBAnZBBHEiBHIgAyAEdiIDQQF2QQJxIgRyIAMgBHYiA0EBdkEBcSIEciADIAR2akECdEG4toCAAGooAgAiACgCBEF4cSACayEEIAAhBQJAA0ACQCAFKAIQIgMNACAFQRRqKAIAIgNFDQILIAMoAgRBeHEgAmsiBSAEIAUgBEkiBRshBCADIAAgBRshACADIQUMAAsLIAAoAhghCgJAIAAoAgwiCCAARg0AQQAoApi0gIAAIAAoAggiA0saIAggAzYCCCADIAg2AgwMCwsCQCAAQRRqIgUoAgAiAw0AIAAoAhAiA0UNAyAAQRBqIQULA0AgBSELIAMiCEEUaiIFKAIAIgMNACAIQRBqIQUgCCgCECIDDQALIAtBADYCAAwKC0F/IQIgAEG/f0sNACAAQRNqIgNBcHEhAkEAKAKMtICAACIHRQ0AQQAhCwJAIAJBgAJJDQBBHyELIAJB////B0sNACADQQh2IgMgA0GA/j9qQRB2QQhxIgN0IgQgBEGA4B9qQRB2QQRxIgR0IgUgBUGAgA9qQRB2QQJxIgV0QQ92IAMgBHIgBXJrIgNBAXQgAiADQRVqdkEBcXJBHGohCwtBACACayEEAkACQAJAAkAgC0ECdEG4toCAAGooAgAiBQ0AQQAhA0EAIQgMAQtBACEDIAJBAEEZIAtBAXZrIAtBH0YbdCEAQQAhCANAAkAgBSgCBEF4cSACayIGIARPDQAgBiEEIAUhCCAGDQBBACEEIAUhCCAFIQMMAwsgAyAFQRRqKAIAIgYgBiAFIABBHXZBBHFqQRBqKAIAIgVGGyADIAYbIQMgAEEBdCEAIAUNAAsLAkAgAyAIcg0AQQAhCEECIAt0IgNBACADa3IgB3EiA0UNAyADQQAgA2txQX9qIgMgA0EMdkEQcSIDdiIFQQV2QQhxIgAgA3IgBSAAdiIDQQJ2QQRxIgVyIAMgBXYiA0EBdkECcSIFciADIAV2IgNBAXZBAXEiBXIgAyAFdmpBAnRBuLaAgABqKAIAIQMLIANFDQELA0AgAygCBEF4cSACayIGIARJIQACQCADKAIQIgUNACADQRRqKAIAIQULIAYgBCAAGyEEIAMgCCAAGyEIIAUhAyAFDQALCyAIRQ0AIARBACgCkLSAgAAgAmtPDQAgCCgCGCELAkAgCCgCDCIAIAhGDQBBACgCmLSAgAAgCCgCCCIDSxogACADNgIIIAMgADYCDAwJCwJAIAhBFGoiBSgCACIDDQAgCCgCECIDRQ0DIAhBEGohBQsDQCAFIQYgAyIAQRRqIgUoAgAiAw0AIABBEGohBSAAKAIQIgMNAAsgBkEANgIADAgLAkBBACgCkLSAgAAiAyACSQ0AQQAoApy0gIAAIQQCQAJAIAMgAmsiBUEQSQ0AIAQgAmoiACAFQQFyNgIEQQAgBTYCkLSAgABBACAANgKctICAACAEIANqIAU2AgAgBCACQQNyNgIEDAELIAQgA0EDcjYCBCADIARqQQRqIgMgAygCAEEBcjYCAEEAQQA2Apy0gIAAQQBBADYCkLSAgAALIARBCGohAwwKCwJAQQAoApS0gIAAIgAgAk0NAEEAKAKgtICAACIDIAJqIgQgACACayIFQQFyNgIEQQAgBTYClLSAgABBACAENgKgtICAACADIAJBA3I2AgQgA0EIaiEDDAoLAkACQEEAKALgt4CAAEUNAEEAKALot4CAACEEDAELQQBCfzcC7LeAgABBAEKAgISAgIDAADcC5LeAgABBACABQQxqQXBxQdiq1aoFczYC4LeAgABBAEEANgL0t4CAAEEAQQA2AsS3gIAAQYCABCEEC0EAIQMCQCAEIAJBxwBqIgdqIgZBACAEayILcSIIIAJLDQBBAEEwNgL4t4CAAAwKCwJAQQAoAsC3gIAAIgNFDQACQEEAKAK4t4CAACIEIAhqIgUgBE0NACAFIANNDQELQQAhA0EAQTA2Avi3gIAADAoLQQAtAMS3gIAAQQRxDQQCQAJAAkBBACgCoLSAgAAiBEUNAEHIt4CAACEDA0ACQCADKAIAIgUgBEsNACAFIAMoAgRqIARLDQMLIAMoAggiAw0ACwtBABC+gICAACIAQX9GDQUgCCEGAkBBACgC5LeAgAAiA0F/aiIEIABxRQ0AIAggAGsgBCAAakEAIANrcWohBgsgBiACTQ0FIAZB/v///wdLDQUCQEEAKALAt4CAACIDRQ0AQQAoAri3gIAAIgQgBmoiBSAETQ0GIAUgA0sNBgsgBhC+gICAACIDIABHDQEMBwsgBiAAayALcSIGQf7///8HSw0EIAYQvoCAgAAiACADKAIAIAMoAgRqRg0DIAAhAwsCQCADQX9GDQAgAkHIAGogBk0NAAJAIAcgBmtBACgC6LeAgAAiBGpBACAEa3EiBEH+////B00NACADIQAMBwsCQCAEEL6AgIAAQX9GDQAgBCAGaiEGIAMhAAwHC0EAIAZrEL6AgIAAGgwECyADIQAgA0F/Rw0FDAMLQQAhCAwHC0EAIQAMBQsgAEF/Rw0CC0EAQQAoAsS3gIAAQQRyNgLEt4CAAAsgCEH+////B0sNASAIEL6AgIAAIQBBABC+gICAACEDIABBf0YNASADQX9GDQEgACADTw0BIAMgAGsiBiACQThqTQ0BC0EAQQAoAri3gIAAIAZqIgM2Ari3gIAAAkAgA0EAKAK8t4CAAE0NAEEAIAM2Ary3gIAACwJAAkACQAJAQQAoAqC0gIAAIgRFDQBByLeAgAAhAwNAIAAgAygCACIFIAMoAgQiCGpGDQIgAygCCCIDDQAMAwsLAkACQEEAKAKYtICAACIDRQ0AIAAgA08NAQtBACAANgKYtICAAAtBACEDQQAgBjYCzLeAgABBACAANgLIt4CAAEEAQX82Aqi0gIAAQQBBACgC4LeAgAA2Aqy0gIAAQQBBADYC1LeAgAADQCADQcS0gIAAaiADQbi0gIAAaiIENgIAIAQgA0GwtICAAGoiBTYCACADQby0gIAAaiAFNgIAIANBzLSAgABqIANBwLSAgABqIgU2AgAgBSAENgIAIANB1LSAgABqIANByLSAgABqIgQ2AgAgBCAFNgIAIANB0LSAgABqIAQ2AgAgA0EgaiIDQYACRw0ACyAAQXggAGtBD3FBACAAQQhqQQ9xGyIDaiIEIAYgA2tBSGoiA0EBcjYCBEEAQQAoAvC3gIAANgKktICAAEEAIAQ2AqC0gIAAQQAgAzYClLSAgAAgBiAAakFMakE4NgIADAILIAMtAAxBCHENACAFIARLDQAgACAETQ0AIARBeCAEa0EPcUEAIARBCGpBD3EbIgVqIgBBACgClLSAgAAgBmoiCyAFayIFQQFyNgIEIAMgCCAGajYCBEEAQQAoAvC3gIAANgKktICAAEEAIAU2ApS0gIAAQQAgADYCoLSAgAAgCyAEakEEakE4NgIADAELAkAgAEEAKAKYtICAACILTw0AQQAgADYCmLSAgAAgACELCyAAIAZqIQhByLeAgAAhAwJAAkACQAJAAkACQAJAA0AgAygCACAIRg0BIAMoAggiAw0ADAILCyADLQAMQQhxRQ0BC0HIt4CAACEDA0ACQCADKAIAIgUgBEsNACAFIAMoAgRqIgUgBEsNAwsgAygCCCEDDAALCyADIAA2AgAgAyADKAIEIAZqNgIEIABBeCAAa0EPcUEAIABBCGpBD3EbaiIGIAJBA3I2AgQgCEF4IAhrQQ9xQQAgCEEIakEPcRtqIgggBiACaiICayEFAkAgBCAIRw0AQQAgAjYCoLSAgABBAEEAKAKUtICAACAFaiIDNgKUtICAACACIANBAXI2AgQMAwsCQEEAKAKctICAACAIRw0AQQAgAjYCnLSAgABBAEEAKAKQtICAACAFaiIDNgKQtICAACACIANBAXI2AgQgAiADaiADNgIADAMLAkAgCCgCBCIDQQNxQQFHDQAgA0F4cSEHAkACQCADQf8BSw0AIAgoAggiBCADQQN2IgtBA3RBsLSAgABqIgBGGgJAIAgoAgwiAyAERw0AQQBBACgCiLSAgABBfiALd3E2Aoi0gIAADAILIAMgAEYaIAMgBDYCCCAEIAM2AgwMAQsgCCgCGCEJAkACQCAIKAIMIgAgCEYNACALIAgoAggiA0saIAAgAzYCCCADIAA2AgwMAQsCQCAIQRRqIgMoAgAiBA0AIAhBEGoiAygCACIEDQBBACEADAELA0AgAyELIAQiAEEUaiIDKAIAIgQNACAAQRBqIQMgACgCECIEDQALIAtBADYCAAsgCUUNAAJAAkAgCCgCHCIEQQJ0Qbi2gIAAaiIDKAIAIAhHDQAgAyAANgIAIAANAUEAQQAoAoy0gIAAQX4gBHdxNgKMtICAAAwCCyAJQRBBFCAJKAIQIAhGG2ogADYCACAARQ0BCyAAIAk2AhgCQCAIKAIQIgNFDQAgACADNgIQIAMgADYCGAsgCCgCFCIDRQ0AIABBFGogAzYCACADIAA2AhgLIAcgBWohBSAIIAdqIQgLIAggCCgCBEF+cTYCBCACIAVqIAU2AgAgAiAFQQFyNgIEAkAgBUH/AUsNACAFQQN2IgRBA3RBsLSAgABqIQMCQAJAQQAoAoi0gIAAIgVBASAEdCIEcQ0AQQAgBSAEcjYCiLSAgAAgAyEEDAELIAMoAgghBAsgBCACNgIMIAMgAjYCCCACIAM2AgwgAiAENgIIDAMLQR8hAwJAIAVB////B0sNACAFQQh2IgMgA0GA/j9qQRB2QQhxIgN0IgQgBEGA4B9qQRB2QQRxIgR0IgAgAEGAgA9qQRB2QQJxIgB0QQ92IAMgBHIgAHJrIgNBAXQgBSADQRVqdkEBcXJBHGohAwsgAiADNgIcIAJCADcCECADQQJ0Qbi2gIAAaiEEAkBBACgCjLSAgAAiAEEBIAN0IghxDQAgBCACNgIAQQAgACAIcjYCjLSAgAAgAiAENgIYIAIgAjYCCCACIAI2AgwMAwsgBUEAQRkgA0EBdmsgA0EfRht0IQMgBCgCACEAA0AgACIEKAIEQXhxIAVGDQIgA0EddiEAIANBAXQhAyAEIABBBHFqQRBqIggoAgAiAA0ACyAIIAI2AgAgAiAENgIYIAIgAjYCDCACIAI2AggMAgsgAEF4IABrQQ9xQQAgAEEIakEPcRsiA2oiCyAGIANrQUhqIgNBAXI2AgQgCEFMakE4NgIAIAQgBUE3IAVrQQ9xQQAgBUFJakEPcRtqQUFqIgggCCAEQRBqSRsiCEEjNgIEQQBBACgC8LeAgAA2AqS0gIAAQQAgCzYCoLSAgABBACADNgKUtICAACAIQRBqQQApAtC3gIAANwIAIAhBACkCyLeAgAA3AghBACAIQQhqNgLQt4CAAEEAIAY2Asy3gIAAQQAgADYCyLeAgABBAEEANgLUt4CAACAIQSRqIQMDQCADQQc2AgAgBSADQQRqIgNLDQALIAggBEYNAyAIIAgoAgRBfnE2AgQgCCAIIARrIgY2AgAgBCAGQQFyNgIEAkAgBkH/AUsNACAGQQN2IgVBA3RBsLSAgABqIQMCQAJAQQAoAoi0gIAAIgBBASAFdCIFcQ0AQQAgACAFcjYCiLSAgAAgAyEFDAELIAMoAgghBQsgBSAENgIMIAMgBDYCCCAEIAM2AgwgBCAFNgIIDAQLQR8hAwJAIAZB////B0sNACAGQQh2IgMgA0GA/j9qQRB2QQhxIgN0IgUgBUGA4B9qQRB2QQRxIgV0IgAgAEGAgA9qQRB2QQJxIgB0QQ92IAMgBXIgAHJrIgNBAXQgBiADQRVqdkEBcXJBHGohAwsgBEIANwIQIARBHGogAzYCACADQQJ0Qbi2gIAAaiEFAkBBACgCjLSAgAAiAEEBIAN0IghxDQAgBSAENgIAQQAgACAIcjYCjLSAgAAgBEEYaiAFNgIAIAQgBDYCCCAEIAQ2AgwMBAsgBkEAQRkgA0EBdmsgA0EfRht0IQMgBSgCACEAA0AgACIFKAIEQXhxIAZGDQMgA0EddiEAIANBAXQhAyAFIABBBHFqQRBqIggoAgAiAA0ACyAIIAQ2AgAgBEEYaiAFNgIAIAQgBDYCDCAEIAQ2AggMAwsgBCgCCCIDIAI2AgwgBCACNgIIIAJBADYCGCACIAQ2AgwgAiADNgIICyAGQQhqIQMMBQsgBSgCCCIDIAQ2AgwgBSAENgIIIARBGGpBADYCACAEIAU2AgwgBCADNgIIC0EAKAKUtICAACIDIAJNDQBBACgCoLSAgAAiBCACaiIFIAMgAmsiA0EBcjYCBEEAIAM2ApS0gIAAQQAgBTYCoLSAgAAgBCACQQNyNgIEIARBCGohAwwDC0EAIQNBAEEwNgL4t4CAAAwCCwJAIAtFDQACQAJAIAggCCgCHCIFQQJ0Qbi2gIAAaiIDKAIARw0AIAMgADYCACAADQFBACAHQX4gBXdxIgc2Aoy0gIAADAILIAtBEEEUIAsoAhAgCEYbaiAANgIAIABFDQELIAAgCzYCGAJAIAgoAhAiA0UNACAAIAM2AhAgAyAANgIYCyAIQRRqKAIAIgNFDQAgAEEUaiADNgIAIAMgADYCGAsCQAJAIARBD0sNACAIIAQgAmoiA0EDcjYCBCADIAhqQQRqIgMgAygCAEEBcjYCAAwBCyAIIAJqIgAgBEEBcjYCBCAIIAJBA3I2AgQgACAEaiAENgIAAkAgBEH/AUsNACAEQQN2IgRBA3RBsLSAgABqIQMCQAJAQQAoAoi0gIAAIgVBASAEdCIEcQ0AQQAgBSAEcjYCiLSAgAAgAyEEDAELIAMoAgghBAsgBCAANgIMIAMgADYCCCAAIAM2AgwgACAENgIIDAELQR8hAwJAIARB////B0sNACAEQQh2IgMgA0GA/j9qQRB2QQhxIgN0IgUgBUGA4B9qQRB2QQRxIgV0IgIgAkGAgA9qQRB2QQJxIgJ0QQ92IAMgBXIgAnJrIgNBAXQgBCADQRVqdkEBcXJBHGohAwsgACADNgIcIABCADcCECADQQJ0Qbi2gIAAaiEFAkAgB0EBIAN0IgJxDQAgBSAANgIAQQAgByACcjYCjLSAgAAgACAFNgIYIAAgADYCCCAAIAA2AgwMAQsgBEEAQRkgA0EBdmsgA0EfRht0IQMgBSgCACECAkADQCACIgUoAgRBeHEgBEYNASADQR12IQIgA0EBdCEDIAUgAkEEcWpBEGoiBigCACICDQALIAYgADYCACAAIAU2AhggACAANgIMIAAgADYCCAwBCyAFKAIIIgMgADYCDCAFIAA2AgggAEEANgIYIAAgBTYCDCAAIAM2AggLIAhBCGohAwwBCwJAIApFDQACQAJAIAAgACgCHCIFQQJ0Qbi2gIAAaiIDKAIARw0AIAMgCDYCACAIDQFBACAJQX4gBXdxNgKMtICAAAwCCyAKQRBBFCAKKAIQIABGG2ogCDYCACAIRQ0BCyAIIAo2AhgCQCAAKAIQIgNFDQAgCCADNgIQIAMgCDYCGAsgAEEUaigCACIDRQ0AIAhBFGogAzYCACADIAg2AhgLAkACQCAEQQ9LDQAgACAEIAJqIgNBA3I2AgQgAyAAakEEaiIDIAMoAgBBAXI2AgAMAQsgACACaiIFIARBAXI2AgQgACACQQNyNgIEIAUgBGogBDYCAAJAIAdFDQAgB0EDdiIIQQN0QbC0gIAAaiECQQAoApy0gIAAIQMCQAJAQQEgCHQiCCAGcQ0AQQAgCCAGcjYCiLSAgAAgAiEIDAELIAIoAgghCAsgCCADNgIMIAIgAzYCCCADIAI2AgwgAyAINgIIC0EAIAU2Apy0gIAAQQAgBDYCkLSAgAALIABBCGohAwsgAUEQaiSAgICAACADCwoAIAAQvYCAgAAL8A0BB38CQCAARQ0AIABBeGoiASAAQXxqKAIAIgJBeHEiAGohAwJAIAJBAXENACACQQNxRQ0BIAEgASgCACICayIBQQAoApi0gIAAIgRJDQEgAiAAaiEAAkBBACgCnLSAgAAgAUYNAAJAIAJB/wFLDQAgASgCCCIEIAJBA3YiBUEDdEGwtICAAGoiBkYaAkAgASgCDCICIARHDQBBAEEAKAKItICAAEF+IAV3cTYCiLSAgAAMAwsgAiAGRhogAiAENgIIIAQgAjYCDAwCCyABKAIYIQcCQAJAIAEoAgwiBiABRg0AIAQgASgCCCICSxogBiACNgIIIAIgBjYCDAwBCwJAIAFBFGoiAigCACIEDQAgAUEQaiICKAIAIgQNAEEAIQYMAQsDQCACIQUgBCIGQRRqIgIoAgAiBA0AIAZBEGohAiAGKAIQIgQNAAsgBUEANgIACyAHRQ0BAkACQCABKAIcIgRBAnRBuLaAgABqIgIoAgAgAUcNACACIAY2AgAgBg0BQQBBACgCjLSAgABBfiAEd3E2Aoy0gIAADAMLIAdBEEEUIAcoAhAgAUYbaiAGNgIAIAZFDQILIAYgBzYCGAJAIAEoAhAiAkUNACAGIAI2AhAgAiAGNgIYCyABKAIUIgJFDQEgBkEUaiACNgIAIAIgBjYCGAwBCyADKAIEIgJBA3FBA0cNACADIAJBfnE2AgRBACAANgKQtICAACABIABqIAA2AgAgASAAQQFyNgIEDwsgAyABTQ0AIAMoAgQiAkEBcUUNAAJAAkAgAkECcQ0AAkBBACgCoLSAgAAgA0cNAEEAIAE2AqC0gIAAQQBBACgClLSAgAAgAGoiADYClLSAgAAgASAAQQFyNgIEIAFBACgCnLSAgABHDQNBAEEANgKQtICAAEEAQQA2Apy0gIAADwsCQEEAKAKctICAACADRw0AQQAgATYCnLSAgABBAEEAKAKQtICAACAAaiIANgKQtICAACABIABBAXI2AgQgASAAaiAANgIADwsgAkF4cSAAaiEAAkACQCACQf8BSw0AIAMoAggiBCACQQN2IgVBA3RBsLSAgABqIgZGGgJAIAMoAgwiAiAERw0AQQBBACgCiLSAgABBfiAFd3E2Aoi0gIAADAILIAIgBkYaIAIgBDYCCCAEIAI2AgwMAQsgAygCGCEHAkACQCADKAIMIgYgA0YNAEEAKAKYtICAACADKAIIIgJLGiAGIAI2AgggAiAGNgIMDAELAkAgA0EUaiICKAIAIgQNACADQRBqIgIoAgAiBA0AQQAhBgwBCwNAIAIhBSAEIgZBFGoiAigCACIEDQAgBkEQaiECIAYoAhAiBA0ACyAFQQA2AgALIAdFDQACQAJAIAMoAhwiBEECdEG4toCAAGoiAigCACADRw0AIAIgBjYCACAGDQFBAEEAKAKMtICAAEF+IAR3cTYCjLSAgAAMAgsgB0EQQRQgBygCECADRhtqIAY2AgAgBkUNAQsgBiAHNgIYAkAgAygCECICRQ0AIAYgAjYCECACIAY2AhgLIAMoAhQiAkUNACAGQRRqIAI2AgAgAiAGNgIYCyABIABqIAA2AgAgASAAQQFyNgIEIAFBACgCnLSAgABHDQFBACAANgKQtICAAA8LIAMgAkF+cTYCBCABIABqIAA2AgAgASAAQQFyNgIECwJAIABB/wFLDQAgAEEDdiICQQN0QbC0gIAAaiEAAkACQEEAKAKItICAACIEQQEgAnQiAnENAEEAIAQgAnI2Aoi0gIAAIAAhAgwBCyAAKAIIIQILIAIgATYCDCAAIAE2AgggASAANgIMIAEgAjYCCA8LQR8hAgJAIABB////B0sNACAAQQh2IgIgAkGA/j9qQRB2QQhxIgJ0IgQgBEGA4B9qQRB2QQRxIgR0IgYgBkGAgA9qQRB2QQJxIgZ0QQ92IAIgBHIgBnJrIgJBAXQgACACQRVqdkEBcXJBHGohAgsgAUIANwIQIAFBHGogAjYCACACQQJ0Qbi2gIAAaiEEAkACQEEAKAKMtICAACIGQQEgAnQiA3ENACAEIAE2AgBBACAGIANyNgKMtICAACABQRhqIAQ2AgAgASABNgIIIAEgATYCDAwBCyAAQQBBGSACQQF2ayACQR9GG3QhAiAEKAIAIQYCQANAIAYiBCgCBEF4cSAARg0BIAJBHXYhBiACQQF0IQIgBCAGQQRxakEQaiIDKAIAIgYNAAsgAyABNgIAIAFBGGogBDYCACABIAE2AgwgASABNgIIDAELIAQoAggiACABNgIMIAQgATYCCCABQRhqQQA2AgAgASAENgIMIAEgADYCCAtBAEEAKAKotICAAEF/aiIBQX8gARs2Aqi0gIAACwtOAAJAIAANAD8AQRB0DwsCQCAAQf//A3ENACAAQX9MDQACQCAAQRB2QAAiAEF/Rw0AQQBBMDYC+LeAgABBfw8LIABBEHQPCxC/gICAAAALBAAAAAsLjiwBAEGACAuGLAEAAAACAAAAAwAAAAQAAAAFAAAABgAAAAcAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW52YWxpZCBjaGFyIGluIHVybCBxdWVyeQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2JvZHkAQ29udGVudC1MZW5ndGggb3ZlcmZsb3cAQ2h1bmsgc2l6ZSBvdmVyZmxvdwBSZXNwb25zZSBvdmVyZmxvdwBJbnZhbGlkIG1ldGhvZCBmb3IgSFRUUC94LnggcmVxdWVzdABJbnZhbGlkIG1ldGhvZCBmb3IgUlRTUC94LnggcmVxdWVzdABFeHBlY3RlZCBTT1VSQ0UgbWV0aG9kIGZvciBJQ0UveC54IHJlcXVlc3QASW52YWxpZCBjaGFyIGluIHVybCBmcmFnbWVudCBzdGFydABFeHBlY3RlZCBkb3QAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9zdGF0dXMASW52YWxpZCByZXNwb25zZSBzdGF0dXMASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgcGFyYW1ldGVycwBVc2VyIGNhbGxiYWNrIGVycm9yAGBvbl9jaHVua19oZWFkZXJgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2JlZ2luYCBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAGBvbl9tZXNzYWdlX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNlcnZlcgBJbnZhbGlkIGhlYWRlciB2YWx1ZSBjaGFyAEludmFsaWQgaGVhZGVyIGZpZWxkIGNoYXIASW52YWxpZCBtaW5vciB2ZXJzaW9uAEludmFsaWQgbWFqb3IgdmVyc2lvbgBFeHBlY3RlZCBzcGFjZSBhZnRlciB2ZXJzaW9uAEV4cGVjdGVkIENSTEYgYWZ0ZXIgdmVyc2lvbgBJbnZhbGlkIGhlYWRlciB0b2tlbgBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3VybABJbnZhbGlkIGNoYXJhY3RlcnMgaW4gdXJsAFVuZXhwZWN0ZWQgc3RhcnQgY2hhciBpbiB1cmwARG91YmxlIEAgaW4gdXJsAEVtcHR5IENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhcmFjdGVyIGluIENvbnRlbnQtTGVuZ3RoAER1cGxpY2F0ZSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXIgaW4gdXJsIHBhdGgAQ29udGVudC1MZW5ndGggY2FuJ3QgYmUgcHJlc2VudCB3aXRoIFRyYW5zZmVyLUVuY29kaW5nAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHNpemUAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfdmFsdWUATWlzc2luZyBleHBlY3RlZCBDUiBhZnRlciBoZWFkZXIgdmFsdWUATWlzc2luZyBleHBlY3RlZCBMRiBhZnRlciBoZWFkZXIgdmFsdWUASW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgIGhlYWRlciB2YWx1ZQBQYXVzZWQgYnkgb25faGVhZGVyc19jb21wbGV0ZQBJbnZhbGlkIEVPRiBzdGF0ZQBvbl9jaHVua19oZWFkZXIgcGF1c2UAb25fbWVzc2FnZV9iZWdpbiBwYXVzZQBvbl9jaHVua19jb21wbGV0ZSBwYXVzZQBvbl9tZXNzYWdlX2NvbXBsZXRlIHBhdXNlAFBhdXNlIG9uIENPTk5FQ1QvVXBncmFkZQBQYXVzZSBvbiBQUkkvVXBncmFkZQBFeHBlY3RlZCBIVFRQLzIgQ29ubmVjdGlvbiBQcmVmYWNlAEV4cGVjdGVkIHNwYWNlIGFmdGVyIG1ldGhvZABTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2hlYWRlcl9maWVsZABQYXVzZWQASW52YWxpZCB3b3JkIGVuY291bnRlcmVkAEludmFsaWQgbWV0aG9kIGVuY291bnRlcmVkAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2NoZW1hAFJlcXVlc3QgaGFzIGludmFsaWQgYFRyYW5zZmVyLUVuY29kaW5nYABNS0FDVElWSVRZAENPUFkATk9USUZZAFBMQVkAUFVUAENIRUNLT1VUAFBPU1QAUkVQT1JUAEhQRV9JTlZBTElEX0NPTlNUQU5UAEdFVABIUEVfU1RSSUNUAFJFRElSRUNUAENPTk5FQ1QASFBFX0lOVkFMSURfU1RBVFVTAE9QVElPTlMAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAEhQRV9DQl9DSFVOS19IRUFERVIATUtDQUxFTkRBUgBTRVRVUABURUFSRE9XTgBIUEVfQ0xPU0VEX0NPTk5FQ1RJT04ASFBFX0lOVkFMSURfVkVSU0lPTgBIUEVfQ0JfTUVTU0FHRV9CRUdJTgBIUEVfSU5WQUxJRF9IRUFERVJfVE9LRU4ASFBFX0lOVkFMSURfVVJMAE1LQ09MAEFDTABIUEVfSU5URVJOQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAEhQRV9JTlZBTElEX0NPTlRFTlRfTEVOR1RIAEhQRV9VTkVYUEVDVEVEX0NPTlRFTlRfTEVOR1RIAEZMVVNIAFBST1BQQVRDSABNLVNFQVJDSABIUEVfSU5WQUxJRF9UUkFOU0ZFUl9FTkNPRElORwBFeHBlY3RlZCBDUkxGAEhQRV9JTlZBTElEX0NIVU5LX1NJWkUATU9WRQBIUEVfQ0JfSEVBREVSU19DT01QTEVURQBIUEVfQ0JfQ0hVTktfQ09NUExFVEUASFBFX0NCX01FU1NBR0VfQ09NUExFVEUAREVMRVRFAEhQRV9JTlZBTElEX0VPRl9TVEFURQBQQVVTRQBQVVJHRQBNRVJHRQBIUEVfUEFVU0VEX1VQR1JBREUASFBFX1BBVVNFRF9IMl9VUEdSQURFAFNPVVJDRQBBTk5PVU5DRQBUUkFDRQBERVNDUklCRQBVTlNVQlNDUklCRQBSRUNPUkQASFBFX0lOVkFMSURfTUVUSE9EAFBST1BGSU5EAFVO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AAAAAAAAAAAAAAAEAQEFAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAAAAQAAAgAAAAAAAAAAAAAAAAAAAAAAAAMEAAAEBAQEBAQEBAQEBAUEBAQEBAQEBAQEBAQABAAGBwQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEAAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAIAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOT1VOQ0VFQ0tPVVRORUNURVRFQ1JJQkVMVVNIRVRFQURTRUFSQ0hSR0VDVElWSVRZTEVOREFSVkVPVElGWVBUSU9OU0NIU0VBWVNUQVRDSEdFT1JESVJFQ1RPUlRSQ0hQQVJBTUVURVJVUkNFQlNDUklCRUFSRE9XTkFDRUlORE5LQ0tVQlNDUklCRUhUVFAvQURUUC8=";
  }
});

// node_modules/undici/lib/llhttp/llhttp_simd.wasm.js
var require_llhttp_simd_wasm = __commonJS({
  "node_modules/undici/lib/llhttp/llhttp_simd.wasm.js"(exports, module2) {
    init_shims();
    module2.exports = "AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAAzk4AwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAYGAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAAMEBQFwAQ4OBQMBAAIGCAF/AUGAuAQLB/UEHwZtZW1vcnkCAAtfaW5pdGlhbGl6ZQAJGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAtsbGh0dHBfaW5pdAAKGGxsaHR0cF9zaG91bGRfa2VlcF9hbGl2ZQA1DGxsaHR0cF9hbGxvYwAMBm1hbGxvYwA6C2xsaHR0cF9mcmVlAA0EZnJlZQA8D2xsaHR0cF9nZXRfdHlwZQAOFWxsaHR0cF9nZXRfaHR0cF9tYWpvcgAPFWxsaHR0cF9nZXRfaHR0cF9taW5vcgAQEWxsaHR0cF9nZXRfbWV0aG9kABEWbGxodHRwX2dldF9zdGF0dXNfY29kZQASEmxsaHR0cF9nZXRfdXBncmFkZQATDGxsaHR0cF9yZXNldAAUDmxsaHR0cF9leGVjdXRlABUUbGxodHRwX3NldHRpbmdzX2luaXQAFg1sbGh0dHBfZmluaXNoABcMbGxodHRwX3BhdXNlABgNbGxodHRwX3Jlc3VtZQAZG2xsaHR0cF9yZXN1bWVfYWZ0ZXJfdXBncmFkZQAaEGxsaHR0cF9nZXRfZXJybm8AGxdsbGh0dHBfZ2V0X2Vycm9yX3JlYXNvbgAcF2xsaHR0cF9zZXRfZXJyb3JfcmVhc29uAB0UbGxodHRwX2dldF9lcnJvcl9wb3MAHhFsbGh0dHBfZXJybm9fbmFtZQAfEmxsaHR0cF9tZXRob2RfbmFtZQAgGmxsaHR0cF9zZXRfbGVu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ASEeDBELQZoBIR4MEAtBASEeDA8LQZsBIR4MDgtBnAEhHgwNC0GeASEeDAwLQaABIR4MCwtBnwEhHgwKC0GhASEeDAkLQaIBIR4MCAtBowEhHgwHC0GkASEeDAYLQaUBIR4MBQtBpgEhHgwEC0GnASEeDAMLQagBIR4MAgtBqQEhHgwBC0GvASEeCwNAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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IAgtAABBtH9qDggAsgGyAbIBsgGyAbIBAbIBCyAIQQFqIQFB3QAhHgyPAgsgCEEBaiEBQd4AIR4MjgILAkAgASIIIAJHDQBB8AAhHgyeAgsgCC0AAEHFAEcNrwEgCEEBaiEBDN4BC0HxACEeIAEiIiACRg2cAiACICJrIAAoAgAiJmohIyAiIQggJiEBAkADQCAILQAAIAFBiLOAgABqLQAARw2vASABQQNGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICM2AgAMnQILIABBADYCACAiICZrQQRqIQFBLSEeDKwBC0HyACEeIAEiIiACRg2bAiACICJrIAAoAgAiJmohIyAiIQggJiEBAkADQCAILQAAIAFB0LOAgABqLQAARw2uASABQQhGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICM2AgAMnAILIABBADYCACAiICZrQQlqIQFBKSEeDKsBCwJAIAEiASACRw0AQfMAIR4MmwILQQEhHiABLQAAQd8ARw2qASABQQFqIQEM3AELQfQAIR4gASIiIAJGDZkCIAIgImsgACgCACImaiEjICIhCCAmIQEDQCAILQAAIAFBjLOAgABqLQAARw2rASABQQFGDfcBIAFBAWohASAIQQFqIgggAkcNAAsgACAjNgIADJkCCwJAIAEiHiACRw0AQfUAIR4MmQILIAIgHmsgACgCACIiaiEmIB4hCCAiIQECQANAIAgtAAAgAUGOs4CAAGotAABHDasBIAFBAkYNASABQQFqIQEgCEEBaiIIIAJHDQALIAAgJjYCAEH1ACEeDJkCCyAAQQA2AgAgHiAia0EDaiEBQQIhHgyoAQsCQCABIh4gAkcNAEH2ACEeDJgCCyACIB5rIAAoAgAiImohJiAeIQggIiEBAkADQCAILQAAIAFB8LOAgABqLQAARw2qASABQQFGDQEgAUEBaiEBIAhBAWoiCCACRw0ACyAAICY2AgBB9gAhHgyYAgsgAEEANgIAIB4gImtBAmohAUEfIR4MpwELAkAgASIeIAJHDQBB9wAhHgyXAgsgAiAeayAAKAIAIiJqISYgHiEIICIhAQJAA0AgCC0AACABQfKzgIAAai0AAEcNqQEgAUEBRg0BIAFBAWohASAIQQFqIgggAkcNAAsgACAmNgIAQfcAIR4MlwILIABBADYCACAeICJrQQJq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LwEwQRByOwEwDIcBCyAAQTY2AhwgACABNgIMIAAgHEEBajYCFEEAIR4MoAELIAEtAABBOkcNAiAAKAIEIR4gAEEANgIEIAAgHiABEKiAgIAAIh4NASABQQFqIQELQTEhHgyOAQsgAEE2NgIcIAAgHjYCDCAAIAFBAWo2AhRBACEeDJ0BCyAAQQA2AhwgACABNgIUIABBh46AgAA2AhAgAEEKNgIMQQAhHgycAQsgAUEBaiEBCyAAQYASOwEqIAAgASACEKWAgIAAGiABIQELQawBIR4MiQELIAAoAgQhHiAAQQA2AgQCQCAAIB4gARCkgICAACIeDQAgASEBDFALIABBxAA2AhwgACABNgIUIAAgHjYCDEEAIR4MmAELIABBADYCHCAAICI2AhQgAEHlmICAADYCECAAQQc2AgwgAEEANgIAQQAhHgyXAQsgACgCBCEeIABBADYCBAJAIAAgHiABEKSAgIAAIh4NACABIQEMTwsgAEHFADYCHCAAIAE2AhQgACAeNgIMQQAhHgyWAQtBACEeIABBADYCHCAAIAE2AhQgAEHrjYCAADYCECAAQQk2AgwMlQELQQEhHgsgACAeOgArIAFBAWohASAALQApQSJGDYsBDEwLIABBADYCHCAAIAE2AhQgAEGijYCAADYCECAAQQk2AgxBACEeDJIBCyAAQQA2AhwgACABNgIUIABBxYqAgAA2AhAgAEEJNgIMQQAhHgyRAQtBASEeCyAAIB46ACogAUEBaiEBDEoLIABBADYCHCAAIAE2AhQgAEG4jYCAADYCECAAQQk2AgxBACEeDI4BCyAAQQA2AgAgJiAja0EEaiEBAkAgAC0AKUEjTw0AIAEhAQxKCyAAQQA2AhwgACABNgIUIABBr4mAgAA2AhAgAEEINgIMQQAhHgyNAQsgAEEANgIAC0EAIR4gAEEANgIcIAAgATYCFCAAQbmbgIAANgIQIABBCDYCDAyLAQsgAEEANgIAICYgI2tBA2ohAQJAIAAtAClBIUcNACABIQEMRwsgAEEANgIcIAAgATYCFCAAQfeJgIAANgIQIABBCDYCDEEAIR4MigELIABBADYCACAmICNrQQRqIQECQCAALQApIh5BXWpBC08NACABIQEMRgsCQCAeQQZLDQBBASAedEHKAHFFDQAgASEBDEYLQQAhHiAAQQA2AhwgACAB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HiAAQQA2AhwgACABNgIUIABB6pCAgAA2AhAgAEEZNgIMDAILIABBIDYCHCAAIAg2AgwgACABQQFqNgIUQQAhHgwBCwJAIAEiASACRw0AQRQhHgwBCyAAQYmAgIAANgIIIAAgATYCBEETIR4LIANBEGokgICAgAAgHguvAQECfyABKAIAIQYCQAJAIAIgA0YNACAEIAZqIQQgBiADaiACayEHIAIgBkF/cyAFaiIGaiEFA0ACQCACLQAAIAQtAABGDQBBAiEEDAMLAkAgBg0AQQAhBCAFIQIMAwsgBkF/aiEGIARBAWohBCACQQFqIgIgA0cNAAsgByEGIAMhAgsgAEEBNgIAIAEgBjYCACAAIAI2AgQPCyABQQA2AgAgACAENgIAIAAgAjYCBAsKACAAELuAgIAAC5U3AQt/I4CAgIAAQRBrIgEkgICAgAACQEEAKAKgtICAAA0AQQAQvoCAgABBgLiEgABrIgJB2QBJDQBBACEDAkBBACgC4LeAgAAiBA0AQQBCfzcC7LeAgABBAEKAgISAgIDAADcC5LeAgABBACABQQhqQXBxQdiq1aoFcyIENgLgt4CAAEEAQQA2AvS3gIAAQQBBADYCxLeAgAALQQAgAjYCzLeAgABBAEGAuISAADYCyLeAgABBAEGAuISAADYCmLSAgABBACAENgKstICAAEEAQX82Aqi0gIAAA0AgA0HEtICAAGogA0G4tICAAGoiBDYCACAEIANBsLSAgABqIgU2AgAgA0G8tICAAGogBTYCACADQcy0gIAAaiADQcC0gIAAaiIFNgIAIAUgBDYCACADQdS0gIAAaiADQci0gIAAaiIENgIAIAQgBTYCACADQdC0gIAAaiAENgIAIANBIGoiA0GAAkcNAAtBgLiEgABBeEGAuISAAGtBD3FBAEGAuISAAEEIakEPcRsiA2oiBEEEaiACIANrQUhqIgNBAXI2AgBBAEEAKALwt4CAADYCpLSAgABBACAENgKgtICAAEEAIAM2ApS0gIAAIAJBgLiEgABqQUxqQTg2AgALAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABB7AFLDQACQEEAKAKItICAACIGQRAgAEETakFwcSAAQQtJGyICQQN2IgR2IgNBA3FFDQAgA0EBcSAEckEBcyIFQQN0IgBBuLSAgABqKAIAIgRBCGohAwJAAkAgBCgCCCICIABBsLSAgABqIgBHDQBBACAGQX4gBXdxNgKItICAAAwBCyAAIAI2AgggAiAANgIMCyAEIAVBA3QiBUEDcjYCBCAEIAVqQQRqIgQgBCgCAEEBcjYCAAwMCyACQQAoApC0gIAAIgdNDQECQCADRQ0AAkACQCADIAR0QQIgBHQiA0EAIANrcnEiA0EAIANrcUF/aiIDIANBDHZBEHEiA3YiBEEFdkEIcSIFIANyIAQgBXYiA0ECdkEEcSIEciADIAR2IgNBAXZBAnEiBHIgAyAEdiIDQQF2QQFxIgRyIAMgBHZqIgVBA3QiAEG4tICAAGooAgAiBCgCCCIDIABBsLSAgABqIgBHDQBBACAGQX4gBXdxIgY2Aoi0gIAADAELIAAgAzYCCCADIAA2AgwLIARBCGohAyAEIAJBA3I2AgQgBCAFQQN0IgVqIAUgAmsiBTYCACAEIAJqIgAgBUEBcjYCBAJAIAdFDQAgB0EDdiIIQQN0QbC0gIAAaiECQQAoApy0gIAAIQQCQAJAIAZBASAIdCIIcQ0AQQAgBiAIcjYCiLSAgAAgAiEIDAELIAIoAgghCAsgCCAENgIMIAIgBDYCCCAEIAI2AgwgBCAINgIIC0EAIAA2Apy0gIAAQQAgBTYCkLSAgAAMDAtBACgCjLSAgAAiCUUNASAJQQAgCWtxQX9qIgMgA0EMdkEQcSIDdiIEQQV2QQhxIgUgA3IgBCAFdiIDQQJ2QQRxIgRyIAMgBHYiA0EBdkECcSIEciADIAR2IgNBAXZBAXEiBHIgAyAEdmpBAnRBuLaAgABqKAIAIgAoAgRBeHEgAmshBCAAIQUCQANAAkAgBSgCECIDDQAgBUEUaigCACIDRQ0CCyADKAIEQXhxIAJrIgUgBCAFIARJIgUbIQQgAyAAIAUbIQAgAyEFDAALCyAAKAIYIQoCQCAAKAIMIgggAEYNAEEAKAKYtICAACAAKAIIIgNLGiAIIAM2AgggAyAINgIMDAsLAkAgAEEUaiIFKAIAIgMNACAAKAIQIgNFDQMgAEEQaiEFCwNAIAUhCyADIghBFGoiBSgCACIDDQAgCEEQaiEFIAgoAhAiAw0ACyALQQA2AgAMCgtBfyECIABBv39LDQAgAEETaiIDQXBxIQJBACgCjLSAgAAiB0UNAEEAIQsCQCACQYACSQ0AQR8hCyACQf///wdLDQAgA0EIdiIDIANBgP4/akEQdkEIcSIDdCIEIARBgOAfakEQdkEEcSIEdCIFIAVBgIAPakEQdkECcSIFdEEPdiADIARyIAVyayIDQQF0IAIgA0EVanZBAXFyQRxqIQsLQQAgAmshBAJAAkACQAJAIAtBAnRBuLaAgABqKAIAIgUNAEEAIQNBACEIDAELQQAhAyACQQBBGSALQQF2ayALQR9GG3QhAEEAIQgDQAJAIAUoAgRBeHEgAmsiBiAETw0AIAYhBCAFIQggBg0AQQAhBCAFIQggBSEDDAMLIAMgBUEUaigCACIGIAYgBSAAQR12QQRxakEQaigCACIFRhsgAyAGGyEDIABBAXQhACAFDQALCwJAIAMgCHINAEEAIQhBAiALdCIDQQAgA2tyIAdxIgNFDQMgA0EAIANrcUF/aiIDIANBDHZBEHEiA3YiBUEFdkEIcSIAIANyIAUgAHYiA0ECdkEEcSIFciADIAV2IgNBAXZBAnEiBXIgAyAFdiIDQQF2QQFxIgVyIAMgBXZqQQJ0Qbi2gIAAaigCACEDCyADRQ0BCwNAIAMoAgRBeHEgAmsiBiAESSEAAkAgAygCECIFDQAgA0EUaigCACEFCyAGIAQgABshBCADIAggABshCCAFIQMgBQ0ACwsgCEUNACAEQQAoApC0gIAAIAJrTw0AIAgoAhghCwJAIAgoAgwiACAIRg0AQQAoApi0gIAAIAgoAggiA0saIAAgAzYCCCADIAA2AgwMCQsCQCAIQRRqIgUoAgAiAw0AIAgoAhAiA0UNAyAIQRBqIQULA0AgBSEGIAMiAEEUaiIFKAIAIgMNACAAQRBqIQUgACgCECIDDQALIAZBADYCAAwICwJAQQAoApC0gIAAIgMgAkkNAEEAKAKctICAACEEAkACQCADIAJrIgVBEEkNACAEIAJqIgAgBUEBcjYCBEEAIAU2ApC0gIAAQQAgADYCnLSAgAAgBCADaiAFNgIAIAQgAkEDcjYCBAwBCyAEIANBA3I2AgQgAyAEakEEaiIDIAMoAgBBAXI2AgBBAEEANgKctICAAEEAQQA2ApC0gIAACyAEQQhqIQMMCgsCQEEAKAKUtICAACIAIAJNDQBBACgCoLSAgAAiAyACaiIEIAAgAmsiBUEBcjYCBEEAIAU2ApS0gIAAQQAgBDYCoLSAgAAgAyACQQNyNgIEIANBCGohAwwKCwJAAkBBACgC4LeAgABFDQBBACgC6LeAgAAhBAwBC0EAQn83Auy3gIAAQQBCgICEgICAwAA3AuS3gIAAQQAgAUEMakFwcUHYqtWqBXM2AuC3gIAAQQBBADYC9LeAgABBAEEANgLEt4CAAEGAgAQhBAtBACEDAkAgBCACQccAaiIHaiIGQQAgBGsiC3EiCCACSw0AQQBBMDYC+LeAgAAMCgsCQEEAKALAt4CAACIDRQ0AAkBBACgCuLeAgAAiBCAIaiIFIARNDQAgBSADTQ0BC0EAIQNBAEEwNgL4t4CAAAwKC0EALQDEt4CAAEEEcQ0EAkACQAJAQQAoAqC0gIAAIgRFDQBByLeAgAAhAwNAAkAgAygCACIFIARLDQAgBSADKAIEaiAESw0DCyADKAIIIgMNAAsLQQAQvoCAgAAiAEF/Rg0FIAghBgJAQQAoAuS3gIAAIgNBf2oiBCAAcUUNACAIIABrIAQgAGpBACADa3FqIQYLIAYgAk0NBSAGQf7///8HSw0FAkBBACgCwLeAgAAiA0UNAEEAKAK4t4CAACIEIAZqIgUgBE0NBiAFIANLDQYLIAYQvoCAgAAiAyAARw0BDAcLIAYgAGsgC3EiBkH+////B0sNBCAGEL6AgIAAIgAgAygCACADKAIEakYNAyAAIQMLAkAgA0F/Rg0AIAJByABqIAZNDQACQCAHIAZrQQAoAui3gIAAIgRqQQAgBGtxIgRB/v///wdNDQAgAyEADAcLAkAgBBC+gICAAEF/Rg0AIAQgBmohBiADIQAMBwtBACAGaxC+gICAABoMBAsgAyEAIANBf0cNBQwDC0EAIQgMBwtBACEADAULIABBf0cNAgtBAEEAKALEt4CAAEEEcjYCxLeAgAALIAhB/v///wdLDQEgCBC+gICAACEAQQAQvoCAgAAhAyAAQX9GDQEgA0F/Rg0BIAAgA08NASADIABrIgYgAkE4ak0NAQtBAEEAKAK4t4CAACAGaiIDNgK4t4CAAAJAIANBACgCvLeAgABNDQBBACADNgK8t4CAAAsCQAJAAkACQEEAKAKgtICAACIERQ0AQci3gIAAIQMDQCAAIAMoAgAiBSADKAIEIghqRg0CIAMoAggiAw0ADAMLCwJAAkBBACgCmLSAgAAiA0UNACAAIANPDQELQQAgADYCmLSAgAALQQAhA0EAIAY2Asy3gIAAQQAgADYCyLeAgABBAEF/NgKotICAAEEAQQAoAuC3gIAANgKstICAAEEAQQA2AtS3gIAAA0AgA0HEtICAAGogA0G4tICAAGoiBDYCACAEIANBsLSAgABqIgU2AgAgA0G8tICAAGogBTYCACADQcy0gIAAaiADQcC0gIAAaiIFNgIAIAUgBDYCACADQdS0gIAAaiADQci0gIAAaiIENgIAIAQgBTYCACADQdC0gIAAaiAENgIAIANBIGoiA0GAAkcNAAsgAEF4IABrQQ9xQQAgAEEIakEPcRsiA2oiBCAGIANrQUhqIgNBAXI2AgRBAEEAKALwt4CAADYCpLSAgABBACAENgKgtICAAEEAIAM2ApS0gIAAIAYgAGpBTGpBODYCAAwCCyADLQAMQQhxDQAgBSAESw0AIAAgBE0NACAEQXggBGtBD3FBACAEQQhqQQ9xGyIFaiIAQQAoApS0gIAAIAZqIgsgBWsiBUEBcjYCBCADIAggBmo2AgRBAEEAKALwt4CAADYCpLSAgABBACAFNgKUtICAAEEAIAA2AqC0gIAAIAsgBGpBBGpBODYCAAwBCwJAIABBACgCmLSAgAAiC08NAEEAIAA2Api0gIAAIAAhCwsgACAGaiEIQci3gIAAIQMCQAJAAkACQAJAAkACQANAIAMoAgAgCEYNASADKAIIIgMNAAwCCwsgAy0ADEEIcUUNAQtByLeAgAAhAwNAAkAgAygCACIFIARLDQAgBSADKAIEaiIFIARLDQMLIAMoAgghAwwACwsgAyAANgIAIAMgAygCBCAGajYCBCAAQXggAGtBD3FBACAAQQhqQQ9xG2oiBiACQQNyNgIEIAhBeCAIa0EPcUEAIAhBCGpBD3EbaiIIIAYgAmoiAmshBQJAIAQgCEcNAEEAIAI2AqC0gIAAQQBBACgClLSAgAAgBWoiAzYClLSAgAAgAiADQQFyNgIEDAMLAkBBACgCnLSAgAAgCEcNAEEAIAI2Apy0gIAAQQBBACgCkLSAgAAgBWoiAzYCkLSAgAAgAiADQQFyNgIEIAIgA2ogAzYCAAwDCwJAIAgoAgQiA0EDcUEBRw0AIANBeHEhBwJAAkAgA0H/AUsNACAIKAIIIgQgA0EDdiILQQN0QbC0gIAAaiIARhoCQCAIKAIMIgMgBEcNAEEAQQAoAoi0gIAAQX4gC3dxNgKItICAAAwCCyADIABGGiADIAQ2AgggBCADNgIMDAELIAgoAhghCQJAAkAgCCgCDCIAIAhGDQAgCyAIKAIIIgNLGiAAIAM2AgggAyAANgIMDAELAkAgCEEUaiIDKAIAIgQNACAIQRBqIgMoAgAiBA0AQQAhAAwBCwNAIAMhCyAEIgBBFGoiAygCACIEDQAgAEEQaiEDIAAoAhAiBA0ACyALQQA2AgALIAlFDQACQAJAIAgoAhwiBEECdEG4toCAAGoiAygCACAIRw0AIAMgADYCACAADQFBAEEAKAKMtICAAEF+IAR3cTYCjLSAgAAMAgsgCUEQQRQgCSgCECAIRhtqIAA2AgAgAEUNAQsgACAJNgIYAkAgCCgCECIDRQ0AIAAgAzYCECADIAA2AhgLIAgoAhQiA0UNACAAQRRqIAM2AgAgAyAANgIYCyAHIAVqIQUgCCAHaiEICyAIIAgoAgRBfnE2AgQgAiAFaiAFNgIAIAIgBUEBcjYCBAJAIAVB/wFLDQAgBUEDdiIEQQN0QbC0gIAAaiEDAkACQEEAKAKItICAACIFQQEgBHQiBHENAEEAIAUgBHI2Aoi0gIAAIAMhBAwBCyADKAIIIQQLIAQgAjYCDCADIAI2AgggAiADNgIMIAIgBDYCCAwDC0EfIQMCQCAFQf///wdLDQAgBUEIdiIDIANBgP4/akEQdkEIcSIDdCIEIARBgOAfakEQdkEEcSIEdCIAIABBgIAPakEQdkECcSIAdEEPdiADIARyIAByayIDQQF0IAUgA0EVanZBAXFyQRxqIQMLIAIgAzYCHCACQgA3AhAgA0ECdEG4toCAAGohBAJAQQAoAoy0gIAAIgBBASADdCIIcQ0AIAQgAjYCAEEAIAAgCHI2Aoy0gIAAIAIgBDYCGCACIAI2AgggAiACNgIMDAMLIAVBAEEZIANBAXZrIANBH0YbdCEDIAQoAgAhAANAIAAiBCgCBEF4cSAFRg0CIANBHXYhACADQQF0IQMgBCAAQQRxakEQaiIIKAIAIgANAAsgCCACNgIAIAIgBDYCGCACIAI2AgwgAiACNgIIDAILIABBeCAAa0EPcUEAIABBCGpBD3EbIgNqIgsgBiADa0FIaiIDQQFyNgIEIAhBTGpBODYCACAEIAVBNyAFa0EPcUEAIAVBSWpBD3EbakFBaiIIIAggBEEQakkbIghBIzYCBEEAQQAoAvC3gIAANgKktICAAEEAIAs2AqC0gIAAQQAgAzYClLSAgAAgCEEQakEAKQLQt4CAADcCACAIQQApAsi3gIAANwIIQQAgCEEIajYC0LeAgABBACAGNgLMt4CAAEEAIAA2Asi3gIAAQQBBADYC1LeAgAAgCEEkaiEDA0AgA0EHNgIAIAUgA0EEaiIDSw0ACyAIIARGDQMgCCAIKAIEQX5xNgIEIAggCCAEayIGNgIAIAQgBkEBcjYCBAJAIAZB/wFLDQAgBkEDdiIFQQN0QbC0gIAAaiEDAkACQEEAKAKItICAACIAQQEgBXQiBXENAEEAIAAgBXI2Aoi0gIAAIAMhBQwBCyADKAIIIQULIAUgBDYCDCADIAQ2AgggBCADNgIMIAQgBTYCCAwEC0EfIQMCQCAGQf///wdLDQAgBkEIdiIDIANBgP4/akEQdkEIcSIDdCIFIAVBgOAfakEQdkEEcSIFdCIAIABBgIAPakEQdkECcSIAdEEPdiADIAVyIAByayIDQQF0IAYgA0EVanZBAXFyQRxqIQMLIARCADcCECAEQRxqIAM2AgAgA0ECdEG4toCAAGohBQJAQQAoAoy0gIAAIgBBASADdCIIcQ0AIAUgBDYCAEEAIAAgCHI2Aoy0gIAAIARBGGogBTYCACAEIAQ2AgggBCAENgIMDAQLIAZBAEEZIANBAXZrIANBH0YbdCEDIAUoAgAhAANAIAAiBSgCBEF4cSAGRg0DIANBHXYhACADQQF0IQMgBSAAQQRxakEQaiIIKAIAIgANAAsgCCAENgIAIARBGGogBTYCACAEIAQ2AgwgBCAENgIIDAMLIAQoAggiAyACNgIMIAQgAjYCCCACQQA2AhggAiAENgIMIAIgAzYCCAsgBkEIaiEDDAULIAUoAggiAyAENgIMIAUgBDYCCCAEQRhqQQA2AgAgBCAFNgIMIAQgAzYCCAtBACgClLSAgAAiAyACTQ0AQQAoAqC0gIAAIgQgAmoiBSADIAJrIgNBAXI2AgRBACADNgKUtICAAEEAIAU2AqC0gIAAIAQgAkEDcjYCBCAEQQhqIQMMAwtBACEDQQBBMDYC+LeAgAAMAgsCQCALRQ0AAkACQCAIIAgoAhwiBUECdEG4toCAAGoiAygCAEcNACADIAA2AgAgAA0BQQAgB0F+IAV3cSIHNgKMtICAAAwCCyALQRBBFCALKAIQIAhGG2ogADYCACAARQ0BCyAAIAs2AhgCQCAIKAIQIgNFDQAgACADNgIQIAMgADYCGAsgCEEUaigCACIDRQ0AIABBFGogAzYCACADIAA2AhgLAkACQCAEQQ9LDQAgCCAEIAJqIgNBA3I2AgQgAyAIakEEaiIDIAMoAgBBAXI2AgAMAQsgCCACaiIAIARBAXI2AgQgCCACQQNyNgIEIAAgBGogBDYCAAJAIARB/wFLDQAgBEEDdiIEQQN0QbC0gIAAaiEDAkACQEEAKAKItICAACIFQQEgBHQiBHENAEEAIAUgBHI2Aoi0gIAAIAMhBAwBCyADKAIIIQQLIAQgADYCDCADIAA2AgggACADNgIMIAAgBDYCCAwBC0EfIQMCQCAEQf///wdLDQAgBEEIdiIDIANBgP4/akEQdkEIcSIDdCIFIAVBgOAfakEQdkEEcSIFdCICIAJBgIAPakEQdkECcSICdEEPdiADIAVyIAJyayIDQQF0IAQgA0EVanZBAXFyQRxqIQMLIAAgAzYCHCAAQgA3AhAgA0ECdEG4toCAAGohBQJAIAdBASADdCICcQ0AIAUgADYCAEEAIAcgAnI2Aoy0gIAAIAAgBTYCGCAAIAA2AgggACAANgIMDAELIARBAEEZIANBAXZrIANBH0YbdCEDIAUoAgAhAgJAA0AgAiIFKAIEQXhxIARGDQEgA0EddiECIANBAXQhAyAFIAJBBHFqQRBqIgYoAgAiAg0ACyAGIAA2AgAgACAFNgIYIAAgADYCDCAAIAA2AggMAQsgBSgCCCIDIAA2AgwgBSAANgIIIABBADYCGCAAIAU2AgwgACADNgIICyAIQQhqIQMMAQsCQCAKRQ0AAkACQCAAIAAoAhwiBUECdEG4toCAAGoiAygCAEcNACADIAg2AgAgCA0BQQAgCUF+IAV3cTYCjLSAgAAMAgsgCkEQQRQgCigCECAARhtqIAg2AgAgCEUNAQsgCCAKNgIYAkAgACgCECIDRQ0AIAggAzYCECADIAg2AhgLIABBFGooAgAiA0UNACAIQRRqIAM2AgAgAyAINgIYCwJAAkAgBEEPSw0AIAAgBCACaiIDQQNyNgIEIAMgAGpBBGoiAyADKAIAQQFyNgIADAELIAAgAmoiBSAEQQFyNgIEIAAgAkEDcjYCBCAFIARqIAQ2AgACQCAHRQ0AIAdBA3YiCEEDdEGwtICAAGohAkEAKAKctICAACEDAkACQEEBIAh0IgggBnENAEEAIAggBnI2Aoi0gIAAIAIhCAwBCyACKAIIIQgLIAggAzYCDCACIAM2AgggAyACNgIMIAMgCDYCCAtBACAFNgKctICAAEEAIAQ2ApC0gIAACyAAQQhqIQMLIAFBEGokgICAgAAgAwsKACAAEL2AgIAAC/ANAQd/AkAgAEUNACAAQXhqIgEgAEF8aigCACICQXhxIgBqIQMCQCACQQFxDQAgAkEDcUUNASABIAEoAgAiAmsiAUEAKAKYtICAACIESQ0BIAIgAGohAAJAQQAoApy0gIAAIAFGDQACQCACQf8BSw0AIAEoAggiBCACQQN2IgVBA3RBsLSAgABqIgZGGgJAIAEoAgwiAiAERw0AQQBBACgCiLSAgABBfiAFd3E2Aoi0gIAADAMLIAIgBkYaIAIgBDYCCCAEIAI2AgwMAgsgASgCGCEHAkACQCABKAIMIgYgAUYNACAEIAEoAggiAksaIAYgAjYCCCACIAY2AgwMAQsCQCABQRRqIgIoAgAiBA0AIAFBEGoiAigCACIEDQBBACEGDAELA0AgAiEFIAQiBkEUaiICKAIAIgQNACAGQRBqIQIgBigCECIEDQALIAVBADYCAAsgB0UNAQJAAkAgASgCHCIEQQJ0Qbi2gIAAaiICKAIAIAFHDQAgAiAGNgIAIAYNAUEAQQAoAoy0gIAAQX4gBHdxNgKMtICAAAwDCyAHQRBBFCAHKAIQIAFGG2ogBjYCACAGRQ0CCyAGIAc2AhgCQCABKAIQIgJFDQAgBiACNgIQIAIgBjYCGAsgASgCFCICRQ0BIAZBFGogAjYCACACIAY2AhgMAQsgAygCBCICQQNxQQNHDQAgAyACQX5xNgIEQQAgADYCkLSAgAAgASAAaiAANgIAIAEgAEEBcjYCBA8LIAMgAU0NACADKAIEIgJBAXFFDQACQAJAIAJBAnENAAJAQQAoAqC0gIAAIANHDQBBACABNgKgtICAAEEAQQAoApS0gIAAIABqIgA2ApS0gIAAIAEgAEEBcjYCBCABQQAoApy0gIAARw0DQQBBADYCkLSAgABBAEEANgKctICAAA8LAkBBACgCnLSAgAAgA0cNAEEAIAE2Apy0gIAAQQBBACgCkLSAgAAgAGoiADYCkLSAgAAgASAAQQFyNgIEIAEgAGogADYCAA8LIAJBeHEgAGohAAJAAkAgAkH/AUsNACADKAIIIgQgAkEDdiIFQQN0QbC0gIAAaiIGRhoCQCADKAIMIgIgBEcNAEEAQQAoAoi0gIAAQX4gBXdxNgKItICAAAwCCyACIAZGGiACIAQ2AgggBCACNgIMDAELIAMoAhghBwJAAkAgAygCDCIGIANGDQBBACgCmLSAgAAgAygCCCICSxogBiACNgIIIAIgBjYCDAwBCwJAIANBFGoiAigCACIEDQAgA0EQaiICKAIAIgQNAEEAIQYMAQsDQCACIQUgBCIGQRRqIgIoAgAiBA0AIAZBEGohAiAGKAIQIgQNAAsgBUEANgIACyAHRQ0AAkACQCADKAIcIgRBAnRBuLaAgABqIgIoAgAgA0cNACACIAY2AgAgBg0BQQBBACgCjLSAgABBfiAEd3E2Aoy0gIAADAILIAdBEEEUIAcoAhAgA0YbaiAGNgIAIAZFDQELIAYgBzYCGAJAIAMoAhAiAkUNACAGIAI2AhAgAiAGNgIYCyADKAIUIgJFDQAgBkEUaiACNgIAIAIgBjYCGAsgASAAaiAANgIAIAEgAEEBcjYCBCABQQAoApy0gIAARw0BQQAgADYCkLSAgAAPCyADIAJBfnE2AgQgASAAaiAANgIAIAEgAEEBcjYCBAsCQCAAQf8BSw0AIABBA3YiAkEDdEGwtICAAGohAAJAAkBBACgCiLSAgAAiBEEBIAJ0IgJxDQBBACAEIAJyNgKItICAACAAIQIMAQsgACgCCCECCyACIAE2AgwgACABNgIIIAEgADYCDCABIAI2AggPC0EfIQICQCAAQf///wdLDQAgAEEIdiICIAJBgP4/akEQdkEIcSICdCIEIARBgOAfakEQdkEEcSIEdCIGIAZBgIAPakEQdkECcSIGdEEPdiACIARyIAZyayICQQF0IAAgAkEVanZBAXFyQRxqIQILIAFCADcCECABQRxqIAI2AgAgAkECdEG4toCAAGohBAJAAkBBACgCjLSAgAAiBkEBIAJ0IgNxDQAgBCABNgIAQQAgBiADcjYCjLSAgAAgAUEYaiAENgIAIAEgATYCCCABIAE2AgwMAQsgAEEAQRkgAkEBdmsgAkEfRht0IQIgBCgCACEGAkADQCAGIgQoAgRBeHEgAEYNASACQR12IQYgAkEBdCECIAQgBkEEcWpBEGoiAygCACIGDQALIAMgATYCACABQRhqIAQ2AgAgASABNgIMIAEgATYCCAwBCyAEKAIIIgAgATYCDCAEIAE2AgggAUEYakEANgIAIAEgBDYCDCABIAA2AggLQQBBACgCqLSAgABBf2oiAUF/IAEbNgKotICAAAsLTgACQCAADQA/AEEQdA8LAkAgAEH//wNxDQAgAEF/TA0AAkAgAEEQdkAAIgBBf0cNAEEAQTA2Avi3gIAAQX8PCyAAQRB0DwsQv4CAgAAACwQAAAALC44sAQBBgAgLhiwBAAAAAgAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEludmFsaWQgY2hhciBpbiB1cmwgcXVlcnkAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9ib2R5AENvbnRlbnQtTGVuZ3RoIG92ZXJmbG93AENodW5rIHNpemUgb3ZlcmZsb3cAUmVzcG9uc2Ugb3ZlcmZsb3cASW52YWxpZCBtZXRob2QgZm9yIEhUVFAveC54IHJlcXVlc3QASW52YWxpZCBtZXRob2QgZm9yIFJUU1AveC54IHJlcXVlc3QARXhwZWN0ZWQgU09VUkNFIG1ldGhvZCBmb3IgSUNFL3gueCByZXF1ZXN0AEludmFsaWQgY2hhciBpbiB1cmwgZnJhZ21lbnQgc3RhcnQARXhwZWN0ZWQgZG90AFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fc3RhdHVzAEludmFsaWQgcmVzcG9uc2Ugc3RhdHVzAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHBhcmFtZXRlcnMAVXNlciBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfaGVhZGVyYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9iZWdpbmAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzZXJ2ZXIASW52YWxpZCBoZWFkZXIgdmFsdWUgY2hhcgBJbnZhbGlkIGhlYWRlciBmaWVsZCBjaGFyAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAE1pc3NpbmcgZXhwZWN0ZWQgQ1IgYWZ0ZXIgaGVhZGVyIHZhbHVlAE1pc3NpbmcgZXhwZWN0ZWQgTEYgYWZ0ZXIgaGVhZGVyIHZhbHVlAEludmFsaWQgYFRyYW5zZmVyLUVuY29kaW5nYCBoZWFkZXIgdmFsdWUAUGF1c2VkIGJ5IG9uX2hlYWRlcnNfY29tcGxldGUASW52YWxpZCBFT0Ygc3RhdGUAb25fY2h1bmtfaGVhZGVyIHBhdXNlAG9uX21lc3NhZ2VfYmVnaW4gcGF1c2UAb25fY2h1bmtfY29tcGxldGUgcGF1c2UAb25fbWVzc2FnZV9jb21wbGV0ZSBwYXVzZQBQYXVzZSBvbiBDT05ORUNUL1VwZ3JhZGUAUGF1c2Ugb24gUFJJL1VwZ3JhZGUARXhwZWN0ZWQgSFRUUC8yIENvbm5lY3Rpb24gUHJlZmFjZQBFeHBlY3RlZCBzcGFjZSBhZnRlciBtZXRob2QAU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl9oZWFkZXJfZmllbGQAUGF1c2VkAEludmFsaWQgd29yZCBlbmNvdW50ZXJlZABJbnZhbGlkIG1ldGhvZCBlbmNvdW50ZXJlZABVbmV4cGVjdGVkIGNoYXIgaW4gdXJsIHNjaGVtYQBSZXF1ZXN0IGhhcyBpbnZhbGlkIGBUcmFuc2Zlci1FbmNvZGluZ2AATUtBQ1RJVklUWQBDT1BZAE5PVElGWQBQTEFZAFBVVABDSEVDS09VVABQT1NUAFJFUE9SVABIUEVfSU5WQUxJRF9DT05TVEFOVABHRVQASFBFX1NUUklDVABSRURJUkVDVABDT05ORUNUAEhQRV9JTlZBTElEX1NUQVRVUwBPUFRJT05TAFNFVF9QQVJBTUVURVIAR0VUX1BBUkFNRVRFUgBIUEVfVVNFUgBIUEVfQ0JfQ0hVTktfSEVBREVSAE1LQ0FMRU5EQVIAU0VUVVAAVEVBUkRPV04ASFBFX0NMT1NFRF9DT05ORUNUSU9OAEhQRV9JTlZBTElEX1ZFUlNJT04ASFBFX0NCX01FU1NBR0VfQkVHSU4ASFBFX0lOVkFMSURfSEVBREVSX1RPS0VOAEhQRV9JTlZBTElEX1VSTABNS0NPTABBQ0wASFBFX0lOVEVSTkFMAEhQRV9PSwBVTkxJTksAVU5MT0NLAFBSSQBIUEVfSU5WQUxJRF9DT05URU5UX0xFTkdUSABIUEVfVU5FWFBFQ1RFRF9DT05URU5UX0xFTkdUSABGTFVTSABQUk9QUEFUQ0gATS1TRUFSQ0gASFBFX0lOVkFMSURfVFJBTlNGRVJfRU5DT0RJTkcARXhwZWN0ZWQgQ1JMRgBIUEVfSU5WQUxJRF9DSFVOS19TSVpFAE1PVkUASFBFX0NCX0hFQURFUlNfQ09NUExFVEUASFBFX0NCX0NIVU5LX0NPTVBMRVRFAEhQRV9DQl9NRVNTQUdFX0NPTVBMRVRFAERFTEVURQBIUEVfSU5WQUxJRF9FT0ZfU1RBVEUAUEFVU0UAUFVSR0UATUVSR0UASFBFX1BBVVNFRF9VUEdSQURFAEhQRV9QQVVTRURfSDJfVVBHUkFERQBTT1VSQ0UAQU5OT1VOQ0UAVFJBQ0UAREVTQ1JJQkUAVU5TVUJTQ1JJQkUAUkVDT1JEAEhQRV9JTlZBTElEX01FVEhPRABQUk9QRklORABVTkJJTkQAUkVCSU5EAEhQ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BQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAEAAAIAAAAAAAAAAAAAAAAAAAAAAAADBAAABAQEBAQEBAQEBAQFBAQEBAQEBAQEBAQEAAQABgcEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAACAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk9VTkNFRUNLT1VUTkVDVEVURUNSSUJFTFVTSEVURUFEU0VBUkNIUkdFQ1RJVklUWUxFTkRBUlZFT1RJRllQVElPTlNDSFNFQVlTVEFUQ0hHRU9SRElSRUNUT1JUUkNIUEFSQU1FVEVSVVJDRUJTQ1JJQkVBUkRPV05BQ0VJTkROS0NLVUJTQ1JJQkVIVFRQL0FEVFAv";
  }
});

// node_modules/undici/lib/client.js
var require_client = __commonJS({
  "node_modules/undici/lib/client.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var net = require("net");
    var util = require_util();
    var Request4 = require_request();
    var DispatcherBase = require_dispatcher_base();
    var RedirectHandler = require_redirect();
    var {
      RequestContentLengthMismatchError,
      ResponseContentLengthMismatchError,
      InvalidArgumentError,
      RequestAbortedError,
      HeadersTimeoutError,
      HeadersOverflowError,
      SocketError,
      InformationalError,
      BodyTimeoutError,
      HTTPParserError
    } = require_errors();
    var buildConnector = require_connect();
    var {
      kUrl,
      kReset,
      kServerName,
      kClient,
      kBusy,
      kParser,
      kConnect,
      kBlocking,
      kResuming,
      kRunning,
      kPending,
      kSize,
      kWriting,
      kQueue,
      kConnected,
      kConnecting,
      kNeedDrain,
      kNoRef,
      kKeepAliveDefaultTimeout,
      kHostHeader,
      kPendingIdx,
      kRunningIdx,
      kError,
      kPipelining,
      kSocket,
      kKeepAliveTimeoutValue,
      kMaxHeadersSize,
      kKeepAliveMaxTimeout,
      kKeepAliveTimeoutThreshold,
      kHeadersTimeout,
      kBodyTimeout,
      kStrictContentLength,
      kConnector,
      kMaxRedirections,
      kMaxRequests,
      kCounter,
      kClose,
      kDestroy,
      kDispatch
    } = require_symbols();
    var kClosedResolve = Symbol("kClosedResolve");
    var channels = {};
    try {
      const diagnosticsChannel = require("diagnostics_channel");
      channels.sendHeaders = diagnosticsChannel.channel("undici:client:sendHeaders");
      channels.beforeConnect = diagnosticsChannel.channel("undici:client:beforeConnect");
      channels.connectError = diagnosticsChannel.channel("undici:client:connectError");
      channels.connected = diagnosticsChannel.channel("undici:client:connected");
    } catch {
      channels.sendHeaders = { hasSubscribers: false };
      channels.beforeConnect = { hasSubscribers: false };
      channels.connectError = { hasSubscribers: false };
      channels.connected = { hasSubscribers: false };
    }
    var Client = class extends DispatcherBase {
      constructor(url, {
        maxHeaderSize,
        headersTimeout,
        socketTimeout,
        requestTimeout,
        connectTimeout,
        bodyTimeout,
        idleTimeout,
        keepAlive,
        keepAliveTimeout,
        maxKeepAliveTimeout,
        keepAliveMaxTimeout,
        keepAliveTimeoutThreshold,
        socketPath,
        pipelining,
        tls,
        strictContentLength,
        maxCachedSessions,
        maxRedirections,
        connect: connect2,
        maxRequestsPerClient
      } = {}) {
        super();
        if (keepAlive !== void 0) {
          throw new InvalidArgumentError("unsupported keepAlive, use pipelining=0 instead");
        }
        if (socketTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (requestTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
        }
        if (idleTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported idleTimeout, use keepAliveTimeout instead");
        }
        if (maxKeepAliveTimeout !== void 0) {
          throw new InvalidArgumentError("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
        }
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) {
          throw new InvalidArgumentError("invalid maxHeaderSize");
        }
        if (socketPath != null && typeof socketPath !== "string") {
          throw new InvalidArgumentError("invalid socketPath");
        }
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) {
          throw new InvalidArgumentError("invalid connectTimeout");
        }
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) {
          throw new InvalidArgumentError("invalid keepAliveTimeout");
        }
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) {
          throw new InvalidArgumentError("invalid keepAliveMaxTimeout");
        }
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) {
          throw new InvalidArgumentError("invalid keepAliveTimeoutThreshold");
        }
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) {
          throw new InvalidArgumentError("headersTimeout must be a positive integer or zero");
        }
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) {
          throw new InvalidArgumentError("bodyTimeout must be a positive integer or zero");
        }
        if (connect2 != null && typeof connect2 !== "function" && typeof connect2 !== "object") {
          throw new InvalidArgumentError("connect must be a function or an object");
        }
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
          throw new InvalidArgumentError("maxRedirections must be a positive number");
        }
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) {
          throw new InvalidArgumentError("maxRequestsPerClient must be a positive number");
        }
        if (typeof connect2 !== "function") {
          connect2 = buildConnector({
            ...tls,
            maxCachedSessions,
            socketPath,
            timeout: connectTimeout,
            ...connect2
          });
        }
        this[kUrl] = util.parseOrigin(url);
        this[kConnector] = connect2;
        this[kSocket] = null;
        this[kPipelining] = pipelining != null ? pipelining : 1;
        this[kMaxHeadersSize] = maxHeaderSize || 16384;
        this[kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 6e5 : keepAliveMaxTimeout;
        this[kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 1e3 : keepAliveTimeoutThreshold;
        this[kKeepAliveTimeoutValue] = this[kKeepAliveDefaultTimeout];
        this[kServerName] = null;
        this[kResuming] = 0;
        this[kNeedDrain] = 0;
        this[kHostHeader] = `host: ${this[kUrl].hostname}${this[kUrl].port ? `:${this[kUrl].port}` : ""}\r
`;
        this[kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 3e4;
        this[kHeadersTimeout] = headersTimeout != null ? headersTimeout : 3e4;
        this[kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[kMaxRedirections] = maxRedirections;
        this[kMaxRequests] = maxRequestsPerClient;
        this[kClosedResolve] = null;
        this[kQueue] = [];
        this[kRunningIdx] = 0;
        this[kPendingIdx] = 0;
      }
      get pipelining() {
        return this[kPipelining];
      }
      set pipelining(value) {
        this[kPipelining] = value;
        resume(this, true);
      }
      get [kPending]() {
        return this[kQueue].length - this[kPendingIdx];
      }
      get [kRunning]() {
        return this[kPendingIdx] - this[kRunningIdx];
      }
      get [kSize]() {
        return this[kQueue].length - this[kRunningIdx];
      }
      get [kConnected]() {
        return !!this[kSocket] && !this[kConnecting] && !this[kSocket].destroyed;
      }
      get [kBusy]() {
        const socket = this[kSocket];
        return socket && (socket[kReset] || socket[kWriting] || socket[kBlocking]) || this[kSize] >= (this[kPipelining] || 1) || this[kPending] > 0;
      }
      [kConnect](cb) {
        connect(this);
        this.once("connect", cb);
      }
      [kDispatch](opts, handler) {
        const { maxRedirections = this[kMaxRedirections] } = opts;
        if (maxRedirections) {
          handler = new RedirectHandler(this, maxRedirections, opts, handler);
        }
        const origin = opts.origin || this[kUrl].origin;
        const request = new Request4(origin, opts, handler);
        this[kQueue].push(request);
        if (this[kResuming]) {
        } else if (util.bodyLength(request.body) == null && util.isIterable(request.body)) {
          this[kResuming] = 1;
          process.nextTick(resume, this);
        } else {
          resume(this, true);
        }
        if (this[kResuming] && this[kNeedDrain] !== 2 && this[kBusy]) {
          this[kNeedDrain] = 2;
        }
        return this[kNeedDrain] < 2;
      }
      async [kClose]() {
        return new Promise((resolve) => {
          if (!this[kSize]) {
            this.destroy(resolve);
          } else {
            this[kClosedResolve] = resolve;
          }
        });
      }
      async [kDestroy](err) {
        return new Promise((resolve) => {
          const requests = this[kQueue].splice(this[kPendingIdx]);
          for (let i2 = 0; i2 < requests.length; i2++) {
            const request = requests[i2];
            errorRequest(this, request, err);
          }
          const callback = () => {
            if (this[kClosedResolve]) {
              this[kClosedResolve]();
              this[kClosedResolve] = null;
            }
            resolve();
          };
          if (!this[kSocket]) {
            queueMicrotask(callback);
          } else {
            util.destroy(this[kSocket].on("close", callback), err);
          }
          resume(this);
        });
      }
    };
    var constants = require_constants2();
    var EMPTY_BUF = Buffer.alloc(0);
    async function lazyllhttp() {
      const llhttpWasmData = process.env.JEST_WORKER_ID ? require_llhttp_wasm() : void 0;
      let mod;
      try {
        mod = await WebAssembly.compile(Buffer.from(require_llhttp_simd_wasm(), "base64"));
      } catch (e2) {
        mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || require_llhttp_wasm(), "base64"));
      }
      return await WebAssembly.instantiate(mod, {
        env: {
          wasm_on_url: (p, at, len) => {
            return 0;
          },
          wasm_on_status: (p, at, len) => {
            assert.strictEqual(currentParser.ptr, p);
            const start = at - currentBufferPtr;
            const end = start + len;
            return currentParser.onStatus(currentBufferRef.slice(start, end)) || 0;
          },
          wasm_on_message_begin: (p) => {
            assert.strictEqual(currentParser.ptr, p);
            return currentParser.onMessageBegin() || 0;
          },
          wasm_on_header_field: (p, at, len) => {
            assert.strictEqual(currentParser.ptr, p);
            const start = at - currentBufferPtr;
            const end = start + len;
            return currentParser.onHeaderField(currentBufferRef.slice(start, end)) || 0;
          },
          wasm_on_header_value: (p, at, len) => {
            assert.strictEqual(currentParser.ptr, p);
            const start = at - currentBufferPtr;
            const end = start + len;
            return currentParser.onHeaderValue(currentBufferRef.slice(start, end)) || 0;
          },
          wasm_on_headers_complete: (p, statusCode, upgrade, shouldKeepAlive) => {
            assert.strictEqual(currentParser.ptr, p);
            return currentParser.onHeadersComplete(statusCode, Boolean(upgrade), Boolean(shouldKeepAlive)) || 0;
          },
          wasm_on_body: (p, at, len) => {
            assert.strictEqual(currentParser.ptr, p);
            const start = at - currentBufferPtr;
            const end = start + len;
            return currentParser.onBody(currentBufferRef.slice(start, end)) || 0;
          },
          wasm_on_message_complete: (p) => {
            assert.strictEqual(currentParser.ptr, p);
            return currentParser.onMessageComplete() || 0;
          }
        }
      });
    }
    var llhttpInstance = null;
    var llhttpPromise = lazyllhttp().catch(() => {
    });
    var currentParser = null;
    var currentBufferRef = null;
    var currentBufferSize = 0;
    var currentBufferPtr = null;
    var TIMEOUT_HEADERS = 1;
    var TIMEOUT_BODY = 2;
    var TIMEOUT_IDLE = 3;
    var Parser2 = class {
      constructor(client, socket, { exports: exports2 }) {
        assert(Number.isFinite(client[kMaxHeadersSize]) && client[kMaxHeadersSize] > 0);
        this.llhttp = exports2;
        this.ptr = this.llhttp.llhttp_alloc(constants.TYPE.RESPONSE);
        this.client = client;
        this.socket = socket;
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.statusCode = null;
        this.statusText = "";
        this.upgrade = false;
        this.headers = [];
        this.headersSize = 0;
        this.headersMaxSize = client[kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = "";
        this.contentLength = "";
      }
      setTimeout(value, type) {
        this.timeoutType = type;
        if (value !== this.timeoutValue) {
          clearTimeout(this.timeout);
          if (value) {
            this.timeout = setTimeout(onParserTimeout, value, this);
            if (this.timeout.unref) {
              this.timeout.unref();
            }
          } else {
            this.timeout = null;
          }
          this.timeoutValue = value;
        } else if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
      }
      resume() {
        if (this.socket.destroyed || !this.paused) {
          return;
        }
        assert(this.ptr != null);
        assert(currentParser == null);
        this.llhttp.llhttp_resume(this.ptr);
        assert(this.timeoutType === TIMEOUT_BODY);
        if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        this.paused = false;
        this.execute(this.socket.read() || EMPTY_BUF);
        this.readMore();
      }
      readMore() {
        while (!this.paused && this.ptr) {
          const chunk = this.socket.read();
          if (chunk === null) {
            break;
          }
          this.execute(chunk);
        }
      }
      execute(data) {
        assert(this.ptr != null);
        assert(currentParser == null);
        assert(!this.paused);
        const { socket, llhttp } = this;
        if (data.length > currentBufferSize) {
          if (currentBufferPtr) {
            llhttp.free(currentBufferPtr);
          }
          currentBufferSize = Math.ceil(data.length / 4096) * 4096;
          currentBufferPtr = llhttp.malloc(currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, currentBufferPtr, currentBufferSize).set(data);
        try {
          let ret;
          try {
            currentBufferRef = data;
            currentParser = this;
            ret = llhttp.llhttp_execute(this.ptr, currentBufferPtr, data.length);
          } catch (err) {
            throw err;
          } finally {
            currentParser = null;
            currentBufferRef = null;
          }
          const offset = llhttp.llhttp_get_error_pos(this.ptr) - currentBufferPtr;
          if (ret === constants.ERROR.PAUSED_UPGRADE) {
            this.onUpgrade(data.slice(offset));
          } else if (ret === constants.ERROR.PAUSED) {
            this.paused = true;
            socket.unshift(data.slice(offset));
          } else if (ret !== constants.ERROR.OK) {
            const ptr = llhttp.llhttp_get_error_reason(this.ptr);
            let message = "";
            if (ptr) {
              const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
              message = Buffer.from(llhttp.memory.buffer, ptr, len).toString();
            }
            throw new HTTPParserError(message, constants.ERROR[ret], data.slice(offset));
          }
        } catch (err) {
          util.destroy(socket, err);
        }
      }
      finish() {
        try {
          try {
            currentParser = this;
          } finally {
            currentParser = null;
          }
        } catch (err) {
          util.destroy(this.socket, err);
        }
      }
      destroy() {
        assert(this.ptr != null);
        assert(currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        clearTimeout(this.timeout);
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.paused = false;
      }
      onStatus(buf) {
        this.statusText = buf.toString();
      }
      onMessageBegin() {
        const { socket, client } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        if (!request) {
          return -1;
        }
      }
      onHeaderField(buf) {
        const len = this.headers.length;
        if ((len & 1) === 0) {
          this.headers.push(buf);
        } else {
          this.headers[len - 1] = Buffer.concat([this.headers[len - 1], buf]);
        }
        this.trackHeader(buf.length);
      }
      onHeaderValue(buf) {
        let len = this.headers.length;
        if ((len & 1) === 1) {
          this.headers.push(buf);
          len += 1;
        } else {
          this.headers[len - 1] = Buffer.concat([this.headers[len - 1], buf]);
        }
        const key2 = this.headers[len - 2];
        if (key2.length === 10 && key2.toString().toLowerCase() === "keep-alive") {
          this.keepAlive += buf.toString();
        } else if (key2.length === 14 && key2.toString().toLowerCase() === "content-length") {
          this.contentLength += buf.toString();
        }
        this.trackHeader(buf.length);
      }
      trackHeader(len) {
        this.headersSize += len;
        if (this.headersSize >= this.headersMaxSize) {
          util.destroy(this.socket, new HeadersOverflowError());
        }
      }
      onUpgrade(head) {
        const { upgrade, client, socket, headers, statusCode } = this;
        assert(upgrade);
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert(!socket.destroyed);
        assert(socket === client[kSocket]);
        assert(!this.paused);
        assert(request.upgrade || request.method === "CONNECT");
        this.statusCode = null;
        this.statusText = "";
        this.shouldKeepAlive = null;
        assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[kParser].destroy();
        socket[kParser] = null;
        socket[kClient] = null;
        socket[kError] = null;
        socket.removeListener("error", onSocketError).removeListener("readable", onSocketReadable).removeListener("end", onSocketEnd).removeListener("close", onSocketClose);
        client[kSocket] = null;
        client[kQueue][client[kRunningIdx]++] = null;
        client.emit("disconnect", client[kUrl], [client], new InformationalError("upgrade"));
        try {
          request.onUpgrade(statusCode, headers, socket);
        } catch (err) {
          util.destroy(socket, err);
        }
        resume(client);
      }
      onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client, socket, headers, statusText } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        if (!request) {
          return -1;
        }
        assert(!this.upgrade);
        assert(this.statusCode < 200);
        if (statusCode === 100) {
          util.destroy(socket, new SocketError("bad response", util.getSocketInfo(socket)));
          return -1;
        }
        if (upgrade && !request.upgrade) {
          util.destroy(socket, new SocketError("bad upgrade", util.getSocketInfo(socket)));
          return -1;
        }
        assert.strictEqual(this.timeoutType, TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive;
        if (this.statusCode >= 200) {
          const bodyTimeout = request.bodyTimeout != null ? request.bodyTimeout : client[kBodyTimeout];
          this.setTimeout(bodyTimeout, TIMEOUT_BODY);
        } else if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        if (request.method === "CONNECT") {
          assert(client[kRunning] === 1);
          this.upgrade = true;
          return 2;
        }
        if (upgrade) {
          assert(client[kRunning] === 1);
          this.upgrade = true;
          return 2;
        }
        assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (shouldKeepAlive && client[kPipelining]) {
          const keepAliveTimeout = this.keepAlive ? util.parseKeepAliveTimeout(this.keepAlive) : null;
          if (keepAliveTimeout != null) {
            const timeout = Math.min(
              keepAliveTimeout - client[kKeepAliveTimeoutThreshold],
              client[kKeepAliveMaxTimeout]
            );
            if (timeout <= 0) {
              socket[kReset] = true;
            } else {
              client[kKeepAliveTimeoutValue] = timeout;
            }
          } else {
            client[kKeepAliveTimeoutValue] = client[kKeepAliveDefaultTimeout];
          }
        } else {
          socket[kReset] = true;
        }
        let pause;
        try {
          pause = request.onHeaders(statusCode, headers, this.resume, statusText) === false;
        } catch (err) {
          util.destroy(socket, err);
          return -1;
        }
        if (request.method === "HEAD") {
          assert(socket[kReset]);
          return 1;
        }
        if (statusCode < 200) {
          return 1;
        }
        if (socket[kBlocking]) {
          socket[kBlocking] = false;
          resume(client);
        }
        return pause ? constants.ERROR.PAUSED : 0;
      }
      onBody(buf) {
        const { client, socket, statusCode } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert.strictEqual(this.timeoutType, TIMEOUT_BODY);
        if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        assert(statusCode >= 200);
        this.bytesRead += buf.length;
        try {
          if (request.onData(buf) === false) {
            return constants.ERROR.PAUSED;
          }
        } catch (err) {
          util.destroy(socket, err);
          return -1;
        }
      }
      onMessageComplete() {
        const { client, socket, statusCode, upgrade, headers, contentLength, bytesRead, shouldKeepAlive } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) {
          return -1;
        }
        if (upgrade) {
          return;
        }
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert(statusCode >= 100);
        this.statusCode = null;
        this.statusText = "";
        this.bytesRead = 0;
        this.contentLength = "";
        this.keepAlive = "";
        assert(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) {
          return;
        }
        if (request.method !== "HEAD" && contentLength && bytesRead !== parseInt(contentLength, 10)) {
          util.destroy(socket, new ResponseContentLengthMismatchError());
          return -1;
        }
        try {
          request.onComplete(headers);
        } catch (err) {
          errorRequest(client, request, err);
        }
        client[kQueue][client[kRunningIdx]++] = null;
        if (socket[kWriting]) {
          assert.strictEqual(client[kRunning], 0);
          util.destroy(socket, new InformationalError("reset"));
          return constants.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
          util.destroy(socket, new InformationalError("reset"));
          return constants.ERROR.PAUSED;
        } else if (socket[kReset] && client[kRunning] === 0) {
          util.destroy(socket, new InformationalError("reset"));
          return constants.ERROR.PAUSED;
        } else if (client[kPipelining] === 1) {
          setImmediate(resume, client);
        } else {
          resume(client);
        }
      }
    };
    function onParserTimeout(parser2) {
      const { socket, timeoutType, client } = parser2;
      if (timeoutType === TIMEOUT_HEADERS) {
        if (!socket[kWriting] || socket.writableNeedDrain || client[kRunning] > 1) {
          assert(!parser2.paused, "cannot be paused while waiting for headers");
          util.destroy(socket, new HeadersTimeoutError());
        }
      } else if (timeoutType === TIMEOUT_BODY) {
        if (!parser2.paused) {
          util.destroy(socket, new BodyTimeoutError());
        }
      } else if (timeoutType === TIMEOUT_IDLE) {
        assert(client[kRunning] === 0 && client[kKeepAliveTimeoutValue]);
        util.destroy(socket, new InformationalError("socket idle timeout"));
      }
    }
    function onSocketReadable() {
      const { [kParser]: parser2 } = this;
      parser2.readMore();
    }
    function onSocketError(err) {
      const { [kParser]: parser2 } = this;
      assert(err.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
      if (err.code === "ECONNRESET" && parser2.statusCode && !parser2.shouldKeepAlive) {
        parser2.finish();
        return;
      }
      this[kError] = err;
      onError(this[kClient], err);
    }
    function onError(client, err) {
      if (client[kRunning] === 0 && err.code !== "UND_ERR_INFO" && err.code !== "UND_ERR_SOCKET") {
        assert(client[kPendingIdx] === client[kRunningIdx]);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for (let i2 = 0; i2 < requests.length; i2++) {
          const request = requests[i2];
          errorRequest(client, request, err);
        }
        assert(client[kSize] === 0);
      }
    }
    function onSocketEnd() {
      const { [kParser]: parser2 } = this;
      if (parser2.statusCode && !parser2.shouldKeepAlive) {
        parser2.finish();
        return;
      }
      util.destroy(this, new SocketError("other side closed", util.getSocketInfo(this)));
    }
    function onSocketClose() {
      const { [kClient]: client } = this;
      this[kParser].destroy();
      this[kParser] = null;
      const err = this[kError] || new SocketError("closed", util.getSocketInfo(this));
      client[kSocket] = null;
      if (client.destroyed) {
        assert(client[kPending] === 0);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for (let i2 = 0; i2 < requests.length; i2++) {
          const request = requests[i2];
          errorRequest(client, request, err);
        }
      } else if (client[kRunning] > 0 && err.code !== "UND_ERR_INFO") {
        const request = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        errorRequest(client, request, err);
      }
      client[kPendingIdx] = client[kRunningIdx];
      assert(client[kRunning] === 0);
      client.emit("disconnect", client[kUrl], [client], err);
      resume(client);
    }
    async function connect(client) {
      assert(!client[kConnecting]);
      assert(!client[kSocket]);
      let { host, hostname, protocol: protocol2, port } = client[kUrl];
      if (hostname[0] === "[") {
        const idx = hostname.indexOf("]");
        assert(idx !== -1);
        const ip = hostname.substr(1, idx - 1);
        assert(net.isIP(ip));
        hostname = ip;
      }
      client[kConnecting] = true;
      if (channels.beforeConnect.hasSubscribers) {
        channels.beforeConnect.publish({
          connectParams: {
            host,
            hostname,
            protocol: protocol2,
            port,
            servername: client[kServerName]
          },
          connector: client[kConnector]
        });
      }
      try {
        const socket = await new Promise((resolve, reject) => {
          client[kConnector]({
            host,
            hostname,
            protocol: protocol2,
            port,
            servername: client[kServerName]
          }, (err, socket2) => {
            if (err) {
              reject(err);
            } else {
              resolve(socket2);
            }
          });
        });
        if (!llhttpInstance) {
          llhttpInstance = await llhttpPromise;
          llhttpPromise = null;
        }
        client[kConnecting] = false;
        assert(socket);
        client[kSocket] = socket;
        socket[kNoRef] = false;
        socket[kWriting] = false;
        socket[kReset] = false;
        socket[kBlocking] = false;
        socket[kError] = null;
        socket[kParser] = new Parser2(client, socket, llhttpInstance);
        socket[kClient] = client;
        socket[kCounter] = 0;
        socket[kMaxRequests] = client[kMaxRequests];
        socket.on("error", onSocketError).on("readable", onSocketReadable).on("end", onSocketEnd).on("close", onSocketClose);
        if (channels.connected.hasSubscribers) {
          channels.connected.publish({
            connectParams: {
              host,
              hostname,
              protocol: protocol2,
              port,
              servername: client[kServerName]
            },
            connector: client[kConnector],
            socket
          });
        }
        client.emit("connect", client[kUrl], [client]);
      } catch (err) {
        client[kConnecting] = false;
        if (channels.connectError.hasSubscribers) {
          channels.connectError.publish({
            connectParams: {
              host,
              hostname,
              protocol: protocol2,
              port,
              servername: client[kServerName]
            },
            connector: client[kConnector],
            error: err
          });
        }
        if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
          assert(client[kRunning] === 0);
          while (client[kPending] > 0 && client[kQueue][client[kPendingIdx]].servername === client[kServerName]) {
            const request = client[kQueue][client[kPendingIdx]++];
            errorRequest(client, request, err);
          }
        } else {
          onError(client, err);
        }
        client.emit("connectionError", client[kUrl], [client], err);
      }
      resume(client);
    }
    function emitDrain(client) {
      client[kNeedDrain] = 0;
      client.emit("drain", client[kUrl], [client]);
    }
    function resume(client, sync) {
      if (client[kResuming] === 2) {
        return;
      }
      client[kResuming] = 2;
      _resume(client, sync);
      client[kResuming] = 0;
      if (client[kRunningIdx] > 256) {
        client[kQueue].splice(0, client[kRunningIdx]);
        client[kPendingIdx] -= client[kRunningIdx];
        client[kRunningIdx] = 0;
      }
    }
    function _resume(client, sync) {
      while (true) {
        if (client.destroyed) {
          assert(client[kPending] === 0);
          return;
        }
        if (client.closed && !client[kSize]) {
          client.destroy();
          return;
        }
        const socket = client[kSocket];
        if (socket) {
          if (client[kSize] === 0) {
            if (!socket[kNoRef] && socket.unref) {
              socket.unref();
              socket[kNoRef] = true;
            }
          } else if (socket[kNoRef] && socket.ref) {
            socket.ref();
            socket[kNoRef] = false;
          }
          if (client[kSize] === 0) {
            if (socket[kParser].timeoutType !== TIMEOUT_IDLE) {
              socket[kParser].setTimeout(client[kKeepAliveTimeoutValue], TIMEOUT_IDLE);
            }
          } else if (client[kRunning] > 0 && socket[kParser].statusCode < 200) {
            if (socket[kParser].timeoutType !== TIMEOUT_HEADERS) {
              const request2 = client[kQueue][client[kRunningIdx]];
              const headersTimeout = request2.headersTimeout != null ? request2.headersTimeout : client[kHeadersTimeout];
              socket[kParser].setTimeout(headersTimeout, TIMEOUT_HEADERS);
            }
          }
        }
        if (client[kBusy]) {
          client[kNeedDrain] = 2;
        } else if (client[kNeedDrain] === 2) {
          if (sync) {
            client[kNeedDrain] = 1;
            process.nextTick(emitDrain, client);
          } else {
            emitDrain(client);
          }
          continue;
        }
        if (client[kPending] === 0) {
          return;
        }
        if (client[kRunning] >= (client[kPipelining] || 1)) {
          return;
        }
        const request = client[kQueue][client[kPendingIdx]];
        if (client[kUrl].protocol === "https:" && client[kServerName] !== request.servername) {
          if (client[kRunning] > 0) {
            return;
          }
          client[kServerName] = request.servername;
          if (socket && socket.servername !== request.servername) {
            util.destroy(socket, new InformationalError("servername changed"));
            return;
          }
        }
        if (client[kConnecting]) {
          return;
        }
        if (!socket) {
          connect(client);
          continue;
        }
        if (socket.destroyed || socket[kWriting] || socket[kReset] || socket[kBlocking]) {
          return;
        }
        if (client[kRunning] > 0 && !request.idempotent) {
          return;
        }
        if (client[kRunning] > 0 && (request.upgrade || request.method === "CONNECT")) {
          return;
        }
        if (util.isStream(request.body) && util.bodyLength(request.body) === 0) {
          request.body.on("data", function() {
            assert(false);
          }).on("error", function(err) {
            errorRequest(client, request, err);
          }).on("end", function() {
            util.destroy(this);
          });
          request.body = null;
        }
        if (client[kRunning] > 0 && (util.isStream(request.body) || util.isAsyncIterable(request.body))) {
          return;
        }
        if (!request.aborted && write(client, request)) {
          client[kPendingIdx]++;
        } else {
          client[kQueue].splice(client[kPendingIdx], 1);
        }
      }
    }
    function write(client, request) {
      const { body: body2, method, path, host, upgrade, headers, blocking } = request;
      const expectsPayload = method === "PUT" || method === "POST" || method === "PATCH";
      if (body2 && typeof body2.read === "function") {
        body2.read(0);
      }
      let contentLength = util.bodyLength(body2);
      if (contentLength === null) {
        contentLength = request.contentLength;
      }
      if (contentLength === 0 && !expectsPayload) {
        contentLength = null;
      }
      if (request.contentLength !== null && request.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
          errorRequest(client, request, new RequestContentLengthMismatchError());
          return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
      }
      const socket = client[kSocket];
      try {
        request.onConnect((err) => {
          if (request.aborted || request.completed) {
            return;
          }
          errorRequest(client, request, err || new RequestAbortedError());
          util.destroy(socket, new InformationalError("aborted"));
        });
      } catch (err) {
        errorRequest(client, request, err);
      }
      if (request.aborted) {
        return false;
      }
      if (method === "HEAD") {
        socket[kReset] = true;
      }
      if (upgrade || method === "CONNECT") {
        socket[kReset] = true;
      }
      if (client[kMaxRequests] && socket[kCounter]++ >= client[kMaxRequests]) {
        socket[kReset] = true;
      }
      if (blocking) {
        socket[kBlocking] = true;
      }
      let header = `${method} ${path} HTTP/1.1\r
`;
      if (typeof host === "string") {
        header += `host: ${host}\r
`;
      } else {
        header += client[kHostHeader];
      }
      if (upgrade) {
        header += `connection: upgrade\r
upgrade: ${upgrade}\r
`;
      } else if (client[kPipelining]) {
        header += "connection: keep-alive\r\n";
      } else {
        header += "connection: close\r\n";
      }
      if (headers) {
        header += headers;
      }
      if (channels.sendHeaders.hasSubscribers) {
        channels.sendHeaders.publish({ request, headers: header, socket });
      }
      if (!body2) {
        if (contentLength === 0) {
          socket.write(`${header}content-length: 0\r
\r
`, "ascii");
        } else {
          assert(contentLength === null, "no body must not have content length");
          socket.write(`${header}\r
`, "ascii");
        }
        request.onRequestSent();
      } else if (util.isBuffer(body2)) {
        assert(contentLength === body2.byteLength, "buffer body must have content length");
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r
\r
`, "ascii");
        socket.write(body2);
        socket.uncork();
        request.onBodySent(body2);
        request.onRequestSent();
        if (!expectsPayload) {
          socket[kReset] = true;
        }
      } else if (util.isBlobLike(body2)) {
        if (typeof body2.stream === "function") {
          writeIterable({ body: body2.stream(), client, request, socket, contentLength, header, expectsPayload });
        } else {
          writeBlob({ body: body2, client, request, socket, contentLength, header, expectsPayload });
        }
      } else if (util.isStream(body2)) {
        writeStream({ body: body2, client, request, socket, contentLength, header, expectsPayload });
      } else if (util.isIterable(body2)) {
        writeIterable({ body: body2, client, request, socket, contentLength, header, expectsPayload });
      } else {
        assert(false);
      }
      return true;
    }
    function writeStream({ body: body2, client, request, socket, contentLength, header, expectsPayload }) {
      assert(contentLength !== 0 || client[kRunning] === 0, "stream body cannot be pipelined");
      let finished = false;
      const writer = new AsyncWriter({ socket, request, contentLength, client, expectsPayload, header });
      const onData = function(chunk) {
        try {
          assert(!finished);
          if (!writer.write(chunk) && this.pause) {
            this.pause();
          }
        } catch (err) {
          util.destroy(this, err);
        }
      };
      const onDrain = function() {
        assert(!finished);
        if (body2.resume) {
          body2.resume();
        }
      };
      const onAbort = function() {
        onFinished(new RequestAbortedError());
      };
      const onFinished = function(err) {
        if (finished) {
          return;
        }
        finished = true;
        assert(socket.destroyed || socket[kWriting] && client[kRunning] <= 1);
        socket.off("drain", onDrain).off("error", onFinished);
        body2.removeListener("data", onData).removeListener("end", onFinished).removeListener("error", onFinished).removeListener("close", onAbort);
        if (!err) {
          try {
            writer.end();
          } catch (er) {
            err = er;
          }
        }
        writer.destroy(err);
        if (err && (err.code !== "UND_ERR_INFO" || err.message !== "reset")) {
          util.destroy(body2, err);
        } else {
          util.destroy(body2);
        }
      };
      body2.on("data", onData).on("end", onFinished).on("error", onFinished).on("close", onAbort);
      if (body2.resume) {
        body2.resume();
      }
      socket.on("drain", onDrain).on("error", onFinished);
    }
    async function writeBlob({ body: body2, client, request, socket, contentLength, header, expectsPayload }) {
      assert(contentLength === body2.size, "blob body must have content length");
      try {
        if (contentLength != null && contentLength !== body2.size) {
          throw new RequestContentLengthMismatchError();
        }
        const buffer = Buffer.from(await body2.arrayBuffer());
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r
\r
`, "ascii");
        socket.write(buffer);
        socket.uncork();
        request.onBodySent(buffer);
        request.onRequestSent();
        if (!expectsPayload) {
          socket[kReset] = true;
        }
        resume(client);
      } catch (err) {
        util.destroy(socket, err);
      }
    }
    async function writeIterable({ body: body2, client, request, socket, contentLength, header, expectsPayload }) {
      assert(contentLength !== 0 || client[kRunning] === 0, "iterator body cannot be pipelined");
      let callback = null;
      function onDrain() {
        if (callback) {
          const cb = callback;
          callback = null;
          cb();
        }
      }
      const waitForDrain = () => new Promise((resolve, reject) => {
        assert(callback === null);
        if (socket[kError]) {
          reject(socket[kError]);
        } else {
          callback = resolve;
        }
      });
      socket.on("close", onDrain).on("drain", onDrain);
      const writer = new AsyncWriter({ socket, request, contentLength, client, expectsPayload, header });
      try {
        for await (const chunk of body2) {
          if (socket[kError]) {
            throw socket[kError];
          }
          if (!writer.write(chunk)) {
            await waitForDrain();
          }
        }
        writer.end();
      } catch (err) {
        writer.destroy(err);
      } finally {
        socket.off("close", onDrain).off("drain", onDrain);
      }
    }
    var AsyncWriter = class {
      constructor({ socket, request, contentLength, client, expectsPayload, header }) {
        this.socket = socket;
        this.request = request;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        socket[kWriting] = true;
      }
      write(chunk) {
        const { socket, request, contentLength, client, bytesWritten, expectsPayload, header } = this;
        if (socket[kError]) {
          throw socket[kError];
        }
        if (socket.destroyed) {
          return false;
        }
        const len = Buffer.byteLength(chunk);
        if (!len) {
          return true;
        }
        if (contentLength !== null && bytesWritten + len > contentLength) {
          if (client[kStrictContentLength]) {
            throw new RequestContentLengthMismatchError();
          }
          process.emitWarning(new RequestContentLengthMismatchError());
        }
        if (bytesWritten === 0) {
          if (!expectsPayload) {
            socket[kReset] = true;
          }
          if (contentLength === null) {
            socket.write(`${header}transfer-encoding: chunked\r
`, "ascii");
          } else {
            socket.write(`${header}content-length: ${contentLength}\r
\r
`, "ascii");
          }
        }
        if (contentLength === null) {
          socket.write(`\r
${len.toString(16)}\r
`, "ascii");
        }
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        request.onBodySent(chunk);
        if (!ret) {
          if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
            if (socket[kParser].timeout.refresh) {
              socket[kParser].timeout.refresh();
            }
          }
        }
        return ret;
      }
      end() {
        const { socket, contentLength, client, bytesWritten, expectsPayload, header, request } = this;
        request.onRequestSent();
        socket[kWriting] = false;
        if (socket[kError]) {
          throw socket[kError];
        }
        if (socket.destroyed) {
          return;
        }
        if (bytesWritten === 0) {
          if (expectsPayload) {
            socket.write(`${header}content-length: 0\r
\r
`, "ascii");
          } else {
            socket.write(`${header}\r
`, "ascii");
          }
        } else if (contentLength === null) {
          socket.write("\r\n0\r\n\r\n", "ascii");
        }
        if (contentLength !== null && bytesWritten !== contentLength) {
          if (client[kStrictContentLength]) {
            throw new RequestContentLengthMismatchError();
          } else {
            process.emitWarning(new RequestContentLengthMismatchError());
          }
        }
        if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
          if (socket[kParser].timeout.refresh) {
            socket[kParser].timeout.refresh();
          }
        }
        resume(client);
      }
      destroy(err) {
        const { socket, client } = this;
        socket[kWriting] = false;
        if (err) {
          assert(client[kRunning] <= 1, "pipeline should only contain this request");
          util.destroy(socket, err);
        }
      }
    };
    function errorRequest(client, request, err) {
      try {
        request.onError(err);
        assert(request.aborted);
      } catch (err2) {
        client.emit("error", err2);
      }
    }
    module2.exports = Client;
  }
});

// node_modules/undici/lib/node/fixed-queue.js
var require_fixed_queue = __commonJS({
  "node_modules/undici/lib/node/fixed-queue.js"(exports, module2) {
    "use strict";
    init_shims();
    var kSize = 2048;
    var kMask = kSize - 1;
    var FixedCircularBuffer = class {
      constructor() {
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize);
        this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return (this.top + 1 & kMask) === this.bottom;
      }
      push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
      }
      shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === void 0)
          return null;
        this.list[this.bottom] = void 0;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
      }
    };
    module2.exports = class FixedQueue {
      constructor() {
        this.head = this.tail = new FixedCircularBuffer();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(data) {
        if (this.head.isFull()) {
          this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
      }
      shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
          this.tail = tail.next;
        }
        return next;
      }
    };
  }
});

// node_modules/undici/lib/pool-stats.js
var require_pool_stats = __commonJS({
  "node_modules/undici/lib/pool-stats.js"(exports, module2) {
    init_shims();
    var { kFree, kConnected, kPending, kQueued, kRunning, kSize } = require_symbols();
    var kPool = Symbol("pool");
    var PoolStats = class {
      constructor(pool) {
        this[kPool] = pool;
      }
      get connected() {
        return this[kPool][kConnected];
      }
      get free() {
        return this[kPool][kFree];
      }
      get pending() {
        return this[kPool][kPending];
      }
      get queued() {
        return this[kPool][kQueued];
      }
      get running() {
        return this[kPool][kRunning];
      }
      get size() {
        return this[kPool][kSize];
      }
    };
    module2.exports = PoolStats;
  }
});

// node_modules/undici/lib/pool-base.js
var require_pool_base = __commonJS({
  "node_modules/undici/lib/pool-base.js"(exports, module2) {
    "use strict";
    init_shims();
    var DispatcherBase = require_dispatcher_base();
    var FixedQueue = require_fixed_queue();
    var { kConnected, kSize, kRunning, kPending, kQueued, kBusy, kFree, kUrl, kClose, kDestroy, kDispatch } = require_symbols();
    var PoolStats = require_pool_stats();
    var kClients = Symbol("clients");
    var kNeedDrain = Symbol("needDrain");
    var kQueue = Symbol("queue");
    var kClosedResolve = Symbol("closed resolve");
    var kOnDrain = Symbol("onDrain");
    var kOnConnect = Symbol("onConnect");
    var kOnDisconnect = Symbol("onDisconnect");
    var kOnConnectionError = Symbol("onConnectionError");
    var kGetDispatcher = Symbol("get dispatcher");
    var kAddClient = Symbol("add client");
    var kRemoveClient = Symbol("remove client");
    var kStats = Symbol("stats");
    var PoolBase = class extends DispatcherBase {
      constructor() {
        super();
        this[kQueue] = new FixedQueue();
        this[kClients] = [];
        this[kQueued] = 0;
        const pool = this;
        this[kOnDrain] = function onDrain(origin, targets) {
          const queue = pool[kQueue];
          let needDrain = false;
          while (!needDrain) {
            const item = queue.shift();
            if (!item) {
              break;
            }
            pool[kQueued]--;
            needDrain = !this.dispatch(item.opts, item.handler);
          }
          this[kNeedDrain] = needDrain;
          if (!this[kNeedDrain] && pool[kNeedDrain]) {
            pool[kNeedDrain] = false;
            pool.emit("drain", origin, [pool, ...targets]);
          }
          if (pool[kClosedResolve] && queue.isEmpty()) {
            Promise.all(pool[kClients].map((c) => c.close())).then(pool[kClosedResolve]);
          }
        };
        this[kOnConnect] = (origin, targets) => {
          pool.emit("connect", origin, [pool, ...targets]);
        };
        this[kOnDisconnect] = (origin, targets, err) => {
          pool.emit("disconnect", origin, [pool, ...targets], err);
        };
        this[kOnConnectionError] = (origin, targets, err) => {
          pool.emit("connectionError", origin, [pool, ...targets], err);
        };
        this[kStats] = new PoolStats(this);
      }
      get [kBusy]() {
        return this[kNeedDrain];
      }
      get [kConnected]() {
        return this[kClients].filter((client) => client[kConnected]).length;
      }
      get [kFree]() {
        return this[kClients].filter((client) => client[kConnected] && !client[kNeedDrain]).length;
      }
      get [kPending]() {
        let ret = this[kQueued];
        for (const { [kPending]: pending } of this[kClients]) {
          ret += pending;
        }
        return ret;
      }
      get [kRunning]() {
        let ret = 0;
        for (const { [kRunning]: running } of this[kClients]) {
          ret += running;
        }
        return ret;
      }
      get [kSize]() {
        let ret = this[kQueued];
        for (const { [kSize]: size } of this[kClients]) {
          ret += size;
        }
        return ret;
      }
      get stats() {
        return this[kStats];
      }
      async [kClose]() {
        if (this[kQueue].isEmpty()) {
          return Promise.all(this[kClients].map((c) => c.close()));
        } else {
          return new Promise((resolve) => {
            this[kClosedResolve] = resolve;
          });
        }
      }
      async [kDestroy](err) {
        while (true) {
          const item = this[kQueue].shift();
          if (!item) {
            break;
          }
          item.handler.onError(err);
        }
        return Promise.all(this[kClients].map((c) => c.destroy(err)));
      }
      [kDispatch](opts, handler) {
        const dispatcher = this[kGetDispatcher]();
        if (!dispatcher) {
          this[kNeedDrain] = true;
          this[kQueue].push({ opts, handler });
          this[kQueued]++;
        } else if (!dispatcher.dispatch(opts, handler)) {
          dispatcher[kNeedDrain] = true;
          this[kNeedDrain] = !this[kGetDispatcher]();
        }
        return !this[kNeedDrain];
      }
      [kAddClient](client) {
        client.on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
        this[kClients].push(client);
        if (this[kNeedDrain]) {
          process.nextTick(() => {
            if (this[kNeedDrain]) {
              this[kOnDrain](client[kUrl], [this, client]);
            }
          });
        }
        return this;
      }
      [kRemoveClient](client) {
        client.close(() => {
          const idx = this[kClients].indexOf(client);
          if (idx !== -1) {
            this[kClients].splice(idx, 1);
          }
        });
        this[kNeedDrain] = this[kClients].some((dispatcher) => !dispatcher[kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
      }
    };
    module2.exports = {
      PoolBase,
      kClients,
      kNeedDrain,
      kAddClient,
      kRemoveClient,
      kGetDispatcher
    };
  }
});

// node_modules/undici/lib/pool.js
var require_pool = __commonJS({
  "node_modules/undici/lib/pool.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      PoolBase,
      kClients,
      kNeedDrain,
      kAddClient,
      kGetDispatcher
    } = require_pool_base();
    var Client = require_client();
    var {
      InvalidArgumentError
    } = require_errors();
    var util = require_util();
    var { kUrl } = require_symbols();
    var buildConnector = require_connect();
    var kOptions = Symbol("options");
    var kConnections = Symbol("connections");
    var kFactory = Symbol("factory");
    function defaultFactory(origin, opts) {
      return new Client(origin, opts);
    }
    var Pool = class extends PoolBase {
      constructor(origin, {
        connections,
        factory = defaultFactory,
        connect,
        connectTimeout,
        tls,
        maxCachedSessions,
        socketPath,
        ...options2
      } = {}) {
        super();
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) {
          throw new InvalidArgumentError("invalid connections");
        }
        if (typeof factory !== "function") {
          throw new InvalidArgumentError("factory must be a function.");
        }
        if (connect != null && typeof connect !== "function" && typeof connect !== "object") {
          throw new InvalidArgumentError("connect must be a function or an object");
        }
        if (typeof connect !== "function") {
          connect = buildConnector({
            ...tls,
            maxCachedSessions,
            socketPath,
            timeout: connectTimeout == null ? 1e4 : connectTimeout,
            ...connect
          });
        }
        this[kConnections] = connections || null;
        this[kUrl] = util.parseOrigin(origin);
        this[kOptions] = { ...util.deepClone(options2), connect };
        this[kFactory] = factory;
      }
      [kGetDispatcher]() {
        let dispatcher = this[kClients].find((dispatcher2) => !dispatcher2[kNeedDrain]);
        if (dispatcher) {
          return dispatcher;
        }
        if (!this[kConnections] || this[kClients].length < this[kConnections]) {
          dispatcher = this[kFactory](this[kUrl], this[kOptions]);
          this[kAddClient](dispatcher);
        }
        return dispatcher;
      }
    };
    module2.exports = Pool;
  }
});

// node_modules/undici/lib/balanced-pool.js
var require_balanced_pool = __commonJS({
  "node_modules/undici/lib/balanced-pool.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      BalancedPoolMissingUpstreamError,
      InvalidArgumentError
    } = require_errors();
    var {
      PoolBase,
      kClients,
      kNeedDrain,
      kAddClient,
      kRemoveClient,
      kGetDispatcher
    } = require_pool_base();
    var Pool = require_pool();
    var { kUrl } = require_symbols();
    var { parseOrigin } = require_util();
    var kFactory = Symbol("factory");
    var kOptions = Symbol("options");
    var kGreatestCommonDivisor = Symbol("kGreatestCommonDivisor");
    var kCurrentWeight = Symbol("kCurrentWeight");
    var kIndex = Symbol("kIndex");
    var kWeight = Symbol("kWeight");
    var kMaxWeightPerServer = Symbol("kMaxWeightPerServer");
    var kErrorPenalty = Symbol("kErrorPenalty");
    function getGreatestCommonDivisor(a, b) {
      if (b === 0)
        return a;
      return getGreatestCommonDivisor(b, a % b);
    }
    function defaultFactory(origin, opts) {
      return new Pool(origin, opts);
    }
    var BalancedPool = class extends PoolBase {
      constructor(upstreams = [], { factory = defaultFactory, ...opts } = {}) {
        super();
        this[kOptions] = opts;
        this[kIndex] = -1;
        this[kCurrentWeight] = 0;
        this[kMaxWeightPerServer] = this[kOptions].maxWeightPerServer || 100;
        this[kErrorPenalty] = this[kOptions].errorPenalty || 15;
        if (!Array.isArray(upstreams)) {
          upstreams = [upstreams];
        }
        if (typeof factory !== "function") {
          throw new InvalidArgumentError("factory must be a function.");
        }
        this[kFactory] = factory;
        for (const upstream of upstreams) {
          this.addUpstream(upstream);
        }
        this._updateBalancedPoolStats();
      }
      addUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        if (this[kClients].find((pool2) => pool2[kUrl].origin === upstreamOrigin && pool2.closed !== true && pool2.destroyed !== true)) {
          return this;
        }
        const pool = this[kFactory](upstreamOrigin, Object.assign({}, this[kOptions]));
        this[kAddClient](pool);
        pool.on("connect", () => {
          pool[kWeight] = Math.min(this[kMaxWeightPerServer], pool[kWeight] + this[kErrorPenalty]);
        });
        pool.on("connectionError", () => {
          pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
          this._updateBalancedPoolStats();
        });
        pool.on("disconnect", (...args) => {
          const err = args[2];
          if (err && err.code === "UND_ERR_SOCKET") {
            pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
            this._updateBalancedPoolStats();
          }
        });
        for (const client of this[kClients]) {
          client[kWeight] = this[kMaxWeightPerServer];
        }
        this._updateBalancedPoolStats();
        return this;
      }
      _updateBalancedPoolStats() {
        this[kGreatestCommonDivisor] = this[kClients].map((p) => p[kWeight]).reduce(getGreatestCommonDivisor, 0);
      }
      removeUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        const pool = this[kClients].find((pool2) => pool2[kUrl].origin === upstreamOrigin && pool2.closed !== true && pool2.destroyed !== true);
        if (pool) {
          this[kRemoveClient](pool);
        }
        return this;
      }
      get upstreams() {
        return this[kClients].filter((dispatcher) => dispatcher.closed !== true && dispatcher.destroyed !== true).map((p) => p[kUrl].origin);
      }
      [kGetDispatcher]() {
        if (this[kClients].length === 0) {
          throw new BalancedPoolMissingUpstreamError();
        }
        const dispatcher = this[kClients].find((dispatcher2) => !dispatcher2[kNeedDrain] && dispatcher2.closed !== true && dispatcher2.destroyed !== true);
        if (!dispatcher) {
          return;
        }
        const allClientsBusy = this[kClients].map((pool) => pool[kNeedDrain]).reduce((a, b) => a && b, true);
        if (allClientsBusy) {
          return;
        }
        let counter = 0;
        let maxWeightIndex = this[kClients].findIndex((pool) => !pool[kNeedDrain]);
        while (counter++ < this[kClients].length) {
          this[kIndex] = (this[kIndex] + 1) % this[kClients].length;
          const pool = this[kClients][this[kIndex]];
          if (pool[kWeight] > this[kClients][maxWeightIndex][kWeight] && !pool[kNeedDrain]) {
            maxWeightIndex = this[kIndex];
          }
          if (this[kIndex] === 0) {
            this[kCurrentWeight] = this[kCurrentWeight] - this[kGreatestCommonDivisor];
            if (this[kCurrentWeight] <= 0) {
              this[kCurrentWeight] = this[kMaxWeightPerServer];
            }
          }
          if (pool[kWeight] >= this[kCurrentWeight] && !pool[kNeedDrain]) {
            return pool;
          }
        }
        this[kCurrentWeight] = this[kClients][maxWeightIndex][kWeight];
        this[kIndex] = maxWeightIndex;
        return this[kClients][maxWeightIndex];
      }
    };
    module2.exports = BalancedPool;
  }
});

// node_modules/undici/lib/compat/dispatcher-weakref.js
var require_dispatcher_weakref = __commonJS({
  "node_modules/undici/lib/compat/dispatcher-weakref.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kConnected, kSize } = require_symbols();
    var CompatWeakRef = class {
      constructor(value) {
        this.value = value;
      }
      deref() {
        return this.value[kConnected] === 0 && this.value[kSize] === 0 ? void 0 : this.value;
      }
    };
    var CompatFinalizer = class {
      constructor(finalizer) {
        this.finalizer = finalizer;
      }
      register(dispatcher, key2) {
        dispatcher.on("disconnect", () => {
          if (dispatcher[kConnected] === 0 && dispatcher[kSize] === 0) {
            this.finalizer(key2);
          }
        });
      }
    };
    module2.exports = function() {
      return {
        WeakRef: global.WeakRef || CompatWeakRef,
        FinalizationRegistry: global.FinalizationRegistry || CompatFinalizer
      };
    };
  }
});

// node_modules/undici/lib/agent.js
var require_agent = __commonJS({
  "node_modules/undici/lib/agent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { InvalidArgumentError } = require_errors();
    var { kClients, kRunning, kClose, kDestroy, kDispatch } = require_symbols();
    var DispatcherBase = require_dispatcher_base();
    var Pool = require_pool();
    var Client = require_client();
    var util = require_util();
    var RedirectHandler = require_redirect();
    var { WeakRef, FinalizationRegistry } = require_dispatcher_weakref()();
    var kOnConnect = Symbol("onConnect");
    var kOnDisconnect = Symbol("onDisconnect");
    var kOnConnectionError = Symbol("onConnectionError");
    var kMaxRedirections = Symbol("maxRedirections");
    var kOnDrain = Symbol("onDrain");
    var kFactory = Symbol("factory");
    var kFinalizer = Symbol("finalizer");
    var kOptions = Symbol("options");
    function defaultFactory(origin, opts) {
      return opts && opts.connections === 1 ? new Client(origin, opts) : new Pool(origin, opts);
    }
    var Agent = class extends DispatcherBase {
      constructor({ factory = defaultFactory, maxRedirections = 0, connect, ...options2 } = {}) {
        super();
        if (typeof factory !== "function") {
          throw new InvalidArgumentError("factory must be a function.");
        }
        if (connect != null && typeof connect !== "function" && typeof connect !== "object") {
          throw new InvalidArgumentError("connect must be a function or an object");
        }
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) {
          throw new InvalidArgumentError("maxRedirections must be a positive number");
        }
        if (connect && typeof connect !== "function") {
          connect = { ...connect };
        }
        this[kOptions] = { ...util.deepClone(options2), connect };
        this[kMaxRedirections] = maxRedirections;
        this[kFactory] = factory;
        this[kClients] = /* @__PURE__ */ new Map();
        this[kFinalizer] = new FinalizationRegistry((key2) => {
          const ref = this[kClients].get(key2);
          if (ref !== void 0 && ref.deref() === void 0) {
            this[kClients].delete(key2);
          }
        });
        const agent = this;
        this[kOnDrain] = (origin, targets) => {
          agent.emit("drain", origin, [agent, ...targets]);
        };
        this[kOnConnect] = (origin, targets) => {
          agent.emit("connect", origin, [agent, ...targets]);
        };
        this[kOnDisconnect] = (origin, targets, err) => {
          agent.emit("disconnect", origin, [agent, ...targets], err);
        };
        this[kOnConnectionError] = (origin, targets, err) => {
          agent.emit("connectionError", origin, [agent, ...targets], err);
        };
      }
      get [kRunning]() {
        let ret = 0;
        for (const ref of this[kClients].values()) {
          const client = ref.deref();
          if (client) {
            ret += client[kRunning];
          }
        }
        return ret;
      }
      [kDispatch](opts, handler) {
        let key2;
        if (opts.origin && (typeof opts.origin === "string" || opts.origin instanceof URL)) {
          key2 = String(opts.origin);
        } else {
          throw new InvalidArgumentError("opts.origin must be a non-empty string or URL.");
        }
        const ref = this[kClients].get(key2);
        let dispatcher = ref ? ref.deref() : null;
        if (!dispatcher) {
          dispatcher = this[kFactory](opts.origin, this[kOptions]).on("drain", this[kOnDrain]).on("connect", this[kOnConnect]).on("disconnect", this[kOnDisconnect]).on("connectionError", this[kOnConnectionError]);
          this[kClients].set(key2, new WeakRef(dispatcher));
          this[kFinalizer].register(dispatcher, key2);
        }
        const { maxRedirections = this[kMaxRedirections] } = opts;
        if (maxRedirections != null && maxRedirections !== 0) {
          opts = { ...opts, maxRedirections: 0 };
          handler = new RedirectHandler(this, maxRedirections, opts, handler);
        }
        return dispatcher.dispatch(opts, handler);
      }
      async [kClose]() {
        const closePromises = [];
        for (const ref of this[kClients].values()) {
          const client = ref.deref();
          if (client) {
            closePromises.push(client.close());
          }
        }
        await Promise.all(closePromises);
      }
      async [kDestroy](err) {
        const destroyPromises = [];
        for (const ref of this[kClients].values()) {
          const client = ref.deref();
          if (client) {
            destroyPromises.push(client.destroy(err));
          }
        }
        await Promise.all(destroyPromises);
      }
    };
    module2.exports = Agent;
  }
});

// node_modules/undici/lib/api/readable.js
var require_readable = __commonJS({
  "node_modules/undici/lib/api/readable.js"(exports, module2) {
    "use strict";
    init_shims();
    var assert = require("assert");
    var { Readable: Readable2 } = require("stream");
    var { RequestAbortedError, NotSupportedError } = require_errors();
    var util = require_util();
    var { ReadableStreamFrom, toUSVString } = require_util();
    var Blob3;
    var kConsume = Symbol("kConsume");
    var kReading = Symbol("kReading");
    var kBody = Symbol("kBody");
    var kAbort = Symbol("abort");
    var kContentType = Symbol("kContentType");
    module2.exports = class BodyReadable extends Readable2 {
      constructor(resume, abort, contentType = "") {
        super({
          autoDestroy: true,
          read: resume,
          highWaterMark: 64 * 1024
        });
        this._readableState.dataEmitted = false;
        this[kAbort] = abort;
        this[kConsume] = null;
        this[kBody] = null;
        this[kContentType] = contentType;
        this[kReading] = false;
      }
      destroy(err) {
        if (this.destroyed) {
          return this;
        }
        if (!err && !this._readableState.endEmitted) {
          err = new RequestAbortedError();
        }
        if (err) {
          this[kAbort]();
        }
        return super.destroy(err);
      }
      emit(ev, ...args) {
        if (ev === "data") {
          this._readableState.dataEmitted = true;
        } else if (ev === "error") {
          this._readableState.errorEmitted = true;
        }
        return super.emit(ev, ...args);
      }
      on(ev, ...args) {
        if (ev === "data" || ev === "readable") {
          this[kReading] = true;
        }
        return super.on(ev, ...args);
      }
      addListener(ev, ...args) {
        return this.on(ev, ...args);
      }
      off(ev, ...args) {
        const ret = super.off(ev, ...args);
        if (ev === "data" || ev === "readable") {
          this[kReading] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0;
        }
        return ret;
      }
      removeListener(ev, ...args) {
        return this.off(ev, ...args);
      }
      push(chunk) {
        if (this[kConsume] && chunk !== null && this.readableLength === 0) {
          consumePush(this[kConsume], chunk);
          return this[kReading] ? super.push(chunk) : true;
        }
        return super.push(chunk);
      }
      async text() {
        return consume(this, "text");
      }
      async json() {
        return consume(this, "json");
      }
      async blob() {
        return consume(this, "blob");
      }
      async arrayBuffer() {
        return consume(this, "arrayBuffer");
      }
      async formData() {
        throw new NotSupportedError();
      }
      get bodyUsed() {
        return util.isDisturbed(this);
      }
      get body() {
        if (!this[kBody]) {
          this[kBody] = ReadableStreamFrom(this);
          if (this[kConsume]) {
            this[kBody].getReader();
            assert(this[kBody].locked);
          }
        }
        return this[kBody];
      }
      async dump(opts) {
        let limit = opts && Number.isFinite(opts.limit) ? opts.limit : 262144;
        try {
          for await (const chunk of this) {
            limit -= Buffer.byteLength(chunk);
            if (limit < 0) {
              return;
            }
          }
        } catch {
        }
      }
    };
    function isLocked(self2) {
      return self2[kBody] && self2[kBody].locked === true || self2[kConsume];
    }
    function isUnusable(self2) {
      return util.isDisturbed(self2) || isLocked(self2);
    }
    async function consume(stream, type) {
      if (isUnusable(stream)) {
        throw new TypeError("unusable");
      }
      assert(!stream[kConsume]);
      return new Promise((resolve, reject) => {
        stream[kConsume] = {
          type,
          stream,
          resolve,
          reject,
          length: 0,
          body: []
        };
        stream.on("error", function(err) {
          consumeFinish(this[kConsume], err);
        }).on("close", function() {
          if (this[kConsume].body !== null) {
            consumeFinish(this[kConsume], new RequestAbortedError());
          }
        });
        process.nextTick(consumeStart, stream[kConsume]);
      });
    }
    function consumeStart(consume2) {
      if (consume2.body === null) {
        return;
      }
      const { _readableState: state } = consume2.stream;
      for (const chunk of state.buffer) {
        consumePush(consume2, chunk);
      }
      if (state.endEmitted) {
        consumeEnd(this[kConsume]);
      } else {
        consume2.stream.on("end", function() {
          consumeEnd(this[kConsume]);
        });
      }
      consume2.stream.resume();
      while (consume2.stream.read() != null) {
      }
    }
    function consumeEnd(consume2) {
      const { type, body: body2, resolve, stream, length } = consume2;
      try {
        if (type === "text") {
          resolve(toUSVString(Buffer.concat(body2)));
        } else if (type === "json") {
          resolve(JSON.parse(Buffer.concat(body2)));
        } else if (type === "arrayBuffer") {
          const dst = new Uint8Array(length);
          let pos = 0;
          for (const buf of body2) {
            dst.set(buf, pos);
            pos += buf.byteLength;
          }
          resolve(dst);
        } else if (type === "blob") {
          if (!Blob3) {
            Blob3 = require("buffer").Blob;
          }
          resolve(new Blob3(body2, { type: stream[kContentType] }));
        }
        consumeFinish(consume2);
      } catch (err) {
        stream.destroy(err);
      }
    }
    function consumePush(consume2, chunk) {
      consume2.length += chunk.length;
      consume2.body.push(chunk);
    }
    function consumeFinish(consume2, err) {
      if (consume2.body === null) {
        return;
      }
      if (err) {
        consume2.reject(err);
      } else {
        consume2.resolve();
      }
      consume2.type = null;
      consume2.stream = null;
      consume2.resolve = null;
      consume2.reject = null;
      consume2.length = 0;
      consume2.body = null;
    }
  }
});

// node_modules/undici/lib/api/abort-signal.js
var require_abort_signal = __commonJS({
  "node_modules/undici/lib/api/abort-signal.js"(exports, module2) {
    init_shims();
    var { RequestAbortedError } = require_errors();
    var kListener = Symbol("kListener");
    var kSignal = Symbol("kSignal");
    function abort(self2) {
      if (self2.abort) {
        self2.abort();
      } else {
        self2.onError(new RequestAbortedError());
      }
    }
    function addSignal(self2, signal) {
      self2[kSignal] = null;
      self2[kListener] = null;
      if (!signal) {
        return;
      }
      if (signal.aborted) {
        abort(self2);
        return;
      }
      self2[kSignal] = signal;
      self2[kListener] = () => {
        abort(self2);
      };
      if ("addEventListener" in self2[kSignal]) {
        self2[kSignal].addEventListener("abort", self2[kListener]);
      } else {
        self2[kSignal].addListener("abort", self2[kListener]);
      }
    }
    function removeSignal(self2) {
      if (!self2[kSignal]) {
        return;
      }
      if ("removeEventListener" in self2[kSignal]) {
        self2[kSignal].removeEventListener("abort", self2[kListener]);
      } else {
        self2[kSignal].removeListener("abort", self2[kListener]);
      }
      self2[kSignal] = null;
      self2[kListener] = null;
    }
    module2.exports = {
      addSignal,
      removeSignal
    };
  }
});

// node_modules/undici/lib/api/api-request.js
var require_api_request = __commonJS({
  "node_modules/undici/lib/api/api-request.js"(exports, module2) {
    "use strict";
    init_shims();
    var Readable2 = require_readable();
    var {
      InvalidArgumentError,
      RequestAbortedError,
      ResponseStatusCodeError
    } = require_errors();
    var util = require_util();
    var { AsyncResource } = require("async_hooks");
    var { addSignal, removeSignal } = require_abort_signal();
    var RequestHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        const { signal, method, opaque, body: body2, onInfo, responseHeaders, throwOnError } = opts;
        try {
          if (typeof callback !== "function") {
            throw new InvalidArgumentError("invalid callback");
          }
          if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
            throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
          }
          if (method === "CONNECT") {
            throw new InvalidArgumentError("invalid method");
          }
          if (onInfo && typeof onInfo !== "function") {
            throw new InvalidArgumentError("invalid onInfo callback");
          }
          super("UNDICI_REQUEST");
        } catch (err) {
          if (util.isStream(body2)) {
            util.destroy(body2.on("error", util.nop), err);
          }
          throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.body = body2;
        this.trailers = {};
        this.context = null;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError;
        if (util.isStream(body2)) {
          body2.on("error", (err) => {
            this.onError(err);
          });
        }
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { callback, opaque, abort, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers2 = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers2 });
          }
          return;
        }
        const parsedHeaders = util.parseHeaders(rawHeaders);
        const contentType = parsedHeaders["content-type"];
        const body2 = new Readable2(resume, abort, contentType);
        this.callback = null;
        this.res = body2;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        if (callback !== null) {
          if (this.throwOnError && statusCode >= 400) {
            this.runInAsyncScope(
              getResolveErrorBodyCallback,
              null,
              { callback, body: body2, contentType, statusCode, statusMessage, headers }
            );
            return;
          }
          this.runInAsyncScope(callback, null, null, {
            statusCode,
            headers,
            trailers: this.trailers,
            opaque,
            body: body2,
            context
          });
        }
      }
      onData(chunk) {
        const { res } = this;
        return res.push(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        util.parseHeaders(trailers, this.trailers);
        res.push(null);
      }
      onError(err) {
        const { res, callback, body: body2, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
        if (res) {
          this.res = null;
          queueMicrotask(() => {
            util.destroy(res, err);
          });
        }
        if (body2) {
          this.body = null;
          util.destroy(body2, err);
        }
      }
    };
    async function getResolveErrorBodyCallback({ callback, body: body2, contentType, statusCode, statusMessage, headers }) {
      if (statusCode === 204 || !contentType) {
        body2.dump();
        process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers));
        return;
      }
      try {
        if (contentType.startsWith("application/json")) {
          const payload = await body2.json();
          process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers, payload));
          return;
        }
        if (contentType.startsWith("text/")) {
          const payload = await body2.text();
          process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers, payload));
          return;
        }
      } catch (err) {
      }
      body2.dump();
      process.nextTick(callback, new ResponseStatusCodeError(`Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ""}`, statusCode, headers));
    }
    function request(opts, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          request.call(this, opts, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        this.dispatch(opts, new RequestHandler(opts, callback));
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = request;
  }
});

// node_modules/undici/lib/api/api-stream.js
var require_api_stream = __commonJS({
  "node_modules/undici/lib/api/api-stream.js"(exports, module2) {
    "use strict";
    init_shims();
    var { finished } = require("stream");
    var {
      InvalidArgumentError,
      InvalidReturnValueError,
      RequestAbortedError
    } = require_errors();
    var util = require_util();
    var { AsyncResource } = require("async_hooks");
    var { addSignal, removeSignal } = require_abort_signal();
    var StreamHandler = class extends AsyncResource {
      constructor(opts, factory, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        const { signal, method, opaque, body: body2, onInfo, responseHeaders } = opts;
        try {
          if (typeof callback !== "function") {
            throw new InvalidArgumentError("invalid callback");
          }
          if (typeof factory !== "function") {
            throw new InvalidArgumentError("invalid factory");
          }
          if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
            throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
          }
          if (method === "CONNECT") {
            throw new InvalidArgumentError("invalid method");
          }
          if (onInfo && typeof onInfo !== "function") {
            throw new InvalidArgumentError("invalid onInfo callback");
          }
          super("UNDICI_STREAM");
        } catch (err) {
          if (util.isStream(body2)) {
            util.destroy(body2.on("error", util.nop), err);
          }
          throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.factory = factory;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.context = null;
        this.trailers = null;
        this.body = body2;
        this.onInfo = onInfo || null;
        if (util.isStream(body2)) {
          body2.on("error", (err) => {
            this.onError(err);
          });
        }
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume) {
        const { factory, opaque, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers2 = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers2 });
          }
          return;
        }
        this.factory = null;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        const res = this.runInAsyncScope(factory, null, {
          statusCode,
          headers,
          opaque,
          context
        });
        if (!res || typeof res.write !== "function" || typeof res.end !== "function" || typeof res.on !== "function") {
          throw new InvalidReturnValueError("expected Writable");
        }
        res.on("drain", resume);
        finished(res, { readable: false }, (err) => {
          const { callback, res: res2, opaque: opaque2, trailers, abort } = this;
          this.res = null;
          if (err || !res2.readable) {
            util.destroy(res2, err);
          }
          this.callback = null;
          this.runInAsyncScope(callback, null, err || null, { opaque: opaque2, trailers });
          if (err) {
            abort();
          }
        });
        this.res = res;
        const needDrain = res.writableNeedDrain !== void 0 ? res.writableNeedDrain : res._writableState && res._writableState.needDrain;
        return needDrain !== true;
      }
      onData(chunk) {
        const { res } = this;
        return res.write(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        this.trailers = util.parseHeaders(trailers);
        res.end();
      }
      onError(err) {
        const { res, callback, opaque, body: body2 } = this;
        removeSignal(this);
        this.factory = null;
        if (res) {
          this.res = null;
          util.destroy(res, err);
        } else if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
        if (body2) {
          this.body = null;
          util.destroy(body2, err);
        }
      }
    };
    function stream(opts, factory, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          stream.call(this, opts, factory, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        this.dispatch(opts, new StreamHandler(opts, factory, callback));
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = stream;
  }
});

// node_modules/undici/lib/api/api-pipeline.js
var require_api_pipeline = __commonJS({
  "node_modules/undici/lib/api/api-pipeline.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      Readable: Readable2,
      Duplex,
      PassThrough: PassThrough2
    } = require("stream");
    var {
      InvalidArgumentError,
      InvalidReturnValueError,
      RequestAbortedError
    } = require_errors();
    var util = require_util();
    var { AsyncResource } = require("async_hooks");
    var { addSignal, removeSignal } = require_abort_signal();
    var assert = require("assert");
    var kResume = Symbol("resume");
    var PipelineRequest = class extends Readable2 {
      constructor() {
        super({ autoDestroy: true });
        this[kResume] = null;
      }
      _read() {
        const { [kResume]: resume } = this;
        if (resume) {
          this[kResume] = null;
          resume();
        }
      }
      _destroy(err, callback) {
        this._read();
        callback(err);
      }
    };
    var PipelineResponse = class extends Readable2 {
      constructor(resume) {
        super({ autoDestroy: true });
        this[kResume] = resume;
      }
      _read() {
        this[kResume]();
      }
      _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) {
          err = new RequestAbortedError();
        }
        callback(err);
      }
    };
    var PipelineHandler = class extends AsyncResource {
      constructor(opts, handler) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (typeof handler !== "function") {
          throw new InvalidArgumentError("invalid handler");
        }
        const { signal, method, opaque, onInfo, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
          throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
        }
        if (method === "CONNECT") {
          throw new InvalidArgumentError("invalid method");
        }
        if (onInfo && typeof onInfo !== "function") {
          throw new InvalidArgumentError("invalid onInfo callback");
        }
        super("UNDICI_PIPELINE");
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new PipelineRequest().on("error", util.nop);
        this.ret = new Duplex({
          readableObjectMode: opts.objectMode,
          autoDestroy: true,
          read: () => {
            const { body: body2 } = this;
            if (body2 && body2.resume) {
              body2.resume();
            }
          },
          write: (chunk, encoding, callback) => {
            const { req } = this;
            if (req.push(chunk, encoding) || req._readableState.destroyed) {
              callback();
            } else {
              req[kResume] = callback;
            }
          },
          destroy: (err, callback) => {
            const { body: body2, req, res, ret, abort } = this;
            if (!err && !ret._readableState.endEmitted) {
              err = new RequestAbortedError();
            }
            if (abort && err) {
              abort();
            }
            util.destroy(body2, err);
            util.destroy(req, err);
            util.destroy(res, err);
            removeSignal(this);
            callback(err);
          }
        }).on("prefinish", () => {
          const { req } = this;
          req.push(null);
        });
        this.res = null;
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        const { ret, res } = this;
        assert(!res, "pipeline cannot be retried");
        if (ret.destroyed) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume) {
        const { opaque, handler, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers });
          }
          return;
        }
        this.res = new PipelineResponse(resume);
        let body2;
        try {
          this.handler = null;
          const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
          body2 = this.runInAsyncScope(handler, null, {
            statusCode,
            headers,
            opaque,
            body: this.res,
            context
          });
        } catch (err) {
          this.res.on("error", util.nop);
          throw err;
        }
        if (!body2 || typeof body2.on !== "function") {
          throw new InvalidReturnValueError("expected Readable");
        }
        body2.on("data", (chunk) => {
          const { ret, body: body3 } = this;
          if (!ret.push(chunk) && body3.pause) {
            body3.pause();
          }
        }).on("error", (err) => {
          const { ret } = this;
          util.destroy(ret, err);
        }).on("end", () => {
          const { ret } = this;
          ret.push(null);
        }).on("close", () => {
          const { ret } = this;
          if (!ret._readableState.ended) {
            util.destroy(ret, new RequestAbortedError());
          }
        });
        this.body = body2;
      }
      onData(chunk) {
        const { res } = this;
        return res.push(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        res.push(null);
      }
      onError(err) {
        const { ret } = this;
        this.handler = null;
        util.destroy(ret, err);
      }
    };
    function pipeline2(opts, handler) {
      try {
        const pipelineHandler = new PipelineHandler(opts, handler);
        this.dispatch({ ...opts, body: pipelineHandler.req }, pipelineHandler);
        return pipelineHandler.ret;
      } catch (err) {
        return new PassThrough2().destroy(err);
      }
    }
    module2.exports = pipeline2;
  }
});

// node_modules/undici/lib/api/api-upgrade.js
var require_api_upgrade = __commonJS({
  "node_modules/undici/lib/api/api-upgrade.js"(exports, module2) {
    "use strict";
    init_shims();
    var { InvalidArgumentError, RequestAbortedError, SocketError } = require_errors();
    var { AsyncResource } = require("async_hooks");
    var util = require_util();
    var { addSignal, removeSignal } = require_abort_signal();
    var assert = require("assert");
    var UpgradeHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
          throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
        }
        super("UNDICI_UPGRADE");
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = null;
      }
      onHeaders() {
        throw new SocketError("bad upgrade", null);
      }
      onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        assert.strictEqual(statusCode, 101);
        removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
          headers,
          socket,
          opaque,
          context
        });
      }
      onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
      }
    };
    function upgrade(opts, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          upgrade.call(this, opts, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        const upgradeHandler = new UpgradeHandler(opts, callback);
        this.dispatch({
          ...opts,
          method: opts.method || "GET",
          upgrade: opts.protocol || "Websocket"
        }, upgradeHandler);
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = upgrade;
  }
});

// node_modules/undici/lib/api/api-connect.js
var require_api_connect = __commonJS({
  "node_modules/undici/lib/api/api-connect.js"(exports, module2) {
    "use strict";
    init_shims();
    var { InvalidArgumentError, RequestAbortedError, SocketError } = require_errors();
    var { AsyncResource } = require("async_hooks");
    var util = require_util();
    var { addSignal, removeSignal } = require_abort_signal();
    var ConnectHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (typeof callback !== "function") {
          throw new InvalidArgumentError("invalid callback");
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== "function" && typeof signal.addEventListener !== "function") {
          throw new InvalidArgumentError("signal must be an EventEmitter or EventTarget");
        }
        super("UNDICI_CONNECT");
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        addSignal(this, signal);
      }
      onConnect(abort, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort;
        this.context = context;
      }
      onHeaders() {
        throw new SocketError("bad connect", null);
      }
      onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === "raw" ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
          statusCode,
          headers,
          socket,
          opaque,
          context
        });
      }
      onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
      }
    };
    function connect(opts, callback) {
      if (callback === void 0) {
        return new Promise((resolve, reject) => {
          connect.call(this, opts, (err, data) => {
            return err ? reject(err) : resolve(data);
          });
        });
      }
      try {
        const connectHandler = new ConnectHandler(opts, callback);
        this.dispatch({ ...opts, method: "CONNECT" }, connectHandler);
      } catch (err) {
        if (typeof callback !== "function") {
          throw err;
        }
        const opaque = opts && opts.opaque;
        queueMicrotask(() => callback(err, { opaque }));
      }
    }
    module2.exports = connect;
  }
});

// node_modules/undici/lib/api/index.js
var require_api = __commonJS({
  "node_modules/undici/lib/api/index.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports.request = require_api_request();
    module2.exports.stream = require_api_stream();
    module2.exports.pipeline = require_api_pipeline();
    module2.exports.upgrade = require_api_upgrade();
    module2.exports.connect = require_api_connect();
  }
});

// node_modules/undici/lib/mock/mock-errors.js
var require_mock_errors = __commonJS({
  "node_modules/undici/lib/mock/mock-errors.js"(exports, module2) {
    "use strict";
    init_shims();
    var { UndiciError } = require_errors();
    var MockNotMatchedError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, MockNotMatchedError);
        this.name = "MockNotMatchedError";
        this.message = message || "The request does not match any registered mock dispatches";
        this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED";
      }
    };
    module2.exports = {
      MockNotMatchedError
    };
  }
});

// node_modules/undici/lib/mock/mock-symbols.js
var require_mock_symbols = __commonJS({
  "node_modules/undici/lib/mock/mock-symbols.js"(exports, module2) {
    "use strict";
    init_shims();
    module2.exports = {
      kAgent: Symbol("agent"),
      kOptions: Symbol("options"),
      kFactory: Symbol("factory"),
      kDispatches: Symbol("dispatches"),
      kDispatchKey: Symbol("dispatch key"),
      kDefaultHeaders: Symbol("default headers"),
      kDefaultTrailers: Symbol("default trailers"),
      kContentLength: Symbol("content length"),
      kMockAgent: Symbol("mock agent"),
      kMockAgentSet: Symbol("mock agent set"),
      kMockAgentGet: Symbol("mock agent get"),
      kMockDispatch: Symbol("mock dispatch"),
      kClose: Symbol("close"),
      kOriginalClose: Symbol("original agent close"),
      kOrigin: Symbol("origin"),
      kIsMockActive: Symbol("is mock active"),
      kNetConnect: Symbol("net connect"),
      kGetNetConnect: Symbol("get net connect"),
      kConnected: Symbol("connected")
    };
  }
});

// node_modules/undici/lib/mock/mock-utils.js
var require_mock_utils = __commonJS({
  "node_modules/undici/lib/mock/mock-utils.js"(exports, module2) {
    "use strict";
    init_shims();
    var { MockNotMatchedError } = require_mock_errors();
    var {
      kDispatches,
      kMockAgent,
      kOriginalDispatch,
      kOrigin,
      kGetNetConnect
    } = require_mock_symbols();
    var { buildURL, nop } = require_util();
    function matchValue(match, value) {
      if (typeof match === "string") {
        return match === value;
      }
      if (match instanceof RegExp) {
        return match.test(value);
      }
      if (typeof match === "function") {
        return match(value) === true;
      }
      return false;
    }
    function lowerCaseEntries(headers) {
      return Object.fromEntries(
        Object.entries(headers).map(([headerName, headerValue]) => {
          return [headerName.toLocaleLowerCase(), headerValue];
        })
      );
    }
    function getHeaderByName(headers, key2) {
      if (Array.isArray(headers)) {
        for (let i2 = 0; i2 < headers.length; i2 += 2) {
          if (headers[i2].toLocaleLowerCase() === key2.toLocaleLowerCase()) {
            return headers[i2 + 1];
          }
        }
        return void 0;
      } else if (typeof headers.get === "function") {
        return headers.get(key2);
      } else {
        return lowerCaseEntries(headers)[key2.toLocaleLowerCase()];
      }
    }
    function buildHeadersFromArray(headers) {
      const clone2 = headers.slice();
      const entries = [];
      for (let index9 = 0; index9 < clone2.length; index9 += 2) {
        entries.push([clone2[index9], clone2[index9 + 1]]);
      }
      return Object.fromEntries(entries);
    }
    function matchHeaders(mockDispatch2, headers) {
      if (typeof mockDispatch2.headers === "function") {
        if (Array.isArray(headers)) {
          headers = buildHeadersFromArray(headers);
        }
        return mockDispatch2.headers(headers ? lowerCaseEntries(headers) : {});
      }
      if (typeof mockDispatch2.headers === "undefined") {
        return true;
      }
      if (typeof headers !== "object" || typeof mockDispatch2.headers !== "object") {
        return false;
      }
      for (const [matchHeaderName, matchHeaderValue] of Object.entries(mockDispatch2.headers)) {
        const headerValue = getHeaderByName(headers, matchHeaderName);
        if (!matchValue(matchHeaderValue, headerValue)) {
          return false;
        }
      }
      return true;
    }
    function safeUrl(path) {
      if (typeof path !== "string") {
        return path;
      }
      const pathSegments = path.split("?");
      if (pathSegments.length !== 2) {
        return path;
      }
      const qp = new URLSearchParams(pathSegments.pop());
      qp.sort();
      return [...pathSegments, qp.toString()].join("?");
    }
    function matchKey(mockDispatch2, { path, method, body: body2, headers }) {
      const pathMatch = matchValue(mockDispatch2.path, path);
      const methodMatch = matchValue(mockDispatch2.method, method);
      const bodyMatch = typeof mockDispatch2.body !== "undefined" ? matchValue(mockDispatch2.body, body2) : true;
      const headersMatch = matchHeaders(mockDispatch2, headers);
      return pathMatch && methodMatch && bodyMatch && headersMatch;
    }
    function getResponseData(data) {
      if (Buffer.isBuffer(data)) {
        return data;
      } else if (typeof data === "object") {
        return JSON.stringify(data);
      } else {
        return data.toString();
      }
    }
    function getMockDispatch(mockDispatches, key2) {
      const basePath = key2.query ? buildURL(key2.path, key2.query) : key2.path;
      const resolvedPath = typeof basePath === "string" ? safeUrl(basePath) : basePath;
      let matchedMockDispatches = mockDispatches.filter(({ consumed }) => !consumed).filter(({ path }) => matchValue(safeUrl(path), resolvedPath));
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for path '${resolvedPath}'`);
      }
      matchedMockDispatches = matchedMockDispatches.filter(({ method }) => matchValue(method, key2.method));
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for method '${key2.method}'`);
      }
      matchedMockDispatches = matchedMockDispatches.filter(({ body: body2 }) => typeof body2 !== "undefined" ? matchValue(body2, key2.body) : true);
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for body '${key2.body}'`);
      }
      matchedMockDispatches = matchedMockDispatches.filter((mockDispatch2) => matchHeaders(mockDispatch2, key2.headers));
      if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for headers '${typeof key2.headers === "object" ? JSON.stringify(key2.headers) : key2.headers}'`);
      }
      return matchedMockDispatches[0];
    }
    function addMockDispatch(mockDispatches, key2, data) {
      const baseData = { timesInvoked: 0, times: 1, persist: false, consumed: false };
      const replyData = typeof data === "function" ? { callback: data } : { ...data };
      const newMockDispatch = { ...baseData, ...key2, pending: true, data: { error: null, ...replyData } };
      mockDispatches.push(newMockDispatch);
      return newMockDispatch;
    }
    function deleteMockDispatch(mockDispatches, key2) {
      const index9 = mockDispatches.findIndex((dispatch) => {
        if (!dispatch.consumed) {
          return false;
        }
        return matchKey(dispatch, key2);
      });
      if (index9 !== -1) {
        mockDispatches.splice(index9, 1);
      }
    }
    function buildKey(opts) {
      const { path, method, body: body2, headers, query } = opts;
      return {
        path,
        method,
        body: body2,
        headers,
        query
      };
    }
    function generateKeyValues(data) {
      return Object.entries(data).reduce((keyValuePairs, [key2, value]) => [...keyValuePairs, key2, value], []);
    }
    function getStatusText(statusCode) {
      switch (statusCode) {
        case 100:
          return "Continue";
        case 101:
          return "Switching Protocols";
        case 102:
          return "Processing";
        case 103:
          return "Early Hints";
        case 200:
          return "OK";
        case 201:
          return "Created";
        case 202:
          return "Accepted";
        case 203:
          return "Non-Authoritative Information";
        case 204:
          return "No Content";
        case 205:
          return "Reset Content";
        case 206:
          return "Partial Content";
        case 207:
          return "Multi-Status";
        case 208:
          return "Already Reported";
        case 226:
          return "IM Used";
        case 300:
          return "Multiple Choice";
        case 301:
          return "Moved Permanently";
        case 302:
          return "Found";
        case 303:
          return "See Other";
        case 304:
          return "Not Modified";
        case 305:
          return "Use Proxy";
        case 306:
          return "unused";
        case 307:
          return "Temporary Redirect";
        case 308:
          return "Permanent Redirect";
        case 400:
          return "Bad Request";
        case 401:
          return "Unauthorized";
        case 402:
          return "Payment Required";
        case 403:
          return "Forbidden";
        case 404:
          return "Not Found";
        case 405:
          return "Method Not Allowed";
        case 406:
          return "Not Acceptable";
        case 407:
          return "Proxy Authentication Required";
        case 408:
          return "Request Timeout";
        case 409:
          return "Conflict";
        case 410:
          return "Gone";
        case 411:
          return "Length Required";
        case 412:
          return "Precondition Failed";
        case 413:
          return "Payload Too Large";
        case 414:
          return "URI Too Large";
        case 415:
          return "Unsupported Media Type";
        case 416:
          return "Range Not Satisfiable";
        case 417:
          return "Expectation Failed";
        case 418:
          return "I'm a teapot";
        case 421:
          return "Misdirected Request";
        case 422:
          return "Unprocessable Entity";
        case 423:
          return "Locked";
        case 424:
          return "Failed Dependency";
        case 425:
          return "Too Early";
        case 426:
          return "Upgrade Required";
        case 428:
          return "Precondition Required";
        case 429:
          return "Too Many Requests";
        case 431:
          return "Request Header Fields Too Large";
        case 451:
          return "Unavailable For Legal Reasons";
        case 500:
          return "Internal Server Error";
        case 501:
          return "Not Implemented";
        case 502:
          return "Bad Gateway";
        case 503:
          return "Service Unavailable";
        case 504:
          return "Gateway Timeout";
        case 505:
          return "HTTP Version Not Supported";
        case 506:
          return "Variant Also Negotiates";
        case 507:
          return "Insufficient Storage";
        case 508:
          return "Loop Detected";
        case 510:
          return "Not Extended";
        case 511:
          return "Network Authentication Required";
        default:
          return "unknown";
      }
    }
    async function getResponse(body2) {
      const buffers = [];
      for await (const data of body2) {
        buffers.push(data);
      }
      return Buffer.concat(buffers).toString("utf8");
    }
    function mockDispatch(opts, handler) {
      const key2 = buildKey(opts);
      const mockDispatch2 = getMockDispatch(this[kDispatches], key2);
      mockDispatch2.timesInvoked++;
      if (mockDispatch2.data.callback) {
        mockDispatch2.data = { ...mockDispatch2.data, ...mockDispatch2.data.callback(opts) };
      }
      const { data: { statusCode, data, headers, trailers, error: error2 }, delay, persist } = mockDispatch2;
      const { timesInvoked, times } = mockDispatch2;
      mockDispatch2.consumed = !persist && timesInvoked >= times;
      mockDispatch2.pending = timesInvoked < times;
      if (error2 !== null) {
        deleteMockDispatch(this[kDispatches], key2);
        handler.onError(error2);
        return true;
      }
      if (typeof delay === "number" && delay > 0) {
        setTimeout(() => {
          handleReply(this[kDispatches]);
        }, delay);
      } else {
        handleReply(this[kDispatches]);
      }
      function handleReply(mockDispatches) {
        const optsHeaders = Array.isArray(opts.headers) ? buildHeadersFromArray(opts.headers) : opts.headers;
        const responseData = getResponseData(
          typeof data === "function" ? data({ ...opts, headers: optsHeaders }) : data
        );
        const responseHeaders = generateKeyValues(headers);
        const responseTrailers = generateKeyValues(trailers);
        handler.abort = nop;
        handler.onHeaders(statusCode, responseHeaders, resume, getStatusText(statusCode));
        handler.onData(Buffer.from(responseData));
        handler.onComplete(responseTrailers);
        deleteMockDispatch(mockDispatches, key2);
      }
      function resume() {
      }
      return true;
    }
    function buildMockDispatch() {
      const agent = this[kMockAgent];
      const origin = this[kOrigin];
      const originalDispatch = this[kOriginalDispatch];
      return function dispatch(opts, handler) {
        if (agent.isMockActive) {
          try {
            mockDispatch.call(this, opts, handler);
          } catch (error2) {
            if (error2 instanceof MockNotMatchedError) {
              const netConnect = agent[kGetNetConnect]();
              if (netConnect === false) {
                throw new MockNotMatchedError(`${error2.message}: subsequent request to origin ${origin} was not allowed (net.connect disabled)`);
              }
              if (checkNetConnect(netConnect, origin)) {
                originalDispatch.call(this, opts, handler);
              } else {
                throw new MockNotMatchedError(`${error2.message}: subsequent request to origin ${origin} was not allowed (net.connect is not enabled for this origin)`);
              }
            } else {
              throw error2;
            }
          }
        } else {
          originalDispatch.call(this, opts, handler);
        }
      };
    }
    function checkNetConnect(netConnect, origin) {
      const url = new URL(origin);
      if (netConnect === true) {
        return true;
      } else if (Array.isArray(netConnect) && netConnect.some((matcher) => matchValue(matcher, url.host))) {
        return true;
      }
      return false;
    }
    function buildMockOptions(opts) {
      if (opts) {
        const { agent, ...mockOptions } = opts;
        return mockOptions;
      }
    }
    module2.exports = {
      getResponseData,
      getMockDispatch,
      addMockDispatch,
      deleteMockDispatch,
      buildKey,
      generateKeyValues,
      matchValue,
      getResponse,
      getStatusText,
      mockDispatch,
      buildMockDispatch,
      checkNetConnect,
      buildMockOptions,
      getHeaderByName
    };
  }
});

// node_modules/undici/lib/mock/mock-interceptor.js
var require_mock_interceptor = __commonJS({
  "node_modules/undici/lib/mock/mock-interceptor.js"(exports, module2) {
    "use strict";
    init_shims();
    var { getResponseData, buildKey, addMockDispatch } = require_mock_utils();
    var {
      kDispatches,
      kDispatchKey,
      kDefaultHeaders,
      kDefaultTrailers,
      kContentLength,
      kMockDispatch
    } = require_mock_symbols();
    var { InvalidArgumentError } = require_errors();
    var { buildURL } = require_util();
    var MockScope = class {
      constructor(mockDispatch) {
        this[kMockDispatch] = mockDispatch;
      }
      delay(waitInMs) {
        if (typeof waitInMs !== "number" || !Number.isInteger(waitInMs) || waitInMs <= 0) {
          throw new InvalidArgumentError("waitInMs must be a valid integer > 0");
        }
        this[kMockDispatch].delay = waitInMs;
        return this;
      }
      persist() {
        this[kMockDispatch].persist = true;
        return this;
      }
      times(repeatTimes) {
        if (typeof repeatTimes !== "number" || !Number.isInteger(repeatTimes) || repeatTimes <= 0) {
          throw new InvalidArgumentError("repeatTimes must be a valid integer > 0");
        }
        this[kMockDispatch].times = repeatTimes;
        return this;
      }
    };
    var MockInterceptor = class {
      constructor(opts, mockDispatches) {
        if (typeof opts !== "object") {
          throw new InvalidArgumentError("opts must be an object");
        }
        if (typeof opts.path === "undefined") {
          throw new InvalidArgumentError("opts.path must be defined");
        }
        if (typeof opts.method === "undefined") {
          opts.method = "GET";
        }
        if (typeof opts.path === "string") {
          if (opts.query) {
            opts.path = buildURL(opts.path, opts.query);
          } else {
            const parsedURL = new URL(opts.path, "data://");
            opts.path = parsedURL.pathname + parsedURL.search;
          }
        }
        if (typeof opts.method === "string") {
          opts.method = opts.method.toUpperCase();
        }
        this[kDispatchKey] = buildKey(opts);
        this[kDispatches] = mockDispatches;
        this[kDefaultHeaders] = {};
        this[kDefaultTrailers] = {};
        this[kContentLength] = false;
      }
      createMockScopeDispatchData(statusCode, data, responseOptions = {}) {
        const responseData = getResponseData(data);
        const contentLength = this[kContentLength] ? { "content-length": responseData.length } : {};
        const headers = { ...this[kDefaultHeaders], ...contentLength, ...responseOptions.headers };
        const trailers = { ...this[kDefaultTrailers], ...responseOptions.trailers };
        return { statusCode, data, headers, trailers };
      }
      validateReplyParameters(statusCode, data, responseOptions) {
        if (typeof statusCode === "undefined") {
          throw new InvalidArgumentError("statusCode must be defined");
        }
        if (typeof data === "undefined") {
          throw new InvalidArgumentError("data must be defined");
        }
        if (typeof responseOptions !== "object") {
          throw new InvalidArgumentError("responseOptions must be an object");
        }
      }
      reply(replyData) {
        if (typeof replyData === "function") {
          const wrappedDefaultsCallback = (opts) => {
            const resolvedData = replyData(opts);
            if (typeof resolvedData !== "object") {
              throw new InvalidArgumentError("reply options callback must return an object");
            }
            const { statusCode: statusCode2, data: data2 = "", responseOptions: responseOptions2 = {} } = resolvedData;
            this.validateReplyParameters(statusCode2, data2, responseOptions2);
            return {
              ...this.createMockScopeDispatchData(statusCode2, data2, responseOptions2)
            };
          };
          const newMockDispatch2 = addMockDispatch(this[kDispatches], this[kDispatchKey], wrappedDefaultsCallback);
          return new MockScope(newMockDispatch2);
        }
        const [statusCode, data = "", responseOptions = {}] = [...arguments];
        this.validateReplyParameters(statusCode, data, responseOptions);
        const dispatchData = this.createMockScopeDispatchData(statusCode, data, responseOptions);
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], dispatchData);
        return new MockScope(newMockDispatch);
      }
      replyWithError(error2) {
        if (typeof error2 === "undefined") {
          throw new InvalidArgumentError("error must be defined");
        }
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], { error: error2 });
        return new MockScope(newMockDispatch);
      }
      defaultReplyHeaders(headers) {
        if (typeof headers === "undefined") {
          throw new InvalidArgumentError("headers must be defined");
        }
        this[kDefaultHeaders] = headers;
        return this;
      }
      defaultReplyTrailers(trailers) {
        if (typeof trailers === "undefined") {
          throw new InvalidArgumentError("trailers must be defined");
        }
        this[kDefaultTrailers] = trailers;
        return this;
      }
      replyContentLength() {
        this[kContentLength] = true;
        return this;
      }
    };
    module2.exports.MockInterceptor = MockInterceptor;
    module2.exports.MockScope = MockScope;
  }
});

// node_modules/undici/lib/mock/mock-client.js
var require_mock_client = __commonJS({
  "node_modules/undici/lib/mock/mock-client.js"(exports, module2) {
    "use strict";
    init_shims();
    var { promisify: promisify2 } = require("util");
    var Client = require_client();
    var { buildMockDispatch } = require_mock_utils();
    var {
      kDispatches,
      kMockAgent,
      kClose,
      kOriginalClose,
      kOrigin,
      kOriginalDispatch,
      kConnected
    } = require_mock_symbols();
    var { MockInterceptor } = require_mock_interceptor();
    var Symbols = require_symbols();
    var { InvalidArgumentError } = require_errors();
    var MockClient = class extends Client {
      constructor(origin, opts) {
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== "function") {
          throw new InvalidArgumentError("Argument opts.agent must implement Agent");
        }
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
      }
      get [Symbols.kConnected]() {
        return this[kConnected];
      }
      intercept(opts) {
        return new MockInterceptor(opts, this[kDispatches]);
      }
      async [kClose]() {
        await promisify2(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
      }
    };
    module2.exports = MockClient;
  }
});

// node_modules/undici/lib/mock/mock-pool.js
var require_mock_pool = __commonJS({
  "node_modules/undici/lib/mock/mock-pool.js"(exports, module2) {
    "use strict";
    init_shims();
    var { promisify: promisify2 } = require("util");
    var Pool = require_pool();
    var { buildMockDispatch } = require_mock_utils();
    var {
      kDispatches,
      kMockAgent,
      kClose,
      kOriginalClose,
      kOrigin,
      kOriginalDispatch,
      kConnected
    } = require_mock_symbols();
    var { MockInterceptor } = require_mock_interceptor();
    var Symbols = require_symbols();
    var { InvalidArgumentError } = require_errors();
    var MockPool = class extends Pool {
      constructor(origin, opts) {
        super(origin, opts);
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== "function") {
          throw new InvalidArgumentError("Argument opts.agent must implement Agent");
        }
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
      }
      get [Symbols.kConnected]() {
        return this[kConnected];
      }
      intercept(opts) {
        return new MockInterceptor(opts, this[kDispatches]);
      }
      async [kClose]() {
        await promisify2(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
      }
    };
    module2.exports = MockPool;
  }
});

// node_modules/undici/lib/mock/pluralizer.js
var require_pluralizer = __commonJS({
  "node_modules/undici/lib/mock/pluralizer.js"(exports, module2) {
    "use strict";
    init_shims();
    var singulars = {
      pronoun: "it",
      is: "is",
      was: "was",
      this: "this"
    };
    var plurals = {
      pronoun: "they",
      is: "are",
      was: "were",
      this: "these"
    };
    module2.exports = class Pluralizer {
      constructor(singular, plural) {
        this.singular = singular;
        this.plural = plural;
      }
      pluralize(count) {
        const one = count === 1;
        const keys = one ? singulars : plurals;
        const noun = one ? this.singular : this.plural;
        return { ...keys, count, noun };
      }
    };
  }
});

// node_modules/undici/lib/mock/pending-interceptors-formatter.js
var require_pending_interceptors_formatter = __commonJS({
  "node_modules/undici/lib/mock/pending-interceptors-formatter.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Transform } = require("stream");
    var { Console } = require("console");
    module2.exports = class PendingInterceptorsFormatter {
      constructor({ disableColors } = {}) {
        this.transform = new Transform({
          transform(chunk, _enc, cb) {
            cb(null, chunk);
          }
        });
        this.logger = new Console({
          stdout: this.transform,
          inspectOptions: {
            colors: !disableColors && !process.env.CI
          }
        });
      }
      format(pendingInterceptors) {
        const withPrettyHeaders = pendingInterceptors.map(
          ({ method, path, data: { statusCode }, persist, times, timesInvoked, origin }) => ({
            Method: method,
            Origin: origin,
            Path: path,
            "Status code": statusCode,
            Persistent: persist ? "\u2705" : "\u274C",
            Invocations: timesInvoked,
            Remaining: persist ? Infinity : times - timesInvoked
          })
        );
        this.logger.table(withPrettyHeaders);
        return this.transform.read().toString();
      }
    };
  }
});

// node_modules/undici/lib/mock/mock-agent.js
var require_mock_agent = __commonJS({
  "node_modules/undici/lib/mock/mock-agent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kClients } = require_symbols();
    var Agent = require_agent();
    var {
      kAgent,
      kMockAgentSet,
      kMockAgentGet,
      kDispatches,
      kIsMockActive,
      kNetConnect,
      kGetNetConnect,
      kOptions,
      kFactory
    } = require_mock_symbols();
    var MockClient = require_mock_client();
    var MockPool = require_mock_pool();
    var { matchValue, buildMockOptions } = require_mock_utils();
    var { InvalidArgumentError, UndiciError } = require_errors();
    var Dispatcher = require_dispatcher();
    var Pluralizer = require_pluralizer();
    var PendingInterceptorsFormatter = require_pending_interceptors_formatter();
    var FakeWeakRef = class {
      constructor(value) {
        this.value = value;
      }
      deref() {
        return this.value;
      }
    };
    var MockAgent = class extends Dispatcher {
      constructor(opts) {
        super(opts);
        this[kNetConnect] = true;
        this[kIsMockActive] = true;
        if (opts && opts.agent && typeof opts.agent.dispatch !== "function") {
          throw new InvalidArgumentError("Argument opts.agent must implement Agent");
        }
        const agent = opts && opts.agent ? opts.agent : new Agent(opts);
        this[kAgent] = agent;
        this[kClients] = agent[kClients];
        this[kOptions] = buildMockOptions(opts);
      }
      get(origin) {
        let dispatcher = this[kMockAgentGet](origin);
        if (!dispatcher) {
          dispatcher = this[kFactory](origin);
          this[kMockAgentSet](origin, dispatcher);
        }
        return dispatcher;
      }
      dispatch(opts, handler) {
        this.get(opts.origin);
        return this[kAgent].dispatch(opts, handler);
      }
      async close() {
        await this[kAgent].close();
        this[kClients].clear();
      }
      deactivate() {
        this[kIsMockActive] = false;
      }
      activate() {
        this[kIsMockActive] = true;
      }
      enableNetConnect(matcher) {
        if (typeof matcher === "string" || typeof matcher === "function" || matcher instanceof RegExp) {
          if (Array.isArray(this[kNetConnect])) {
            this[kNetConnect].push(matcher);
          } else {
            this[kNetConnect] = [matcher];
          }
        } else if (typeof matcher === "undefined") {
          this[kNetConnect] = true;
        } else {
          throw new InvalidArgumentError("Unsupported matcher. Must be one of String|Function|RegExp.");
        }
      }
      disableNetConnect() {
        this[kNetConnect] = false;
      }
      get isMockActive() {
        return this[kIsMockActive];
      }
      [kMockAgentSet](origin, dispatcher) {
        this[kClients].set(origin, new FakeWeakRef(dispatcher));
      }
      [kFactory](origin) {
        const mockOptions = Object.assign({ agent: this }, this[kOptions]);
        return this[kOptions] && this[kOptions].connections === 1 ? new MockClient(origin, mockOptions) : new MockPool(origin, mockOptions);
      }
      [kMockAgentGet](origin) {
        const ref = this[kClients].get(origin);
        if (ref) {
          return ref.deref();
        }
        if (typeof origin !== "string") {
          const dispatcher = this[kFactory]("http://localhost:9999");
          this[kMockAgentSet](origin, dispatcher);
          return dispatcher;
        }
        for (const [keyMatcher, nonExplicitRef] of Array.from(this[kClients])) {
          const nonExplicitDispatcher = nonExplicitRef.deref();
          if (nonExplicitDispatcher && typeof keyMatcher !== "string" && matchValue(keyMatcher, origin)) {
            const dispatcher = this[kFactory](origin);
            this[kMockAgentSet](origin, dispatcher);
            dispatcher[kDispatches] = nonExplicitDispatcher[kDispatches];
            return dispatcher;
          }
        }
      }
      [kGetNetConnect]() {
        return this[kNetConnect];
      }
      pendingInterceptors() {
        const mockAgentClients = this[kClients];
        return Array.from(mockAgentClients.entries()).flatMap(([origin, scope]) => scope.deref()[kDispatches].map((dispatch) => ({ ...dispatch, origin }))).filter(({ pending }) => pending);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter = new PendingInterceptorsFormatter() } = {}) {
        const pending = this.pendingInterceptors();
        if (pending.length === 0) {
          return;
        }
        const pluralizer = new Pluralizer("interceptor", "interceptors").pluralize(pending.length);
        throw new UndiciError(`
${pluralizer.count} ${pluralizer.noun} ${pluralizer.is} pending:

${pendingInterceptorsFormatter.format(pending)}
`.trim());
      }
    };
    module2.exports = MockAgent;
  }
});

// node_modules/undici/lib/proxy-agent.js
var require_proxy_agent = __commonJS({
  "node_modules/undici/lib/proxy-agent.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kClose, kDestroy } = require_symbols();
    var Client = require_agent();
    var Agent = require_agent();
    var DispatcherBase = require_dispatcher_base();
    var { InvalidArgumentError, RequestAbortedError } = require_errors();
    var buildConnector = require_connect();
    var kAgent = Symbol("proxy agent");
    var kClient = Symbol("proxy client");
    var kProxyHeaders = Symbol("proxy headers");
    var kRequestTls = Symbol("request tls settings");
    var kProxyTls = Symbol("proxy tls settings");
    var kConnectEndpoint = Symbol("connect endpoint function");
    function defaultProtocolPort(protocol2) {
      return protocol2 === "https:" ? 443 : 80;
    }
    var ProxyAgent = class extends DispatcherBase {
      constructor(opts) {
        super(opts);
        if (typeof opts === "string") {
          opts = { uri: opts };
        }
        if (!opts || !opts.uri) {
          throw new InvalidArgumentError("Proxy opts.uri is mandatory");
        }
        this[kRequestTls] = opts.requestTls;
        this[kProxyTls] = opts.proxyTls;
        this[kProxyHeaders] = {};
        if (opts.auth) {
          this[kProxyHeaders]["proxy-authorization"] = `Basic ${opts.auth}`;
        }
        const { origin, port } = new URL(opts.uri);
        const connect = buildConnector({ ...opts.proxyTls });
        this[kConnectEndpoint] = buildConnector({ ...opts.requestTls });
        this[kClient] = new Client({ origin: opts.origin, connect });
        this[kAgent] = new Agent({
          ...opts,
          connect: async (opts2, callback) => {
            let requestedHost = opts2.host;
            if (!opts2.port) {
              requestedHost += `:${defaultProtocolPort(opts2.protocol)}`;
            }
            try {
              const { socket, statusCode } = await this[kClient].connect({
                origin,
                port,
                path: requestedHost,
                signal: opts2.signal,
                headers: {
                  ...this[kProxyHeaders],
                  host: opts2.host
                }
              });
              if (statusCode !== 200) {
                socket.on("error", () => {
                }).destroy();
                callback(new RequestAbortedError("Proxy response !== 200 when HTTP Tunneling"));
              }
              if (opts2.protocol !== "https:") {
                callback(null, socket);
                return;
              }
              let servername;
              if (this[kRequestTls]) {
                servername = this[kRequestTls].servername;
              } else {
                servername = opts2.servername;
              }
              this[kConnectEndpoint]({ ...opts2, servername, httpSocket: socket }, callback);
            } catch (err) {
              callback(err);
            }
          }
        });
      }
      dispatch(opts, handler) {
        const { host } = new URL(opts.origin);
        const headers = buildHeaders(opts.headers);
        throwIfProxyAuthIsSent(headers);
        return this[kAgent].dispatch(
          {
            ...opts,
            headers: {
              ...headers,
              host
            }
          },
          handler
        );
      }
      async [kClose]() {
        await this[kAgent].close();
        await this[kClient].close();
      }
      async [kDestroy]() {
        await this[kAgent].destroy();
        await this[kClient].destroy();
      }
    };
    function buildHeaders(headers) {
      if (Array.isArray(headers)) {
        const headersPair = {};
        for (let i2 = 0; i2 < headers.length; i2 += 2) {
          headersPair[headers[i2]] = headers[i2 + 1];
        }
        return headersPair;
      }
      return headers;
    }
    function throwIfProxyAuthIsSent(headers) {
      const existProxyAuth = headers && Object.keys(headers).find((key2) => key2.toLowerCase() === "proxy-authorization");
      if (existProxyAuth) {
        throw new InvalidArgumentError("Proxy-Authorization should be sent in ProxyAgent constructor");
      }
    }
    module2.exports = ProxyAgent;
  }
});

// node_modules/undici/lib/global.js
var require_global = __commonJS({
  "node_modules/undici/lib/global.js"(exports, module2) {
    "use strict";
    init_shims();
    var globalDispatcher = Symbol.for("undici.globalDispatcher.1");
    var { InvalidArgumentError } = require_errors();
    var Agent = require_agent();
    if (getGlobalDispatcher() === void 0) {
      setGlobalDispatcher(new Agent());
    }
    function setGlobalDispatcher(agent) {
      if (!agent || typeof agent.dispatch !== "function") {
        throw new InvalidArgumentError("Argument agent must implement Agent");
      }
      Object.defineProperty(globalThis, globalDispatcher, {
        value: agent,
        writable: true,
        enumerable: false,
        configurable: false
      });
    }
    function getGlobalDispatcher() {
      return globalThis[globalDispatcher];
    }
    module2.exports = {
      setGlobalDispatcher,
      getGlobalDispatcher
    };
  }
});

// node_modules/undici/lib/fetch/headers.js
var require_headers = __commonJS({
  "node_modules/undici/lib/fetch/headers.js"(exports, module2) {
    "use strict";
    init_shims();
    var { kHeadersList } = require_symbols();
    var { kGuard } = require_symbols2();
    var { kEnumerableProperty } = require_util();
    var {
      makeIterator,
      isValidHeaderName,
      isValidHeaderValue
    } = require_util2();
    var { webidl } = require_webidl();
    var kHeadersMap = Symbol("headers map");
    var kHeadersSortedMap = Symbol("headers map sorted");
    function headerValueNormalize(potentialValue) {
      return potentialValue.replace(
        /^[\r\n\t ]+|[\r\n\t ]+$/g,
        ""
      );
    }
    function fill(headers, object) {
      if (Array.isArray(object)) {
        for (const header of object) {
          if (header.length !== 2) {
            webidl.errors.exception({
              header: "Headers constructor",
              message: `expected name/value pair to be length 2, found ${header.length}.`
            });
          }
          headers.append(header[0], header[1]);
        }
      } else if (typeof object === "object" && object !== null) {
        for (const [key2, value] of Object.entries(object)) {
          headers.append(key2, value);
        }
      } else {
        webidl.errors.conversionFailed({
          prefix: "Headers constructor",
          argument: "Argument 1",
          types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
        });
      }
    }
    var HeadersList = class {
      constructor(init2) {
        if (init2 instanceof HeadersList) {
          this[kHeadersMap] = new Map(init2[kHeadersMap]);
          this[kHeadersSortedMap] = init2[kHeadersSortedMap];
        } else {
          this[kHeadersMap] = new Map(init2);
          this[kHeadersSortedMap] = null;
        }
      }
      contains(name) {
        name = name.toLowerCase();
        return this[kHeadersMap].has(name);
      }
      clear() {
        this[kHeadersMap].clear();
        this[kHeadersSortedMap] = null;
      }
      append(name, value) {
        this[kHeadersSortedMap] = null;
        name = name.toLowerCase();
        const exists = this[kHeadersMap].get(name);
        if (exists) {
          this[kHeadersMap].set(name, `${exists}, ${value}`);
        } else {
          this[kHeadersMap].set(name, `${value}`);
        }
      }
      set(name, value) {
        this[kHeadersSortedMap] = null;
        name = name.toLowerCase();
        return this[kHeadersMap].set(name, value);
      }
      delete(name) {
        this[kHeadersSortedMap] = null;
        name = name.toLowerCase();
        return this[kHeadersMap].delete(name);
      }
      get(name) {
        name = name.toLowerCase();
        if (!this.contains(name)) {
          return null;
        }
        return this[kHeadersMap].get(name) ?? null;
      }
      has(name) {
        name = name.toLowerCase();
        return this[kHeadersMap].has(name);
      }
      keys() {
        return this[kHeadersMap].keys();
      }
      values() {
        return this[kHeadersMap].values();
      }
      entries() {
        return this[kHeadersMap].entries();
      }
      [Symbol.iterator]() {
        return this[kHeadersMap][Symbol.iterator]();
      }
    };
    var Headers4 = class {
      constructor(init2 = void 0) {
        this[kHeadersList] = new HeadersList();
        this[kGuard] = "none";
        if (init2 !== void 0) {
          init2 = webidl.converters.HeadersInit(init2);
          fill(this, init2);
        }
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      append(name, value) {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 2) {
          throw new TypeError(
            `Failed to execute 'append' on 'Headers': 2 arguments required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.ByteString(name);
        value = webidl.converters.ByteString(value);
        value = headerValueNormalize(value);
        if (!isValidHeaderName(name)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.append",
            value: name,
            type: "header name"
          });
        } else if (!isValidHeaderValue(value)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.append",
            value,
            type: "header value"
          });
        }
        if (this[kGuard] === "immutable") {
          throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {
        }
        return this[kHeadersList].append(name, value);
      }
      delete(name) {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'delete' on 'Headers': 1 argument required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.ByteString(name);
        if (!isValidHeaderName(name)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.delete",
            value: name,
            type: "header name"
          });
        }
        if (this[kGuard] === "immutable") {
          throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {
        }
        if (!this[kHeadersList].contains(name)) {
          return;
        }
        return this[kHeadersList].delete(name);
      }
      get(name) {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'get' on 'Headers': 1 argument required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.ByteString(name);
        if (!isValidHeaderName(name)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.get",
            value: name,
            type: "header name"
          });
        }
        return this[kHeadersList].get(name);
      }
      has(name) {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'has' on 'Headers': 1 argument required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.ByteString(name);
        if (!isValidHeaderName(name)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.has",
            value: name,
            type: "header name"
          });
        }
        return this[kHeadersList].contains(name);
      }
      set(name, value) {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 2) {
          throw new TypeError(
            `Failed to execute 'set' on 'Headers': 2 arguments required, but only ${arguments.length} present.`
          );
        }
        name = webidl.converters.ByteString(name);
        value = webidl.converters.ByteString(value);
        value = headerValueNormalize(value);
        if (!isValidHeaderName(name)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.set",
            value: name,
            type: "header name"
          });
        } else if (!isValidHeaderValue(value)) {
          webidl.errors.invalidArgument({
            prefix: "Headers.set",
            value,
            type: "header value"
          });
        }
        if (this[kGuard] === "immutable") {
          throw new TypeError("immutable");
        } else if (this[kGuard] === "request-no-cors") {
        }
        return this[kHeadersList].set(name, value);
      }
      get [kHeadersSortedMap]() {
        this[kHeadersList][kHeadersSortedMap] ??= new Map([...this[kHeadersList]].sort((a, b) => a[0] < b[0] ? -1 : 1));
        return this[kHeadersList][kHeadersSortedMap];
      }
      keys() {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        return makeIterator(this[kHeadersSortedMap].keys(), "Headers");
      }
      values() {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        return makeIterator(this[kHeadersSortedMap].values(), "Headers");
      }
      entries() {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        return makeIterator(this[kHeadersSortedMap].entries(), "Headers");
      }
      forEach(callbackFn, thisArg = globalThis) {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'forEach' on 'Headers': 1 argument required, but only ${arguments.length} present.`
          );
        }
        if (typeof callbackFn !== "function") {
          throw new TypeError(
            "Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'."
          );
        }
        for (const [key2, value] of this) {
          callbackFn.apply(thisArg, [value, key2, this]);
        }
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        if (!(this instanceof Headers4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kHeadersList];
      }
    };
    Headers4.prototype[Symbol.iterator] = Headers4.prototype.entries;
    Object.defineProperties(Headers4.prototype, {
      append: kEnumerableProperty,
      delete: kEnumerableProperty,
      get: kEnumerableProperty,
      has: kEnumerableProperty,
      set: kEnumerableProperty,
      keys: kEnumerableProperty,
      values: kEnumerableProperty,
      entries: kEnumerableProperty,
      forEach: kEnumerableProperty
    });
    webidl.converters.HeadersInit = function(V) {
      if (webidl.util.Type(V) === "Object") {
        if (V[Symbol.iterator]) {
          return webidl.converters["sequence<sequence<ByteString>>"](V);
        }
        return webidl.converters["record<ByteString, ByteString>"](V);
      }
      webidl.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
      });
    };
    module2.exports = {
      fill,
      Headers: Headers4,
      HeadersList
    };
  }
});

// node_modules/undici/lib/fetch/response.js
var require_response = __commonJS({
  "node_modules/undici/lib/fetch/response.js"(exports, module2) {
    "use strict";
    init_shims();
    var { Headers: Headers4, HeadersList, fill } = require_headers();
    var { extractBody, cloneBody, mixinBody } = require_body();
    var util = require_util();
    var { kEnumerableProperty } = util;
    var {
      responseURL,
      isValidReasonPhrase,
      isCancelled,
      isAborted,
      isBlobLike,
      serializeJavascriptValueToJSONString,
      isErrorLike
    } = require_util2();
    var {
      redirectStatus,
      nullBodyStatus,
      DOMException: DOMException3
    } = require_constants();
    var { kState, kHeaders, kGuard, kRealm } = require_symbols2();
    var { webidl } = require_webidl();
    var { FormData: FormData3 } = require_formdata();
    var { kHeadersList } = require_symbols();
    var assert = require("assert");
    var { types: types3 } = require("util");
    var ReadableStream3 = globalThis.ReadableStream || require("stream/web").ReadableStream;
    var Response3 = class {
      static error() {
        const relevantRealm = { settingsObject: {} };
        const responseObject = new Response3();
        responseObject[kState] = makeNetworkError();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kHeadersList] = responseObject[kState].headersList;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        return responseObject;
      }
      static json(data, init2 = {}) {
        if (arguments.length === 0) {
          throw new TypeError(
            "Failed to execute 'json' on 'Response': 1 argument required, but 0 present."
          );
        }
        if (init2 !== null) {
          init2 = webidl.converters.ResponseInit(init2);
        }
        const bytes = new TextEncoder("utf-8").encode(
          serializeJavascriptValueToJSONString(data)
        );
        const body2 = extractBody(bytes);
        const relevantRealm = { settingsObject: {} };
        const responseObject = new Response3();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kGuard] = "response";
        responseObject[kHeaders][kRealm] = relevantRealm;
        initializeResponse(responseObject, init2, { body: body2[0], type: "application/json" });
        return responseObject;
      }
      static redirect(url, status = 302) {
        const relevantRealm = { settingsObject: {} };
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to execute 'redirect' on 'Response': 1 argument required, but only ${arguments.length} present.`
          );
        }
        url = webidl.converters.USVString(url);
        status = webidl.converters["unsigned short"](status);
        let parsedURL;
        try {
          parsedURL = new URL(url);
        } catch (err) {
          throw Object.assign(new TypeError("Failed to parse URL from " + url), {
            cause: err
          });
        }
        if (!redirectStatus.includes(status)) {
          throw new RangeError("Invalid status code");
        }
        const responseObject = new Response3();
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        responseObject[kState].status = status;
        const value = parsedURL.toString();
        responseObject[kState].headersList.append("location", value);
        return responseObject;
      }
      constructor(body2 = null, init2 = {}) {
        if (body2 !== null) {
          body2 = webidl.converters.BodyInit(body2);
        }
        init2 = webidl.converters.ResponseInit(init2);
        this[kRealm] = { settingsObject: {} };
        this[kState] = makeResponse({});
        this[kHeaders] = new Headers4();
        this[kHeaders][kGuard] = "response";
        this[kHeaders][kHeadersList] = this[kState].headersList;
        this[kHeaders][kRealm] = this[kRealm];
        let bodyWithType = null;
        if (body2 != null) {
          const [extractedBody, type] = extractBody(body2);
          bodyWithType = { body: extractedBody, type };
        }
        initializeResponse(this, init2, bodyWithType);
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      get type() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].type;
      }
      get url() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        let url = responseURL(this[kState]);
        if (url == null) {
          return "";
        }
        if (url.hash) {
          url = new URL(url);
          url.hash = "";
        }
        return url.toString();
      }
      get redirected() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].urlList.length > 1;
      }
      get status() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].status;
      }
      get ok() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].status >= 200 && this[kState].status <= 299;
      }
      get statusText() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].statusText;
      }
      get headers() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kHeaders];
      }
      clone() {
        if (!(this instanceof Response3)) {
          throw new TypeError("Illegal invocation");
        }
        if (this.bodyUsed || this.body && this.body.locked) {
          webidl.errors.exception({
            header: "Response.clone",
            message: "Body has already been consumed."
          });
        }
        const clonedResponse = cloneResponse(this[kState]);
        const clonedResponseObject = new Response3();
        clonedResponseObject[kState] = clonedResponse;
        clonedResponseObject[kRealm] = this[kRealm];
        clonedResponseObject[kHeaders][kHeadersList] = clonedResponse.headersList;
        clonedResponseObject[kHeaders][kGuard] = this[kHeaders][kGuard];
        clonedResponseObject[kHeaders][kRealm] = this[kHeaders][kRealm];
        return clonedResponseObject;
      }
    };
    mixinBody(Response3);
    Object.defineProperties(Response3.prototype, {
      type: kEnumerableProperty,
      url: kEnumerableProperty,
      status: kEnumerableProperty,
      ok: kEnumerableProperty,
      redirected: kEnumerableProperty,
      statusText: kEnumerableProperty,
      headers: kEnumerableProperty,
      clone: kEnumerableProperty
    });
    function cloneResponse(response) {
      if (response.internalResponse) {
        return filterResponse(
          cloneResponse(response.internalResponse),
          response.type
        );
      }
      const newResponse = makeResponse({ ...response, body: null });
      if (response.body != null) {
        newResponse.body = cloneBody(response.body);
      }
      return newResponse;
    }
    function makeResponse(init2) {
      return {
        aborted: false,
        rangeRequested: false,
        timingAllowPassed: false,
        requestIncludesCredentials: false,
        type: "default",
        status: 200,
        timingInfo: null,
        cacheState: "",
        statusText: "",
        ...init2,
        headersList: init2.headersList ? new HeadersList(init2.headersList) : new HeadersList(),
        urlList: init2.urlList ? [...init2.urlList] : []
      };
    }
    function makeNetworkError(reason) {
      const isError = isErrorLike(reason);
      return makeResponse({
        type: "error",
        status: 0,
        error: isError ? reason : new Error(reason ? String(reason) : reason, {
          cause: isError ? reason : void 0
        }),
        aborted: reason && reason.name === "AbortError"
      });
    }
    function makeFilteredResponse(response, state) {
      state = {
        internalResponse: response,
        ...state
      };
      return new Proxy(response, {
        get(target, p) {
          return p in state ? state[p] : target[p];
        },
        set(target, p, value) {
          assert(!(p in state));
          target[p] = value;
          return true;
        }
      });
    }
    function filterResponse(response, type) {
      if (type === "basic") {
        return makeFilteredResponse(response, {
          type: "basic",
          headersList: response.headersList
        });
      } else if (type === "cors") {
        return makeFilteredResponse(response, {
          type: "cors",
          headersList: response.headersList
        });
      } else if (type === "opaque") {
        return makeFilteredResponse(response, {
          type: "opaque",
          urlList: Object.freeze([]),
          status: 0,
          statusText: "",
          body: null
        });
      } else if (type === "opaqueredirect") {
        return makeFilteredResponse(response, {
          type: "opaqueredirect",
          status: 0,
          statusText: "",
          headersList: [],
          body: null
        });
      } else {
        assert(false);
      }
    }
    function makeAppropriateNetworkError(fetchParams) {
      assert(isCancelled(fetchParams));
      return isAborted(fetchParams) ? makeNetworkError(new DOMException3("The operation was aborted.", "AbortError")) : makeNetworkError(fetchParams.controller.terminated.reason);
    }
    function initializeResponse(response, init2, body2) {
      if (init2.status !== null && (init2.status < 200 || init2.status > 599)) {
        throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
      }
      if ("statusText" in init2 && init2.statusText != null) {
        if (!isValidReasonPhrase(String(init2.statusText))) {
          throw new TypeError("Invalid statusText");
        }
      }
      if ("status" in init2 && init2.status != null) {
        response[kState].status = init2.status;
      }
      if ("statusText" in init2 && init2.statusText != null) {
        response[kState].statusText = init2.statusText;
      }
      if ("headers" in init2 && init2.headers != null) {
        fill(response[kState].headersList, init2.headers);
      }
      if (body2) {
        if (nullBodyStatus.includes(response.status)) {
          webidl.errors.exception({
            header: "Response constructor",
            message: "Invalid response status code."
          });
        }
        response[kState].body = body2.body;
        if (body2.type != null && !response[kState].headersList.has("Content-Type")) {
          response[kState].headersList.append("content-type", body2.type);
        }
      }
    }
    webidl.converters.ReadableStream = webidl.interfaceConverter(
      ReadableStream3
    );
    webidl.converters.FormData = webidl.interfaceConverter(
      FormData3
    );
    webidl.converters.URLSearchParams = webidl.interfaceConverter(
      URLSearchParams
    );
    webidl.converters.XMLHttpRequestBodyInit = function(V) {
      if (typeof V === "string") {
        return webidl.converters.USVString(V);
      }
      if (isBlobLike(V)) {
        return webidl.converters.Blob(V);
      }
      if (types3.isAnyArrayBuffer(V) || types3.isTypedArray(V) || types3.isDataView(V)) {
        return webidl.converters.BufferSource(V);
      }
      if (V instanceof FormData3) {
        return webidl.converters.FormData(V);
      }
      if (V instanceof URLSearchParams) {
        return webidl.converters.URLSearchParams(V);
      }
      return webidl.converters.DOMString(V);
    };
    webidl.converters.BodyInit = function(V) {
      if (V instanceof ReadableStream3) {
        return webidl.converters.ReadableStream(V);
      }
      if (V == null ? void 0 : V[Symbol.asyncIterator]) {
        return V;
      }
      return webidl.converters.XMLHttpRequestBodyInit(V);
    };
    webidl.converters.ResponseInit = webidl.dictionaryConverter([
      {
        key: "status",
        converter: webidl.converters["unsigned short"],
        defaultValue: 200
      },
      {
        key: "statusText",
        converter: webidl.converters.ByteString,
        defaultValue: ""
      },
      {
        key: "headers",
        converter: webidl.converters.HeadersInit
      }
    ]);
    module2.exports = {
      makeNetworkError,
      makeResponse,
      makeAppropriateNetworkError,
      filterResponse,
      Response: Response3
    };
  }
});

// node_modules/undici/lib/fetch/request.js
var require_request2 = __commonJS({
  "node_modules/undici/lib/fetch/request.js"(exports, module2) {
    "use strict";
    init_shims();
    var { extractBody, mixinBody, cloneBody } = require_body();
    var { Headers: Headers4, fill: fillHeaders, HeadersList } = require_headers();
    var { FinalizationRegistry } = require_dispatcher_weakref()();
    var util = require_util();
    var {
      isValidHTTPToken,
      sameOrigin,
      normalizeMethod
    } = require_util2();
    var {
      forbiddenMethods,
      corsSafeListedMethods,
      referrerPolicy,
      requestRedirect,
      requestMode,
      requestCredentials,
      requestCache
    } = require_constants();
    var { kEnumerableProperty } = util;
    var { kHeaders, kSignal, kState, kGuard, kRealm } = require_symbols2();
    var { webidl } = require_webidl();
    var { kHeadersList } = require_symbols();
    var assert = require("assert");
    var TransformStream2;
    var kInit = Symbol("init");
    var requestFinalizer = new FinalizationRegistry(({ signal, abort }) => {
      signal.removeEventListener("abort", abort);
    });
    var Request4 = class {
      constructor(input, init2 = {}) {
        var _a, _b;
        if (input === kInit) {
          return;
        }
        if (arguments.length < 1) {
          throw new TypeError(
            `Failed to construct 'Request': 1 argument required, but only ${arguments.length} present.`
          );
        }
        input = webidl.converters.RequestInfo(input);
        init2 = webidl.converters.RequestInit(init2);
        this[kRealm] = { settingsObject: {} };
        let request = null;
        let fallbackMode = null;
        const baseUrl = this[kRealm].settingsObject.baseUrl;
        let signal = null;
        if (typeof input === "string") {
          let parsedURL;
          try {
            parsedURL = new URL(input, baseUrl);
          } catch (err) {
            throw new TypeError("Failed to parse URL from " + input, { cause: err });
          }
          if (parsedURL.username || parsedURL.password) {
            throw new TypeError(
              "Request cannot be constructed from a URL that includes credentials: " + input
            );
          }
          request = makeRequest({ urlList: [parsedURL] });
          fallbackMode = "cors";
        } else {
          assert(input instanceof Request4);
          request = input[kState];
          signal = input[kSignal];
        }
        const origin = this[kRealm].settingsObject.origin;
        let window2 = "client";
        if (((_b = (_a = request.window) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name) === "EnvironmentSettingsObject" && sameOrigin(request.window, origin)) {
          window2 = request.window;
        }
        if (init2.window !== void 0 && init2.window != null) {
          throw new TypeError(`'window' option '${window2}' must be null`);
        }
        if (init2.window !== void 0) {
          window2 = "no-window";
        }
        request = makeRequest({
          method: request.method,
          headersList: request.headersList,
          unsafeRequest: request.unsafeRequest,
          client: this[kRealm].settingsObject,
          window: window2,
          priority: request.priority,
          origin: request.origin,
          referrer: request.referrer,
          referrerPolicy: request.referrerPolicy,
          mode: request.mode,
          credentials: request.credentials,
          cache: request.cache,
          redirect: request.redirect,
          integrity: request.integrity,
          keepalive: request.keepalive,
          reloadNavigation: request.reloadNavigation,
          historyNavigation: request.historyNavigation,
          urlList: [...request.urlList]
        });
        if (Object.keys(init2).length > 0) {
          if (request.mode === "navigate") {
            request.mode = "same-origin";
          }
          request.reloadNavigation = false;
          request.historyNavigation = false;
          request.origin = "client";
          request.referrer = "client";
          request.referrerPolicy = "";
          request.url = request.urlList[request.urlList.length - 1];
          request.urlList = [request.url];
        }
        if (init2.referrer !== void 0) {
          const referrer = init2.referrer;
          if (referrer === "") {
            request.referrer = "no-referrer";
          } else {
            let parsedReferrer;
            try {
              parsedReferrer = new URL(referrer, baseUrl);
            } catch (err) {
              throw new TypeError(`Referrer "${referrer}" is not a valid URL.`, { cause: err });
            }
            request.referrer = parsedReferrer;
          }
        }
        if (init2.referrerPolicy !== void 0) {
          request.referrerPolicy = init2.referrerPolicy;
          if (!referrerPolicy.includes(request.referrerPolicy)) {
            throw new TypeError(
              `Failed to construct 'Request': The provided value '${request.referrerPolicy}' is not a valid enum value of type ReferrerPolicy.`
            );
          }
        }
        let mode;
        if (init2.mode !== void 0) {
          mode = init2.mode;
          if (!requestMode.includes(mode)) {
            throw new TypeError(
              `Failed to construct 'Request': The provided value '${request.mode}' is not a valid enum value of type RequestMode.`
            );
          }
        } else {
          mode = fallbackMode;
        }
        if (mode === "navigate") {
          webidl.errors.exception({
            header: "Request constructor",
            message: "invalid request mode navigate."
          });
        }
        if (mode != null) {
          request.mode = mode;
        }
        if (init2.credentials !== void 0) {
          request.credentials = init2.credentials;
          if (!requestCredentials.includes(request.credentials)) {
            throw new TypeError(
              `Failed to construct 'Request': The provided value '${request.credentials}' is not a valid enum value of type RequestCredentials.`
            );
          }
        }
        if (init2.cache !== void 0) {
          request.cache = init2.cache;
          if (!requestCache.includes(request.cache)) {
            throw new TypeError(
              `Failed to construct 'Request': The provided value '${request.cache}' is not a valid enum value of type RequestCache.`
            );
          }
        }
        if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
          throw new TypeError(
            "'only-if-cached' can be set only with 'same-origin' mode"
          );
        }
        if (init2.redirect !== void 0) {
          request.redirect = init2.redirect;
          if (!requestRedirect.includes(request.redirect)) {
            throw new TypeError(
              `Failed to construct 'Request': The provided value '${request.redirect}' is not a valid enum value of type RequestRedirect.`
            );
          }
        }
        if (init2.integrity !== void 0 && init2.integrity != null) {
          request.integrity = String(init2.integrity);
        }
        if (init2.keepalive !== void 0) {
          request.keepalive = Boolean(init2.keepalive);
        }
        if (init2.method !== void 0) {
          let method = init2.method;
          if (!isValidHTTPToken(init2.method)) {
            throw TypeError(`'${init2.method}' is not a valid HTTP method.`);
          }
          if (forbiddenMethods.indexOf(method.toUpperCase()) !== -1) {
            throw TypeError(`'${init2.method}' HTTP method is unsupported.`);
          }
          method = normalizeMethod(init2.method);
          request.method = method;
        }
        if (init2.signal !== void 0) {
          signal = init2.signal;
        }
        this[kState] = request;
        const ac = new AbortController();
        this[kSignal] = ac.signal;
        this[kSignal][kRealm] = this[kRealm];
        if (signal != null) {
          if (!signal || typeof signal.aborted !== "boolean" || typeof signal.addEventListener !== "function") {
            throw new TypeError(
              "Failed to construct 'Request': member signal is not of type AbortSignal."
            );
          }
          if (signal.aborted) {
            ac.abort(signal.reason);
          } else {
            const abort = () => ac.abort(signal.reason);
            signal.addEventListener("abort", abort, { once: true });
            requestFinalizer.register(this, { signal, abort });
          }
        }
        this[kHeaders] = new Headers4();
        this[kHeaders][kHeadersList] = request.headersList;
        this[kHeaders][kGuard] = "request";
        this[kHeaders][kRealm] = this[kRealm];
        if (mode === "no-cors") {
          if (!corsSafeListedMethods.includes(request.method)) {
            throw new TypeError(
              `'${request.method} is unsupported in no-cors mode.`
            );
          }
          this[kHeaders][kGuard] = "request-no-cors";
        }
        if (Object.keys(init2).length !== 0) {
          let headers = new Headers4(this[kHeaders]);
          if (init2.headers !== void 0) {
            headers = init2.headers;
          }
          this[kHeaders][kHeadersList].clear();
          if (headers.constructor.name === "Headers") {
            for (const [key2, val] of headers) {
              this[kHeaders].append(key2, val);
            }
          } else {
            fillHeaders(this[kHeaders], headers);
          }
        }
        const inputBody = input instanceof Request4 ? input[kState].body : null;
        if ((init2.body !== void 0 && init2.body != null || inputBody != null) && (request.method === "GET" || request.method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body.");
        }
        let initBody = null;
        if (init2.body !== void 0 && init2.body != null) {
          const [extractedBody, contentType] = extractBody(
            init2.body,
            request.keepalive
          );
          initBody = extractedBody;
          if (contentType && !this[kHeaders].has("content-type")) {
            this[kHeaders].append("content-type", contentType);
          }
        }
        const inputOrInitBody = initBody ?? inputBody;
        if (inputOrInitBody != null && inputOrInitBody.source == null) {
          if (request.mode !== "same-origin" && request.mode !== "cors") {
            throw new TypeError(
              'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
            );
          }
          request.useCORSPreflightFlag = true;
        }
        let finalBody = inputOrInitBody;
        if (initBody == null && inputBody != null) {
          if (util.isDisturbed(inputBody.stream) || inputBody.stream.locked) {
            throw new TypeError(
              "Cannot construct a Request with a Request object that has already been used."
            );
          }
          if (!TransformStream2) {
            TransformStream2 = require("stream/web").TransformStream;
          }
          const identityTransform = new TransformStream2();
          inputBody.stream.pipeThrough(identityTransform);
          finalBody = {
            source: inputBody.source,
            length: inputBody.length,
            stream: identityTransform.readable
          };
        }
        this[kState].body = finalBody;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      get method() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].method;
      }
      get url() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].url.toString();
      }
      get headers() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kHeaders];
      }
      get destination() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].destination;
      }
      get referrer() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        if (this[kState].referrer === "no-referrer") {
          return "";
        }
        if (this[kState].referrer === "client") {
          return "about:client";
        }
        return this[kState].referrer.toString();
      }
      get referrerPolicy() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].referrerPolicy;
      }
      get mode() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].mode;
      }
      get credentials() {
        return this[kState].credentials;
      }
      get cache() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].cache;
      }
      get redirect() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].redirect;
      }
      get integrity() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].integrity;
      }
      get keepalive() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].keepalive;
      }
      get isReloadNavigation() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].reloadNavigation;
      }
      get isHistoryNavigation() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kState].historyNavigation;
      }
      get signal() {
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        return this[kSignal];
      }
      clone() {
        var _a;
        if (!(this instanceof Request4)) {
          throw new TypeError("Illegal invocation");
        }
        if (this.bodyUsed || ((_a = this.body) == null ? void 0 : _a.locked)) {
          throw new TypeError("unusable");
        }
        const clonedRequest = cloneRequest(this[kState]);
        const clonedRequestObject = new Request4(kInit);
        clonedRequestObject[kState] = clonedRequest;
        clonedRequestObject[kRealm] = this[kRealm];
        clonedRequestObject[kHeaders] = new Headers4();
        clonedRequestObject[kHeaders][kHeadersList] = clonedRequest.headersList;
        clonedRequestObject[kHeaders][kGuard] = this[kHeaders][kGuard];
        clonedRequestObject[kHeaders][kRealm] = this[kHeaders][kRealm];
        const ac = new AbortController();
        if (this.signal.aborted) {
          ac.abort(this.signal.reason);
        } else {
          this.signal.addEventListener(
            "abort",
            () => {
              ac.abort(this.signal.reason);
            },
            { once: true }
          );
        }
        clonedRequestObject[kSignal] = ac.signal;
        return clonedRequestObject;
      }
    };
    mixinBody(Request4);
    function makeRequest(init2) {
      const request = {
        method: "GET",
        localURLsOnly: false,
        unsafeRequest: false,
        body: null,
        client: null,
        reservedClient: null,
        replacesClientId: "",
        window: "client",
        keepalive: false,
        serviceWorkers: "all",
        initiator: "",
        destination: "",
        priority: null,
        origin: "client",
        policyContainer: "client",
        referrer: "client",
        referrerPolicy: "",
        mode: "no-cors",
        useCORSPreflightFlag: false,
        credentials: "same-origin",
        useCredentials: false,
        cache: "default",
        redirect: "follow",
        integrity: "",
        cryptoGraphicsNonceMetadata: "",
        parserMetadata: "",
        reloadNavigation: false,
        historyNavigation: false,
        userActivation: false,
        taintedOrigin: false,
        redirectCount: 0,
        responseTainting: "basic",
        preventNoCacheCacheControlHeaderModification: false,
        done: false,
        timingAllowFailed: false,
        ...init2,
        headersList: init2.headersList ? new HeadersList(init2.headersList) : new HeadersList()
      };
      request.url = request.urlList[0];
      return request;
    }
    function cloneRequest(request) {
      const newRequest = makeRequest({ ...request, body: null });
      if (request.body != null) {
        newRequest.body = cloneBody(request.body);
      }
      return newRequest;
    }
    Object.defineProperties(Request4.prototype, {
      method: kEnumerableProperty,
      url: kEnumerableProperty,
      headers: kEnumerableProperty,
      redirect: kEnumerableProperty,
      clone: kEnumerableProperty,
      signal: kEnumerableProperty
    });
    webidl.converters.Request = webidl.interfaceConverter(
      Request4
    );
    webidl.converters.RequestInfo = function(V) {
      if (typeof V === "string") {
        return webidl.converters.USVString(V);
      }
      if (V instanceof Request4) {
        return webidl.converters.Request(V);
      }
      return webidl.converters.USVString(V);
    };
    webidl.converters.AbortSignal = webidl.interfaceConverter(
      AbortSignal
    );
    webidl.converters.RequestInit = webidl.dictionaryConverter([
      {
        key: "method",
        converter: webidl.converters.ByteString
      },
      {
        key: "headers",
        converter: webidl.converters.HeadersInit
      },
      {
        key: "body",
        converter: webidl.nullableConverter(
          webidl.converters.BodyInit
        )
      },
      {
        key: "referrer",
        converter: webidl.converters.USVString
      },
      {
        key: "referrerPolicy",
        converter: webidl.converters.DOMString,
        allowedValues: [
          "",
          "no-referrer",
          "no-referrer-when-downgrade",
          "same-origin",
          "origin",
          "strict-origin",
          "origin-when-cross-origin",
          "strict-origin-when-cross-origin",
          "unsafe-url"
        ]
      },
      {
        key: "mode",
        converter: webidl.converters.DOMString,
        allowedValues: [
          "same-origin",
          "cors",
          "no-cors",
          "navigate",
          "websocket"
        ]
      },
      {
        key: "credentials",
        converter: webidl.converters.DOMString,
        allowedValues: [
          "omit",
          "same-origin",
          "include"
        ]
      },
      {
        key: "cache",
        converter: webidl.converters.DOMString,
        allowedValues: [
          "default",
          "no-store",
          "reload",
          "no-cache",
          "force-cache",
          "only-if-cached"
        ]
      },
      {
        key: "redirect",
        converter: webidl.converters.DOMString,
        allowedValues: [
          "follow",
          "error",
          "manual"
        ]
      },
      {
        key: "integrity",
        converter: webidl.converters.DOMString
      },
      {
        key: "keepalive",
        converter: webidl.converters.boolean
      },
      {
        key: "signal",
        converter: webidl.nullableConverter(
          (signal) => webidl.converters.AbortSignal(
            signal,
            { strict: false }
          )
        )
      },
      {
        key: "window",
        converter: webidl.converters.any
      }
    ]);
    module2.exports = { Request: Request4, makeRequest };
  }
});

// node_modules/undici/lib/fetch/dataURL.js
var require_dataURL = __commonJS({
  "node_modules/undici/lib/fetch/dataURL.js"(exports, module2) {
    init_shims();
    var assert = require("assert");
    var { atob: atob2 } = require("buffer");
    var encoder2 = new TextEncoder();
    function dataURLProcessor(dataURL) {
      assert(dataURL.protocol === "data:");
      let input = URLSerializer(dataURL, true);
      input = input.slice(5);
      const position = { position: 0 };
      let mimeType = collectASequenceOfCodePoints(
        (char) => char !== ",",
        input,
        position
      );
      const mimeTypeLength = mimeType.length;
      mimeType = mimeType.replace(/^(\u0020)+|(\u0020)+$/g, "");
      if (position.position >= input.length) {
        return "failure";
      }
      position.position++;
      const encodedBody = input.slice(mimeTypeLength + 1);
      let body2 = stringPercentDecode(encodedBody);
      if (/;(\u0020){0,}base64$/i.test(mimeType)) {
        const stringBody = decodeURIComponent(new TextDecoder("utf-8").decode(body2));
        body2 = forgivingBase64(stringBody);
        if (body2 === "failure") {
          return "failure";
        }
        mimeType = mimeType.slice(0, -6);
        mimeType = mimeType.replace(/(\u0020)+$/, "");
        mimeType = mimeType.slice(0, -1);
      }
      if (mimeType.startsWith(";")) {
        mimeType = "text/plain" + mimeType;
      }
      let mimeTypeRecord = parseMIMEType(mimeType);
      if (mimeTypeRecord === "failure") {
        mimeTypeRecord = parseMIMEType("text/plain;charset=US-ASCII");
      }
      return { mimeType: mimeTypeRecord, body: body2 };
    }
    function URLSerializer(url, excludeFragment = false) {
      let output = url.protocol;
      if (url.host.length > 0) {
        output += "//";
        if (url.username.length > 0 || url.password.length > 0) {
          output += url.username;
          if (url.password.length > 0) {
            output += ":" + url.password;
          }
          output += "@";
        }
        output += decodeURIComponent(url.host);
        if (url.port.length > 0) {
          output += ":" + url.port;
        }
      }
      if (url.host.length === 0 && url.pathname.length > 1 && url.href.slice(url.protocol.length + 1)[0] === ".") {
        output += "/.";
      }
      output += url.pathname;
      if (url.search.length > 0) {
        output += url.search;
      }
      if (excludeFragment === false && url.hash.length > 0) {
        output += url.hash;
      }
      return output;
    }
    function collectASequenceOfCodePoints(condition, input, position) {
      let result = "";
      while (position.position < input.length && condition(input[position.position])) {
        result += input[position.position];
        position.position++;
      }
      return result;
    }
    function stringPercentDecode(input) {
      const bytes = encoder2.encode(input);
      return percentDecode(bytes);
    }
    function percentDecode(input) {
      const output = [];
      for (let i2 = 0; i2 < input.length; i2++) {
        const byte = input[i2];
        if (byte !== 37) {
          output.push(byte);
        } else if (byte === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(input[i2 + 1], input[i2 + 2]))) {
          output.push(37);
        } else {
          const nextTwoBytes = String.fromCharCode(input[i2 + 1], input[i2 + 2]);
          const bytePoint = Number.parseInt(nextTwoBytes, 16);
          output.push(bytePoint);
          i2 += 2;
        }
      }
      return Uint8Array.from(output);
    }
    function parseMIMEType(input) {
      input = input.trim();
      const position = { position: 0 };
      const type = collectASequenceOfCodePoints(
        (char) => char !== "/",
        input,
        position
      );
      if (type.length === 0 || !/^[!#$%&'*+-.^_|~A-z0-9]+$/.test(type)) {
        return "failure";
      }
      if (position.position > input.length) {
        return "failure";
      }
      position.position++;
      let subtype = collectASequenceOfCodePoints(
        (char) => char !== ";",
        input,
        position
      );
      subtype = subtype.trim();
      if (subtype.length === 0 || !/^[!#$%&'*+-.^_|~A-z0-9]+$/.test(subtype)) {
        return "failure";
      }
      const mimeType = {
        type: type.toLowerCase(),
        subtype: subtype.toLowerCase(),
        parameters: /* @__PURE__ */ new Map()
      };
      while (position.position < input.length) {
        position.position++;
        collectASequenceOfCodePoints(
          (char) => /(\u000A|\u000D|\u0009|\u0020)/.test(char),
          input,
          position
        );
        let parameterName = collectASequenceOfCodePoints(
          (char) => char !== ";" && char !== "=",
          input,
          position
        );
        parameterName = parameterName.toLowerCase();
        if (position.position < input.length) {
          if (input[position.position] === ";") {
            continue;
          }
          position.position++;
        }
        if (position.position > input.length) {
          break;
        }
        let parameterValue = null;
        if (input[position.position] === '"') {
          parameterValue = collectAnHTTPQuotedString(input, position);
          collectASequenceOfCodePoints(
            (char) => char !== ";",
            input,
            position
          );
        } else {
          parameterValue = collectASequenceOfCodePoints(
            (char) => char !== ";",
            input,
            position
          );
          parameterValue = parameterValue.trim();
          if (parameterValue.length === 0) {
            continue;
          }
        }
        if (parameterName.length !== 0 && /^[!#$%&'*+-.^_|~A-z0-9]+$/.test(parameterName) && !/^(\u0009|\x{0020}-\x{007E}|\x{0080}-\x{00FF})+$/.test(parameterValue) && !mimeType.parameters.has(parameterName)) {
          mimeType.parameters.set(parameterName, parameterValue);
        }
      }
      return mimeType;
    }
    function forgivingBase64(data) {
      data = data.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "");
      if (data.length % 4 === 0) {
        data = data.replace(/=?=$/, "");
      }
      if (data.length % 4 === 1) {
        return "failure";
      }
      if (/[^+/0-9A-Za-z]/.test(data)) {
        return "failure";
      }
      const binary = atob2(data);
      const bytes = new Uint8Array(binary.length);
      for (let byte = 0; byte < binary.length; byte++) {
        bytes[byte] = binary.charCodeAt(byte);
      }
      return bytes;
    }
    function collectAnHTTPQuotedString(input, position, extractValue) {
      const positionStart = position.position;
      let value = "";
      assert(input[position.position] === '"');
      position.position++;
      while (true) {
        value += collectASequenceOfCodePoints(
          (char) => char !== '"' && char !== "\\",
          input,
          position
        );
        if (position.position >= input.length) {
          break;
        }
        const quoteOrBackslash = input[position.position];
        position.position++;
        if (quoteOrBackslash === "\\") {
          if (position.position >= input.length) {
            value += "\\";
            break;
          }
          value += input[position.position];
          position.position++;
        } else {
          assert(quoteOrBackslash === '"');
          break;
        }
      }
      if (extractValue) {
        return value;
      }
      return input.slice(positionStart, position.position);
    }
    module2.exports = {
      dataURLProcessor,
      URLSerializer,
      collectASequenceOfCodePoints,
      stringPercentDecode,
      parseMIMEType,
      collectAnHTTPQuotedString
    };
  }
});

// node_modules/undici/lib/fetch/index.js
var require_fetch = __commonJS({
  "node_modules/undici/lib/fetch/index.js"(exports, module2) {
    "use strict";
    init_shims();
    var {
      Response: Response3,
      makeNetworkError,
      makeAppropriateNetworkError,
      filterResponse,
      makeResponse
    } = require_response();
    var { Headers: Headers4 } = require_headers();
    var { Request: Request4, makeRequest } = require_request2();
    var zlib = require("zlib");
    var {
      bytesMatch,
      makePolicyContainer,
      clonePolicyContainer,
      requestBadPort,
      TAOCheck,
      appendRequestOriginHeader,
      responseLocationURL,
      requestCurrentURL,
      setRequestReferrerPolicyOnRedirect,
      tryUpgradeRequestToAPotentiallyTrustworthyURL,
      createOpaqueTimingInfo,
      appendFetchMetadata,
      corsCheck,
      crossOriginResourcePolicyCheck,
      determineRequestsReferrer: determineRequestsReferrer2,
      coarsenedSharedCurrentTime,
      createDeferredPromise,
      isBlobLike,
      sameOrigin,
      isCancelled,
      isAborted,
      isErrorLike,
      fullyReadBody
    } = require_util2();
    var { kState, kHeaders, kGuard, kRealm } = require_symbols2();
    var assert = require("assert");
    var { safelyExtractBody, extractBody } = require_body();
    var {
      redirectStatus,
      nullBodyStatus,
      safeMethods,
      requestBodyHeader,
      subresource,
      DOMException: DOMException3
    } = require_constants();
    var { kHeadersList } = require_symbols();
    var EE = require("events");
    var { Readable: Readable2, pipeline: pipeline2 } = require("stream");
    var { isErrored, isReadable } = require_util();
    var { dataURLProcessor } = require_dataURL();
    var { TransformStream: TransformStream2 } = require("stream/web");
    var resolveObjectURL;
    var ReadableStream3;
    var nodeVersion = process.versions.node.split(".");
    var nodeMajor = Number(nodeVersion[0]);
    var nodeMinor = Number(nodeVersion[1]);
    var Fetch = class extends EE {
      constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
        this.connection = null;
        this.dump = false;
        this.state = "ongoing";
      }
      terminate(reason) {
        var _a;
        if (this.state !== "ongoing") {
          return;
        }
        this.state = "terminated";
        (_a = this.connection) == null ? void 0 : _a.destroy(reason);
        this.emit("terminated", reason);
      }
      abort() {
        var _a;
        if (this.state !== "ongoing") {
          return;
        }
        const reason = new DOMException3("The operation was aborted.", "AbortError");
        this.state = "aborted";
        (_a = this.connection) == null ? void 0 : _a.destroy(reason);
        this.emit("terminated", reason);
      }
    };
    async function fetch3(input, init2 = {}) {
      var _a;
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'fetch' on 'Window': 1 argument required, but only ${arguments.length} present.`
        );
      }
      const p = createDeferredPromise();
      let requestObject;
      try {
        requestObject = new Request4(input, init2);
      } catch (e2) {
        p.reject(e2);
        return p.promise;
      }
      const request = requestObject[kState];
      if (requestObject.signal.aborted) {
        abortFetch(p, request, null);
        return p.promise;
      }
      const globalObject = request.client.globalObject;
      if (((_a = globalObject == null ? void 0 : globalObject.constructor) == null ? void 0 : _a.name) === "ServiceWorkerGlobalScope") {
        request.serviceWorkers = "none";
      }
      let responseObject = null;
      const relevantRealm = null;
      let locallyAborted = false;
      let controller = null;
      requestObject.signal.addEventListener(
        "abort",
        () => {
          locallyAborted = true;
          abortFetch(p, request, responseObject);
          if (controller != null) {
            controller.abort();
          }
        },
        { once: true }
      );
      const handleFetchDone = (response) => finalizeAndReportTiming(response, "fetch");
      const processResponse = (response) => {
        if (locallyAborted) {
          return;
        }
        if (response.aborted) {
          abortFetch(p, request, responseObject);
          return;
        }
        if (response.type === "error") {
          p.reject(
            Object.assign(new TypeError("fetch failed"), { cause: response.error })
          );
          return;
        }
        responseObject = new Response3();
        responseObject[kState] = response;
        responseObject[kRealm] = relevantRealm;
        responseObject[kHeaders][kHeadersList] = response.headersList;
        responseObject[kHeaders][kGuard] = "immutable";
        responseObject[kHeaders][kRealm] = relevantRealm;
        p.resolve(responseObject);
      };
      controller = fetching({
        request,
        processResponseEndOfBody: handleFetchDone,
        processResponse,
        dispatcher: this
      });
      return p.promise;
    }
    function finalizeAndReportTiming(response, initiatorType = "other") {
      var _a;
      if (response.type === "error" && response.aborted) {
        return;
      }
      if (!((_a = response.urlList) == null ? void 0 : _a.length)) {
        return;
      }
      const originalURL = response.urlList[0];
      let timingInfo = response.timingInfo;
      let cacheState = response.cacheState;
      if (!/^https?:/.test(originalURL.protocol)) {
        return;
      }
      if (timingInfo === null) {
        return;
      }
      if (!timingInfo.timingAllowPassed) {
        timingInfo = createOpaqueTimingInfo({
          startTime: timingInfo.startTime
        });
        cacheState = "";
      }
      response.timingInfo.endTime = coarsenedSharedCurrentTime();
      response.timingInfo = timingInfo;
      markResourceTiming(
        timingInfo,
        originalURL,
        initiatorType,
        globalThis,
        cacheState
      );
    }
    function markResourceTiming(timingInfo, originalURL, initiatorType, globalThis2, cacheState) {
      if (nodeMajor >= 18 && nodeMinor >= 2) {
        performance.markResourceTiming(timingInfo, originalURL, initiatorType, globalThis2, cacheState);
      }
    }
    function abortFetch(p, request, responseObject) {
      var _a, _b;
      const error2 = new DOMException3("The operation was aborted.", "AbortError");
      p.reject(error2);
      if (request.body != null && isReadable((_a = request.body) == null ? void 0 : _a.stream)) {
        request.body.stream.cancel(error2).catch((err) => {
          if (err.code === "ERR_INVALID_STATE") {
            return;
          }
          throw err;
        });
      }
      if (responseObject == null) {
        return;
      }
      const response = responseObject[kState];
      if (response.body != null && isReadable((_b = response.body) == null ? void 0 : _b.stream)) {
        response.body.stream.cancel(error2).catch((err) => {
          if (err.code === "ERR_INVALID_STATE") {
            return;
          }
          throw err;
        });
      }
    }
    function fetching({
      request,
      processRequestBodyChunkLength,
      processRequestEndOfBody,
      processResponse,
      processResponseEndOfBody,
      processResponseConsumeBody,
      useParallelQueue = false,
      dispatcher
    }) {
      var _a, _b, _c, _d;
      let taskDestination = null;
      let crossOriginIsolatedCapability = false;
      if (request.client != null) {
        taskDestination = request.client.globalObject;
        crossOriginIsolatedCapability = request.client.crossOriginIsolatedCapability;
      }
      const currenTime = coarsenedSharedCurrentTime(crossOriginIsolatedCapability);
      const timingInfo = createOpaqueTimingInfo({
        startTime: currenTime
      });
      const fetchParams = {
        controller: new Fetch(dispatcher),
        request,
        timingInfo,
        processRequestBodyChunkLength,
        processRequestEndOfBody,
        processResponse,
        processResponseConsumeBody,
        processResponseEndOfBody,
        taskDestination,
        crossOriginIsolatedCapability
      };
      assert(!request.body || request.body.stream);
      if (request.window === "client") {
        request.window = ((_c = (_b = (_a = request.client) == null ? void 0 : _a.globalObject) == null ? void 0 : _b.constructor) == null ? void 0 : _c.name) === "Window" ? request.client : "no-window";
      }
      if (request.origin === "client") {
        request.origin = (_d = request.client) == null ? void 0 : _d.origin;
      }
      if (request.policyContainer === "client") {
        if (request.client != null) {
          request.policyContainer = clonePolicyContainer(
            request.client.policyContainer
          );
        } else {
          request.policyContainer = makePolicyContainer();
        }
      }
      if (!request.headersList.has("accept")) {
        const value = "*/*";
        request.headersList.append("accept", value);
      }
      if (!request.headersList.has("accept-language")) {
        request.headersList.append("accept-language", "*");
      }
      if (request.priority === null) {
      }
      if (subresource.includes(request.destination)) {
      }
      mainFetch(fetchParams).catch((err) => {
        fetchParams.controller.terminate(err);
      });
      return fetchParams.controller;
    }
    async function mainFetch(fetchParams, recursive = false) {
      const request = fetchParams.request;
      let response = null;
      if (request.localURLsOnly && !/^(about|blob|data):/.test(requestCurrentURL(request).protocol)) {
        response = makeNetworkError("local URLs only");
      }
      tryUpgradeRequestToAPotentiallyTrustworthyURL(request);
      if (requestBadPort(request) === "blocked") {
        response = makeNetworkError("bad port");
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = request.policyContainer.referrerPolicy;
      }
      if (request.referrer !== "no-referrer") {
        request.referrer = determineRequestsReferrer2(request);
      }
      if (response === null) {
        response = await (async () => {
          const currentURL = requestCurrentURL(request);
          if (sameOrigin(currentURL, request.url) && request.responseTainting === "basic" || currentURL.protocol === "data:" || (request.mode === "navigate" || request.mode === "websocket")) {
            request.responseTainting = "basic";
            return await schemeFetch(fetchParams);
          }
          if (request.mode === "same-origin") {
            return makeNetworkError('request mode cannot be "same-origin"');
          }
          if (request.mode === "no-cors") {
            if (request.redirect !== "follow") {
              return makeNetworkError(
                'redirect mode cannot be "follow" for "no-cors" request'
              );
            }
            request.responseTainting = "opaque";
            return await schemeFetch(fetchParams);
          }
          if (!/^https?:/.test(requestCurrentURL(request).protocol)) {
            return makeNetworkError("URL scheme must be a HTTP(S) scheme");
          }
          request.responseTainting = "cors";
          return await httpFetch(fetchParams);
        })();
      }
      if (recursive) {
        return response;
      }
      if (response.status !== 0 && !response.internalResponse) {
        if (request.responseTainting === "cors") {
        }
        if (request.responseTainting === "basic") {
          response = filterResponse(response, "basic");
        } else if (request.responseTainting === "cors") {
          response = filterResponse(response, "cors");
        } else if (request.responseTainting === "opaque") {
          response = filterResponse(response, "opaque");
        } else {
          assert(false);
        }
      }
      let internalResponse = response.status === 0 ? response : response.internalResponse;
      if (internalResponse.urlList.length === 0) {
        internalResponse.urlList.push(...request.urlList);
      }
      if (!request.timingAllowFailed) {
        response.timingAllowPassed = true;
      }
      if (response.type === "opaque" && internalResponse.status === 206 && internalResponse.rangeRequested && !request.headers.has("range")) {
        response = internalResponse = makeNetworkError();
      }
      if (response.status !== 0 && (request.method === "HEAD" || request.method === "CONNECT" || nullBodyStatus.includes(internalResponse.status))) {
        internalResponse.body = null;
        fetchParams.controller.dump = true;
      }
      if (request.integrity) {
        const processBodyError = (reason) => fetchFinale(fetchParams, makeNetworkError(reason));
        if (request.responseTainting === "opaque" || response.body == null) {
          processBodyError(response.error);
          return;
        }
        const processBody = (bytes) => {
          if (!bytesMatch(bytes, request.integrity)) {
            processBodyError("integrity mismatch");
            return;
          }
          response.body = safelyExtractBody(bytes)[0];
          fetchFinale(fetchParams, response);
        };
        await fullyReadBody(response.body, processBody, processBodyError);
      } else {
        fetchFinale(fetchParams, response);
      }
    }
    async function schemeFetch(fetchParams) {
      const { request } = fetchParams;
      const {
        protocol: scheme,
        pathname: path
      } = requestCurrentURL(request);
      switch (scheme) {
        case "about:": {
          if (path === "blank") {
            const resp = makeResponse({
              statusText: "OK",
              headersList: [
                ["content-type", "text/html;charset=utf-8"]
              ]
            });
            resp.urlList = [new URL("about:blank")];
            return resp;
          }
          return makeNetworkError("invalid path called");
        }
        case "blob:": {
          resolveObjectURL = resolveObjectURL || require("buffer").resolveObjectURL;
          const currentURL = requestCurrentURL(request);
          if (currentURL.search.length !== 0) {
            return makeNetworkError("NetworkError when attempting to fetch resource.");
          }
          const blob = resolveObjectURL(currentURL.toString());
          if (request.method !== "GET" || !isBlobLike(blob)) {
            return makeNetworkError("invalid method");
          }
          const response = makeResponse({ statusText: "OK", urlList: [currentURL] });
          response.headersList.set("content-length", `${blob.size}`);
          response.headersList.set("content-type", blob.type);
          response.body = extractBody(blob)[0];
          return response;
        }
        case "data:": {
          const currentURL = requestCurrentURL(request);
          const dataURLStruct = dataURLProcessor(currentURL);
          if (dataURLStruct === "failure") {
            return makeNetworkError("failed to fetch the data URL");
          }
          const { mimeType } = dataURLStruct;
          let contentType = `${mimeType.type}/${mimeType.subtype}`;
          const contentTypeParams = [];
          if (mimeType.parameters.size > 0) {
            contentType += ";";
          }
          for (const [key2, value] of mimeType.parameters) {
            if (value.length > 0) {
              contentTypeParams.push(`${key2}=${value}`);
            } else {
              contentTypeParams.push(key2);
            }
          }
          contentType += contentTypeParams.join(",");
          return makeResponse({
            statusText: "OK",
            headersList: [
              ["content-type", contentType]
            ],
            body: extractBody(dataURLStruct.body)[0]
          });
        }
        case "file:": {
          return makeNetworkError("not implemented... yet...");
        }
        case "http:":
        case "https:": {
          return await httpFetch(fetchParams).catch((err) => makeNetworkError(err));
        }
        default: {
          return makeNetworkError("unknown scheme");
        }
      }
    }
    function finalizeResponse(fetchParams, response) {
      fetchParams.request.done = true;
      if (fetchParams.processResponseDone != null) {
        queueMicrotask(() => fetchParams.processResponseDone(response));
      }
    }
    async function fetchFinale(fetchParams, response) {
      if (response.type === "error") {
        response.urlList = [fetchParams.request.urlList[0]];
        response.timingInfo = createOpaqueTimingInfo({
          startTime: fetchParams.timingInfo.startTime
        });
      }
      const processResponseEndOfBody = () => {
        fetchParams.request.done = true;
        if (fetchParams.processResponseEndOfBody != null) {
          queueMicrotask(() => fetchParams.processResponseEndOfBody(response));
        }
      };
      if (fetchParams.processResponse != null) {
        queueMicrotask(() => fetchParams.processResponse(response));
      }
      if (response.body == null) {
        processResponseEndOfBody();
      } else {
        const identityTransformAlgorithm = (chunk, controller) => {
          controller.enqueue(chunk);
        };
        const transformStream = new TransformStream2({
          start() {
          },
          transform: identityTransformAlgorithm,
          flush: processResponseEndOfBody
        });
        response.body = { stream: response.body.stream.pipeThrough(transformStream) };
      }
      if (fetchParams.processResponseConsumeBody != null) {
        const processBody = (nullOrBytes) => fetchParams.processResponseConsumeBody(response, nullOrBytes);
        const processBodyError = (failure) => fetchParams.processResponseConsumeBody(response, failure);
        if (response.body == null) {
          queueMicrotask(() => processBody(null));
        } else {
          await fullyReadBody(response.body, processBody, processBodyError);
        }
      }
    }
    async function httpFetch(fetchParams) {
      const request = fetchParams.request;
      let response = null;
      let actualResponse = null;
      const timingInfo = fetchParams.timingInfo;
      if (request.serviceWorkers === "all") {
      }
      if (response === null) {
        if (request.redirect === "follow") {
          request.serviceWorkers = "none";
        }
        actualResponse = response = await httpNetworkOrCacheFetch(fetchParams);
        if (request.responseTainting === "cors" && corsCheck(request, response) === "failure") {
          return makeNetworkError("cors failure");
        }
        if (TAOCheck(request, response) === "failure") {
          request.timingAllowFailed = true;
        }
      }
      if ((request.responseTainting === "opaque" || response.type === "opaque") && crossOriginResourcePolicyCheck(
        request.origin,
        request.client,
        request.destination,
        actualResponse
      ) === "blocked") {
        return makeNetworkError("blocked");
      }
      if (redirectStatus.includes(actualResponse.status)) {
        fetchParams.controller.connection.destroy();
        if (request.redirect === "error") {
          response = makeNetworkError("unexpected redirect");
        } else if (request.redirect === "manual") {
          response = actualResponse;
        } else if (request.redirect === "follow") {
          response = await httpRedirectFetch(fetchParams, response);
        } else {
          assert(false);
        }
      }
      response.timingInfo = timingInfo;
      return response;
    }
    async function httpRedirectFetch(fetchParams, response) {
      const request = fetchParams.request;
      const actualResponse = response.internalResponse ? response.internalResponse : response;
      let locationURL;
      try {
        locationURL = responseLocationURL(
          actualResponse,
          requestCurrentURL(request).hash
        );
        if (locationURL == null) {
          return response;
        }
      } catch (err) {
        return makeNetworkError(err);
      }
      if (!/^https?:/.test(locationURL.protocol)) {
        return makeNetworkError("URL scheme must be a HTTP(S) scheme");
      }
      if (request.redirectCount === 20) {
        return makeNetworkError("redirect count exceeded");
      }
      request.redirectCount += 1;
      if (request.mode === "cors" && (locationURL.username || locationURL.password) && !sameOrigin(request, locationURL)) {
        return makeNetworkError('cross origin not allowed for request mode "cors"');
      }
      if (request.responseTainting === "cors" && (locationURL.username || locationURL.password)) {
        return makeNetworkError(
          'URL cannot contain credentials for request mode "cors"'
        );
      }
      if (actualResponse.status !== 303 && request.body != null && request.body.source == null) {
        return makeNetworkError();
      }
      if ([301, 302].includes(actualResponse.status) && request.method === "POST" || actualResponse.status === 303 && !["GET", "HEAD"].includes(request.method)) {
        request.method = "GET";
        request.body = null;
        for (const headerName of requestBodyHeader) {
          request.headersList.delete(headerName);
        }
      }
      if (request.body != null) {
        assert(request.body.source);
        request.body = safelyExtractBody(request.body.source)[0];
      }
      const timingInfo = fetchParams.timingInfo;
      timingInfo.redirectEndTime = timingInfo.postRedirectStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
      if (timingInfo.redirectStartTime === 0) {
        timingInfo.redirectStartTime = timingInfo.startTime;
      }
      request.urlList.push(locationURL);
      setRequestReferrerPolicyOnRedirect(request, actualResponse);
      return mainFetch(fetchParams, true);
    }
    async function httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch = false, isNewConnectionFetch = false) {
      const request = fetchParams.request;
      let httpFetchParams = null;
      let httpRequest = null;
      let response = null;
      const httpCache = null;
      const revalidatingFlag = false;
      if (request.window === "no-window" && request.redirect === "error") {
        httpFetchParams = fetchParams;
        httpRequest = request;
      } else {
        httpRequest = makeRequest(request);
        httpFetchParams = { ...fetchParams };
        httpFetchParams.request = httpRequest;
      }
      const includeCredentials = request.credentials === "include" || request.credentials === "same-origin" && request.responseTainting === "basic";
      const contentLength = httpRequest.body ? httpRequest.body.length : null;
      let contentLengthHeaderValue = null;
      if (httpRequest.body == null && ["POST", "PUT"].includes(httpRequest.method)) {
        contentLengthHeaderValue = "0";
      }
      if (contentLength != null) {
        contentLengthHeaderValue = String(contentLength);
      }
      if (contentLengthHeaderValue != null) {
        httpRequest.headersList.append("content-length", contentLengthHeaderValue);
      }
      if (contentLength != null && httpRequest.keepalive) {
      }
      if (httpRequest.referrer instanceof URL) {
        httpRequest.headersList.append("referer", httpRequest.referrer.href);
      }
      appendRequestOriginHeader(httpRequest);
      appendFetchMetadata(httpRequest);
      if (!httpRequest.headersList.has("user-agent")) {
        httpRequest.headersList.append("user-agent", "undici");
      }
      if (httpRequest.cache === "default" && (httpRequest.headersList.has("if-modified-since") || httpRequest.headersList.has("if-none-match") || httpRequest.headersList.has("if-unmodified-since") || httpRequest.headersList.has("if-match") || httpRequest.headersList.has("if-range"))) {
        httpRequest.cache = "no-store";
      }
      if (httpRequest.cache === "no-cache" && !httpRequest.preventNoCacheCacheControlHeaderModification && !httpRequest.headersList.has("cache-control")) {
        httpRequest.headersList.append("cache-control", "max-age=0");
      }
      if (httpRequest.cache === "no-store" || httpRequest.cache === "reload") {
        if (!httpRequest.headersList.has("pragma")) {
          httpRequest.headersList.append("pragma", "no-cache");
        }
        if (!httpRequest.headersList.has("cache-control")) {
          httpRequest.headersList.append("cache-control", "no-cache");
        }
      }
      if (httpRequest.headersList.has("range")) {
        httpRequest.headersList.append("accept-encoding", "identity");
      }
      if (!httpRequest.headersList.has("accept-encoding")) {
        if (/^https:/.test(requestCurrentURL(httpRequest).protocol)) {
          httpRequest.headersList.append("accept-encoding", "br, gzip, deflate");
        } else {
          httpRequest.headersList.append("accept-encoding", "gzip, deflate");
        }
      }
      if (includeCredentials) {
      }
      if (httpCache == null) {
        httpRequest.cache = "no-store";
      }
      if (httpRequest.mode !== "no-store" && httpRequest.mode !== "reload") {
      }
      if (response == null) {
        if (httpRequest.mode === "only-if-cached") {
          return makeNetworkError("only if cached");
        }
        const forwardResponse = await httpNetworkFetch(
          httpFetchParams,
          includeCredentials,
          isNewConnectionFetch
        );
        if (!safeMethods.includes(httpRequest.method) && forwardResponse.status >= 200 && forwardResponse.status <= 399) {
        }
        if (revalidatingFlag && forwardResponse.status === 304) {
        }
        if (response == null) {
          response = forwardResponse;
        }
      }
      response.urlList = [...httpRequest.urlList];
      if (httpRequest.headersList.has("range")) {
        response.rangeRequested = true;
      }
      response.requestIncludesCredentials = includeCredentials;
      if (response.status === 407) {
        if (request.window === "no-window") {
          return makeNetworkError();
        }
        if (isCancelled(fetchParams)) {
          return makeAppropriateNetworkError(fetchParams);
        }
        return makeNetworkError("proxy authentication required");
      }
      if (response.status === 421 && !isNewConnectionFetch && (request.body == null || request.body.source != null)) {
        if (isCancelled(fetchParams)) {
          return makeAppropriateNetworkError(fetchParams);
        }
        fetchParams.controller.connection.destroy();
        response = await httpNetworkOrCacheFetch(
          fetchParams,
          isAuthenticationFetch,
          true
        );
      }
      if (isAuthenticationFetch) {
      }
      return response;
    }
    async function httpNetworkFetch(fetchParams, includeCredentials = false, forceNewConnection = false) {
      assert(!fetchParams.controller.connection || fetchParams.controller.connection.destroyed);
      fetchParams.controller.connection = {
        abort: null,
        destroyed: false,
        destroy(err) {
          var _a;
          if (!this.destroyed) {
            this.destroyed = true;
            (_a = this.abort) == null ? void 0 : _a.call(this, err ?? new DOMException3("The operation was aborted.", "AbortError"));
          }
        }
      };
      const request = fetchParams.request;
      let response = null;
      const timingInfo = fetchParams.timingInfo;
      const httpCache = null;
      if (httpCache == null) {
        request.cache = "no-store";
      }
      const newConnection = forceNewConnection ? "yes" : "no";
      if (request.mode === "websocket") {
      } else {
      }
      let requestBody = null;
      if (request.body == null && fetchParams.processRequestEndOfBody) {
        queueMicrotask(() => fetchParams.processRequestEndOfBody());
      } else if (request.body != null) {
        const processBodyChunk = async function* (bytes) {
          var _a;
          if (isCancelled(fetchParams)) {
            return;
          }
          yield bytes;
          (_a = fetchParams.processRequestBodyChunkLength) == null ? void 0 : _a.call(fetchParams, bytes.byteLength);
        };
        const processEndOfBody = () => {
          if (isCancelled(fetchParams)) {
            return;
          }
          if (fetchParams.processRequestEndOfBody) {
            fetchParams.processRequestEndOfBody();
          }
        };
        const processBodyError = (e2) => {
          if (isCancelled(fetchParams)) {
            return;
          }
          if (e2.name === "AbortError") {
            fetchParams.controller.abort();
          } else {
            fetchParams.controller.terminate(e2);
          }
        };
        requestBody = async function* () {
          try {
            for await (const bytes of request.body.stream) {
              yield* processBodyChunk(bytes);
            }
            processEndOfBody();
          } catch (err) {
            processBodyError(err);
          }
        }();
      }
      try {
        const { body: body2, status, statusText, headersList } = await dispatch({ body: requestBody });
        const iterator = body2[Symbol.asyncIterator]();
        fetchParams.controller.next = () => iterator.next();
        response = makeResponse({ status, statusText, headersList });
      } catch (err) {
        if (err.name === "AbortError") {
          fetchParams.controller.connection.destroy();
          return makeAppropriateNetworkError(fetchParams);
        }
        return makeNetworkError(err);
      }
      const pullAlgorithm = () => {
        fetchParams.controller.resume();
      };
      const cancelAlgorithm = () => {
        fetchParams.controller.abort();
      };
      if (!ReadableStream3) {
        ReadableStream3 = require("stream/web").ReadableStream;
      }
      const stream = new ReadableStream3(
        {
          async start(controller) {
            fetchParams.controller.controller = controller;
          },
          async pull(controller) {
            await pullAlgorithm(controller);
          },
          async cancel(reason) {
            await cancelAlgorithm(reason);
          }
        },
        { highWaterMark: 0 }
      );
      response.body = { stream };
      fetchParams.controller.on("terminated", onAborted);
      fetchParams.controller.resume = async () => {
        while (true) {
          let bytes;
          try {
            const { done, value } = await fetchParams.controller.next();
            if (isAborted(fetchParams)) {
              break;
            }
            bytes = done ? void 0 : value;
          } catch (err) {
            if (fetchParams.controller.ended && !timingInfo.encodedBodySize) {
              bytes = void 0;
            } else {
              bytes = err;
            }
          }
          if (bytes === void 0) {
            try {
              fetchParams.controller.controller.close();
            } catch (err) {
              if (!/Controller is already closed/.test(err)) {
                throw err;
              }
            }
            finalizeResponse(fetchParams, response);
            return;
          }
          timingInfo.decodedBodySize += (bytes == null ? void 0 : bytes.byteLength) ?? 0;
          if (isErrorLike(bytes)) {
            fetchParams.controller.terminate(bytes);
            return;
          }
          fetchParams.controller.controller.enqueue(new Uint8Array(bytes));
          if (isErrored(stream)) {
            fetchParams.controller.terminate();
            return;
          }
          if (!fetchParams.controller.controller.desiredSize) {
            return;
          }
        }
      };
      function onAborted(reason) {
        if (isAborted(fetchParams)) {
          response.aborted = true;
          if (isReadable(stream)) {
            fetchParams.controller.controller.error(
              new DOMException3("The operation was aborted.", "AbortError")
            );
          }
        } else {
          if (isReadable(stream)) {
            fetchParams.controller.controller.error(new TypeError("terminated", {
              cause: isErrorLike(reason) ? reason : void 0
            }));
          }
        }
        fetchParams.controller.connection.destroy();
      }
      return response;
      async function dispatch({ body: body2 }) {
        const url = requestCurrentURL(request);
        return new Promise((resolve, reject) => fetchParams.controller.dispatcher.dispatch(
          {
            path: url.pathname + url.search,
            origin: url.origin,
            method: request.method,
            body: fetchParams.controller.dispatcher.isMockActive ? request.body && request.body.source : body2,
            headers: [...request.headersList].flat(),
            maxRedirections: 0,
            bodyTimeout: 3e5,
            headersTimeout: 3e5
          },
          {
            body: null,
            abort: null,
            onConnect(abort) {
              const { connection } = fetchParams.controller;
              if (connection.destroyed) {
                abort(new DOMException3("The operation was aborted.", "AbortError"));
              } else {
                fetchParams.controller.on("terminated", abort);
                this.abort = connection.abort = abort;
              }
            },
            onHeaders(status, headersList, resume, statusText) {
              if (status < 200) {
                return;
              }
              let codings = [];
              let location = "";
              const headers = new Headers4();
              for (let n = 0; n < headersList.length; n += 2) {
                const key2 = headersList[n + 0].toString("latin1");
                const val = headersList[n + 1].toString("latin1");
                if (key2.toLowerCase() === "content-encoding") {
                  codings = val.split(",").map((x2) => x2.trim());
                } else if (key2.toLowerCase() === "location") {
                  location = val;
                }
                headers.append(key2, val);
              }
              this.body = new Readable2({ read: resume });
              const decoders = [];
              if (request.method !== "HEAD" && request.method !== "CONNECT" && !nullBodyStatus.includes(status) && !(request.redirect === "follow" && location)) {
                for (const coding of codings) {
                  if (/(x-)?gzip/.test(coding)) {
                    decoders.push(zlib.createGunzip());
                  } else if (/(x-)?deflate/.test(coding)) {
                    decoders.push(zlib.createInflate());
                  } else if (coding === "br") {
                    decoders.push(zlib.createBrotliDecompress());
                  } else {
                    decoders.length = 0;
                    break;
                  }
                }
              }
              resolve({
                status,
                statusText,
                headersList: headers[kHeadersList],
                body: decoders.length ? pipeline2(this.body, ...decoders, () => {
                }) : this.body.on("error", () => {
                })
              });
              return true;
            },
            onData(chunk) {
              if (fetchParams.controller.dump) {
                return;
              }
              const bytes = chunk;
              timingInfo.encodedBodySize += bytes.byteLength;
              return this.body.push(bytes);
            },
            onComplete() {
              if (this.abort) {
                fetchParams.controller.off("terminated", this.abort);
              }
              fetchParams.controller.ended = true;
              this.body.push(null);
            },
            onError(error2) {
              var _a;
              if (this.abort) {
                fetchParams.controller.off("terminated", this.abort);
              }
              (_a = this.body) == null ? void 0 : _a.destroy(error2);
              fetchParams.controller.terminate(error2);
              reject(error2);
            }
          }
        ));
      }
    }
    module2.exports = fetch3;
  }
});

// node_modules/undici/index.js
var require_undici = __commonJS({
  "node_modules/undici/index.js"(exports, module2) {
    "use strict";
    init_shims();
    var Client = require_client();
    var Dispatcher = require_dispatcher();
    var errors = require_errors();
    var Pool = require_pool();
    var BalancedPool = require_balanced_pool();
    var Agent = require_agent();
    var util = require_util();
    var { InvalidArgumentError } = errors;
    var api = require_api();
    var buildConnector = require_connect();
    var MockClient = require_mock_client();
    var MockAgent = require_mock_agent();
    var MockPool = require_mock_pool();
    var mockErrors = require_mock_errors();
    var ProxyAgent = require_proxy_agent();
    var { getGlobalDispatcher, setGlobalDispatcher } = require_global();
    var nodeVersion = process.versions.node.split(".");
    var nodeMajor = Number(nodeVersion[0]);
    var nodeMinor = Number(nodeVersion[1]);
    Object.assign(Dispatcher.prototype, api);
    module2.exports.Dispatcher = Dispatcher;
    module2.exports.Client = Client;
    module2.exports.Pool = Pool;
    module2.exports.BalancedPool = BalancedPool;
    module2.exports.Agent = Agent;
    module2.exports.ProxyAgent = ProxyAgent;
    module2.exports.buildConnector = buildConnector;
    module2.exports.errors = errors;
    function makeDispatcher(fn) {
      return (url, opts, handler) => {
        if (typeof opts === "function") {
          handler = opts;
          opts = null;
        }
        if (!url || typeof url !== "string" && typeof url !== "object" && !(url instanceof URL)) {
          throw new InvalidArgumentError("invalid url");
        }
        if (opts != null && typeof opts !== "object") {
          throw new InvalidArgumentError("invalid opts");
        }
        if (opts && opts.path != null) {
          if (typeof opts.path !== "string") {
            throw new InvalidArgumentError("invalid opts.path");
          }
          let path = opts.path;
          if (!opts.path.startsWith("/")) {
            path = `/${path}`;
          }
          url = new URL(util.parseOrigin(url).origin + path);
        } else {
          if (!opts) {
            opts = typeof url === "object" ? url : {};
          }
          url = util.parseURL(url);
        }
        const { agent, dispatcher = getGlobalDispatcher() } = opts;
        if (agent) {
          throw new InvalidArgumentError("unsupported opts.agent. Did you mean opts.client?");
        }
        return fn.call(dispatcher, {
          ...opts,
          origin: url.origin,
          path: url.search ? `${url.pathname}${url.search}` : url.pathname,
          method: opts.method || (opts.body ? "PUT" : "GET")
        }, handler);
      };
    }
    module2.exports.setGlobalDispatcher = setGlobalDispatcher;
    module2.exports.getGlobalDispatcher = getGlobalDispatcher;
    if (nodeMajor > 16 || nodeMajor === 16 && nodeMinor >= 8) {
      let fetchImpl = null;
      module2.exports.fetch = async function fetch3(resource) {
        if (!fetchImpl) {
          fetchImpl = require_fetch();
        }
        const dispatcher = arguments[1] && arguments[1].dispatcher || getGlobalDispatcher();
        return fetchImpl.apply(dispatcher, arguments);
      };
      module2.exports.Headers = require_headers().Headers;
      module2.exports.Response = require_response().Response;
      module2.exports.Request = require_request2().Request;
      module2.exports.FormData = require_formdata().FormData;
      module2.exports.File = require_file().File;
    }
    module2.exports.request = makeDispatcher(api.request);
    module2.exports.stream = makeDispatcher(api.stream);
    module2.exports.pipeline = makeDispatcher(api.pipeline);
    module2.exports.connect = makeDispatcher(api.connect);
    module2.exports.upgrade = makeDispatcher(api.upgrade);
    module2.exports.MockClient = MockClient;
    module2.exports.MockPool = MockPool;
    module2.exports.MockAgent = MockAgent;
    module2.exports.mockErrors = mockErrors;
  }
});

// node_modules/data-uri-to-buffer/dist/index.js
var init_dist = __esm({
  "node_modules/data-uri-to-buffer/dist/index.js"() {
    init_shims();
  }
});

// node_modules/web-streams-polyfill/dist/ponyfill.es2018.js
var require_ponyfill_es2018 = __commonJS({
  "node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"(exports, module2) {
    init_shims();
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.WebStreamsPolyfill = {}));
    })(exports, function(exports2) {
      "use strict";
      const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
      function noop3() {
        return void 0;
      }
      function getGlobals() {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else if (typeof global !== "undefined") {
          return global;
        }
        return void 0;
      }
      const globals2 = getGlobals();
      function typeIsObject(x2) {
        return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
      }
      const rethrowAssertionErrorRejection = noop3;
      const originalPromise = Promise;
      const originalPromiseThen = Promise.prototype.then;
      const originalPromiseResolve = Promise.resolve.bind(originalPromise);
      const originalPromiseReject = Promise.reject.bind(originalPromise);
      function newPromise(executor) {
        return new originalPromise(executor);
      }
      function promiseResolvedWith(value) {
        return originalPromiseResolve(value);
      }
      function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
      }
      function PerformPromiseThen(promise, onFulfilled, onRejected) {
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
      }
      function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
      }
      function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
      }
      function uponRejection(promise, onRejected) {
        uponPromise(promise, void 0, onRejected);
      }
      function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
      }
      function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
      }
      const queueMicrotask2 = (() => {
        const globalQueueMicrotask = globals2 && globals2.queueMicrotask;
        if (typeof globalQueueMicrotask === "function") {
          return globalQueueMicrotask;
        }
        const resolvedPromise = promiseResolvedWith(void 0);
        return (fn) => PerformPromiseThen(resolvedPromise, fn);
      })();
      function reflectCall(F2, V, args) {
        if (typeof F2 !== "function") {
          throw new TypeError("Argument is not a function");
        }
        return Function.prototype.apply.call(F2, V, args);
      }
      function promiseCall(F2, V, args) {
        try {
          return promiseResolvedWith(reflectCall(F2, V, args));
        } catch (value) {
          return promiseRejectedWith(value);
        }
      }
      const QUEUE_MAX_ARRAY_SIZE = 16384;
      class SimpleQueue {
        constructor() {
          this._cursor = 0;
          this._size = 0;
          this._front = {
            _elements: [],
            _next: void 0
          };
          this._back = this._front;
          this._cursor = 0;
          this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(element) {
          const oldBack = this._back;
          let newBack = oldBack;
          if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
              _elements: [],
              _next: void 0
            };
          }
          oldBack._elements.push(element);
          if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
          }
          ++this._size;
        }
        shift() {
          const oldFront = this._front;
          let newFront = oldFront;
          const oldCursor = this._cursor;
          let newCursor = oldCursor + 1;
          const elements = oldFront._elements;
          const element = elements[oldCursor];
          if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
          }
          --this._size;
          this._cursor = newCursor;
          if (oldFront !== newFront) {
            this._front = newFront;
          }
          elements[oldCursor] = void 0;
          return element;
        }
        forEach(callback) {
          let i2 = this._cursor;
          let node = this._front;
          let elements = node._elements;
          while (i2 !== elements.length || node._next !== void 0) {
            if (i2 === elements.length) {
              node = node._next;
              elements = node._elements;
              i2 = 0;
              if (elements.length === 0) {
                break;
              }
            }
            callback(elements[i2]);
            ++i2;
          }
        }
        peek() {
          const front = this._front;
          const cursor = this._cursor;
          return front._elements[cursor];
        }
      }
      function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === "readable") {
          defaultReaderClosedPromiseInitialize(reader);
        } else if (stream._state === "closed") {
          defaultReaderClosedPromiseInitializeAsResolved(reader);
        } else {
          defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
        }
      }
      function ReadableStreamReaderGenericCancel(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
      }
      function ReadableStreamReaderGenericRelease(reader) {
        if (reader._ownerReadableStream._state === "readable") {
          defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        } else {
          defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        }
        reader._ownerReadableStream._reader = void 0;
        reader._ownerReadableStream = void 0;
      }
      function readerLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released reader");
      }
      function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject) => {
          reader._closedPromise_resolve = resolve;
          reader._closedPromise_reject = reject;
        });
      }
      function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
      }
      function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
      }
      function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
      }
      function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === void 0) {
          return;
        }
        reader._closedPromise_resolve(void 0);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
      const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
      const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
      const PullSteps = SymbolPolyfill("[[PullSteps]]");
      const NumberIsFinite = Number.isFinite || function(x2) {
        return typeof x2 === "number" && isFinite(x2);
      };
      const MathTrunc = Math.trunc || function(v) {
        return v < 0 ? Math.ceil(v) : Math.floor(v);
      };
      function isDictionary(x2) {
        return typeof x2 === "object" || typeof x2 === "function";
      }
      function assertDictionary(obj, context) {
        if (obj !== void 0 && !isDictionary(obj)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertFunction(x2, context) {
        if (typeof x2 !== "function") {
          throw new TypeError(`${context} is not a function.`);
        }
      }
      function isObject(x2) {
        return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
      }
      function assertObject(x2, context) {
        if (!isObject(x2)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertRequiredArgument(x2, position, context) {
        if (x2 === void 0) {
          throw new TypeError(`Parameter ${position} is required in '${context}'.`);
        }
      }
      function assertRequiredField(x2, field, context) {
        if (x2 === void 0) {
          throw new TypeError(`${field} is required in '${context}'.`);
        }
      }
      function convertUnrestrictedDouble(value) {
        return Number(value);
      }
      function censorNegativeZero(x2) {
        return x2 === 0 ? 0 : x2;
      }
      function integerPart(x2) {
        return censorNegativeZero(MathTrunc(x2));
      }
      function convertUnsignedLongLongWithEnforceRange(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x2 = Number(value);
        x2 = censorNegativeZero(x2);
        if (!NumberIsFinite(x2)) {
          throw new TypeError(`${context} is not a finite number`);
        }
        x2 = integerPart(x2);
        if (x2 < lowerBound || x2 > upperBound) {
          throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
        }
        if (!NumberIsFinite(x2) || x2 === 0) {
          return 0;
        }
        return x2;
      }
      function assertReadableStream(x2, context) {
        if (!IsReadableStream(x2)) {
          throw new TypeError(`${context} is not a ReadableStream.`);
        }
      }
      function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
      }
      function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
      }
      function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) {
          readRequest._closeSteps();
        } else {
          readRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
      }
      function ReadableStreamHasDefaultReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamDefaultReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamDefaultReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readRequests = new SimpleQueue();
        }
        get closed() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("read"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: void 0, done: true }),
            _errorSteps: (e2) => rejectPromise(e2)
          };
          ReadableStreamDefaultReaderRead(this, readRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readRequests.length > 0) {
            throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
          }
          ReadableStreamReaderGenericRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamDefaultReader",
          configurable: true
        });
      }
      function IsReadableStreamDefaultReader(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
          return false;
        }
        return x2 instanceof ReadableStreamDefaultReader;
      }
      function ReadableStreamDefaultReaderRead(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "closed") {
          readRequest._closeSteps();
        } else if (stream._state === "errored") {
          readRequest._errorSteps(stream._storedError);
        } else {
          stream._readableStreamController[PullSteps](readRequest);
        }
      }
      function defaultReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
      }
      const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel) {
          this._ongoingPromise = void 0;
          this._isFinished = false;
          this._reader = reader;
          this._preventCancel = preventCancel;
        }
        next() {
          const nextSteps = () => this._nextSteps();
          this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
          return this._ongoingPromise;
        }
        return(value) {
          const returnSteps = () => this._returnSteps(value);
          return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
        }
        _nextSteps() {
          if (this._isFinished) {
            return Promise.resolve({ value: void 0, done: true });
          }
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("iterate"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => {
              this._ongoingPromise = void 0;
              queueMicrotask2(() => resolvePromise({ value: chunk, done: false }));
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              resolvePromise({ value: void 0, done: true });
            },
            _errorSteps: (reason) => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              rejectPromise(reason);
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promise;
        }
        _returnSteps(value) {
          if (this._isFinished) {
            return Promise.resolve({ value, done: true });
          }
          this._isFinished = true;
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("finish iterating"));
          }
          if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, () => ({ value, done: true }));
          }
          ReadableStreamReaderGenericRelease(reader);
          return promiseResolvedWith({ value, done: true });
        }
      }
      const ReadableStreamAsyncIteratorPrototype = {
        next() {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
          }
          return this._asyncIteratorImpl.next();
        },
        return(value) {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
          }
          return this._asyncIteratorImpl.return(value);
        }
      };
      if (AsyncIteratorPrototype !== void 0) {
        Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
      }
      function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
      }
      function IsReadableStreamAsyncIterator(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
          return false;
        }
        try {
          return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
        } catch (_a) {
          return false;
        }
      }
      function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
      }
      const NumberIsNaN = Number.isNaN || function(x2) {
        return x2 !== x2;
      };
      function CreateArrayFromList(elements) {
        return elements.slice();
      }
      function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
      }
      function TransferArrayBuffer(O) {
        return O;
      }
      function IsDetachedBuffer(O) {
        return false;
      }
      function ArrayBufferSlice(buffer, begin, end) {
        if (buffer.slice) {
          return buffer.slice(begin, end);
        }
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes(slice, 0, buffer, begin, length);
        return slice;
      }
      function IsNonNegativeNumber(v) {
        if (typeof v !== "number") {
          return false;
        }
        if (NumberIsNaN(v)) {
          return false;
        }
        if (v < 0) {
          return false;
        }
        return true;
      }
      function CloneAsUint8Array(O) {
        const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
        return new Uint8Array(buffer);
      }
      function DequeueValue(container) {
        const pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) {
          container._queueTotalSize = 0;
        }
        return pair.value;
      }
      function EnqueueValueWithSize(container, value, size) {
        if (!IsNonNegativeNumber(size) || size === Infinity) {
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        }
        container._queue.push({ value, size });
        container._queueTotalSize += size;
      }
      function PeekQueueValue(container) {
        const pair = container._queue.peek();
        return pair.value;
      }
      function ResetQueue(container) {
        container._queue = new SimpleQueue();
        container._queueTotalSize = 0;
      }
      class ReadableStreamBYOBRequest {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("view");
          }
          return this._view;
        }
        respond(bytesWritten) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respond");
          }
          assertRequiredArgument(bytesWritten, 1, "respond");
          bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(this._view.buffer))
            ;
          ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respondWithNewView");
          }
          assertRequiredArgument(view, 1, "respondWithNewView");
          if (!ArrayBuffer.isView(view)) {
            throw new TypeError("You can only respond with array buffer views");
          }
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(view.buffer))
            ;
          ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        }
      }
      Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamBYOBRequest",
          configurable: true
        });
      }
      class ReadableByteStreamController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("byobRequest");
          }
          return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        get desiredSize() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("desiredSize");
          }
          return ReadableByteStreamControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("close");
          }
          if (this._closeRequested) {
            throw new TypeError("The stream has already been closed; do not close it again!");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
          }
          ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("enqueue");
          }
          assertRequiredArgument(chunk, 1, "enqueue");
          if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError("chunk must be an array buffer view");
          }
          if (chunk.byteLength === 0) {
            throw new TypeError("chunk must have non-zero byteLength");
          }
          if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
          }
          if (this._closeRequested) {
            throw new TypeError("stream is closed or draining");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
          }
          ReadableByteStreamControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("error");
          }
          ReadableByteStreamControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ReadableByteStreamControllerClearPendingPullIntos(this);
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableByteStreamControllerClearAlgorithms(this);
          return result;
        }
        [PullSteps](readRequest) {
          const stream = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain(this);
            const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
            readRequest._chunkSteps(view);
            return;
          }
          const autoAllocateChunkSize = this._autoAllocateChunkSize;
          if (autoAllocateChunkSize !== void 0) {
            let buffer;
            try {
              buffer = new ArrayBuffer(autoAllocateChunkSize);
            } catch (bufferE) {
              readRequest._errorSteps(bufferE);
              return;
            }
            const pullIntoDescriptor = {
              buffer,
              bufferByteLength: autoAllocateChunkSize,
              byteOffset: 0,
              byteLength: autoAllocateChunkSize,
              bytesFilled: 0,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default"
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
          }
          ReadableStreamAddReadRequest(stream, readRequest);
          ReadableByteStreamControllerCallPullIfNeeded(this);
        }
      }
      Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableByteStreamController",
          configurable: true
        });
      }
      function IsReadableByteStreamController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream")) {
          return false;
        }
        return x2 instanceof ReadableByteStreamController;
      }
      function IsReadableStreamBYOBRequest(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController")) {
          return false;
        }
        return x2 instanceof ReadableStreamBYOBRequest;
      }
      function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
        }, (e2) => {
          ReadableByteStreamControllerError(controller, e2);
        });
      }
      function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
      }
      function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        let done = false;
        if (stream._state === "closed") {
          done = true;
        }
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === "default") {
          ReadableStreamFulfillReadRequest(stream, filledView, done);
        } else {
          ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
        }
      }
      function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
      }
      function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer, byteOffset, byteLength });
        controller._queueTotalSize += byteLength;
      }
      function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        const elementSize = pullIntoDescriptor.elementSize;
        const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        if (maxAlignedBytes > currentAlignedBytes) {
          totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
          ready = true;
        }
        const queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
          const headOfQueue = queue.peek();
          const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
          const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
          if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
          } else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
          }
          controller._queueTotalSize -= bytesToCopy;
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
          totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
      }
      function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
      }
      function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(controller._controlledReadableByteStream);
        } else {
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
      }
      function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) {
          return;
        }
        controller._byobRequest._associatedReadableByteStreamController = void 0;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
      }
      function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        while (controller._pendingPullIntos.length > 0) {
          if (controller._queueTotalSize === 0) {
            return;
          }
          const pullIntoDescriptor = controller._pendingPullIntos.peek();
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
        const stream = controller._controlledReadableByteStream;
        let elementSize = 1;
        if (view.constructor !== DataView) {
          elementSize = view.constructor.BYTES_PER_ELEMENT;
        }
        const ctor = view.constructor;
        const buffer = TransferArrayBuffer(view.buffer);
        const pullIntoDescriptor = {
          buffer,
          bufferByteLength: buffer.byteLength,
          byteOffset: view.byteOffset,
          byteLength: view.byteLength,
          bytesFilled: 0,
          elementSize,
          viewConstructor: ctor,
          readerType: "byob"
        };
        if (controller._pendingPullIntos.length > 0) {
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          return;
        }
        if (stream._state === "closed") {
          const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
          readIntoRequest._closeSteps(emptyView);
          return;
        }
        if (controller._queueTotalSize > 0) {
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
          }
          if (controller._closeRequested) {
            const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e2);
            readIntoRequest._errorSteps(e2);
            return;
          }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) {
          while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
          return;
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
          const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
      }
      function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          ReadableByteStreamControllerRespondInClosedState(controller);
        } else {
          ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
      }
      function ReadableByteStreamControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return false;
        }
        if (controller._closeRequested) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          return true;
        }
        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
      }
      function ReadableByteStreamControllerClose(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        if (controller._queueTotalSize > 0) {
          controller._closeRequested = true;
          return;
        }
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (firstPendingPullInto.bytesFilled > 0) {
            const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e2);
            throw e2;
          }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
      }
      function ReadableByteStreamControllerEnqueue(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        const buffer = chunk.buffer;
        const byteOffset = chunk.byteOffset;
        const byteLength = chunk.byteLength;
        const transferredBuffer = TransferArrayBuffer(buffer);
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (IsDetachedBuffer(firstPendingPullInto.buffer))
            ;
          firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
        }
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        if (ReadableStreamHasDefaultReader(stream)) {
          if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          } else {
            if (controller._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
            }
            const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
          }
        } else if (ReadableStreamHasBYOBReader(stream)) {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        } else {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerError(controller, e2) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return;
        }
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e2);
      }
      function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
          SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
          controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
      }
      function ReadableByteStreamControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (bytesWritten !== 0) {
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
          }
        } else {
          if (bytesWritten === 0) {
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          }
          if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
            throw new RangeError("bytesWritten out of range");
          }
        }
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
      }
      function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (view.byteLength !== 0) {
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
          }
        } else {
          if (view.byteLength === 0) {
            throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
          }
        }
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
          throw new RangeError("The region specified by view does not match byobRequest");
        }
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        }
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
          throw new RangeError("The region specified by view is larger than byobRequest");
        }
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
      }
      function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        controller._queue = controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = true;
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }, (r2) => {
          ReadableByteStreamControllerError(controller, r2);
        });
      }
      function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        const controller = Object.create(ReadableByteStreamController.prototype);
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith(void 0);
        let cancelAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingByteSource.start !== void 0) {
          startAlgorithm = () => underlyingByteSource.start(controller);
        }
        if (underlyingByteSource.pull !== void 0) {
          pullAlgorithm = () => underlyingByteSource.pull(controller);
        }
        if (underlyingByteSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
        }
        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        }
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
      }
      function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
      }
      function byobRequestBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
      }
      function byteStreamControllerBrandCheckException(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
      }
      function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
      }
      function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
      }
      function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
          readIntoRequest._closeSteps(chunk);
        } else {
          readIntoRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
      }
      function ReadableStreamHasBYOBReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamBYOBReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamBYOBReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          if (!IsReadableByteStreamController(stream._readableStreamController)) {
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readIntoRequests = new SimpleQueue();
        }
        get closed() {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read(view) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("read"));
          }
          if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(new TypeError("view must be an array buffer view"));
          }
          if (view.byteLength === 0) {
            return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
          }
          if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
          }
          if (IsDetachedBuffer(view.buffer))
            ;
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readIntoRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
            _errorSteps: (e2) => rejectPromise(e2)
          };
          ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readIntoRequests.length > 0) {
            throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
          }
          ReadableStreamReaderGenericRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamBYOBReader",
          configurable: true
        });
      }
      function IsReadableStreamBYOBReader(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
          return false;
        }
        return x2 instanceof ReadableStreamBYOBReader;
      }
      function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "errored") {
          readIntoRequest._errorSteps(stream._storedError);
        } else {
          ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
        }
      }
      function byobReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
      }
      function ExtractHighWaterMark(strategy, defaultHWM) {
        const { highWaterMark } = strategy;
        if (highWaterMark === void 0) {
          return defaultHWM;
        }
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
          throw new RangeError("Invalid highWaterMark");
        }
        return highWaterMark;
      }
      function ExtractSizeAlgorithm(strategy) {
        const { size } = strategy;
        if (!size) {
          return () => 1;
        }
        return size;
      }
      function convertQueuingStrategy(init2, context) {
        assertDictionary(init2, context);
        const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
        const size = init2 === null || init2 === void 0 ? void 0 : init2.size;
        return {
          highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
          size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
        };
      }
      function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return (chunk) => convertUnrestrictedDouble(fn(chunk));
      }
      function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        const abort = original === null || original === void 0 ? void 0 : original.abort;
        const close = original === null || original === void 0 ? void 0 : original.close;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        const write = original === null || original === void 0 ? void 0 : original.write;
        return {
          abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
          close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
          write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
          type
        };
      }
      function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return () => promiseCall(fn, original, []);
      }
      function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      function assertWritableStream(x2, context) {
        if (!IsWritableStream(x2)) {
          throw new TypeError(`${context} is not a WritableStream.`);
        }
      }
      function isAbortSignal2(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          return typeof value.aborted === "boolean";
        } catch (_a) {
          return false;
        }
      }
      const supportsAbortController = typeof AbortController === "function";
      function createAbortController() {
        if (supportsAbortController) {
          return new AbortController();
        }
        return void 0;
      }
      class WritableStream2 {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
          if (rawUnderlyingSink === void 0) {
            rawUnderlyingSink = null;
          } else {
            assertObject(rawUnderlyingSink, "First parameter");
          }
          const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
          const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
          InitializeWritableStream(this);
          const type = underlyingSink.type;
          if (type !== void 0) {
            throw new RangeError("Invalid type is specified");
          }
          const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
          const highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        get locked() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("locked");
          }
          return IsWritableStreamLocked(this);
        }
        abort(reason = void 0) {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("abort"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
          }
          return WritableStreamAbort(this, reason);
        }
        close() {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("close"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
          }
          if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamClose(this);
        }
        getWriter() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("getWriter");
          }
          return AcquireWritableStreamDefaultWriter(this);
        }
      }
      Object.defineProperties(WritableStream2.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(WritableStream2.prototype, SymbolPolyfill.toStringTag, {
          value: "WritableStream",
          configurable: true
        });
      }
      function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
      }
      function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(WritableStream2.prototype);
        InitializeWritableStream(stream);
        const controller = Object.create(WritableStreamDefaultController.prototype);
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function InitializeWritableStream(stream) {
        stream._state = "writable";
        stream._storedError = void 0;
        stream._writer = void 0;
        stream._writableStreamController = void 0;
        stream._writeRequests = new SimpleQueue();
        stream._inFlightWriteRequest = void 0;
        stream._closeRequest = void 0;
        stream._inFlightCloseRequest = void 0;
        stream._pendingAbortRequest = void 0;
        stream._backpressure = false;
      }
      function IsWritableStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")) {
          return false;
        }
        return x2 instanceof WritableStream2;
      }
      function IsWritableStreamLocked(stream) {
        if (stream._writer === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamAbort(stream, reason) {
        var _a;
        if (stream._state === "closed" || stream._state === "errored") {
          return promiseResolvedWith(void 0);
        }
        stream._writableStreamController._abortReason = reason;
        (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseResolvedWith(void 0);
        }
        if (stream._pendingAbortRequest !== void 0) {
          return stream._pendingAbortRequest._promise;
        }
        let wasAlreadyErroring = false;
        if (state === "erroring") {
          wasAlreadyErroring = true;
          reason = void 0;
        }
        const promise = newPromise((resolve, reject) => {
          stream._pendingAbortRequest = {
            _promise: void 0,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
          };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
          WritableStreamStartErroring(stream, reason);
        }
        return promise;
      }
      function WritableStreamClose(stream) {
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        }
        const promise = newPromise((resolve, reject) => {
          const closeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== void 0 && stream._backpressure && state === "writable") {
          defaultWriterReadyPromiseResolve(writer);
        }
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
      }
      function WritableStreamAddWriteRequest(stream) {
        const promise = newPromise((resolve, reject) => {
          const writeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._writeRequests.push(writeRequest);
        });
        return promise;
      }
      function WritableStreamDealWithRejection(stream, error2) {
        const state = stream._state;
        if (state === "writable") {
          WritableStreamStartErroring(stream, error2);
          return;
        }
        WritableStreamFinishErroring(stream);
      }
      function WritableStreamStartErroring(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = "erroring";
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== void 0) {
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        }
        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
          WritableStreamFinishErroring(stream);
        }
      }
      function WritableStreamFinishErroring(stream) {
        stream._state = "errored";
        stream._writableStreamController[ErrorSteps]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach((writeRequest) => {
          writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === void 0) {
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = void 0;
        if (abortRequest._wasAlreadyErroring) {
          abortRequest._reject(storedError);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, () => {
          abortRequest._resolve();
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        }, (reason) => {
          abortRequest._reject(reason);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        });
      }
      function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(void 0);
        stream._inFlightWriteRequest = void 0;
      }
      function WritableStreamFinishInFlightWriteWithError(stream, error2) {
        stream._inFlightWriteRequest._reject(error2);
        stream._inFlightWriteRequest = void 0;
        WritableStreamDealWithRejection(stream, error2);
      }
      function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(void 0);
        stream._inFlightCloseRequest = void 0;
        const state = stream._state;
        if (state === "erroring") {
          stream._storedError = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = void 0;
          }
        }
        stream._state = "closed";
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseResolve(writer);
        }
      }
      function WritableStreamFinishInFlightCloseWithError(stream, error2) {
        stream._inFlightCloseRequest._reject(error2);
        stream._inFlightCloseRequest = void 0;
        if (stream._pendingAbortRequest !== void 0) {
          stream._pendingAbortRequest._reject(error2);
          stream._pendingAbortRequest = void 0;
        }
        WritableStreamDealWithRejection(stream, error2);
      }
      function WritableStreamCloseQueuedOrInFlight(stream) {
        if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamHasOperationMarkedInFlight(stream) {
        if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = void 0;
      }
      function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
      }
      function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== void 0) {
          stream._closeRequest._reject(stream._storedError);
          stream._closeRequest = void 0;
        }
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseReject(writer, stream._storedError);
        }
      }
      function WritableStreamUpdateBackpressure(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== void 0 && backpressure !== stream._backpressure) {
          if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
          } else {
            defaultWriterReadyPromiseResolve(writer);
          }
        }
        stream._backpressure = backpressure;
      }
      class WritableStreamDefaultWriter {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
          assertWritableStream(stream, "First parameter");
          if (IsWritableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          }
          this._ownerWritableStream = stream;
          stream._writer = this;
          const state = stream._state;
          if (state === "writable") {
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
              defaultWriterReadyPromiseInitialize(this);
            } else {
              defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "erroring") {
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "closed") {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
          } else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
          }
        }
        get closed() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        get desiredSize() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("desiredSize");
          }
          if (this._ownerWritableStream === void 0) {
            throw defaultWriterLockException("desiredSize");
          }
          return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        get ready() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
          }
          return this._readyPromise;
        }
        abort(reason = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("abort"));
          }
          return WritableStreamDefaultWriterAbort(this, reason);
        }
        close() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("close"));
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("close"));
          }
          if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamDefaultWriterClose(this);
        }
        releaseLock() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("releaseLock");
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return;
          }
          WritableStreamDefaultWriterRelease(this);
        }
        write(chunk = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("write"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          return WritableStreamDefaultWriterWrite(this, chunk);
        }
      }
      Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
          value: "WritableStreamDefaultWriter",
          configurable: true
        });
      }
      function IsWritableStreamDefaultWriter(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
          return false;
        }
        return x2 instanceof WritableStreamDefaultWriter;
      }
      function WritableStreamDefaultWriterAbort(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
      }
      function WritableStreamDefaultWriterClose(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
      }
      function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        return WritableStreamDefaultWriterClose(writer);
      }
      function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error2) {
        if (writer._closedPromiseState === "pending") {
          defaultWriterClosedPromiseReject(writer, error2);
        } else {
          defaultWriterClosedPromiseResetToRejected(writer, error2);
        }
      }
      function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error2) {
        if (writer._readyPromiseState === "pending") {
          defaultWriterReadyPromiseReject(writer, error2);
        } else {
          defaultWriterReadyPromiseResetToRejected(writer, error2);
        }
      }
      function WritableStreamDefaultWriterGetDesiredSize(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === "errored" || state === "erroring") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
      }
      function WritableStreamDefaultWriterRelease(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
        stream._writer = void 0;
        writer._ownerWritableStream = void 0;
      }
      function WritableStreamDefaultWriterWrite(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream) {
          return promiseRejectedWith(defaultWriterLockException("write to"));
        }
        const state = stream._state;
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
        }
        if (state === "erroring") {
          return promiseRejectedWith(stream._storedError);
        }
        const promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
      }
      const closeSentinel = {};
      class WritableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("abortReason");
          }
          return this._abortReason;
        }
        get signal() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("signal");
          }
          if (this._abortController === void 0) {
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          }
          return this._abortController.signal;
        }
        error(e2 = void 0) {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("error");
          }
          const state = this._controlledWritableStream._state;
          if (state !== "writable") {
            return;
          }
          WritableStreamDefaultControllerError(this, e2);
        }
        [AbortSteps](reason) {
          const result = this._abortAlgorithm(reason);
          WritableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        [ErrorSteps]() {
          ResetQueue(this);
        }
      }
      Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: { enumerable: true },
        signal: { enumerable: true },
        error: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
          value: "WritableStreamDefaultController",
          configurable: true
        });
      }
      function IsWritableStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")) {
          return false;
        }
        return x2 instanceof WritableStreamDefaultController;
      }
      function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._abortReason = void 0;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, () => {
          controller._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (r2) => {
          controller._started = true;
          WritableStreamDealWithRejection(stream, r2);
        });
      }
      function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(WritableStreamDefaultController.prototype);
        let startAlgorithm = () => void 0;
        let writeAlgorithm = () => promiseResolvedWith(void 0);
        let closeAlgorithm = () => promiseResolvedWith(void 0);
        let abortAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingSink.start !== void 0) {
          startAlgorithm = () => underlyingSink.start(controller);
        }
        if (underlyingSink.write !== void 0) {
          writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
        }
        if (underlyingSink.close !== void 0) {
          closeAlgorithm = () => underlyingSink.close();
        }
        if (underlyingSink.abort !== void 0) {
          abortAlgorithm = (reason) => underlyingSink.abort(reason);
        }
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = void 0;
        controller._closeAlgorithm = void 0;
        controller._abortAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
          return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          return 1;
        }
      }
      function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
          EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
          return;
        }
        const stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) {
          return;
        }
        if (stream._inFlightWriteRequest !== void 0) {
          return;
        }
        const state = stream._state;
        if (state === "erroring") {
          WritableStreamFinishErroring(stream);
          return;
        }
        if (controller._queue.length === 0) {
          return;
        }
        const value = PeekQueueValue(controller);
        if (value === closeSentinel) {
          WritableStreamDefaultControllerProcessClose(controller);
        } else {
          WritableStreamDefaultControllerProcessWrite(controller, value);
        }
      }
      function WritableStreamDefaultControllerErrorIfNeeded(controller, error2) {
        if (controller._controlledWritableStream._state === "writable") {
          WritableStreamDefaultControllerError(controller, error2);
        }
      }
      function WritableStreamDefaultControllerProcessClose(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(sinkClosePromise, () => {
          WritableStreamFinishInFlightClose(stream);
        }, (reason) => {
          WritableStreamFinishInFlightCloseWithError(stream, reason);
        });
      }
      function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, () => {
          WritableStreamFinishInFlightWrite(stream);
          const state = stream._state;
          DequeueValue(controller);
          if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
        }, (reason) => {
          if (stream._state === "writable") {
            WritableStreamDefaultControllerClearAlgorithms(controller);
          }
          WritableStreamFinishInFlightWriteWithError(stream, reason);
        });
      }
      function WritableStreamDefaultControllerGetBackpressure(controller) {
        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
      }
      function WritableStreamDefaultControllerError(controller, error2) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error2);
      }
      function streamBrandCheckException$2(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
      }
      function defaultControllerBrandCheckException$2(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
      }
      function defaultWriterBrandCheckException(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
      }
      function defaultWriterLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released writer");
      }
      function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject) => {
          writer._closedPromise_resolve = resolve;
          writer._closedPromise_reject = reject;
          writer._closedPromiseState = "pending";
        });
      }
      function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
      }
      function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
      }
      function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "rejected";
      }
      function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === void 0) {
          return;
        }
        writer._closedPromise_resolve(void 0);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "resolved";
      }
      function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject) => {
          writer._readyPromise_resolve = resolve;
          writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = "pending";
      }
      function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
      }
      function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
      }
      function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "rejected";
      }
      function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
      }
      function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === void 0) {
          return;
        }
        writer._readyPromise_resolve(void 0);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "fulfilled";
      }
      const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
      function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === "function" || typeof ctor === "object")) {
          return false;
        }
        try {
          new ctor();
          return true;
        } catch (_a) {
          return false;
        }
      }
      function createDOMExceptionPolyfill() {
        const ctor = function DOMException3(message, name) {
          this.message = message || "";
          this.name = name || "Error";
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          }
        };
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
        return ctor;
      }
      const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
      function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        const reader = AcquireReadableStreamDefaultReader(source);
        const writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        let shuttingDown = false;
        let currentWrite = promiseResolvedWith(void 0);
        return newPromise((resolve, reject) => {
          let abortAlgorithm;
          if (signal !== void 0) {
            abortAlgorithm = () => {
              const error2 = new DOMException$1("Aborted", "AbortError");
              const actions = [];
              if (!preventAbort) {
                actions.push(() => {
                  if (dest._state === "writable") {
                    return WritableStreamAbort(dest, error2);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              if (!preventCancel) {
                actions.push(() => {
                  if (source._state === "readable") {
                    return ReadableStreamCancel(source, error2);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
            };
            if (signal.aborted) {
              abortAlgorithm();
              return;
            }
            signal.addEventListener("abort", abortAlgorithm);
          }
          function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
              function next(done) {
                if (done) {
                  resolveLoop();
                } else {
                  PerformPromiseThen(pipeStep(), next, rejectLoop);
                }
              }
              next(false);
            });
          }
          function pipeStep() {
            if (shuttingDown) {
              return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, () => {
              return newPromise((resolveRead, rejectRead) => {
                ReadableStreamDefaultReaderRead(reader, {
                  _chunkSteps: (chunk) => {
                    currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop3);
                    resolveRead(false);
                  },
                  _closeSteps: () => resolveRead(true),
                  _errorSteps: rejectRead
                });
              });
            });
          }
          isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
            if (!preventAbort) {
              shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
              shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
            } else {
              shutdown();
            }
          });
          if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
            const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          setPromiseIsHandledToTrue(pipeLoop());
          function waitForWritesToFinish() {
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === "errored") {
              action(stream._storedError);
            } else {
              uponRejection(promise, action);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === "closed") {
              action();
            } else {
              uponFulfillment(promise, action);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
              uponFulfillment(waitForWritesToFinish(), doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
            }
          }
          function shutdown(isError, error2) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
              uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error2));
            } else {
              finalize(isError, error2);
            }
          }
          function finalize(isError, error2) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== void 0) {
              signal.removeEventListener("abort", abortAlgorithm);
            }
            if (isError) {
              reject(error2);
            } else {
              resolve(void 0);
            }
          }
        });
      }
      class ReadableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("desiredSize");
          }
          return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        close() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("close");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError("The stream is not in a state that permits close");
          }
          ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("enqueue");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError("The stream is not in a state that permits enqueue");
          }
          return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        error(e2 = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("error");
          }
          ReadableStreamDefaultControllerError(this, e2);
        }
        [CancelSteps](reason) {
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        [PullSteps](readRequest) {
          const stream = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
              ReadableStreamDefaultControllerClearAlgorithms(this);
              ReadableStreamClose(stream);
            } else {
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
          } else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
        }
      }
      Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStreamDefaultController",
          configurable: true
        });
      }
      function IsReadableStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")) {
          return false;
        }
        return x2 instanceof ReadableStreamDefaultController;
      }
      function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }
        }, (e2) => {
          ReadableStreamDefaultControllerError(controller, e2);
        });
      }
      function ReadableStreamDefaultControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
      }
      function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          ReadableStreamFulfillReadRequest(stream, chunk, false);
        } else {
          let chunkSize;
          try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
          }
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
          }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      function ReadableStreamDefaultControllerError(controller, e2) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== "readable") {
          return;
        }
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e2);
      }
      function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
          return false;
        }
        return true;
      }
      function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === "readable") {
          return true;
        }
        return false;
      }
      function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = true;
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }, (r2) => {
          ReadableStreamDefaultControllerError(controller, r2);
        });
      }
      function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith(void 0);
        let cancelAlgorithm = () => promiseResolvedWith(void 0);
        if (underlyingSource.start !== void 0) {
          startAlgorithm = () => underlyingSource.start(controller);
        }
        if (underlyingSource.pull !== void 0) {
          pullAlgorithm = () => underlyingSource.pull(controller);
        }
        if (underlyingSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
        }
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function defaultControllerBrandCheckException$1(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
      }
      function ReadableStreamTee(stream, cloneForBranch2) {
        if (IsReadableByteStreamController(stream._readableStreamController)) {
          return ReadableByteStreamTee(stream);
        }
        return ReadableStreamDefaultTee(stream);
      }
      function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
          if (reading) {
            readAgain = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask2(() => {
                readAgain = false;
                const chunk1 = chunk;
                const chunk2 = chunk;
                if (!canceled1) {
                  ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgain) {
                  pullAlgorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableStreamDefaultControllerClose(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableStreamDefaultControllerClose(branch2._readableStreamController);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
        }
        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection(reader._closedPromise, (r2) => {
          ReadableStreamDefaultControllerError(branch1._readableStreamController, r2);
          ReadableStreamDefaultControllerError(branch2._readableStreamController, r2);
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        });
        return [branch1, branch2];
      }
      function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
          uponRejection(thisReader._closedPromise, (r2) => {
            if (thisReader !== reader) {
              return;
            }
            ReadableByteStreamControllerError(branch1._readableStreamController, r2);
            ReadableByteStreamControllerError(branch2._readableStreamController, r2);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
        }
        function pullWithDefaultReader() {
          if (IsReadableStreamBYOBReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamDefaultReader(stream);
            forwardReaderError(reader);
          }
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask2(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const chunk1 = chunk;
                let chunk2 = chunk;
                if (!canceled1 && !canceled2) {
                  try {
                    chunk2 = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                    ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                }
                if (!canceled1) {
                  ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableByteStreamControllerClose(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableByteStreamControllerClose(branch2._readableStreamController);
              }
              if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
              }
              if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
          if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamBYOBReader(stream);
            forwardReaderError(reader);
          }
          const byobBranch = forBranch2 ? branch2 : branch1;
          const otherBranch = forBranch2 ? branch1 : branch2;
          const readIntoRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask2(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!otherCanceled) {
                  let clonedChunk;
                  try {
                    clonedChunk = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                    ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                } else if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: (chunk) => {
              reading = false;
              const byobCanceled = forBranch2 ? canceled2 : canceled1;
              const otherCanceled = forBranch2 ? canceled1 : canceled2;
              if (!byobCanceled) {
                ReadableByteStreamControllerClose(byobBranch._readableStreamController);
              }
              if (!otherCanceled) {
                ReadableByteStreamControllerClose(otherBranch._readableStreamController);
              }
              if (chunk !== void 0) {
                if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                }
              }
              if (!byobCanceled || !otherCanceled) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
        }
        function pull1Algorithm() {
          if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, false);
          }
          return promiseResolvedWith(void 0);
        }
        function pull2Algorithm() {
          if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, true);
          }
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
          return;
        }
        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
        forwardReaderError(reader);
        return [branch1, branch2];
      }
      function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        const original = source;
        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const pull = original === null || original === void 0 ? void 0 : original.pull;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        return {
          autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
          cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
          pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
          type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
        };
      }
      function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertReadableStreamType(type, context) {
        type = `${type}`;
        if (type !== "bytes") {
          throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        }
        return type;
      }
      function convertReaderOptions(options2, context) {
        assertDictionary(options2, context);
        const mode = options2 === null || options2 === void 0 ? void 0 : options2.mode;
        return {
          mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
        };
      }
      function convertReadableStreamReaderMode(mode, context) {
        mode = `${mode}`;
        if (mode !== "byob") {
          throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        }
        return mode;
      }
      function convertIteratorOptions(options2, context) {
        assertDictionary(options2, context);
        const preventCancel = options2 === null || options2 === void 0 ? void 0 : options2.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
      }
      function convertPipeOptions(options2, context) {
        assertDictionary(options2, context);
        const preventAbort = options2 === null || options2 === void 0 ? void 0 : options2.preventAbort;
        const preventCancel = options2 === null || options2 === void 0 ? void 0 : options2.preventCancel;
        const preventClose = options2 === null || options2 === void 0 ? void 0 : options2.preventClose;
        const signal = options2 === null || options2 === void 0 ? void 0 : options2.signal;
        if (signal !== void 0) {
          assertAbortSignal(signal, `${context} has member 'signal' that`);
        }
        return {
          preventAbort: Boolean(preventAbort),
          preventCancel: Boolean(preventCancel),
          preventClose: Boolean(preventClose),
          signal
        };
      }
      function assertAbortSignal(signal, context) {
        if (!isAbortSignal2(signal)) {
          throw new TypeError(`${context} is not an AbortSignal.`);
        }
      }
      function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        const readable2 = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable2, "readable", "ReadableWritablePair");
        assertReadableStream(readable2, `${context} has member 'readable' that`);
        const writable2 = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable2, "writable", "ReadableWritablePair");
        assertWritableStream(writable2, `${context} has member 'writable' that`);
        return { readable: readable2, writable: writable2 };
      }
      class ReadableStream3 {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
          if (rawUnderlyingSource === void 0) {
            rawUnderlyingSource = null;
          } else {
            assertObject(rawUnderlyingSource, "First parameter");
          }
          const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
          const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
          InitializeReadableStream(this);
          if (underlyingSource.type === "bytes") {
            if (strategy.size !== void 0) {
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            }
            const highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
          } else {
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
          }
        }
        get locked() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("locked");
          }
          return IsReadableStreamLocked(this);
        }
        cancel(reason = void 0) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("cancel"));
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
          }
          return ReadableStreamCancel(this, reason);
        }
        getReader(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("getReader");
          }
          const options2 = convertReaderOptions(rawOptions, "First parameter");
          if (options2.mode === void 0) {
            return AcquireReadableStreamDefaultReader(this);
          }
          return AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("pipeThrough");
          }
          assertRequiredArgument(rawTransform, 1, "pipeThrough");
          const transform = convertReadableWritablePair(rawTransform, "First parameter");
          const options2 = convertPipeOptions(rawOptions, "Second parameter");
          if (IsReadableStreamLocked(this)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          }
          if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          }
          const promise = ReadableStreamPipeTo(this, transform.writable, options2.preventClose, options2.preventAbort, options2.preventCancel, options2.signal);
          setPromiseIsHandledToTrue(promise);
          return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
          }
          if (destination === void 0) {
            return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
          }
          if (!IsWritableStream(destination)) {
            return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
          }
          let options2;
          try {
            options2 = convertPipeOptions(rawOptions, "Second parameter");
          } catch (e2) {
            return promiseRejectedWith(e2);
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
          }
          if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
          }
          return ReadableStreamPipeTo(this, destination, options2.preventClose, options2.preventAbort, options2.preventCancel, options2.signal);
        }
        tee() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("tee");
          }
          const branches = ReadableStreamTee(this);
          return CreateArrayFromList(branches);
        }
        values(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("values");
          }
          const options2 = convertIteratorOptions(rawOptions, "First parameter");
          return AcquireReadableStreamAsyncIterator(this, options2.preventCancel);
        }
      }
      Object.defineProperties(ReadableStream3.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ReadableStream3.prototype, SymbolPolyfill.toStringTag, {
          value: "ReadableStream",
          configurable: true
        });
      }
      if (typeof SymbolPolyfill.asyncIterator === "symbol") {
        Object.defineProperty(ReadableStream3.prototype, SymbolPolyfill.asyncIterator, {
          value: ReadableStream3.prototype.values,
          writable: true,
          configurable: true
        });
      }
      function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(ReadableStream3.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        const stream = Object.create(ReadableStream3.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableByteStreamController.prototype);
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
        return stream;
      }
      function InitializeReadableStream(stream) {
        stream._state = "readable";
        stream._reader = void 0;
        stream._storedError = void 0;
        stream._disturbed = false;
      }
      function IsReadableStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")) {
          return false;
        }
        return x2 instanceof ReadableStream3;
      }
      function IsReadableStreamLocked(stream) {
        if (stream._reader === void 0) {
          return false;
        }
        return true;
      }
      function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (stream._state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        ReadableStreamClose(stream);
        const reader = stream._reader;
        if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._closeSteps(void 0);
          });
          reader._readIntoRequests = new SimpleQueue();
        }
        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop3);
      }
      function ReadableStreamClose(stream) {
        stream._state = "closed";
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._closeSteps();
          });
          reader._readRequests = new SimpleQueue();
        }
      }
      function ReadableStreamError(stream, e2) {
        stream._state = "errored";
        stream._storedError = e2;
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseReject(reader, e2);
        if (IsReadableStreamDefaultReader(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._errorSteps(e2);
          });
          reader._readRequests = new SimpleQueue();
        } else {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._errorSteps(e2);
          });
          reader._readIntoRequests = new SimpleQueue();
        }
      }
      function streamBrandCheckException$1(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
      }
      function convertQueuingStrategyInit(init2, context) {
        assertDictionary(init2, context);
        const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
        assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
        return {
          highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
      }
      const byteLengthSizeFunction = (chunk) => {
        return chunk.byteLength;
      };
      try {
        Object.defineProperty(byteLengthSizeFunction, "name", {
          value: "size",
          configurable: true
        });
      } catch (_a) {
      }
      class ByteLengthQueuingStrategy {
        constructor(options2) {
          assertRequiredArgument(options2, 1, "ByteLengthQueuingStrategy");
          options2 = convertQueuingStrategyInit(options2, "First parameter");
          this._byteLengthQueuingStrategyHighWaterMark = options2.highWaterMark;
        }
        get highWaterMark() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("highWaterMark");
          }
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("size");
          }
          return byteLengthSizeFunction;
        }
      }
      Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
          value: "ByteLengthQueuingStrategy",
          configurable: true
        });
      }
      function byteLengthBrandCheckException(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
      }
      function IsByteLengthQueuingStrategy(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x2 instanceof ByteLengthQueuingStrategy;
      }
      const countSizeFunction = () => {
        return 1;
      };
      try {
        Object.defineProperty(countSizeFunction, "name", {
          value: "size",
          configurable: true
        });
      } catch (_a) {
      }
      class CountQueuingStrategy {
        constructor(options2) {
          assertRequiredArgument(options2, 1, "CountQueuingStrategy");
          options2 = convertQueuingStrategyInit(options2, "First parameter");
          this._countQueuingStrategyHighWaterMark = options2.highWaterMark;
        }
        get highWaterMark() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("highWaterMark");
          }
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("size");
          }
          return countSizeFunction;
        }
      }
      Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
          value: "CountQueuingStrategy",
          configurable: true
        });
      }
      function countBrandCheckException(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
      }
      function IsCountQueuingStrategy(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x2 instanceof CountQueuingStrategy;
      }
      function convertTransformer(original, context) {
        assertDictionary(original, context);
        const flush = original === null || original === void 0 ? void 0 : original.flush;
        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const transform = original === null || original === void 0 ? void 0 : original.transform;
        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
          flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
          readableType,
          start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
          transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
          writableType
        };
      }
      function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      class TransformStream2 {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
          if (rawTransformer === void 0) {
            rawTransformer = null;
          }
          const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
          const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
          const transformer = convertTransformer(rawTransformer, "First parameter");
          if (transformer.readableType !== void 0) {
            throw new RangeError("Invalid readableType specified");
          }
          if (transformer.writableType !== void 0) {
            throw new RangeError("Invalid writableType specified");
          }
          const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
          const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
          const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
          const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
          let startPromise_resolve;
          const startPromise = newPromise((resolve) => {
            startPromise_resolve = resolve;
          });
          InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
          if (transformer.start !== void 0) {
            startPromise_resolve(transformer.start(this._transformStreamController));
          } else {
            startPromise_resolve(void 0);
          }
        }
        get readable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("readable");
          }
          return this._readable;
        }
        get writable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("writable");
          }
          return this._writable;
        }
      }
      Object.defineProperties(TransformStream2.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(TransformStream2.prototype, SymbolPolyfill.toStringTag, {
          value: "TransformStream",
          configurable: true
        });
      }
      function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
          return startPromise;
        }
        function writeAlgorithm(chunk) {
          return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
          return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
          return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
          return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
          TransformStreamErrorWritableAndUnblockWrite(stream, reason);
          return promiseResolvedWith(void 0);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        stream._backpressure = void 0;
        stream._backpressureChangePromise = void 0;
        stream._backpressureChangePromise_resolve = void 0;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = void 0;
      }
      function IsTransformStream(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_transformStreamController")) {
          return false;
        }
        return x2 instanceof TransformStream2;
      }
      function TransformStreamError(stream, e2) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2);
        TransformStreamErrorWritableAndUnblockWrite(stream, e2);
      }
      function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2);
        if (stream._backpressure) {
          TransformStreamSetBackpressure(stream, false);
        }
      }
      function TransformStreamSetBackpressure(stream, backpressure) {
        if (stream._backpressureChangePromise !== void 0) {
          stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise((resolve) => {
          stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
      }
      class TransformStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("desiredSize");
          }
          const readableController = this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        }
        enqueue(chunk = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("enqueue");
          }
          TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        error(reason = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("error");
          }
          TransformStreamDefaultControllerError(this, reason);
        }
        terminate() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("terminate");
          }
          TransformStreamDefaultControllerTerminate(this);
        }
      }
      Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill.toStringTag === "symbol") {
        Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
          value: "TransformStreamDefaultController",
          configurable: true
        });
      }
      function IsTransformStreamDefaultController(x2) {
        if (!typeIsObject(x2)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream")) {
          return false;
        }
        return x2 instanceof TransformStreamDefaultController;
      }
      function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
      }
      function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        const controller = Object.create(TransformStreamDefaultController.prototype);
        let transformAlgorithm = (chunk) => {
          try {
            TransformStreamDefaultControllerEnqueue(controller, chunk);
            return promiseResolvedWith(void 0);
          } catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
          }
        };
        let flushAlgorithm = () => promiseResolvedWith(void 0);
        if (transformer.transform !== void 0) {
          transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
        }
        if (transformer.flush !== void 0) {
          flushAlgorithm = () => transformer.flush(controller);
        }
        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
      }
      function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = void 0;
        controller._flushAlgorithm = void 0;
      }
      function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
          throw new TypeError("Readable side is not in a state that permits enqueue");
        }
        try {
          ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        } catch (e2) {
          TransformStreamErrorWritableAndUnblockWrite(stream, e2);
          throw stream._readable._storedError;
        }
        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) {
          TransformStreamSetBackpressure(stream, true);
        }
      }
      function TransformStreamDefaultControllerError(controller, e2) {
        TransformStreamError(controller._controlledTransformStream, e2);
      }
      function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, void 0, (r2) => {
          TransformStreamError(controller._controlledTransformStream, r2);
          throw r2;
        });
      }
      function TransformStreamDefaultControllerTerminate(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        const error2 = new TypeError("TransformStream terminated");
        TransformStreamErrorWritableAndUnblockWrite(stream, error2);
      }
      function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
          const backpressureChangePromise = stream._backpressureChangePromise;
          return transformPromiseWith(backpressureChangePromise, () => {
            const writable2 = stream._writable;
            const state = writable2._state;
            if (state === "erroring") {
              throw writable2._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
          });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
      }
      function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        TransformStreamError(stream, reason);
        return promiseResolvedWith(void 0);
      }
      function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        const readable2 = stream._readable;
        const controller = stream._transformStreamController;
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        return transformPromiseWith(flushPromise, () => {
          if (readable2._state === "errored") {
            throw readable2._storedError;
          }
          ReadableStreamDefaultControllerClose(readable2._readableStreamController);
        }, (r2) => {
          TransformStreamError(stream, r2);
          throw readable2._storedError;
        });
      }
      function TransformStreamDefaultSourcePullAlgorithm(stream) {
        TransformStreamSetBackpressure(stream, false);
        return stream._backpressureChangePromise;
      }
      function defaultControllerBrandCheckException(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
      }
      function streamBrandCheckException(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
      }
      exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
      exports2.CountQueuingStrategy = CountQueuingStrategy;
      exports2.ReadableByteStreamController = ReadableByteStreamController;
      exports2.ReadableStream = ReadableStream3;
      exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
      exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
      exports2.ReadableStreamDefaultController = ReadableStreamDefaultController;
      exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
      exports2.TransformStream = TransformStream2;
      exports2.TransformStreamDefaultController = TransformStreamDefaultController;
      exports2.WritableStream = WritableStream2;
      exports2.WritableStreamDefaultController = WritableStreamDefaultController;
      exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/fetch-blob/streams.cjs
var require_streams = __commonJS({
  "node_modules/fetch-blob/streams.cjs"() {
    init_shims();
    var POOL_SIZE2 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process3 = require("node:process");
        const { emitWarning } = process3;
        try {
          process3.emitWarning = () => {
          };
          Object.assign(globalThis, require("node:stream/web"));
          process3.emitWarning = emitWarning;
        } catch (error2) {
          process3.emitWarning = emitWarning;
          throw error2;
        }
      } catch (error2) {
        Object.assign(globalThis, require_ponyfill_es2018());
      }
    }
    try {
      const { Blob: Blob3 } = require("buffer");
      if (Blob3 && !Blob3.prototype.stream) {
        Blob3.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE2));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error2) {
    }
  }
});

// node_modules/fetch-blob/index.js
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0, b = part;
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var import_streams, POOL_SIZE, _Blob, Blob2, fetch_blob_default;
var init_fetch_blob = __esm({
  "node_modules/fetch-blob/index.js"() {
    init_shims();
    import_streams = __toESM(require_streams(), 1);
    POOL_SIZE = 65536;
    _Blob = class Blob {
      #parts = [];
      #type = "";
      #size = 0;
      #endings = "transparent";
      constructor(blobParts = [], options2 = {}) {
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options2 !== "object" && typeof options2 !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options2 === null)
          options2 = {};
        const encoder2 = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof Blob) {
            part = element;
          } else {
            part = encoder2.encode(`${element}`);
          }
          this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
          this.#parts.push(part);
        }
        this.#endings = `${options2.endings === void 0 ? "transparent" : options2.endings}`;
        const type = options2.type === void 0 ? "" : String(options2.type);
        this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
      }
      get size() {
        return this.#size;
      }
      get type() {
        return this.#type;
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(this.#parts, false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(this.#parts, false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(this.#parts, true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = this.#parts;
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new Blob([], { type: String(type).toLowerCase() });
        blob.#size = span;
        blob.#parts = blobParts;
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    };
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob2 = _Blob;
    fetch_blob_default = Blob2;
  }
});

// node_modules/fetch-blob/file.js
var _File, File2, file_default;
var init_file = __esm({
  "node_modules/fetch-blob/file.js"() {
    init_shims();
    init_fetch_blob();
    _File = class File extends fetch_blob_default {
      #lastModified = 0;
      #name = "";
      constructor(fileBits, fileName, options2 = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options2);
        if (options2 === null)
          options2 = {};
        const lastModified = options2.lastModified === void 0 ? Date.now() : Number(options2.lastModified);
        if (!Number.isNaN(lastModified)) {
          this.#lastModified = lastModified;
        }
        this.#name = String(fileName);
      }
      get name() {
        return this.#name;
      }
      get lastModified() {
        return this.#lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](object) {
        return !!object && object instanceof fetch_blob_default && /^(File)$/.test(object[Symbol.toStringTag]);
      }
    };
    File2 = _File;
    file_default = File2;
  }
});

// node_modules/formdata-polyfill/esm.min.js
function formDataToBlob(F2, B = fetch_blob_default) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
var t, i, h, r, m, f, e, x, FormData;
var init_esm_min = __esm({
  "node_modules/formdata-polyfill/esm.min.js"() {
    init_shims();
    init_fetch_blob();
    init_file();
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new file_default([b], c, b) : b] : [a, b + ""]);
    e = (c, f3) => (f3 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
      }
    };
    FormData = class FormData2 {
      #d = [];
      constructor(...a) {
        if (a.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2);
        this.#d.push(f(...a));
      }
      delete(a) {
        x("delete", arguments, 1);
        a += "";
        this.#d = this.#d.filter(([b]) => b !== a);
      }
      get(a) {
        x("get", arguments, 1);
        a += "";
        for (var b = this.#d, l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        this.#d.forEach((c) => c[0] === a && b.push(c[1]));
        return b;
      }
      has(a) {
        x("has", arguments, 1);
        a += "";
        return this.#d.some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = true;
        a = f(...a);
        this.#d.forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        this.#d = b;
      }
      *entries() {
        yield* this.#d;
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    };
  }
});

// node_modules/node-fetch/src/errors/base.js
var FetchBaseError;
var init_base = __esm({
  "node_modules/node-fetch/src/errors/base.js"() {
    init_shims();
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
  }
});

// node_modules/node-fetch/src/errors/fetch-error.js
var FetchError;
var init_fetch_error = __esm({
  "node_modules/node-fetch/src/errors/fetch-error.js"() {
    init_shims();
    init_base();
    FetchError = class extends FetchBaseError {
      constructor(message, type, systemError) {
        super(message, type);
        if (systemError) {
          this.code = this.errno = systemError.code;
          this.erroredSysCall = systemError.syscall;
        }
      }
    };
  }
});

// node_modules/node-fetch/src/utils/is.js
var NAME, isURLSearchParameters, isBlob, isAbortSignal;
var init_is = __esm({
  "node_modules/node-fetch/src/utils/is.js"() {
    init_shims();
    NAME = Symbol.toStringTag;
    isURLSearchParameters = (object) => {
      return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
    };
    isBlob = (object) => {
      return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
    };
    isAbortSignal = (object) => {
      return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
    };
  }
});

// node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({
  "node_modules/node-domexception/index.js"(exports, module2) {
    init_shims();
    if (!globalThis.DOMException) {
      try {
        const { MessageChannel } = require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
      }
    }
    module2.exports = globalThis.DOMException;
  }
});

// node_modules/fetch-blob/from.js
var import_node_fs, import_node_domexception, stat, BlobDataItem;
var init_from = __esm({
  "node_modules/fetch-blob/from.js"() {
    init_shims();
    import_node_fs = require("node:fs");
    import_node_domexception = __toESM(require_node_domexception(), 1);
    init_file();
    init_fetch_blob();
    ({ stat } = import_node_fs.promises);
    BlobDataItem = class {
      #path;
      #start;
      constructor(options2) {
        this.#path = options2.path;
        this.#start = options2.start;
        this.size = options2.size;
        this.lastModified = options2.lastModified;
      }
      slice(start, end) {
        return new BlobDataItem({
          path: this.#path,
          lastModified: this.lastModified,
          size: end - start,
          start: this.#start + start
        });
      }
      async *stream() {
        const { mtimeMs } = await stat(this.#path);
        if (mtimeMs > this.lastModified) {
          throw new import_node_domexception.default("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        }
        yield* (0, import_node_fs.createReadStream)(this.#path, {
          start: this.#start,
          end: this.#start + this.size - 1
        });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
  }
});

// node_modules/node-fetch/src/utils/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m3, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser2 = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file9 = new file_default(entryChunks, filename, { type: contentType });
    formData.append(entryName, file9);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser2.onPartBegin = function() {
    parser2.onPartData = onPartData;
    parser2.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser2.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser2.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser2.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m3 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m3) {
        entryName = m3[2] || m3[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser2.onPartData = appendToFile;
        parser2.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser2.write(chunk);
  }
  parser2.end();
  return formData;
}
var s, S, f2, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/node-fetch/src/utils/multipart-parser.js"() {
    init_shims();
    init_from();
    init_esm_min();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f2 = 1;
    F = {
      PART_BOUNDARY: f2,
      LAST_BOUNDARY: f2 *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index: index9, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index9 === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index9++;
                break;
              } else if (index9 - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index9 = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index9 + 2]) {
                index9 = -2;
              }
              if (c === boundary[index9 + 2]) {
                index9++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index9 = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index9++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index9 === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index9;
              if (index9 === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index9 < boundary.length) {
                if (boundary[index9] === c) {
                  if (index9 === 0) {
                    dataCallback("onPartData", true);
                  }
                  index9++;
                } else {
                  index9 = 0;
                }
              } else if (index9 === boundary.length) {
                index9++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index9 = 0;
                }
              } else if (index9 - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index9 = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index9 = 0;
                  }
                } else {
                  index9 = 0;
                }
              }
              if (index9 > 0) {
                lookbehind[index9 - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index9;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// node_modules/node-fetch/src/body.js
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body: body2 } = data;
  if (body2 === null) {
    return import_node_buffer.Buffer.alloc(0);
  }
  if (!(body2 instanceof import_node_stream.default)) {
    return import_node_buffer.Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body2) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error2 = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body2.destroy(error2);
        throw error2;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    const error_ = error2 instanceof FetchBaseError ? error2 : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    throw error_;
  }
  if (body2.readableEnded === true || body2._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return import_node_buffer.Buffer.from(accum.join(""));
      }
      return import_node_buffer.Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var import_node_stream, import_node_util, import_node_buffer, pipeline, INTERNALS, Body, clone, getNonSpecFormDataBoundary, extractContentType;
var init_body = __esm({
  "node_modules/node-fetch/src/body.js"() {
    init_shims();
    import_node_stream = __toESM(require("node:stream"), 1);
    import_node_util = require("node:util");
    import_node_buffer = require("node:buffer");
    init_fetch_blob();
    init_esm_min();
    init_fetch_error();
    init_base();
    init_is();
    pipeline = (0, import_node_util.promisify)(import_node_stream.default.pipeline);
    INTERNALS = Symbol("Body internals");
    Body = class {
      constructor(body2, {
        size = 0
      } = {}) {
        let boundary = null;
        if (body2 === null) {
          body2 = null;
        } else if (isURLSearchParameters(body2)) {
          body2 = import_node_buffer.Buffer.from(body2.toString());
        } else if (isBlob(body2)) {
        } else if (import_node_buffer.Buffer.isBuffer(body2)) {
        } else if (import_node_util.types.isAnyArrayBuffer(body2)) {
          body2 = import_node_buffer.Buffer.from(body2);
        } else if (ArrayBuffer.isView(body2)) {
          body2 = import_node_buffer.Buffer.from(body2.buffer, body2.byteOffset, body2.byteLength);
        } else if (body2 instanceof import_node_stream.default) {
        } else if (body2 instanceof FormData) {
          body2 = formDataToBlob(body2);
          boundary = body2.type.split("=")[1];
        } else {
          body2 = import_node_buffer.Buffer.from(String(body2));
        }
        let stream = body2;
        if (import_node_buffer.Buffer.isBuffer(body2)) {
          stream = import_node_stream.default.Readable.from(body2);
        } else if (isBlob(body2)) {
          stream = import_node_stream.default.Readable.from(body2.stream());
        }
        this[INTERNALS] = {
          body: body2,
          stream,
          boundary,
          disturbed: false,
          error: null
        };
        this.size = size;
        if (body2 instanceof import_node_stream.default) {
          body2.on("error", (error_) => {
            const error2 = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
            this[INTERNALS].error = error2;
          });
        }
      }
      get body() {
        return this[INTERNALS].stream;
      }
      get bodyUsed() {
        return this[INTERNALS].disturbed;
      }
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          const formData = new FormData();
          const parameters = new URLSearchParams(await this.text());
          for (const [name, value] of parameters) {
            formData.append(name, value);
          }
          return formData;
        }
        const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
        return toFormData2(this.body, ct);
      }
      async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS].body && this[INTERNALS].body.type || "";
        const buf = await this.arrayBuffer();
        return new fetch_blob_default([buf], {
          type: ct
        });
      }
      async json() {
        const text = await this.text();
        return JSON.parse(text);
      }
      async text() {
        const buffer = await consumeBody(this);
        return new TextDecoder().decode(buffer);
      }
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = (0, import_node_util.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true },
      data: { get: (0, import_node_util.deprecate)(
        () => {
        },
        "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
        "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
      ) }
    });
    clone = (instance, highWaterMark) => {
      let p1;
      let p2;
      let { body: body2 } = instance[INTERNALS];
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body2 instanceof import_node_stream.default && typeof body2.getBoundary !== "function") {
        p1 = new import_node_stream.PassThrough({ highWaterMark });
        p2 = new import_node_stream.PassThrough({ highWaterMark });
        body2.pipe(p1);
        body2.pipe(p2);
        instance[INTERNALS].stream = p1;
        body2 = p2;
      }
      return body2;
    };
    getNonSpecFormDataBoundary = (0, import_node_util.deprecate)(
      (body2) => body2.getBoundary(),
      "form-data doesn't follow the spec and requires special treatment. Use alternative package",
      "https://github.com/node-fetch/node-fetch/issues/1167"
    );
    extractContentType = (body2, request) => {
      if (body2 === null) {
        return null;
      }
      if (typeof body2 === "string") {
        return "text/plain;charset=UTF-8";
      }
      if (isURLSearchParameters(body2)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      }
      if (isBlob(body2)) {
        return body2.type || null;
      }
      if (import_node_buffer.Buffer.isBuffer(body2) || import_node_util.types.isAnyArrayBuffer(body2) || ArrayBuffer.isView(body2)) {
        return null;
      }
      if (body2 instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
      }
      if (body2 && typeof body2.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body2)}`;
      }
      if (body2 instanceof import_node_stream.default) {
        return null;
      }
      return "text/plain;charset=UTF-8";
    };
  }
});

// node_modules/node-fetch/src/headers.js
var import_node_util2, import_node_http, validateHeaderName, validateHeaderValue, Headers2;
var init_headers = __esm({
  "node_modules/node-fetch/src/headers.js"() {
    init_shims();
    import_node_util2 = require("node:util");
    import_node_http = __toESM(require("node:http"), 1);
    validateHeaderName = typeof import_node_http.default.validateHeaderName === "function" ? import_node_http.default.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error2 = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
        throw error2;
      }
    };
    validateHeaderValue = typeof import_node_http.default.validateHeaderValue === "function" ? import_node_http.default.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error2 = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error2, "code", { value: "ERR_INVALID_CHAR" });
        throw error2;
      }
    };
    Headers2 = class extends URLSearchParams {
      constructor(init2) {
        let result = [];
        if (init2 instanceof Headers2) {
          const raw = init2.raw();
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]));
          }
        } else if (init2 == null) {
        } else if (typeof init2 === "object" && !import_node_util2.types.isBoxedPrimitive(init2)) {
          const method = init2[Symbol.iterator];
          if (method == null) {
            result.push(...Object.entries(init2));
          } else {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            result = [...init2].map((pair) => {
              if (typeof pair !== "object" || import_node_util2.types.isBoxedPrimitive(pair)) {
                throw new TypeError("Each header pair must be an iterable object");
              }
              return [...pair];
            }).map((pair) => {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              return [...pair];
            });
          }
        } else {
          throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        result = result.length > 0 ? result.map(([name, value]) => {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return [String(name).toLowerCase(), String(value)];
        }) : void 0;
        super(result);
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => {
                  validateHeaderName(name);
                  validateHeaderValue(name, String(value));
                  return URLSearchParams.prototype[p].call(
                    target,
                    String(name).toLowerCase(),
                    String(value)
                  );
                };
              case "delete":
              case "has":
              case "getAll":
                return (name) => {
                  validateHeaderName(name);
                  return URLSearchParams.prototype[p].call(
                    target,
                    String(name).toLowerCase()
                  );
                };
              case "keys":
                return () => {
                  target.sort();
                  return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                };
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
          return null;
        }
        let value = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase();
        }
        return value;
      }
      forEach(callback, thisArg = void 0) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
        }
      }
      *values() {
        for (const name of this.keys()) {
          yield this.get(name);
        }
      }
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((result, key2) => {
          result[key2] = this.getAll(key2);
          return result;
        }, {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key2) => {
          const values = this.getAll(key2);
          if (key2 === "host") {
            result[key2] = values[0];
          } else {
            result[key2] = values.length > 1 ? values : values[0];
          }
          return result;
        }, {});
      }
    };
    Object.defineProperties(
      Headers2.prototype,
      ["get", "entries", "forEach", "values"].reduce((result, property) => {
        result[property] = { enumerable: true };
        return result;
      }, {})
    );
  }
});

// node_modules/node-fetch/src/utils/referrer.js
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
var ReferrerPolicy;
var init_referrer = __esm({
  "node_modules/node-fetch/src/utils/referrer.js"() {
    init_shims();
    ReferrerPolicy = /* @__PURE__ */ new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
  }
});

// node_modules/node-fetch/src/request.js
var import_node_url, import_node_util3, INTERNALS2, isRequest, doBadDataWarn, Request2;
var init_request = __esm({
  "node_modules/node-fetch/src/request.js"() {
    init_shims();
    import_node_url = require("node:url");
    import_node_util3 = require("node:util");
    init_headers();
    init_body();
    init_is();
    init_referrer();
    INTERNALS2 = Symbol("Request internals");
    isRequest = (object) => {
      return typeof object === "object" && typeof object[INTERNALS2] === "object";
    };
    doBadDataWarn = (0, import_node_util3.deprecate)(
      () => {
      },
      ".data is not a valid RequestInit property, use .body instead",
      "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
    );
    Request2 = class extends Body {
      constructor(input, init2 = {}) {
        let parsedURL;
        if (isRequest(input)) {
          parsedURL = new URL(input.url);
        } else {
          parsedURL = new URL(input);
          input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
          throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
        }
        let method = init2.method || input.method || "GET";
        if (/^(delete|get|head|options|post|put)$/i.test(method)) {
          method = method.toUpperCase();
        }
        if (!isRequest(init2) && "data" in init2) {
          doBadDataWarn();
        }
        if ((init2.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init2.size || input.size || 0
        });
        const headers = new Headers2(init2.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody, this);
          if (contentType) {
            headers.set("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init2) {
          signal = init2.signal;
        }
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        let referrer = init2.referrer == null ? input.referrer : init2.referrer;
        if (referrer === "") {
          referrer = "no-referrer";
        } else if (referrer) {
          const parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
          referrer = void 0;
        }
        this[INTERNALS2] = {
          method,
          redirect: init2.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        };
        this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
        this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
        this.counter = init2.counter || input.counter || 0;
        this.agent = init2.agent || input.agent;
        this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
        this.referrerPolicy = init2.referrerPolicy || input.referrerPolicy || "";
      }
      get method() {
        return this[INTERNALS2].method;
      }
      get url() {
        return (0, import_node_url.format)(this[INTERNALS2].parsedURL);
      }
      get headers() {
        return this[INTERNALS2].headers;
      }
      get redirect() {
        return this[INTERNALS2].redirect;
      }
      get signal() {
        return this[INTERNALS2].signal;
      }
      get referrer() {
        if (this[INTERNALS2].referrer === "no-referrer") {
          return "";
        }
        if (this[INTERNALS2].referrer === "client") {
          return "about:client";
        }
        if (this[INTERNALS2].referrer) {
          return this[INTERNALS2].referrer.toString();
        }
        return void 0;
      }
      get referrerPolicy() {
        return this[INTERNALS2].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS2].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      clone() {
        return new Request2(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request2.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
      referrer: { enumerable: true },
      referrerPolicy: { enumerable: true }
    });
  }
});

// node_modules/node-fetch/src/index.js
var init_src = __esm({
  "node_modules/node-fetch/src/index.js"() {
    init_shims();
    init_dist();
    init_request();
    init_esm_min();
    init_from();
  }
});

// node_modules/@sveltejs/kit/src/exports/node/polyfills.js
function installPolyfills() {
  for (const name in globals) {
    Object.defineProperty(globalThis, name, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: globals[name]
    });
  }
}
var import_undici, import_web, import_stream, import_crypto, globals;
var init_polyfills = __esm({
  "node_modules/@sveltejs/kit/src/exports/node/polyfills.js"() {
    init_shims();
    import_undici = __toESM(require_undici(), 1);
    import_web = require("stream/web");
    import_stream = require("stream");
    init_src();
    import_crypto = require("crypto");
    globals = {
      crypto: import_crypto.webcrypto,
      fetch: import_undici.fetch,
      Response: import_undici.Response,
      Request: class extends import_undici.Request {
        formData() {
          return new Request2(this.url, {
            method: this.method,
            headers: this.headers,
            body: this.body && import_stream.Readable.from(this.body)
          }).formData();
        }
      },
      Headers: import_undici.Headers,
      ReadableStream: import_web.ReadableStream,
      TransformStream: import_web.TransformStream,
      WritableStream: import_web.WritableStream,
      FormData
    };
  }
});

// node_modules/svelte-adapter-firebase/src/files/shims.js
var init_shims = __esm({
  "node_modules/svelte-adapter-firebase/src/files/shims.js"() {
    init_polyfills();
    installPolyfills();
  }
});

// .svelte-kit/output/server/chunks/index.js
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component9) {
  current_component = component9;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i2 = pattern2.lastIndex - 1;
    const ch = str[i2];
    escaped2 += str.substring(last, i2) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i2 + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i2 = 0; i2 < items.length; i2 += 1) {
    str += fn(items[i2], i2);
  }
  return str;
}
function validate_component(component9, name) {
  if (!component9 || !component9.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component9;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_shims();
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    init_shims();
    exports.parse = parse2;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index9 = 0;
      while (index9 < str.length) {
        var eqIdx = str.indexOf("=", index9);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index9);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index9 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index9, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index9 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e2) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module2) {
    "use strict";
    init_shims();
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e2) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e2
        );
      }
      var cookie2 = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie2.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie2.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie2.secure = true;
        } else if (key2 === "httponly") {
          cookie2.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie2.sameSite = value2;
        } else {
          cookie2[key2] = value2;
        }
      });
      return cookie2;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse2(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options2.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie2 = parseString2(str, options2);
          cookies2[cookie2.name] = cookie2;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module2.exports = parse2;
    module2.exports.parse = parse2;
    module2.exports.parseString = parseString2;
    module2.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
    init_shims();
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_shims();
    init_chunks();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      const version = { "name": "lionelworks", "version": "2.0.12", "scripts": { "dev": "vite dev", "build": "vite build", "package": "vite package", "preview": "vite preview", "test": "playwright test", "check": "svelte-check --tsconfig ./tsconfig.json", "check:watch": "svelte-check --tsconfig ./tsconfig.json --watch", "lint": "prettier --check --plugin-search-dir=. . && eslint .", "format": "prettier --write --plugin-search-dir=. ." }, "devDependencies": { "@playwright/test": "^1.25.0", "@sveltejs/adapter-auto": "next", "@sveltejs/kit": "next", "@types/cookie": "^0.5.1", "@typescript-eslint/eslint-plugin": "^5.27.0", "@typescript-eslint/parser": "^5.27.0", "autoprefixer": "^10.4.7", "eslint": "^8.16.0", "eslint-config-prettier": "^8.3.0", "eslint-plugin-svelte3": "^4.0.0", "mdsvex": "^0.10.6", "postcss": "^8.4.14", "prettier": "^2.6.2", "prettier-plugin-svelte": "^2.7.0", "svelte": "^3.46.0", "svelte-check": "^2.7.1", "svelte-preprocess": "^4.10.6", "tailwindcss": "^3.1.4", "tslib": "^2.3.1", "typescript": "^4.7.2", "vite": "^3.1.0" }, "type": "module", "dependencies": { "firebase": "^9.9.0", "svelte-adapter-firebase": "^0.14.1", "svelte-markdown": "^0.2.3", "vite": "^3.1.0" } }.version;
      return `${$$result.head += `${$$result.title = `<title>Wow! Lionel&#39;s Very Own Website!</title>`, ""}`, ""}

<div class="${"grid grid-cols-5 grid-rows-[1fr_auto_1fr] wrapper"}"><nav class="${"head flex p-8 col-span-5"}"><a href="${"/"}"><img class="${"mr-4"}" src="${"../93c8cffd4e68e8b6ca34e6ac8d0c6d78.png"}" alt="${"A stylized L serving as a logo"}" style="${"height: 3rem;"}"></a>
		<a id="${"portfolio"}" href="${"/portfolio"}" class="${"h-10"}">portfolio</a>
		<a id="${"portfolio"}" href="${"/blog"}" class="${"h-10"}">blog</a>
		<div id="${"links"}" class="${"ml-auto"}"><a href="${"http://twitter.com/lionelbeato"}"><i class="${"fab fa-twitter fa-lg"}" aria-hidden="${"true"}"></i></a>
			<a class="${"un"}" href="${"http://twitter.com/lionelbeato"}">Twitter</a>
			<a href="${"http://github.com/lionelbeato"}"><i class="${"fab fa-github fa-lg"}" aria-hidden="${"true"}"></i></a>
			<a class="${"un"}" href="${"http://github.com/lionelbeato"}">GitHub</a><a href="${"http://linkedin.com/in/lionelbeato"}"><i class="${"fab fa-linkedin fa-lg"}" aria-hidden="${"true"}"></i></a><a class="${"un"}" href="${"http://linkedin.com/in/lionelbeato"}">LinkedIn</a><a href="${"mailto:beato@lionel.works"}"><i class="${"fas fa-at fa-lg"}" aria-hidden="${"true"}"></i></a><a class="${"un"}" href="${"mailto:beato@lionel.works"}">email</a></div></nav>
	${slots.default ? slots.default({}) : ``}
	<footer class="${"foot col-span-5 text-white text-xs text-center self-center p-5"}"><span>made with \u2764\uFE0F in hartford, ct</span>
		<br>
		<span>Copyright \xA9 Lionel Beato 2022 <b>${escape(version)}</b></span></footer>
</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_shims();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-16473557.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-16473557.js", "_app/immutable/chunks/index-dcb258cc.js"];
    stylesheets = ["_app/immutable/assets/_layout-5a7537a1.css"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_shims();
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_shims();
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-734621ba.js";
    imports2 = ["_app/immutable/components/error.svelte-734621ba.js", "_app/immutable/chunks/index-dcb258cc.js", "_app/immutable/chunks/singletons-423070a1.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_shims();
    init_chunks();
    css = {
      code: ".title.svelte-187pqhj.svelte-187pqhj{font-size:2rem;text-transform:uppercase;font-family:'IBM Plex Sans';font-weight:900}p.svelte-187pqhj>a.svelte-187pqhj{background-color:rgb(255, 255, 94);transition:all 250ms;padding:0.35rem}p.svelte-187pqhj>a.svelte-187pqhj:hover{background-color:black;color:white}p.svelte-187pqhj.svelte-187pqhj,li.svelte-187pqhj.svelte-187pqhj{font-size:1.2rem}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<main class="${"col-span-5 grid sm:grid-cols-2 m-auto p-8"}"><div class="${"col-auto"}"><img src="${"../face.png"}" class="${"w-96"}"></div>
	<div class="${"col-auto article"}"><h1 class="${"title svelte-187pqhj"}">Lionel Beato</h1>
		<hr>
		<article><br>
			<ul class="${"list-disc p-4"}"><li class="${"svelte-187pqhj"}">Neat guy</li>
				<li class="${"svelte-187pqhj"}">Good at computer stuff</li>
				<li class="${"svelte-187pqhj"}">Likes to draw sometimes</li></ul>
			<p class="${"svelte-187pqhj"}"><a href="${"https://drive.google.com/file/d/1tGTH15tK0C8iEFNbLzz44UTKGur-uiqK/view?usp=sharing"}" class="${"svelte-187pqhj"}">Here is a link to my CV</a>. Feel free to take a look!
			</p></article></div>
</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_shims();
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-9f51a36d.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-9f51a36d.js", "_app/immutable/chunks/index-dcb258cc.js"];
    stylesheets3 = ["_app/immutable/assets/_page-a87a3290.css"];
  }
});

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
function escape2(html, encode2) {
  if (encode2) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
function unescape2(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
function cleanUrl(sanitize, base2, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape2(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e2) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base2 && !originIndependentUrl.test(href)) {
    href = resolveUrl(base2, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e2) {
    return null;
  }
  return href;
}
function resolveUrl(base2, href) {
  if (!baseUrls[" " + base2]) {
    if (justDomain.test(base2)) {
      baseUrls[" " + base2] = base2 + "/";
    } else {
      baseUrls[" " + base2] = rtrim(base2, "/", true);
    }
  }
  base2 = baseUrls[" " + base2];
  const relativeBase = base2.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base2.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base2.replace(domain, "$1") + href;
  } else {
    return base2 + href;
  }
}
function merge(obj) {
  let i2 = 1, target, key2;
  for (; i2 < arguments.length; i2++) {
    target = arguments[i2];
    for (key2 in target) {
      if (Object.prototype.hasOwnProperty.call(target, key2)) {
        obj[key2] = target[key2];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped2 = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped2 = !escaped2;
    if (escaped2) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i2 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i2 < cells.length; i2++) {
    cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i2 = 0;
  for (; i2 < l; i2++) {
    if (str[i2] === "\\") {
      i2++;
    } else if (str[i2] === b[0]) {
      level++;
    } else if (str[i2] === b[1]) {
      level--;
      if (level < 0) {
        return i2;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString(pattern2, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern2;
    }
    count >>= 1;
    pattern2 += pattern2;
  }
  return result + pattern2;
}
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape2(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape2(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i2, ch;
  const l = text.length;
  for (i2 = 0; i2 < l; i2++) {
    ch = text.charCodeAt(i2);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
function marked(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e2) {
      return callback(e2);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e2) {
          err = e2;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  function onError(e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape2(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      if (opt.async) {
        return Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => {
          return Parser.parse(tokens, opt);
        }).catch(onError);
      }
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e2) {
    onError(e2);
  }
}
var defaults, escapeTest, escapeReplace, escapeTestNoEncode, escapeReplaceNoEncode, escapeReplacements, getEscapeReplacement, unescapeTest, caret, nonWordAndColonTest, originIndependentUrl, baseUrls, justDomain, protocol, domain, noopTest, Tokenizer, block, inline, Lexer, Renderer, TextRenderer, Slugger, Parser, options, setOptions, use, walkTokens, parseInline, parser, lexer;
var init_marked_esm = __esm({
  "node_modules/marked/lib/marked.esm.js"() {
    init_shims();
    defaults = getDefaults();
    escapeTest = /[&<>"']/;
    escapeReplace = /[&<>"']/g;
    escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    escapeReplacements = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    getEscapeReplacement = (ch) => escapeReplacements[ch];
    unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    caret = /(^|[^\[])\^/g;
    nonWordAndColonTest = /[^\w:]/g;
    originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    baseUrls = {};
    justDomain = /^[^:]+:\/*[^/]*$/;
    protocol = /^([^:]+:)[\s\S]*$/;
    domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    noopTest = { exec: function noopTest2() {
    } };
    Tokenizer = class {
      constructor(options2) {
        this.options = options2 || defaults;
      }
      space(src) {
        const cap = this.rules.block.newline.exec(src);
        if (cap && cap[0].length > 0) {
          return {
            type: "space",
            raw: cap[0]
          };
        }
      }
      code(src) {
        const cap = this.rules.block.code.exec(src);
        if (cap) {
          const text = cap[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: cap[0],
            codeBlockStyle: "indented",
            text: !this.options.pedantic ? rtrim(text, "\n") : text
          };
        }
      }
      fences(src) {
        const cap = this.rules.block.fences.exec(src);
        if (cap) {
          const raw = cap[0];
          const text = indentCodeCompensation(raw, cap[3] || "");
          return {
            type: "code",
            raw,
            lang: cap[2] ? cap[2].trim() : cap[2],
            text
          };
        }
      }
      heading(src) {
        const cap = this.rules.block.heading.exec(src);
        if (cap) {
          let text = cap[2].trim();
          if (/#$/.test(text)) {
            const trimmed = rtrim(text, "#");
            if (this.options.pedantic) {
              text = trimmed.trim();
            } else if (!trimmed || / $/.test(trimmed)) {
              text = trimmed.trim();
            }
          }
          return {
            type: "heading",
            raw: cap[0],
            depth: cap[1].length,
            text,
            tokens: this.lexer.inline(text)
          };
        }
      }
      hr(src) {
        const cap = this.rules.block.hr.exec(src);
        if (cap) {
          return {
            type: "hr",
            raw: cap[0]
          };
        }
      }
      blockquote(src) {
        const cap = this.rules.block.blockquote.exec(src);
        if (cap) {
          const text = cap[0].replace(/^ *>[ \t]?/gm, "");
          return {
            type: "blockquote",
            raw: cap[0],
            tokens: this.lexer.blockTokens(text, []),
            text
          };
        }
      }
      list(src) {
        let cap = this.rules.block.list.exec(src);
        if (cap) {
          let raw, istask, ischecked, indent, i2, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
          let bull = cap[1].trim();
          const isordered = bull.length > 1;
          const list = {
            type: "list",
            raw: "",
            ordered: isordered,
            start: isordered ? +bull.slice(0, -1) : "",
            loose: false,
            items: []
          };
          bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
          if (this.options.pedantic) {
            bull = isordered ? bull : "[*+-]";
          }
          const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
          while (src) {
            endEarly = false;
            if (!(cap = itemRegex.exec(src))) {
              break;
            }
            if (this.rules.block.hr.test(src)) {
              break;
            }
            raw = cap[0];
            src = src.substring(raw.length);
            line = cap[2].split("\n", 1)[0];
            nextLine = src.split("\n", 1)[0];
            if (this.options.pedantic) {
              indent = 2;
              itemContents = line.trimLeft();
            } else {
              indent = cap[2].search(/[^ ]/);
              indent = indent > 4 ? 1 : indent;
              itemContents = line.slice(indent);
              indent += cap[1].length;
            }
            blankLine = false;
            if (!line && /^ *$/.test(nextLine)) {
              raw += nextLine + "\n";
              src = src.substring(nextLine.length + 1);
              endEarly = true;
            }
            if (!endEarly) {
              const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
              const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
              const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
              const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
              while (src) {
                rawLine = src.split("\n", 1)[0];
                line = rawLine;
                if (this.options.pedantic) {
                  line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (nextBulletRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(src)) {
                  break;
                }
                if (line.search(/[^ ]/) >= indent || !line.trim()) {
                  itemContents += "\n" + line.slice(indent);
                } else if (!blankLine) {
                  itemContents += "\n" + line;
                } else {
                  break;
                }
                if (!blankLine && !line.trim()) {
                  blankLine = true;
                }
                raw += rawLine + "\n";
                src = src.substring(rawLine.length + 1);
              }
            }
            if (!list.loose) {
              if (endsWithBlankLine) {
                list.loose = true;
              } else if (/\n *\n *$/.test(raw)) {
                endsWithBlankLine = true;
              }
            }
            if (this.options.gfm) {
              istask = /^\[[ xX]\] /.exec(itemContents);
              if (istask) {
                ischecked = istask[0] !== "[ ] ";
                itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
              }
            }
            list.items.push({
              type: "list_item",
              raw,
              task: !!istask,
              checked: ischecked,
              loose: false,
              text: itemContents
            });
            list.raw += raw;
          }
          list.items[list.items.length - 1].raw = raw.trimRight();
          list.items[list.items.length - 1].text = itemContents.trimRight();
          list.raw = list.raw.trimRight();
          const l = list.items.length;
          for (i2 = 0; i2 < l; i2++) {
            this.lexer.state.top = false;
            list.items[i2].tokens = this.lexer.blockTokens(list.items[i2].text, []);
            const spacers = list.items[i2].tokens.filter((t2) => t2.type === "space");
            const hasMultipleLineBreaks = spacers.every((t2) => {
              const chars3 = t2.raw.split("");
              let lineBreaks = 0;
              for (const char of chars3) {
                if (char === "\n") {
                  lineBreaks += 1;
                }
                if (lineBreaks > 1) {
                  return true;
                }
              }
              return false;
            });
            if (!list.loose && spacers.length && hasMultipleLineBreaks) {
              list.loose = true;
              list.items[i2].loose = true;
            }
          }
          return list;
        }
      }
      html(src) {
        const cap = this.rules.block.html.exec(src);
        if (cap) {
          const token = {
            type: "html",
            raw: cap[0],
            pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
            text: cap[0]
          };
          if (this.options.sanitize) {
            const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape2(cap[0]);
            token.type = "paragraph";
            token.text = text;
            token.tokens = this.lexer.inline(text);
          }
          return token;
        }
      }
      def(src) {
        const cap = this.rules.block.def.exec(src);
        if (cap) {
          if (cap[3])
            cap[3] = cap[3].substring(1, cap[3].length - 1);
          const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
          return {
            type: "def",
            tag,
            raw: cap[0],
            href: cap[2],
            title: cap[3]
          };
        }
      }
      table(src) {
        const cap = this.rules.block.table.exec(src);
        if (cap) {
          const item = {
            type: "table",
            header: splitCells(cap[1]).map((c) => {
              return { text: c };
            }),
            align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
          };
          if (item.header.length === item.align.length) {
            item.raw = cap[0];
            let l = item.align.length;
            let i2, j, k, row;
            for (i2 = 0; i2 < l; i2++) {
              if (/^ *-+: *$/.test(item.align[i2])) {
                item.align[i2] = "right";
              } else if (/^ *:-+: *$/.test(item.align[i2])) {
                item.align[i2] = "center";
              } else if (/^ *:-+ *$/.test(item.align[i2])) {
                item.align[i2] = "left";
              } else {
                item.align[i2] = null;
              }
            }
            l = item.rows.length;
            for (i2 = 0; i2 < l; i2++) {
              item.rows[i2] = splitCells(item.rows[i2], item.header.length).map((c) => {
                return { text: c };
              });
            }
            l = item.header.length;
            for (j = 0; j < l; j++) {
              item.header[j].tokens = this.lexer.inline(item.header[j].text);
            }
            l = item.rows.length;
            for (j = 0; j < l; j++) {
              row = item.rows[j];
              for (k = 0; k < row.length; k++) {
                row[k].tokens = this.lexer.inline(row[k].text);
              }
            }
            return item;
          }
        }
      }
      lheading(src) {
        const cap = this.rules.block.lheading.exec(src);
        if (cap) {
          return {
            type: "heading",
            raw: cap[0],
            depth: cap[2].charAt(0) === "=" ? 1 : 2,
            text: cap[1],
            tokens: this.lexer.inline(cap[1])
          };
        }
      }
      paragraph(src) {
        const cap = this.rules.block.paragraph.exec(src);
        if (cap) {
          const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
          return {
            type: "paragraph",
            raw: cap[0],
            text,
            tokens: this.lexer.inline(text)
          };
        }
      }
      text(src) {
        const cap = this.rules.block.text.exec(src);
        if (cap) {
          return {
            type: "text",
            raw: cap[0],
            text: cap[0],
            tokens: this.lexer.inline(cap[0])
          };
        }
      }
      escape(src) {
        const cap = this.rules.inline.escape.exec(src);
        if (cap) {
          return {
            type: "escape",
            raw: cap[0],
            text: escape2(cap[1])
          };
        }
      }
      tag(src) {
        const cap = this.rules.inline.tag.exec(src);
        if (cap) {
          if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
            this.lexer.state.inLink = true;
          } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
            this.lexer.state.inLink = false;
          }
          if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.lexer.state.inRawBlock = true;
          } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.lexer.state.inRawBlock = false;
          }
          return {
            type: this.options.sanitize ? "text" : "html",
            raw: cap[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape2(cap[0]) : cap[0]
          };
        }
      }
      link(src) {
        const cap = this.rules.inline.link.exec(src);
        if (cap) {
          const trimmedUrl = cap[2].trim();
          if (!this.options.pedantic && /^</.test(trimmedUrl)) {
            if (!/>$/.test(trimmedUrl)) {
              return;
            }
            const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
            if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
              return;
            }
          } else {
            const lastParenIndex = findClosingBracket(cap[2], "()");
            if (lastParenIndex > -1) {
              const start = cap[0].indexOf("!") === 0 ? 5 : 4;
              const linkLen = start + cap[1].length + lastParenIndex;
              cap[2] = cap[2].substring(0, lastParenIndex);
              cap[0] = cap[0].substring(0, linkLen).trim();
              cap[3] = "";
            }
          }
          let href = cap[2];
          let title = "";
          if (this.options.pedantic) {
            const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
            if (link) {
              href = link[1];
              title = link[3];
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : "";
          }
          href = href.trim();
          if (/^</.test(href)) {
            if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
              href = href.slice(1);
            } else {
              href = href.slice(1, -1);
            }
          }
          return outputLink(cap, {
            href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
            title: title ? title.replace(this.rules.inline._escapes, "$1") : title
          }, cap[0], this.lexer);
        }
      }
      reflink(src, links) {
        let cap;
        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
          link = links[link.toLowerCase()];
          if (!link || !link.href) {
            const text = cap[0].charAt(0);
            return {
              type: "text",
              raw: text,
              text
            };
          }
          return outputLink(cap, link, cap[0], this.lexer);
        }
      }
      emStrong(src, maskedSrc, prevChar = "") {
        let match = this.rules.inline.emStrong.lDelim.exec(src);
        if (!match)
          return;
        if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
          return;
        const nextChar = match[1] || match[2] || "";
        if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
          const lLength = match[0].length - 1;
          let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
          const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
          endReg.lastIndex = 0;
          maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
          while ((match = endReg.exec(maskedSrc)) != null) {
            rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
            if (!rDelim)
              continue;
            rLength = rDelim.length;
            if (match[3] || match[4]) {
              delimTotal += rLength;
              continue;
            } else if (match[5] || match[6]) {
              if (lLength % 3 && !((lLength + rLength) % 3)) {
                midDelimTotal += rLength;
                continue;
              }
            }
            delimTotal -= rLength;
            if (delimTotal > 0)
              continue;
            rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
            if (Math.min(lLength, rLength) % 2) {
              const text2 = src.slice(1, lLength + match.index + rLength);
              return {
                type: "em",
                raw: src.slice(0, lLength + match.index + rLength + 1),
                text: text2,
                tokens: this.lexer.inlineTokens(text2)
              };
            }
            const text = src.slice(2, lLength + match.index + rLength - 1);
            return {
              type: "strong",
              raw: src.slice(0, lLength + match.index + rLength + 1),
              text,
              tokens: this.lexer.inlineTokens(text)
            };
          }
        }
      }
      codespan(src) {
        const cap = this.rules.inline.code.exec(src);
        if (cap) {
          let text = cap[2].replace(/\n/g, " ");
          const hasNonSpaceChars = /[^ ]/.test(text);
          const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
            text = text.substring(1, text.length - 1);
          }
          text = escape2(text, true);
          return {
            type: "codespan",
            raw: cap[0],
            text
          };
        }
      }
      br(src) {
        const cap = this.rules.inline.br.exec(src);
        if (cap) {
          return {
            type: "br",
            raw: cap[0]
          };
        }
      }
      del(src) {
        const cap = this.rules.inline.del.exec(src);
        if (cap) {
          return {
            type: "del",
            raw: cap[0],
            text: cap[2],
            tokens: this.lexer.inlineTokens(cap[2])
          };
        }
      }
      autolink(src, mangle2) {
        const cap = this.rules.inline.autolink.exec(src);
        if (cap) {
          let text, href;
          if (cap[2] === "@") {
            text = escape2(this.options.mangle ? mangle2(cap[1]) : cap[1]);
            href = "mailto:" + text;
          } else {
            text = escape2(cap[1]);
            href = text;
          }
          return {
            type: "link",
            raw: cap[0],
            text,
            href,
            tokens: [
              {
                type: "text",
                raw: text,
                text
              }
            ]
          };
        }
      }
      url(src, mangle2) {
        let cap;
        if (cap = this.rules.inline.url.exec(src)) {
          let text, href;
          if (cap[2] === "@") {
            text = escape2(this.options.mangle ? mangle2(cap[0]) : cap[0]);
            href = "mailto:" + text;
          } else {
            let prevCapZero;
            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);
            text = escape2(cap[0]);
            if (cap[1] === "www.") {
              href = "http://" + text;
            } else {
              href = text;
            }
          }
          return {
            type: "link",
            raw: cap[0],
            text,
            href,
            tokens: [
              {
                type: "text",
                raw: text,
                text
              }
            ]
          };
        }
      }
      inlineText(src, smartypants2) {
        const cap = this.rules.inline.text.exec(src);
        if (cap) {
          let text;
          if (this.lexer.state.inRawBlock) {
            text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape2(cap[0]) : cap[0];
          } else {
            text = escape2(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
          }
          return {
            type: "text",
            raw: cap[0],
            text
          };
        }
      }
    };
    block = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: noopTest,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
    block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
    block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
    block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
    block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
    block.normal = merge({}, block);
    block.gfm = merge({}, block.normal, {
      table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
    });
    block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
    block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
    block.pedantic = merge({}, block.normal, {
      html: edit(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
      ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: noopTest,
      paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noopTest,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
        rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: noopTest,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/
    };
    inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
    inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
    inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
    inline.escapedEmSt = /\\\*|\\_/g;
    inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
    inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
    inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
    inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
    inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
    inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
    inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
    inline.normal = merge({}, inline);
    inline.pedantic = merge({}, inline.normal, {
      strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g
      },
      link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
      reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
    });
    inline.gfm = merge({}, inline.normal, {
      escape: edit(inline.escape).replace("])", "~|])").getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    });
    inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
    inline.breaks = merge({}, inline.gfm, {
      br: edit(inline.br).replace("{2,}", "*").getRegex(),
      text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    Lexer = class {
      constructor(options2) {
        this.tokens = [];
        this.tokens.links = /* @__PURE__ */ Object.create(null);
        this.options = options2 || defaults;
        this.options.tokenizer = this.options.tokenizer || new Tokenizer();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        this.tokenizer.lexer = this;
        this.inlineQueue = [];
        this.state = {
          inLink: false,
          inRawBlock: false,
          top: true
        };
        const rules = {
          block: block.normal,
          inline: inline.normal
        };
        if (this.options.pedantic) {
          rules.block = block.pedantic;
          rules.inline = inline.pedantic;
        } else if (this.options.gfm) {
          rules.block = block.gfm;
          if (this.options.breaks) {
            rules.inline = inline.breaks;
          } else {
            rules.inline = inline.gfm;
          }
        }
        this.tokenizer.rules = rules;
      }
      static get rules() {
        return {
          block,
          inline
        };
      }
      static lex(src, options2) {
        const lexer2 = new Lexer(options2);
        return lexer2.lex(src);
      }
      static lexInline(src, options2) {
        const lexer2 = new Lexer(options2);
        return lexer2.inlineTokens(src);
      }
      lex(src) {
        src = src.replace(/\r\n|\r/g, "\n");
        this.blockTokens(src, this.tokens);
        let next;
        while (next = this.inlineQueue.shift()) {
          this.inlineTokens(next.src, next.tokens);
        }
        return this.tokens;
      }
      blockTokens(src, tokens = []) {
        if (this.options.pedantic) {
          src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
        } else {
          src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
            return leading + "    ".repeat(tabs.length);
          });
        }
        let token, lastToken, cutSrc, lastParagraphClipped;
        while (src) {
          if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
            if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            continue;
          }
          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.raw.length === 1 && tokens.length > 0) {
              tokens[tokens.length - 1].raw += "\n";
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.raw;
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else if (!this.tokens.links[token.tag]) {
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            continue;
          }
          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          cutSrc = src;
          if (this.options.extensions && this.options.extensions.startBlock) {
            let startIndex = Infinity;
            const tempSrc = src.slice(1);
            let tempStart;
            this.options.extensions.startBlock.forEach(function(getStartIndex) {
              tempStart = getStartIndex.call({ lexer: this }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];
            if (lastParagraphClipped && lastToken.type === "paragraph") {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue.pop();
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            continue;
          }
          if (token = this.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === "text") {
              lastToken.raw += "\n" + token.raw;
              lastToken.text += "\n" + token.text;
              this.inlineQueue.pop();
              this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (src) {
            const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }
        this.state.top = true;
        return tokens;
      }
      inline(src, tokens = []) {
        this.inlineQueue.push({ src, tokens });
        return tokens;
      }
      inlineTokens(src, tokens = []) {
        let token, lastToken, cutSrc;
        let maskedSrc = src;
        let match;
        let keepPrevChar, prevChar;
        if (this.tokens.links) {
          const links = Object.keys(this.tokens.links);
          if (links.length > 0) {
            while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
              if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
                maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
              }
            }
          }
        }
        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        }
        while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        }
        while (src) {
          if (!keepPrevChar) {
            prevChar = "";
          }
          keepPrevChar = false;
          if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
            if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            continue;
          }
          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === "text" && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === "text" && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (token = this.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }
          cutSrc = src;
          if (this.options.extensions && this.options.extensions.startInline) {
            let startIndex = Infinity;
            const tempSrc = src.slice(1);
            let tempStart;
            this.options.extensions.startInline.forEach(function(getStartIndex) {
              tempStart = getStartIndex.call({ lexer: this }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== "_") {
              prevChar = token.raw.slice(-1);
            }
            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            continue;
          }
          if (src) {
            const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }
        return tokens;
      }
    };
    Renderer = class {
      constructor(options2) {
        this.options = options2 || defaults;
      }
      code(code, infostring, escaped2) {
        const lang = (infostring || "").match(/\S*/)[0];
        if (this.options.highlight) {
          const out = this.options.highlight(code, lang);
          if (out != null && out !== code) {
            escaped2 = true;
            code = out;
          }
        }
        code = code.replace(/\n$/, "") + "\n";
        if (!lang) {
          return "<pre><code>" + (escaped2 ? code : escape2(code, true)) + "</code></pre>\n";
        }
        return '<pre><code class="' + this.options.langPrefix + escape2(lang, true) + '">' + (escaped2 ? code : escape2(code, true)) + "</code></pre>\n";
      }
      blockquote(quote) {
        return `<blockquote>
${quote}</blockquote>
`;
      }
      html(html) {
        return html;
      }
      heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          const id = this.options.headerPrefix + slugger.slug(raw);
          return `<h${level} id="${id}">${text}</h${level}>
`;
        }
        return `<h${level}>${text}</h${level}>
`;
      }
      hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }
      list(body2, ordered, start) {
        const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
        return "<" + type + startatt + ">\n" + body2 + "</" + type + ">\n";
      }
      listitem(text) {
        return `<li>${text}</li>
`;
      }
      checkbox(checked) {
        return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }
      paragraph(text) {
        return `<p>${text}</p>
`;
      }
      table(header, body2) {
        if (body2)
          body2 = `<tbody>${body2}</tbody>`;
        return "<table>\n<thead>\n" + header + "</thead>\n" + body2 + "</table>\n";
      }
      tablerow(content) {
        return `<tr>
${content}</tr>
`;
      }
      tablecell(content, flags) {
        const type = flags.header ? "th" : "td";
        const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
        return tag + content + `</${type}>
`;
      }
      strong(text) {
        return `<strong>${text}</strong>`;
      }
      em(text) {
        return `<em>${text}</em>`;
      }
      codespan(text) {
        return `<code>${text}</code>`;
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }
      del(text) {
        return `<del>${text}</del>`;
      }
      link(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
          return text;
        }
        let out = '<a href="' + escape2(href) + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += ">" + text + "</a>";
        return out;
      }
      image(href, title, text) {
        href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
          return text;
        }
        let out = `<img src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += this.options.xhtml ? "/>" : ">";
        return out;
      }
      text(text) {
        return text;
      }
    };
    TextRenderer = class {
      strong(text) {
        return text;
      }
      em(text) {
        return text;
      }
      codespan(text) {
        return text;
      }
      del(text) {
        return text;
      }
      html(text) {
        return text;
      }
      text(text) {
        return text;
      }
      link(href, title, text) {
        return "" + text;
      }
      image(href, title, text) {
        return "" + text;
      }
      br() {
        return "";
      }
    };
    Slugger = class {
      constructor() {
        this.seen = {};
      }
      serialize(value) {
        return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }
      getNextSafeSlug(originalSlug, isDryRun) {
        let slug = originalSlug;
        let occurenceAccumulator = 0;
        if (this.seen.hasOwnProperty(slug)) {
          occurenceAccumulator = this.seen[originalSlug];
          do {
            occurenceAccumulator++;
            slug = originalSlug + "-" + occurenceAccumulator;
          } while (this.seen.hasOwnProperty(slug));
        }
        if (!isDryRun) {
          this.seen[originalSlug] = occurenceAccumulator;
          this.seen[slug] = 0;
        }
        return slug;
      }
      slug(value, options2 = {}) {
        const slug = this.serialize(value);
        return this.getNextSafeSlug(slug, options2.dryrun);
      }
    };
    Parser = class {
      constructor(options2) {
        this.options = options2 || defaults;
        this.options.renderer = this.options.renderer || new Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new TextRenderer();
        this.slugger = new Slugger();
      }
      static parse(tokens, options2) {
        const parser2 = new Parser(options2);
        return parser2.parse(tokens);
      }
      static parseInline(tokens, options2) {
        const parser2 = new Parser(options2);
        return parser2.parseInline(tokens);
      }
      parse(tokens, top = true) {
        let out = "", i2, j, k, l2, l3, row, cell, header, body2, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
        const l = tokens.length;
        for (i2 = 0; i2 < l; i2++) {
          token = tokens[i2];
          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
            ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
            if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
              out += ret || "";
              continue;
            }
          }
          switch (token.type) {
            case "space": {
              continue;
            }
            case "hr": {
              out += this.renderer.hr();
              continue;
            }
            case "heading": {
              out += this.renderer.heading(
                this.parseInline(token.tokens),
                token.depth,
                unescape2(this.parseInline(token.tokens, this.textRenderer)),
                this.slugger
              );
              continue;
            }
            case "code": {
              out += this.renderer.code(
                token.text,
                token.lang,
                token.escaped
              );
              continue;
            }
            case "table": {
              header = "";
              cell = "";
              l2 = token.header.length;
              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(
                  this.parseInline(token.header[j].tokens),
                  { header: true, align: token.align[j] }
                );
              }
              header += this.renderer.tablerow(cell);
              body2 = "";
              l2 = token.rows.length;
              for (j = 0; j < l2; j++) {
                row = token.rows[j];
                cell = "";
                l3 = row.length;
                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(
                    this.parseInline(row[k].tokens),
                    { header: false, align: token.align[k] }
                  );
                }
                body2 += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body2);
              continue;
            }
            case "blockquote": {
              body2 = this.parse(token.tokens);
              out += this.renderer.blockquote(body2);
              continue;
            }
            case "list": {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body2 = "";
              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = "";
                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);
                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                      item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                        item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: "text",
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }
                itemBody += this.parse(item.tokens, loose);
                body2 += this.renderer.listitem(itemBody, task, checked);
              }
              out += this.renderer.list(body2, ordered, start);
              continue;
            }
            case "html": {
              out += this.renderer.html(token.text);
              continue;
            }
            case "paragraph": {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }
            case "text": {
              body2 = token.tokens ? this.parseInline(token.tokens) : token.text;
              while (i2 + 1 < l && tokens[i2 + 1].type === "text") {
                token = tokens[++i2];
                body2 += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }
              out += top ? this.renderer.paragraph(body2) : body2;
              continue;
            }
            default: {
              const errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
          }
        }
        return out;
      }
      parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        let out = "", i2, token, ret;
        const l = tokens.length;
        for (i2 = 0; i2 < l; i2++) {
          token = tokens[i2];
          if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
            ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
            if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
              out += ret || "";
              continue;
            }
          }
          switch (token.type) {
            case "escape": {
              out += renderer.text(token.text);
              break;
            }
            case "html": {
              out += renderer.html(token.text);
              break;
            }
            case "link": {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }
            case "image": {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }
            case "strong": {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }
            case "em": {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }
            case "codespan": {
              out += renderer.codespan(token.text);
              break;
            }
            case "br": {
              out += renderer.br();
              break;
            }
            case "del": {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }
            case "text": {
              out += renderer.text(token.text);
              break;
            }
            default: {
              const errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
          }
        }
        return out;
      }
    };
    marked.options = marked.setOptions = function(opt) {
      merge(marked.defaults, opt);
      changeDefaults(marked.defaults);
      return marked;
    };
    marked.getDefaults = getDefaults;
    marked.defaults = defaults;
    marked.use = function(...args) {
      const opts = merge({}, ...args);
      const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
      let hasExtensions;
      args.forEach((pack) => {
        if (pack.extensions) {
          hasExtensions = true;
          pack.extensions.forEach((ext) => {
            if (!ext.name) {
              throw new Error("extension name required");
            }
            if (ext.renderer) {
              const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
              if (prevRenderer) {
                extensions.renderers[ext.name] = function(...args2) {
                  let ret = ext.renderer.apply(this, args2);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args2);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if (ext.tokenizer) {
              if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              if (extensions[ext.level]) {
                extensions[ext.level].unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                if (ext.level === "block") {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === "inline") {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if (ext.childTokens) {
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
        }
        if (pack.renderer) {
          const renderer = marked.defaults.renderer || new Renderer();
          for (const prop in pack.renderer) {
            const prevRenderer = renderer[prop];
            renderer[prop] = (...args2) => {
              let ret = pack.renderer[prop].apply(renderer, args2);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args2);
              }
              return ret;
            };
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          const tokenizer = marked.defaults.tokenizer || new Tokenizer();
          for (const prop in pack.tokenizer) {
            const prevTokenizer = tokenizer[prop];
            tokenizer[prop] = (...args2) => {
              let ret = pack.tokenizer[prop].apply(tokenizer, args2);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args2);
              }
              return ret;
            };
          }
          opts.tokenizer = tokenizer;
        }
        if (pack.walkTokens) {
          const walkTokens2 = marked.defaults.walkTokens;
          opts.walkTokens = function(token) {
            let values = [];
            values.push(pack.walkTokens.call(this, token));
            if (walkTokens2) {
              values = values.concat(walkTokens2.call(this, token));
            }
            return values;
          };
        }
        if (hasExtensions) {
          opts.extensions = extensions;
        }
        marked.setOptions(opts);
      });
    };
    marked.walkTokens = function(tokens, callback) {
      let values = [];
      for (const token of tokens) {
        values = values.concat(callback.call(marked, token));
        switch (token.type) {
          case "table": {
            for (const cell of token.header) {
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            }
            for (const row of token.rows) {
              for (const cell of row) {
                values = values.concat(marked.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
          case "list": {
            values = values.concat(marked.walkTokens(token.items, callback));
            break;
          }
          default: {
            if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
              marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
                values = values.concat(marked.walkTokens(token[childTokens], callback));
              });
            } else if (token.tokens) {
              values = values.concat(marked.walkTokens(token.tokens, callback));
            }
          }
        }
      }
      return values;
    };
    marked.parseInline = function(src, opt) {
      if (typeof src === "undefined" || src === null) {
        throw new Error("marked.parseInline(): input parameter is undefined or null");
      }
      if (typeof src !== "string") {
        throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
      }
      opt = merge({}, marked.defaults, opt || {});
      checkSanitizeDeprecation(opt);
      try {
        const tokens = Lexer.lexInline(src, opt);
        if (opt.walkTokens) {
          marked.walkTokens(tokens, opt.walkTokens);
        }
        return Parser.parseInline(tokens, opt);
      } catch (e2) {
        e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (opt.silent) {
          return "<p>An error occurred:</p><pre>" + escape2(e2.message + "", true) + "</pre>";
        }
        throw e2;
      }
    };
    marked.Parser = Parser;
    marked.parser = Parser.parse;
    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;
    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;
    marked.Tokenizer = Tokenizer;
    marked.Slugger = Slugger;
    marked.parse = marked;
    options = marked.options;
    setOptions = marked.setOptions;
    use = marked.use;
    walkTokens = marked.walkTokens;
    parseInline = marked.parseInline;
    parser = Parser.parse;
    lexer = Lexer.lex;
  }
});

// .svelte-kit/output/server/chunks/post.js
var Post;
var init_post = __esm({
  ".svelte-kit/output/server/chunks/post.js"() {
    init_shims();
    init_chunks();
    init_marked_esm();
    Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { title } = $$props;
      let { date } = $$props;
      if ($$props.title === void 0 && $$bindings.title && title !== void 0)
        $$bindings.title(title);
      if ($$props.date === void 0 && $$bindings.date && date !== void 0)
        $$bindings.date(date);
      return `<main class="${"col-span-5 sm:col-start-2 sm:col-end-5 m-auto p-8"}"><h1>${escape(title)}</h1>
    <p><i>Published: ${escape(date)}</i></p>

    ${slots.default ? slots.default({}) : ``}</main>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/first-post/_page.md.js
var page_md_exports = {};
__export(page_md_exports, {
  default: () => Page2,
  metadata: () => metadata
});
var metadata, Page2;
var init_page_md = __esm({
  ".svelte-kit/output/server/entries/pages/blog/first-post/_page.md.js"() {
    init_shims();
    init_chunks();
    init_post();
    metadata = {
      "title": "And There Was Light",
      "slug": "first-post",
      "date": "07-19-2022",
      "outline": "Hi, hello, and welcome to my blog! I'm going to be using this place as a dumping ground for my innermost thoughts."
    };
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
        default: () => {
          return `<p>Hi, hello, and welcome to my blog! I\u2019m going to be using this place as a dumping ground for my innermost thoughts. Everything regarding this blog is still very much in flux. I\u2019ve recently rebuilt my website with <a href="${"https://kit.svelte.dev/"}" rel="${"nofollow"}">sveltekit</a> and the experience has been suprisingly smooth. Still, the framework is actively under development, so things might change here as I continue working on this site.</p>
<p>There aren\u2019t any further updates from me at the moment. To whoever\u2019s reading this: I hope you have a wonderful day! \u{1F600}</p>`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/loneliness/_page.md.js
var page_md_exports2 = {};
__export(page_md_exports2, {
  default: () => Page3,
  metadata: () => metadata2
});
var metadata2, Page3;
var init_page_md2 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/loneliness/_page.md.js"() {
    init_shims();
    init_chunks();
    init_post();
    metadata2 = {
      "title": "On Loneliness",
      "slug": "loneliness",
      "date": "07-19-2022",
      "outline": "I suspect each person believes their loneliness is a special kind of loneliness..."
    };
    Page3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata2), {}, {
        default: () => {
          return `<p>I suspect each person believes their loneliness is a special kind of loneliness\u2026 The kind of mushy dejectedness that leaves your emotions out of focus, indistinct. I suspect this because I know this to be true for myself. My emotions are valid and true to be sure, but they need not be unique. Or at least, that\u2019s the idea.</p>`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/stargazing/_page.md.js
var page_md_exports3 = {};
__export(page_md_exports3, {
  default: () => Page4,
  metadata: () => metadata3
});
var metadata3, Page4;
var init_page_md3 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/stargazing/_page.md.js"() {
    init_shims();
    init_chunks();
    init_post();
    metadata3 = {
      "title": "Stargazing",
      "slug": "stargazing",
      "date": "09-12-2022",
      "outline": "A boy and his bird"
    };
    Page4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata3), {}, {
        default: () => {
          return `<p>Today I want to talk about a bird. Specifically, a dove\u2013the mourning dove. Not morning like the time of day, mourning as in \u201CI feel sad for a great loss I am in mourning.\u201D It\u2019s a powerful moniker to be sure but I feel it somewhat robs the sad little bird of some nuance. But it\u2019s not called that for no reason.</p>
<p>You see, the mourning dove is a peculiar creature but not something I was very aware of. In fact, they\u2019re quite common. US Fish &amp; Wildlife reported this year that there are at least 165 million individuals in the country. Thing is, they\u2019re also a popular game animal, with 9 million harvested last year alone. The mourning dove is known for its soft, sorrowful cry. An expression of grief\u2013a mourning. What exactly the mourning doves mourns is uncertain but I think I may have an idea.</p>
<p>Dead kin aside, the mourning dove as a symbol means different things to different people. Love, hope, peace, what have you. In myth, it\u2019s said to have been covered by the ashes of a dead lover, giving it distinctive chalky grey plumage. Thus, the mourning dove shares its pain not only through its call but its appearance. Personally, I can\u2019t quite define what the dove means to me but not for a lack of trying. I was first introduced to the bird by my mother. She had one as a pet but it was sickly and would struggle to hold up his head. \u201CYou take it. Go ahead and make it better,\u201D she said. She dropped off the bird at my apartment, hoping for the best.</p>
<p>Stargazing. That was the name of my new feathered friend\u2019s disorder. It\u2019s called stargazing because birds with it seem to look up towards the sky, as if they\u2019re admiring the stars. A poetic ailment for a poetic creature. I was in a terrible place when this bird came into my life. Lonely and heartbroken. Through it all I would try my best to care for the dove. I couldn\u2019t let it fly, because as soon as it took off it would hit a wall head first and plomp to the ground. So I made sure it had an easy going existence with occassional handling with hopes that it could acclimate to people. Whenever he\u2019d perch on my finger I had to hold his belly to keep him up. Somehow I felt he was at peace.</p>
<p>The one thing I never got used to was the crying. Mourning doves don\u2019t have a set time when they coo. No, they make these sad, pitiful noises at all hours. So every morning I\u2019d wake up to this deep bellowing lament of a cry. Every night I\u2019d lay my head down to the pitiful murmurs of a tired creature. Vividly, I remember coming home from one of the worst experiences of my life\u2013a story for another day\u2013and I was exhausted and miseriable and sad. I collapsed on my floor and balled up. I couldn\u2019t see anything, I couldn\u2019t feel anything, I couldn\u2019t speak. But I could hear. And what I heard was that cry. At my lowest point in life, it didn\u2019t feel like mourning, it felt like a mockery.</p>
<p>But no, the mourning dove was simply doing what a mourning dove does and if anything he was cooing at the sight of me, happy to see me safe and sound. In my mind, I took that sad cry of his as an affirmation. \u201CThings are bad now, but they can always be better. This too shall pass.\u201D I would use it as my mantra. Human language couldn\u2019t quite capture what I needed to hear in that time of my life but somehow this tiny little bird had all the wisdom in the world. In an odd sort of way, I wouldn\u2019t be here without his cooing.</p>
<p>Eventually, I had to let go of him but there are mourning doves where I live now and at dawn I can hear them play that old familiar tune. <em>Coo coo</em>. A gentleness washes over me in those moments and all I can do is appreciate their encouragement.</p>`;
        }
      })}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/blog/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
async function load({ url, params, fetch: fetch3 }) {
  const posts2 = await Promise.all(body);
  return {
    posts: posts2
  };
}
var posts, body;
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/blog/_page.ts.js"() {
    init_shims();
    posts = /* @__PURE__ */ Object.assign({ "./first-post/+page.md": () => Promise.resolve().then(() => (init_page_md(), page_md_exports)), "./loneliness/+page.md": () => Promise.resolve().then(() => (init_page_md2(), page_md_exports2)), "./stargazing/+page.md": () => Promise.resolve().then(() => (init_page_md3(), page_md_exports3)) });
    body = [];
    for (const path in posts) {
      body.push(posts[path]().then(({ metadata: metadata4 }) => metadata4));
    }
    console.log(body);
  }
});

// .svelte-kit/output/server/entries/pages/blog/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page5
});
var Page5;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/blog/_page.svelte.js"() {
    init_shims();
    init_chunks();
    init_marked_esm();
    Page5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { data } = $$props;
      console.log(`data exported`, data);
      if ($$props.data === void 0 && $$bindings.data && data !== void 0)
        $$bindings.data(data);
      return `<main class="${"col-span-5 sm:col-start-2 sm:col-end-5 m-auto p-8"}"><ul>${each(data.posts, (post) => {
        return `<article class="${"p-6"}"><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug, true)}"><h2 class="${"text-3xl my-2 font-bold"}">${escape(post.title)}</h2>
					<p class="${"italic font-light"}">${escape(post.outline)}
					</p></a>
			</article>`;
      })}</ul></main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  shared: () => page_ts_exports,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_shims();
    init_page_ts();
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/blog/_page.svelte-6b8e624f.js";
    imports4 = ["_app/immutable/components/pages/blog/_page.svelte-6b8e624f.js", "_app/immutable/chunks/index-dcb258cc.js", "_app/immutable/chunks/marked.esm-54748e82.js", "_app/immutable/modules/pages/blog/_page.ts-968936b0.js", "_app/immutable/chunks/preload-helper-aa6bc0ce.js", "_app/immutable/chunks/_page-00e8b21f.js"];
    stylesheets4 = [];
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5
});
var index5, component5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_shims();
    index5 = 4;
    component5 = async () => (await Promise.resolve().then(() => (init_page_md(), page_md_exports))).default;
    file5 = "_app/immutable/components/pages/blog/first-post/_page.md-919f8be9.js";
    imports5 = ["_app/immutable/components/pages/blog/first-post/_page.md-919f8be9.js", "_app/immutable/chunks/index-dcb258cc.js", "_app/immutable/chunks/post-703f9fcc.js", "_app/immutable/chunks/marked.esm-54748e82.js"];
    stylesheets5 = [];
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6
});
var index6, component6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_shims();
    index6 = 5;
    component6 = async () => (await Promise.resolve().then(() => (init_page_md2(), page_md_exports2))).default;
    file6 = "_app/immutable/components/pages/blog/loneliness/_page.md-9ddaa536.js";
    imports6 = ["_app/immutable/components/pages/blog/loneliness/_page.md-9ddaa536.js", "_app/immutable/chunks/index-dcb258cc.js", "_app/immutable/chunks/post-703f9fcc.js", "_app/immutable/chunks/marked.esm-54748e82.js"];
    stylesheets6 = [];
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_shims();
    index7 = 6;
    component7 = async () => (await Promise.resolve().then(() => (init_page_md3(), page_md_exports3))).default;
    file7 = "_app/immutable/components/pages/blog/stargazing/_page.md-52f2b4a9.js";
    imports7 = ["_app/immutable/components/pages/blog/stargazing/_page.md-52f2b4a9.js", "_app/immutable/chunks/index-dcb258cc.js", "_app/immutable/chunks/post-703f9fcc.js", "_app/immutable/chunks/marked.esm-54748e82.js"];
    stylesheets7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/portfolio/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => Page6
});
var Page6;
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/portfolio/_page.svelte.js"() {
    init_shims();
    init_chunks();
    Page6 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<main class="${"col-span-5 grid sm:grid-cols-2 m-auto p-8"}"><h1 class="${"text-5xl text-center"}">Here be dragons \u{1F409}</h1></main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  file: () => file8,
  imports: () => imports8,
  index: () => index8,
  stylesheets: () => stylesheets8
});
var index8, component8, file8, imports8, stylesheets8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_shims();
    index8 = 7;
    component8 = async () => (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default;
    file8 = "_app/immutable/components/pages/portfolio/_page.svelte-de4b369c.js";
    imports8 = ["_app/immutable/components/pages/portfolio/_page.svelte-de4b369c.js", "_app/immutable/chunks/index-dcb258cc.js"];
    stylesheets8 = [];
  }
});

// .svelte-kit/.svelte-kit/entry.js
var entry_exports = {};
__export(entry_exports, {
  default: () => svelteKit
});
module.exports = __toCommonJS(entry_exports);
init_shims();
var import_process = __toESM(require("process"), 1);

// .svelte-kit/output/server/index.js
init_shims();
init_chunks();
var cookie = __toESM(require_cookie(), 1);

// node_modules/devalue/devalue.js
init_shims();
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i2) => {
            keys.push(`[${i2}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i2) => {
    names.set(entry[0], get_name(i2));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i2) => i2 in thing ? stringify(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i2) => {
            statements.push(`${name}[${i2}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_string(str) {
  let result = '"';
  for (let i2 = 0; i2 < str.length; i2 += 1) {
    const char = str.charAt(i2);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i2];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// .svelte-kit/output/server/index.js
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, body2) {
    this.status = status;
    if (typeof body2 === "string") {
      this.body = { message: body2 };
    } else if (body2) {
      this.body = body2;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ValidationError = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
var DATA_SUFFIX = "/__data.js";
function negotiate(accept, types3) {
  const parts = [];
  accept.split(",").forEach((str, i2) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i: i2 });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types3) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m2) => {
    if (m2 in mod) {
      const replacement = m2 === "del" ? "DELETE" : m2.toUpperCase();
      throw Error(
        `Endpoint method "${m2}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data) {
  try {
    return new Response(`window.__sveltekit_data = ${devalue(data)}`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  } catch (e2) {
    const error2 = e2;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `${error2.message} (data.${match[2]})` : error2.message;
    return new Response(`throw new Error(${JSON.stringify(message)})`, {
      headers: {
        "content-type": "application/javascript"
      }
    });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options2, status, message) {
  return new Response(options2.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options2, error2) {
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body2 = handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body2), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options2, status, body2.message);
}
function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options2.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  return new Response(void 0, {
    status,
    headers: { location }
  });
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    throw new Error(`${event.routeId} is not prerenderable`);
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-routeid", event.routeId);
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    } else if (error2 instanceof ValidationError) {
      return json(error2.data, { status: error2.status });
    }
    throw error2;
  }
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e2) {
    const error2 = normalize_error(e2);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    if (!(error2 instanceof HttpError)) {
      options2.handle_error(error2, event);
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options2, error2)
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e2) {
    const error2 = normalize_error(e2);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return { type: "error", error: error2 };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  var _a;
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  const type = (_a = event.request.headers.get("content-type")) == null ? void 0 : _a.split("; ")[0];
  if (type !== "application/x-www-form-urlencoded" && type !== "multipart/form-data") {
    throw new Error(`Actions expect form-encoded data (received ${type})`);
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i2) => {
        check_serializability(child, id, `${path}[${i2}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(`${path} returned from action in ${id} cannot be serialized as JSON`);
}
function get_cookies(request, url) {
  const initial_cookies = cookie.parse(request.headers.get("cookie") ?? "");
  const new_cookies = [];
  const cookies = {
    get(name, opts) {
      const decode = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      let i2 = new_cookies.length;
      while (i2--) {
        const cookie2 = new_cookies[i2];
        if (cookie2.name === name && domain_matches(url.hostname, cookie2.options.domain) && path_matches(url.pathname, cookie2.options.path)) {
          return cookie2.value;
        }
      }
      return name in initial_cookies ? decode(initial_cookies[name]) : void 0;
    },
    set(name, value, options2 = {}) {
      new_cookies.push({
        name,
        value,
        options: {
          httpOnly: true,
          secure: true,
          ...options2
        }
      });
    },
    delete(name) {
      new_cookies.push({ name, value: "", options: { expires: new Date(0) } });
      delete initial_cookies[name];
    }
  };
  return { cookies, new_cookies };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function create_fetch({ event, options: options2, state, route, prerender_default, resolve_opts }) {
  const fetched = [];
  const initial_cookies = cookie.parse(event.request.headers.get("cookie") || "");
  const set_cookies = [];
  function get_cookie_header(url, header) {
    const new_cookies = {};
    for (const cookie2 of set_cookies) {
      if (!domain_matches(url.hostname, cookie2.domain))
        continue;
      if (!path_matches(url.pathname, cookie2.path))
        continue;
      new_cookies[cookie2.name] = cookie2.value;
    }
    const combined_cookies = {
      ...initial_cookies,
      ...new_cookies,
      ...cookie.parse(header ?? "")
    };
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const fetcher = async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    let dependency;
    const response = await options2.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie2)
              request2.headers.set("cookie", cookie2);
          }
          let response3 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response3 = new Response("", {
              status: response3.status,
              statusText: response3.statusText,
              headers: response3.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response3.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response3;
        }
        let response2;
        const prefix = options2.paths.assets || options2.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options2.manifest.assets.has(filename);
        const is_asset_html = options2.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file9 = is_asset ? filename : filename_html;
          if (options2.read) {
            const type = is_asset ? options2.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options2.read(file9), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie2 = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie2) {
            request2.headers.set("cookie", cookie2);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string") {
          throw new Error("Request body must be a string");
        }
        response2 = await respond(request2, options2, {
          prerender_default,
          ...state,
          initiator: route
        });
        if (state.prerendering) {
          dependency = { response: response2, body: null };
          state.prerendering.dependencies.set(url.pathname, dependency);
        }
        return response2;
      }
    });
    const set_cookie = response.headers.get("set-cookie");
    if (set_cookie) {
      set_cookies.push(
        ...set_cookie_parser.splitCookiesString(set_cookie).map((str) => set_cookie_parser.parseString(str))
      );
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text() {
          const body2 = await response2.text();
          if (!body2 || typeof body2 === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: request.url.startsWith(event.url.origin) ? request.url.slice(event.url.origin.length) : request.url,
              method: request.method,
              request_body,
              response_body: body2,
              response: response2
            });
            const get = response2.headers.get;
            response2.headers.get = (key3) => {
              const lower2 = key3.toLowerCase();
              const value = get.call(response2.headers, lower2);
              if (value && !lower2.startsWith("x-sveltekit-")) {
                const included = resolve_opts.filterSerializedResponseHeaders(lower2, value);
                if (!included) {
                  throw new Error(
                    `Failed to get response header "${lower2}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#handle`
                  );
                }
              }
              return value;
            };
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    return proxy;
  };
  return { fetcher, fetched, cookies: set_cookies };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
    return inspect(url, opts);
  };
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({ event, fetcher, node, parent, server_data_promise }) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: fetcher,
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
async function unwrap_promises(object) {
  const unwrapped = {};
  for (const key2 in object) {
    unwrapped[key2] = await object[key2];
  }
  return unwrapped;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i2 = value.length;
  if (typeof value === "string") {
    while (i2)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
  } else {
    while (i2)
      hash2 = hash2 * 33 ^ value[--i2];
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s2 = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i2 = 0; i2 < array2.length; i2 += 16) {
    const w = array2.subarray(i2, i2 + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w[i22];
      } else {
        a = w[i22 + 1 & 15];
        b = w[i22 + 14 & 15];
        tmp = w[i22 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i22 & 15] + w[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  let prime = 2;
  for (let i2 = 0; i2 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i2 < 8) {
        init[i2] = frac(prime ** (1 / 2));
      }
      key[i2] = frac(prime ** (1 / 3));
      i2++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i2 = 0; i2 < bytes.length; i2 += 4) {
    const a = bytes[i2 + 0];
    const b = bytes[i2 + 1];
    const c = bytes[i2 + 2];
    const d = bytes[i2 + 3];
    bytes[i2 + 0] = d;
    bytes[i2 + 1] = c;
    bytes[i2 + 2] = b;
    bytes[i2 + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i2;
  for (i2 = 2; i2 < l; i2 += 3) {
    result += chars2[bytes[i2 - 2] >> 2];
    result += chars2[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars2[(bytes[i2 - 1] & 15) << 2 | bytes[i2] >> 6];
    result += chars2[bytes[i2] & 63];
  }
  if (i2 === l + 1) {
    result += chars2[bytes[i2 - 2] >> 2];
    result += chars2[(bytes[i2 - 2] & 3) << 4];
    result += "==";
  }
  if (i2 === l) {
    result += chars2[bytes[i2 - 2] >> 2];
    result += chars2[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars2[(bytes[i2 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  #use_hashes;
  #script_needs_csp;
  #style_needs_csp;
  #directives;
  #script_src;
  #style_src;
  #nonce;
  constructor(use_hashes, directives, nonce, dev) {
    this.#use_hashes = use_hashes;
    this.#directives = dev ? { ...directives } : directives;
    const d = this.#directives;
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    this.#script_needs_csp = !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.#style_needs_csp = !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  nonce = generate_nonce();
  csp_provider;
  report_only_provider;
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  cookies,
  options: options2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options2.manifest._;
  const stylesheets9 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i2 = 0; i2 < branch.length; i2 += 1) {
      data = { ...data, ...branch[i2].data };
      props[`data_${i2}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options2.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets9.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body2 } = rendered;
  const csp = new Csp(options2.csp, {
    dev: options2.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body2);
  let assets2;
  if (options2.paths.assets) {
    assets2 = options2.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options2.paths.base;
  } else {
    const segments = event.url.pathname.slice(options2.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = devalue(branch.map(({ server_data }) => server_data));
  } catch (e2) {
    const error3 = e2;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match)
      throw new Error(`${error3.message} (data.${match[2]})`);
    throw error3;
  }
  if (form_value) {
    serialized.form = devalue(form_value);
  }
  const init_app = `
		import { start } from ${s2(prefixed(entry.file))};

		start({
			env: ${s2(options2.public_env)},
			hydrate: ${page_config.ssr ? `{
				status: ${status},
				error: ${s2(error2)},
				node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s2(event.routeId)},
				data: ${serialized.data},
				form: ${serialized.form}
			}` : "null"},
			paths: ${s2(options2.paths)},
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			trailing_slash: ${s2(options2.trailing_slash)}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options2.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options2.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets9) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body2 += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body2 += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options2.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const html = await resolve_opts.transformPageChunk({
    html: options2.app_template({ head, body: body2, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    for (const new_cookie of cookies) {
      const { name, value, ...options22 } = new_cookie;
      headers.append("set-cookie", cookie.serialize(name, value, options22));
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options: options2, state, status, error: error2, resolve_opts }) {
  const { fetcher, fetched, cookies } = create_fetch({
    event,
    options: options2,
    state,
    route: GENERIC_ERROR,
    resolve_opts
  });
  try {
    const branch = [];
    const default_layout = await options2.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    if (ssr) {
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetcher,
        node: default_layout,
        parent: async () => ({}),
        server_data_promise,
        state
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options2.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      cookies,
      event,
      resolve_opts
    });
  } catch (error3) {
    return static_error_page(options2, 500, handle_error_and_jsonify(event, options2, error3).message);
  }
}
async function render_page(event, route, page2, options2, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (is_action_json_request(event)) {
    const node = await options2.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options2, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n) => n == void 0 ? n : options2.manifest._.nodes[n]()),
      options2.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    const { fetcher, fetched, cookies } = create_fetch({
      event,
      options: options2,
      state,
      route,
      prerender_default: should_prerender,
      resolve_opts
    });
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        cookies,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i2) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i2; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e2) {
          load_error = e2;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.map((node, i2) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetcher,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i2; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            server_data_promise: server_promises[i2],
            state
          });
        } catch (e2) {
          load_error = e2;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i2 = 0; i2 < nodes.length; i2 += 1) {
      const node = nodes[i2];
      if (node) {
        try {
          const server_data = await server_promises[i2];
          const data = await load_promises[i2];
          branch.push({ node, server_data, data });
        } catch (e2) {
          const err = normalize_error(e2);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body2 = `window.__sveltekit_data = ${JSON.stringify({
                type: "redirect",
                location: err.location
              })}`;
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = handle_error_and_jsonify(event, options2, err);
          while (i2--) {
            if (page2.errors[i2]) {
              const index9 = page2.errors[i2];
              const node2 = await options2.manifest._.nodes[index9]();
              let j = i2;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                cookies
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body2 = `window.__sveltekit_data = ${devalue({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      })}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body2),
        body: body2
      });
    }
    return await render_response({
      event,
      options: options2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched,
      cookies
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options: options2,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, names, types3, matchers) {
  const params = {};
  for (let i2 = 0; i2 < names.length; i2 += 1) {
    const name = names[i2];
    const type = types3[i2];
    const value = match[i2 + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options2, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.url.searchParams.get("__invalid")) == null ? void 0 : _a.split("").map((x2) => x2 === "y")) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options2.trailing_slash
    );
    url.searchParams.delete("__invalid");
    url.searchParams.delete("__id");
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i2) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n == void 0 ? n : await options2.manifest._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i2; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e2) {
          aborted = true;
          throw e2;
        }
      });
    });
    const promises = functions.map(async (fn, i2) => {
      if (!invalidated[i2]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i2) => p.catch((error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i2 + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options2, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data);
  } catch (e2) {
    const error2 = normalize_error(e2);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data);
    } else {
      return data_response(handle_error_and_jsonify(event, options2, error2));
    }
  }
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
async function respond(request, options2, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  if (options2.csrf.check_origin) {
    const type = (_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";")[0];
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && (type === "application/x-www-form-urlencoded" || type === "multipart/form-data");
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options2.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options2.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options2.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options2.manifest._.matchers();
    for (const candidate of options2.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options2.trailing_slash);
    if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const { cookies, new_cookies } = get_cookies(request, url);
  if (state.prerendering)
    disable_search(url);
  const event = {
    cookies,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"svelte-adapter-firebase"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower2 = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower2 === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower2 in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower2] = value;
          if (state.prerendering && lower2 === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          cookies: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options2, state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options2, state, resolve_opts);
        } else if (route.endpoint) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else {
          throw new Error("This should never happen");
        }
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response.headers.set(key2, value);
          }
        }
        for (const new_cookie of new_cookies) {
          response.headers.append(
            "set-cookie",
            cookie.serialize(new_cookie.name, new_cookie.value, new_cookie.options)
          );
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options: options2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e2) {
      const error2 = e2 instanceof HttpError ? e2 : coalesce_to_error(e2);
      return handle_fatal_error(event2, options2, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options2.hooks.handle({
      event,
      resolve,
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of ["cache-control", "content-location", "date", "expires", "vary"]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    return response;
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
    return handle_fatal_error(event, options2, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body: body2, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		    <script src="https://kit.fontawesome.com/b2cf9f0da9.js" crossorigin="anonymous"><\/script>\n		' + head + "\n	</head>\n	<body>\n		<div>" + body2 + "</div>\n	</body>\n</html>\n";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: "Internal Error" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module2 = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module2.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module2.handle || (({ event, resolve }) => resolve(event)),
        handleError: module2.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module2.handleFetch || (({ request, fetch: fetch22 }) => fetch22(request))
      };
    }
  }
  async respond(request, options2 = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options2);
  }
};

// .svelte-kit/output/server/manifest.js
init_shims();
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["93c8cffd4e68e8b6ca34e6ac8d0c6d78.png", "face.png", "favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-85f91c4b.js", "imports": ["_app/immutable/start-85f91c4b.js", "_app/immutable/chunks/preload-helper-aa6bc0ce.js", "_app/immutable/chunks/index-dcb258cc.js", "_app/immutable/chunks/singletons-423070a1.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "blog",
        pattern: /^\/blog\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "portfolio",
        pattern: /^\/portfolio\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 7 },
        endpoint: null
      },
      {
        id: "blog/first-post",
        pattern: /^\/blog\/first-post\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "blog/loneliness",
        pattern: /^\/blog\/loneliness\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 5 },
        endpoint: null
      },
      {
        id: "blog/stargazing",
        pattern: /^\/blog\/stargazing\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 6 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/.svelte-kit/firebase-to-svelte-kit.js
init_shims();
function toSvelteKitRequest(request) {
  const protocol2 = request.headers["x-forwarded-proto"] || "http";
  const host = `${protocol2}://${request.headers["x-forwarded-host"]}`;
  const { href, pathname, searchParams: searchParameters } = new URL(request.url || "", host);
  return new Request(href, {
    method: request.method,
    headers: toSvelteKitHeaders(request.headers),
    body: request.rawBody ? request.rawBody : null,
    host,
    path: pathname,
    query: searchParameters
  });
}
function toSvelteKitHeaders(headers) {
  const finalHeaders = {};
  for (const [key2, value] of Object.entries(headers)) {
    finalHeaders[key2] = Array.isArray(value) ? value.join(",") : value;
  }
  return finalHeaders;
}

// .svelte-kit/.svelte-kit/entry.js
var server = new Server(manifest);
async function svelteKit(request, response) {
  await server.init({
    env: import_process.default.env
  });
  const rendered = await server.respond(toSvelteKitRequest(request));
  const body2 = await rendered.text();
  return rendered ? response.writeHead(rendered.status, Object.fromEntries(rendered.headers)).end(body2) : response.writeHead(404, "Not Found").end();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
