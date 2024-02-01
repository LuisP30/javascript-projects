// Criando uma função fábrica que cria o objeto calculadora
function criaCalculadora(){
    return {
        // ATRIBUTOS
        display: document.querySelector('.display'),
        // MÉTODOS
        // Método que inicia o método de captura de clique nos botões
        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        // Método que possibilita usuário realizar conta pressionando tecla enter
        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },
        // Método que limpa o display
        clearDisplay(){
            this.display.value = ''
        },
        // Método que apaga um caractere do display
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },
        // Método que realiza a conta
        realizaConta(){
            // Função que executa código JavaScript
            // É importante tomar cuidado com o uso dessa função
            let conta = this.display.value;
            try{
                conta = eval(conta)
                // Testando se conta tem resultado verdadeiro
                if(!conta){
                    alert('Conta inválida')
                    return;
                }
                this.display.value = conta
            }catch(e){
                alert('Conta inválida')
                return;
            }
        },
        // Método que testa qual botão foi clicado
        cliqueBotoes(){
            // Arrow Function muda o comportamento do this
            // Verifica clique nos botões e instruções de comportamento para cada botão
            document.addEventListener('click', (e) =>{
                const el = e.target;
                // Botões de números e sinais
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                // Botão que limpa display
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                // Botão que apaga um caractere
                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                // Botão que realiza conta
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            })
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
