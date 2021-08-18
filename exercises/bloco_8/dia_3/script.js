// ARRAY.FILTER
const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven = numbers.filter((number) => number % 2 === 0); // NOVO ARRAY COM NUMEROS FILTRADOS E DIVISIVEIS POR 2

console.log(isEven);

// VERIFICAR ALGUMA CONDIÇÃO DENTRO DO OBJETO COM O FILTER
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

// VERIFICAR AS PESSOAS MENORES DE 18
const verifyAgeDrive = (people) => people.filter((people) => (people.age < 18))

// IMPRESSAO DA SAIDA COM A VERIFICAÇÃO
console.log(verifyAgeDrive(objPeople));

// USANDO FILTER E RETORNANDO ARRAY SEM UM ELEMENTO
const students = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const removeOneStudent = (name, listStudent) => listStudent.filter((student) => student !== name);
const newStudents = removeOneStudent('Ricardo', students);
console.log(newStudents);

// ARRAY.MAP
// COMPARAÇÃO ENTRE .MAP() E FOR:

// PRIMEIRO O METODO FOR:
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];
const fullNames = [];
for (let index = 0; index < persons.length; index++) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`)
}
console.log(fullNames);

// SEGUNDO O METODO .MAP()
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];
const fullNames1 = persons.map((persons) => `${persons.firstName} ${persons.lastName}`)
console.log(fullNames1);

// USANDO .MAP() PARA RETORNAR O DOBRO DE CADA INDEX NO ARRAY
const listNumbers = [10, 20, 30, 40];
const doubleNumbers = listNumbers.map((n) => n * 2);
console.log(doubleNumbers);

// USANDO .MAP() PARA RETORNAR NUMEROS NEGATIVOS NO ARRAY
const numbers = [1, 2, 3, 4, -5]
const negativeNumbers = numbers.map((n) => (n > 0) ? n * (-1) : n)
console.log(negativeNumbers);

// USANDO FOR PARA RETORNAR NUMEROS NEGATIVOS NO ARRAY
const numbers = [1, 2, 3, 4, -5]
const negativeNumbers = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > 0) {
    negativeNumbers.push(numbers[i] * (-1));
  } else {
    negativeNumbers.push(numbers[i])
  }
}
console.log(negativeNumbers);

// UNINDO DOIS ARRAYS COM O .MAP()
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
 { [product]: listPrices[index] }
));
const listProducts = updateProducts(products, prices);
console.log(listProducts);

// FUNCAO PARA BUSCAR E IMPRIMIR NOME COMPLETO DO ALUNO QUE ESTUDAM PELA MANHÃ - .MAP() & .FILTER()
const students = [
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
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const allNamesStudents = students.filter((aluno) => (aluno.turno === 'Manhã')).map((aluno) => `${aluno.nome} ${aluno.sobrenome}`);

// console.log(allNamesStudents);

const reportStatus = (name, students) => {
  const studentName = students.find((student) => student.nome === name);
  return studentName.materias.map((materia) => (`${materia.name} ${materia.nota >= 60 ? 'Aprovado' : 'Reprovado'}`
  ));
};
  console.log(reportStatus('Natalia', students));