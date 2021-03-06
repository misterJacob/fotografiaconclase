const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-landing");

const cards = document.querySelectorAll('.card');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
    rootMargin: "-150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"

};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            appearOnScroll.unobserve(entry.target)
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
    console.log('fader');
});
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
    console.log('slider');
});