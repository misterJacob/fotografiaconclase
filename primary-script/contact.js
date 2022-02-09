const message = document.getElementById('message');
const modal = document.querySelector('.modal');

message.addEventListener('click', () => {
    modal.classList.add('open')
})

const close = document.querySelector('.close-btn');
close.addEventListener('click', () => {
    modal.classList.remove('open')
})