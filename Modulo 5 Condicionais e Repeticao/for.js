const listaComum = [1, 2, 5, 56, 4, 69, 87, 8, 4, 5, 48, 9, 7, 89];

/*let i = 0;
while (i < listaComum.length) {
  listaComum[i] += i;
  i++;
}
console.log(listaComum);*/

//com FOR

for(let i = 0; i < listaComum.length; i++) {
    listaComum[i] += i;
}
console.log(listaComum);