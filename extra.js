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
function ArrayFromRange(start, end) {
    const ret = [];
    for(let ii = start; ii <= end; ++ii)
        ret.push(ii);
    return ret;
}

console.log(ArrayFromRange(4, 10));