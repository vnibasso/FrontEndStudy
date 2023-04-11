const nome = 'Vinícius';
const sobrenome = 'Basso';
const idade = 28;
const peso = 70;
const altura =  1.65;
let imc; peso/(altura*altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - 29;

console.log(nome, sobrenome, 'tem' , idade, 'anos, pesa', peso + 'kg');
console.log('tem', altura,'de altura e seu IMC é de',imc);
console.log(nome,'nasceu em',anoNascimento);

//template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}`);
