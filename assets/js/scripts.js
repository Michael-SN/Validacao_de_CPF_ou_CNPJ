
const inputText = document.querySelector('.inputText');
const btnClear = document.querySelector('.btn-clear');
const btnSubmit = document.querySelector('.btn-submit');



btnClear.addEventListener('click', clearInput);
function clearInput() { inputText.value = ''; }



function verificaSelect(){
    const select = document.querySelector('#inputState');
    select.addEventListener('change', () => {
        
    })
}
verificaSelect();