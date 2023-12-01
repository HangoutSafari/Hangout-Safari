import { describe, it, expect } from "vitest";

describe("test if login path works", () => {
  it("should return request code 200", async () => {
    const response = await fetch("http://localhost/login");
    expect(response.status).toBe(200);    
  })});