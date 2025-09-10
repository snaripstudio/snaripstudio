import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSitemap } from "./routes/sitemap";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health/ping
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  // API routes
  app.get("/api/demo", handleDemo);

  // SEO: dynamic sitemap that uses the request host/protocol
  app.get("/sitemap.xml", handleSitemap);

  return app;
}
