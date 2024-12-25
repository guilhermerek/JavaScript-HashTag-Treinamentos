function buscarDadosApi(nome) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({ nome: nome, idade: 20 });
      reject('Este usuário Não existe!');
    }, 3000);
  });
}

async function buscarDados(nome) {
  try {
    const results = await buscarDadosApi(nome);
    console.log(results);
  } catch (error) {
    console.error('ERROR: ', error);
  }
}

buscarDados('Cebolinha');
