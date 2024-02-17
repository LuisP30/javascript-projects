import GeraCPF from "./modules/GeraCPF"
import './assets/css/style.css';

(function(){
    const gera = new GeraCPF()
    const CPFgerado = document.querySelector('.cpf-gerado')
    CPFgerado.innerHTML = gera.geraNovoCPF()
})();