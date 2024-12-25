/*const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise1 concluida com sucesso');
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise2 concluida com sucesso!');
  }, 3000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise3 concluida com sucesso!');
  }, 3000);
});*/

async function buscarDados() {
  try {
    // Promise.all([promise1, promise2, promise3]).then(console.log);

    const results = await Promise.all([
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('Teste 1');
        }, 2000);
      }),
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('Teste 2');
        }, 2000);
      }),
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('Teste 3');
        }, 2000);
      }),
    ]);
    console.log(results);
  } catch (error) {
    console.error('ERROR: ', error.message);
  }
}

buscarDados();
