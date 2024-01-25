// While e Do While
/* Geralmente quando utilizamos o laço for, sabemos mais ou menos quantas
vezes ele será executado. No caso do laço While, nós o utilizamos quando não
temos base de quantas vezes esse laço será executado. */

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max= 50;
let rand = 0;

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
// Do while primeiro executa o código depois checa a condição
do{
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);