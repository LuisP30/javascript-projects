// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map
// Objeto Map()
const pessoas = [
    {id: 3, nome: 'Luis' },
    {id: 1, nome: 'Henrique' },
    {id: 2, nome: 'Pimenta' }
]
// const novasPessoas = {};
// for(const pessoa of pessoas ){
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa}
// }
// No Objeto JavaScript a chave só pode ser um simbol ou string

// Agora terei um Map onde não será modificada a sequência dos objetos
// Minha chave se manteve sendo um number
const novasPessoas = new Map();
for(const pessoa of pessoas ){
    // Pegando o id de cada pessoa por meio de atribuição via desestruturação
    const { id } = pessoa;
    // Acima poderia fazer também: const id = pessoa.id;

    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas)
// Obtendo a pessoa 3 do Map
console.log(novasPessoas.get(3))

// Iterando o mapa.
for(const pessoa of novasPessoas){
    console.log(pessoa)
    // Retorna um array a cada iteração com um índice com a chave id e outra com o valor da chave
}

// for(const [identificador, {id, nome}] of novasPessoas){ Em novas pessoas posso utilizar métodos como: keys(), values()
//     console.log(identificador, id, nome)
// }
// Eliminando uma chave:
// novasPessoas.delete(2) eliminando a pessoa com chave 2