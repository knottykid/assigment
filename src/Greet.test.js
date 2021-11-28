import Greet from "./Greet";
// import {expect} from 'jest'

describe("Greet", () => {
  it("works", () => {
    const expected = "Hello, Bob";
    const result = Greet("Bob");
    expect(result).toBe(expected);
  });
});
