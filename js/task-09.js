function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeBG = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

buttonChangeBG.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  textColor.innerText = document.body.style.backgroundColor;
});
