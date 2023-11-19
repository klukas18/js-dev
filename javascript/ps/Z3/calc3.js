// ~~~~~~~~~~~~~ 

const myArray1 = [1,45,2,0,44,91,101,22,46]

// function multiplyBy2(number) {
// return number * 2
// }

function multiplyOddBy2(array) {
    return array.map((number, index) => {
        
        if (index % 2 !== 0) {return number * 2}
        return number;
        })
}
console.log(multiplyOddBy2(myArray1))


// ~~~~~~~~~~~~~ 

const myArray2 = [12,23,54,123,22,90,52,80]

function sumEvensSubtractOdds(array) {
    return array.reduce((count, currentValue)=>{
        console.log('count', count);
        console.log('currentValue', currentValue);
        if (currentValue % 2 === 0) {
            count = count + currentValue
        } else {
            count = count - currentValue
        }
        return count;
    }, 0)
}

console.log(sumEvensSubtractOdds(myArray2));


// ~~~~~~~~~~~~~ 

const myArray3 = [12,23,54,123,22,90,52,80]

function filterOddNumbers(array) {
   return array.filter((currentValue)=> {
        if (currentValue !== 0) {
            return true;
        }
        return false;
    })
}

console.log(filterOddNumbers(myArray3));

// ~~~~~~~~~~~~~ 

const myArray4 = [4,1,3,2,12,3,29,4,6,34,16,28]

const result = myArray4.map((number) => number * 2).filter((number)=> number < 40).sort((a,b)=> b - a)

console.log(result);

// ~~~~~~~~~~~~~