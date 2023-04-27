// Exercise 1 page 95

let a = 46;
let b = 12;
let c = 60;
let min;
let max;

if (a > b && a > c && b < c) {
    max = a;
    min = b;
}
else if (a > b && a > c && c < b) {
    max = a;
    min = c;
}
else if (b > a && b > c && a < c) {
    max = b;
    min = a;
}
else if (b > a && b > c && c < a) {
    max = b;
    min = c;
}
else if (c > a && c > b && a < b) {
    max = c;
    min = a;
}
else {
    max = c;
    min = b;
}

console.log(max);
console.log(min);