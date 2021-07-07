// OS COMANDOS ABAIXO SERVEM PARA LOCAL E SESSION STORAGE

// console.log(localStorage.length);
// // não possui nada salvo, então o retorno é o valor: 0

// localStorage.setItem('firstname', 'Leonidas');
// //salva uma entrada com a key = "firstname" e value = "Adam"

// localStorage.setItem('lastname', 'Junior');
// //salva uma entrada com a key = "lastname" e value = "Smith

// console.log(localStorage.getItem('lastname'));
// // retorna o valor "Smith"

// console.log(localStorage.length);
// // possui duas entradas, então o retorno é o valor: 2

// localStorage.removeItem('lastname');
// // remove a entrada referente a key = "lastname"

// console.log(localStorage.length);
// // possui uma entrada, então o retorno é o valor: 1

// localStorage.clear();
// // limpa todas as entradas salvas em localStorage

// console.log(localStorage.length);
// // não possui nada salvo, então o retorno é o valor: 0

// SALVANDO OUTRAS ESTRUTURAS EM localStorage e sessionStorage:

let organizacao = {
  nome: 'trybe',
  desde: 2019
}
// objeto 'sessionStorage' pode ser localStorage ou sessionStorage

sessionStorage.setItem('trybe', JSON.stringify(organizacao))
let org = JSON.parse(sessionStorage.getItem('trybe'))
console.log(org);

let classes = ['2019/set', '2019/oct']
sessionStorage.setItem('classes', JSON.stringify(classes))
let cls = JSON.parse(sessionStorage.getItem('classes'))
console.log(cls);