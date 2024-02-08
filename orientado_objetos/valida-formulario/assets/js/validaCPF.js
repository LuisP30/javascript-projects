class ValidaCPF{
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpf.replace(/\D+/g, ''),
            enumerable: true,
            writable: false,
            configurable: false
        })
    }
    eSequencia(){ // Pegando o primeiro valor do CPF limpo com charAt
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    geraNovoCPF(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); // Pegando do primeiro ao penúltimo elemento
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos+digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }
    // Quando não utilizo a palavra this em um método ele pode se tornar estático
    static geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica)
            reverso--;
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ?String(digito): '0';
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCPF()
        return this.novoCPF === this.cpfLimpo
    }
}
// const validacpf = new ValidaCPF('070.987.720-03')

// if(validacpf.valida()){
//     console.log('CPF válido')
// } else console.log('CPF Inválido')