const stringA = 'This is an example.'
const stringB =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const letterToCheck = 'a'

function countWords(string) {
	return string.split(' ').filter(function (n) {
		return n != ''
	}).length
}
console.log(countWords(stringA))
console.log(countWords(stringB))

function countLetters(string, letter) {
	let count = 0

	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) == letter) {
			count += 1
		}
	}
	return count
}
console.log(countLetters(stringB, letterToCheck))

function findLongest(string) {
	string = string.split(' ')
	return string.sort((a, b) => b.length - a.length)[0]
}
console.log(findLongest(stringB))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AUGUMENTED MARIO PYRAMID

// let height = 8

// for (let i = 1; i <= 8; i++) {
// 	let hashesCount = i
// 	let spacesCount = height - i

// 	let hashes = ''
// 	for (let j = 0; j < hashesCount; j++) {
// 		hashes = hashes + '#'
// 	}

// 	let spaces = ''
// 	for (let k = 0; k < spacesCount; k++) {
// 		spaces = spaces + ' '
// 	}

// 	console.log(spaces + hashes + ' ' + hashes)
// }
