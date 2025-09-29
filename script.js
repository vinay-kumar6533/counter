let incre = document.querySelector('.incre');
let decre = document.querySelector('.decre');
let num = document.querySelector('.num');
let reset = document.querySelector('.reset');
let numberInput = document.querySelector('.number');
let count=0;

incre.addEventListener('click',() => {
    let inputValue = parseInt(numberInput.value)||1;
    count+=inputValue;
    num.innerText = count;
});

decre.addEventListener('click',() => {
    let inputValue = parseInt(numberInput.value)||1;
    count-=inputValue;
    num.innerText = count;
});

reset.addEventListener('click',() => {
    let inputValue = parseInt(numberInput.value)||1;
    count = 0;
    num.innerText = count;
    numberInput.value="";
});


