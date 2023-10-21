//Kalkulator wykonujący cztery podstawowe działania (dodawanie, odejmowanie, dzielenie oraz mnożenie). Aplikacja powinna składać się z 2 plików (główna aplikacja app.js oraz math.js zawierający odpowiednie funkcje).

const math = require("./math")


console.log(`1 + 3 = ${math.add(1, 3)}`);
console.log(`1 - 3 = ${math.subtract(1, 3)}`);
console.log(`1 * 3 = ${math.multiply(1, 3)}`);
console.log(`1 / 3 = ${math.divide(1, 3)}`);

console.log(`Wartość stałej Pi ${math.Pi}`)
