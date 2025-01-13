const valores = [100, 200, 300, 400, 500];

const result = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(result);

//usando REST
function calcularVarlores(...valores) {
  return valores.reduce((acumulador, valor) => acumulador + valor, 0);
}

console.log(calcularVarlores(100, 200, 300, 400, 500));
