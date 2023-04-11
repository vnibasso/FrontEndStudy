// function criarAluno(nome, n1, n2) {

//     return  {
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function() {
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }
// // criando itens no array
// var turma = [
//         criarAluno("Igor", 7, 8),
//         criarAluno("José", 9, 6),
//         criarAluno("Mateus", 5, 8)  
//  ]


// for (var aluno of turma){
//     console.log(aluno.nome + "-" + aluno.media());
// }

// ======================================================================

function aluno (nome, n1, n2) {
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}

a = new aluno("Igor", 8, 7),
b = new aluno("Vinícius", 10, 10),
c = new aluno("João", 8, 10)

console.log(b)





