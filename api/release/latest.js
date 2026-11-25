import { getLatestReleaseInfo } from "../../lib/latest-release.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
  const info = await getLatestReleaseInfo({
    forceRefresh: req.query?.refresh === "1",
  });
  return res.status(200).json(info);
}
