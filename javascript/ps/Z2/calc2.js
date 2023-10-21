// let array = [1,2,3,12,4,51,56,34,6,1]

// function calculateAverage(array) {
//     let sum = 0;

// for (let currentNumber of array) {
//     sum = sum + currentNumber
// }

// let result = sum / array.length

// return +result.toFixed(2)

// }

// console.log(calculateAverage(array))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function whatsTheDay() {

// let daysNamesInPolish = ['Niedziela', 'Poniedzialek', 'Wtorek', 'Sroda', 'Czwartek', 'Piatek', 'Sobota']

//     let today = new Date();
//     let currentDayIndex = today.getDay();


// return daysNamesInPolish[currentDayIndex]

// }

// console.log(whatsTheDay())

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getRandomNumberFromRange(min, max) {
//     let randomNumber = Math.random();
    
//     let maxNumber = max - min + 1;
    
//     console.log(Math.floor(randomNumber * maxNumber) + min);
// }

// getRandomNumberFromRange(2, 5)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function factorial(n) {
// if (n === 0) {
//     return 1
// } else {
//     let result = factorial(n-1)
//     return result * n
// }
// }

// console.log(factorial(4))


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function getFibonacci(n) {
//     if (n === 0 || n === 1) {
//         return n;
//     }
// return getFibonacci(n - 1) + getFibonacci(n - 2)
// }
// console.log(getFibonacci(10))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [1,5,62,241,24,9]

// function linearSearch(arr, target) {
// for (let currentElement of arr) {
//     if (currentElement === target) {
//         return currentElement;
//     }
// }
// return "Not Found"
// }

// console.log(linearSearch(arr, 99))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let arr = [64, 34, 25, 12, 22, 11, 90]

// function bubbleSort(arr){
// for (let i=1; i<arr.length; i++) {
//     for (let j=0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j+1]) {
//             let tmp = arr[j+1]
//             arr[j + 1] = arr[j]
//             arr[j] = tmp
//         }
//     }
// }
// }
// console.log(arr)
// bubbleSort(arr)
// console.log(arr)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function diagonalSum(matrix) {
    let sum = 0;

    for (let i=0; i < matrix.length; i++) {

        if(i===matrix.length - 1 - i) {
            sum = sum + matrix[1][1]
        } else {
            sum = sum + matrix[i][i];
            sum = sum + matrix[i][matrix.length -1 - i];
        }
    }
    return sum
}
console.log(diagonalSum(matrix))

