const expandBtn = document.getElementById('expandBtn');
const explore = document.getElementById('explore');
const hiddenPage = document.getElementById('hiddenPage');
const hiddenText = document.getElementById('hiddenText');
const hiddenImage = document.getElementById('hiddenImage');
const exploreText = document.getElementById('exploreText');

explore.addEventListener('click', function() {

    if(expandBtn.classList.contains('expand')) {
        window.location.href = "https://tunarufus-pigmentdonor.codio.io/Contest/HTML/howSolve.html";
    }
    else {
        expandBtn.classList.add('expand');
        explore.classList.add('newBtn');
        explore.classList.remove('initialBtn');
        hiddenPage.classList.remove('noDisplay');
        hiddenText.classList.add('show');
        hiddenImage.classList.add('showY');
        // exploreText.innerText = "Hello There";
    }
    
})