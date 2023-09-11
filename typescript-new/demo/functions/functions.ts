/* eslint-disable */
import { strict as assert } from "assert";

// Functions are an essential component of programming that help organize code
// and make it more modular. A function is a block of code that can be called
// multiple times throughout a program with different inputs, allowing you to
// reuse code and save time. Functions can perform specific tasks or return
// values, and they can be used to break down complex problems into smaller,
// more manageable pieces. By using functions, you can reduce redundancy,
// improve code readability, and make it easier to maintain and update your
// code.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/functions.html

function sayHello() {
  console.log("hello");
}

sayHello();

function sum(lhs, rhs) {
  return lhs + rhs;
}

const answer = sum(1, 3);
console.log(answer);

const answer2 = sum(answer, 2);
assert.equal(answer2, 6);

const answer3 = sum(sum(1, 1), sum(2, 2));
assert.equal(answer3, 6);

const lhs = sum(1, 1);
const rhs = sum(2, 2);

const answer4 = sum(lhs, rhs);
assert.equal(answer4, 6);
