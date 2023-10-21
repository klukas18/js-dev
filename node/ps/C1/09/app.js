// Obsługa parametrów wejściowych. Aplikacja złożona jest z jednego pliku: app.js. Podczas uruchamiania aplikacji możemy przekazać jej dodatkowy parametr, który zostanie wyświetlony po komunikacie hello. Gdy podanych będzie więcej parametrów, wtedy ignorujemy wszystkie prócz pierwszego. Gdy nie będzie podanych żadnych parametrów aplikacja wyświetla hello world. Należy wykorzystać globalną zmienną: process.

// Przykładowe uruchomienie aplikacji:
// > node app.js Pawel
// Wynik działania aplikacji:
// > hello Pawel

// Przykładowe uruchomienie aplikacji:
// > node app.js
// Wynik działania aplikacji:
// > hello world

// Przykładowe uruchomienie aplikacji:
// > node app.js Pawel Lukaszuk
// Wynik działania aplikacji:
// > hello Pawel


const name = process.argv[2]

console.log(`hello ${name}`)



