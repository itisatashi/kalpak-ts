// Define lookup tables (Word -> Number mapping)
const wordToDigit: Record<string, number> = {
  nól: 0, bir: 1, eki: 2, úsh: 3, tórt: 4, bes: 5, altı: 6, jeti: 7, segiz: 8, toǵız: 9,
};

const wordToTen: Record<string, number> = {
  on: 10, jigirma: 20, otız: 30, qırıq: 40, eliw: 50, alpıs: 60, jetpis: 70, seksen: 80, toqsan: 90,
};

const multipliers: Record<string, number> = {
  trillion: 1000000000000, milliard: 1000000000, million: 1000000, miń: 1000, júz: 100,
};

// This is an internal helper function so we don't export it, it only works in this file
function parseSmallGroup(tokens: string[]): number {
  let result = 0;

  for (let i = 0; i < tokens.length; i++) {
    const word = tokens[i];

    if (word === "júz") {
      if (result === 0) result = 100;
      else result *= 100;
    } else if (wordToDigit[word] !== undefined) {
      result += wordToDigit[word];
    } else if (wordToTen[word] !== undefined) {
      result += wordToTen[word];
    }
  }

  return result;
}

// Main function: Convert text to number
export function textToNumber(text: string): number {
  const trimmed = text.trim().toLowerCase();
  
  if (trimmed === "") {
    throw new Error("Input text cannot be empty");
  }

  // Handle zero
  if (trimmed === "nól") return 0;

  // Handle negative numbers (using recursion)
  if (trimmed.startsWith("minus ")) {
    const rest = trimmed.slice(6);
    return -textToNumber(rest);
  }

  // Handle decimal numbers ("... pútin ...")
  if (trimmed.includes("pútin")) {
    const [intText, decText] = trimmed.split("pútin").map((s) => s.trim());
    const intPart = textToNumber(intText);
    const decPart = textToNumber(decText);
    return parseFloat(`${intPart}.${decPart}`);
  }

  // Main logic blocks
  const tokens = trimmed.split(/\s+/);
  let total = 0;
  let currentGroup: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const word = tokens[i];

    // If the current word is a multiplier
    if (multipliers[word] !== undefined) {
      const coefficient = currentGroup.length > 0 ? parseSmallGroup(currentGroup) : 1;
      total += coefficient * multipliers[word];
      currentGroup = []; // Clear for the next group
    } else {
      currentGroup.push(word);
    }
  }

  if (currentGroup.length > 0) {
    total += parseSmallGroup(currentGroup);
  }

  return total;
}
