function estados() {
  let estados = document.getElementById('estado');
  let opcoesEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < opcoesEstados.length; index += 1) {
    let criarOpcoes = document.createElement('option');
    estados.appendChild(criarOpcoes).innerText = opcoesEstados[index];
    estados.appendChild(criarOpcoes).value = opcoesEstados[index];
  }
};



window.onload = function () {
  estados();
};
