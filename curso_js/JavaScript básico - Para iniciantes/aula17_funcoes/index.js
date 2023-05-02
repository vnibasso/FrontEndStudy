function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`);
}

saudacao('Vinícius');
saudacao('Luiz');
saudacao('Maria');

//-----------------------------------------------------

function saudacao2(nome) {
    return `Bom dia, ${nome}!`; 
}

const variavel = saudacao2('Vinícius');
console.log(variavel);

//-----------------------------------------------------

function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

//-----------------------------------------------------

function soma2(x=1,y=1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma2(4, 2);
console.log(resultado);

//-----------------------------------------------------

const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
