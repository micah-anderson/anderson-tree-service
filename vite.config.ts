import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    copyPublicDir: true,
  },
  base: "",
  publicDir: "public",
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  server: {
    open: true,
  },
});
