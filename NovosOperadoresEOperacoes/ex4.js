const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 100 },
  { nome: 'Tênis', preco: 150 },
];

const novosProdutos = produtos.map((produto) => ({
  ...produto,
  emEstoque: true,
}));

console.log(novosProdutos);
