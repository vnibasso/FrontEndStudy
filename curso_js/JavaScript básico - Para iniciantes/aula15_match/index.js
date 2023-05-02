let num1 = 9.54578;
let num2a = Math.floor(num1); // arredonda o número para baixo
let num2b = Math.ceil(num1); // arredonda o número para cima
let num2c = Math.round(num1); // arredonda o número para o valor inteiro mais próximo


console.log(num2a);
console.log(num2b);
console.log(num2c);

//-------------------------------------------------------------

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // verifica qual é o maior valor
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6)); // verifica qual é o menor valor
console.log(Math.random()); // cria um número aleatório entre 0 e 1
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // cria um número aleatório entre 5 e 10
console.log(aleatorio);

//-------------------------------------------------------------

console.log(Math.PI); // Imprime o número de pi
console.log(2 ** 10); // Potenciação

let num3 = 9;
console.log(num3 ** 0.5); // Esta é uma forma de verificar a raiz quadrada de um número
