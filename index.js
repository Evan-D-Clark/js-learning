// Swapping Variables
// let a = 'red';
// let b = 'blue';

// let c = 'red';
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// Max of two numbers
// function maxOfTwoNumbers(a, b) {
//     return a > b ? a : b;
// }

// console.log(maxOfTwoNumbers(5, 10));
// console.log(maxOfTwoNumbers(10, 5));
// console.log(maxOfTwoNumbers(5, 5));

// is landscape
// function isLandscape(width, height) {
//     return width > height;
// }

// console.log(isLandscape(5, 10));
// console.log(isLandscape(10, 5));
// console.log(isLandscape(10, 10));

//fizzbuzz
// function fizzBuzz(input) {
//     let ret = input;
//     if(typeof input !== 'number')
//         ret = NaN;
//     else
//     {
//         if(input % 3 === 0 && input % 5 === 0)
//             ret = 'FizzBuzz';
//         else if(input % 3 === 0)
//             ret =  'Fizz';
//         else if(input % 5 === 0)
//             ret =  'Buzz';
//     }
//     return ret;
// }

// console.log(fizzBuzz(30));
// console.log(fizzBuzz(9));
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(82));
// console.log(fizzBuzz(true));
// console.log(fizzBuzz('foobar'));

// check speed
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     let ret = 'Ok';
//     if(speed >= speedLimit + kmPerPoint) {
//         ret = Math.floor((speed - speedLimit) / kmPerPoint);
//         if(ret >= 12)
//             ret = 'Liscense suspended';
//     }
//     return ret;
// }

// console.log(checkSpeed(70));
// console.log(checkSpeed(74));
// console.log(checkSpeed(45));
// console.log(checkSpeed(90));
// console.log(checkSpeed(180));

// show numbers
function showNumbers(limit) {
    for(let ii = 0; ii <= limit; ++ii) {
        message = (ii % 2) === 0 ? 'EVEN' : 'ODD';
        console.log(ii, message);
    }
}

showNumbers(10);