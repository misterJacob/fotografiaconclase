const burgerWrap = document.querySelector('.burger-wrap');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-menu .items');
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

///  Mobil Device //

// const Btn = document.querySelector('.btn');
// const mobilBtn = document.querySelector('.mobil-btn');
// const mobilShow = document.querySelector('.mobil-show');
// const mobilMenu = document.querySelector('.mobil-menu');
// const mobilItems = document.querySelectorAll('.mobil-menu .items');


// mobilBtn.addEventListener('click', toggle);

// function toggle() {
//     if(!showMenu){
//         Btn.classList.add('open');
//         mobilShow.classList.add('open');
//         mobilMenu.classList.add('open');
//         mobilItems.forEach(item => item.classList.add('open'));

//         showMenu =true;
//     } else {
//         Btn.classList.remove('open');
//         mobilShow.classList.remove('open');
//         mobilMenu.classList.remove('open');
//         mobilItems.forEach(item => item.classList.remove('open'));

//         showMenu = false;
//     }
// }