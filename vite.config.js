import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

const isGitHubActions = process.env.CI === "true";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    exclude: isGitHubActions
      ? [
          "src/tests/unit/api/animals.api.response.test.ts",
          "src/tests/unit/profile/profile.nonExistentUri.test.ts",
          "src/tests/unit/event_slug/event_slug.response.test.ts",
          "src/tests/unit/profile/profile.response.test.ts",
          "src/tests/unit/api/animals.api.dataResponse.test.ts",
          "src/tests/unit/administration/login.test.ts",
          "src/tests/unit/administration/register.test.ts",
          "src/tests/unit/profile/profile.nonExistentUri.test.ts",
          "src/tests/unit/profile/profile.response.test.ts",
          "node_modules",
        ]
      : ["node_modules"],
  },
});
