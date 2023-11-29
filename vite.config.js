import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const isGitHubActions = process.env.CI === true;

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    exclude: isGitHubActions ? ["src/tests/unit/api/animals.api.response.test.ts"] : [],
  },
});
