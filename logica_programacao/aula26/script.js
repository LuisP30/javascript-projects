// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// Objeto Date
// const tresHoras = 60 * 60 * 3 * 1000; // No JavaScript são milésimos de segundo.
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date() // pegando a data atual
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString())
// const data = new Date(2019, 3, 20, 15, 14, 27); // Pegando data: Ano, mês, dia, horas, minutos e segundos (ainda posso passar os milésimos)
// Mês 0 = Janeiro... 0-11
// console.log(data.toString());
// Formato de data com string:
const data = new Date('2024-01-23 21:30:00') // Passando data e hora
console.log(data.toString())
// Pegando apenas o dia da minha data:
console.log('Dia:', data.getDate().toString())
// Pegando apenas o mês da minha data:
console.log('Mês:', data.getMonth().toString())
// Pegando apenas o ano da minha data:
console.log('Ano:', data.getFullYear().toString())
// Pegando apenas as hora da minha data:
console.log('Hora:', data.getHours().toString())
// Pegando apenas os minuto da minha data:
console.log('Minuto:', data.getMinutes().toString())
// Pegando apenas os segundos da minha data:
console.log('Segundo:', data.getSeconds().toString())
// Pegando apenas os milésimos da minha data:
console.log('Milésimos:', data.getMilliseconds().toString())
// Pegando apenas o dia da semana da minha data:
console.log('Dia semana:', data.getDay().toString()) // 0-Domingo, 6-Sábado

// Criando uma função que coloca o zero à esquerda
function zeroAesquerda(num){
    return num>=10?num:`0${num}`
}
// Criando uma função que formata data:
function formataData(data){
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const minhaData = new Date();
const dataBrasil = formataData(minhaData)
console.log(dataBrasil)