"use strict";

var usuario = {
  nome: 'Carlos',
  idade: '25',
  endereco: {
    cidade: 'Sao Joao',
    estado: 'PR'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);
