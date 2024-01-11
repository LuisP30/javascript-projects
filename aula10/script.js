let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Outra forma de resolver
// let varControl = varA

// varA = varB
// varB = varC
// varC = varControl

// console.log(varA, varB, varC)

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);