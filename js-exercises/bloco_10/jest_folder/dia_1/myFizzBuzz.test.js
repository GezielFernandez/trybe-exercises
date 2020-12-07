const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('returns `fizzbuzz` if the argument is divisible by 3 or 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('returns `fizz` if the argument is divisible by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('returns `buzz` if the argument is divisible by 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('returns the number itself if the argument is not divisible by 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  test('returns false if the argument is not of a number type', () => {
    expect(myFizzBuzz('s')).toBe(false);
  });
  test('returns false if the argument is not of a number type', () => {
    expect(myFizzBuzz('not_a_number')).toBeFalsy;
  });
});