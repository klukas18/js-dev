// Rozszerzenie aplikacji z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.

// Przykładowe uruchomienie aplikacji:
// > node app.js a.txt
// Wynik działania aplikacji:
// > zbyt mało parametrów!

// Przykładowe uruchomienie aplikacji:
// > node app.js a.txt b.txt c.txt
// Wynik działania aplikacji:
// > zbyt dużo parametrów!

const fs = require('fs')
const math = require('./math')

const { argv } = require('node:process')

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
// console.log(numAdd)

const numSub = `Odejmowanie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.subtract(
	secondNumber,
	firstNumber
)}`
// console.log(numSub)

const numMul = `Mnożenie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.multiply(
	secondNumber,
	firstNumber
)}`
// console.log(numMul)

const numDiv = `Dzielenie liczb ${secondNumber} i ${firstNumber} daje w wyniku ${math.divide(
	secondNumber,
	firstNumber
)}`
// console.log(numDiv)

const data = `${numAdd} 
${numSub}
${numMul}
${numDiv}`

fs.writeFileSync('wynik.txt', data)

// console.log(argv)

if (argv.length === 4) {
	console.log(`Hello ${firstFile} ${secondFile}`)
} else if (argv.length > 4) {
	console.log(`Za dużo parametrów!`)
} else {
	console.log(`Za mało parametrów`)
}
