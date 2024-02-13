const title = document.getElementById('BBQ');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        title.classList.add('shrink');
        logo.classList.add('logoSpin');

    } else {
        title.classList.remove('shrink');
        logo.classList.remove('logoSpin');
    }
});