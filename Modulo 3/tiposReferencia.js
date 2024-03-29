let musica = {
  nome: 'Rollin',
  artista: 'Limp Bizkit',
  album: 'Chocolate Starfish and the Hot Dog Flavored Water',
};

let listaDeBandas = ['Limp Bizkit', 'Iron Maiden', 'Engenheiros do Hawaii'];

console.log(listaDeBandas[1]);

//no array lemos o indice, no objeto a propriedade.

listaDeBandas[3] = 'Deep Purple';
console.log(listaDeBandas);
listaDeBandas[0] = 'Raimundos';
console.log(listaDeBandas);
//manipulação simples de array

musica.nome = 'A mais pedida';
musica.album = 'Algum';
musica.ano = 1999;
musica.artista = 'Raimundos';
//alteração das propriedades do objeto
console.log(musica);
