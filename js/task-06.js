const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');

    if(inputEl.getAttribute('data-length') == event.currentTarget.value.length)
         inputEl.classList.add('valid');
        else
         inputEl.classList.add('invalid');
});
