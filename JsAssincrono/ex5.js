const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Erro, Promise rejeitada');
  }, 2000);
});

// promise2.then(console.log).catch(console.error);
promise2.then(console.log).catch((erro) => console.log(erro)); //as duas possibilidades são possiveis
