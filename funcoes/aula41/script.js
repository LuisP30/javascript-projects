// Escopo Léxico
const nome = 'Luis'

function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Henrique'
    // No momento em que eu chamo a função falaNome()
    // Ela vai "lembrar" onde ela foi declarada e quem
    // eram os vizinhos dela
    falaNome()
}
usaFalaNome()

/* Em JavaScript, o escopo de uma variável é definido por 
sua localização dentro do código fonte (isto é aparentemente 
léxico) e funções aninhadas têm acesso às variáveis declaradas 
em seu escopo externo. */

function makeFunc() {
  let name = "Mozilla";
    console.log(name)
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
