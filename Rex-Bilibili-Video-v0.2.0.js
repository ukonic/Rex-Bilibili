/* WidgetMetadata {
  "id": "com.local.rex.bilibili.video",
  "title": "B站视频 v0.2.0",
  "version": "0.2.0",
  "author": "ukonic"
} */

var WidgetMetadata = {
  id: "com.local.rex.bilibili.video",
  title: "B站视频 v0.2.0",
  description: "B站热门、排行榜、每周必看、入站必刷、分区、搜索、BV/AV/短链接、多P、合集、弹幕和动态播放。",
  author: "ukonic",
  version: "0.2.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 60,
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
      title: "UP主投稿（实验）",
      description: "按 MID 查看 UP主公开投稿；该接口可能触发 B站风控",
      functionName: "loadBiliUserVideos",
      cacheDuration: 60,
      params: [
        { name: "mid", title: "UP主 MID", type: "input" },
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
      description: "检查网络、匿名设备标识、WBI、热门、详情、播放和弹幕链路",
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
var BILI_VERSION = "0.2.0";
var BILI_BUILD_DATE = "2026-10-30";
var BILI_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
var BILI_WBI_CACHE = { key: "", expiresAt: 0 };
var BILI_ANON_CACHE = { cookie: "", expiresAt: 0 };
var BILI_DANMU_CACHE = { cid: "", xml: "", expiresAt: 0 };
var BILI_LAST_DIAGNOSTIC = { id: "", code: "", stage: "", message: "" };

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
  return BILI_BASE + "/video/" + encodeURIComponent(bvid) + "?p=" + Math.max(1, Number(page || 1));
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
  var cookie = options.anonymous === false ? "" : await biliAnonymousCookie();
  var requestHeaders = biliHeaders(referer, cookie);
  var startedAt = Date.now();
  biliLog(traceId, "START", stage, "request");
  try {
    var response = await Widget.http.get(url, { headers: requestHeaders });
    if (Number(response.status) >= 500 && options.retry !== false) {
      biliLog(traceId, "RETRY", stage, "HTTP " + response.status);
      response = await Widget.http.get(url, { headers: requestHeaders });
    }
    biliLog(traceId, "DONE", stage, "status=" + biliText(response.status || "-") + " elapsed=" + (Date.now() - startedAt) + "ms");
    return biliJson(response.data);
  } catch (error) {
    biliLog(traceId, "ERROR", stage, "elapsed=" + (Date.now() - startedAt) + "ms");
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
      headers: biliHeaders(BILI_BASE + "/", await biliAnonymousCookie())
    });
    var headers = response.headers || {};
    var location = headers.location || headers.Location || (typeof headers.get === "function" ? headers.get("location") : "") || response.url || "";
    var shortBvid = biliBvid(location) || biliBvid(response.data);
    if (shortBvid) return { bvid: shortBvid, aid: "", page: biliPageNumber(location || input) };
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

function biliVideoItem(data, selectedPage) {
  data = data || {};
  var bvid = biliBvid(data.bvid || data.arcurl || data.id);
  if (!bvid) return null;
  var page = Math.max(1, Number(selectedPage || data.page || 1));
  var link = biliPageUrl(bvid, page);
  var title = biliStripHtml(data.title || data.part || data.name);
  var cover = biliHttps(data.pic || data.cover || data.first_frame);
  var owner = data.owner || {};
  var ownerName = biliStripHtml(owner.name || data.author || data.up_name);
  var ownerFace = biliHttps(owner.face || data.upic || data.face);
  var area = biliStripHtml(data.tname || data.typename || data.type_name);
  var tid = biliText(data.tid || data.typeid).trim();
  var duration = biliDurationSeconds(data.duration || data.length);
  var view = biliCompactNumber(biliStatValue(data, "view", "play"));
  var danmaku = biliCompactNumber(biliStatValue(data, "danmaku", "video_review"));
  var like = biliCompactNumber(biliStatValue(data, "like", "like"));
  var coin = biliCompactNumber(biliStatValue(data, "coin", "coin"));
  var favorite = biliCompactNumber(biliStatValue(data, "favorite", "favorites") || biliStatValue(data, "fav", "favorites"));
  var pubdate = biliFormatDate(data.pubdate || data.senddate || data.created);
  var ownerMid = biliText(owner.mid || data.mid).trim();
  var description = [];
  if (ownerName) description.push("UP主：" + ownerName);
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
    releaseDate: pubdate,
    mediaType: "movie",
    duration: duration,
    durationText: biliFormatDuration(duration),
    genreTitle: area || "B站视频",
    genreItems: tid && area ? [{ id: tid, title: area }] : [],
    peoples: ownerName && ownerMid ? [{ id: ownerMid, title: ownerName, avatar: ownerFace, role: "UP主" }] : [],
    link: link,
    playerType: "app"
  };
}

function biliItems(list) {
  if (!Array.isArray(list)) return [];
  return list.map(function (entry) { return biliVideoItem(entry, 1); }).filter(function (entry) { return !!entry; });
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
  var params = {};
  query.split("&").forEach(function (part) {
    var pair = part.split("=");
    try { params[decodeURIComponent(pair[0] || "")] = decodeURIComponent((pair.slice(1).join("=") || "").replace(/\+/g, "%20")); } catch (error) {}
  });
  return biliMessageCard(params.title || "B站模块提示", params.description || "请稍后重试", params.rexBiliMessage || "INFO");
}

async function biliContextItems(params) {
  params = params || {};
  if (params.peopleId) {
    return loadBiliUserVideos({ mid: params.peopleId, page: params.page, count: params.count, order: "pubdate" });
  }
  if (params.genreId) {
    return loadBiliCategory({
      tid: params.genreId,
      page: params.page,
      count: params.count
    });
  }
  return null;
}

async function loadBiliPopular(params) {
  params = params || {};
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(50, Number(params.count || 20)));
  var url = BILI_API + "/x/web-interface/popular?" + biliQuery({ pn: page, ps: count });
  var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/popular/all", { stage: "api.popular" }), "热门视频", "api.popular");
  return biliItems(data.list);
}

async function loadBiliCategory(params) {
  params = params || {};
  if (params.peopleId) return loadBiliUserVideos({ mid: params.peopleId, page: params.page, count: params.count, order: "pubdate" });
  var tid = biliText(params.genreId || params.tid).trim();
  if (!/^\d+$/.test(tid)) throw biliMakeError("BILI-INPUT-001", "category.input", "请选择有效的 B站分区");
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(50, Number(params.count || 20)));
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
  params = params || {};
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var rid = biliText(params.genreId || params.rid || "0").trim();
  if (!/^\d+$/.test(rid)) throw biliMakeError("BILI-INPUT-001", "ranking.input", "排行榜分区 ID 无效");
  var count = Math.max(1, Math.min(100, Number(params.count || 30)));
  var url = BILI_API + "/x/web-interface/ranking/v2?" + biliQuery({ rid: rid, type: "all" });
  try {
    var data = biliApiData(await biliGetJson(url, BILI_BASE + "/v/popular/rank/all", { stage: "api.ranking" }), "B站排行榜", "api.ranking");
    return biliItems(Array.isArray(data.list) ? data.list.slice(0, count) : []);
  } catch (error) {
    return [biliMessageCard("排行榜暂时不可用", error.message, error.code || "BILI-API-001")];
  }
}

async function loadBiliWeekly(params) {
  params = params || {};
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var count = Math.max(1, Math.min(100, Number(params.count || 30)));
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
  params = params || {};
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(50, Number(params.count || 30)));
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
  var signedQuery = await biliWbiQuery(params);
  var url = BILI_API + "/x/web-interface/wbi/search/type?" + signedQuery;
  var result = await biliGetJson(url, "https://search.bilibili.com/all?keyword=" + encodeURIComponent(keyword), { stage: "api.search.wbi" });
  if (Number(result.code) === 0) return result.data || {};

  var fallbackUrl = BILI_API + "/x/web-interface/search/type?" + biliQuery(params);
  return biliApiData(
    await biliGetJson(fallbackUrl, "https://search.bilibili.com/all?keyword=" + encodeURIComponent(keyword), { stage: "api.search.fallback" }),
    "B站搜索", "api.search.fallback"
  );
}

async function searchBiliVideos(params) {
  params = params || {};
  var contextItems = await biliContextItems(params);
  if (contextItems) return contextItems;
  var keyword = biliText(params.keyword).trim();
  if (!keyword) throw biliMakeError("BILI-INPUT-001", "search.input", "请输入 B站视频关键词");
  if (biliBvid(keyword) || biliAid(keyword) || /bilibili\.com\/video\//i.test(keyword) || /b23\.tv\//i.test(keyword)) {
    return loadBiliVideoById({ input: keyword });
  }
  var allowedOrders = { totalrank: true, click: true, pubdate: true, dm: true, stow: true };
  var order = biliText(params.order).trim();
  if (!allowedOrders[order]) order = "totalrank";
  var duration = biliText(params.duration || "0").trim();
  if (!/^[0-4]$/.test(duration)) duration = "0";
  var tids = biliText(params.tids || "0").trim();
  if (!/^\d+$/.test(tids)) tids = "0";
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(50, Number(params.count || 20)));
  var data = await biliSearchResult(keyword, order, duration, tids, page, count);
  var items = biliItems(Array.isArray(data.result) ? data.result : []);
  if (!items.length) return [biliMessageCard("没有搜索结果", "关键词：" + keyword + "\n请尝试更短的关键词或取消筛选。", "BILI-SEARCH-EMPTY")];
  return items;
}

async function loadBiliUserVideos(params) {
  params = params || {};
  var mid = biliText(params.peopleId || params.mid).trim();
  if (!/^\d+$/.test(mid)) throw biliMakeError("BILI-INPUT-001", "user.input", "UP主 MID 必须是数字");
  if (!BILI_FEATURES.userVideos) return [biliMessageCard("UP主投稿已关闭", "当前版本已通过功能开关关闭 UP主投稿。", "BILI-FEATURE-OFF")];
  var page = Math.max(1, Number(params.page || 1));
  var count = Math.max(1, Math.min(50, Number(params.count || 20)));
  var allowed = { pubdate: true, click: true, stow: true };
  var order = biliText(params.order || "pubdate");
  if (!allowed[order]) order = "pubdate";
  var signed = await biliWbiQuery({ mid: mid, pn: page, ps: count, order: order });
  var url = BILI_API + "/x/space/wbi/arc/search?" + signed;
  try {
    var data = biliApiData(
      await biliGetJson(url, "https://space.bilibili.com/" + mid + "/video", { stage: "api.user.videos" }),
      "UP主投稿", "api.user.videos"
    );
    var list = data && data.list && Array.isArray(data.list.vlist) ? data.list.vlist : [];
    var items = biliItems(list);
    if (!items.length) return [biliMessageCard("UP主暂无公开投稿", "MID：" + mid, "BILI-USER-EMPTY")];
    return items;
  } catch (error) {
    return [biliMessageCard("UP主投稿加载失败", error.message + "\n该接口风控较严，其他功能不受影响。", error.code || "BILI-RISK-412")];
  }
}

async function biliVideoDetail(bvid) {
  var url = BILI_API + "/x/web-interface/view?" + biliQuery({ bvid: bvid });
  return biliApiData(
    await biliGetJson(url, biliPageUrl(bvid, 1), { stage: "api.video.detail" }),
    "B站视频详情", "api.video.detail", { bvid: bvid }
  );
}

async function loadBiliVideoById(params) {
  params = params || {};
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
  var page = Math.max(1, Number(pageData && pageData.page || 1));
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

async function loadDetail(link) {
  var messageItem = biliMessageCardFromLink(link);
  if (messageItem) return messageItem;
  var identity = biliIdentity(link);
  if (!identity.bvid) return null;
  var detail = await biliVideoDetail(identity.bvid);
  var pages = Array.isArray(detail.pages) ? detail.pages : [];
  if (identity.page > Math.max(1, pages.length)) throw biliMakeError("BILI-INPUT-002", "detail.page", "分P页码超出范围", identity);
  var item = biliVideoItem(detail, identity.page);
  var fullDescription = biliStripHtml(detail.desc);
  if (fullDescription) item.description += "\n\n简介：\n" + fullDescription;
  var images = [item.backdropPath, biliHttps(detail.first_frame)].filter(Boolean);
  item.backdropPaths = images.filter(function (value, index) { return images.indexOf(value) === index; });
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
  item.relatedItems = await biliRelatedItems(identity.bvid);
  item.description += "\n\n播放资源：起播时实时获取公开可用线路";
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

async function biliPlayData(bvid, cid, qn, page) {
  var url = BILI_API + "/x/player/playurl?" + biliQuery({
    bvid: bvid,
    cid: cid,
    qn: qn,
    fnval: 1,
    fourk: 1,
    platform: "html5",
    high_quality: 1
  });
  return biliApiData(
    await biliGetJson(url, biliPageUrl(bvid, page), { stage: "api.playurl" }),
    "B站播放资源", "api.playurl", { bvid: bvid, page: page }
  );
}

function biliResourcesFromPlayData(bvid, page, playData, linePrefix) {
  var durl = Array.isArray(playData.durl) ? playData.durl : [];
  if (!durl.length) {
    if (playData.dash) throw biliMakeError("BILI-PLAY-003", "playback.resources", "当前只返回分离 DASH 音视频，未经 Rex 真机验证前不返回无声音线路", { bvid: bvid, page: page });
    return [];
  }
  if (durl.length > 1) {
    throw biliMakeError("BILI-PLAY-002", "playback.resources", "当前是旧式多段视频，v0.2.0 不会只播放第一段", { bvid: bvid, page: page });
  }
  var quality = Number(playData.quality || 0);
  var qualityName = biliQualityName(quality, playData.accept_description, playData.accept_quality);
  var urls = [durl[0].url].concat(Array.isArray(durl[0].backup_url) ? durl[0].backup_url : []);
  var seen = {};
  var resources = [];
  urls.slice(0, 3).forEach(function (rawUrl, index) {
    var url = biliHttps(rawUrl);
    if (!url || seen[url]) return;
    seen[url] = true;
    var lineName = index === 0 ? "主线路" : ("备用线路 " + index);
    resources.push({
      name: qualityName + " · " + lineName,
      description: (linePrefix || "B站公开视频") + " · " + biliText(playData.format || "MP4"),
      url: url,
      customHeaders: biliPlaybackHeaders(bvid, page),
      headers: biliPlaybackHeaders(bvid, page),
      playerType: "app"
    });
  });
  return resources;
}

async function loadResource(params) {
  params = params || {};
  if (!BILI_FEATURES.progressivePlayback) throw biliMakeError("BILI-FEATURE-OFF", "playback.feature", "公开 MP4 播放功能已关闭");
  if (biliMessageCardFromLink(params.link || params.id)) throw biliMakeError("BILI-INPUT-001", "playback.message", "这是模块提示卡，不是可播放视频");
  var identity = biliIdentity(params.link || params.id || params.videoUrl);
  if (!identity.bvid) throw biliMakeError("BILI-INPUT-001", "playback.identity", "缺少 B站 BV 号");
  var detail = await biliVideoDetail(identity.bvid);
  var selectedPage = biliPageData(detail, identity.page);
  var first = await biliPlayData(identity.bvid, selectedPage.cid, 127, identity.page);
  var resources = biliResourcesFromPlayData(identity.bvid, identity.page, first, "分P " + identity.page);
  var actualQuality = Number(first.quality || 0);
  var qualities = Array.isArray(first.accept_quality) ? first.accept_quality.map(Number) : [];
  var uniqueQualities = [];
  qualities.forEach(function (quality) {
    if (quality > 0 && quality !== actualQuality && uniqueQualities.indexOf(quality) < 0) uniqueQualities.push(quality);
  });
  uniqueQualities = uniqueQualities.slice(0, 5);
  for (var i = 0; i < uniqueQualities.length; i += 1) {
    try {
      var next = await biliPlayData(identity.bvid, selectedPage.cid, uniqueQualities[i], identity.page);
      var nextQuality = Number(next.quality || 0);
      if (nextQuality === actualQuality) continue;
      if (resources.some(function (entry) { return entry.url === biliHttps(next.durl && next.durl[0] && next.durl[0].url); })) continue;
      resources = resources.concat(biliResourcesFromPlayData(identity.bvid, identity.page, next, "分P " + identity.page));
    } catch (error) {
      console.log("B站清晰度 " + uniqueQualities[i] + " 加载失败：" + (error && error.message ? error.message : error));
    }
  }
  if (!resources.length) {
    throw biliMakeError("BILI-PLAY-001", "playback.resources", "当前视频没有公开可用的合并音视频线路；付费、会员、DRM 或需登录内容不支持", identity);
  }
  return resources;
}

async function biliDanmuCid(params) {
  params = params || {};
  var direct = biliText(params.commentId).trim();
  if (/^\d+$/.test(direct)) return direct;
  var target = params.link || params.videoUrl || params.id || params.animeId || params.commentId;
  var identity = biliIdentity(target);
  if (!identity.bvid) throw biliMakeError("BILI-INPUT-001", "danmu.identity", "弹幕加载缺少 BV号或 CID");
  var detail = await biliVideoDetail(identity.bvid);
  return biliText(biliPageData(detail, identity.page).cid);
}

async function biliDanmuXml(params) {
  if (!BILI_FEATURES.danmu) throw biliMakeError("BILI-FEATURE-OFF", "danmu.feature", "B站弹幕功能已关闭");
  var cid = await biliDanmuCid(params);
  if (BILI_DANMU_CACHE.cid === cid && BILI_DANMU_CACHE.xml && BILI_DANMU_CACHE.expiresAt > Date.now()) {
    return BILI_DANMU_CACHE.xml;
  }
  var traceId = biliDiagnosticId();
  var startedAt = Date.now();
  try {
    var response = await Widget.http.get("https://comment.bilibili.com/" + encodeURIComponent(cid) + ".xml", {
      zlibMode: false,
      headers: {
        "User-Agent": BILI_UA,
        Accept: "text/xml, application/xml, */*",
        Referer: BILI_BASE + "/"
      }
    });
    var xml = biliText(response.data);
    if (xml.indexOf("<i>") < 0 && xml.indexOf("<?xml") < 0) {
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

async function searchDanmu(params) {
  params = params || {};
  var identity = biliIdentity(params.link || params.videoUrl || params.id || params.animeId);
  var title = biliText(params.title || params.seriesName || params.episodeName || identity.bvid || "B站视频");
  return {
    animes: [{
      bangumiId: identity.bvid || biliText(params.animeId || params.link || title),
      animeTitle: title
    }]
  };
}

async function getCommentsById(params) {
  return biliDanmuXml(params || {});
}

async function getDanmuWithSegmentTime(params) {
  return biliDanmuXml(params || {});
}

function biliDiagnosticResult(title, ok, description, elapsed, code) {
  var status = ok ? "✅ " : "❌ ";
  var details = description || "";
  if (elapsed !== undefined && elapsed !== null) details += (details ? "\n" : "") + "耗时：" + elapsed + "ms";
  return biliMessageCard(status + title, details, code || (ok ? "OK" : "BILI-DIAG-FAIL"));
}

async function runBiliDiagnostics(params) {
  params = params || {};
  var cards = [];
  var sampleBvid = "";
  var sampleCid = "";
  var samplePage = 1;
  var started;

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
    var playData = await biliPlayData(sampleBvid, sampleCid, 64, samplePage);
    var durlCount = Array.isArray(playData.durl) ? playData.durl.length : 0;
    var playDescription = durlCount ? ("合并资源：" + durlCount + "\n清晰度：" + biliQualityName(playData.quality, playData.accept_description, playData.accept_quality)) :
      (playData.dash ? "仅返回分离 DASH" : "未返回可用资源");
    cards.push(biliDiagnosticResult("播放资源", durlCount > 0, playDescription, Date.now() - started, durlCount ? "OK" : "BILI-PLAY-001"));
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

  cards.unshift(biliMessageCard(
    "B站模块 v" + BILI_VERSION + " 诊断结果",
    "构建日期：" + BILI_BUILD_DATE + "\n功能开关：" + Object.keys(BILI_FEATURES).filter(function (key) { return BILI_FEATURES[key]; }).join(", ") +
      "\n最后诊断ID：" + (BILI_LAST_DIAGNOSTIC.id || "无"),
    "BILI-DIAGNOSTICS"
  ));
  return cards;
}

