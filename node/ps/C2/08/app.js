// 8. Rozszerzenie aplikacji z zadania 7 o wprowadzanie danych które chcemy zapisać w parametrach uruchamiania. Do wykorzystania zewnętrzny moduł yargs.

// Przykład uruchomienia aplikacji
// node app.js --name=Adam --lastName=Mickiewicz

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
