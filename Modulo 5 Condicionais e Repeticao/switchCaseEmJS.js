const usuario = { time: 'Sao Paulo' };

switch (usuario.time) {
  case 'Sao Paulo':
    console.log('Bem vindo, torcedor ...!');
    break;
  default://ultima linha do switch case
    console.log('Mensagem padrão..');
}

//usar switch case quando já tiver algo "concreto", no caso o nome do time de futebol
//em grande quantia melhora a legibilidade do código e fica algo limpo.