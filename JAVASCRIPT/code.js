var button = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menuLink');
const homeBtn = document.getElementById('homeBtn');

button.addEventListener('click', function() {
    console.log('This works!');
    if(menu.classList.contains('noDisplay')) {
        menu.classList.remove('noDisplay');
        button.classList.add('btnClicked');
        homeBtn.classList.add('popIn');

        menuLinks.forEach((element) => {
            element.classList.add('show');
        });
    }
    else {
        menu.classList.add('noDisplay');
        button.classList.remove('btnClicked');
        homeBtn.classList.remove('popIn');
        
        menuLinks.forEach((element) => {
            element.classList.remove('show');
        });
    }
})

homeBtn.addEventListener('click', function() {
    window.location.href = "https://mgnub.github.io/BBQubes/index.html";
})
