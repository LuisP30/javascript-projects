const nome = Luis;
const sobrenome = Henrique;
const idade = 20;
const peso = 63;
const alturaEmM = 1.60;
let imc = peso / (alturaEmM*alturaEmM);
let anoNascimento = 2023 - idade

// template strings (semelhante a f-strings no python)
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg\ntem ${alturaEmM} e seu IMC é de ${imc} \n ${nome} nasceu em ${anoNascimento}`);