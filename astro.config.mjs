// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import { template } from "./src/settings";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    site: process.env.PUBLIC_SITE_URL || template.website_url,
    base: process.env.PUBLIC_SITE_BASE || template.base,
});
