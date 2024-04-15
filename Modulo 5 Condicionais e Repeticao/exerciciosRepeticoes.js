console.log('Exercicio 1');

const vendasPorDia = [10, 15, 64, 21, 9, 64, 87, 45, 87, 459, 45];
const precoHamburger = 10;

function calcularFaturamentoHamburger(vendasPorDia, preco) {
  let faturamento = 0;
  for (let contador = 0; contador < vendasPorDia.length; contador++) {
    faturamento += vendasPorDia[contador] * preco;
  }
  return faturamento;
}

const resultado1 = calcularFaturamentoHamburger(vendasPorDia, precoHamburger);
console.log(`O valor total de faturamento foi: R$ ${resultado1}`);

console.log('');
console.log('Exercicio 2');
console.log('');

const listaCardapio = [
  {
    nome: 'hamburger',
    preco: 10,
  },
  {
    nome: 'refrigerante',
    preco: 11,
  },
  {
    nome: 'pizza media',
    preco: 70,
  },
];

function lerCardapio(cardapio) {
  for (let i = 0; i < listaCardapio.length; i++) {
    console.log(`${cardapio[i].nome}: R$${cardapio[i].preco}`);
  }
}

lerCardapio(listaCardapio);

console.log('');
console.log('Exercicio 3');
console.log('');

//resolução do video explicativo
function valorDoCaixa(totaldeVendas) {
  let valorRecebido = 0;
  let vendasRealizadas = 0;
  let vendasFinalizadas = false;

  while (!vendasFinalizadas) {
    const valorDaVenda = 10;
    valorRecebido += valorDaVenda;
    vendasRealizadas++;

    if (vendasRealizadas >= totaldeVendas) {
      vendasFinalizadas = true;
    }
  }
  console.log(`O valor total recebido foi de: R$${valorRecebido}`);
}

const totalDeVendasTeste = 9;
valorDoCaixa(totalDeVendasTeste);

// minha resolução:
let vendas = 9;
let valorVenda = 10;
let valorTotal = 0;
while (vendas > 0) {
  valorTotal = valorVenda + valorTotal;
  vendas--;
}

console.log(valorTotal);

console.log('');
console.log('Exercicio 4');
console.log('');

//minha resolução
let qtdVendas = 5;
while (qtdVendas > 0) {
  qtdVendas--;
  console.log(`Saiu para entrega, restam ${qtdVendas} entregas`);
}

//resolução do curso
const pedidosPendentes = ['Pizza', 'Sushi', 'Refrigerante', 'Batata Rústica'];

function realizarEntregas(pedidos) {
  let pedidoAtual = '';
  console.log('Saindo para a entrega');

  while (pedidos.length > 0) {
    pedidoAtual = pedidos.shift();
    console.log(`Realizando a entrega do pedido: ${pedidoAtual}`);
  }
  console.log('As entregas foram finalizadas!');
}

realizarEntregas(pedidosPendentes);

console.log('');
console.log('Exercicio 5');
console.log('');

const numSecreto = 11;
function adivinharNum(numeroSecreto) {
  let palpite = 0;
  let tentativas = 0;
  do {
    palpite = Math.floor(Math.random() * 100);
    tentativas++;
    if(palpite === numeroSecreto) {
      console.log(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`);
    }
  } while (palpite !== numeroSecreto);
};

adivinharNum(numSecreto);

console.log('');
console.log('Exercicio 6');
console.log('');

//copia do codigo da video aula, foi o mais complicado até o momento
const estoqueDaLanchonete = {
  hamburger: 20,
  batatasFritas: 15,
  refrigerante: 30,
  milkshake: 10,
};

function atualizarEstoque(estoque, itemFaltante, qtdAdicionar) {
  if(estoque.hasOwnProperty(itemFaltante)) {
    estoque[itemFaltante] += qtdAdicionar;
    console.log(`Estoque atualizado ${itemFaltante}: ${estoque[itemFaltante]}`);
  } else{
    console.log('Item não localizado no estoque!');
  }
};

console.log('Estoque da lanchonete: ');
console.log(estoqueDaLanchonete);

let continuarAdicionando = true;
let itemNaoEncontrado = false;

do {
  const itemFalta = 'hamburger';
  const quantidadeAdicionar = 5;

  if(!estoqueDaLanchonete.hasOwnProperty(itemFalta)) {
    if(!itemNaoEncontrado) {
      console.log('Item não encontrado');
      itemNaoEncontrado = true;
    }
  } else if (estoqueDaLanchonete[itemFalta] + quantidadeAdicionar > 50) {
    continuarAdicionando = false;
    console.log(`Limite do estoque ${itemFalta}: ${estoqueDaLanchonete[itemFalta]} foi atingido`);
  } else {
    atualizarEstoque(estoqueDaLanchonete, itemFalta, quantidadeAdicionar);
  }
} while(continuarAdicionando);

console.log(estoqueDaLanchonete);