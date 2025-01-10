const vendidos = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Calça', categoria: 'Vestuário' },
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Celular', categoria: 'Eletrônicos' },
  { nome: 'Tênis', categoria: 'Calçados' },
  { nome: 'Meias', categoria: 'Vestuário' },
];

const vendidosPorCategoria = vendidos.reduce((count, produto) => {
  count[produto.categoria] = (count[produto.categoria] || 0) + 1;
  return count;
}, {});

console.log(vendidosPorCategoria);
