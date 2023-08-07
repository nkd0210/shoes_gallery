const images = document.querySelectorAll('.image img');
const prev_btn = document.querySelector('.control.prev');
const next_btn = document.querySelector('.control.next');
const galleryInner = document.querySelector('.gallery__inner img');
const close_btn = document.querySelector('.close_btn');
const gallery = document.querySelector('.gallery');


var currentIndex = 0;

function galleryShow() {

    if(currentIndex == 0) {
        prev_btn.classList.add('hide');
    }else{
        prev_btn.classList.remove('hide');
    }

    if(currentIndex == images.length) {
        next_btn.classList.add('hide');
    }else{
        next_btn.classList.remove('hide');
    }

    galleryInner.src = images[currentIndex].src;
    gallery.classList.add('appear');
}

images.forEach(function (image, index) {

    image.onclick = function () {
        currentIndex = index;
        galleryShow();
    }

    prev_btn.onclick = function () {
        if(currentIndex > 0) {
            currentIndex = currentIndex - 1;
            galleryShow();
        }
    }

    next_btn.onclick = function () {
        currentIndex = currentIndex + 1;
        galleryShow();
    }
});


close_btn.onclick = function () {
    gallery.classList.remove('appear');
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('appear');
    }
})

