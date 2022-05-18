const { sum } = require("./calculator");

it("sum of 2 and 2 the result must be 4", () => {
  /*
    Importante mencionar que o toBe deve ser usado quando valor
    for algo mais preciso como um Number ou Boolean 
   */
  expect(sum(2, 2)).toBe(4);
});

it("sum of 2 and 2 even if one of them is a string must be 4", () => {
  expect(sum("2", "2")).toBe(4);
});

it("throw an error if what is provided to the method cannot be summed", () => {
  expect(() => {
    sum("", "2");
  }).toThrowError();
});

it("throw an error if what is provided to the method cannot be summed", () => {
  expect(() => {
    sum([2, 2]);
  }).toThrowError();
});

it("throw an error if what is provided to the method cannot be summed", () => {
  expect(() => {
    sum({});
  }).toThrowError();
});

it("throw an error if what is provided to the method cannot be summed", () => {
  expect(() => {
    sum();
  }).toThrowError();
});

// throw error when "" [] {} or empty
