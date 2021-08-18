const sum = (num1, num2) => num1 + num2;

const sumVariable = sum;

console.log(sumVariable(10, 11));
//  [Function: sum]

sum();
console.log(sum(15, 92));

const sayHello = () => 'Hello Trybers'; // FUNCAO COMO ARGUMENTO PARA OUTRA FUNÇÃO
const printGreeting = (callback) => console.log(callback()); // RETORNAR FUNÇÃO DENTRO DE OUTRA FUNÇÃO
printGreeting(sayHello); // RETORNO DO CODIGO NA FUNCAO DE CALLBACK

const sumFixAmount = (amount) => (number) => amount + number; // RETORNA UMA FUNÇÃO, DENTRO DE OUTRA FUNÇÃO

const initialSum = sumFixAmount(15); // CRIADA CONSTANTE PARA FUNÇÃO INICIAL
console.log(initialSum(5)); // IMPRESSÃO DO RESULTADO

// HIGHER ORDER FUNCTIONS

// ADICIONADO EVENTO PARA MOSTRAR MSG NO CONSOLE AO CLICAR NO BOTAO DE INSCRIÇÃO
const button = document.querySelector('#signup-button');
const registerUser = () => 'Registrado com sucesso!';
button.addEventListener('click', registerUser);

// ESTRUTURANDO HIGHER ORDER FUNCTIONS:
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count); // ACAO IRA CONCATENAR COM O NUMERO
  }
};

repeat(10, console.log); // FUNCAO CHAMADA COM O NUMERO E A ACAO QUE IRA FAZER (CONSOLE.LOG)

const repeat2 = (number, action) => { // FUNCAO DECLARADA ANTERIORMENTE, PARA FAZER A CONTAGEM DE NÚMEROS
  for (let count = 0; count <= number; count += 1) {
    action(count)
  }
};

repeat2(10, (number) => { // CHAMA A FUNÇÃO COM NUMERO E CRIADA ARROW FUNCTION PARA TESTAR SE OS NÚMEROS SÃO PARES.
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// ESTRUTURANDO HIGHER ORDER FUNCTIONS:
const repeat3 = (number, action) => {
  for (let count = 0; count < number; count += 1) {
    action(count)
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if (number % 2 !== 0) {
    console.log(number, 'is Odd');
  }
};

repeat3(4, isEven);
repeat3(6, isOdd);

const numberGenerator = () => Math.round(Math.random() * 100); // FUNCAO CRIAR NUMERO ALEATORIOS

console.log(numberGenerator());

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculator = (func) => func(10, 5);

console.log(calculator(multiplication));

const acorda = (acordar) => 'Acordando!!';
const cafe = (cafe) => 'Bora tomar café!!';
const dormir = (dorme) => 'Partiu dormir!!';

const doingThings = (afazeres) => console.log(afazeres);

doingThings(acorda());



