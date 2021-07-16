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
function except(array, excluded) {
    const ret = [];
    for(element of array) {
        let include = true;
        for(exclusion of excluded)
            if(element === exclusion)
                include = false;
        if(include) ret.push(element);
    }
    return ret;
}

const numbers = [1,2,3,4,1,1];
console.log(except(numbers, [3,4,2]));