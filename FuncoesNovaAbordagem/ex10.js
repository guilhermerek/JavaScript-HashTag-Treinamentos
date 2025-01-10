const precoProduto = 200;
const percentualDesconto = 15;

function calcularDesconto(preco, desc) {
  const aux = (preco * desc) / 100;
  return preco - aux;
}
console.log(calcularDesconto(precoProduto, percentualDesconto));

const calcularDescontoComArrowFunction = (preco, desc) => {
  const aux = (preco * desc) / 100;
  return preco - aux;
};

console.log(calcularDescontoComArrowFunction(precoProduto, percentualDesconto));
