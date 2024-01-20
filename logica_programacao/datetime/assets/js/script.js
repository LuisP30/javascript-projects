function meuEscopo(){
    // Criando um parágrafo
    const paragrafo = document.createElement('p');
    // Atribuindo uma classe a este parágrafo
    paragrafo.classList.add('tempo');
    // Selecionando um elemento através da classe criado no HTML
    const containerData = document.querySelector('.container-tempo');
    // Adicionando o parágrafo que criei no JavaScript ao elemento crido no HTML (com classe container-tempo)
    containerData.appendChild(paragrafo);
    // Criando uma função para capturar o dia da semana da data recebida
    function retornaDia(data){
        // Utilizando um array não é necessário fazer um switch case
        let diaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
        return diaSemana[data];
    }
    // Criando uma função capturar o mês da data
    function retornaMes(data){
        let mes;
        // Poderia utilizar um array que pega o elemento na posição data como feito na função acima
        switch(data){
            case 0: mes = 'Janeiro';
            return mes
            case 1: mes = 'Fevereiro';
            return mes
            case 2: mes = 'Março';
            return mes
            case 3: mes = 'Abril';
            return mes
            case 4: mes = 'Maio';
            return mes
            case 5: mes = 'Junho';
            return mes
            case 6: mes = 'Julho';
            return mes
            case 7: mes = 'Agosto';
            return mes
            case 8: mes = 'Setembro';
            return mes
            case 9: mes = 'Outubro';
            return mes
            case 10: mes = 'Novembro';
            return mes
            case 11: mes = 'Dezembro';
            return mes
        }
    }
    // Criando função para colocar zeros à esquerda da minha hora e do minuto:
    function zeroEsquerda(hora){
        let horaComZero = hora>=10?hora:`0${hora}`
        return horaComZero
    }
    const data = new Date();
    const paragrafoTempo = document.querySelector('.tempo')
    paragrafoTempo.innerHTML = `${retornaDia(data.getDay())}, ${data.getDate()} de ${retornaMes(data.getMonth())} de ${data.getFullYear()} <br> ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
}
meuEscopo()

// // Maneira mais simples de resolver esse exercício:
// // Criando um parágrafo
// const paragrafo = document.createElement('p');
// // Atribuindo uma classe a este parágrafo
// paragrafo.classList.add('tempo');
// // Selecionando um elemento através da classe criado no HTML
// const containerData = document.querySelector('.container-tempo');
// // Adicionando o parágrafo que criei no JavaScript ao elemento crido no HTML (com classe container-tempo)
// containerData.appendChild(paragrafo);

// const paragrafoTempo = document.querySelector('.tempo')
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short',
// };
// paragrafoTempo.innerHTML = data.toLocaleString('pt-BR', opcoes)