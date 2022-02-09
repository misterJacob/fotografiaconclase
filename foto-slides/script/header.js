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