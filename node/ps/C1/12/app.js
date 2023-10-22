// Aplikacja złożona jest z jednego pliku: app.js. Podczas uruchamiania możemy przekazać jej dodatkowy parametr który jest ścieżką do istniejącego na dysku folderu. Zadaniem aplikacji jest wyświetlanie w konsoli nazw wszystkich plików i folderów znajdujących się bezpośrednio we wskazanym folderze. Uruchomienie z niewłaściwą liczbą parametrów powinno skutkować wyświetleniem komunikatu w konsoli. Należy wykorzystać moduł Core'owy File system (https://nodejs.org/dist/latest-v18.x/docs/api/fs.html , potrzebna funkcja przyrostek Sync)

// Przykładowe uruchomienie aplikacji:
// > node app.js C:\\code
// Wynik działania aplikacji:
// Pliki w folderze C:\\code:
// folder1
// folder2
// plik1.txt
// plik2.txt

// Przykładowe uruchomienie aplikacji:
// > node app.js
// Wynik działania aplikacji:
// > zbyt mało parametrów!

// Przykładowe uruchomienie aplikacji:
// > node app.js C:\\code C:\\apps
// Wynik działania aplikacji:
// > zbyt dużo parametrów!

const fs = require('fs')

const { argv } = require('node:process')
const folderPath = 'E:\\js-dev\\node\\ps\\C1\\12\\folder'

const folderContents = fs.readdirSync(folderPath)

if (argv[2] === 'E:\\js-dev\\node\\ps\\C1\\12\\folder' && argv.length === 3) {
	const [file1, file2, file3] = folderContents

	console.log(`Pliki w folderze ${folderPath}:
    ${file1}
    ${file2}
    ${file3}`)
} else {
	console.log(`Zła ścieżka do pliku lub ilość parametrów!`)
}
