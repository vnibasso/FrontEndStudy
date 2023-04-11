const numero3 = 6; // após atribuir um valor ao const não é possível altera-lo, apenas adicionar novos valores caso seja um array ou objeto.

numero3 = 4; // esta linha resultará em um erro, pois numero3 sendo uma const não pode ter um novo valor atribuído

console.log(numero3);

// ============================================================================

{

let numero2 = 5;  // let, assim como o const, tem escopo local, só sendo acessível dentro de um bloco de comandos {}, por ex.

}
 
console.log(numero2) // esta linha resultará em um erro, pois numero2 sendo uma let é acessada somente dentro de um bloco


// ============================================================================

{
var numero1 = 4; // var tem escopo global, sendo acessada independente se estiver dentro ou fora de um bloco
}

console.log(numero1)
