// Irei exportar coisas de app.js
const nome = 'Luis';
export const sobrenome = 'Henrique';

function soma(x, y){
    return x + y;
};
// Permitindo a exportação da variável nome para outro arquivo
export{ nome }; // Utilizando AS posso exportar essa variável com outro nome
// Exportando mais coisas:
export{ soma };
// Um módulo só pode ter uma exportação default
// export default function funcao(){
//     console.log('Hello World');
// };
export {sobrenome as default} // Deixando a exportação de sobrenome como default