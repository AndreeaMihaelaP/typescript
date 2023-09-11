/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let n = 1;

// "postfix" increment
n++;
assert.equal(n, 2);

// "prefix" increment
n = 1;
++n;
assert.equal(n, 2);

// Difference
n = 5;
const k = n++;
assert.equal(k, 5);

n = 5;
const j = ++n;
assert.equal(j, 6);

n = 5;
const t = --n;
assert.equal(t, 4);

n = 5;
n += 5;
assert.equal(n, 10);

n -= 5;
assert.equal(n, 5);

// +=, -=, *=, /=, %=
