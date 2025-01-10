const medicamentos = [
  { nome: 'Paracetamol', estoque: 150, preco: 5.99 },
  { nome: 'Amoxicilina', estoque: 80, preco: 9.5 },
  { nome: 'Ibuprofeno', estoque: 200, preco: 7.8 },
  { nome: 'Ritalina', estoque: 0, preco: 99.8 },
  { nome: 'Clonazepam', estoque: 0, preco: 32.8 },
];

const listaMedicamento = document.getElementById('lista-medicamentos');
let aux = 0;
medicamentos.forEach((medicamento) => {
  if (medicamento.estoque === 0) {
    aux++;
    const li = document.createElement('li');
    li.textContent = `Medicamento: ${medicamento.nome} Quantidade: ${medicamento.estoque}`;
    listaMedicamento.appendChild(li);
  }
});
const li = document.createElement('li');
li.textContent = `Quantidade de Medicamentos em falta: ${aux}`;
listaMedicamento.appendChild(li);
