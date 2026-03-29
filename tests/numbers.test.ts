import { numberToText } from "../src/numbers";

describe("Sonlarni Qoraqalpoqcha so'zga o'girish", () => {

  it("0 dan 9 gacha bo'lgan sonlar", () => {
    expect(numberToText(0)).toBe("nól");
    expect(numberToText(7)).toBe("jeti");
  });

  it("100 lardan tashkil topgan sonlar", () => {
    expect(numberToText(100)).toBe("júz");
    expect(numberToText(102)).toBe("bir júz eki");
  });

  it("Ming va Katta sonlar", () => {
    expect(numberToText(2026)).toBe("eki miń jigirma altı");
    expect(numberToText(1000000)).toBe("bir million");
  });

  it("Manfiy va Kasr sonlar", () => {
    expect(numberToText(-123)).toBe("minus bir júz jigirma úsh");
    expect(numberToText(3.14)).toBe("úsh pútin on tórt");
  });

  it("Xatolik (Error) otishi kerak bo'lgan holatlar", () => {
    // "toThrow()" bu Jest dagi muvaffaqiyatli "Qizil Xatoni" ushlab olish quroli
    expect(() => numberToText(2000000000000)).toThrow('Number out of range');
  });

});
