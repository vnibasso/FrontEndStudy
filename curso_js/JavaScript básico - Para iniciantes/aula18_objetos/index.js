const pessoa1 = {
    nome: 'Vinícius',
    sobrenome: 'Basso',
    idade: 25
};

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 28
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);

//---------------------------------------------

function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa3 = criarPessoa('José', 'Sasso', 31);
const pessoa4 = criarPessoa('Mateus', 'Toffolo', 28);
const pessoa5 = criarPessoa('Aline', 'Meneses', 21);

console.log(pessoa3.nome, pessoa4.nome, pessoa5.nome);

//---------------------------------------------

const pessoa6 = {
    nome: 'Vinícius',
    sobrenome: 'Basso',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();


