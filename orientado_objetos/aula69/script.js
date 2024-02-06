// Herança com classes
class Dispositivo{
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`)
            return;
        }
        this.ligado = true
    }
    desligar(){
        if(!this.ligado) return;
        this.ligado = false
    }
}
const d1 = new Dispositivo('Celular')
d1.desligar()
d1.ligar()
d1.ligar()
console.log(d1)
// Criando uma classe que estende da classe Dispositivo
// Computador herda de Dispositivo
class Computador extends Dispositivo{
    constructor(nome, cor){
        // chamando a superclasse
        super(nome); // super está chamando o construtor da superclasse
        this.cor = cor;
    }
    // Caso necessário eu também poderia reescrever os métodos de Dispositivo
    // aqui em Computador
}
// Só de criar Computador dessa forma ele já tem tudo que tem em Dispositivo
const c1 = new Computador('Computador', 'Preto')
c1.ligar()
c1.ligar()
console.log(c1)