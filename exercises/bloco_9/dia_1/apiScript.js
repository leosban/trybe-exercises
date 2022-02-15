const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const meuObjeto = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, meuObjeto)
    .then((resposta) => resposta.json())
    // eslint-disable-next-line no-return-assign
    .then((dados) => document.getElementById('jokeContainer').innerText = dados.joke)
    .then((resposta) => console.log(resposta));
};

window.onload = () => fetchJoke();
