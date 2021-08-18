// ARRAY.REDUCE()
// FUNÇÃO QUE SOMA TODOS OS VALORES DE UM ARRAY
// APENAS COM O FOR

const numbers = [32, 15, 3, 2, -5, 56, 10];;
let sumNumbers = 0;
// Variavel irá acumular a cada iteração do for, resultado da operação feita.
for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];  
}
console.log(sumNumbers);

// COM REDUCE()
const numbers = [32, 15, 3, 2, -5, 56, 10];
// O parametro `result` é o acc. Ele recebe do `reduce`, o retorno da função de cada iteração.
const sumNumbers = numbers.reduce((result, number) => result + number);
console.log(sumNumbers);

// MAIS UM EXEMPLO COM O REDUCE
const collection = [1,2,3,4,5];
const getSum = (acc, num) => {
  console.log(acc);
  return acc + num;
}
const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers);

// COM O REDUCE É POSSÍVEL PASSAR UM SEGUNDO PARÂMETRO, LOGO APÓS A FUNÇÃO:
const numbers = [32, 15, 3, 2, -5, 56, 10];
const getSum = (result, number) => {
  console.log(result);
  return result + number;
}
const sumNumbers = numbers.reduce(getSum, 100); // PARAMETRO ADICIONADO AO FINAL DA FUNÇÃO

// EXEMPLO COM REDUCE COMPARAR VALOR E ACHAR O MAIOR ENTRE ELES:
const numbers = [27, 83, -80, 33, 150];
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number)
const bigger = numbers.reduce(getBigger, 90)
console.log(bigger);

// EXEMPLO COM REDUCE, CRIANDO UM FUNÇÃO QUE SOMA NÚMEROS PARES NO ARRAY
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumPair = (curr, num) => ((num % 2 === 0) ? curr + num : curr);
const sumNumbers = (array) => array.reduce(sumPair, 0);
console.log(sumNumbers(numbers));

// EXEMPLO COM REDUCE PARA MOSTRAR QUAL MATÉRIA O ESTUDANTE SE SAIU MELHOR:
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => ((acc.nota > materia.nota) ? acc : materia);
const reportBetter = (students) => students.map((students) => ({
  name: students.nome,
  materia: students.materias.reduce(getBestClass).name}));
console.log(reportBetter(estudantes));
