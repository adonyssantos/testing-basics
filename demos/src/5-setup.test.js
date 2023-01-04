describe("set of tests", () => {
  beforeAll(() => {
    // eslint-disable-next-line no-console
    console.log("preparing algorithm");
  });

  test("1 + 1 should be 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("1 + 1 should not be 3", () => {
    expect(1 + 1).not.toBe(3);
  });

  test("1 + 3 should be 4", () => {
    expect(1 + 3).toBe(4);
  });

  describe("nested set of tests", () => {
    test("1 + 1 should be 2", () => {
      expect(1 + 1).toBe(2);
    });

    test("1 + 1 should not be 3", () => {
      expect(1 + 1).not.toBe(3);
    });

    test("1 + 3 should be 4", () => {
      expect(1 + 3).toBe(4);
    });
  });
});
