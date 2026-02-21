import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

function getRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const entries = fs.readdirSync(appDir, { withFileTypes: true });

  const routes = entries
    .filter((entry) => {
      if (!entry.isDirectory()) return false;
      // Skip non-route directories
      if (["components"].includes(entry.name)) return false;
      // Only include directories that have a page.tsx
      return fs.existsSync(path.join(appDir, entry.name, "page.tsx"));
    })
    .map((entry) => `/${entry.name}`);

  // Add the root route
  return ["", ...routes];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zvmiddelse.nl";

  return getRoutes().map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
