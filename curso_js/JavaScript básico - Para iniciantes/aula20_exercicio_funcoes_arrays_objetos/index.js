// function meuEscopo () {
//     const form = document.querySelector('.form');

//     let contador = 1;
//     function receberEventoForm (evento) {
//         evento.preventDefault(); 
//         console.log(`Form não foi enviado ${contador}.`);
//         contador++;
//     }
//     form.addEventListener('submit', receberEventoForm);
// }
// meuEscopo();

//---------------------------------------------------------------

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        const pessoa = {
            Nome: nome.value,
            Sobrenome: sobrenome.value,
            Peso: peso.value,
            Altura: altura.value
        };

        pessoas.push(pessoa);

        console.log(pessoas);

        resultado.innerHTML += `<br><br> Nome: ${pessoa.Nome}  <br>`;
        resultado.innerHTML += `Sobrenome: ${pessoa.Sobrenome}  <br>`;
        resultado.innerHTML += `Peso: ${pessoa.Peso} kg <br>`;
        resultado.innerHTML += `Altura: ${pessoa.Altura} m <br>`;   
    }
    
    form.addEventListener('submit', receberEventoForm);
}
meuEscopo();








