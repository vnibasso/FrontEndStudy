function criarAluno(nome, n1, n2) {

    return  {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
        criarAluno("Igor", 7, 8),
        criarAluno("José", 9, 6),
        criarAluno("Mateus", 5, 8)  
 ]

 var aluno = turma[1];

 console.log(aluno)




