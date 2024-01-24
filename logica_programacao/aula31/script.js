// For in -> Lê os indices ou chaves do objeto
const frutas = ['Pêra', 'Maçã', 'Uva']

for(let indice in frutas){
    console.log(indice)
}

const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
    idade: 21
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}
