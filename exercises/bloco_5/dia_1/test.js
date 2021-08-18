function conteudosParagrafos(params) {
  let contentParagraph = document.getElementsByTagName('p');
  for (let index = 0; index < contentParagraph.length; index += 1) {
    console.log(contentParagraph[index].innerHTML);
    // contentParagraph += 1
  }
}
conteudosParagrafos();