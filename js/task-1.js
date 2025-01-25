"use strict";

function isEnoughCapacity(products, containerSize) {
  const allNumberProducts = Object.values(products);

  let sumAllProducts = 0;
  for (const numberProduct of allNumberProducts) {
    if (numberProduct > 0) {
      sumAllProducts += numberProduct;
    }
  }

  if (sumAllProducts === 0) {
    return "container is empty";
  }

  return sumAllProducts <= containerSize;
}

// Example
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// separator for console
console.log("---next task---");
