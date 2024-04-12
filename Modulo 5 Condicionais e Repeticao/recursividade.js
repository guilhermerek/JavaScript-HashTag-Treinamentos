function calculateFibonacci(termo) {
  if (termo === 0) {
    return 0;
  }
  if (termo === 1) {
    return 1;
  }
  return calculateFibonacci(termo - 1) + calculateFibonacci(termo - 2);
}

console.log(`O valor do termo 20 de Fibonnaci é ${calculateFibonacci(20)}`);
