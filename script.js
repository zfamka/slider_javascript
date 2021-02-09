const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
    if (count == 5) count = -1;
    for (let i = 0; i < images.length; i++) {
        if (count == i - 1) {
            images[i].classList.add('active-img');
        }
        else {
            images[i].classList.remove('active-img');
        }
    }
    document.querySelector('.img-12-max').src = 'img/' + (count + 2) + '.png';
    count++;
}

function prevFunction() {
    count--
    if (count == -1) count = 5;
    for (let i = 0; i < images.length; i++) {
        if (count == i) {
            images[i].classList.add('active-img');
        }
        else {
            images[i].classList.remove('active-img');
        }
    }
    document.querySelector('.img-12-max').src = 'img/' + (count + 1) + '.png';
}

function resetFunction() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[0].classList.add('active-img');
    count = 0;
    document.querySelector('.img-12-max').src = 'img/1.png';
}
