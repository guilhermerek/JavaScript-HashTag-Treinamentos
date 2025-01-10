const pacotes = [
  { destino: 'Paris', preco: 3500, vagasDisponiveis: true },
  { destino: 'Nova York', preco: 4200, vagasDisponiveis: false },
  { destino: 'Rio de Janeiro', preco: 1500, vagasDisponiveis: true },
];

let pacotesDisponiveis = [];
let qtdDisponivel = 0;

pacotes.forEach((pacote) => {
  if (pacote.vagasDisponiveis) {
    qtdDisponivel++;
    pacotesDisponiveis.push(pacote.destino);
  }
});

console.log(
  `Pacotes com vagas disponiveis: ${qtdDisponivel} Destinos: ${pacotesDisponiveis.join(
    ', '
  )}`
);
