import { textToNumber } from "../src/textToNumber";

describe("Matnlarni Raqamlarga o'girish", () => {
    
  it("To'g'ri kichkin raqamlar yasashi kerak", () => {
    expect(textToNumber("nól")).toBe(0);
    expect(textToNumber("bir júz eki")).toBe(102);
  });

  it("Katta sonlarni to'g'ri tahlil qilishi kerak", () => {
    expect(textToNumber("eki miń jigirma altı")).toBe(2026);
    expect(textToNumber("on miń")).toBe(10000);
    expect(textToNumber("bir million on miń")).toBe(1010000);
    expect(textToNumber("miń")).toBe(1000); // 1 ko'paytuvchisiz yozilganda
  });

  it("Manfiy va Kasr yozuvlarga javob qaytarishi kerak", () => {
    expect(textToNumber("minus bir júz eki")).toBe(-102);
    expect(textToNumber("úsh pútin on tórt")).toBe(3.14);
  });

});
