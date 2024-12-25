function getPromise() {
  const minhaPromisse = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promisse resolvida');
    }, 1000);
  });
  return minhaPromisse;
}
getPromise().then(console.log);
