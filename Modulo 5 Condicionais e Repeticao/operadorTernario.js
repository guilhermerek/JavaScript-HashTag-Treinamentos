//utilizado para uma simples estrutura de if e else
const carro = { porta: true, cor: 'azul' };

carro.porta === true
  ? console.log('O carro possui portas') //caso verdadeiro
  : console.log('Esse carro não possui portas, deve ser uma moto!'); //caso seja falso

  carro.cor === 'azul' ? console.log('Cor azul') : console.log('Não é de cor azul!');