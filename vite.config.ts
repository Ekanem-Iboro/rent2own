import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://www.rent2ownauto.com.au/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: true, // Ensure this is true for HTTPS requests
      },
    },
  },
});
