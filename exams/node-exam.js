/* 1. [2 punkty] Napisz jak najprostszy kod który spowoduje błąd stack overflow, czyli zwróci komunikat błędu:
Uncaught RangeError: Maximum call stack size exceeded */

// function overflow() {
// 	overflow();
// }

// overflow();

/* 2. [2 punkty] Napisz aplikację która przyjmuje w parametrze uruchamiania ciąg znaków a następnie wyświetli go w kolorach tęczy. Wykorzystaj moduł colors (https://www.npmjs.com/package/colors) w wersji 1.3.2!. Pamiętaj o obsłudze błędów.
Sposób obsługi parametrów wejściowych jest dowolny (w kodzie rozwiązania należy dodać komentarz z przykładowym wywołaniem). */

// const colors = require('colors');
// const { error } = require('console');
// const text = process.argv[2];

// if (process.argv.length !== 3 || text === '' || text === ' ') {
// 	console.log(
// 		`Wrong number of arguments! You need to pass one legitimate argument to see the rainbow!`
// 	);
// } else {
// 	console.log(text.rainbow);
// }

// Example: node node-exam.js "Hello World!"

/* 3. [2 punkty] Napisz program który wypisze szczegóły pliku z własnym kodem źródłowym.

Wypisywane informacje:
czas utworzenia
czas modyfikacji
rozmiar
Program powinien działać poprawnie także po zmianie nazwy i lokalizacji pliku - bez zmiany kodu źródłowego!

Przykłady wywołania
> node app.js //wyświetla szczegóły pliku app.js
po zmianie nazwy app.js na app2.js
> node app2.js //wyświetla szczegóły pliku app2.js
Podpowiedź: jest to możliwe przy użyciu wbudowanych modułów Node.js. */

// const fs = require('fs');

// fs.stat(__filename, (error, stats) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(
// 			`File created at: ${stats.birthtime},\nLast modified: ${stats.mtime},\nCurrent size: ${stats.size}`
// 		);
// 	}
// });

/* 4. [5 punktów] Napisz aplikację która odczyta z pliku data.json liczbę oraz nazwę pliku, a następnie:
 - pobierze z API informacje o danej liczbie (https://lukaszuk.net/numbers.php?number={number}, np https://lukaszuk.net/numbers.php?number=1)
 - informacje pobrane z API zapisze w pliku o pobranej wcześniej nazwie
Przykład pliku: data.json
{
    "number": "588",
    "filename": "file.json"
}
Pamiętaj o obsłudze błędów. Żądania do API oraz zapis do pliku wykonuj asynchronicznie.  */

const fs = require('fs');
const fs2 = require('fs').promises;
const axios = require('axios');

function readDataSync() {
	try {
		const data = fs.readFileSync('node-data.json', 'utf8');
		return data;
	} catch (error) {
		console.error('Error reading file:', error.message);
		return null;
	}
}

const fileData = readDataSync();
const { number, filename } = JSON.parse(fileData);

async function getDataAndWriteToFile() {
	try {
		const url = `https://lukaszuk.net/numbers.php?number=${number}`;
		const response = await axios.get(url);
		const data = response.data;

		await fs2.writeFile(filename, data);
		console.log('Data saved to file! Congratulations!');
	} catch (error) {
		console.log('Error writing file:', error.message);
	}
}
getDataAndWriteToFile();
