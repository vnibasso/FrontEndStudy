// quando um objeto tem uma função chama-se método
var aluno = {
    nome:"Igor", 
    notas:[7, 8],

    media: function (n1, n2) {
        return(n1 + n2) / 2;
    }
}

var aluno1 = {
    nome:"João", 
    notas:[6, 8],

    media: function (n1, n2) {
        return(n1 + n2) / 2;
    }
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

// exemplo 1 de como utilizar uma função para calcular a média de alunos 

// ==============================================================

// exemplo 2 de como calcular a média de alunos utilizando a função 
// fora do objeto, acionando a mesma dentro do objeto

function calcMedia (n1, n2) {
    return(n1 + n2) / 2;
}

var aluno = {
    nome:"Igor", 
    notas:[7, 8],

    media: calcMedia
}

var aluno1 = {
    nome:"João", 
    notas:[6, 8],

    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

// ==============================================================

// exemplo 3 de como calcular a média de alunos utilizando a função 
// fora do objeto, acionando a mesma dentro do objeto

function calcMedia1 () {
    return(this.notas[0] + this.notas[1]) / 2; // this indica que que o valor .notas[0] se refere exclusivamente ao valor do objeto em questão
}

var aluno = {
    nome:"Igor", 
    notas:[7, 8],

    media: calcMedia1
}

var aluno1 = {
    nome:"João", 
    notas:[6, 8],

    media: calcMedia1
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());












