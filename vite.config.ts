import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: ({ hash }) => `css_${hash}`,
    }),
    svgr(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
    }),
    viteStaticCopy({
      targets: [{ src: "src/index.css", dest: "" }],
    }),
  ],
  build: {
    lib: {
      name: "@twosday/ui",
      entry: path.resolve(__dirname, "src/index.tsx"),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.name === "style.css") return "custom.css";
        //   return assetInfo.name as string;
        // },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
