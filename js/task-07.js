const fontSizeControl = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

fontSizeControl.addEventListener('input', params => {
    text.style.fontSize = `${params.target.value}px`;
});