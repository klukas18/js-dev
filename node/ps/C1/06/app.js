// Zapisanie do pliku wyniku działania z zadania 5. Wykorzystując moduł Core'owy File System (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukana funkcja ma przyrostek Sync).

const fs = require('fs')
const math = require("./math")


console.log(`1 + 3 = ${math.add(1, 3)}`);
console.log(`1 - 3 = ${math.subtract(1, 3)}`);
console.log(`1 * 3 = ${math.multiply(1, 3)}`);
console.log(`1 / 3 = ${math.divide(1, 3)}`);

console.log(`Wartość stałej Pi ${math.Pi}`)

// Jak to zapisać do pliku?
// math.add(1, 3);
// math.subtract(1, 3);
// math.multiply(1, 3);
// math.divide(1, 3);
// math.Pi;

const add_result = math.add(1, 3);
const subtract_result = math.subtract(1, 3);
const multiply_result = math.multiply(1, 3);
const divide_result = math.divide(1, 3);


fs.writeFileSync("Wynik_dodawania.txt", add_result.toString());
fs.writeFileSync("Wynik_odejmowania.txt", subtract_result.toString());
fs.writeFileSync("Wynik_mnożenia.txt", multiply_result.toString());
fs.writeFileSync("Wynik_dzielenia.txt", divide_result.toString());
fs.writeFileSync("Wynik_liczba_pi.txt", math.Pi.toString());
