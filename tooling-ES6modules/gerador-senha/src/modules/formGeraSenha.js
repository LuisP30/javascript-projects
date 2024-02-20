import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')

const botaoGeraSenha = document.querySelector('.gerar-senha')

export default () => {
    // Impedindo que o meu formulário seja enviado com o click no botão
    botaoGeraSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera()
})
}

function gera(){
    // Pegando o valor e os checkbox que estão verificados ou não
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada selecionado'
}