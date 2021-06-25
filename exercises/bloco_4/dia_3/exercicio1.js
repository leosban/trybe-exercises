// EXERCICIO 1

let n = 5;
let caractere = '*'
let asteriscos = '';

for (let colunas = 1; colunas <= n; colunas += 1) {
  for (let linhas = 1; linhas <= n; linhas += 1) {
    asteriscos += caractere;
  }
  console.log(asteriscos);
  asteriscos = '';
}

// EXERCICIO 2
let n = '';
let caractere = '*'
let asteriscos = "*";

for (let index = 1; index <= 5; index += 1) {
  n += asteriscos;
  console.log(n);
}

// EXERCICIO 3
let tamanho = 5; // tamanho da base
let caractere = '*';
let asteriscos = '';
let base = tamanho;

for (let linhas = 0; linhas < tamanho; linhas += 1) {
  for (let colunas = 0; colunas <= tamanho; colunas += 1) {
    if (colunas < base) {
      asteriscos += ' ';
    } else {
      asteriscos += caractere;
    }
  }
  console.log(asteriscos);
  asteriscos = '';
  base -= 1;
}

// EXERCICIO 4
let tamanho = 5; // tamanho da base
let caractere = '*';
let asteriscos = '';

let meioTriangulo = (tamanho + 1) / 2;
let controleDireita = meioTriangulo;
let controleEsquerda = meioTriangulo;

for (let linhas = 0; linhas <= meioTriangulo; linhas += 1) {
  for (let colunas = 0; colunas <= tamanho; colunas += 1) {
    if (colunas > controleEsquerda && colunas < controleDireita) {
      asteriscos += caractere;
    } else {
      asteriscos += ' ';
    }
  }
  console.log(asteriscos);
  asteriscos = '';
  controleDireita += 1;
  controleEsquerda -= 1
};

