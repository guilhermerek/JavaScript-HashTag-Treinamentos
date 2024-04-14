console.log('exercicio 1');
function verificaDesconto(valor) {
  if (valor >= 100) {
    console.log(`O cliente possui desconto, o valor irá ficar: ${valor * 0.9}`);
  } else {
    console.log(`O cliente não terá desconto, o valor total é: ${valor}`);
  }
}

verificaDesconto(97);
verificaDesconto(110);

console.log('exercicio 2');

const alface = 19;
const beterraba = 0;

function verificaEstoque(produto) {
  if (produto > 0) {
    console.log('Produto disponivel!');
  } else {
    console.log('Produto indisponivel');
  }
}

verificaEstoque(alface);
verificaEstoque(beterraba);

console.log('exercicio 3');

function categoriaCliente(pontos) {
  if (pontos >= 85) {
    console.log('Cliente Premium');
  } else if (pontos >= 50) {
    console.log('Cliente Regular!');
  } else {
    console.log('Cliente Comum');
  }
}

categoriaCliente(52);
categoriaCliente(37);
categoriaCliente(89);

console.log('exercicio 4');

function desempenhoIndividualDeVendas(vendas, meta) {
  const percentual = (vendas / meta) * 100;
  if (percentual >= 100) {
    console.log('Excelente Desempenho');
  } else if (percentual >= 90 && percentual < 100) {
    console.log('Muito bom desempenho');
  } else if (percentual >= 80 && percentual < 90) {
    console.log('Bom desempenho');
  } else if (percentual >= 61 && percentual < 80) {
    console.log('Desempenho satisfatorio');
  } else {
    console.log('Desempenho insatisfatorio');
  }
}

const meta = 10000;
const vendas = 11000;

desempenhoIndividualDeVendas(vendas, meta);

console.log('exercicio 5');

function verificarVelocidade(velocidade) {
  //<80 abaixo da velocidade se não, acima
  velocidade <= 80 ? console.log('true') : console.log('false');
}
verificarVelocidade(90);
verificarVelocidade(78);

console.log('exercicio 6');

function mensagemSemaforo(cor) {
  cor === 'amarelo'
    ? console.log('Atenção')
    : cor === 'verde'
    ? console.log('Avançar')
    : cor === 'vermelho'
    ? console.log('Pare')
    : console.log('error');
}
mensagemSemaforo('verde');
mensagemSemaforo('vermelho');
mensagemSemaforo('azul');
mensagemSemaforo('amarelo');

console.log('exercicio 7');

function coresDoSemaforo(cor) {
  switch (cor) {
    case 'vermelho':
      console.log('PARE!');
      break;

    case 'verde':
      console.log('AVANÇE!');
      break;

    case 'amarelo':
      console.log('ATENÇÃO!');
      break;
    default:
      console.log('Cor desconhecida, tome cuidade!');
  }
}

coresDoSemaforo('amarelo');
coresDoSemaforo('verde');
coresDoSemaforo('vermelho');

console.log('exercicio 8');

function verificarPlaca(ultimoDigito) {
  switch (ultimoDigito) {
    case 1:
    case 2:
      console.log('Segunda');
      break;
    case 3:
    case 4:
      console.log('Terça');
      break;
    case 5:
    case 6:
      console.log('Quarta');
      break;
    case 7:
    case 8:
      console.log('Quinta');
      break;
    case 9:
    case 0:
      console.log('Sexta');
      break;
    default:
      console.log('invalid number / Final de semana sem rodizio');
  }
}

verificarPlaca(1);
verificarPlaca(0);
verificarPlaca(11);
