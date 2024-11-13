/*Exercício 1: Crie um objeto chamado Venda com as propriedades produto, quantidade,
precoUnitario e desconto. Adicione um método chamado calcularTotal que calcule o
valor total da venda, considerando o desconto. Adicione também um método chamado
detalharVenda que retorne uma string detalhando a venda.*/

const venda = {
  produto: '',
  quantidade: 0,
  precoUnitario: 0,
  desconto: 0,

  calcularTotal: function () {
    let total = this.quantidade * this.precoUnitario;
    total = total - total * (this.desconto / 100);
    return total;
  },

  detalharVenda: function () {
    console.log(
      `Venda do produto: ${this.produto}, em ${
        this.quantidade
      } unidades, o preço unitário foi de: ${this.precoUnitario} e ${
        this.desconto
      }%
        de desconto, o valor total ficou em: RS ${this.calcularTotal()}`
    );
  },
};

Object.defineProperty(venda, 'produto', { value: 'mousepad' });
Object.defineProperty(venda, 'quantidade', { value: 5 });
Object.defineProperty(venda, 'precoUnitario', { value: 50 });
Object.defineProperty(venda, 'desconto', { value: 10 });

venda.detalharVenda();
console.log(venda.calcularTotal());

/*Exercício 2: Adicione um método ao objeto Venda chamado aplicarDesconto que recebe
um valor percentual e atualiza o desconto da venda. Aplique um desconto de 10% e verifique o
valor total com o método calcularTotal.*/

Object.assign(venda, {
  aplicarDesconto: function (desc) {
    this.desconto = desc;
  },
});

venda.aplicarDesconto(5);
console.log(venda.calcularTotal());

/*Exercício 3: Adicione um método ao objeto Venda chamado atualizarQuantidade que
recebe um número e altera a quantidade do produto na venda. Atualize a quantidade e
verifique o total da venda após a atualização.*/

Object.assign(venda, {
  atualizarQuantidade: function (qtd) {
    this.desconto = qtd;
  },
});

/*Exercício 4: Adicione um método chamado verificarEstoque que recebe a quantidade
disponível em estoque e retorna uma mensagem fixa indicando se a venda pode ser realizada
ou se é necessário ajustar a quantidade.*/

Object.assign(venda, {
  verificarEstoque: function () {
    if (this.quantidade > 0) {
      console.log(
        'A venda pode ser realizada, há no estoque: ' + this.quantidade
      );
    } else {
      console.log(
        'Não há quantia disponivél para venda, disponivel no momento: ' +
          this.quantidade
      );
    }
  },
});

venda.verificarEstoque();

/*Exercício 5: Retorne um array com todas as suas propriedades e valores do objeto Venda.
Exiba as propriedades e valores em um formato legível.*/

console.log(Object.entries(venda));

/*Exercício 6: Obtenha um array com os nomes de todas as propriedades do objeto Venda.
Exiba as propriedades do objeto.*/

console.log(Object.keys(venda));

/*Exercício 7: Obtenha um array com todos os valores das propriedades do objeto Venda.
Exiba os valores das propriedades.*/

console.log(Object.values(venda));

/*Exercício 8: Verifique se o objeto Venda possui a propriedade desconto. Retorne a
verificação diretamente em uma mensagem fixa.*/

console.log(Object.hasOwn(venda, 'desconto'));

/*Exercício 9: Crie um novo objeto NovaVenda que contenha as mesmas propriedades e
valores de Venda, mas com um produto e quantidade diferentes. Exiba o novo objeto
NovaVenda.*/

let novaVenda = {};

Object.assign(novaVenda, venda);
novaVenda.produto = 'monitor';
novaVenda.quantidade = 15;
console.log(novaVenda);

/*Exercício 10: Adicione uma nova propriedade data ao objeto Venda, definindo-a como não
enumerável. Exiba todas as propriedades do objeto Venda e, em seguida, exiba o valor da
nova propriedade data separadamente.*/

Object.defineProperty(venda, 'data', {
  value: '15-11-2024',
  enumerable: false,
  writable: true,
  configurable: true,
});
console.log(venda);
console.log(venda.data);

/*Exercício 11: Crie um novo objeto DescontoEspecial que herde as propriedades do objeto
Venda, mas com um desconto fixo de 20%. Exiba as propriedades do novo objeto e verifique
se o desconto foi aplicado corretamente.*/

let ex11 = Object.create(venda);
ex11.aplicarDesconto(20);

console.log(ex11.detalharVenda());

/*Exercício 12: Remova a propriedade desconto do objeto Venda. Verifique se a propriedade
foi removida com sucesso e exiba as propriedades restantes do objeto*/

delete venda.desconto;
console.log(venda);
