function calcMedia1() {
    return(this.notas[0] + this.notas[1]) / 2;
}

function calcIdade() {
    return (2023 - this["Ano de Nascimento"]);
}

var aluno1 = {
    nome:"Igor", 
    notas:[7, 8],
    
    media: calcMedia1,
    idade: calcIdade
}

aluno1["Ano de Nascimento"] = 1985;

var aluno2 = {
    nome:"Vinícius", 
    notas:[6, 7.5],
    

    media: calcMedia1,
    idade: idade2
}


aluno2["Ano de Nascimento"] = 1994;


console.log(aluno1.nome);
console.log(aluno1.media());
console.log(aluno1.idade());

console.log(aluno2.nome);
console.log(aluno2.media());
console.log(aluno2.idade());

console.log(aluno2)




















