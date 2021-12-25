import { add } from ".";

describe("Jest framework", () => {
    it("should return 3 for add(2,1)", () => {
        expect(add(2, 1)).toBe(3);
    });
});