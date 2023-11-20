/* Program który wyświetla informacje o plikach i folderach w danej lokalizacji:
- użytkownik w parametrze podaje adres folderu (parametr wymagany) i rozmiar pliku (parametr opcjonalny)
- program wyświetla informacje o plikach w folderze: nazwa i wielkość:
	a. jeżeli użytkownik poda w parametrze rozmiar pliku, to wyświetlamy listę plików, które są większe niż podany rozmiar
	b. w przeciwnym wypadku, wyświetlamy listę plików których rozmiar jest większy niż średni rozmiar pliku w tym folderze

	Pliki powinny być posortowane malejąco od największych do najmniejszych.

Podpowiedzi:
- zadanie można wykonać przy pomocy modułów które już wykorzystywaliśmy na zajęciach
- dozwolone jest użycie innych modułów dostępnych w npm
- dla ułatwienia możemy potraktować foldery jako pliki o rozmiarze 0
- nie trzeba robić tabelki jak na przykładzie ;) */

const fs = require('fs');
const yargs = require('yargs');

const nameParam = yargs.argv.name;
const surnameParam = yargs.argv.lastName;

const user = {
	name: nameParam,
	lastName: surnameParam,
};

const userString = JSON.stringify(user);

console.log(user);
console.log(userString);

fs.writeFileSync('user.json', userString);
