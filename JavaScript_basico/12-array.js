// array length = 4 (são 4 elementos no array)
// first index = "Igor" (se refere ao primeiro elemento)
// last index = "Mariana" (se refere ao último elemento)

var alunos = new Array("Igor", "José", "Marcos", "Mariana");

console.log(alunos[0]); // imprime o primeiro valor do array

for (var i = 0; i < alunos.length; i++){
    console.log(alunos[i])
} 

// ===========================================================

var alunos = ["Igor", "José", "Marcos", "Mariana"];

for (var aluno of alunos){
    console.log(alunos)
}


