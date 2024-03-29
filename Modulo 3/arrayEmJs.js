const investimentoMensal = [
  100, 200, 300, 400, 500, 600, 700, 800, 90, 20, 100, 100,
];

console.log(investimentoMensal);
console.log(`O valor investido em Janeiro foi: ${investimentoMensal[0]}`);
console.log(`O valor investido em Outubro foi: ${investimentoMensal[9]}`);
console.log(`O valor investido em ... foi: ${investimentoMensal[12]}`); //posição 12 não existe, undefined
