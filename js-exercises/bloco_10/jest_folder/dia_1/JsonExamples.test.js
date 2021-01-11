const myObjects = require('./JsonExamples');

test("comparing objects", () => {
  expect(obj1).toEqual(obj3);
  expect(obj1).not.toEqual(obj2);
});