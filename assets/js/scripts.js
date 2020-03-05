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

const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', );


const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', clearInput);
function clearInput() { inputText.value = ''; }


