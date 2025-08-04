import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
    }),
    react({
      // Don't fail build on TypeScript errors
      typescript: {
        ignoreBuildErrors: true,
      },
    }),
    tailwindcss(),
  ],
  esbuild: {
    // Don't fail build on warnings
    logOverride: {
      'this-is-undefined-in-esm': 'silent',
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@web": resolve(__dirname, "./src"),
      "@sdk": resolve(__dirname, "../sdk/src"),
      "@api": resolve(__dirname, "../api/src"),
    },
  },
});
