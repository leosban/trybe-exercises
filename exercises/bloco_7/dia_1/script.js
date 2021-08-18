let contadorDeClique = 0;
let quantidadeClique = document.getElementById('texto');
document.getElementById('button').addEventListener('click', () => quantidadeClique.innerText = contadorDeClique += 1);