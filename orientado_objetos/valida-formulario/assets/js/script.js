class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }
    // Os métodos abaixo são métodos principais (que utilizam os métodos de apoio)
    eventos(){ // Este método chama hadleSubmit()
        this.formulario.addEventListener('submit', e => {
        // Método que impede do formulário ser enviado
        this.handleSubmit(e);
        })
    }
    // Definição do método que impede envio do formulário e checa os campos
    handleSubmit(e){ // Este método chama camposValidos() hadleSubmit é chamado por eventos()
        e.preventDefault(); // Impede envio
       const camposValidos = this.camposValidos(); // Chama método que checa campos
       const senhasValidas = this.senhasValidas(); // Chama método que checa senhas
       if(camposValidos && senhasValidas){
        alert('Formulário enviado!')
        this.formulario.submit();
       }
    }
    // Definição do método que checa se os campos do formulário são válidos
    camposValidos(){ // Este método faz uso dos métodos de apoio
        // Variável que será retornado deste método
        let valido = true;
        // Sempre que o formulário é enviado camposValidos() é chamada.
        //  Então esse laço for remove os erros presentes no formulário (Para que não fique aparecendo erros repetidamente)
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }
        // Laço for que itera todos os campos do formulário
        for(let campo of this.formulario.querySelectorAll('.validar')){
            // Capturando o elemento irmão anterior do campo (para pegar o nome do campo que gerou erro)
            const label = campo.previousElementSibling.innerText
            // A constante acima terá o nome do campo como valor
            // Testando se o valor do campo é nulo
            if(!campo.value){
                // Função cria erro recebe o campo e a mensagem como parâmetro
                this.criaErro(campo,`Campo "${label}" não pode estar em branco`)
                valido = false
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valido = false
            };
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valido = false
            };
        }
        return valido
    }
    // Os métodos abaixo são métodos de apoio (que são chamados pelos métodos principais)
    // Método que valida o campo usuário
    validaUsuario(campo){
        // Essa constante será o valor que o usuário digitou no input de usuario
        const usuario = campo.value
        let valido = true
        // Usuário precisa ter um nome entre 3 e 12 caracteres
        if(usuario.length > 12 || usuario < 3){
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valido = false
        }
        // Utilizando expressão regular para idêntificar se o nome de usuário possui um caractere
        // diferente de números ou letras (maiúsculas ou minúsculas)
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuário só poderá conter letras e números')
            valido = false
        }
        return true;
    }
    // Método que checa os campos de senha
    senhasValidas(){
        let valid = true;
        // Capturando os campos de senha
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')
        // Checando se senhas são iguais
        if(senha.value !== repetirSenha.value ){
            valid = false
            this.criaErro(senha, 'Senha e Repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Senha e Repetir senha precisam ser iguais')
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'A senha precisa estar entre 6 e 12 caracteres')
        }

        return valid;
    }
    // Método que valida o campo CPF
    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido')
            return false
        }
        return true
    }
    // Método responsável por criar os erros abaixo do input
    criaErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text');
        // Encontrando o elemento adjacente do campo para lançar o erro no lugar correto (erro estará em div)
        campo.insertAdjacentElement('afterend', div);
    }
}
const valida = new ValidaFormulario()