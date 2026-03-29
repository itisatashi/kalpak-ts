// Here we declare an array of strings:
const digits: string[] = [
  "nól", "bir", "eki", "úsh", "tórt", "bes", "altı", "jeti", "segiz", "toǵız"
];

// Here the key is a Number, and the value is Text (Word):
const tens: Record<number, string> = {
  10: "on", 20: "jigirma", 30: "otız", 40: "qırıq", 50: "eliw", 
  60: "alpıs", 70: "jetpis", 80: "seksen", 90: "toqsan"
};

const MAX = 1000000000000; // 1 trillion

export function numberToText(num: number): string {
  // We don't just return text, we throw a real error!
  if (num < -MAX || num > MAX) {
    throw new Error("Number out of range (max: ±1 trillion)");
  }

  // Handle negative numbers
  if (num < 0) {
    return "minus " + numberToText(Math.abs(num));
  }

  // Handle decimal numbers
  if (!Number.isInteger(num)) {
    const [intPart, decPart] = num.toString().split(".");
    return `${numberToText(parseInt(intPart, 10))} pútin ${numberToText(parseInt(decPart, 10))}`;
  }

  // Special exact values
  if (num === 100) return "júz";
  if (num === 1000) return "miń";
  if (num === 10000) return "on miń";
  if (num === 100000) return "júz miń";
  if (num === 1000000) return "bir million";
  if (num === 10000000) return "on million";
  if (num === 100000000) return "júz million";
  if (num === 1000000000) return "bir milliard";
  if (num === 10000000000) return "on milliard";
  if (num === 100000000000) return "júz milliard";
  if (num === 1000000000000) return "bir trillion";

  // Numbers 0 - 9
  if (num < 10) return digits[num];

  // Numbers 10 - 99
  if (num < 100) {
    const tenPart = Math.floor(num / 10) * 10;
    const onePart = num % 10;
    if (onePart === 0) return tens[tenPart];
    return `${tens[tenPart]} ${digits[onePart]}`;
  }

  // Numbers 100 - 999
  if (num < 1000) {
    const hundredsPart = Math.floor(num / 100);
    const remainder = num % 100;
    if (remainder === 0) return `${numberToText(hundredsPart)} júz`;
    return `${numberToText(hundredsPart)} júz ${numberToText(remainder)}`;
  }

  // Numbers 1,000 - 999,999
  if (num < 1000000) {
    const thousandsPart = Math.floor(num / 1000);
    const remainder = num % 1000;
    if (remainder === 0) return `${numberToText(thousandsPart)} miń`;
    return `${numberToText(thousandsPart)} miń ${numberToText(remainder)}`;
  }

  // Numbers 1,000,000 - 999,999,999
  if (num < 1000000000) {
    const millionsPart = Math.floor(num / 1000000);
    const remainder = num % 1000000;
    if (remainder === 0) return `${numberToText(millionsPart)} million`;
    return `${numberToText(millionsPart)} million ${numberToText(remainder)}`;
  }

  // Numbers 1,000,000,000 - 999,999,999,999
  if (num < 1000000000000) {
    const billionsPart = Math.floor(num / 1000000000);
    const remainder = num % 1000000000;
    if (remainder === 0) return `${numberToText(billionsPart)} milliard`;
    return `${numberToText(billionsPart)} milliard ${numberToText(remainder)}`;
  }

  return "";
}
