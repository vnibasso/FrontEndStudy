//não pode criar constantes com palavras reservadas. Ex.: let, var, if, etc.
//não pode começar o nome de uma constante com um número.
//o nome de uma constante não pode conter espaços ou traços.
//não pode modificar o valor de uma constante.
//não utilize var, utilize constante.

const texto = 'quaquer texto';
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado =  resultado * 2;

console.log(resultado);
console.log(resultadoDuplicado);

console.log(typeof texto);
console.log(typeof primeiroNumero);