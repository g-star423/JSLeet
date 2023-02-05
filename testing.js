// let userInput = ['a', 'b', 'c']

// let length = userInput.length

// function outputEight() {
//     let neededDivs = 8 - length
//     for (let i = 0; i < neededDivs; i++) {
//         userInput.push('DIV')
//     }
// }
// outputEight()
// console.log(userInput)

// function staircase(n) {
//     // Write your code here
//     for (let i = 0; i < n; i++) {
//         let result = '';
//         for (let x = 0; x < (n - i - 1); x++) {
//             result += ' '
//         }
//         for (let z = 0; z <= i; z++) {
//             result += '#';
//         }
//         console.log(result)
//     }
// }
// staircase(6)

// function miniMaxSum(arr) {
//     // Write your code here
//     let min = null;
//     let max = null;
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0
//         for (let z = 0; z < arr.length; z++) {
//             if (z !== i) {
//                 sum += arr[z]
//             }
//         }
//         if (sum > max || max === null) {
//             max = sum
//         }
//         if (sum < min || min === null) {
//             min = sum
//         }
//     }
//     console.log(min + ' ' + max)
// }

// let test1 = '07:05:45PM'
// let test2 = '07:05:45AM'
// let test3 = '12:05:45AM'
// let test4 = '12:05:45PM'
// let test5 = '10:05:45PM'

// function timeConversion(s) {
//     // Write your code here
//     let hours = parseInt(s[0] + s[1])
//     if (s[8] === 'A') {
//         if (hours === 12) {
//             return ("0" + (hours - 12) + s.substr(2, 6));
//         } else {
//             return s.substr(0, 8)
//         }
//     } else {
//         if (hours !== 12) {
//             return ((hours + 12) + s.substr(2, 6))
//         } else {
//             return s.substr(0, 8)
//         }
//     }
// }

// console.log(timeConversion(test1))
// console.log(timeConversion(test2))
// console.log(timeConversion(test3))
// console.log(timeConversion(test4))
// console.log(timeConversion(test5))

// function fizzBuzz(n) {
//     // Write your code here
//     for (let i = 1; i <= n; i++) {

//         if (n % 3 === 0 && n % 5 === 0) {
//             console.log('FizzBuzz')
//         } else if (n % 3 === 0) {
//             console.log('Fizz')
//         } else if (n % 3 === 0) {
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

// let test = [[11, 2, 4],
// [4, 5, 6],
// [10, 8, -12]]

// function diagonalDifference(arr) {
//     // Write your code here
//     let length = arr.length
//     let sum1 = 0
//     let sum2 = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum1 += arr[i][i]
//         sum2 += arr[i][length - 1 - i]
//     }
//     return (Math.abs(sum1 - sum2))
// }

// console.log(diagonalDifference(test))

// let test = [63, 25, 73, 1, 98, 98, 98, 98, 97, 97, 101, 101, 0, 0]
// let test2 = [63, 54, 17, 78, 43, 70, 32, 97, 16, 94, 74, 18, 60, 61, 35, 83, 13, 56, 75, 52, 70, 12, 24, 37, 17, 0, 16, 64, 34, 81, 82, 24, 69, 2, 30, 61, 83, 37, 97, 16, 70, 53, 0, 61, 12, 17, 97, 67, 33, 30, 49, 70, 11, 40, 67, 94, 84, 60, 35, 58, 19, 81, 16, 14, 68, 46, 42, 81, 75, 87, 13, 84, 33, 34, 14, 96, 7, 59, 17, 98, 79, 47, 71, 75, 8, 27, 73, 66, 64, 12, 29, 35, 80, 78, 80, 6, 5, 24, 49, 82]


// function countingSort(arr) {
//     // Write your code here
//     let result = []
//     for (let i = 0; i < 100; i++) {
//         result.push(0)
//     }
//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i]]++;
//     }

//     return result;
// }

// console.log(countingSort(test2))

// test1 = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 4, 5, 6],
//     [4, 2, 3, 4, 5, 6],
//     [5, 2, 3, 4, 5, 6],
//     [6, 2, 3, 4, 5, 6]
// ]


// function flippingMatrix(matrix) {
//     // Write your code here
//     let sum = 0;
//     let quadrantSize = matrix.length / 2
//     let mutableMatrix = matrix

//     function flipColumn(column) {
//         columnArray = []
//         for (let i = matrix.length; i >= 0; i--) {
//             columnArray.push(matrix[i][column])
//         }

//     }

//     matrix[0] = matrix[0].reverse()
//     // we need to find the sum of the upper left quadrant (by finding the size of the quadrant first)
//     // we need to then figure out how to reverse rows - use JS method reverse()
//     // figure out how to reverse columns
//     return sum

// }

// console.log(flippingMatrix(test1))

let test1 = [1, 2, 3, 4, 5, 10, 11, 15, 34]

function processData(input) {
    //Enter your code here
    let ascendingArr = input.sort(function (a, b) { return a - b }) // first make array ascending
    let result = []
    for (let i = 0; i < input.length; i += 2) {
        result.push(ascendingArr[i])
    }
    for (let i = input.length - 2; i >= 1; i -= 2) {
        result.push(ascendingArr[i])
    }
    console.log(result)
}

processData(test1)