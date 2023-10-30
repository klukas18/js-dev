// Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.

// Przykładowe uruchomienie aplikacji:
// > node app.js a.txt b.txt

const fs = require('fs');
const math = require('./math');

// const { argv } = require('node:process');

const firstFile = process.argv[2];
const secondFile = process.argv[3];

const firstNumber = Number(fs.readFileSync(firstFile, 'utf8'));
const secondNumber = Number(fs.readFileSync(secondFile, 'utf8'));

const numAdd = `Dodawanie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.add(
	secondNumber,
	firstNumber
)}`;
console.log(numAdd);

const numSub = `Odejmowanie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.subtract(
	secondNumber,
	firstNumber
)}`;
console.log(numSub);

const numMul = `Mnożenie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.multiply(
	secondNumber,
	firstNumber
)}`;
console.log(numMul);

const numDiv = `Dzielenie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.divide(
	secondNumber,
	firstNumber
)}`;
console.log(numDiv);

const data = `${numAdd} 
${numSub}
${numMul}
${numDiv}`;

fs.writeFileSync('wynik.txt', data);

console.log(`Hello ${firstFile} ${secondFile}`);
