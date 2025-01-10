const faturamento = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
  { id: 4, valor: 4100 },
  { id: 5, valor: 1800 },
];

const valorTotal = faturamento.reduce((total, valor) => total + valor.valor, 0);

console.log(valorTotal);
