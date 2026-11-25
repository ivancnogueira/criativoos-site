export default function handler(_req, res) {
  res.status(200).json({
    status: "ok",
    service: "criativoos-site",
    release: "v1.0.4",
    platform: "vercel",
    timestamp: new Date().toISOString(),
  });
}
