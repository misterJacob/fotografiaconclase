const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function() {
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function() {
    counter--;
    carousel();
});


function carousel() {


    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

const burgerWrap = document.querySelector('.burger-wrap');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-menu .links');

let showMenu = false;
menubar
burgerWrap.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        burger.classList.add('open');
        nav.classList.add('open');
        navMenu.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('open');
        navMenu.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}