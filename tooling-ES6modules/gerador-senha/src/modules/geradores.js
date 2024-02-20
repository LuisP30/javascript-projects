// Função que irá gerar números aleatórios
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

// A função fromCharCode retorna um caractere de acordo com o número passado como argumento (Código ASCII)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91)) // A função não inclui o último número
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48, 58))
const simbolos = ',.;!@#$%*[]()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)] 


export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = []
    // Convertendo valor para um número
    qtd = Number(qtd)

    for(let i = 0; i < qtd; i++){
        // Avaliação de curto-circuito. Se maiusculas for verdadeiro irá executar o código ao lado.
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolo())
    }
    return senhaArray.join('').slice(0, qtd)
}