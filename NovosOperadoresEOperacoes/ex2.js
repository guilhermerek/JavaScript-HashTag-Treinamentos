const produtos = [
  { nome: 'Camiseta', quantidade: 10 },
  { nome: 'Calça', quantidade: null },
  { nome: 'Tênis', quantidade: 5 },
  { nome: 'Jaqueta', quantidade: 0 },
];

// const listaCidades = clientes
//   .filter((cliente) => cliente.enderecos?.length > 0) //filtar os clientes que possuem endereço
//   .map((cliente) => cliente.enderecos?.map((endereco) => endereco.cidade) ?? []) // mapeia cada cliente para a lista de cidades
//   .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []); //unindo todas as listas geradas

const produtosDisp = produtos.filter(
  (produto) => (produto.quantidade ?? 0) > 0
);

console.log(produtosDisp);
