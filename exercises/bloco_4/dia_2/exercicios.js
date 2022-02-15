// EXERCICIO 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

//EXERCICIO 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalArray = numbers.reduce((totalArray, currentElement) => totalArray + currentElement);
console.log(totalArray);

// EXERCICIO 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalArray = numbers.reduce((totalArray, currentElement) => totalArray + currentElement);
let mediaAritmetica = totalArray / numbers.length;
console.log(mediaAritmetica);

// EXERCICIO 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalArray = numbers.reduce((totalArray, currentElement) => totalArray + currentElement);
let mediaAritmetica = totalArray / numbers.length;
if (mediaAritmetica > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor ou igual a 20`);
}

// EXERCICIO 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;
for (let index = 0; index < 8; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  }
}
console.log(`O maior valor é: ${maiorValor}`);

// EXERCICIO 6

let numbers = [70, 8, 100, 2];
let impar = 0;
let par = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impar[index] = numbers[index];
    impar += 1;
  }
}
if (impar !== 0) {
  console.log(`O total de valores ímpares são: ${impar}`);
} else {
  console.log(`Nenhum valor ímpar encontrado`);
}

// EXERCICIO 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 100; // Maior valor dentro do array
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index];
  }
}
console.log(`O menor valor é: ${menorValor}`);

// EXERCICIO 8
let numbers = [];
for (let index = 0; index <= 25 ; index += 1) {
    numbers.push(index)
}
console.log(numbers);

// EXERCICIO 9
let numbers = [];
for (let index = 0; index <= 25 ; index += 1) {
    numbers.push((index) / 2);
}
console.log(numbers);