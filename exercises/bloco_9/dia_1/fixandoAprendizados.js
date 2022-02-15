// eslint-disable-next-line no-alert
// const elogio = () => console.log('Ney é 10, a Trybe é 100');
// setTimeout(elogio, 10000);

const timeA = 1000;
const timeB = 500;
const numA = 4;
const numB = 6;
let numC = 2;

const sum = (a, b) => a + b;

setTimeout(() => {
  numC = sum(numA, numB);
  console.log(numC);
}, timeA); // 10 em 1s

console.log(numC); // 2 em 0s

setTimeout(() => {
  console.log(sum(numA, numC) === numB);
}, timeB); // true em 0.5s
