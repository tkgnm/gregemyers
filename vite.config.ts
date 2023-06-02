import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [preact()],
  envDir: root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        bio: resolve(root, "bio", "index.html"),
      },
    },
  },
});
