// Funções construtoras
// São moldes para gerar novos objetos
// Utiliza-se a palavra new
/* Seu nome começa com letra maiúscula */
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Criando variáveis privadas:
    const metodoInterno = function(){} // esse método não pode ser acessado fora da função Pessoa()
    /* A palavra new cria um novo objeto vazio, faz o this apontar para esse objeto
    e então retorna de forma implicita esse objeto criado (o que tira a necessidade 
    de utilizar o return) */
    this.metodo = function(){
        console.log(`${this.nome}: sou um método`)
    }
}
// Instanciando uma nova pessoa. (Sempre utilizar a palavra new para iniciar uma função construtora)
const p1 = new Pessoa('Luis', 'Henrique')
p1.metodo()