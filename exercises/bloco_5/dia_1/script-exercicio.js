function futuro(params) {
  let texto = document.getElementsByTagName('p')[1];
  texto.innerText = 'Me vejo como um desenvolvedor Java Web Formado e numa empresa boa'
}
futuro();

function mudaCorQuadrado(params) {
  let quadrado = document.getElementsByClassName('main-content')[0];
  quadrado.style.backgroundColor = 'rgb(76, 164, 109)'
}
mudaCorQuadrado();

function mudaCorQuadradoCentral(params) {
  let quadradoCentral = document.getElementsByClassName('center-content')[0];
  quadradoCentral.style.backgroundColor = 'white'
}
mudaCorQuadradoCentral();

function corrigeTexto(params) {
  let titulo = document.getElementsByClassName('title')[0];
  titulo.innerText = "Exercício 5.1 - JavaScript"
}
corrigeTexto();

function paragrafoMaiusculo(params) {
  let paragraphUpper = document.getElementsByClassName('center-content')[0];
  paragraphUpper.style.textTransform = 'uppercase';
}
paragrafoMaiusculo();

function conteudosParagrafos(params) {
  let contentParagraph = document.getElementsByTagName('p');
  for (let i = 0; i < contentParagraph.length; i += 1) {
    console.log(contentParagraph[i].innerText);
  }
}
conteudosParagrafos();