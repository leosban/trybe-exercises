let resultado = 'naoSei';

switch (resultado) {
  case "aprovado":
    console.log(`Parabéns você foi aprovado(a)`);    
    break;

  case "lista":
    console.log(`Você está na nossa lista de espera`);
    break;

  case "reprovado":
    console.log(`Você foi reprovado(a)`);
    break;

  default:
    console.log(`Resultado não identificado`);
    break;
}