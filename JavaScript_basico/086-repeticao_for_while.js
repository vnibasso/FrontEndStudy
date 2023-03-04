var numero = 5;

for (var i = 0; i < numero; i++) {
    console.log("Executar for, pela " + i + " vez")
}

console.log("Acabou")

// ====================================================

var numero = 5;

while (numero < 10) {

    console.log("Número " + numero);
    numero++;

}

console.log("Acabou")

// ====================================================

// Math.random cria um número aleatório.
var numero = Math.random() * 100;

while (numero < 90 ) {

    console.log(numero);
    numero = Math.random() * 100;

}

console.log(numero);
console.log("Acabou")
