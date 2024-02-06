// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes/static
// Métodos de instância e estáticos
/* Os métodos estáticos em JavaScript são úteis quando você tem 
uma funcionalidade associada à classe como um todo, em vez de uma 
instância específica da classe. (ChatGPT) */
class ControleRemoto{
    constructor(tv){
        this.tv = tv; // tv que o controle irá controlar
        this.volume = 0;
    }
    // Método de instância
    aumentarVolume(){
        this.volume += 2
    }
    // Método de instância
    diminuirVolume(){
        this.volume -= 2
    }
    // Método estático
    static trocaPilha(){
        // Métodos estáticos não tem acesso aos dados da instância
    }
}
const c1 = new ControleRemoto('SEMP')
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
// O método estático só é acessado através da classe construtora
ControleRemoto.trocaPilha()
console.log(c1)