const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('UM Segundo');
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('DOIS segundos');
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('TRẼS segundos');
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then(console.log);
