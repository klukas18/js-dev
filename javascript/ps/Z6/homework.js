/*  1. Write a function that rotates a list by k elements. For example, [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list.
    2. Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1 Fibonacci number can be computed by adding the n and the n-1 Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
    3. Write a code that takes in a string and returns a list of its digits. So for 2342 it should return [2,3,4,2], and for ’A243b’ it should return [2,4,3].
    4. Write a function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word, and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
    5. Given an array of objects, for each object call operation() function in the context of the next object. If the object is last, go back to the beginning of the array:

[
    {
        x: 1,
        y: 'object one value',
        operation: () => 'object one prafix' + this.x + this.y
    },
    {
        x: 2,
        y: 'object two value',
        operation: () => 'object two prefix' + this.x + this.y
    },
    {
        x: 3,
        y: 'object three value',
        operation: () => 'object three prefix' + this.x + this.y
    },
]
*/

/////////////////////////////////////////////////////////

const list = [1, 2, 3, 4, 5, 6];

function rotateElements(list, k) {
	k = k % list.length;

	let removedElements = list.splice(0, k);

	list.push(...removedElements);

	return list;
}

console.log(rotateElements(list, 2));

/////////////////////////////////////////////////////////

class Fibonacci {
	constructor(n) {
		this.n = n;
	}

	generateFibonacci() {
		let fibNumbers = [1, 1];
		for (let i = 2; i < this.n; i++) {
			fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
		}
		return fibNumbers;
	}
}

let fib = new Fibonacci(10);
console.log(fib.generateFibonacci()); // Outputs: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

/////////////////////////////////////////////////////////

function extractDigits(str) {
	return str
		.split('')
		.filter((char) => !isNaN(char))
		.map(Number);
}

console.log(extractDigits('2342')); // Outputs: [2, 3, 4, 2]
console.log(extractDigits('A243b')); // Outputs: [2, 4, 3]

/////////////////////////////////////////////////////////

function englishToPigLatin(text) {
    return text.split(' ')
        .map(word => word.slice(1) + word[0] + 'ay')
        .join(' ');
}

function pigLatinToEnglish(text) {
    return text.split(' ')
        .map(word => word.slice(-3, -2) + word.slice(0, -3))
        .join(' ');
}

console.log(englishToPigLatin('The quick brown fox'));  // Outputs: "hetay uickqay rownbay oxfay"
console.log(pigLatinToEnglish('hetay uickqay rownbay oxfay'));  // Outputs: "The quick brown fox"