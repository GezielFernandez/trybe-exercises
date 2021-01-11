// myRemoveWithoutCopy.js
const myRemoveWithoutCopy = (arr, item) =>
  arr.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );

console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3))


module.exports = myRemoveWithoutCopy;

// const array = [1, 2, 3, 4];
// const element = array.splice(3, 3);
// console.log(element);