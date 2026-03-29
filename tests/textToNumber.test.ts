import { textToNumber } from "../src/text-to-numbers/textToNumber";

describe("Converting Text to Numbers", () => {
    
  it("Should correctly build small numbers", () => {
    expect(textToNumber("nól")).toBe(0);
    expect(textToNumber("bir júz eki")).toBe(102);
  });

  it("Should correctly parse large numbers", () => {
    expect(textToNumber("eki miń jigirma altı")).toBe(2026);
    expect(textToNumber("on miń")).toBe(10000);
    expect(textToNumber("bir million on miń")).toBe(1010000);
    expect(textToNumber("miń")).toBe(1000); // When written without a coefficient of 1
  });

  it("Should handle negative and decimal notation", () => {
    expect(textToNumber("minus bir júz eki")).toBe(-102);
    expect(textToNumber("úsh pútin on tórt")).toBe(3.14);
  });

});
