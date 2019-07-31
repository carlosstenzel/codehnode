const usuario = {
    nome: 'Carlos',
    idade: '25',
    endereco: {
        cidade: 'Sao Joao',
        estado: 'PR',
    },
};

const {nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

