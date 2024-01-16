// BÁSICO SOBRE OBJETOS
// Criando objetos
const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 21
};
console.log(pessoa.nome)
// Criando função que cria objetos
function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}
const pessoa1 = criaPessoa('Luis', 'Henrique', 21)
console.log(pessoa1.nome)
// Métodos de objetos
const humano = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 21,
    // Métodos
    apresentarSe(){
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos`)
    }
}
// Chamando o método. É composto de objeto.método()
humano.apresentarSe()