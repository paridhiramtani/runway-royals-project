let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');
let menu = document.getElementById("nav-menu");

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
    moveSlider('next');
};

prevBtn.onclick = function () {
    moveSlider('prev');
};

function moveSlider(direction) {
    let sliderItems = slider.querySelectorAll('.item');
    let thumbnailItems = thumbnail.querySelectorAll('.thumbnail .item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        sliderList.prependChild(sliderItems[sliderItems.length - 1]);
        thumbnail.prependChild(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function () {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, { once: true });
}

function toggleMenu() {
    menu.classList.toggle("show-menu");
}