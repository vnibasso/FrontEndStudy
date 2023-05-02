let num1 = 10; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); // converte um número em uma string

//------------------------------------------------------------------

console.log(num1.toString(2)); // converte o número em numero binário

//------------------------------------------------------------------

console.log(num1.toFixed(4)); // retorna o número com quatro casas decimais

//------------------------------------------------------------------

console.log(Number.isInteger(num1)); // verifica se o número atribuído é inteiro (true)
console.log(Number.isInteger(num2)); // verifica se o número atribuído é inteiro (false)

//------------------------------------------------------------------

let temp = num1 *'olá';

console.log(Number.isNaN(temp)); // verifica se o valor de temp é um "Not a number"

//------------------------------------------------------------------

let num3 = 0.7; // number
let num4 = 0.1; // number

num3 += num4; //0.7 + 0.1 = 0.8
num3 += num4; //0.8 + 0.1 = 0.9
num3 += num4; //0.9 + 0.1 = 1.0

console.log(num3); // retorna um número impreciso 0.999999999999999999999999
console.log(Number.isInteger(num3)); // verifica se o número atribuído é inteiro (false)
console.log(parseFloat(num3.toFixed(2))); // converte o número atribuído em um inteiro 

