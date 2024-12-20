// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png", "**/*.PNG"], // Add this line
  server: {
    host: "0.0.0.0",
  },
});
