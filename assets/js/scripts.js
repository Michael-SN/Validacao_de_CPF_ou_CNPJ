// 547.128.500-00 -> mascarado 
// 11341742091 -> nao mascarado(enviado para o banco de dados)

const textInput = document.querySelector('.inputText');
const btnClear = document.querySelector('.btn-clear')
const btnSubmit = document.querySelector('.btn-submit')
const select = document.querySelector('#inputState');
textInput.value = '';


select.addEventListener('change', () => {        
    if(select.value === 'cnpj') {
        // ... function cnpj mask and validation
    } else {
        // ... function cpf mask and validation
    }    
});
textInput.addEventListener('keyup', e => {    // keyup no momento em que eu solto a tecla eu envio o valor...
    const element = e.target;        
    console.log(element.value.split(''));
    
});



btnClear.addEventListener('click', clear);
btnSubmit.addEventListener('click', () => {

    if(textInput.value === '' )
        return alert('Campo Vazio');
    // sucess code here ...   
    const texto = textInput.value;
    console.log(`variavel texto: ${texto}`);
    const arrTxt = texto.split('');
    console.log(arrTxt);
});



function clear() { extInput.value = ''; }
// function teste() {}
