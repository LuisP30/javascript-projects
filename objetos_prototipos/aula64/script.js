// Polimorfismo
function Conta(agencia, conta, saldo){ // Superclasse
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
// Métodos de conta
Conta.prototype.sacar = function(valor){
    if(this.saldo<valor){
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){               // toFixed(2) mostra o valor com duas casas decimais
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}
const conta = new Conta(11, 22, 10)

function ContaCorrente(agencia, conta, saldo, limite){
    // Fazendo a herença de conta
    Conta.call(this, agencia, conta, saldo);
    // limite é um atributo especial apenas de ContaCorrente
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente
// Reescrevendo o método sacar (Aqui está acontecendo o Polimorfismo)
ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite)<valor){
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo){
    // Fazendo a herença de conta
    Conta.call(this, agencia, conta, saldo);
    // limite é um atributo especial apenas de ContaCorrente
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

// Criando conta corrente
// Conta corrente tem limite e não permite um saque maior que o saldo e valor juntos
// Conta corrente eu posso sacar um valor maior que meu saldo
const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)
console.log()
// Criando conta poupança
// Conta poupança não tem limite e não permite um saque maior que o saldo
const cp = new ContaPoupanca(11, 22, 0)
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)
// Note a diferença de valores obtidos

// Fazer um método se comportar de formas diferentes em classes filhas de uma superclasse
// caracteriza-se um Polimorfismo