// Aplikacja wyświetlająca informację o zalogowanym użytkowniku systemu, przy użyciu modułu OS (https://nodejs.org/dist/latest-v18.x/docs/api/os.html , szukana funkcja ma przyrostek Sync). Dodatkowo: zapis nazwy użytkownika do pliku na dysku.

const os = require('os');
const fs = require('fs');

const name = os.userInfo().username;

fs.writeFileSync('name.txt', name);
