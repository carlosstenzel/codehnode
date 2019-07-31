const usuario = {
    nome: 'Carlos',
    idade: '25',
    endereco: {
        cidade: 'Sao Joao',
        estado: 'PR',
    },
};

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);