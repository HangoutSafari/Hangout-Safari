import { describe,it,expect } from "vitest";

describe("Animal api data test", () => {
    it("tests the api data response", async () => {
        const animals = await fetch(`http://localhost:3010/`);
        const data = await animals.json();
        expect(data).toBeDefined();
        expect(data).toBe("it's working :3");
    })
})