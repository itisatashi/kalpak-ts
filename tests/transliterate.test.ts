import { latinToCyrillic, cyrillicToLatin } from "../src/transliterate";

describe("Transliteration Logic Tests", () => {
  
  it("Should correctly convert from Latin to Cyrillic", () => {
    // Expected results:
    expect(latinToCyrillic("Sálem")).toBe("Сәлем");
    expect(latinToCyrillic("Shımbay")).toBe("Шымбай");
    expect(latinToCyrillic("Qaraqalpaqstan")).toBe("Қарақалпақстан");
  });

  it("Should correctly convert from Cyrillic to Latin", () => {
    expect(cyrillicToLatin("Сәлем")).toBe("Sálem");
    expect(cyrillicToLatin("Шымбай")).toBe("Shımbay");
    expect(cyrillicToLatin("Қарақалпақстан")).toBe("Qaraqalpaqstan");
  });

});
