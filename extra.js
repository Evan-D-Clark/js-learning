// second constructor exercise
// function UnfinishedPost(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

// array from range
// function ArrayFromRange(start, end) {
//     const ret = [];
//     for(let ii = start; ii <= end; ++ii)
//         ret.push(ii);
//     return ret;
// }

// console.log(ArrayFromRange(4, 10));

// includes
// function Includes(numberArray, value) {
//     for(element of numberArray) {
//         if(element === value)
//             return true;
//     }
//     return false;
// }

// const numbers = [1,2,3,4];
// console.log(Includes(numbers, 1.5));

// except
// function except(array, excluded) {
//     const ret = [];
//     for(element of array) {
//         if(!excluded.includes(element))
//             ret.push(element);
//     }
//     return ret;
// }

// const numbers = [1,2,3,4,1,1];
// console.log(except(numbers, [3,4,2]));

// move
// function move(array, index, offset) {
//     const ret = [...array];
//     if(index < 0 || index > array.length - 1)
//         console.error('Invalid index.');
//     else if(index + offset > array.length || index + offset < 0)
//         console.error('Invalid offset');
//     else {
//         const value = ret[index];
//         ret.splice(index, 1);
//         ret.splice(index + offset, 0, value);
//     }
//     return ret;
// }

// const numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(move(numbers, 4, -2));

// count occurences
// function countOccurences(array, searchElement) {
//     // let ret = 0;
//     // array.forEach(element => 
//     //     { if(element === searchElement) ++ret });
//     // return ret;
//     return array.reduce((accumulator, current) => {
//         const occurance = (current === searchElement) ? 1 : 0;
//         return accumulator + occurance;
//     }, 0);
// }

// const numbers = [2, 3, 4, 5, 1, 1, 1];
// console.log(countOccurences(numbers, 1));

// get max
// function GetMax(array) {
//     if(array.length === 0)
//         return undefined;
//     return array.reduce((accumulator, occurance) => 
//         (accumulator > occurance) ? accumulator : occurance);
// }
// const numbers = [2, 3, 4, 5, 1, 6, 1];
// console.log(GetMax(numbers));

// movies
// function OrderByRating(movies) {
//     console.log(movies.filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title));
// }

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 }
// ];

// OrderByRating(movies);

// sum of arguments
// function sum(...args) {
//     if(args.length === 1 && Array.isArray(args[0]))
//         args = args[0];
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum([1,2,3,4]));

// area of circle
// const circle = {
//     radius: 2,
//     get area() {
//         return this.radius**2 * Math.PI;
//     }
// }
// console.log(circle.area);

