import { Redis } from "@upstash/redis";
const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});
const H = "hourberry:notes";
const clip = (v, n) => (typeof v === "string" ? v.slice(0, n) : v);
export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const all = (await redis.hgetall(H)) || {};
      return res.status(200).json(Object.values(all).map(v => (typeof v === "string" ? JSON.parse(v) : v)));
    }
    if (req.method === "POST") {
      const b = req.body || {};
      if (!b.text || !b.screen) return res.status(400).json({ error: "missing" });
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      const n = { id, by: clip(b.by, 40) || null, screen: clip(b.screen, 40), screenName: clip(b.screenName, 80), x: +b.x || 0, y: +b.y || 0, text: clip(b.text, 2000), done: false, at: Date.now(), path: clip(b.path, 300) };
      await redis.hset(H, { [id]: JSON.stringify(n) });
      return res.status(200).json(n);
    }
    if (req.method === "PATCH") {
      const b = req.body || {};
      const cur = await redis.hget(H, b.id);
      if (!cur) return res.status(404).json({ error: "not found" });
      const n = typeof cur === "string" ? JSON.parse(cur) : cur;
      if (typeof b.done === "boolean") n.done = b.done;
      await redis.hset(H, { [b.id]: JSON.stringify(n) });
      return res.status(200).json(n);
    }
    if (req.method === "DELETE") {
      await redis.hdel(H, String(req.query.id || ""));
      return res.status(200).json({ ok: true });
    }
    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: "storage not connected" });
  }
}
