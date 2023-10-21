// Rozszerzenie zadania 2 tak by plik user.js zwracał imię oraz nazwisko jako oddzielne zmienne. W app.js wyświetlmy przywitanie osoby.

const name = require("./user")

console.log(`Hello ${name.userNameExported} ${name.userSurnameExported}!`)