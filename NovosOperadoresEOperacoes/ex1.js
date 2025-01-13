const clientes = [
  {
    nome: 'Ana',
    enderecos: [
      { cidade: 'São Paulo' },
      {
        cidade: 'Campinas',
      },
    ],
  },
  { nome: 'Pedro', enderecos: [{ cidade: 'Rio de Janeiro' }] },
  { nome: 'Maria', enderecos: [] },
];

// const listaCidades = clientes
//   .filter((cliente) => cliente.enderecos && cliente.enderecos.length > 0) //filtar os clientes que possuem endereço
//   .map((cliente) => cliente.enderecos.map((endereco) => endereco.cidade)) // mapeia cada cliente para a lista de cidades
//   .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []); //unindo todas as listas geradas

// console.log(listaCidades);

const listaCidades = clientes
  .filter((cliente) => cliente.enderecos?.length > 0) //filtar os clientes que possuem endereço
  .map((cliente) => cliente.enderecos?.map((endereco) => endereco.cidade) ?? []) // mapeia cada cliente para a lista de cidades
  .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []); //unindo todas as listas geradas

console.log(listaCidades);

// encadeamento opcional: ?
// coalescencia nula: ??
