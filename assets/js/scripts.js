const select = document.querySelector('#inputState');
select.addEventListener('change', verificaSelect);
function verificaSelect(){
    if(select.value === 'cnpj') {        
        inputText.addEventListener('keyup', mascaraCNPJ);
        inputText.removeEventListener('keyup', mascaraCPF);
    } else {        
        inputText.addEventListener('keyup', mascaraCPF);
        inputText.removeEventListener('keyup', mascaraCNPJ);
    }
    redefineSelect();
}
function redefineSelect(){
    inputText.value = '';
    inputText.focus();
}

const inputText = document.querySelector('.inputText');

function mascaraCPF () {
    let cpf = inputText.value;
    if (cpf.length <= 14) { 
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        inputText.value = cpf;
    } else {
        inputText.value = cpf.slice(0, -1);
    }
}

function mascaraCNPJ () {    
    let cnpj = inputText.value;
    if(cnpj.length <= 18){
        cnpj=cnpj.replace(/\D/g,"")
        cnpj=cnpj.replace(/^(\d{2})(\d)/,"$1.$2")
        cnpj=cnpj.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
        cnpj=cnpj.replace(/\.(\d{3})(\d)/,".$1/$2")
        cnpj=cnpj.replace(/(\d{4})(\d)/,"$1-$2")
        inputText.value = cnpj;
    } else {
        inputText.value = cnpj.slice(0, -1);
    }
}

window.addEventListener('keyup', e =>{    
    if(e.keyCode === 13 )  validaCPF();   
})
const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', validaCPF);

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13
// 8 2 0 . 8 6 3 . 8 0 0  -  5  4 - comparar os dois ultimos digitos e que se forem iguais o cpf é válido
function validaCPF () {
    const cpf = inputText.value; // aqui entra o cpf completo 
    const cpfLimpo = cpf.replace(/\D+/g,"").split(''); // aqui separa os digitos num array
    const cpfPartial = cpfLimpo.slice(0, 9); // aqui separa os nove primeiros digitos 
    const verificador = cpfLimpo.slice(-2);
    const digito1 = calculaDigito(10, cpfPartial);        
    
    if(!((verificador[0]) == digito1)) {        
        // ... alert danger
        alerta('alert-danger', `${cpf} não é válido!!`);
    } else {
        cpfPartial.push(String(digito1));        
        const digito2 = calculaDigito(11, cpfPartial);                

        if(!((verificador[1] == digito2))) {
            // alert danger
            alerta('alert-danger', `${cpf} não é válido!!`);
        }
        else {
            // alert sucessull
            alerta('alert-success', `${cpf} é válido!!`);
        }
    }    
}

function calculaDigito(regress, arr ){ 
    const soma = arr.reduce((acumalador, valorAtual) => {
        const value = valorAtual * regress;
        regress--;
        return value + acumalador;
    }, 0);

    if((11 - (soma % 11)) > 9) return 0;
    return (11 - (soma % 11));    
}
function criaAlerta() {
    const alerts = document.querySelector('.alerts');    
    const warning = document.createElement('div');   
    alerts.appendChild(warning);
    warning.classList.add('alert');
    const p = document.createElement('p');    
    warning.appendChild(p);
}
function alerta(className, msg){           
    const alert = document.querySelector('.alert');
    if(alert){        
        const p = alert.children[0];
        alert.classList.remove("alert-danger");
        alert.classList.remove("alert-success");        
        alert.classList.add(className);                
        p.innerHTML = msg;
    }
    else {        
        criaAlerta();
        alerta(className, msg);
    }

}

const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', clearInput);
function clearInput() { inputText.value = ''; }