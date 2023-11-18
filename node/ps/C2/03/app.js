// 3. Zmiana 2 zadania tak, by funkcje pochodziły nie z naszego modułu utils lecz z repozytorium npm (nazwa modułu lodash).

const lodash = require('lodash');

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

const result1 = lodash.uniq(someArray)
console.log(result1);



const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

const result2 = lodash.difference(tabA, tabB)

console.log(result2);


// ~~~~~~~~~~
// 4. Znalezienie minimalnej oraz maksymalnej wartości w tablicy przy użyciu biblioteki lodash

const tab4 = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8]

const result4 = `Max: ${lodash.max(tab4)} and Min: ${lodash.min(tab4)}`

console.log(result4);