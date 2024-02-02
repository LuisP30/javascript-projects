// Concatenando arrays
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
// método concat - Juntando os dois arrays em um único array
const a3 = a1.concat(a2)
console.log(a3)
// Também posso passar mais valores como parâmetro
const a4 = a1.concat(a2, [7, 8, 9], 'Luis')
console.log(a4)
// ... rest -> ... spreat
// Espalhando o array (spreat e concat farão a mesma coisa)
const a5 = [...a1, 'Luis',...a2, ...[7, 8, 9]] // Espalhei três arrays dentro de a5
console.log(a5)