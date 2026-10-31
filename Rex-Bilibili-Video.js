/* WidgetMetadata {
  "id": "com.local.rex.bilibili.video",
  "title": "哔哩哔哩 v0.2.7",
  "version": "0.2.7",
  "author": "ukonic"
} */

var WidgetMetadata = {
  id: "com.local.rex.bilibili.video",
  title: "哔哩哔哩 v0.2.7",
  description: "提供 B站视频推荐、分区、搜索、详情、多P、合集、UP主投稿、弹幕及多画质播放能力。",
  author: "ukonic",
  version: "0.2.7",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
  globalParams: [
    {
      name: "biliCookie",
      title: "B站 Cookie（可选）",
      type: "input",
      value: "",
      description: "仅填写你自己的 B站 Cookie。模块代码不记录 Cookie；Rex 参数本身请勿截图或分享，客户端如何保存参数由 Rex 决定。"
    },
    {
      name: "biliMaxQuality",
      title: "最高画质",
      type: "enumeration",
      value: "127",
      description: "先探测账号可用的最高档位，再选择不高于所选档位的最高可直接播放合并流；实际结果受视频、账号权限和 Rex 播放能力限制。",
      enumOptions: [
        { title: "账号可用最高画质", value: "127" },
        { title: "杜比视界（可用时）", value: "126" },
        { title: "HDR 真彩（可用时）", value: "125" },
        { title: "4K（可用时）", value: "120" },
        { title: "1080P 60帧（可用时）", value: "116" },
        { title: "1080P+ 高码率（可用时）", value: "112" },
        { title: "1080P", value: "80" },
        { title: "720P 60帧（可用时）", value: "74" },
        { title: "720P", value: "64" },
        { title: "480P", value: "32" },
        { title: "360P", value: "16" }
      ]
    }
  ],
  modules: [
    {
      id: "biliPopular",
      title: "B站热门",
      description: "B站当前热门视频",
      functionName: "loadBiliPopular",
      cacheDuration: 60,
      params: [
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "20" }
      ]
    },
    {
      id: "biliRanking",
      title: "B站排行榜",
      description: "全站或指定分区排行榜",
      functionName: "loadBiliRanking",
      cacheDuration: 120,
      params: [
        {
          name: "rid",
          title: "排行分区",
          type: "enumeration",
          value: "0",
          enumOptions: [
            { title: "全站", value: "0" },
            { title: "动画", value: "1" },
            { title: "番剧", value: "13" },
            { title: "国创", value: "167" },
            { title: "音乐", value: "3" },
            { title: "游戏", value: "4" },
            { title: "知识", value: "36" },
            { title: "生活", value: "160" },
            { title: "影视", value: "181" }
          ]
        },
        { name: "count", title: "显示数量", type: "count", value: "30" }
      ]
    },
    {
      id: "biliWeekly",
      title: "B站每周必看",
      description: "默认加载最新一期，也可输入期数",
      functionName: "loadBiliWeekly",
      cacheDuration: 300,
      params: [
        { name: "number", title: "期数（可选）", type: "input", value: "" },
        { name: "count", title: "显示数量", type: "count", value: "30" }
      ]
    },
    {
      id: "biliPrecious",
      title: "B站入站必刷",
      description: "B站入站必刷精选视频",
      functionName: "loadBiliPrecious",
      cacheDuration: 300,
      params: [
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "30" }
      ]
    },
    {
      id: "biliCategory",
      title: "B站分区新视频",
      description: "按分区查看最新公开视频",
      functionName: "loadBiliCategory",
      cacheDuration: 60,
      params: [
        {
          name: "tid",
          title: "分区",
          type: "enumeration",
          value: "1",
          enumOptions: [
            { title: "动画", value: "1" },
            { title: "番剧", value: "13" },
            { title: "国创", value: "167" },
            { title: "音乐", value: "3" },
            { title: "舞蹈", value: "129" },
            { title: "游戏", value: "4" },
            { title: "知识", value: "36" },
            { title: "资讯", value: "202" },
            { title: "娱乐", value: "5" },
            { title: "影视", value: "181" },
            { title: "生活", value: "160" },
            { title: "美食", value: "211" },
            { title: "动物圈", value: "217" },
            { title: "汽车", value: "223" },
            { title: "运动", value: "234" },
            { title: "科技", value: "188" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "20" }
      ]
    },
    {
      id: "biliCustomCategory",
      title: "自定义 B站分区",
      description: "输入 B站分区 ID 查看最新视频",
      functionName: "loadBiliCategory",
      cacheDuration: 60,
      params: [
        { name: "tid", title: "分区 ID", type: "input", value: "1" },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "20" }
      ]
    },
    {
      id: "biliUserVideos",
      title: "UP主过往投稿",
      description: "点击详情页 UP主头像自动打开，也可手动输入 MID；主接口受风控时会尝试动态页回退",
      functionName: "loadBiliUserVideos",
      cacheDuration: 60,
      params: [
        { name: "peopleId", title: "UP主 MID", type: "input", description: "兼容 Rex 人物回调，也可手动输入详情页显示的 MID" },
        {
          name: "order",
          title: "排序",
          type: "enumeration",
          value: "pubdate",
          enumOptions: [
            { title: "最新发布", value: "pubdate" },
            { title: "最多播放", value: "click" },
            { title: "最多收藏", value: "stow" }
          ]
        },
        { name: "page", title: "页码", type: "page" },
        { name: "count", title: "每页数量", type: "count", value: "20" }
      ]
    },
    {
      id: "biliById",
      title: "打开 BV / AV / 视频链接",
      description: "支持 BV、av号、B站视频链接、b23.tv 短链接和带 p= 的分P链接",
      functionName: "loadBiliVideoById",
      cacheDuration: 30,
      params: [
        {
          name: "input",
          title: "BV / AV / 视频链接",
          type: "input",
          description: "例如 BV1xx411c7mD、av170001、B站视频链接或 b23.tv 短链接",
          value: "BV1xx411c7mD"
        }
      ]
    },
    {
      id: "biliDiagnostics",
      title: "B站模块诊断",
      description: "检查 Cookie 登录/会员状态、WBI、热门、详情、DASH 最高档、可直接播放画质和弹幕链路",
      functionName: "runBiliDiagnostics",
      cacheDuration: 0,
      params: [
        { name: "input", title: "测试 BV 号（可选）", type: "input", value: "" }
      ]
    },
    {
      id: "loadResource",
      title: "加载 B站播放资源",
      functionName: "loadResource",
      type: "stream",
      cacheDuration: 0,
      params: []
    },
    {
      id: "searchDanmu",
      title: "搜索 B站弹幕",
      functionName: "searchDanmu",
      type: "danmu",
      params: []
    },
    {
      id: "getDetail",
      title: "获取 B站分P弹幕目录",
      functionName: "getBiliDanmuDetail",
      type: "danmu",
      params: []
    },
    {
      id: "getComments",
      title: "获取 B站弹幕",
      functionName: "getCommentsById",
      type: "danmu",
      params: []
    },
    {
      id: "getDanmuWithSegmentTime",
      title: "获取指定时刻 B站弹幕",
      functionName: "getDanmuWithSegmentTime",
      type: "danmu",
      params: []
    }
  ],
  search: {
    title: "搜索 B站视频",
    functionName: "searchBiliVideos",
    params: [
      { name: "keyword", title: "关键词", type: "input" },
      {
        name: "order",
        title: "排序",
        type: "enumeration",
        value: "totalrank",
        enumOptions: [
          { title: "综合排序", value: "totalrank" },
          { title: "最多播放", value: "click" },
          { title: "最新发布", value: "pubdate" },
          { title: "最多弹幕", value: "dm" },
          { title: "最多收藏", value: "stow" }
        ]
      },
      {
        name: "duration",
        title: "时长",
        type: "enumeration",
        value: "0",
        enumOptions: [
          { title: "全部时长", value: "0" },
          { title: "10分钟以下", value: "1" },
          { title: "10–30分钟", value: "2" },
          { title: "30–60分钟", value: "3" },
          { title: "60分钟以上", value: "4" }
        ]
      },
      { name: "tids", title: "分区 ID（可选）", type: "input", value: "0" },
      { name: "page", title: "页码", type: "page" },
      { name: "count", title: "每页数量", type: "count", value: "20" }
    ]
  }
};

var BILI_API = "https://api.bilibili.com";
var BILI_BASE = "https://www.bilibili.com";
var BILI_VERSION = "0.2.7";
var BILI_BUILD_DATE = "2026-10-31";
var BILI_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
var BILI_WBI_CACHE = { key: "", expiresAt: 0 };
var BILI_ANON_CACHE = { cookie: "", expiresAt: 0 };
var BILI_DANMU_CACHE = { cid: "", xml: "", expiresAt: 0 };
var BILI_UP_FEED_OFFSETS = Object.create(null);
var BILI_UP_PROFILE_CACHE = Object.create(null);
var BILI_LAST_DIAGNOSTIC = { id: "", code: "", stage: "", message: "" };
// Rex 为单用户模块运行时；Cookie 只在当前调用进程内用于 B站授权请求，不进入 storage、日志或播放资源对象。
var BILI_RUNTIME_AUTH = { cookie: "", configured: false };
var BILI_LAST_PLAYBACK_REPORT = {
  requestedQuality: 0,
  dashMaxQuality: 0,
  dashVideoCount: 0,
  dashAudioCount: 0,
  dashHasAudio: false,
  dashState: "none",
  progressiveMaxQuality: 0,
  resourceCount: 0,
  note: ""
};

var BILI_FEATURES = {
  popular: true,
  ranking: true,
  weekly: true,
  precious: true,
  category: true,
  search: true,
  shortLink: true,
  userVideos: true,
  collections: true,
  tags: true,
  related: true,
  progressivePlayback: true,
  cookiePlayback: true,
  dashProbe: true,
  dashPlayback: false,
  subtitles: false,
  danmu: true,
  diagnostics: true
};

var BILI_CATEGORY_NAMES = {
  "1": "动画", "13": "番剧", "167": "国创", "3": "音乐",
  "129": "舞蹈", "4": "游戏", "36": "知识", "202": "资讯",
  "5": "娱乐", "181": "影视", "160": "生活", "211": "美食",
  "217": "动物圈", "223": "汽车", "234": "运动", "188": "科技"
};

var BILI_QUALITY_NAMES = {
  "127": "8K 超高清", "126": "杜比视界", "125": "HDR 真彩",
  "120": "4K 超清", "116": "1080P 60帧", "112": "1080P+ 高码率",
  "80": "1080P 高清", "74": "720P 60帧", "64": "720P 高清",
  "32": "480P 清晰", "16": "360P 流畅", "6": "240P 极速"
};

function biliDiagnosticId() {
  var value = ((Date.now() % 1679616) * 997 + Math.floor(Math.random() * 1679616)) % 1679616;
  var text = value.toString(36).toUpperCase();
  while (text.length < 4) text = "0" + text;
  return text.slice(-4);
}

function biliLog(traceId, event, stage, message) {
  console.log("[BILI][" + traceId + "][" + event + "][" + stage + "] " + biliText(message));
}

function biliMakeError(code, stage, message, context) {
  var diagnosticId = biliDiagnosticId();
  var details = ["[" + code + "] " + message, "阶段：" + stage, "诊断ID：" + diagnosticId];
  if (context && context.bvid) details.push("BV：" + context.bvid);
  if (context && context.page) details.push("P：" + context.page);
  var error = new Error(details.join("\n"));
  error.code = code;
  error.stage = stage;
  error.diagnosticId = diagnosticId;
  error.context = context || {};
  BILI_LAST_DIAGNOSTIC = { id: diagnosticId, code: code, stage: stage, message: message };
  biliLog(diagnosticId, "ERROR", stage, code + " " + message);
  return error;
}

function biliApiErrorCode(code) {
  if (Number(code) === -412 || Number(code) === -352) return "BILI-RISK-412";
  if (Number(code) === 429 || Number(code) === -429) return "BILI-RISK-429";
  if (Number(code) === -101) return "BILI-AUTH-002";
  if (Number(code) === -10403 || Number(code) === -403) return "BILI-AUTH-003";
  if (Number(code) === -404) return "BILI-INPUT-404";
  return "BILI-API-001";
}

function biliText(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function biliJson(value) {
  if (typeof value === "string") return JSON.parse(value);
  return value || {};
}

function biliResponseStatus(response) {
  if (!response) return 0;
  var value = response.statusCode;
  if (value === undefined || value === null || value === "") value = response.status;
  var status = Number(value);
  return isFinite(status) && status > 0 ? status : 0;
}

function biliHttps(value) {
  var url = biliText(value).trim();
  if (url.indexOf("//") === 0) return "https:" + url;
  if (/^http:\/\/[^/]*(?:hdslb|bilivideo|bilibili)\.com\//i.test(url)) {
    return "https:" + url.slice(5);
  }
  return url;
}

function biliHeaders(referer, cookie) {
  var headers = {
    "User-Agent": BILI_UA,
    Accept: "application/json, text/plain, */*",
    Referer: referer || (BILI_BASE + "/"),
    Origin: BILI_BASE
  };
  if (cookie) headers.Cookie = cookie;
  return headers;
}

function biliPlaybackHeaders(bvid, page) {
  return {
    "User-Agent": BILI_UA,
    Referer: biliPageUrl(bvid, page || 1),
    Origin: BILI_BASE
  };
}

function biliStripHtml(value) {
  return biliText(value)
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function biliCompactNumber(value) {
  var number = Number(value);
  if (!isFinite(number) || number < 0) return "";
  if (number >= 100000000) {
    return (number / 100000000).toFixed(number >= 1000000000 ? 1 : 2).replace(/\.0+$/, "") + "亿";
  }
  if (number >= 10000) {
    return (number / 10000).toFixed(number >= 100000 ? 1 : 2).replace(/\.0+$/, "") + "万";
  }
  return String(Math.floor(number));
}

function biliDurationSeconds(value) {
  if (typeof value === "number") return Math.max(0, Math.floor(value));
  var text = biliText(value).trim();
  if (!text) return 0;
  if (/^\d+$/.test(text)) return Number(text);
  var parts = text.split(":").map(function (item) { return Number(item); });
  if (parts.some(function (item) { return !isFinite(item); })) return 0;
  var total = 0;
  parts.forEach(function (item) { total = total * 60 + item; });
  return Math.max(0, Math.floor(total));
}

function biliFormatDuration(value) {
  var seconds = biliDurationSeconds(value);
  if (!seconds) return "";
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remain = seconds % 60;
  function pad(number) { return number < 10 ? "0" + number : String(number); }
  if (hours > 0) return hours + ":" + pad(minutes) + ":" + pad(remain);
  return pad(minutes) + ":" + pad(remain);
}

function biliPositiveInteger(value, fallback, maximum) {
  var number = Number(value);
  if (!isFinite(number) || number < 1) number = Number(fallback || 1);
  number = Math.floor(number);
  if (maximum && number > maximum) number = maximum;
  return number;
}

function biliFormatDate(value) {
  var timestamp = Number(value);
  if (!isFinite(timestamp) || timestamp <= 0) return "";
  var date = new Date(timestamp * 1000);
  var month = String(date.getMonth() + 1);
  var day = String(date.getDate());
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return date.getFullYear() + "-" + month + "-" + day;
}

function biliFormatMillisecondsDate(value) {
  var timestamp = Number(value);
  if (!isFinite(timestamp) || timestamp <= 0) return "";
  if (timestamp > 100000000000) timestamp = Math.floor(timestamp / 1000);
  return biliFormatDate(timestamp);
}

function biliBvid(value) {
  var match = biliText(value).match(/BV[0-9A-Za-z]+/i);
  if (!match) return "";
  return "BV" + match[0].slice(2);
}

function biliAid(value) {
  var match = biliText(value).match(/(?:^|[^a-z])av(\d+)/i);
  return match ? match[1] : "";
}

function biliPageNumber(value) {
  var input = biliText(value);
  var match = input.match(/[?&]p=(\d+)/i);
  var page = match ? Number(match[1]) : 1;
  if (!isFinite(page) || page < 1) page = 1;
  return Math.floor(page);
}

function biliIdentity(value) {
  return { bvid: biliBvid(value), aid: biliAid(value), page: biliPageNumber(value) };
}

function biliPageUrl(bvid, page) {
  var pageNumber = Number(page || 1);
  if (!isFinite(pageNumber) || pageNumber < 1) pageNumber = 1;
  return BILI_BASE + "/video/" + encodeURIComponent(bvid) + "?p=" + Math.floor(pageNumber);
}

function biliQuery(params) {
  var parts = [];
  Object.keys(params).forEach(function (key) {
    var value = params[key];
    if (value === null || value === undefined || value === "") return;
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(value)));
  });
  return parts.join("&");
}

function biliCookiePairs(value) {
  var pairs = [];
  biliText(value).split(";").forEach(function (part) {
    var separator = part.indexOf("=");
    if (separator <= 0) return;
    var key = part.slice(0, separator).trim();
    var cookieValue = part.slice(separator + 1).trim();
    if (!/^[A-Za-z0-9_.-]{1,64}$/.test(key) || !cookieValue || /[\x00-\x1F\x7F]/.test(cookieValue)) return;
    pairs.push({ key: key, value: cookieValue });
  });
  return pairs;
}

function biliSanitizeCookie(value) {
  var rawInput = biliText(value);
  if (/[\r\n]/.test(rawInput)) {
    throw biliMakeError("BILI-AUTH-001", "auth.cookie", "Cookie 格式不安全：不允许换行字符");
  }
  var raw = rawInput.trim();
  if (!raw) return "";
  if (raw.length > 8192) {
    throw biliMakeError("BILI-AUTH-001", "auth.cookie", "Cookie 格式不安全或长度超过限制");
  }
  raw = raw.replace(/^cookie\s*:\s*/i, "");
  var allowed = Object.create(null);
  [
    "SESSDATA", "bili_jct", "DedeUserID", "DedeUserID__ckMd5", "sid",
    "buvid3", "buvid4", "buvid_fp", "b_nut", "_uuid", "bili_ticket",
    "bili_ticket_expires", "b_lsid", "PVID", "LIVE_BUVID", "rpdid",
    "user_site", "CURRENT_FNVAL", "CURRENT_QUALITY"
  ].forEach(function (key) { allowed[key] = true; });
  var seen = Object.create(null);
  var safe = [];
  var hasSessdata = false;
  biliCookiePairs(raw).forEach(function (pair) {
    if (!Object.prototype.hasOwnProperty.call(allowed, pair.key) || seen[pair.key]) return;
    seen[pair.key] = true;
    if (pair.key === "SESSDATA") hasSessdata = true;
    safe.push(pair.key + "=" + pair.value);
  });
  if (!safe.length || !hasSessdata) {
    throw biliMakeError("BILI-AUTH-001", "auth.cookie", "没有识别到有效的 B站登录 Cookie；必须包含 SESSDATA");
  }
  return safe.join("; ");
}

function biliMergeCookies(baseCookie, overrideCookie) {
  var order = [];
  var values = Object.create(null);
  [baseCookie, overrideCookie].forEach(function (cookie) {
    biliCookiePairs(cookie).forEach(function (pair) {
      if (!Object.prototype.hasOwnProperty.call(values, pair.key)) order.push(pair.key);
      values[pair.key] = pair.value;
    });
  });
  return order.map(function (key) { return key + "=" + values[key]; }).join("; ");
}

function biliApplyRuntimeParams(params) {
  params = params || {};
  if (Object.prototype.hasOwnProperty.call(params, "biliCookie")) {
    BILI_RUNTIME_AUTH.cookie = biliSanitizeCookie(params.biliCookie);
    BILI_RUNTIME_AUTH.configured = !!BILI_RUNTIME_AUTH.cookie;
  }
  return params;
}

function biliCarryRuntimeParams(source, target) {
  source = source || {};
  target = target || {};
  if (Object.prototype.hasOwnProperty.call(source, "biliCookie")) target.biliCookie = source.biliCookie;
  if (Object.prototype.hasOwnProperty.call(source, "biliMaxQuality")) target.biliMaxQuality = source.biliMaxQuality;
  return target;
}

function biliRequestedQuality(params) {
  var value = Number(params && params.biliMaxQuality);
  var allowed = [127, 126, 125, 120, 116, 112, 80, 74, 64, 32, 16, 6];
  return allowed.indexOf(value) >= 0 ? value : 127;
}

async function biliRequestCookie() {
  var anonymousCookie = await biliAnonymousCookie();
  return biliMergeCookies(anonymousCookie, BILI_RUNTIME_AUTH.cookie);
}

async function biliAnonymousCookie() {
  if (BILI_ANON_CACHE.expiresAt > Date.now()) return BILI_ANON_CACHE.cookie;
  try {
    var response = await Widget.http.get(BILI_API + "/x/frontend/finger/spi", {
      headers: biliHeaders(BILI_BASE + "/", "")
    });
    var result = biliJson(response.data);
    var data = result && result.data;
    if (Number(result.code) !== 0 || !data || !data.b_3) {
      BILI_ANON_CACHE = { cookie: "", expiresAt: Date.now() + 5 * 60 * 1000 };
      return "";
    }
    var cookie = "buvid3=" + data.b_3;
    if (data.b_4) cookie += "; buvid4=" + data.b_4;
    cookie += "; b_nut=" + Math.floor(Date.now() / 1000);
    BILI_ANON_CACHE = { cookie: cookie, expiresAt: Date.now() + 12 * 60 * 60 * 1000 };
    return cookie;
  } catch (error) {
    BILI_ANON_CACHE = { cookie: "", expiresAt: Date.now() + 5 * 60 * 1000 };
    biliLog("ANON", "WARN", "auth.anonymous", error && error.message ? error.message : error);
    return "";
  }
}

async function biliGetJson(url, referer, options) {
  options = options || {};
  var traceId = options.traceId || biliDiagnosticId();
  var stage = options.stage || "http.get";
  var cookie = options.anonymous === false ? BILI_RUNTIME_AUTH.cookie : await biliRequestCookie();
  var requestHeaders = biliHeaders(referer, cookie);
  var startedAt = Date.now();
  biliLog(traceId, "START", stage, "request");
  try {
    var response = await Widget.http.get(url, { headers: requestHeaders });
    var status = biliResponseStatus(response);
    if (status >= 500 && options.retry !== false) {
      biliLog(traceId, "RETRY", stage, "HTTP " + status);
      response = await Widget.http.get(url, { headers: requestHeaders });
      status = biliResponseStatus(response);
    }
    if (status >= 400) {
      throw biliMakeError("BILI-NET-001", stage, "B站接口返回 HTTP " + status);
    }
    biliLog(traceId, "DONE", stage, "status=" + biliText(status || "-") + " elapsed=" + (Date.now() - startedAt) + "ms");
    return biliJson(response.data);
  } catch (error) {
    biliLog(traceId, "ERROR", stage, "elapsed=" + (Date.now() - startedAt) + "ms");
    if (error && error.code) throw error;
    throw biliMakeError("BILI-NET-001", stage, error && error.message ? error.message : "B站网络请求失败");
  }
}

function biliApiData(result, label, stage, context) {
  var code = Number(result && result.code);
  if (code !== 0) {
    var message = biliText(result && result.message).trim() || ("错误码 " + code);
    throw biliMakeError(biliApiErrorCode(code), stage || "api.response", (label || "B站请求") + "失败：" + message, context);
  }
  return result.data || {};
}

async function biliResolveInput(value) {
  var input = biliText(value).trim();
  var identity = biliIdentity(input);
  if (identity.bvid) return identity;
  if (identity.aid) {
    var avResult = await biliGetJson(BILI_API + "/x/web-interface/view?" + biliQuery({ aid: identity.aid }), BILI_BASE + "/", {
      stage: "identity.av"
    });
    var avData = biliApiData(avResult, "AV号解析", "identity.av", { page: identity.page });
    if (!avData.bvid) throw biliMakeError("BILI-DATA-001", "identity.av", "AV号返回数据缺少 BV号");
    return { bvid: avData.bvid, aid: identity.aid, page: identity.page };
  }
  if (BILI_FEATURES.shortLink && /https?:\/\/(?:www\.)?b23\.tv\//i.test(input)) {
    var response = await Widget.http.get(input, {
      allow_redirects: false,
      headers: biliHeaders(BILI_BASE + "/", "")
    });
    var headers = response.headers || {};
    var location = headers.location || headers.Location || (typeof headers.get === "function" ? headers.get("location") : "") || response.url || "";
    var shortBvid = biliBvid(location) || biliBvid(response.data);
    var shortPage = /[?&]p=\d+/i.test(location) ? biliPageNumber(location) : biliPageNumber(input);
    if (shortBvid) return { bvid: shortBvid, aid: "", page: shortPage };
    throw biliMakeError("BILI-INPUT-001", "identity.shortLink", "无法从 b23.tv 短链接取得 BV号");
  }
  throw biliMakeError("BILI-INPUT-001", "identity.parse", "请输入有效的 BV、av号或 B站视频链接");
}

function biliStatValue(data, name, alternate) {
  if (data && data.stat && data.stat[name] !== undefined) return data.stat[name];
  if (data && data[name] !== undefined) return data[name];
  if (alternate && data && data[alternate] !== undefined) return data[alternate];
  return "";
}

function biliUniqueImages(values) {
  var images = [];
  (Array.isArray(values) ? values : []).forEach(function (value) {
    var image = biliHttps(value);
    if (image && images.indexOf(image) < 0) images.push(image);
  });
  return images;
}

function biliOwnerData(data) {
  data = data || {};
  var owner = data.owner || data.upper || data.author_info || {};
  var mid = biliText(owner.mid || owner.uid || data.mid || data.uid || data.owner_mid || data.up_mid).trim();
  var name = biliStripHtml(owner.name || owner.uname || data.author || data.up_name || data.uname || data.name);
  var face = biliHttps(owner.face || owner.avatar || data.upic || data.uface || data.face || data.avatar);
  return {
    mid: /^\d+$/.test(mid) && Number(mid) > 0 ? mid : "",
    name: name,
    face: face
  };
}

function biliRememberOwner(data) {
  var owner = biliOwnerData(data);
  if (!owner.mid) return owner;
  var cached = BILI_UP_PROFILE_CACHE[owner.mid] || {};
  BILI_UP_PROFILE_CACHE[owner.mid] = {
    mid: owner.mid,
    name: owner.name || cached.name || "",
    face: owner.face || cached.face || ""
  };
  return BILI_UP_PROFILE_CACHE[owner.mid];
}

function biliPeopleItems(data) {
  var owner = biliRememberOwner(data);
  if (!owner.mid) return [];
  var title = owner.name || ("UP主 " + owner.mid);
  return [{
    id: owner.mid,
    title: title,
    avatar: owner.face,
    avatarUrl: owner.face,
    avatar_url: owner.face,
    role: "UP主"
  }];
}

function biliDetailInput(link, params) {
  var candidates = [];
  function append(value) {
    if (value === null || value === undefined) return;
    if (typeof value === "object") {
      [value.link, value.id, value.videoUrl, value.url, value.input, value.bvid].forEach(append);
      return;
    }
    var text = biliText(value).trim();
    if (text && text !== "[object Object]") candidates.push(text);
  }
  append(link);
  append(params);
  return candidates.length ? candidates[0] : "";
}

function biliQueryValue(input, name) {
  var match = biliText(input).match(new RegExp("[?&]" + name + "=([^&#]*)", "i"));
  if (!match) return "";
  try { return decodeURIComponent(match[1].replace(/\+/g, "%20")); } catch (error) { return match[1]; }
}

function biliVideoItem(data, selectedPage, options) {
  data = data || {};
  options = options || {};
  var bvid = biliBvid(data.bvid || data.arcurl || data.id);
  if (!bvid) return null;
  var page = Number(selectedPage || data.page || 1);
  if (!isFinite(page) || page < 1) page = 1;
  page = Math.floor(page);
  var link = biliPageUrl(bvid, page);
  var title = biliStripHtml(data.title || data.part || data.name);
  var ownerData = biliOwnerData(data);
  var pages = Array.isArray(data.pages) ? data.pages : [];
  var selectedPageData = pages.filter(function (entry) { return Number(entry && entry.page) === page; })[0] || pages[page - 1] || {};
  var pageFrames = pages.map(function (entry) { return entry && entry.first_frame; });
  var cover = biliHttps(data.pic || data.cover || data.first_frame || selectedPageData.first_frame || ownerData.face);
  var detailImages = biliUniqueImages([cover, data.first_frame, selectedPageData.first_frame].concat(pageFrames));
  var ownerName = ownerData.name;
  var area = biliStripHtml(data.tname || data.typename || data.type_name);
  var tid = biliText(data.tid || data.typeid).trim();
  var duration = biliDurationSeconds(data.duration || data.length);
  var view = biliCompactNumber(biliStatValue(data, "view", "play"));
  var danmaku = biliCompactNumber(biliStatValue(data, "danmaku", "video_review"));
  var like = biliCompactNumber(biliStatValue(data, "like", "like"));
  var coin = biliCompactNumber(biliStatValue(data, "coin", "coin"));
  var favorite = biliCompactNumber(biliStatValue(data, "favorite", "favorites") || biliStatValue(data, "fav", "favorites"));
  var pubdate = biliFormatDate(data.pubdate || data.senddate || data.created);
  var ownerMid = ownerData.mid;
  var description = [];
  if (ownerName) description.push("UP主：" + ownerName);
  if (options.showOwnerMid && /^\d+$/.test(ownerMid)) description.push("MID：" + ownerMid);
  if (area) description.push("分区：" + area);
  if (view) description.push("播放：" + view);
  if (danmaku) description.push("弹幕：" + danmaku);
  if (like) description.push("点赞：" + like);
  if (coin) description.push("投币：" + coin);
  if (favorite) description.push("收藏：" + favorite);
  if (pubdate) description.push("发布：" + pubdate);
  description.push("BV号：" + bvid);

  return {
    id: link,
    type: "url",
    title: title || bvid,
    description: description.join("\n"),
    coverUrl: cover,
    backdropPath: cover,
    posterPath: cover,
    detailPoster: cover,
    backdropPaths: detailImages,
    backdropImageUrls: detailImages,
    releaseDate: pubdate,
    mediaType: "movie",
    duration: duration,
    durationText: biliFormatDuration(duration),
    genreTitle: area || "B站视频",
    genreItems: tid && area ? [{ id: tid, title: area }] : [],
    peoples: biliPeopleItems(data),
    link: link,
    playerType: "app"
  };
}

function biliItems(list) {
  if (!Array.isArray(list)) return [];
  return list.map(function (entry) { return biliVideoItem(entry, 1); }).filter(function (entry) { return !!entry; });
}

async function biliSearchItems(list) {
  if (!Array.isArray(list)) return [];
  var items = await Promise.all(list.map(async function (entry) {
    var item = biliVideoItem(entry, 1);
    if (!item) return null;
    var person = item.peoples && item.peoples[0];
    if (person && person.avatar) return item;
    try {
      var bvid = biliBvid(item.link);
      if (!bvid) return item;
      var detail = await biliVideoDetail(bvid);
      return biliVideoItem(detail, 1) || item;
    } catch (error) {
      biliLog(error && error.diagnosticId ? error.diagnosticId : "SEARCH", "WARN", "search.enrich", "detail fallback");
      return item;
    }
  }));
  return items.filter(function (item) { return !!item; });
}

function biliMessageCard(title, description, code) {
  var link = BILI_BASE + "/?rexBiliMessage=" + encodeURIComponent(code || "INFO") +
    "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(description);
  return {
    id: link,
    type: "url",
    title: title,
    description: description,
    genreTitle: "B站模块提示",
    mediaType: "movie",
    link: link,
    playerType: "app"
  };
}

function biliMessageCardFromLink(link) {
  var input = biliText(link);
  if (input.indexOf("rexBiliMessage=") < 0) return null;
  var query = input.split("?")[1] || "";
  var params = Object.create(null);
  query.split("&").forEach(function (part) {
    var pair = part.split("=");
    try { params[decodeURIComponent(pair[0] || "")] = decodeURIComponent((pair.slice(1).join("=") || "").replace(/\+/g, "%20")); } catch (error) {}
  });
  return biliMessageCard(params.title || "B站模块提示", params.description || "请稍后重试", params.rexBiliMessage || "INFO");
}

async function biliContextItems(params) {
  params = params || {};
  var peopleMid = biliUpMid(params);
  if (peopleMid) {
    return loadBiliUserVideos(biliCarryRuntimeParams(params, {
      mid: peopleMid, page: params.page, count: params.count, order: params.order || "pubdate"
    }));
  }
  if (params.genreId) {
    return loadBiliCategory(biliCarryRuntimeParams(params, {
      tid: params.genreId,
      page: params.page,
      count: params.count
    }));
  }
  return null;
}

function biliUpMid(params) {
  params = params || {};
  var candidates = [
    params.peopleId, params.people_id, params.personId,
    params.mid, params.upMid, params.authorId
  ];
  for (var index = 0; index < candidates.length; index += 1) {
    var value = biliText(candidates[index]).trim().replace(/^bili-up:/i, "");
    if (/^\d+$/.test(value) && Number(value) > 0) return value;
  }
  return "";
}

async function loadBiliPopular(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var page = biliPositiveInteger(params.page, 1);
  var count = biliPositiveInteger(params.count, 20, 50);
  var url = BILI_API + "/x/web-interface/popular?" + biliQuery({ pn: page, ps: count });
  var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/popular/all", { stage: "api.popular" }), "热门视频", "api.popular");
  return biliItems(data.list);
}

async function loadBiliCategory(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var tid = biliText(params.genreId || params.tid).trim();
  if (!/^\d+$/.test(tid)) throw biliMakeError("BILI-INPUT-001", "category.input", "请选择有效的 B站分区");
  var page = biliPositiveInteger(params.page, 1);
  var count = biliPositiveInteger(params.count, 20, 50);
  var url = BILI_API + "/x/web-interface/newlist?" + biliQuery({ rid: tid, type: 0, pn: page, ps: count });
  var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/", { stage: "api.category" }), "B站分区", "api.category");
  var list = Array.isArray(data.archives) ? data.archives : [];
  list.forEach(function (entry) {
    if (!entry.tid) entry.tid = tid;
    if (!entry.tname) entry.tname = BILI_CATEGORY_NAMES[tid] || ("B站分区 " + tid);
  });
  return biliItems(list);
}

async function loadBiliRanking(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var rid = biliText(params.genreId || params.rid || "0").trim();
  if (!/^\d+$/.test(rid)) throw biliMakeError("BILI-INPUT-001", "ranking.input", "排行榜分区 ID 无效");
  var count = biliPositiveInteger(params.count, 30, 100);
  var url = BILI_API + "/x/web-interface/ranking/v2?" + biliQuery({ rid: rid, type: "all" });
  try {
    var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/popular/rank/all", { stage: "api.ranking" }), "B站排行榜", "api.ranking");
    return biliItems(Array.isArray(data.list) ? data.list.slice(0, count) : []);
  } catch (error) {
    return [biliMessageCard("排行榜暂时不可用", error.message, error.code || "BILI-API-001")];
  }
}

async function loadBiliWeekly(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var count = biliPositiveInteger(params.count, 30, 100);
  var number = biliText(params.number).trim();
  if (number && !/^\d+$/.test(number)) throw biliMakeError("BILI-INPUT-001", "weekly.input", "每周必看期数必须是数字");
  if (!number) {
    var listData = biliApiData(
      await biliGetJson(BILI_API + "/x/web-interface/popular/series/list", BILI_BASE + "/v/popular/weekly", { stage: "api.weekly.list" }),
      "每周必看期数", "api.weekly.list"
    );
    var seriesList = Array.isArray(listData.list) ? listData.list : [];
    if (!seriesList.length) throw biliMakeError("BILI-DATA-001", "weekly.list", "每周必看没有返回期数");
    number = biliText(seriesList[0].number);
  }
  var url = BILI_API + "/x/web-interface/popular/series/one?" + biliQuery({ number: number });
  try {
    var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/popular/weekly", { stage: "api.weekly.one" }), "每周必看", "api.weekly.one");
    return biliItems(Array.isArray(data.list) ? data.list.slice(0, count) : []);
  } catch (error) {
    return [biliMessageCard("每周必看暂时不可用", error.message, error.code || "BILI-API-001")];
  }
}

async function loadBiliPrecious(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var page = biliPositiveInteger(params.page, 1);
  var count = biliPositiveInteger(params.count, 30, 50);
  var url = BILI_API + "/x/web-interface/popular/precious?page_size=100&page=1";
  try {
    var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/popular/history", { stage: "api.precious" }), "入站必刷", "api.precious");
    var list = Array.isArray(data.list) ? data.list : [];
    return biliItems(list.slice((page - 1) * count, page * count));
  } catch (error) {
    return [biliMessageCard("入站必刷暂时不可用", error.message, error.code || "BILI-API-001")];
  }
}

function biliAdd32(a, b) {
  return (a + b) & 0xffffffff;
}

function biliRol(value, shift) {
  return (value << shift) | (value >>> (32 - shift));
}

function biliMd5Cycle(state, block) {
  var a = state[0], b = state[1], c = state[2], d = state[3];
  var originalA = a, originalB = b, originalC = c, originalD = d;
  var shifts = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,
    5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
    4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,
    6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  var constants = [
    -680876936,-389564586,606105819,-1044525330,-176418897,1200080426,-1473231341,-45705983,
    1770035416,-1958414417,-42063,-1990404162,1804603682,-40341101,-1502002290,1236535329,
    -165796510,-1069501632,643717713,-373897302,-701558691,38016083,-660478335,-405537848,
    568446438,-1019803690,-187363961,1163531501,-1444681467,-51403784,1735328473,-1926607734,
    -378558,-2022574463,1839030562,-35309556,-1530992060,1272893353,-155497632,-1094730640,
    681279174,-358537222,-722521979,76029189,-640364487,-421815835,530742520,-995338651,
    -198630844,1126891415,-1416354905,-57434055,1700485571,-1894986606,-1051523,-2054922799,
    1873313359,-30611744,-1560198380,1309151649,-145523070,-1120210379,718787259,-343485551
  ];
  for (var i = 0; i < 64; i += 1) {
    var f, g;
    if (i < 16) { f = (b & c) | ((~b) & d); g = i; }
    else if (i < 32) { f = (d & b) | ((~d) & c); g = (5 * i + 1) % 16; }
    else if (i < 48) { f = b ^ c ^ d; g = (3 * i + 5) % 16; }
    else { f = c ^ (b | (~d)); g = (7 * i) % 16; }
    var next = d;
    d = c;
    c = b;
    b = biliAdd32(b, biliRol(biliAdd32(biliAdd32(a, f), biliAdd32(constants[i], block[g])), shifts[i]));
    a = next;
  }
  state[0] = biliAdd32(originalA, a);
  state[1] = biliAdd32(originalB, b);
  state[2] = biliAdd32(originalC, c);
  state[3] = biliAdd32(originalD, d);
}

function biliMd5(value) {
  var text = unescape(encodeURIComponent(biliText(value)));
  var bytes = [];
  var i;
  for (i = 0; i < text.length; i += 1) bytes.push(text.charCodeAt(i) & 255);
  var bitLength = bytes.length * 8;
  bytes.push(128);
  while ((bytes.length % 64) !== 56) bytes.push(0);
  for (i = 0; i < 8; i += 1) bytes.push(Math.floor(bitLength / Math.pow(256, i)) & 255);
  var state = [1732584193, -271733879, -1732584194, 271733878];
  for (var offset = 0; offset < bytes.length; offset += 64) {
    var block = [];
    for (var j = 0; j < 16; j += 1) {
      var p = offset + j * 4;
      block[j] = bytes[p] | (bytes[p + 1] << 8) | (bytes[p + 2] << 16) | (bytes[p + 3] << 24);
    }
    biliMd5Cycle(state, block);
  }
  var hex = "";
  for (i = 0; i < 4; i += 1) {
    for (j = 0; j < 4; j += 1) {
      var oneByte = (state[i] >>> (j * 8)) & 255;
      hex += (oneByte + 256).toString(16).slice(1);
    }
  }
  return hex;
}

function biliFileKey(url) {
  var match = biliText(url).match(/\/([^/?#]+)\.(?:png|jpg|webp)(?:[?#]|$)/i);
  return match ? match[1] : "";
}

async function biliWbiMixinKey() {
  if (BILI_WBI_CACHE.key && BILI_WBI_CACHE.expiresAt > Date.now()) return BILI_WBI_CACHE.key;
  var nav = await biliGetJson(BILI_API + "/x/web-interface/nav", BILI_BASE + "/", { stage: "wbi.nav" });
  var wbiImage = nav && nav.data && nav.data.wbi_img;
  if (!wbiImage) throw biliMakeError("BILI-WBI-001", "wbi.nav", "无法取得 B站 WBI 签名图片");
  var source = biliFileKey(wbiImage.img_url) + biliFileKey(wbiImage.sub_url);
  if (source.length < 64) throw biliMakeError("BILI-WBI-001", "wbi.mixin", "B站 WBI 签名密钥格式异常");
  var table = [46,47,18,2,53,8,23,32,15,50,10,31,58,3,45,35,
    27,43,5,49,33,9,42,19,29,28,14,39,12,38,41,13,
    37,48,7,16,24,55,40,61,26,17,0,1,60,51,30,4,
    22,25,54,21,56,59,6,63,57,62,11,36,20,34,44,52];
  var mixed = table.map(function (index) { return source.charAt(index); }).join("").slice(0, 32);
  BILI_WBI_CACHE = { key: mixed, expiresAt: Date.now() + 6 * 60 * 60 * 1000 };
  return mixed;
}

function biliWbiEncode(value) {
  return encodeURIComponent(biliText(value).replace(/[!'()*]/g, ""));
}

async function biliWbiQuery(params) {
  var signed = {};
  Object.keys(params || {}).forEach(function (key) { signed[key] = params[key]; });
  signed.wts = Math.floor(Date.now() / 1000);
  var keys = Object.keys(signed).sort();
  var query = keys.map(function (key) {
    return biliWbiEncode(key) + "=" + biliWbiEncode(signed[key]);
  }).join("&");
  var mixinKey = await biliWbiMixinKey();
  return query + "&w_rid=" + biliMd5(query + mixinKey);
}

async function biliSearchResult(keyword, order, duration, tids, page, count) {
  var params = {
    search_type: "video",
    keyword: keyword,
    order: order,
    duration: duration,
    tids: tids,
    page: page,
    page_size: count
  };
  var referer = "https://search.bilibili.com/all?keyword=" + encodeURIComponent(keyword);
  try {
    var signedQuery = await biliWbiQuery(params);
    var url = BILI_API + "/x/web-interface/wbi/search/type?" + signedQuery;
    var result = await biliGetJson(url, referer, { stage: "api.search.wbi" });
    if (Number(result.code) === 0) return result.data || {};
  } catch (error) {
    biliLog(error && error.diagnosticId ? error.diagnosticId : "WBI", "WARN", "api.search.wbi", "fallback");
  }

  var fallbackUrl = BILI_API + "/x/web-interface/search/type?" + biliQuery(params);
  return biliApiData(
    await biliGetJson(fallbackUrl, referer, { stage: "api.search.fallback" }),
    "B站搜索", "api.search.fallback"
  );
}

async function searchBiliVideos(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var keyword = biliText(params.keyword).trim();
  if (!keyword) throw biliMakeError("BILI-INPUT-001", "search.input", "请输入 B站视频关键词");
  if (biliBvid(keyword) || biliAid(keyword) || /bilibili\.com\/video\//i.test(keyword) || /b23\.tv\//i.test(keyword)) {
    return loadBiliVideoById(biliCarryRuntimeParams(params, { input: keyword }));
  }
  var allowedOrders = Object.create(null);
  ["totalrank", "click", "pubdate", "dm", "stow"].forEach(function (value) { allowedOrders[value] = true; });
  var order = biliText(params.order).trim();
  if (!allowedOrders[order]) order = "totalrank";
  var duration = biliText(params.duration || "0").trim();
  if (!/^[0-4]$/.test(duration)) duration = "0";
  var tids = biliText(params.tids || "0").trim();
  if (!/^\d+$/.test(tids)) tids = "0";
  var page = biliPositiveInteger(params.page, 1);
  var count = biliPositiveInteger(params.count, 20, 50);
  var data = await biliSearchResult(keyword, order, duration, tids, page, count);
  var items = await biliSearchItems(Array.isArray(data.result) ? data.result : []);
  if (!items.length) return [biliMessageCard("没有搜索结果", "关键词：" + keyword + "\n请尝试更短的关键词或取消筛选。", "BILI-SEARCH-EMPTY")];
  return items;
}

async function biliUserVideosWbi(mid, page, count, order) {
  var signed = await biliWbiQuery({ mid: mid, pn: page, ps: count, order: order });
  var url = BILI_API + "/x/space/wbi/arc/search?" + signed;
  var data = biliApiData(
    await biliGetJson(url, "https://space.bilibili.com/" + mid + "/video", { stage: "api.user.videos" }),
    "UP主投稿", "api.user.videos"
  );
  var list = data && data.list && Array.isArray(data.list.vlist) ? data.list.vlist : [];
  return biliItems(list);
}

async function biliUserProfile(mid, preferredName) {
  var cached = BILI_UP_PROFILE_CACHE[mid] || {};
  var preferred = biliStripHtml(preferredName);
  if (preferred && preferred !== ("UP主 " + mid)) {
    cached = biliRememberOwner({ owner: { mid: mid, name: preferred, face: cached.face } });
  }
  if (cached.name) return cached;
  try {
    var url = BILI_API + "/x/web-interface/card?" + biliQuery({ mid: mid });
    var data = biliApiData(
      await biliGetJson(url, "https://space.bilibili.com/" + mid, { stage: "api.user.card" }),
      "UP主资料", "api.user.card"
    );
    var card = data && data.card || data || {};
    return biliRememberOwner({ owner: { mid: mid, name: card.name, face: card.face } });
  } catch (error) {
    biliLog(error && error.diagnosticId ? error.diagnosticId : "UPCARD", "WARN", "api.user.card", "profile fallback unavailable");
    return cached;
  }
}

async function biliUserVideosSearch(mid, name, page, count, order) {
  var profile = await biliUserProfile(mid, name);
  var keyword = biliStripHtml(profile && profile.name);
  if (!keyword || keyword === ("UP主 " + mid)) return [];
  var required = page * count;
  var raw = [];
  var seen = Object.create(null);
  var searchOrder = order === "click" || order === "stow" ? order : "pubdate";
  for (var searchPage = 1; searchPage <= 3 && raw.length < required; searchPage += 1) {
    var data = await biliSearchResult(keyword, searchOrder, "0", "0", searchPage, 50);
    var list = Array.isArray(data.result) ? data.result : [];
    list.forEach(function (entry) {
      var owner = biliOwnerData(entry);
      var bvid = biliBvid(entry && (entry.bvid || entry.arcurl || entry.url));
      if (owner.mid !== mid || !bvid || seen[bvid]) return;
      seen[bvid] = true;
      raw.push(entry);
    });
    if (!list.length || list.length < 50) break;
  }
  var selected = raw.slice((page - 1) * count, page * count);
  var items = await biliSearchItems(selected);
  items.forEach(function (item) {
    item.description = biliText(item.description) + "\n来源：搜索校验 MID 回退";
  });
  return items;
}

function biliDynamicArchiveItems(data, fallbackMid) {
  var results = [];
  var seen = Object.create(null);
  var entries = data && Array.isArray(data.items) ? data.items : [];
  var candidates = [];
  entries.forEach(function (entry) {
    candidates.push(entry);
    if (entry && entry.orig) candidates.push(entry.orig);
  });
  candidates.forEach(function (entry) {
    var modules = entry && entry.modules || {};
    var author = modules.module_author || {};
    var dynamic = modules.module_dynamic || {};
    var major = dynamic.major || {};
    var archive = major.archive || {};
    var bvid = biliBvid(archive.bvid || archive.jump_url || archive.url);
    if (!bvid || seen[bvid]) return;
    seen[bvid] = true;
    var item = biliVideoItem({
      bvid: bvid,
      title: archive.title,
      pic: archive.cover,
      desc: archive.desc,
      owner: {
        mid: biliText(author.mid || fallbackMid),
        name: author.name,
        face: author.face
      },
      duration: archive.duration_text,
      pubdate: author.pub_ts,
      tname: "UP主投稿",
      stat: {
        view: archive.stat && archive.stat.play,
        danmaku: archive.stat && archive.stat.danmaku
      }
    }, 1);
    if (item) results.push(item);
  });
  return results;
}

async function biliUserVideosDynamic(mid, page, count) {
  if (page > 5) {
    throw biliMakeError("BILI-USER-PAGE", "api.user.dynamic", "动态页回退最多支持前 5 页，请稍后重试主投稿接口");
  }
  var startPage = 1;
  var offset = "";
  for (var cachedPage = page; cachedPage >= 1; cachedPage -= 1) {
    var cacheKey = mid + ":" + cachedPage;
    if (Object.prototype.hasOwnProperty.call(BILI_UP_FEED_OFFSETS, cacheKey)) {
      startPage = cachedPage;
      offset = biliText(BILI_UP_FEED_OFFSETS[cacheKey]);
      break;
    }
  }
  BILI_UP_FEED_OFFSETS[mid + ":1"] = "";
  for (var currentPage = startPage; currentPage <= page; currentPage += 1) {
    var url = BILI_API + "/x/polymer/web-dynamic/v1/feed/space?" + biliQuery({
      host_mid: mid,
      offset: offset || undefined
    });
    var data = biliApiData(
      await biliGetJson(url, "https://space.bilibili.com/" + mid + "/dynamic", { stage: "api.user.dynamic" }),
      "UP主动态投稿", "api.user.dynamic"
    );
    var nextOffset = biliText(data.offset).trim();
    if (nextOffset) BILI_UP_FEED_OFFSETS[mid + ":" + (currentPage + 1)] = nextOffset;
    if (currentPage === page) return biliDynamicArchiveItems(data, mid).slice(0, count);
    if (!data.has_more || !nextOffset) return [];
    offset = nextOffset;
  }
  return [];
}

async function loadBiliUserVideos(params) {
  params = biliApplyRuntimeParams(params);
  var mid = biliUpMid(params);
  if (!mid) throw biliMakeError("BILI-INPUT-001", "user.input", "UP主 MID 必须是数字");
  if (!BILI_FEATURES.userVideos) return [biliMessageCard("UP主投稿已关闭", "当前版本已通过功能开关关闭 UP主投稿。", "BILI-FEATURE-OFF")];
  var page = biliPositiveInteger(params.page, 1);
  var count = biliPositiveInteger(params.count, 20, 50);
  var allowed = Object.create(null);
  allowed.pubdate = true;
  allowed.click = true;
  allowed.stow = true;
  var order = biliText(params.order || "pubdate");
  if (!allowed[order]) order = "pubdate";
  var preferredName = biliStripHtml(params.upName || params.ownerName || params.authorName || params.name);
  var primaryError = null;
  var primaryEmpty = false;
  try {
    var primaryItems = await biliUserVideosWbi(mid, page, count, order);
    if (primaryItems.length) return primaryItems;
    primaryEmpty = true;
  } catch (error) {
    primaryError = error;
  }
  var dynamicError = null;
  var dynamicEmpty = false;
  try {
    var fallbackItems = await biliUserVideosDynamic(mid, page, count);
    if (fallbackItems.length) {
      fallbackItems.forEach(function (item) {
        item.description = biliText(item.description) + "\n来源：动态页回退（按最新发布）";
      });
      return fallbackItems;
    }
    dynamicEmpty = true;
  } catch (fallbackError) {
    dynamicError = fallbackError;
  }
  var searchError = null;
  try {
    var searchItems = await biliUserVideosSearch(mid, preferredName, page, count, order);
    if (searchItems.length) return searchItems;
  } catch (error) {
    searchError = error;
  }
  var description = "MID：" + mid +
    "\n主投稿接口：" + (primaryEmpty ? "返回空列表" : (primaryError && primaryError.message ? primaryError.message : "请求失败")) +
    "\n动态页回退：" + (dynamicEmpty ? "没有识别到视频" : (dynamicError && dynamicError.message ? dynamicError.message : "请求失败")) +
    "\n搜索校验 MID 回退：" + (searchError && searchError.message ? searchError.message : "没有匹配到投稿") +
    "\nB站空间接口风控较严，稍后重试或从视频详情中的投稿列表进入。";
  return [biliMessageCard(
    primaryError || dynamicError || searchError ? "UP主投稿加载失败" : "UP主暂无可识别投稿",
    description,
    (searchError && searchError.code) || (dynamicError && dynamicError.code) || (primaryError && primaryError.code) || "BILI-USER-EMPTY"
  )];
}

async function biliVideoDetail(bvid) {
  var url = BILI_API + "/x/web-interface/view?" + biliQuery({ bvid: bvid });
  return biliApiData(
    await biliGetJson(url, biliPageUrl(bvid, 1), { stage: "api.video.detail" }),
    "B站视频详情", "api.video.detail", { bvid: bvid }
  );
}

async function loadBiliVideoById(params) {
  params = biliApplyRuntimeParams(params);
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var input = params.input || params.link || params.id;
  var identity = await biliResolveInput(input);
  var detail = await biliVideoDetail(identity.bvid);
  var pages = Array.isArray(detail.pages) ? detail.pages : [];
  if (identity.page > Math.max(1, pages.length)) throw biliMakeError("BILI-INPUT-002", "video.direct", "分P页码超出范围", identity);
  return [biliVideoItem(detail, identity.page)];
}

function biliEpisodeItem(detail, pageData) {
  var page = Number(pageData && pageData.page || 1);
  if (!isFinite(page) || page < 1) page = 1;
  page = Math.floor(page);
  var item = biliVideoItem({
    bvid: detail.bvid,
    title: "P" + page + " · " + biliStripHtml(pageData && pageData.part),
    pic: detail.pic,
    owner: detail.owner,
    tid: detail.tid,
    tname: detail.tname,
    duration: pageData && pageData.duration,
    pubdate: detail.pubdate,
    stat: detail.stat
  }, page);
  item.episode = page;
  item.description = "分P：" + page + " / " + (detail.pages ? detail.pages.length : 1) + "\nCID：" +
    biliText(pageData && pageData.cid) + "\n" + item.description;
  return item;
}

async function biliRelatedItems(bvid) {
  if (!BILI_FEATURES.related) return [];
  try {
    var url = BILI_API + "/x/web-interface/archive/related?" + biliQuery({ bvid: bvid });
    var data = biliApiData(await biliGetJson(url, biliPageUrl(bvid, 1), { stage: "api.related" }), "B站相关视频", "api.related", { bvid: bvid });
    return biliItems(Array.isArray(data) ? data : []).filter(function (entry) {
      return biliBvid(entry.link) !== bvid;
    }).slice(0, 12);
  } catch (error) {
    biliLog(error.diagnosticId || "REL", "WARN", "api.related", error.message);
    return [];
  }
}

async function biliUpRelatedItems(detail, currentBvid) {
  var owner = biliRememberOwner(detail);
  if (!owner.mid) return [];
  try {
    var request = {
      peopleId: owner.mid,
      upName: owner.name,
      page: 1,
      count: 12,
      order: "pubdate"
    };
    var items = await loadBiliUserVideos(request);
    var usable = items.filter(function (item) {
      if (!item || String(item.link || "").indexOf("rexBiliMessage=") >= 0) return false;
      return biliBvid(item.link) !== currentBvid;
    });
    if (!usable.length) {
      request.count = 20;
      items = await loadBiliUserVideos(request);
      usable = items.filter(function (item) {
        if (!item || String(item.link || "").indexOf("rexBiliMessage=") >= 0) return false;
        return biliBvid(item.link) !== currentBvid;
      });
    }
    return usable.slice(0, 8).map(function (item) {
      item.title = "[UP主投稿] " + biliText(item.title).replace(/^\[UP主投稿\]\s*/, "");
      item.genreTitle = (owner.name || ("UP主 " + owner.mid)) + " · 投稿";
      return item;
    });
  } catch (error) {
    biliLog(error && error.diagnosticId ? error.diagnosticId : "UPREL", "WARN", "detail.user.videos", "UP related fallback unavailable");
    return [];
  }
}

async function biliTags(bvid) {
  if (!BILI_FEATURES.tags) return [];
  try {
    var url = BILI_API + "/x/tag/archive/tags?" + biliQuery({ bvid: bvid });
    var data = biliApiData(await biliGetJson(url, biliPageUrl(bvid, 1), { stage: "api.tags" }), "B站标签", "api.tags", { bvid: bvid });
    return Array.isArray(data) ? data.map(function (tag) { return biliStripHtml(tag.tag_name); }).filter(Boolean).slice(0, 12) : [];
  } catch (error) {
    biliLog(error.diagnosticId || "TAG", "WARN", "api.tags", error.message);
    return [];
  }
}

function biliCollectionItems(detail) {
  if (!BILI_FEATURES.collections || !detail || !detail.ugc_season) return [];
  var sections = Array.isArray(detail.ugc_season.sections) ? detail.ugc_season.sections : [];
  var episodes = [];
  sections.forEach(function (section) {
    if (Array.isArray(section.episodes)) episodes = episodes.concat(section.episodes);
  });
  return episodes.map(function (episode) {
    var arc = episode.arc || {};
    arc.bvid = episode.bvid;
    arc.title = episode.title || arc.title;
    arc.pic = arc.pic || detail.ugc_season.cover;
    arc.owner = arc.owner || arc.author || detail.owner;
    arc.duration = arc.duration || (episode.page && episode.page.duration);
    return biliVideoItem(arc, 1);
  }).filter(function (entry) {
    return entry && biliBvid(entry.link) !== detail.bvid;
  }).slice(0, 50);
}

function biliUpPortalLink(data) {
  var owner = biliOwnerData(data);
  if (!owner.mid) return "";
  return BILI_BASE + "/?rexBiliUp=" + encodeURIComponent(owner.mid) +
    "&name=" + encodeURIComponent(owner.name || ("UP主 " + owner.mid)) +
    "&avatar=" + encodeURIComponent(owner.face || "");
}

function biliUpPortalItem(data) {
  var owner = biliOwnerData(data);
  var link = biliUpPortalLink(data);
  if (!owner.mid || !link) return null;
  var name = owner.name || ("UP主 " + owner.mid);
  var images = biliUniqueImages([owner.face]);
  return {
    id: link,
    type: "url",
    title: "查看 " + name + " 的过往投稿",
    description: "UP主：" + name + "\nMID：" + owner.mid + "\n用于继续观看或人物回调失效时的备用入口",
    coverUrl: owner.face,
    backdropPath: owner.face,
    posterPath: owner.face,
    detailPoster: owner.face,
    backdropPaths: images,
    backdropImageUrls: images,
    genreTitle: "UP主投稿",
    mediaType: "movie",
    peoples: biliPeopleItems(data),
    link: link,
    playerType: "app"
  };
}

async function biliUpPortalDetail(link) {
  var mid = biliQueryValue(link, "rexBiliUp").trim();
  if (!/^\d+$/.test(mid) || Number(mid) <= 0) return null;
  var name = biliStripHtml(biliQueryValue(link, "name")) || ("UP主 " + mid);
  var avatar = biliHttps(biliQueryValue(link, "avatar"));
  var owner = { mid: mid, name: name, face: avatar };
  var item = biliUpPortalItem(owner);
  var videos = await loadBiliUserVideos({ peopleId: mid, upName: name, page: 1, count: 30, order: "pubdate" });
  item.title = name + " · 过往投稿";
  item.description = "UP主：" + name + "\nMID：" + mid + "\n已加载投稿：" + videos.length + " 个\n此入口不依赖继续观看保存的列表模块归属。";
  item.relatedItems = videos;
  item.childItems = videos;
  return item;
}

async function loadDetail(link, params) {
  link = biliDetailInput(link, params);
  if (!link) return null;
  var messageItem = biliMessageCardFromLink(link);
  if (messageItem) return messageItem;
  if (biliQueryValue(link, "rexBiliUp")) return biliUpPortalDetail(link);
  var identity;
  try {
    identity = await biliResolveInput(link);
  } catch (error) {
    if (error && error.code === "BILI-INPUT-001") return null;
    throw error;
  }
  var detail = await biliVideoDetail(identity.bvid);
  var pages = Array.isArray(detail.pages) ? detail.pages : [];
  if (identity.page > Math.max(1, pages.length)) throw biliMakeError("BILI-INPUT-002", "detail.page", "分P页码超出范围", identity);
  var item = biliVideoItem(detail, identity.page, { showOwnerMid: true });
  var fullDescription = biliStripHtml(detail.desc);
  if (fullDescription) item.description += "\n\n简介：\n" + fullDescription;
  var selectedPageData = pages.filter(function (pageData) { return Number(pageData && pageData.page) === Number(identity.page); })[0] || {};
  var images = biliUniqueImages(
    [item.backdropPath, detail.first_frame, selectedPageData.first_frame]
      .concat(pages.map(function (pageData) { return pageData && pageData.first_frame; }))
  );
  item.backdropPaths = images;
  item.backdropImageUrls = images;
  item.detailPoster = item.posterPath || item.coverUrl || item.backdropPath;
  if (pages.length > 1) item.episodeItems = pages.map(function (pageData) {
    return biliEpisodeItem(detail, pageData);
  });
  var tags = await biliTags(identity.bvid);
  if (tags.length) item.description += "\n\n标签：" + tags.join(" / ");
  if (detail.ugc_season) {
    item.description += "\n\n合集：" + biliStripHtml(detail.ugc_season.title) +
      "\n合集视频：" + biliText(detail.ugc_season.ep_count || 0) + " 个";
    item.childItems = biliCollectionItems(detail);
  }
  var relatedResult = await Promise.all([
    biliUpRelatedItems(detail, identity.bvid),
    biliRelatedItems(identity.bvid)
  ]);
  var upVideoItems = relatedResult[0];
  var relatedItems = relatedResult[1];
  var upPortal = biliUpPortalItem(detail);
  var combinedRelated = upVideoItems.concat(upPortal ? [upPortal] : []).concat(relatedItems);
  var relatedSeen = Object.create(null);
  item.relatedItems = combinedRelated.filter(function (entry) {
    if (!entry) return false;
    var entryBvid = biliBvid(entry.link);
    var key = entryBvid || biliText(entry.link || entry.id || entry.title);
    if (!key || relatedSeen[key]) return false;
    relatedSeen[key] = true;
    return entryBvid !== identity.bvid;
  }).slice(0, 24);
  item.description += "\n\nUP主过往投稿：详情页已预加载 " + upVideoItems.length + " 个；仍可点击 UP主头像或备用入口查看更多";
  item.description += "\n\n播放资源：起播时按全局画质设置实时获取；账号 Cookie 不写入模块日志或源码，仅随授权请求使用";
  return item;
}

function biliPageData(detail, page) {
  var pages = Array.isArray(detail.pages) ? detail.pages : [];
  if (!pages.length) return { cid: detail.cid, page: 1, part: detail.title, duration: detail.duration };
  var selected = pages.filter(function (entry) { return Number(entry.page) === Number(page); })[0];
  if (!selected) throw biliMakeError("BILI-INPUT-002", "playback.page", "分P页码超出范围", { bvid: detail.bvid, page: page });
  return selected;
}

function biliQualityName(value, descriptions, qualities) {
  var qn = biliText(value);
  if (Array.isArray(qualities) && Array.isArray(descriptions)) {
    var index = qualities.map(String).indexOf(qn);
    if (index >= 0 && descriptions[index]) return descriptions[index];
  }
  return BILI_QUALITY_NAMES[qn] || (qn + "P");
}

function biliQualityCandidates(maxQuality) {
  var ladder = [127, 126, 125, 120, 116, 112, 80, 74, 64, 32, 16, 6];
  var seen = Object.create(null);
  return ladder.filter(function (quality) {
    if (quality > maxQuality || seen[quality]) return false;
    seen[quality] = true;
    return true;
  });
}

function biliHighestQuality(values, maxQuality) {
  var available = Object.create(null);
  (Array.isArray(values) ? values : []).forEach(function (value) {
    var quality = Number(value && value.id !== undefined ? value.id : value);
    if (isFinite(quality) && quality > 0) available[String(quality)] = true;
  });
  var candidates = biliQualityCandidates(Number(maxQuality || 127));
  for (var index = 0; index < candidates.length; index += 1) {
    if (available[String(candidates[index])]) return candidates[index];
  }
  return 0;
}

function biliDashAudioTracks(dash) {
  var tracks = [];
  if (!dash) return tracks;
  if (Array.isArray(dash.audio)) tracks = tracks.concat(dash.audio);
  if (dash.dolby && Array.isArray(dash.dolby.audio)) tracks = tracks.concat(dash.dolby.audio);
  if (dash.flac && dash.flac.audio) {
    tracks = tracks.concat(Array.isArray(dash.flac.audio) ? dash.flac.audio : [dash.flac.audio]);
  }
  return tracks.filter(function (track) { return !!track; });
}

function biliDashReport(playData, requestedQuality) {
  if (playData && playData.__rexProbeError) {
    return {
      dashMaxQuality: 0,
      dashVideoCount: 0,
      dashAudioCount: 0,
      dashHasAudio: false,
      dashState: "probe-failed"
    };
  }
  var dash = playData && playData.dash;
  var videos = dash && Array.isArray(dash.video) ? dash.video : [];
  var audios = biliDashAudioTracks(dash);
  var maxQuality = biliHighestQuality(videos, requestedQuality);
  return {
    dashMaxQuality: maxQuality,
    dashVideoCount: videos.length,
    dashAudioCount: audios.length,
    dashHasAudio: audios.length > 0,
    dashState: videos.length ? (audios.length ? "separate" : "video-only") : "none"
  };
}

function biliPlaybackReportNote(report) {
  var dashQuality = Number(report && report.dashMaxQuality || 0);
  var progressiveQuality = Number(report && report.progressiveMaxQuality || 0);
  var requestedQuality = Number(report && report.requestedQuality || 0);
  if (report && report.dashState === "separate" && dashQuality > progressiveQuality) {
    return "B站已返回" + biliQualityName(dashQuality) + "分离 DASH；Rex 当前单 URL 契约不能组合视频和音频，已回退到" +
      (progressiveQuality ? biliQualityName(progressiveQuality) + "合并流" : "无可直接播放合并流");
  }
  if (report && report.dashState === "video-only" && dashQuality > progressiveQuality) {
    return "B站返回了" + biliQualityName(dashQuality) + "视频轨但没有可识别音频轨；已回退到" +
      (progressiveQuality ? biliQualityName(progressiveQuality) + "合并流" : "无可直接播放合并流");
  }
  if (report && report.dashState === "probe-failed") {
    return "DASH 高画质探测失败；当前仅确认" +
      (progressiveQuality ? biliQualityName(progressiveQuality) + "合并流可播放" : "没有可直接播放合并流");
  }
  if (progressiveQuality && requestedQuality && progressiveQuality < requestedQuality) {
    return (BILI_RUNTIME_AUTH.configured ? "B站合并流接口实际只返回" : "游客合并流实际只返回") +
      biliQualityName(progressiveQuality) + "；请求上限不会强制提升账号或视频权限";
  }
  if (progressiveQuality) return "已取得最高可直接播放的" + biliQualityName(progressiveQuality) + "合并流";
  return "没有取得可直接播放的合并音视频流";
}

async function biliPlayData(bvid, cid, qn, page, options) {
  options = options || {};
  var query = {
    bvid: bvid,
    cid: cid,
    qn: qn,
    fnval: options.fnval === undefined ? 1 : options.fnval,
    fnver: 0,
    fourk: 1,
    high_quality: 1
  };
  // html5 用于取得合并流；DASH 探测显式传 null，避免 platform=html5 隐藏分离轨道。
  query.platform = options.platform === undefined ? "html5" : options.platform;
  var url = BILI_API + "/x/player/playurl?" + biliQuery(query);
  return biliApiData(
    await biliGetJson(url, biliPageUrl(bvid, page), { stage: "api.playurl" }),
    "B站播放资源", "api.playurl", { bvid: bvid, page: page }
  );
}

async function biliProbeDash(bvid, cid, qn, page) {
  if (!BILI_FEATURES.dashProbe) return null;
  try {
    return await biliPlayData(bvid, cid, qn, page, { fnval: 4048, platform: null });
  } catch (error) {
    biliLog(error && error.diagnosticId ? error.diagnosticId : "DASH", "WARN", "playback.dashProbe", "probe failed");
    return { __rexProbeError: true };
  }
}

async function biliPlayDataForRex(bvid, cid, qn, page) {
  var dashData = null;
  var dashError = null;
  try {
    dashData = await biliPlayData(bvid, cid, qn, page, { fnval: 1, platform: "html5" });
    if (Array.isArray(dashData.durl) && dashData.durl.length === 1 && dashData.durl[0] && dashData.durl[0].url) return dashData;
  } catch (error) {
    dashError = error;
  }
  try {
    var progressiveData = await biliPlayData(bvid, cid, qn, page, { fnval: 0, platform: "html5" });
    if (Array.isArray(progressiveData.durl) && progressiveData.durl.length) return progressiveData;
    if (dashData) return dashData;
    throw dashError || biliMakeError("BILI-PLAY-001", "playback.progressive", "没有返回合并音视频资源", { bvid: bvid, page: page });
  } catch (progressiveError) {
    if (dashData) return dashData;
    throw progressiveError || dashError;
  }
}

function biliResourcesFromPlayData(bvid, page, playData, linePrefix, requestedQuality, playbackReport) {
  var durl = Array.isArray(playData.durl) ? playData.durl : [];
  if (!durl.length) {
    return [];
  }
  if (durl.length > 1) {
    throw biliMakeError("BILI-PLAY-002", "playback.resources", "当前是旧式多段视频，v0.2.7 不会只播放第一段", { bvid: bvid, page: page });
  }
  var quality = Number(playData.quality || 0);
  var qualityName = biliQualityName(quality, playData.accept_description, playData.accept_quality);
  var qualityNote = requestedQuality && quality < Number(requestedQuality) ? " · 实际低于请求上限" : "";
  var dashNote = playbackReport && playbackReport.dashState === "separate" &&
    Number(playbackReport.dashMaxQuality || 0) > quality ?
    " · 另有" + biliQualityName(playbackReport.dashMaxQuality) + "分离DASH（Rex单URL暂不可播）" : "";
  var urls = [durl[0].url].concat(Array.isArray(durl[0].backup_url) ? durl[0].backup_url : []);
  var seen = Object.create(null);
  var resources = [];
  urls.slice(0, 3).forEach(function (rawUrl, index) {
    var url = biliHttps(rawUrl);
    if (!url || seen[url]) return;
    seen[url] = true;
    var lineName = index === 0 ? "主线路" : ("备用线路 " + index);
    resources.push({
      name: qualityName + " · " + lineName,
      description: (linePrefix || "B站视频") + " · " + biliText(playData.format || "MP4") +
        (BILI_RUNTIME_AUTH.configured ? " · 已携带账号 Cookie" : " · 未配置账号 Cookie") + qualityNote + dashNote,
      url: url,
      customHeaders: biliPlaybackHeaders(bvid, page),
      headers: biliPlaybackHeaders(bvid, page),
      playerType: "app"
    });
  });
  return resources;
}

async function loadResource(params) {
  params = biliApplyRuntimeParams(params);
  if (!BILI_FEATURES.progressivePlayback) throw biliMakeError("BILI-FEATURE-OFF", "playback.feature", "公开 MP4 播放功能已关闭");
  var playbackInput = params.link || params.id || params.videoUrl;
  if (biliMessageCardFromLink(playbackInput)) throw biliMakeError("BILI-INPUT-001", "playback.message", "这是模块提示卡，不是可播放视频");
  var identity = await biliResolveInput(playbackInput);
  if (!identity || !identity.bvid) throw biliMakeError("BILI-INPUT-001", "playback.identity", "缺少 B站 BV 号");
  var detail = await biliVideoDetail(identity.bvid);
  var selectedPage = biliPageData(detail, identity.page);
  var requestedQuality = biliRequestedQuality(params);
  BILI_LAST_PLAYBACK_REPORT = {
    requestedQuality: requestedQuality,
    dashMaxQuality: 0,
    dashVideoCount: 0,
    dashAudioCount: 0,
    dashHasAudio: false,
    dashState: "none",
    progressiveMaxQuality: 0,
    resourceCount: 0,
    note: ""
  };
  var dashProbeData = await biliProbeDash(identity.bvid, selectedPage.cid, requestedQuality, identity.page);
  var dashReport = biliDashReport(dashProbeData, requestedQuality);
  BILI_LAST_PLAYBACK_REPORT.dashMaxQuality = dashReport.dashMaxQuality;
  BILI_LAST_PLAYBACK_REPORT.dashVideoCount = dashReport.dashVideoCount;
  BILI_LAST_PLAYBACK_REPORT.dashAudioCount = dashReport.dashAudioCount;
  BILI_LAST_PLAYBACK_REPORT.dashHasAudio = dashReport.dashHasAudio;
  BILI_LAST_PLAYBACK_REPORT.dashState = dashReport.dashState;
  var firstError = null;
  var sawMultiSegment = false;
  var playableByQuality = Object.create(null);
  var initialCandidates = biliQualityCandidates(requestedQuality);
  for (var candidateIndex = 0; candidateIndex < initialCandidates.length; candidateIndex += 1) {
    var requestedCandidate = initialCandidates[candidateIndex];
    try {
      var candidateData = await biliPlayDataForRex(identity.bvid, selectedPage.cid, requestedCandidate, identity.page);
      var candidateDurl = candidateData && Array.isArray(candidateData.durl) ? candidateData.durl : [];
      if (candidateDurl.length > 1) sawMultiSegment = true;
      if (candidateDurl.length === 1 && candidateDurl[0] && candidateDurl[0].url) {
        var candidateActualQuality = Number(candidateData.quality || 0);
        var qualityKey = String(candidateActualQuality || requestedCandidate);
        if (!playableByQuality[qualityKey]) {
          playableByQuality[qualityKey] = { data: candidateData, requested: requestedCandidate, actual: candidateActualQuality };
        }
        // 请求档位已命中，或接口明确表示当前合并流最高档就是实际返回档时，无需重复探测低档。
        var acceptedBest = biliHighestQuality(candidateData.accept_quality, requestedQuality);
        if (candidateActualQuality >= requestedCandidate || (acceptedBest && candidateActualQuality >= acceptedBest)) break;
      }
    } catch (error) {
      firstError = error;
    }
  }
  var playable = Object.keys(playableByQuality).map(function (key) { return playableByQuality[key]; });
  if (!playable.length) {
    BILI_LAST_PLAYBACK_REPORT.note = biliPlaybackReportNote(BILI_LAST_PLAYBACK_REPORT);
    if (sawMultiSegment) throw biliMakeError("BILI-PLAY-002", "playback.resources", "当前可用线路是多段视频，Rex 单 URL 资源不能安全拼接", identity);
    throw firstError || biliMakeError("BILI-PLAY-001", "playback.resources", "没有返回可直接播放的合并音视频资源", identity);
  }
  playable.sort(function (left, right) {
    var qualityDelta = Number(right.actual || 0) - Number(left.actual || 0);
    if (qualityDelta) return qualityDelta;
    return Number(right.requested || 0) - Number(left.requested || 0);
  });
  BILI_LAST_PLAYBACK_REPORT.progressiveMaxQuality = Number(playable[0] && playable[0].actual || 0);
  BILI_LAST_PLAYBACK_REPORT.note = biliPlaybackReportNote(BILI_LAST_PLAYBACK_REPORT);
  var resources = [];
  var resourceUrls = Object.create(null);
  playable.forEach(function (result) {
    var candidateResources = biliResourcesFromPlayData(
      identity.bvid,
      identity.page,
      result.data,
      "分P " + identity.page,
      requestedQuality,
      BILI_LAST_PLAYBACK_REPORT
    );
    candidateResources.forEach(function (resource) {
      if (!resource || !resource.url || resourceUrls[resource.url]) return;
      resourceUrls[resource.url] = true;
      resources.push(resource);
    });
  });
  if (!resources.length) {
    throw biliMakeError(
      "BILI-PLAY-001",
      "playback.resources",
      BILI_RUNTIME_AUTH.configured ?
        "已携带账号 Cookie，但当前只得到 Rex 暂不能直接播放的分离 DASH、DRM 或无可用线路" :
        "当前没有可直接播放的合并音视频线路；如账号有观看权限，请在模块全局参数填写自己的 B站 Cookie",
      identity
    );
  }
  BILI_LAST_PLAYBACK_REPORT.resourceCount = resources.length;
  return resources;
}

async function biliDanmuCid(params) {
  params = biliApplyRuntimeParams(params);
  var direct = biliText(params.commentId).trim();
  if (/^\d+$/.test(direct) && Number(direct) > 0) return direct;
  // Rex 的弹幕回调会把当前分P透传为 episodeId/commentId；必须优先于根视频 animeId。
  var episode = biliText(params.episodeId).trim();
  if (/^\d+$/.test(episode) && Number(episode) > 0) return episode;
  var target = episode || direct || biliText(
    params.link || params.videoUrl || params.id || params.animeId || params.bangumiId
  ).trim();
  var identity = await biliResolveInput(target);
  if (!identity || !identity.bvid) throw biliMakeError("BILI-INPUT-001", "danmu.identity", "弹幕加载缺少 BV号或 CID");
  var detail = await biliVideoDetail(identity.bvid);
  return biliText(biliPageData(detail, identity.page).cid);
}

async function biliDanmuXml(params) {
  params = biliApplyRuntimeParams(params);
  if (!BILI_FEATURES.danmu) throw biliMakeError("BILI-FEATURE-OFF", "danmu.feature", "B站弹幕功能已关闭");
  var cid = await biliDanmuCid(params);
  if (BILI_DANMU_CACHE.cid === cid && BILI_DANMU_CACHE.xml && BILI_DANMU_CACHE.expiresAt > Date.now()) {
    return BILI_DANMU_CACHE.xml;
  }
  var traceId = biliDiagnosticId();
  var startedAt = Date.now();
  var danmuReferer = BILI_BASE + "/";
  var refTarget = biliText(params.link || params.videoUrl || params.id || params.animeId || params.bangumiId).trim();
  var refIdentity = biliIdentity(refTarget);
  if (refIdentity.bvid) danmuReferer = biliPageUrl(refIdentity.bvid, refIdentity.page);
  try {
    var response = await Widget.http.get("https://comment.bilibili.com/" + encodeURIComponent(cid) + ".xml", {
      zlibMode: false,
      headers: {
        "User-Agent": BILI_UA,
        Accept: "text/xml, application/xml, */*",
        Referer: danmuReferer,
        Cookie: biliMergeCookies(BILI_ANON_CACHE.cookie, BILI_RUNTIME_AUTH.cookie)
      }
    });
    var danmuStatus = biliResponseStatus(response);
    if (danmuStatus >= 400) {
      throw biliMakeError("BILI-DANMU-001", "danmu.http", "弹幕接口返回 HTTP " + danmuStatus);
    }
    var xml = biliText(response.data);
    if (!/<i\b/i.test(xml) && xml.indexOf("<?xml") < 0) {
      throw biliMakeError("BILI-DANMU-001", "danmu.parse", "弹幕返回内容不是可识别 XML");
    }
    BILI_DANMU_CACHE = { cid: cid, xml: xml, expiresAt: Date.now() + 5 * 60 * 1000 };
    biliLog(traceId, "DONE", "danmu.xml", "cid=" + cid + " length=" + xml.length + " elapsed=" + (Date.now() - startedAt) + "ms");
    return xml;
  } catch (error) {
    if (error && error.code) throw error;
    throw biliMakeError("BILI-DANMU-001", "danmu.http", error && error.message ? error.message : "弹幕请求失败");
  }
}

function biliXmlText(value) {
  return biliText(value)
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&amp;/gi, "&");
}

function biliDanmuMode(value) {
  var mode = Number(value);
  return mode === 4 || mode === 5 ? mode : 1;
}

function biliDanmuColor(value) {
  var color = Number(value);
  if (!isFinite(color) || color < 0) return 16777215;
  return Math.floor(color);
}

function biliDanmuCompatResult(comments) {
  // Rex 示例客户端消费数组；非枚举属性同时保留旧包装结构的读取兼容性。
  try {
    Object.defineProperty(comments, "count", {
      value: comments.length,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(comments, "comments", {
      value: comments,
      enumerable: false,
      configurable: true
    });
  } catch (error) {
    // 受限运行时仍可直接使用数组返回值。
  }
  return comments;
}

function biliDanmuComments(xml) {
  var comments = [];
  var source = biliText(xml);
  var matcher = /<d\b[^>]*\bp=["']([^"']*)["'][^>]*>([\s\S]*?)<\/d\s*>/gi;
  var match;
  while ((match = matcher.exec(source))) {
    var rawP = biliXmlText(match[1]).trim();
    var pParts = rawP.split(",");
    var time = Number(pParts[0]);
    if (!isFinite(time) || time < 0) continue;
    // B站 XML: time, mode, fontSize, color, ...；Rex: time, mode, color, source。
    var mode = biliDanmuMode(pParts[1]);
    var color = biliDanmuColor(pParts[3]);
    var p = String(time) + "," + String(mode) + "," + String(color) + ",[bilibili]";
    // 先去掉真实 XML 标签，再解码文本中的 &lt;，避免把用户弹幕里的尖括号误当标签。
    var message = biliXmlText(biliText(match[2]).replace(/<[^>]*>/g, "")).trim();
    if (!p || !message) continue;
    comments.push({ cid: String(comments.length + 1), p: p, m: message });
  }
  return biliDanmuCompatResult(comments);
}

async function getBiliDanmuDetail(params) {
  params = biliApplyRuntimeParams(params);
  var detailCandidates = [params.animeId, params.bangumiId, params.link, params.videoUrl, params.id, params.episodeId, params.commentId];
  var target = "";
  for (var detailCandidateIndex = 0; detailCandidateIndex < detailCandidates.length; detailCandidateIndex += 1) {
    var detailCandidate = biliText(detailCandidates[detailCandidateIndex]).trim();
    if (detailCandidate && !/^\d+$/.test(detailCandidate)) {
      target = detailCandidate;
      break;
    }
  }
  if (!target) {
    throw biliMakeError("BILI-INPUT-001", "danmu.detail", "弹幕目录需要 BV/AV/视频链接，不能只填写数字 CID");
  }
  var identity = await biliResolveInput(target);
  var detail = await biliVideoDetail(identity.bvid);
  var pages = Array.isArray(detail.pages) && detail.pages.length ? detail.pages : [{ page: 1, cid: detail.cid, part: detail.title }];
  return pages.map(function (pageData, index) {
    var page = Math.max(1, Number(pageData.page || index + 1));
    return {
      episodeId: biliText(pageData.cid),
      episodeTitle: "P" + page + " · " + biliStripHtml(pageData.part || detail.title || "")
    };
  }).filter(function (item) { return /^\d+$/.test(item.episodeId) && Number(item.episodeId) > 0; });
}

async function searchDanmu(params) {
  params = biliApplyRuntimeParams(params);
  var candidates = [params.link, params.videoUrl, params.id, params.animeId, params.bangumiId, params.episodeId, params.commentId];
  var target = "";
  var identity = {};
  for (var candidateIndex = 0; candidateIndex < candidates.length; candidateIndex += 1) {
    var candidate = biliText(candidates[candidateIndex]).trim();
    if (!candidate || /^\d+$/.test(candidate)) continue;
    var candidateIdentity = biliIdentity(candidate);
    if (candidateIdentity.bvid || candidateIdentity.aid || /https?:\/\/(?:www\.)?b23\.tv\//i.test(candidate)) {
      target = candidate;
      identity = candidateIdentity;
      break;
    }
  }
  if (!target && !identity.bvid && !identity.aid) return { animes: [] };
  var title = biliText(params.episodeName || params.title || params.seriesName || identity.bvid || "B站视频");
  var animeId = identity.bvid || target || title;
  return {
    animes: [{
      animeId: animeId,
      bangumiId: animeId,
      animeTitle: title
    }]
  };
}

async function getCommentsById(params) {
  var xml = await biliDanmuXml(biliApplyRuntimeParams(params || {}));
  return biliDanmuComments(xml);
}

async function getDanmuWithSegmentTime(params) {
  // B站公开 XML 按 CID 返回整段弹幕；当前保留 segmentTime 参数以兼容 Rex，后续可接入分片接口再做窗口过滤。
  var xml = await biliDanmuXml(biliApplyRuntimeParams(params || {}));
  return biliDanmuComments(xml);
}

function biliDiagnosticResult(title, ok, description, elapsed, code) {
  var status = ok ? "✅ " : "❌ ";
  var details = description || "";
  if (elapsed !== undefined && elapsed !== null) details += (details ? "\n" : "") + "耗时：" + elapsed + "ms";
  return biliMessageCard(status + title, details, code || (ok ? "OK" : "BILI-DIAG-FAIL"));
}

async function runBiliDiagnostics(params) {
  params = biliApplyRuntimeParams(params);
  var cards = [];
  var sampleBvid = "";
  var sampleCid = "";
  var samplePage = 1;
  var started;

  started = Date.now();
  if (!BILI_RUNTIME_AUTH.configured) {
    cards.push(biliDiagnosticResult(
      "账号 Cookie",
      true,
      "未配置：将按游客权限获取画质。Cookie 请填在模块全局参数，不要发到聊天或截图中。",
      Date.now() - started,
      "BILI-AUTH-NONE"
    ));
  } else {
    try {
      var navData = biliApiData(
        await biliGetJson(BILI_API + "/x/web-interface/nav", BILI_BASE + "/", { stage: "auth.nav" }),
        "B站账号状态",
        "auth.nav"
      );
      var loggedIn = !!navData.isLogin;
      var vipActive = loggedIn && Number(navData.vipStatus) === 1;
      var vipLabel = vipActive ? (Number(navData.vipType) === 2 ? "年度大会员有效" : "大会员有效") : "未检测到有效大会员";
      var dueDate = biliFormatMillisecondsDate(navData.vipDueDate);
      var authDescription = "登录状态：" + (loggedIn ? "有效" : "无效或已过期") + "\n会员状态：" + vipLabel;
      if (dueDate) authDescription += "\n会员到期：" + dueDate;
      authDescription += "\nCookie 内容：已隐藏";
      cards.push(biliDiagnosticResult("账号 Cookie", loggedIn, authDescription, Date.now() - started, loggedIn ? "OK" : "BILI-AUTH-002"));
    } catch (error) {
      cards.push(biliDiagnosticResult("账号 Cookie", false, "校验失败；Cookie 内容未输出。\n" + error.message, Date.now() - started, error.code || "BILI-AUTH-002"));
    }
  }

  started = Date.now();
  try {
    var cookie = await biliAnonymousCookie();
    cards.push(biliDiagnosticResult("匿名设备标识", !!cookie, cookie ? "buvid3/buvid4 已获取（内容已隐藏）" : "未取得匿名设备标识", Date.now() - started, cookie ? "OK" : "BILI-NET-001"));
  } catch (error) {
    cards.push(biliDiagnosticResult("匿名设备标识", false, error.message, Date.now() - started, error.code));
  }

  started = Date.now();
  try {
    var mixin = await biliWbiMixinKey();
    cards.push(biliDiagnosticResult("WBI 签名", !!mixin, "WBI 混淆密钥已生成（内容已隐藏）", Date.now() - started));
  } catch (error) {
    cards.push(biliDiagnosticResult("WBI 签名", false, error.message, Date.now() - started, error.code));
  }

  started = Date.now();
  try {
    var popular = await loadBiliPopular({ page: 1, count: 1 });
    sampleBvid = popular.length ? biliBvid(popular[0].link) : "";
    cards.push(biliDiagnosticResult("热门列表", !!sampleBvid, sampleBvid ? ("样本：" + sampleBvid) : "没有返回视频", Date.now() - started));
  } catch (error) {
    cards.push(biliDiagnosticResult("热门列表", false, error.message, Date.now() - started, error.code));
  }

  if (biliText(params.input).trim()) {
    try { sampleBvid = (await biliResolveInput(params.input)).bvid || sampleBvid; } catch (error) {}
  }

  started = Date.now();
  try {
    if (!sampleBvid) throw biliMakeError("BILI-DATA-001", "diagnostics.detail", "没有可用测试 BV号");
    var detail = await biliVideoDetail(sampleBvid);
    var pageData = biliPageData(detail, samplePage);
    sampleCid = biliText(pageData.cid);
    cards.push(biliDiagnosticResult("视频详情", !!sampleCid, "BV：" + sampleBvid + "\nCID：" + sampleCid + "\n分P：" + (detail.pages ? detail.pages.length : 1), Date.now() - started));
  } catch (error) {
    cards.push(biliDiagnosticResult("视频详情", false, error.message, Date.now() - started, error.code));
  }

  started = Date.now();
  try {
    if (!sampleCid) throw biliMakeError("BILI-DATA-001", "diagnostics.playback", "没有可用 CID");
    var requestedQuality = biliRequestedQuality(params);
    var diagnosticResources = await loadResource({
      link: biliPageUrl(sampleBvid, samplePage),
      biliMaxQuality: biliText(params.biliMaxQuality || requestedQuality)
    });
    var preferredResource = diagnosticResources[0] || {};
    var playbackReport = BILI_LAST_PLAYBACK_REPORT || {};
    var dashDescription = playbackReport.dashMaxQuality ? biliQualityName(playbackReport.dashMaxQuality) : "未返回可识别轨道";
    if (playbackReport.dashState === "separate") {
      dashDescription += "（分离DASH，视频轨 " + Number(playbackReport.dashVideoCount || 0) +
        " / 音频轨 " + Number(playbackReport.dashAudioCount || 0) + "）";
    } else if (playbackReport.dashState === "video-only") {
      dashDescription += "（仅视频轨，缺少可识别音频轨）";
    } else if (playbackReport.dashState === "probe-failed") {
      dashDescription = "探测失败（不影响合并流回退）";
    }
    var playDescription = "请求上限：" + biliQualityName(requestedQuality) +
      "\n账号 Cookie：" + (BILI_RUNTIME_AUTH.configured ? "已携带（登录/会员有效性见上方账号诊断）" : "未配置，按游客请求") +
      "\nDASH 实际最高：" + dashDescription +
      "\nRex 合并流最高：" + (playbackReport.progressiveMaxQuality ? biliQualityName(playbackReport.progressiveMaxQuality) : "无") +
      "\n可播放线路：" + diagnosticResources.length +
      "\n首选线路：" + biliText(preferredResource.name || "无") +
      "\n限制判断：" + biliText(playbackReport.note || "未生成") +
      "\n线路说明：" + biliText(preferredResource.description || "无");
    cards.push(biliDiagnosticResult("播放资源", diagnosticResources.length > 0, playDescription, Date.now() - started, diagnosticResources.length ? "OK" : "BILI-PLAY-001"));
  } catch (error) {
    cards.push(biliDiagnosticResult("播放资源", false, error.message, Date.now() - started, error.code));
  }

  started = Date.now();
  try {
    var xml = await biliDanmuXml({ commentId: sampleCid });
    cards.push(biliDiagnosticResult("弹幕 XML", xml.indexOf("<i>") >= 0, "数据长度：" + xml.length, Date.now() - started));
  } catch (error) {
    cards.push(biliDiagnosticResult("弹幕 XML", false, error.message, Date.now() - started, error.code));
  }

  started = Date.now();
  try {
    var multiPageResults = [];
    var danmuEpisodes = sampleBvid ? await getBiliDanmuDetail({ animeId: sampleBvid }) : [];
    if (danmuEpisodes.length <= 1) {
      cards.push(biliDiagnosticResult("多P弹幕链路", true, "样本只有 1 个分P，已跳过逐P检查", Date.now() - started, "BILI-DANMU-SINGLE"));
    } else {
      for (var pageIndex = 0; pageIndex < danmuEpisodes.length; pageIndex += 1) {
        var episodeTitle = biliText(danmuEpisodes[pageIndex].episodeTitle);
        var pageMatch = episodeTitle.match(/^P(\d+)/i);
        var pageNumber = pageMatch ? Number(pageMatch[1]) : pageIndex + 1;
        var pageCid = biliText(danmuEpisodes[pageIndex].episodeId);
        try {
          var pageComments = await getCommentsById({ animeId: sampleBvid, commentId: pageCid });
          multiPageResults.push("P" + pageNumber + " CID " + pageCid + " 弹幕 " + Number(pageComments.count || 0));
        } catch (pageError) {
          multiPageResults.push("P" + pageNumber + " CID " + pageCid + " 失败 " + (pageError.code || "BILI-DANMU-001"));
        }
      }
      cards.push(biliDiagnosticResult("多P弹幕链路", multiPageResults.every(function (line) { return line.indexOf(" 失败 ") < 0; }), multiPageResults.join("\n"), Date.now() - started));
    }
  } catch (error) {
    cards.push(biliDiagnosticResult("多P弹幕链路", false, error.message, Date.now() - started, error.code));
  }

  cards.unshift(biliMessageCard(
    "哔哩哔哩 v" + BILI_VERSION + " 诊断结果",
    "构建日期：" + BILI_BUILD_DATE + "\n功能开关：" + Object.keys(BILI_FEATURES).filter(function (key) { return BILI_FEATURES[key]; }).join(", ") +
      "\n最后诊断ID：" + (BILI_LAST_DIAGNOSTIC.id || "无"),
    "BILI-DIAGNOSTICS"
  ));
  return cards;
}
