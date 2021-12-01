import Greet from "./Greet";
// import {expect} from 'jest'

describe("Greet", () => {
  it("Hello, name", () => {
    const expected = "Hello, name";
    const result = Greet("name");
    expect(result).toBe(expected);
  });
  it("Hello, my friend", () => {
    const expected = "Hello, my friend";
    const result = Greet(null);
    expect(result).toBe(expected);
  });
  it("HELLO NAME", () => {
    const expected = "HELLO NAME";
    const result = Greet("name".toUpperCase());
    expect(result).toBe(expected);
  });
});
