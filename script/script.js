



const toggle = document.querySelector('.toggle');

let check = true;

toggle.addEventListener('click', () => {

    if(check) {
        toggle.style.transform = 'translateX(45px)';
        toggle.style.background = '#fff';
        document.body.style.background = '#000';
        document.querySelector('.text').style.color = '#fff';
    } else {
        toggle.style.transform = 'translateX(0)';
        toggle.style.background = '#000';
        document.body.style.background = '#fff';
        document.querySelector('.text').style.color = '#000';
    }
    check = !check;
})

let text = 'calculator';
const textContainer = document.querySelector('.text');
let currentIndex = 0;

function typing(){
    if(currentIndex < text.length) {
        textContainer.textContent += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typing, 50);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if(currentIndex > 0) {
        textContainer.textContent = text.substring(0, currentIndex - 1);
        currentIndex--;
        setTimeout(eraseText, 50);
    } else {
        setTimeout(typing, 500);
    }
}
typing();

const inputNumber = document.querySelector('.inputNumber');
const btnContent = document.querySelectorAll('.btn');
const reset = document.querySelector('.reset');
const total = document.querySelector('.total');
const removeOne = document.querySelector('.removeOne');

let index = 0;
btnContent.forEach(num => {
    num.addEventListener('click', () => {
        inputNumber.value += num.textContent;
    })

})

reset.addEventListener('click', () => {

    if(!inputNumber.value) {
        alert('please enter number first!');
        return;
    }

    return inputNumber.value = "";
})

total.addEventListener('click', () => {

    if(!/[+-/*]/.test(inputNumber.value)) {
        alert('no operators, please input');
        return;
    }

    if(!inputNumber.value) {
        alert('please enter number first!');
        return;
    }

    return inputNumber.value = eval(inputNumber.value);
})


removeOne.addEventListener('click', removeNumOne);

function removeNumOne() {

    if(!inputNumber.value) {
        alert('please enter number first!');
        return;
    }

    if(inputNumber.value.length > 0) {
        inputNumber.value = inputNumber.value.slice(0, -1);
    }
}


