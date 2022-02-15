// CALLBACKS
// É UMA FUNÇÃO PASSADA COMO PARAMETRO PARA OUTRA FUNÇÃO.
// ESSA FUNÇÃO RECEBE DOIS PARAMETROS, O 1ª É A FUNÇÃO CALLBACK QUE PASSAMOS
// ATRAVÉS DE UMA ARROW FUNCTION E O 2º É O TEMPO QUE O INTERPRETADOR
// IRÁ ESPERAR PARA EXECUTAR A FUNÇÃO.

const despesasMensais = [{ academia: 89 }, { ifood: 200 }, { celular: 35 }, { internet: 100 }];

const meuSaldo = 1000;

const balancoMes = (saldo, despesas, callback) => {
  const despesasTotais = callback(despesas);
  const totalAposDespesas = saldo - despesasTotais;

  console.log(`Balanço do mês: Recebido: R$${saldo},00
    Gasto: R$${despesasTotais},00
    Saldo: R$${totalAposDespesas},00 `);
};

const manipulaDespesas = (despesasMes) => {
  const cadaValor = despesasMes.map(((item) => Object.values(item)));
  const despesasTotais = cadaValor.reduce((acc, curr) => acc + curr[0], 0);
  return despesasTotais;
};

balancoMes(meuSaldo, despesasMensais, manipulaDespesas);
