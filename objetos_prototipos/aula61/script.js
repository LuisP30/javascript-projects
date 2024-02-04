// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes
// Prototypes

/* Todo objeto tem uma referência interna para um protótipo (__proto__) 
que vem da propriedade prototype da função construtora que foi usada 
para criá-lo */
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome,
    /* Sempre que procuro um atributo ou método dentro de um objeto, primeiro o motor
    do JavaScript irá procurar dentro do próprio objeto e depois dentro da cadeia de
    protótipos até o topo até encontrar ou não tal método ou atributo. */
    // Devido as intruções passadas acima, esse método abaixo irá ser executado ao invés
    // do método que foi criado dentro de prototype.
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

// Criando o método nome completo dentro do prototype de Pessoa
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;

// Instância
const pessoa1 = new Pessoa('Luis', 'Henrique') // <- Pessoa instanciada pela função construtora Pessoa()
console.dir(pessoa1)
