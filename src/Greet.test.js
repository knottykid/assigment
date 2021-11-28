import Greet from "./Greet";
// import {expect} from 'jest'

describe("Greet", () => {
  it("works", () => {
    const expected = "Hello, Bob";
    const result = Greet("Bob");
    expect(result).toBe(expected);
  });
  it("works", () => {
    const expected = "Hello, my friend";
    const result = Greet(null);
    expect(result).toBe(expected);
  });
});
