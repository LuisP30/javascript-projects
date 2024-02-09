// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API
// Fetch API
document.addEventListener('click', e => {
    // Adiciona um ouvinte de evento para cliques no documento.
    const el = e.target;
    const tag = el.tagName.toLowerCase()
    // Obtém o elemento que disparou o evento e obtém o nome da tag em letras minúsculas.
    
    if(tag === 'a'){
        e.preventDefault()  
        // Se o elemento clicado for um link, previne o comportamento padrão de navegação.
        
        carregaPagina(el)
        // Chama a função 'carregaPagina' passando o elemento como argumento.
    }
})

async function carregaPagina(elemento){
    // Define uma função assíncrona chamada 'carregaPagina' que recebe um elemento como argumento.
    try{
        const href = elemento.getAttribute('href');
        // Obtém o valor do atributo 'href' do elemento.
        
        const resposta = await fetch(href);
        // Usa a palavra-chave 'await' para aguardar a resolução da Promise retornada pela função 'fetch'.
        // A função 'fetch' é uma parte da Fetch API que é usada para fazer requisições HTTP assíncronas.
        
        if(resposta.status !== 200) throw new Error('Meu erro')
        // Verifica se o status da resposta é 200 (OK). Se não for, lança um erro com uma mensagem personalizada.
        
        const html = await resposta.text();
        // Usa a palavra-chave 'await' novamente para aguardar a resolução da Promise retornada pela função 'text' da resposta.
        // Isso extrai o conteúdo da resposta como texto.
        
        carregaResultado(html)
        // Chama a função 'carregaResultado' passando o conteúdo HTML da resposta como argumento.
    }catch(e){console.error(e)}
    // O código acima é o mesmo que:
    // fetch(href)
    // .then(resposta => {
    //     if(resposta.status !== 200) throw new Error('Meu erro')
    //    return resposta.text();
    // })
    // .then(html => {
    //     carregaResultado(html)
    // })
    // .catch(e => console.error(e))
}

function carregaResultado(response){  
    // Define uma função chamada 'carregaResultado' que recebe a resposta como argumento.
    
    const resultado = document.querySelector('.resultado')
    // Seleciona o elemento com a classe 'resultado'.
    
    resultado.innerHTML = response;
    // Define o conteúdo HTML do elemento selecionado com a resposta da requisição.
}

