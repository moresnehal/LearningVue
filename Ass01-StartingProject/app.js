const inputVal = document.querySelector('input');
const buttonVal = document.querySelector('button');
const ullist = document.querySelector('ul');

function loadme() {
    const val = inputVal.value;
    const li1 = document.createElement('li');
    li1.textContent = val;
    ullist.appendChild(li1);
    inputVal.value = '';


}

buttonVal.addEventListener("click", loadme);