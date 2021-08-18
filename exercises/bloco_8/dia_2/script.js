const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' }
];


// FUNÇÃO COM USO DO FOR EACH
function verifyGrades1() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperação';
    }
  });
}

verifyGrades1();
console.log(students);


// FUNÇÃO TRADICIONAL
function verifyGrades() {
  for (let i in students) {
    const student = students[i]
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  }
}

verifyGrades();
console.log(students);

// Encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. METODO TRADICIONAL
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (i in numbers) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}
console.log(firstMultipleOf5);

// USANDO ARRAY.FIND
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);
console.log(firstMultipleOf5);

// HOF QUE IMPRIME CADA ELEMENTO DO ARRAY
const arrayOfValues = ['josé', 50, 0.25, {comida: 'chocolate'}];
arrayOfValues.forEach((element)=> {
  console.log('Cada elemento do array:', element);
});

// PASSANDO MAIS DE UM PARAMETRO PARA A FUNÇÃO
const arrayOfValues = ['josé', 50, 0.25, {comida: 'chocolate'}];
arrayOfValues.forEach((element, index, array)=> {
  console.log('Elemento do array:', element);
  console.log('Index do array:', index);
  console.log('Array percorrido:', array);
})

// TABUADA DE 2 COM O FOR EACH
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multipliesFor2 = (n) => {
  console.log(`${n} * 2: ${n * 2}`);
}

numbers.forEach(multipliesFor2)

// INDEX NO FOR EACH
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];
const convertToUpperCase = (name, index) => names[index] = name.toUpperCase();

names.forEach(convertToUpperCase);
console.log(names);

// PARA FIXAR
// Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados`);
};

emailListInData.forEach(showEmailList);

// ARRAY.FIND
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (n) => n % 2 === 0;
const isEven = numbers.find(verifyEven);

console.log(isEven);

//OUTRA FORMA, SEM CRIAR NOVA FUNÇÃO
const isEven1 = numbers.find((n) => n % 2 === 0);
console.log(isEven1);

// PARA FIXAR 1
const findDivisibleBy3And5 = numbers.find((n) => n % 3 === 0 && n % 5 === 0);
console.log(findDivisibleBy3And5);

// PARA FIXAR 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = names.find((nome) => nome.length >= 5);
console.log(findNameWithFiveLetters);

// PARA FIXAR 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}
console.log(findMusic('31031685'));

// Array.some
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (currentValue, index) => index.some((name) => name[0] === currentValue);

console.log(verifyFirstLetter('J', listNames));
console.log(verifyFirstLetter('x', listNames));

// Array.every
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (element) => Object.values(element).every((grade) => grade === 'Aprovado');

console.log(verifyGrades(grades));

// PARA FIXAR 1
// Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => arr.some((nameCurrent) => nameCurrent === name)

console.log(hasName(names, 'Ana'));

// PARA FIXAR 2
// Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((currentAge) => currentAge.age >= minimumAge)

console.log(verifyAges(people, 18));

// Array.sort - ALTERA O ARRAY
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite']; 
food.sort(); // ORDENAÇÃO EM ORDEM ALFABETICA CRESCENTE
food.reverse(); // ORDENALÇÃO EM ORDEM ALFABETICA DECRESCENTE
console.log(food); // IMPRESSAO DO ARRAY EM ORDEM ALFABETICA

// ORDENACAO COM NUMEROS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort(); // MESMO COM NUMEROS A ORDENACAO SEGUE EM ORDEM ALFABETICA
numbers.sort((a, b) => a - b); // USO DO SORT PARA ORDENAR NUMEROS EM ORDEM CRESCENTE
numbers.sort((a, b) => b - a); // USO DO SORT PARA ORDENAR NUMEROS EM ORDEM DECRESCENTE
console.log(numbers);

// PARA FIXAR 1
// Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age)// ORDENANDO AS PESSOAS EM ORDEM CRESCENTE
//people.sort((a, b) => b.age < a.age); // ORDENANDO AS PESSOAS EM ORDEM DECRESCENTE

console.log(people);
