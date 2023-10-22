// Rozszerzenie zadania 4. Aplikacja powinna wczytać jedną liczbę z pliku a.txt, drugą liczbę z pliku b.txt (zakładamy, że oba te pliki zawierają tylko jedną liczbę). Na tych liczbach należy wykonać operacja dodawania, odejmowania, mnożenia i dzielenia a wyniki wszystkich działań zapisać w pliku wynik.txt, każdy wynik w osobnej linii. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , szukane funkcje mają przyrostek Sync)

const fs = require('fs')
const math = require('./math')

const firstNumber = Number(
	fs.readFileSync('./a.txt', { encoding: 'utf8', flag: 'r' })
)
const secondNumber = Number(
	fs.readFileSync('./b.txt', { encoding: 'utf8', flag: 'r' })
)

const numAdd = `Dodawanie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.add(
	secondNumber,
	firstNumber
)}`
console.log(numAdd)

const numSub = `Odejmowanie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.subtract(
	secondNumber,
	firstNumber
)}`
console.log(numSub)

const numMul = `Mnożenie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.multiply(
	secondNumber,
	firstNumber
)}`
console.log(numMul)

const numDiv = `Dzielenie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.divide(
	secondNumber,
	firstNumber
)}`
console.log(numDiv)

const data = `${numAdd} 
${numSub}
${numMul}
${numDiv}`

fs.writeFileSync('wynik.txt', data)
