// var d = new Date(); // atribui a data atual

// console.log(d);

// var e = new Date(1994,5,09);  // atribui o ano, mês e dia, sendo 5 o index de um array com os 12 meses 
// console.log(e);

// var f = new Date("sep 05 2017 23:25"); 
// console.log(f);

// var g = new Date("01/05/1998 23:25"); 
// console.log(g);

// ======================================================================

var d = new Date("06-09-1994");

console.log(d);
console.log(d.getDay()); // Captura o dia da semana retornando o index de um array
console.log(d.getDate()); // Captura o dia
console.log(d.getMonth()); // Captura o mês sendo 5 o index de um array com os 12 meses
console.log(d.getYear()); // Captura o ano

var e = new Date(960519600000); // essa estrutura calcula a data somando os milisegundos

console.log(e);
console.log(e.setYear(1994)) // filtra e altera apenas o ano

console.log(e);