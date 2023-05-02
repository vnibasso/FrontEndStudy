/*
Operadores de Comparação

> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a 
== igualdade(valor)
=== igualdade estrita(valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

// console.log(10 > 5);
// console.log(10 > 10);

// console.log(10 >= 10);
// console.log(10 >= 15);


// console.log(10 < 15);
// console.log(10 < 8);

// console.log(10 <= 15);
// console.log(10 <= 8);

/*--------------------------------------*/

const num1 = 10; // number
const num2 = '10'; // string

console.log(num1 == num2); //true
console.log(num1 === num2); //false
console.log(num1 === parseInt(num2)); //true

console.log(num1 != num2); //false
console.log(num1 !== num2); //true
console.log(num1 !== parseInt(num2)); //false


