// PROMISES
// FORAM CRIADAS PARA FACILITAR A LEITURA DE CÓDIGO ASSÍNCRONOS E TORNAR SUA LÓGICA MAIS PREVISIVEL
// E LEGIVEL. ELAS SÃO UMA DAS FORMAS MAIS POPULARES DE SE ESCREVER ESSE TIPO DE CÓDIGO EM
// JAVASCRIPT HOJE EM DIA. SÃO TAMBÉM A PRINCIPAL FORMA DE VOCÊ SE COMUNICAR COM APIs.
// PROMISES NÃO SÃO UM CONCEITO TRIVIAL.
// SÃO ASSÍNCRONAS, OU SEJA, ELAS TEM UM ESPAÇO ESPECIAL PARA SUA EXECUÇÃO SEM QUE TRAVEM O FLUXO
// DE OUTRAS FUNÇÕES.
// AS PROMISES TEM 'SUPERPODERES', ISTO É, FUNÇÕES EXTRAS QUE FACILITAM O CONTROLE DO FLUXO
// ASSINCRONO
// AS PROMISES SÃO CONSTRUÍDAS DE UMA FORMA DISTINTA: PARA CRIAR UMA NOVA PROMISE, USAMOS UM
// CONSTRUTOR
// POSSUI 3 ESTADOS: PENDING, FULFILLED, REJECTED.

// GESTORES DE FLUXO
// EXISTEM 2 PRINCIPAIS FERRAMENTAS QUE PODEMOS USAR PARA GERIR O FLUXO ASSÍNCRONO COM PROMISES
// O .THEN() E O .CATCH() ELES ESPERAM A PROMISE SER CONCLUÍDA PARA COMEÇAR SUA EXECUÇÃO
// CONTROLANDO ASSIM O FLUXO
// .THEN() RECEBE O RETORNO DO RESOLVE
// .CATCH() RECEBE O RETORNO DO REJECT

// API
// PERMITE QUE APLICAÇÕES SE COMUNIQUEM UMAS COM AS OUTRAS, SERVINDO DE 'PONTE' PARA ELAS. UMA API
// NÃO É UM BANCO DE DADOS OU UM SERVIDOR, MAS A RESPONSÁVEL PELO CONTROLE DOS PONTOS DE ACESSO
// A ELES, ATRAVÉS DE UM CONJUNTO DE ROTINAS E PADRÕES DE PROGRAMAÇÃO.

const promise = new Promise((resolve, reject) => { // SINTAXE CONSTRUTOR PROMISE COM OPERADOR NEW
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
  .then((number) => `Que sucesso =) nosso número foi ${number}`)
  .then((msg) => console.log(msg))
  .catch((number) => console.log(`Que fracasso =( Nosso número foi ${number}`));

// const fetch = require('node-fetch');

// // FETCH API
// // ERROS COMUNS

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((resposta) => resposta.json())
//         .then((resposta) => resolve(resposta.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// function sendJokeToFriend(name) {
//   const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
//     .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
//     .catch((error) => error);
//   console.log(message);
// }

// sendJokeToFriend('Leony');

// ASYNC E AWAIT
// ASYNC TRANSFORMA QUALQUER FUNÇÃO EM UMA PROMISE, PARA USAR BASTA COLOCÁ-LA ANTES DA DEFINIÇÃO
// DA FUNÇÃO. DEPOIS É SÓ TRANSFORMAR O QUE É RESOLVE EM RETURN E O QUE É REJECT EM THROW
// ASSIM SUA PROMISE COM ASYNC ESTÁ PRONTA.
// AWAIT SÓ PODE SER USADO DENTRO DE UMA FUNÇÃO COM ASYNC, FAZ COM QUE A FUNÇÃO ESPERA
// UMA RESPOSTA PARA CONTINUAR SUA EXECUÇÃO;
// REFATORANDO A FUNÇÃO ACIMA

const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((resposta) => resposta.json())
      .then((resposta) => resposta.value);
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((error) => error);
  console.log(message);
}

sendJokeToFriend('Leony');
