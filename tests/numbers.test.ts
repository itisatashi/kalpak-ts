import { numberToText } from "../src/numbers-to-text/numbersToText";

describe("Converting Numbers to Words", () => {

  it("Numbers from 0 to 9", () => {
    expect(numberToText(0)).toBe("nól");
    expect(numberToText(7)).toBe("jeti");
  });

  it("Numbers composed of hundreds", () => {
    expect(numberToText(100)).toBe("júz");
    expect(numberToText(102)).toBe("bir júz eki");
  });

  it("Thousands and Large numbers", () => {
    expect(numberToText(2026)).toBe("eki miń jigirma altı");
    expect(numberToText(1000000)).toBe("bir million");
  });

  it("Negative and Decimal numbers", () => {
    expect(numberToText(-123)).toBe("minus bir júz jigirma úsh");
    expect(numberToText(3.14)).toBe("úsh pútin on tórt");
  });

  it("Cases that should throw an error", () => {
    // toThrow() is Jest's tool to catch and verify errors
    expect(() => numberToText(2000000000000)).toThrow('Number out of range');
  });

});
