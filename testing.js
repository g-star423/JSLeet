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

function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {

        if (n % 3 === 0 && n % 5 === 0) {
            console.log('FizzBuzz')
        } else if (n % 3 === 0) {
            console.log('Fizz')
        } else if (n % 3 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}