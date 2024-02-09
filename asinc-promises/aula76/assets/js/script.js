// Fetch API e Axios (JSON)

// Utilizando a Fetch API para fazer uma requisição HTTP para o arquivo 'pessoas.json'
// e manipular o JSON retornado para adicionar os elementos na página.
// fetch('pessoas.json')
// .then(resposta => resposta.json())
// .then(json => elementosNaPagina(json))

// Utilizando o Axios para fazer uma requisição HTTP para o arquivo 'pessoas.json'
// e manipular os dados retornado para adicionar os elementos na página.
axios('pessoas.json')
    .then(resposta => elementosNaPagina(resposta.data))

// Função que recebe um JSON como argumento e adiciona os elementos na página.
function elementosNaPagina(json){
    // Cria uma tabela para exibir os dados das pessoas.
    const table = document.createElement('table')

    // Itera sobre cada objeto do JSON (cada pessoa).
    for(let pessoa of json){
        // Cria uma linha <tr> para cada pessoa na tabela.
        const tr = document.createElement('tr')

        // Cria uma célula <td> para o nome da pessoa e define o conteúdo como o nome da pessoa.
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        // Cria uma célula <td> para a idade da pessoa e define o conteúdo como a idade da pessoa.
        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        // Adiciona a linha <tr> à tabela.
        table.appendChild(tr)
    }

    // Seleciona o elemento com a classe 'resultado'.
    const resultado = document.querySelector('.resultado')

    // Adiciona a tabela ao elemento selecionado.
    resultado.appendChild(table)
}
