const consoleLog =document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
alert("Служит для вывода информации в консоль");
});

const myAlert =document.querySelector('#myAlert');

myAlert.addEventListener('click', () => {
alert("Простой способ вывести информацию во всплывающем окне");
});


const prompt =document.querySelector('#prompt');

prompt.addEventListener('click', () => {
alert("Отображает диалоговое окно для ввода текста");
});
