const produtos = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Tênis', categoria: 'Calçados' },
  { nome: 'Calça', categoria: 'Vestuário' },
];
const categoriaDesejada = 'Vestuário';

function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(function (produto) {
    return produto.categoria === categoria;
  });
}

console.log(filtrarPorCategoria(produtos, categoriaDesejada));

const filtrarComArrowFunctionEFilter = (produtos, categoria) =>
  produtos.filter((produto) => produto.categoria === categoria);

console.log(filtrarComArrowFunctionEFilter(produtos, categoriaDesejada));

// Exemplo de Saída: // [ { nome: 'Camisa', categoria: 'Vestuário' },
// { nome: 'Calça', categoria:'Vestuário' } ];
