// stopwatch
// function StopWatch() {
//     let started = false;
//     let duration = 0;
//     this.startTime = 0;
//     this.start = function() {
//         if(started)
//             throw new Error('Stopwatch has already started.');
//         started = true;
//         this.startTime = new Date().getTime();
//     }
//     this.stop = function() {
//         if(!started)
//             throw new Error('Stopwatch has not been started.');
//         started = false;
//         duration += 
//             (new Date().getTime() - this.startTime) / 1000;
//     }
//     this.reset = function() {
//         duration = 0;
//         started = false;
//         this.startTime = null;
//     }
//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; }
//     })
// }

// let sw = new StopWatch();

// prototypical inheritance and polymorphism
function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
<select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// polymorphism
function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src="${this.src}" />`;
    }
}
HtmlImageElement.prototype = HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;