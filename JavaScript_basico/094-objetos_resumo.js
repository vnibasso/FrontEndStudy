// funcção para criação de um objeto vazio
// utiluzando propriedades nome e sobrenome
function obj(n, s){
    
    return { nome:n , sobrenome:s}

}

var a = obj("Vinícius","Basso");
var b = obj("João","Garcia")

console.log(a.nome)

// ===========variação======================

function obj2(n, s){
    
    this.nome = n, 
    this.sobrenome = s
}

var c = new obj2("Vinícius","Basso");
var d = new obj2("João","Garcia")

console.log(c.nome)