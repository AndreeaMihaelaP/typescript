/* eslint-disable */
import { strict as assert } from "assert";

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

let someNumber = parseInt("10");
const sample = "sample";
const someString = `${sample}`;

switch (someString) {
  case "test":
    // A
    break;
  case "sample":
    // B
    break;
  case "c":
    // C
    break;
}

if (someString === "test") {
  // A
} else if (someString === "sample") {
  // B
} else if (someString === "c") {
  // C
}

switch (someNumber) {
  case 1:
    // 1
    break;
  case 2:
    // 2
    break;
  default:
  // 3
}

if (someNumber === 1) {
  // 1
} else if (someNumber === 2) {
  // 2
} else {
  // 3
}

// Fall trough behavior
switch (someNumber) {
  case 1:
  case 2:
  case 3:
  // code
  case 4:
  case 5:
    // code
    break;
}

if (someNumber >= 1 && someNumber <= 5) {
  // code
}
