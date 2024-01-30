const inputTarefa = document.querySelector('.input-nova-tarefa')
const botao = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

// Função que cria botão de apagar ao lado das tarfas
function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    // Função que adiciona um atributo ao elemento. No caso abaixo adicionei uma class chamada "apagar"
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}
// Adicionando funcionalidade ao botão de apagar as tarefas
document.addEventListener('click', function(e){
    // Verificando que elemento disparou o evento
    const el = e.target;
    // Verificando se a classe do elemento tem o valor de "apagar"
    if(el.classList.contains('apagar')){
        // Identificando e removendo o elemento pai do elemento
        el.parentElement.remove()
        salvarTarefas()
    }
})
// Função responsável por criar novos elementos de tarefas
function criaTarefa(textoInput){
    // Cria elemento HTML li
    const li = document.createElement('li')
    // Adiciona o texto do input ao elemento criado
    li.innerHTML = textoInput
    // Adiciona elemento com o texto do input na lista de tarefas
    tarefas.appendChild(li)
    criaBotaoApagar(li)
    salvarTarefas()
}
// Capturando evento de click no botão
botao.addEventListener('click', function(e){
    // Testando se inputTarefa tem valor para não adicionar tarefas em branco
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    // Limpando o input após envio da tarefa
    inputTarefa.value = ''
    // Evento de Focus faz com que o cursor permaneça no input
    inputTarefa.focus()
})
// Capturando evento de tecla pressionada (Para que os usuários possam enviar tarefas com o enter)
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
        // Limpando o input após envio da tarefa
        inputTarefa.value = ''
        // Evento de Focus faz com que o cursor permaneça no input
        inputTarefa.focus()
    }
})
// Função para salvar tarefas
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        // Substituindo a palavra Apagar para nada     // Função trim remove espaços
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    // Transformando o meu array em uma string
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    // Salvando a string no navegador (apenas string). Salvei as tarefas em uma chave chamada "tarefas"
    localStorage.setItem('tarefas', tarefasJSON)
}
// Essa função acessa o localStorage para recuperar as tarefas que foram salvas no navegador
function adicionaTarefasSalvas(){
    // Pegando o item através da key que coloquei nele quando salvei no localStorage
    const tarefas = localStorage.getItem('tarefas')
    // Transformando a string em array novamente
    const listaDeTarefas = JSON.parse(tarefas)
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()