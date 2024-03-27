/* 
USE CLASSES IN ALL CASES

TRY TO BE OPTIMAL

1. Write a program that automatically converts English text to Morse code and vice versa.
2. Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.
3. Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
4. Write a code that multiplies two matrices together. Dimension validation is required. 

*/

// 1. Write a program that automatically converts English text to Morse code and vice versa.

// class MorseCodeTranslator {
// 	constructor() {
// 		this.charToMorse = new Map([
// 			['a', '.-'],
// 			['ą', '.-.-'],
// 			['b', '-...'],
// 			['c', '-.-.'],
// 			['ć', '-.-..'],
// 			['d', '-..'],
// 			['e', '.'],
// 			['ę', '..-..'],
// 			['f', '..-.'],
// 			['g', '--.'],
// 			['h', '....'],
// 			['i', '..'],
// 			['j', '.---'],
// 			['k', '-.-'],
// 			['l', '.-..'],
// 			['ł', '.-..-'],
// 			['m', '--'],
// 			['n', '-.'],
// 			['ń', '--.--'],
// 			['o', '---'],
// 			['ó', '---.'],
// 			['p', '.--.'],
// 			['q', '--.-'],
// 			['r', '.-.'],
// 			['s', '...'],
// 			['ś', '...-...'],
// 			['t', '-'],
// 			['u', '..-'],
// 			['v', '...-'],
// 			['w', '.--'],
// 			['x', '-..-'],
// 			['y', '-.--'],
// 			['z', '--..'],
// 			['ź', '--..-'],
// 			['ż', '--..-.'],
// 			['1', '.----'],
// 			['2', '..---'],
// 			['3', '...--'],
// 			['4', '....-'],
// 			['5', '.....'],
// 			['6', '-....'],
// 			['7', '--...'],
// 			['8', '---..'],
// 			['9', '----.'],
// 			['0', '-----'],
// 			[',', '--..--'],
// 			['.', '.-.-.-'],
// 			['!', '-.-.--'],
// 			['?', '..--..'],
// 			[' ', '/'],
// 		]);

// 		this.morseToChar = new Map(
// 			Array.from(this.charToMorse.entries()).map((e) => e.reverse())
// 		);
// 	}

// 	toMorse(text) {
// 		return text
// 			.split('')
// 			.map((c) => this.charToMorse.get(c.toLowerCase()) || '')
// 			.join(' ');
// 	}

// 	fromMorse(morse) {
// 		return morse
// 			.split(' ')
// 			.map((m) => this.morseToChar.get(m) || '')
// 			.join('');
// 	}
// }

// let translator = new MorseCodeTranslator();

// let text = 'Hello, World!';
// let toMorse = translator.toMorse(text);

// let morse =
// 	'-.- --- -.-. .... .- -- / .--- .- ...- .- ... -.-. .-. .. .--. - -.-.--';
// let toText = translator.fromMorse(morse);

// console.log(toMorse);
// console.log(toText);

// 2. Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’,’sedes’.

// class PalindromeFinder {
// 	isPalindrome(string) {
// 		let start = 0;
// 		let end = string.length - 1;
// 		while (start < end) {
// 			if (string[start] !== string[end]) {
// 				return false;
// 			}
// 			start++;
// 			end--;
// 		}
// 		return true;
// 	}

// 	findLongestPalindrome(string) {
// 		let longest = '';
// 		for (let i = 0; i < string.length; i++) {
// 			for (let j = i + 1; j <= string.length; j++) {
// 				let substring = string.substring(i, j);
// 				if (this.isPalindrome(substring) && substring.length > longest.length) {
// 					longest = substring;
// 				}
// 			}
// 		}
// 		return longest;
// 	}
// }

// let finder = new PalindromeFinder();
// let longest = finder.findLongestPalindrome('karakis');

// console.log(longest);

/* This JavaScript code defines a class PalindromeFinder with two methods: isPalindrome and findLongestPalindrome.

isPalindrome(string): This method checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

The method works by initializing two pointers, start and end, at the beginning and end of the string respectively. It then enters a loop where it compares the characters at the start and end positions. If they are not the same, it returns false (the string is not a palindrome). If they are the same, it increments start and decrements end, moving the pointers towards the center of the string. The loop continues until start is no longer less than end, at which point it returns true (the string is a palindrome).

findLongestPalindrome(string): This method finds the longest palindromic substring in a given string.

The method works by initializing an empty string longest to keep track of the longest palindromic substring it finds. It then enters a nested loop where it generates all possible substrings of the input string (by varying the start and end indices), checks if each substring is a palindrome using the isPalindrome method, and if it is, checks if it's longer than the current longest palindrome. If it is, it updates longest to be this new palindrome. The method returns the longest palindrome it found.

The code then creates an instance of PalindromeFinder and uses it to find the longest palindromic substring in the string 'karakis'.

The implementation is done this way because it's a straightforward and intuitive approach to the problem. It checks all possible substrings, which ensures that it finds the longest palindrome. However, it's worth noting that this approach has a time complexity of O(n^3), where n is the length of the string, due to the nested loop and the palindrome check. For very long strings, a more efficient algorithm might be necessary.  */

// 3. Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’

// function longestCommonSubsequence(text1, text2) {
// 	const n = text1.length;
// 	const m = text2.length;

// 	// Create a matrix to store lengths of LCS and initialize it with 0
// 	let lengths = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

// 	// Compute lengths of LCS and store them in the matrix
// 	for (let i = 1; i <= n; i++) {
// 		for (let j = 1; j <= m; j++) {
// 			if (text1[i - 1] === text2[j - 1]) {
// 				lengths[i][j] = lengths[i - 1][j - 1] + 1;
// 			} else {
// 				lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
// 			}
// 		}
// 	}

// 	// Now, let's retrieve the LCS from the matrix
// 	let i = n,
// 		j = m;
// 	let lcs = '';

// 	while (i > 0 && j > 0) {
// 		if (text1[i - 1] === text2[j - 1]) {
// 			lcs = text1[i - 1] + lcs;
// 			i--;
// 			j--;
// 		} else if (lengths[i - 1][j] > lengths[i][j - 1]) {
// 			i--;
// 		} else {
// 			j--;
// 		}
// 	}

// 	return lcs;
// }

// // Main function
// function main() {
// 	const S1 = 'AGGTAB';
// 	const S2 = 'GXTXAYB';

// 	// Function call
// 	console.log('LCS is ' + longestCommonSubsequence(S1, S2));
// }

// // Call the main function
// main();

/*
This JavaScript code is a part of the function longestCommonSubsequence that finds the longest common subsequence (LCS) between two strings text1 and text2.

The first part of the code is a nested loop that fills a 2D array lengths with the lengths of the longest common subsequences for all possible pairs of prefixes of text1 and text2. The outer loop iterates over the characters of text1 and the inner loop iterates over the characters of text2.

If the current characters of text1 and text2 are the same (i.e., text1[i - 1] === text2[j - 1]), the length of the LCS up to these characters is one more than the length of the LCS up to the previous characters (i.e., lengths[i - 1][j - 1] + 1).

If the current characters of text1 and text2 are different, the length of the LCS up to these characters is the maximum of the lengths of the LCS up to the previous character of text1 and the same character of text2 (i.e., lengths[i - 1][j]), and the length of the LCS up to the same character of text1 and the previous character of text2 (i.e., lengths[i][j - 1]).

The second part of the code retrieves the LCS from the lengths array. It starts from the bottom-right corner of the array (i.e., lengths[n][m]) and moves towards the top-left corner.

If the current characters of text1 and text2 are the same (i.e., text1[i - 1] === text2[j - 1]), this character is a part of the LCS, so it's prepended to lcs and the code moves diagonally up-left in the lengths array (i.e., i-- and j--).

If the current characters of text1 and text2 are different, the code moves up or left in the lengths array, depending on which direction has a greater value in the lengths array (i.e., lengths[i - 1][j] > lengths[i][j - 1] ? i-- : j--).

The function then returns the lcs string, which is the longest common subsequence of text1 and text2.

The main function is a driver function that defines two strings S1 and S2 and prints the LCS of these strings. The LCS is computed by calling the longestCommonSubsequence function with S1 and S2 as arguments.
*/

// 4. Write a code that multiplies two matrices together. Dimension validation is required.

class Matrix {
	constructor(matrix) {
		this.matrix = matrix;
	}

	multiplyWith(otherMatrix) {
		// Validate dimensions
		let matrix1NumCols = this.matrix[0].length;
		let matrix2NumRows = otherMatrix.matrix.length;

		if (matrix1NumCols !== matrix2NumRows) {
			throw new Error(
				'Invalid dimensions. Number of columns in first matrix must be equal to number of rows in second matrix.'
			);
		}

		let result = new Array(this.matrix.length)
			.fill(0)
			.map(() => new Array(otherMatrix.matrix[0].length).fill(0));

		for (let i = 0; i < this.matrix.length; i++) {
			for (let j = 0; j < otherMatrix.matrix[0].length; j++) {
				for (let k = 0; k < matrix1NumCols; k++) {
					result[i][j] += this.matrix[i][k] * otherMatrix.matrix[k][j];
				}
			}
		}

		return new Matrix(result);
	}
}

let matrix1 = new Matrix([
	[1, 2],
	[3, 4],
]);
let matrix2 = new Matrix([
	[5, 6],
	[7, 8],
]);
let result = matrix1.multiplyWith(matrix2);
console.log(result.matrix); // Outputs: [[19, 22], [43, 50]]

/*
This JavaScript code defines a class Matrix and uses it to perform matrix multiplication.

class Matrix {: This line starts the definition of a class named Matrix. In JavaScript, a class is a type of function, but instead of using the keyword function, you use the keyword class, and the properties are assigned inside a constructor() method.

constructor(matrix) {: The constructor method is a special method for creating and initializing an object created with a class. Here, it takes one parameter matrix.

this.matrix = matrix;: This line assigns the matrix parameter to the matrix property of the class. The this keyword refers to the instance of the class.

multiplyWith(otherMatrix) {: This line starts the definition of a method named multiplyWith. This method is intended to multiply the matrix represented by the current instance of the class with another matrix, represented by otherMatrix.

The next few lines (up to line 14) are used to validate the dimensions of the two matrices. Matrix multiplication is only possible when the number of columns in the first matrix is equal to the number of rows in the second matrix. If this condition is not met, an error is thrown.

let result = new Array(this.matrix.length).fill(0).map(() => new Array(otherMatrix.matrix[0].length).fill(0));: This line creates a new 2D array with the same number of rows as the first matrix and the same number of columns as the second matrix. This 2D array will hold the result of the matrix multiplication.

The next few lines (up to line 22) perform the matrix multiplication. For each cell in the result matrix, it computes the dot product of the corresponding row from the first matrix and the corresponding column from the second matrix, and stores the result in the cell.

return new Matrix(result);: This line wraps the result matrix in a Matrix object and returns it. This allows the result to be used in further matrix operations.

}: This line ends the definition of the multiplyWith method.

}: This line ends the definition of the Matrix class.

The next few lines (up to line 28) create two Matrix objects, multiply them using the multiplyWith method, and log the result to the console. The matrices are [[1, 2], [3, 4]] and [[5, 6], [7, 8]], and their product is [[19, 22], [43, 50]].
*/
