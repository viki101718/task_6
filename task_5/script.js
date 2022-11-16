let clearForm = document.querySelector('#clearForm');
let inputTex = document.querySelector('#inputTex');
let duplicateField = document.querySelector('#duplicateField');

inputTex.addEventListener('keypress', (event) => {
    duplicateField.textContent = inputTex.value;
});

clearForm.addEventListener('click', function(event) {
    console.log(inputTex.value);
    inputTex.value = '';
    duplicateField.textContent = '';
    event.preventDefault();
});
