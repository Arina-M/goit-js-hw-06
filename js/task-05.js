const input = document.querySelector('input#name-input');
const nameOutput= document.querySelector('span#name-output');

input.addEventListener('input', userName => {
    const userNameTrim = userName.currentTarget.value.trim();
    if (userNameTrim === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = userNameTrim;
    }
});



