const { sum, subtract, multiply, divide } = require("./2-math.js");

describe("Tests for Math", () => {
  describe("Tests for Sum", () => {
    test("adds 1 + 3 should be 4", () => {
      const result = sum(1, 3);

      expect(result).toBe(4);
    });
  });

  describe("Tests for Subtract", () => {
    test("subtracts 3 - 1 should be 2", () => {
      const result = subtract(3, 1);

      expect(result).toBe(2);
    });
  });

  describe("Tests for Multiply", () => {
    test("multiplies 3 * 2 should be 6", () => {
      const result = multiply(3, 2);

      expect(result).toBe(6);
    });
  });

  describe("Tests for Divide", () => {
    test("divides 6 / 2 should be 3, 4 / 1 should be 4 and 1 / 0 should be null", () => {
      const results = [divide(6, 2), divide(4, 1), divide(1, 0)];

      expect(results).toEqual([3, 4, null]);
    });
  });
});
