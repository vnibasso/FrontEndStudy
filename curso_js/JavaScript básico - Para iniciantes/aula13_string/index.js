// uma forma de imprimir aspas é utilizando barra invertida
let umaString = "Um \"texto\"";

console.log(umaString);

//-----------------------------------------------------------

let string = "Um texto";

console.log(string.charAt(6)); //.chartAt imprime a letra referente ao índice 6 

//-----------------------------------------------------------

let string2 = "Um texto";

console.log(string2.charCodeAt(6)); //.charCodeAt imprime o código referente à tabela ASCII 

//-----------------------------------------------------------

let string3 = "Um texto";

console.log(string3.concat(' em um lindo dia')); //concatena a variável com uma nova string

//-----------------------------------------------------------

let string4 = "Um texto";

console.log(string4.indexOf('o')); //iidentifica o número do índice da letra o
console.log(string4.indexOf('o' , 5)); //...

console.log(string4.lastIndexOf('e')); //iidentifica o número do índice da letra e partindo do final para o começo

//-----------------------------------------------------------

let string5 = "Um texto";
let string6 = "O rato roeu a roupa do rei de Roma";

console.log(string5.replace(/Um/ , "Outro")); // Substituit uma string por outra
console.log(string6.replace(/r/g , "#")); // utilizando a flag //g substitui todas as letras r do texto
console.log(string6.length) //retorna o número de caracteres

//-----------------------------------------------------------

let string7 = "O rato roeu a roupa do rei de Roma.";

console.log(string7.slice(2 , 6)); // isola o texto da posição 2 à 6
console.log(string7.slice(-5)); //isola o texto partindo dos últimos 5 caracteres

//-----------------------------------------------------------

let string8 = "O rato roeu a roupa do rei de Roma.";

console.log(string8.split('')); // separa todos os caracteres do texto
console.log(string8.split(0 , 1));

//-----------------------------------------------------------

let string9 = "O rato roeu a roupa do rei de Roma.";

console.log(string9.toUpperCase()); // converte todas as letras em maiúsculas
console.log(string9.toLowerCase()); // converte todas as letras em minúsculas



