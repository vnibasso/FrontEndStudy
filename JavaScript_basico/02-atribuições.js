// =   x = y   x = y 
// +=  x += y  x = x + y
// -=  x -= y  x = x - y
// *=  x *= y  x = x * y
// /=  x /= y  x = x / y
// %=  x %= y  x = x % y

let a = 10;
let b = 15;

//incremento
console.log(a += 2);    //retorna 12 (a aprtir de agora a=12)

//decremento
console.log(a -= 2);    //retorna 10 (12-2 valor de a volta a ser 10)

//multiplicaçõa
console.log(a *= 2);    //retorna 20 

//divisão
console.log(a /= 2);    //retorna 10 (20/2)

//modulo
b = b % a;
console.log(b); //retorna 5




