import { add } from "../add";

test("add", () => {
  expect(add(3, 4)).toBe(7);
  expect(add(1, 4)).toBe(5);
});

// test("Fake test", () => {
//   expect(true).toBeTruthy();
// });
// test("Fake test", () => {
//   expect(false).toBeFalsy();
// });
