const {performance} = require('perf_hooks');
const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var final = "";
var t0 = performance.now();
for (let index = 0; index < 26 * 26 * 26; index++) {
  final +=
    [...Array(3)].map(i => chars[(Math.random() * chars.length) | 0]).join`` +" ";
}

console.log((final.match(/IPN/g) || []).length);

var t1 = performance.now();
console.log("Tomo " + (t1 - t0) + " milliseconds.");