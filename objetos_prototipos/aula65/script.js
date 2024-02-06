// Funções Fábrica + Prototypes

// Cada constante contém um objeto com um método
const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
const beber ={
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}
// Mesclando todos os métodos em um objeto apenas
const pessoaPrototype = {...falar, ...comer, ...beber}
// Outra maneira que causa o mesmo resultado
// const pessoaPrototype = Object.assign({}, falar, comer, beber)
function criaPessoa(nome, sobrenome){

    // A função fábrica criaPessoa() retorna um objeto
    // create() recebe um objeto.proto e as propriedades dentro de um objeto
    return Object.create(pessoaPrototype, {
        // Atribuindo nome e sobrenome ao objeto retornado
        nome:{
            value: nome,
        },
         sobrenome:{
            value: sobrenome,
        },
    })
}
// Não utiliza-se a palavra new por se tratar de uma função fábrica
const p1 = criaPessoa('Luis','Henrique')
p1.falar()
p1.comer()
p1.beber()