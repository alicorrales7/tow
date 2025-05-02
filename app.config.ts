import solid from "solid-start/vite";
import vercel from "solid-start/vercel";
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    plugins: [solid({ adapter: vercel() })]
  }
});
