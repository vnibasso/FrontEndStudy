function aluno (nome, n1, n2) {
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,

    this.media = function () {
        return (this.nota1 + this.nota2) / 2;
    }
}



var turma = [ 
    new aluno("Igor", 8, 7),
    new aluno("Vinícius", 10, 10),
    new aluno("João", 8, 10)
]

for (var aluno of turma){
        console.log(aluno.nome + "-" + aluno.media())
}

var prb = function parabens() {
    if (this.media = 10);
    console.log("Parabéns, " + aluno.nome + "! Vc é o melhor!")
} 

console.log(prb())