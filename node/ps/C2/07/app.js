// 7. Stworzenie aplikacji która pozwoli na zapisanie całego obiektu do pliku. Z wykorzystaniem funkcji pozwalającej na przekonwertowanie obiektu na postać tekstową (JSON.stringify).

const fs = require('fs');

const user = {
	name: 'Jan',
	lastName: 'Nowak',
};

const userString = JSON.stringify(user);

console.log(user);
console.log(userString);

fs.writeFileSync('user.json', userString);
