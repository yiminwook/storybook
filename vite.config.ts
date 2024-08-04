import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";
import path from "path";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

const defaultConfig: UserConfig = {
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
  ],
  build: {
    outDir: "build",
    emptyOutDir: true, // 빌드시 기존 파일 삭제
  },
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  if (process.env.DEPLOY_TARGET === "npm") {
    defaultConfig.plugins?.push(
      dts({
        tsconfigPath: "./tsconfig.build.json",
      }),
    );
    defaultConfig.plugins?.push(
      viteStaticCopy({
        targets: [{ src: "src/index.css", dest: "" }],
      }),
    );
    defaultConfig.build = {
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
    } satisfies UserConfig["build"];
  }

  return defaultConfig;
});
