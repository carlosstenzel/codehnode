// REST

const usuario = {
    nome: 'Carlos',
    idade: 25,
    empresa: 'CodeHamper'
};

//armazena o resto fora nome na variavel resto
const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);