/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

const myName: string = "Andreea";
const amount: number = 2 + 2;

const hello: string = `Hello ${myName}`;
const powerLevel: number = 900;
const yes: boolean = true;

function sum(lhs: number, rhs: number): number {
  const total = lhs + rhs;
  return total;
}

const one = sum(1, 0);
console.log(one);
const two = sum(1, 1);
console.log(two);
