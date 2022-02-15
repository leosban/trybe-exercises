let fruits = [3, 4, 10, 1, 12];
let resultado = 0;
for (let index = 0; index < fruits.length; index += 1) {
  resultado += fruits[index];
}
if (resultado > 15) {
  console.log(`A soma de todos os valores é: ${resultado}`);
} else {
  console.log(`O valor é menor que 16`);
}

