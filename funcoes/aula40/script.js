// Retorno de funções
// return -> Retorna um valor e termina a função
function criaMultiplicador(multiplicador){
    // multiplicador
    return function(n){
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2) // O valor dessas constantes será uma função
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2)) // Nesse momento a constante terá a funão anônima interna de criaMultiplicador como valor
console.log(triplica(2)) // Então esse parâmetro (2) está sendo passado para a função mais interna (a anônima)
console.log(quadriplica(2))