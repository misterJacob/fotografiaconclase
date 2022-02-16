const message = document.getElementById('message');
const modal = document.querySelector('.modal');

message.addEventListener('click', () => {
    modal.classList.add('open')
})

const closeDown = document.querySelector('.modal-close-btn');

closeDown.addEventListener('click', () => {
    modal.classList.remove('open')
})