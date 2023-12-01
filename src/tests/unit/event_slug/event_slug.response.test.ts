import { describe, it, expect } from "vitest";

describe("Event page can be called", () => {
  it("opens the event page", async () => {
    const response = await fetch(`http://localhost:5173/events/1`);
    expect(response.status).toBe(200);
  });
});

