const fatorial = (n) => {
  let fat = 1;
  for (let i = n; i > 1; i -= 1) {
    fat *= i;    
  }
  return fat
}
console.log(fatorial(2));

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const maiorPalavra = palavra => {
  let arrayDePalavras = palavra.split(' ');
  let tamanho = 0;
  let resultado = '';
  for (const iterator of arrayDePalavras) {
    if (iterator.length > tamanho) {
      tamanho = iterator.length;
      resultado = iterator;
    }
  }
  return resultado;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

