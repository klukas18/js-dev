// Przykładowy sposób uruchomienia:
// > node app.js --a=5 --b=7 --operator=*

const yargs = require('yargs');
const { add, subtract, multiply, divide } = require('./math.js');

const allowedOperators = ['+', '-', '*', ':'];

// console.log('Wartości parametrów:');
// console.log(`a: ${yargs.argv.a}`);
// console.log(`b: ${yargs.argv.b}`);
// console.log(`operator: ${yargs.argv.operator}`);

if (
	typeof yargs.argv.a !== 'number' ||
	typeof yargs.argv.b !== 'number' ||
	!allowedOperators.includes(yargs.argv.operator)
) {
	console.log(
		'Wrong entries! For math calculations you can use only numbers and following operators: "+" for addition, "-" for subtraction, "*" for multiplication, ":" for division. Please try again.'
	);
} else if (yargs.argv.operator === '+') {
	console.log(
		`Result: ${yargs.argv.a} + ${yargs.argv.b} equals to: ${add(
			yargs.argv.a,
			yargs.argv.b
		)}`
	);
} else if (yargs.argv.operator === '-') {
	console.log(
		`Result: ${yargs.argv.a} - ${yargs.argv.b} equals to: ${subtract(
			yargs.argv.a,
			yargs.argv.b
		)}`
	);
} else if (yargs.argv.operator === '*') {
	console.log(
		`Result: ${yargs.argv.a} * ${yargs.argv.b} equals to: ${multiply(
			yargs.argv.a,
			yargs.argv.b
		)}`
	);
} else if (yargs.argv.operator === ':') {
	console.log(
		`Result: ${yargs.argv.a} : ${yargs.argv.b} equals to: ${divide(
			yargs.argv.a,
			yargs.argv.b
		)}`
	);
}
