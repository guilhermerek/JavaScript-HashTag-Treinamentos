const funcionarios = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

const funcionariosComId = funcionarios.map((nome, index) => ({
  id: index + 1,
  Nome: nome,
}));

console.log(funcionariosComId);
