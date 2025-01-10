// Exemplo de Saída: // 7000;

const vendas = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
];

function calcularFaturamentoTotal(vendas) {
  return vendas.reduce(function (total, venda) {
    return total + venda.valor;
  }, 0);
}

console.log(calcularFaturamentoTotal(vendas));

const calcularFaturamentoTotalArrow = (vendas) =>
  vendas.reduce((total, venda) => total + venda.valor, 0);

console.log(calcularFaturamentoTotalArrow(vendas));
