const {performance} = require('perf_hooks');
var t0 = performance.now();

var max = 100000000.0;
var seno,cose,tang,logn,raiz;
var i = 0.0;
while(i < max){
    seno += Math.sin(i);
    cose += Math.cos(i);
    tang += Math.tan(i);
    logn += Math.log(i);
    raiz += Math.sqrt(i);
    i++;
}
var t1 = performance.now();
console.log("Tomo " + (t1 - t0) + " milliseconds.");