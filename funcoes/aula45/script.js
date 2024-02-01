// Factory Functions
function criaPessoa(nome, sobrenome, altura, peso){ // Função fábrica
    return { 
        nome, 
        sobrenome,
        altura,
        peso,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },
        // Quando temos funções dentro de objetos chamamos de métodos
        fala: function(assunto = 'falando sobre nada'){
            // A palavra this está se referindo ao objeto que está chamando o método
            return `${this.nome} está ${assunto}`
        },
        // Eu posso utilizar a palavra get na frente de um método para que ele
        // se comporte como um atributo
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }

    }
}

const p1 = criaPessoa('Nome', 'Sobrenome', 1.6, 67)
console.log(p1.imc) // Utilizando get a frente desse método não preciso utilizar parênteses
p1.nomeCompleto = 'Luis Henrique'
console.log(p1.fala('falando sobre JS'))
console.log(p1.nomeCompleto)