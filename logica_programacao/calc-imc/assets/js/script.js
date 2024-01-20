function meuEscopo(){
    const formulario = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pesoInvalido = document.querySelector('.peso-invalido')
    const alturaInvalida = document.querySelector('.altura-invalida')


    function recebeEvento(evento){
        evento.preventDefault();
        let peso = document.querySelector('.peso')
        let altura = document.querySelector('.altura')
        
        // Atribuindo em novas variáveis e convertendo os valores recebidos do formulário para number
        peso = parseFloat(peso.value)
        altura = parseFloat(altura.value)
        // Testand6 erros abaixo:
        if(isNaN(peso)){
            pesoInvalido.innerHTML = 'Digite um peso válido'
            resultado.innerHTML = ''
        }
        else{
            pesoInvalido.innerHTML = ''
        }
        if(isNaN(altura)){
            alturaInvalida.innerHTML = 'Digite uma altura válida'
            resultado.innerHTML = ''
        }
        else{
            alturaInvalida.innerHTML = ''
        }
        // Calculando resultados do IMC
        const imc = peso/(altura*altura)
        if(imc < 18.5){
            resultado.innerHTML = 'Abaixo do peso'
        }
        else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = 'Peso normal'
        }
        else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML = 'Sobrepeso'
        }
        else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = 'Obesidade grau 1'
        }
        else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML = 'Obesidade grau 2'
        }
        else if(imc >= 40){
            resultado.innerHTML = 'Obesidade grau 3'
        }
    }
    formulario.addEventListener('submit', recebeEvento)
}
meuEscopo()

// Recursos do JavaScript para facilitar o desenvolvimento{
/*
p = createElement('p') - Essa função cria um elemento. Nesse caso o elemento criado é um parágrafo
p.classList.add('paragrafo-class') - função que adiciona uma classe ao meu elemento
resultado.appendChild(p) - aqui estou adicionando o paragrafo que criei acima a resultado, que
provavelmente trata-se de uma div em meu HTML

target - aponta para o elemento que disparou o evento
evento.target.querySelector()

*/
