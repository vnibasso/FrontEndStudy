/*
Operadores Lógicos
&& -> AND -> E
|| -> or -> ou
! -> NOT -> NÂO
*/

console.log(true && true && true); // Todas as expressões precisam ser verdadeiras pra retornar true
console.log(true && true && false); // false

console.log(true || false || false); // Se uma expressão for verdadeira retornará true
console.log(false || false || false); // false

console.log(!true); // Nega o valor e inverte a expressão retornando false
console.log(!false); // Nega o valor e inverte a expressão retornando true


//-------------------------------------------------

// const usuário = 'Vinícius';
// const senha = '12345';

// const vaiLogar = usuário === 'Vinícius' && senha === '12345';
// console.log(vaiLogar);