let counterValue = 0;

const decrementBTN = document.querySelector('[data-action="decrement"]');
const incrementBTN = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector('#value');

decrementBTN.addEventListener('click', () =>{
    counterValue -= 1;
    valueElement.textContent = counterValue;
});
incrementBTN.addEventListener('click', ()=>{
    counterValue += 1;
    valueElement.textContent = counterValue;
});
