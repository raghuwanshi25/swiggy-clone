import { sum } from "../sum";

test("calculating sum of two numbers", () => {
  const result = sum(3,6);
//   Assertion
  expect(result).toBe(9)
});
