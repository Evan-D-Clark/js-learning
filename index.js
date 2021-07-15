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
// function showNumbers(limit) {
//     for(let ii = 0; ii <= limit; ++ii) {
//         message = (ii % 2) === 0 ? 'EVEN' : 'ODD';
//         console.log(ii, message);
//     }
// }

// showNumbers(10);

// count truthy
// function countTruthy(array) {
//     let count = 0;
//     for(element of array) {
//         if(element)
//             ++count;
//     }
//     console.log(count);
// }

// const array = [0, 1, 2, 3, '', 'name', null, true, NaN, false];
// countTruthy(array);

// string properties
// function showProperties(obj) {
//     for(property in obj) {
//         if(typeof(obj[property]) === 'string')
//             console.log(property, obj[property]);
//     }
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// }

// showProperties(movie);

// sum of threes and fives
// function sumOf3sand5s(limit) {
//     let sum = 0;
//     for(let ii = 3; ii <= limit; ii += 3)
//         sum += ii;
//     for(let ii = 5; ii <= limit; ii += 5)
//         sum += ii;
//     return sum;
// }

// console.log(sumOf3sand5s(15));

// grade
// function calculateAverage(array) {
//     let average = 0;
//     for(value of array) {
//         average += value;
//     }
//     average /= array.length;
//     return average;
// }
// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if(average < 60)
//         return 'F';
//     if(average < 70)
//         return 'D';
//     if(average < 80)
//         return 'C';
//     if(average < 90)
//         return 'B';
//     return 'A';
// }

// const marks = [80, 80, 100];

// console.log(calculateGrade(marks));

//stars
// function showStars(rows) {
//     let stars = '';
//     for(let ii = 0; ii < rows; ++ii) {
//         for(let jj = 0; jj <= ii; ++jj)
//             stars += '*';
//         console.log(stars);
//         stars = '';
//     }
// }

// showStars(4);

// function showPrimes(limit) {
//     for(let ii = 2; ii <= limit; ++ii) {
//         let isPrime = true;
//         for(let jj = 2; jj < ii && isPrime; ++jj) {
//             if(ii % jj === 0)
//                 isPrime = false;
//         }
//         if(isPrime)
//             console.log(ii);
//     }
// }

// showPrimes(37); 

// address
// let address = {
//     street: '8th',
//     city: 'JC',
//     zipCode: '57409'
// }

// function showAddress(address) {
//     for(let property in address)
//         console.log(property, address[property]);
// }
// showAddress(address);

//Constructor
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Factory
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function areEqual(address1, address2) {
    let ret = true;
    for(property in address1)
        if(address1[property] !== address2[property])
            ret = false;
    for(property in address2)
        if(address1[property] !== address2[property])
            ret = false;
    return ret;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));