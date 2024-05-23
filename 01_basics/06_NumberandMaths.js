const score = 1000
console.log(score);

const score2 = new Number(1000)
console.log(score2);

console.log(score2.toString().length);
console.log(score2.toFixed(2));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

/********************   MATHS   **********************/
/*console.log(Math);
console.log(Math.abs(-10));  //converts only -ve numbers to +ve
console.log(Math.round(4.8));
console.log(Math.min(4,6,8,11,16));
console.log(Math.max(3,5,7,9,11,53));

console.log(Math.random());   //gives values between 0-1
console.log((Math.random()*10) + 1);*/ //min value becomes 1

const min = 50
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min);