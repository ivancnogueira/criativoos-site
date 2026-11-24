import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const hasHero1CharacterPng = fs.existsSync(
  path.resolve(process.cwd(), "public/images/hero-cyber-operator-v2.png")
);

export default defineConfig({
  plugins: [react()],
  define: {
    __HAS_HERO1_CHARACTER_PNG__: JSON.stringify(hasHero1CharacterPng),
  },
  server: {
    port: 5175,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["gsap", "lucide-react"],
        },
      },
    },
  },
});
