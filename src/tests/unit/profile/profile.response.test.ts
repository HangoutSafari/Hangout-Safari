import { describe, it, expect } from "vitest";

describe("Profile can be called", () => {
  it("opens the profile page", async () => {
    const response = await fetch("http://localhost:5173/profile");
    expect(response.status).toBe(200);
  });
});
