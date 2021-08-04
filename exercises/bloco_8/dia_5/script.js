// SPREAD OPERATOR
// ADICIONANDO ITENS NO ARRAY
// USANDO METODO PUSH O ARRAY SERÁ SOBRESCRITO
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

// SPREAD OPERATOR SERVE PRA COMBINAR OBJETOS E ARRAYS DE ACORDO COM A ORDEM QUE ELE FOR INPUTADO, COPIAR VALORES DE OBJETOS ITERÁVEIS E EM FUNÇÕES QUE RECEBEM MULTIPLOS ARGUMENTOS.

// EXEMPLO COM O SPREAD OPERATOR
const numbers = [1, 2, 3, 4, 5];
const newArray = [6, 7, 8, 9, 10, ...numbers]
console.log(newArray);
console.log(numbers);

// EXEMPLO COM O SPREAD OPERATOR, PARA COMBINAR ARRAYS EM UMA ÚNICA ESTRUTURA
const spring = ['out', 'nov', 'dez'];
const summer = ['jan', 'fev', 'mar'];
const fall = ['abr', 'mai', 'jun'];
const winter = ['jul', 'ago', 'set'];
const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);

// EXEMPLO SPREAD OPERATOR NO ARGUMENTO DA FUNÇÃO QUE RECEBE VÁRIOS PARAMETROS
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
console.log(imc(...patientInfo));

// EXEMPLO SPREAD OPERATOR APLICADO EM FUNÇÕES PRONTAS DO JS
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40]
console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers));

// EXEMPLO SPREAD OPERATOR APLICADO PARA JUNTAR OBJETOS
const people = {
  id: 101,
  name: 'Alyson',
  age: 25
};
const about = {
  address: 'Av. Getúlio Vargas,1000',
  occupation: 'Developer',
};
const customer = { ...people, ...about };
console.log(customer);

// PARA FIXAR COM O SPREAD OPERATOR
//Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .
const specialFruit = ['laranja', 'limao', 'melancia'];
const additionalItens = ['maracuja', 'acerola', 'caja'];
const fruitSalad = (fruit, additional) => [...fruit, ...additional];
console.log(fruitSalad(specialFruit, additionalItens));

// PARAMETRO REST
// EXEMPLO COM O PARAMETRO
const quantosParams = (...args) => {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}
console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], {}));

// MAIS UM EXEMPLO COM O PARAMETRO REST
const sum = (...args) => args.reduce((acc, current) => acc + current);
console.log(sum(9, 60));

//Object Destructuring
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

// SINTAXE DA DESESTRUTURAÇÃO DE OBJETOS:
const { name } = product;
console.log(name);

// SE QUISERMOS INCLUIR MAIS UMA CHAVE:
const { name, seller } = product;
console.log(name);
console.log(seller);

// REATRIBUIR NOME DA PROPRIEDADE QUE DESEJA ACESSAR AO DECLARAR A MESMA COMO UMA VARIÁVEL, SEGUINDO SINTAXE
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matemática'
};
const { a: name, b: classAssigned, c: subject } = student;
console.log(`${name}, ${classAssigned}, ${subject}`);
// O EXEMPLO DE CIMA É EQUIVALENTE A:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matemática',
};
const name = student.a;
console.log(name);

// COMO PASSAR VALORES DE UM OBJETO COMO PARÂMETROS PARA UMA FUNÇÃO:
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
const printProductDetaisl = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetaisl(product);

//Array Destructuring
// ACESSANDO POSIÇÃO DE UM ARRAY NO MODO TRADICIONAL:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);

// COM A DESTRUTURAÇÃO DE ARRAY, PODEMOS DECLARAR TODAS AS VARIAVEIS CONTENDO OS NOMES DO PAÍSES USANDO APENAS UMA LINHA:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);

// PARA FIXAR:
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0])

const [saudacao, fazSaudacao] = saudacoes;
console.log(fazSaudacao(saudacao));

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[, , , ...numerosPares] = numerosPares;

console.log(numerosPares);

// Default Destructuring
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};
const { nationality = 'Brazilian' } = person; // ATRIBUINDO UM VALOR PADRÃO
console.log(nationality);

// DE MANEIRA SEMELHANTE, PODE SER FEITA A MESMA COISA PARA DESESTRUTURAR UM ARRAY:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d
console.log(x);
console.log(y);
console.log(z);

// PARA FIXAR 
// Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .

const getNationality = ({firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;
const person = {
  firstName: 'João',
  lastName: 'Jr II'
};
const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
console.log(getNationality(otherPerson));
console.log(getNationality(person));

//Object Property Shorthand
// FUNÇÃO PARA CRIAR OBJETO DE MODO PADRÃO
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};
console.log(newUser(54, 'isabella', 'isabella@email.com'));

// USANDO A FEATURE PROPERTY SHORTHAND:
const newUser = (id,name,email) => {
  return {id, name, email};
}
console.log(newUser(54, 'isabella', 'isabella@email.com'));

// PARA FIXAR
const getPosition = (latitude, longitude) => {
  return {latitude,longitude};
}
  console.log(getPosition(-19.8157, -43.9542));

// Default Parameters
// USA-SE UM PARAMETRO COMO PADRÃO, CASO O PARAMETRO NÃO SEJA DECLARADO OU RECONHECIDO.
const greeting = (user = 'Caro usuário') => console.log(`Welcome, ${user}!`);
greeting();

// PARA FIXAR
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => number * value;
console.log(multiply(8));

