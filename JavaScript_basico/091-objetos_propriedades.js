// para objetos utilizar valores entre chaves
var aluno = {nome:"Igor", notas:[7.5, 5.0]}

console.log(aluno.nome); // ou
console.log(aluno["nome"]); // nas duas opções retornará "Igor"

console.log(aluno.notas[1]); // retorna 5.0
console.log(aluno["notas"][0]); // retorna 7.5

// adicionando novos valores ao objeto
aluno.matricula = 12345; // ou
aluno["sobrenome"] = "Oliveira";

// ====================================

// adicionando novos valores ao objeto sendo este uma variável
var novaProp = "Situação";

aluno[novaProp] = "Aprovado";

console.log(aluno);

// ====================================

// criando um objeto vazio e adicionando propriedades 
var aluno1 = new Object();

aluno1.nome = "Vinícius";
aluno1.idade = 28 + " anos";

console.log(aluno1);














