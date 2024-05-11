//Contagem de Itens do Cardápio (Recursivo)
const cardapio = [
  'maca',
  'tomate',
  'alface',
  'salada mista',
  'ovos cozidos unidade',
];

function contadorRecursivo(lista) {
  if (lista.length === 0) {
    return 0;
  } else {
    lista.pop();
    return 1 + contadorRecursivo(lista);
  }
}

const res = contadorRecursivo(cardapio);
console.log(res);

console.log('');
console.log('ex 2');
console.log('');

// Cálculo do Valor Total das Vendas (Recursivo)

const arrayTotal = [12, 32, 21, 53, 12, 17, 22];
const hamburgerPrice = 10;

function totalSelled(arrayTotal, preco, dia) {
  if (dia >= arrayTotal.length) {
    return 0;
  }
  const valorVendaDiaAtual = arrayTotal[dia] * preco;
  const valorDoProximoDia = totalSelled(arrayTotal, preco, dia + 1);
  return valorVendaDiaAtual + valorDoProximoDia;
}

const resultsEx2 = totalSelled(arrayTotal, hamburgerPrice, 0);
console.log(resultsEx2);

console.log('');
console.log('ex 3');
console.log('');

const menuRestaurant = {
  maca: 2,
  tomate: 1,
  alface: 1,
  saladaMista: 5,
  ovosCozidosUnidade: 2,
  soup: 12,
  riceWithFries: 8,
  steak: 13,
};

function listagemDeItensCardapio(lista) {
  for (const i in lista) {
    console.log(`item ${i} : R$${lista[i]}`);
  }
}

listagemDeItensCardapio(menuRestaurant);
/*
console.log('');
console.log('ex 4');
console.log('');

const cartRestaurant = {
  soup: 2,
  riceWithFries: 2,
  steak: 4,
};

function calcularTotalConta(lista, listaPedidos) {
  let total = 0;
  for (const item in listaPedidos) {
    if(item in lista) {
      total += lista[item] * listaPedidos[item];
    }
  };
  return total;
};

const ex4 = calcularTotalConta(menuRestaurant, cartRestaurant);
console.log(`O total gasto foi ${ex4}`);
*/
console.log('');
console.log('ex 5');
console.log('');

const cardapioArray = [
  'Hamburguer',
  'batata frita',
  'refrigerante',
  'cachorro quente',
];

function listagemItensCardápio(lista) {
  for (const i of lista) {
    console.log(i);
  }
}

listagemDeItensCardapio(cardapioArray);

console.log('');
console.log('ex 6');
console.log('');

const cart = [
  {
    nome: 'soup',
    qtd: 2,
  },
  {
    nome: 'riceWithFries',
    qtd: 2,
  },
  {
    nome: 'steak',
    qtd: 4,
  },
];

function calcularTotalConta(cardapio, pedidoCliente) {
  let totalEx6 = 0;
  for (const pedido of pedidoCliente) {
    if(pedido.nome in cardapio) {
      totalEx6 += cardapio[pedido.nome] * pedido.qtd;
    };
  };
  return totalEx6;
}

const ex6 = calcularTotalConta(menuRestaurant, cart);
console.log(ex6);
