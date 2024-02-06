// Métodos Getters e Setters em classes
const _velocidade = Symbol('_velocidade')
class Carro{
    constructor(nome){
        this.nome = nome;
        // this.velocidade = 0; Substituindo o atributo velocidade pelo Symbol criado
        this[_velocidade] = 0
    }
    // Método get
    get velocidade(){
        return this[_velocidade]
    }
    // Método set
    set velocidade(valor){
        if(typeof valor === 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor
    }
    acelerar(){
        if(this[_velocidade] >=100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade]<=0) return;
        this[_velocidade]--
    }
}
const c1 = new Carro('Fusca')
c1.acelerar()
c1.acelerar()
console.log(c1)
console.log(c1.velocidade)