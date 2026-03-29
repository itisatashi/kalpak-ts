// Character mapping (Dictionaries)
const latinToCyrillicMap: Record<string, string> = {
  A: "А",
  a: "а",
  B: "Б",
  b: "б",
  D: "Д",
  d: "д",
  E: "Е",
  e: "е",
  F: "Ф",
  f: "ф",
  G: "Г",
  g: "г",
  H: "Ҳ",
  h: "ҳ",
  X: "Х",
  x: "х",
  J: "Ж",
  j: "ж",
  K: "К",
  k: "к",
  Q: "Қ",
  q: "қ",
  L: "Л",
  l: "л",
  M: "М",
  m: "м",
  N: "Н",
  n: "н",
  O: "О",
  o: "о",
  P: "П",
  p: "п",
  R: "Р",
  r: "р",
  S: "С",
  s: "с",
  T: "Т",
  t: "т",
  U: "У",
  u: "у",
  V: "В",
  v: "в",
  Z: "З",
  z: "з",
  Á: "Ә",
  á: "ә",
  Ó: "Ө",
  ó: "ө",
  Ú: "Ү",
  ú: "ү",
  I: "И",
  i: "и",
  Í: "Ы",
  ı: "ы",
  Ǵ: "Ғ",
  ǵ: "ғ",
  Ń: "Ң",
  ń: "ң",
  Y: "Й",
  y: "й",
  W: "Ў",
  w: "ў",
  Sh: "Ш",
  sh: "ш",
  SH: "Ш",
  Yu: "Ю",
  yu: "ю",
  Ya: "Я",
  ya: "я",
  Yo: "Ё",
  yo: "ё",
  Ch: "Ч",
  ch: "ch",
  CH: "Ч",
  C: "Ц",
  c: "ц",
};

const cyrillicToLatinMap: Record<string, string> = {
  А: "A",
  а: "a",
  Ә: "Á",
  ә: "á",
  Б: "B",
  б: "b",
  В: "V",
  в: "v",
  Г: "G",
  г: "g",
  Ғ: "Ǵ",
  ғ: "ǵ",
  Д: "D",
  д: "d",
  Е: "E",
  е: "e",
  Ё: "Yo",
  ё: "yo",
  Ж: "J",
  ж: "j",
  З: "Z",
  з: "z",
  И: "I",
  и: "i",
  Й: "Y",
  й: "y",
  К: "K",
  к: "k",
  Қ: "Q",
  қ: "q",
  Л: "L",
  л: "l",
  М: "M",
  м: "m",
  Н: "N",
  н: "n",
  Ң: "Ń",
  ң: "ń",
  О: "O",
  о: "o",
  Ө: "Ó",
  ө: "ó",
  П: "P",
  п: "p",
  Р: "R",
  р: "r",
  С: "S",
  с: "s",
  Т: "T",
  т: "t",
  У: "U",
  у: "u",
  Ү: "Ú",
  ү: "ú",
  Ў: "W",
  ў: "w",
  Ф: "F",
  ф: "f",
  Х: "X",
  х: "x",
  Ҳ: "H",
  ҳ: "h",
  Ш: "Sh",
  ш: "sh",
  Ч: "Ch",
  ч: "ch",
  Щ: "Sh",
  щ: "sh",
  Ы: "Í",
  ы: "ı",
  Ц: "C",
  ц: "c",
  Э: "E",
  э: "e",
  Ю: "Yu",
  ю: "yu",
  Я: "Ya",
  я: "ya",
  Ъ: "",
  ъ: "",
  Ь: "",
  ь: "",
};


// 1st function: Latin to Cyrillic
export function latinToCyrillic(text: string): string {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let twoChars = text[i] + (text[i + 1] || "");
    if (latinToCyrillicMap[twoChars] !== undefined) {
      result += latinToCyrillicMap[twoChars];
      i++;
      continue;
    }

    let oneChar = text[i];
    if (latinToCyrillicMap[oneChar] !== undefined) {
      result += latinToCyrillicMap[oneChar];
    } else {
      result += oneChar;
    }
  }

  return result;
}

// 2nd function: Cyrillic to Latin
export function cyrillicToLatin(text: string): string {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (cyrillicToLatinMap[char] !== undefined) {
      result += cyrillicToLatinMap[char];
    } else {
      result += char;
    }
  }

  return result;
}
