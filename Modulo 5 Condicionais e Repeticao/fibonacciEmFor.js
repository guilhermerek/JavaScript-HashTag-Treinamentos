function calculateFibonacci(termo) {
  let ultimoTermo = 1;
  let penultimoTermo = 0;

  if (termo === 0) {
    return 0;
  }

  for (let iteracao = 1; iteracao < termo; iteracao++) {
    let aux = ultimoTermo + penultimoTermo;
    penultimoTermo = ultimoTermo;
    ultimoTermo = aux;
  }
  return ultimoTermo;
}

console.log(`O valor do termo 7 de Fibonnaci é ${calculateFibonacci(7)}`);
