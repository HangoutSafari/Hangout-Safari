import { describe, it, expect } from "vitest";

describe("test if path register works", () => {
  it("should return request code 200", async () => {
    const response = await fetch("http://apigateway:5173/register");
    expect(response.status).toBe(200);    
  })});



describe("Profile can be called", () => {
  it("opens the profile page", async () => {
    const response = await fetch('http://apigateway:5173/profile');
    expect(response.status).toBe(200);
  });
});

  