// Switch Case
const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay()
let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break         
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break
    case 6:
        diaSemanaTexto = 'Sábado';
        break  
    default:
        diaSemanaTexto = 'Dia da semana inválido';
}

console.log(diaSemanaTexto)