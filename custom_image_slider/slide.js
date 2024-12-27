const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const buttonLeft = document.getElementById('clickLeft');
const buttonRight = document.getElementById('clickRight');

let currentSlide=0;
const totalSlides=images.length;

function moveSlides() {
    slides.style.transform=`translateX(-${currentSlide*100}vw)`;
}

function nextSlide() {
    if(currentSlide>=totalSlides-1){
        currentSlide=0;
    }else{
        currentSlide=currentSlide+1;
    }
    moveSlides();
}

function previousSlide() {
    if (currentSlide-1<0) {
        currentSlide=totalSlides-1; 
    } else {
        currentSlide=currentSlide-1; 
    }
    moveSlides();
}

buttonRight.addEventListener('click', nextSlide);
buttonLeft.addEventListener('click', previousSlide);
