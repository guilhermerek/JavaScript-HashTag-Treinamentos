const pacotes = [
  { destino: 'Paris', preco: 3500, vagasDisponiveis: true },
  { destino: 'Nova York', preco: 4200, vagasDisponiveis: false },
  { destino: 'Rio de Janeiro', preco: 1500, vagasDisponiveis: true },
];

pacotes.forEach((pacote) =>
  console.log(
    `Destino para: ${pacote.destino} Vagas: ${
      pacote.vagasDisponiveis ? 'Ainda restam vagas' : 'Vagas esgotadas'
    }`
  )
);
