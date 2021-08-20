// OPERAÇÕES ASSÍNCRONAS

setTimeout(() => { // setTimout é utilizada  para simular comportamentos assíncronos.
  console.log('Comprar parafusos'); // comprar parafusos
  console.log('Adicionar ao estoque'); // adicionar ao estoque
}, 100);

console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');

// FIXACAO

const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

const numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);

const assert1 = require('assert');

const pushNumber1 = (list, number) => list.push(number);

const numbers1 = [];

setTimeout(() => pushNumber1(numbers1, 1), 1000);
pushNumber1(numbers1, 2);
pushNumber1(numbers1, 3);

assert1.deepStrictEqual(numbers1, [1, 2, 3]);
// ESSA VALIDAÇÃO FALHA POR CAUSA DA FUNÇÃO setTimeout. POIS ELA É UMA FUNÇÃO ASSINCRONA
// QUE ESPERA ALGUNS MS PARA EXECUTAR A FUNÇÃO PASSADA A ELA COMO PARAMETRO

// ESSA VALIDAÇÃO ABAIXO ESTÁ OK

const assert2 = require('assert');

const pushNumber2 = (list, number) => {
  list.push(number);
  console.log(list);
};

const numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 500);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

// PARA PASSAR NO TESTE, É NECESSÁRIO TESTAR O NUMBERS APÓS OS MS:

setTimeout(() => assert2.deepStrictEqual(numbers2, [2, 3, 1]), 550);
// ARRAY FOI MODIFICADO, POIS A FUNÇÃO É ASSINCRONA, O CÓDIGO CONTINUA RODANDO
// MESMO QUE ELE NÃO TENHA TERMINAOD DE RODAR.
