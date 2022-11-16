const myLink = document.querySelector('#myLink');

myLink.addEventListener('click', (event) => {
    // Убираем стандартное поведение ссылки с помощью event.preventDefault();
    // Если мы этого не сделаем, то сработает переход по ссылке как указано в файле index.html. Там дана ссылка на google.
    event.preventDefault();
    myLink.textContent = prompt('Введите новый текст для ссылки');
});