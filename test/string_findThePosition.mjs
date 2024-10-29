import { assert} from 'chai'
import { position } from '../string_findThePosition.mjs'

describe("Codewars", () => {
  it("string: find the position", () => {
    assert.strictEqual(position("a"),"Position of alphabet: 1");
    assert.strictEqual(position("z"),"Position of alphabet: 26");
    assert.strictEqual(position("e"),"Position of alphabet: 5");
  });
});
