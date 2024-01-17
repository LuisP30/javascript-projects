function meuEscopo(){
    // Abaixo está sendo mostrado duas maneiras de evitar o envio de formulário
    const formulario = document.querySelector('.form') // Posso selecionar um elemento pelo nome da tag, classe...
    const resultado = document.querySelector('.resultado')
    const pessoas = []
    // Evitando o envio do formulário para que não aconteça a atualização da página
    // formulario.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert('Dados enviados!')
    // };
    // Capturando dados do formulário
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = formulario.querySelector('.nome')
        const sobrenome = formulario.querySelector('.sobrenome')
        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')
        pessoas.push({nome: nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value})
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    
    
    formulario.addEventListener('submit', recebeEventoForm);

}
meuEscopo();