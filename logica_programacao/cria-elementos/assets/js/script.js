function meuEscopo(){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]
    // Selecionando a seção container do meu HTML através da classe do elemento
    const sectionContainer = document.querySelector('.container');
    // Iterando o array "elementos" com 4 objetos
    for(let i=0; i<elementos.length; i++){
        /* Capturando valores dos atributos de cada objeto dentro do array
        por meio de Atribuição via desestruturação */
        const {tag: elemento, texto: conteudo} = elementos[i]
        // Criando um elemento com a tag correspondente que o atributo do objeto possui
        const criaElemento = document.createElement(`${elemento}`)
        // Colocando o conteúdo correspondente do objeto dentro do elemento criado anteriormente
        criaElemento.innerHTML = conteudo /* Você também pode adicionar texto em um elemento com
        a função createTextNode() - Passa o texto ou variável como parâmetro */
        // Adicionando o meu elemento já com conteúdo a minha seção container
        sectionContainer.appendChild(criaElemento)

    }
}
meuEscopo()