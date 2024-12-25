function numAleatorioMaiorQue1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const aux = Math.random() * 10;
      if (aux > 1) {
        resolve(aux, ' Maior do que 1.');
      } else {
        reject(new Error('O número foi menor do que 1', aux));
      }
    }, 3000);
  });
}

async function buscarDados() {
  try {
    const result = await numAleatorioMaiorQue1();
    console.log(result);
  } catch (error) {
    console.error(error);
    console.log('Já que o número foi menor, considere 1.01');
  }
}

buscarDados();
