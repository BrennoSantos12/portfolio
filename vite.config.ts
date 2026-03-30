import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// importa condicionalmente o devtools
const plugins = [vue()];

if (process.env.NODE_ENV !== "production") {
  try {
    const vueDevTools = require("vite-plugin-vue-devtools").default;
    plugins.push(vueDevTools());
  } catch (e) {
    console.warn("⚠️ Devtools não carregado:", (e as Error).message);
  }
}

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
