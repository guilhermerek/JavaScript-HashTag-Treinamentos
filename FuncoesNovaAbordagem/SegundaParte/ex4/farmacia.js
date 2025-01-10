const medicamentos = [
  { nome: 'Paracetamol', estoque: 150, preco: 5.99 },
  { nome: 'Amoxicilina', estoque: 80, preco: 9.5 },
  { nome: 'Ibuprofeno', estoque: 200, preco: 7.8 },
];

const listaMedicamento = document.getElementById('lista-medicamentos');

medicamentos.forEach((medicamento) => {
  const li = document.createElement('li');
  li.textContent = `Medicamento: ${medicamento.nome} Quantidade: ${medicamento.estoque}`;
  listaMedicamento.appendChild(li);
});
