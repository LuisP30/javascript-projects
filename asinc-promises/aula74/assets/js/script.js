// AJAX: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
// https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest
// XMLHttpRequest (GET) (Requisições assíncronas)
const request = obj => {
    // Define uma função chamada 'request' que recebe um objeto como argumento e retorna uma Promise.
    
    return new Promise((resolve, reject)=>{
        // Retorna uma nova Promise que recebe duas funções de callback: resolve e reject.
        
        const xhr = new XMLHttpRequest(); 
        // Cria uma nova instância de XMLHttpRequest para fazer a requisição.
        
        xhr.open(obj.method, obj.url, true) 
        // Abre a conexão com o método e URL especificados.
        // O último argumento 'true' indica que a requisição será assíncrona, ou seja, ocorrerá em segundo plano, sem bloquear a execução do código JavaScript.
        
        xhr.send();
        // Envia a requisição HTTP para o servidor.
        
        xhr.addEventListener('load', () => {
            // Adiciona um ouvinte de evento para o evento de carregamento ('load') da requisição.
            
            if(xhr.status >= 200 && xhr.status < 300){
                // Verifica se o status da resposta está na faixa de sucesso (200-299).
                
                resolve(xhr.responseText)
                // Se a requisição for bem-sucedida, chama a função 'resolve' da Promise passando a resposta como argumento.
            } else{
                reject(xhr.statusText)
                // Se houver um erro na requisição, chama a função 'reject' da Promise passando o texto do status como argumento.
            }
        })
    })
    // A Promise retornada representa a operação assíncrona de fazer a requisição HTTP.
    // Se a requisição for bem-sucedida, a Promise é resolvida com a resposta.
    // Caso contrário, a Promise é rejeitada com o erro ocorrido.
};
document.addEventListener('click', e => {
    // Adiciona um ouvinte de evento para cliques no documento.
    const el = e.target;
    const tag = el.tagName.toLowerCase() 
    // Obtém o elemento que disparou o evento e obtém a tag em letras minúsculas.
    
    if(tag === 'a'){
        e.preventDefault()
        // Se o elemento clicado for um link, previne o comportamento padrão de navegação.
        
        carregaPagina(el)
        // Chama a função 'carregaPagina' passando o elemento como argumento.
    }
})
async function carregaPagina(elemento){
    // Define uma função assíncrona chamada 'carregaPagina' que recebe um elemento como argumento.
    
    const href = elemento.getAttribute('href') 
    // Obtém o valor do atributo 'href' do elemento.
    try{
        const response = await request({method: 'GET', url: href})
        // Usa a palavra-chave 'await' para aguardar a resolução da Promise retornada pela função 'request'.
        // Isso permite que o código aguarde a conclusão da requisição assíncrona antes de prosseguir.
        // Quando a Promise é resolvida, o valor retornado é armazenado na variável 'response'.
        carregaResultado(response)
        // Chama a função 'carregaResultado' passando a resposta como argumento.
    }
    catch(e){console.log(e)}
}

function carregaResultado(response){
    // Define uma função chamada 'carregaResultado' que recebe a resposta como argumento.
    
    const resultado = document.querySelector('.resultado')
    // Seleciona o elemento com a classe 'resultado'.
    
    resultado.innerHTML = response;
    // Define o conteúdo HTML do elemento selecionado com a resposta da requisição.
}