const vendas = [
  { vendedor: 'Ana', valor: 1000, mes: 'Agosto' },
  { vendedor: 'Pedro', valor: 1500, mes: 'Agosto' },
  { vendedor: 'Maria', valor: 1200, mes: 'Julho' },
];

const calcularMediaVendas = (vendas, mes) => {
  const vendasMes = vendas.filter(({ mes: vendaMes }) => vendaMes === mes);
  const totalVendas = vendasMes.reduce(
    (acumulador, { valor }) => acumulador + valor,
    0
  );
  return vendasMes.length ? totalVendas / vendasMes.length : 0;
};

const media = calcularMediaVendas(vendas, 'Agosto');
console.log(media);
