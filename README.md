# Kalpak-TS

A simple, fast, and easy-to-use library for the Karakalpak language. It handles text and numbers automatically. Written in pure TypeScript for 100% safety.

## Installation

```bash
npm install kalpak-ts
```

## How to use

### 1. Change Text (Latin and Cyrillic)
You can change words from Latin to Cyrillic and back.

```typescript
import { latinToCyrillic, cyrillicToLatin } from "kalpak-ts";

console.log(latinToCyrillic("Sálem")); 
// Output: "Сәлем"

console.log(cyrillicToLatin("Қарақалпақстан")); 
// Output: "Qaraqalpaqstan"
```

### 2. Number to Text
Turn your numbers into Karakalpak words. It works perfectly with minus (`-`) and decimal point (`.`) numbers. Maximum size is 1 trillion.

```typescript
import { numberToText } from "kalpak-ts";

console.log(numberToText(2026)); 
// Output: "eki miń jigirma altı"

console.log(numberToText(-123)); 
// Output: "minus bir júz jigirma úsh"

console.log(numberToText(3.14)); 
// Output: "úsh pútin on tórt"
```

### 3. Text to Number
Turn written Karakalpak words back into real numbers.

```typescript
import { textToNumber } from "kalpak-ts";

console.log(textToNumber("eki miń jigirma altı")); 
// Output: 2026

console.log(textToNumber("úsh pútin on tórt")); 
// Output: 3.14
```

## License
MIT License
