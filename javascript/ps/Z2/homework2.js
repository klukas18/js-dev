/*1. Array exercises:
example array: [1,6,23,8,4,8,3,7]
    Create a function that takes in an array of numbers and returns sum of all elements
    Create a function that takes in an array of numbers and returns sum of first and last element
    Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)
    Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.
    Create a function that takes in an array and returns it in random order
    Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
With  a given start value of 0. Iterate the array and add even items and subtract odd ones. [1,6,23,8,4,98,3,7,3,98,4,98] */

// 2. Create a function that returns number of days till Friday
/* 3. Create two functions:
      First that takes in a string and shift number, and returns encrypted string using Caesar Cipher
      Second that takes in encrypted string and shift number, and returns decrypted message using Caesar Cipher
      Reference: https://youtu.be/l6jqKRXSShI */
// 4. Create a function that takes in a n (number) as a parameter and returns first n Fibonacci numbers - use recursion
/* 5. Create a function that:
      Checks if a given number is a prime number
      Takes in n (numbers) as a parameter and returns first n prime numbers */
// Implement binary search
// Implement selection sort
// Implement merge sort

// 1. ~~~~~~~~~ Create a function that takes in an array of numbers and returns sum of all elements

let array1 = [1, 6, 23, 8, 4, 8, 3, 7];
let arrSum = 0;

function calcSum(array) {
	for (const n of array) {
		arrSum += n;
	}
	return arrSum;
}

console.log(calcSum(array1));

// ~~~~~~~~~~~~ Create a function that takes in an array of numbers and returns sum of first and last element

let array2 = [4, 11, 4, 80, 32, 10, 7, 5];

function calcFirstAndLast(array) {
	let firstAndLastSum = array[0] + array[array.length - 1];
	return firstAndLastSum;
}

console.log(calcFirstAndLast(array2));

// ~~~~~~~~~~~~  Create a function that takes in an array and returns its copy in reverse order (DON’T use .reverse() method!)

let array3 = [9, -4, 15, 20, 0, 69, 1, 420];

function arrayReversal(array) {
	// let easyReverse = array.reverse();
	// return easyReverse;
	let mapReverse = array.map(
		(element, index) => array[array.length - 1 - index]
	);
	return mapReverse;
}

console.log(arrayReversal(array3));

// ~~~~~~~~~~~~ Create a function that takes two parameters - array of numbers, and number of attempts. Choose random numbers from the array based on the number of attempts and return the lowest among them.

let array4 = [1, 2, 4, 8, 16, 32, 64, 128]

function numberPicker(array, attempts) {
    
}