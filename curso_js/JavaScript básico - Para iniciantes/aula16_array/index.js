const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos[0]);

//-------------------------------------------------

alunos[0] = 'Eduardo'; // altera o valor do indice zero do array
alunos[3] = 'Luiza'; // adiciona um novo valor ao array
console.log(alunos);

//-------------------------------------------------

alunos.push('Fábio'); // adiciona um novo valor no final do array
alunos.unshift('Vinícius'); // adiciona um novo valor no início do array
console.log(alunos);

//-------------------------------------------------

alunos.pop(); // remove o último elemento do array
alunos.shift(); // remove o primeiro elemento do array
console.log(alunos);

//-------------------------------------------------

// delete alunos[1]; // deleta o indice 1 sem alterar o indice dos demais elementos, o indice 1 se torna um undefined
// console.log(alunos);

//-------------------------------------------------

console.log(alunos.slice(0, 3))  // imprime uma fatia do array partindo do incice 0 ao 2  

//-------------------------------------------------

console.log(typeof alunos); // verifica o tipo da constante retornando object, pois um array é um objeto
console.log(alunos instanceof Array); // verifica se a const alunos é uma instância de array
