// matchers
test("obj", () => {
  const data = { one: 1 };

  expect(data).toEqual({ one: 1 });
});

test("array", () => {
  const data = [1, 2, 3];

  expect(data).toContain(1);
});

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
  expect(data).not.toBeTruthy();
});

test("boolean", () => {
  const data = true;
  const data2 = false;

  expect(data).toBeTruthy();
  expect(data).not.toBeFalsy();
  expect(data2).toBeFalsy();
  expect(data2).not.toBeTruthy();
});

test("string", () => {
  const data = "test";

  expect(data).toMatch(/es/);
});
