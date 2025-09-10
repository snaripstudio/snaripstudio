import type { RequestHandler } from "express";

const pages = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
];

function getBaseUrl(req: any) {
  const proto =
    (req.headers["x-forwarded-proto"] as string) || req.protocol || "https";
  const host = (req.headers["x-forwarded-host"] as string) || req.headers.host;
  return `${proto}://${host}`;
}

export const handleSitemap: RequestHandler = (req, res) => {
  const base = getBaseUrl(req);
  const now = new Date().toISOString();

  const urls = pages
    .map((p) => {
      const loc = `${base}${p.path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  res.set("Content-Type", "application/xml");
  res.send(xml);
};
