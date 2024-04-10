function calculateFibonacci(termo) {
  let ultimoTermo = 1;
  let penultimoTermo = 0;

  if (termo === 0) {
    return 0;
  } else if (termo === 1) {
    return 1;
  }

  let iteracao = 2;

  while (iteracao <= termo) {
    let aux = ultimoTermo + penultimoTermo;
    penultimoTermo = ultimoTermo;
    ultimoTermo = aux;
    iteracao++;
  }
  return ultimoTermo;
}

console.log(`O valor do termo 7 de Fibonnaci é ${calculateFibonacci(7)}`);
