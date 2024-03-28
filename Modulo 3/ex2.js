const primeiraVariavel = true;
const segundaVariavel = false;
const resultado = primeiraVariavel && segundaVariavel; //false
const resultado2 = primeiraVariavel || segundaVariavel; //true
console.log(resultado);
console.log(resultado2);
const terceiraVariavel = false;
const resultado3 = resultado && terceiraVariavel; // false
const resultado4 = resultado || terceiraVariavel; // false
const resultado5 = resultado2 && terceiraVariavel; // false
const resultado6 = resultado2 || terceiraVariavel; // true
console.log(resultado3);
console.log(resultado4);
console.log(resultado5);
console.log(resultado6);