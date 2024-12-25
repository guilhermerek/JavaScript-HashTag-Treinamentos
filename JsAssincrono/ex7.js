function buscarDadosApi(nome) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nome: nome, idade: 20 });
    }, 3000);
  });
}

async function buscarDados(nome) {
  const results = await buscarDadosApi(nome);
  console.log(results);
}

buscarDados('Cebolinha');
