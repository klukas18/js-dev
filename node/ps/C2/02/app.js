// 2. Rozszerzenie poprzedniego zadania o nową funkcję która: przyjmuje jako argument dwie tablice i zwraca elementy które są tylko w pierwszej tablicy.


const utils = require('./utils.js')

const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

console.log(utils.diff(tabA, tabB));
console.log(utils.diff(tabB, tabA));