import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vitePluginCommonjs from "vite-plugin-commonjs";
import rollupPluginCommonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: "terser",
    rollupOptions: {
      plugins: [rollupPluginCommonjs()],
    },
  },
  plugins: [
    legacy({
      targets: ["defaults"],
    }),
    vitePluginCommonjs(),
  ],
  clearScreen: false,
});
