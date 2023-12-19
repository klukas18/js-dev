/* 1. [2 punkty] Napisz jak najprostszy kod który spowoduje błąd stack overflow, czyli zwróci komunikat błędu:
Uncaught RangeError: Maximum call stack size exceeded */

// function overflow() {
// 	overflow();
// }

// overflow();

/* 2. [2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł colors (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.
Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem). */

const colors = require('colors');
const text = process.argv[2];

if (process.argv.length !== 3) {
	console.log(
		`Wrong number of arguments! You need to pass one argument to see the rainbow!`
	);
	process.exitCode = 1;
} else {
	console.log(text.rainbow);
}

// Example: node node-exam.js "Hello World!"
