const imoveis = [
  {
    id: 1,
    tipo: 'Apartamento',
    valor: 400000,
    disponivel: true,
    bairro: 'Centro',
  },
  {
    id: 2,
    tipo: 'Casa',
    valor: 550000,
    disponivel: false,
    bairro: 'Subúrbio',
  },
  {
    id: 3,
    tipo: 'Cobertura',
    valor: 900000,
    disponivel: true,
    bairro: 'Centro',
  },
  {
    id: 4,
    tipo: 'Apartamento',
    valor: 300000,
    disponivel: false,
    bairro: 'Zona Sul',
  },
  { id: 5, tipo: 'Casa', valor: 700000, disponivel: true, bairro: 'Centro' },
];

const imoveisNoCentro = imoveis.filter((bairro) => bairro.bairro === 'Centro');

console.log(imoveisNoCentro);
