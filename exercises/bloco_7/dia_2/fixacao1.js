function myFunction(objeto) {
  const meusDados = {
    primeiroNome: 'Leonidas',
    ultimoNome: 'Junior',
    idade: 32,
  }
  console.log(meusDados.primeiroNome, meusDados.ultimoNome, meusDados.idade);
}

myFunction()

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// const habilidades = (aluno) => {
//   const arrayDosEstudantes = Object.keys(aluno);
//   for (i in arrayDosEstudantes) {
//     arrayDosEstudantes[i]
//     console.log(`${arrayDosEstudantes[i]}, Nível: ${aluno[arrayDosEstudantes[i]]}`);
//   }
// }
// console.log('Aluno1');
// habilidades(student2);

const valoresHabilidades = (aluno) => Object.values(aluno);
console.log(valoresHabilidades(student1));