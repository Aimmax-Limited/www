import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Include netlifyPlugin in builds where NETLIFY is not false.
 */
const isNetlify = process.env.NETLIFY !== "false";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    ...(isNetlify ? [netlifyPlugin()] : []),
  ],
});
