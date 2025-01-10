const avaliacoes = [
  { cliente: 'João', pontuacao: 4 },
  { cliente: 'Maria', pontuacao: 5 },
  { cliente: 'Pedro', pontuacao: 3 },
  { cliente: 'Ana', pontuacao: 4 },
  { cliente: 'Lucas', pontuacao: 5 },
];

const mediaAvaliacoes = avaliacoes.reduce(
  (media, avaliacao) => media + avaliacao.pontuacao,
  0
);

const mediaTotal = mediaAvaliacoes / avaliacoes.length;

console.log(mediaTotal);
