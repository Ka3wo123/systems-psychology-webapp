import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss(), svgr()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
