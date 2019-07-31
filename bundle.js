"use strict";

var usuario = {
  nome: 'Carlos',
  idade: '25',
  endereco: {
    cidade: 'Sao Joao',
    estado: 'PR'
  }
};

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
