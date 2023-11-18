// Przykładowy sposób uruchomienia:
// > node app.js --a=5 --b=7 --operator=*

const yargs = require('yargs');

console.log('Wartości parametrów:');
console.log(`a: ${yargs.argv.a}`);
console.log(`b: ${yargs.argv.b}`);
console.log(`operator: ${yargs.argv.operator}`);
console.log();