import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://site04.360winspt.com",
  integrations: [sitemap()],
});
