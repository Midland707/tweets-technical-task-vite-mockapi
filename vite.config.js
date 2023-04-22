import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/tweets-technical-task-vite-mockapi/",
  plugins: [react()],
});
