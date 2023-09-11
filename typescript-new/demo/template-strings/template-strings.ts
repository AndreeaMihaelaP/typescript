/* eslint-disable */
import { strict as assert } from "assert";

// Template literals allow us to substitute variables into a string.
// This makes it easy to display customized messages.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

function greet(message) {
  console.log(`Hello ${message}`);
}

greet("Andreea");

const kids = 2;
const adults = 4;
const totalAttending = kids + adults;

const message = `There are ${totalAttending} people`;

console.log(`${message} to seat at the restaurant.`);
