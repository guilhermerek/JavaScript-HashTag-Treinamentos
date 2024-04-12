const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 2015,
  cor: 'black',
  tipoGasolina: 'Gasolina aditivada',
  capacidadeMotor: '5.3L',
  potencia: '600 horsepower',
  capacidadeDePassageiros: 2,
  preco: 'R$ 500.000,00',
};

for (info in carro) {
  console.log(`${info}: ${carro[info]}`);
}
