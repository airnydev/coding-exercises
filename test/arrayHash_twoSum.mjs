import { assert } from 'chai'
import { twoSum } from '../arrayHash_twoSum.mjs'

describe("Two Sum", () => {
  it("Should implement two sum", () => {
   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
  });
 });