// Rozszerzenie aplikacji z zadania 8 tak, by nazwy plików z których pobieramy liczby były podawane w parametrach w czasie uruchamiania.

// Przykładowe uruchomienie aplikacji:
// > node app.js a.txt b.txt

const fs = require('fs')
const math = require('./math')

// const { argv } = require('node:process')

const firstFile = process.argv[2]
const secondFile = process.argv[3]

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

// argv.forEach((val, index) => {
// 	console.log(`${index}: ${val}`)
// })

// console.log(name)
// console.log(process.argv)

console.log(`Hello ${firstFile} ${secondFile}`)
