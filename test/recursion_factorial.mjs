import { factorial } from '../recursion_factorial.mjs'
import { assert } from 'chai'

describe("Factorial", () => {
  it("factorial(0) should return 1", () => {
    assert.equal(factorial(0), 1);
  });

  it("factorial(1) should return 1", () => {
    assert.equal(factorial(1), 1);
  });

  it("factorial(7) should return 5040", () => {
    assert.equal(factorial(7), 5040);
  });

  it("factorial(18) should return 6402373705728000", () => {
    assert.equal(factorial(18), 6402373705728000);
  });
});
