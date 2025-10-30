import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
  optimizeDeps: {
    exclude: ['better-auth']
  },
  resolve: {
    alias: {
      "@web": resolve(__dirname, "./src"),
      "@sdk": resolve(__dirname, "../sdk/src"),
      "@api": resolve(__dirname, "../api/src"),
    },
  },
  server: {
    port: 5173,
    cors: false, // because of Hono.js, disable Vite's built-in CORS setting
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
