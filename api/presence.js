import { Redis } from "@upstash/redis";
const envEnding = (...ends) => { const k = Object.keys(process.env).find(k => ends.some(e => k.endsWith(e))); return k ? process.env[k] : undefined; };
const URL_ = envEnding("KV_REST_API_URL", "REDIS_REST_URL");
const TOKEN_ = envEnding("KV_REST_API_TOKEN", "REDIS_REST_TOKEN");
const redis = URL_ && TOKEN_ ? new Redis({ url: URL_, token: TOKEN_ }) : null;
const H = "hourberry:presence";
const STALE = 12000;
export default async function handler(req, res) {
  if (!redis) return res.status(500).json({ error: "storage not connected" });
  try {
    const now = Date.now();
    if (req.method === "POST") {
      const b = req.body || {};
      const id = String(b.id || "").slice(0, 40);
      if (!id) return res.status(400).json({ error: "missing id" });
      const me = { id, name: String(b.name || "").slice(0, 40), following: b.following ? String(b.following).slice(0, 40) : null, v: +b.v || 0, at: now };
      if (typeof b.state === "string" && b.state.length < 60000) me.state = b.state;
      else {
        const prev = await redis.hget(H, id);
        const p = prev ? (typeof prev === "string" ? JSON.parse(prev) : prev) : null;
        if (p && p.state && p.v === me.v) me.state = p.state;
      }
      await redis.hset(H, { [id]: JSON.stringify(me) });
    }
    if (req.method === "DELETE") { await redis.hdel(H, String(req.query.id || "")); return res.status(200).json({ ok: true }); }
    const all = (await redis.hgetall(H)) || {};
    const out = [], stale = [];
    for (const [k, v] of Object.entries(all)) {
      const p = typeof v === "string" ? JSON.parse(v) : v;
      if (now - p.at > STALE) stale.push(k); else out.push(p);
    }
    if (stale.length) await redis.hdel(H, ...stale);
    res.setHeader("cache-control", "no-store");
    return res.status(200).json(out);
  } catch (e) { res.status(500).json({ error: "storage error: " + (e && e.message) }); }
}
