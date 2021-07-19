// stopwatch
function StopWatch() {
    let started = false;
    let duration = 0;
    this.startTime = 0;
    this.start = function() {
        if(started)
            throw new Error('Stopwatch has already started.');
        started = true;
        this.startTime = new Date().getTime();
    }
    this.stop = function() {
        if(!started)
            throw new Error('Stopwatch has not been started.');
        started = false;
        duration += 
            (new Date().getTime() - this.startTime) / 1000;
    }
    this.reset = function() {
        duration = 0;
        started = false;
        this.startTime = null;
    }
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    })
}

let sw = new StopWatch();