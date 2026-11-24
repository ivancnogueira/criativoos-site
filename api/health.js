export default function handler(_req, res) {
  res.status(200).json({
    status: "ok",
    service: "criativoos-site",
    release: "v1.0.3",
    platform: "vercel",
    timestamp: new Date().toISOString(),
  });
}
