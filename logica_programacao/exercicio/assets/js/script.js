// Selecionando o elemento com classe paragrafos e salvando na variável elementos
const elementos = document.querySelector('.paragrafos')
// Capturando todas as tags de parágrafo que existem dentro de elementos
const tagsP = elementos.querySelectorAll('p')
// A variável tagsP terá como valor uma NodeList

/* Enquanto a função querySelector() pega apenas o primeira elemento que encontra
com a informação especificada no parâmetro, a função querySelectorAll() retorna
todos os elementos que encontrar com a informação passada como parâmetro */

// Capturando os estilos computados que o navegador computou do CSS do body
const estilosBody = getComputedStyle(document.body);
// Pegando o valor do background do body e salvando em uma variável
const backgroundColorBody = estilosBody.backgroundColor;
// Mudando a fonte e cor de fundo do paragrafo
for(let p of tagsP){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'red'
    // Deixando negrito
    p.style.fontWeight = 'Bold'
}