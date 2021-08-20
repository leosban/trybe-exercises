/* eslint-disable array-callback-return */
// FETCH API
// TRATA-SE DE UMA FUNÇÃO ASSINCRONA, BASEADA EM UMA PROMISE.
// HÁ UM TEMPO PARA A REQUISIÇÃO SER ENVIADA E DEVOLVIDA. POR ISSO ELA TEM QUE SER ASSINCRONA
// A FUNÇÃO FETCH RECEBE DOIS PARAMETROS: 1ª - URL DO SERVIÇO ALVO DA REQUISIÇÃO.
// 2ª UM OBJETO CONTENDO ALGUMA INFORMAÇÕES SOBRE REQUISIÇÃO DE API. ESSE OBJETO CONTÉM
// INFORMAÇÕES ESPECIFICAS PARA AQUELA CHAMADA. ESSAS ESPECIFICAÇÕES, ESTÃO SEMPRE PRESENTES
// NA DOCUMENTAÇÃO DE USO DAQUELA API ESPECIFICA.

const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const NewLiTwo = document.createElement('li');
  NewLiTwo.innerText = vantagens;
  advantagesList.appendChild(NewLiTwo);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLiThree = document.createElement('li');
  newLiThree.innerText = linguagens;
  languagesList.appendChild(newLiThree);
});
