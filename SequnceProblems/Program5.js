// 5: Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let A = Math.floor(Math.random() * 50 + 10);
let B = Math.floor(Math.random() * 50 + 10);
let C = Math.floor(Math.random() * 50 + 10);
let D = Math.floor(Math.random() * 50 + 10);
let E = Math.floor(Math.random() * 50 + 10);

let sum = A + B + C + D + E;
let avg = (A + B + C + D + E)/5;

console.log("The Sum of All 5 Randome number is: " + sum);
console.log("The Average of All 5 Randome number is: " + avg);
