const loginButton = document.querySelector(".login-button");
const loginOverlay = document.querySelector(".login-overlay");
const loginForm = document.querySelector(".login-form");

loginButton.addEventListener("click", () => {
    loginOverlay.style.display = "block";
    setTimeout(function () {
        loginOverlay.classList.add("open");
        setTimeout(function () {
            loginForm.classList.add("open");
        }, 350);
    }, 250);
});

loginOverlay.addEventListener("mousedown", (event) => {
    if (event.target === loginOverlay) {
        setTimeout(function () {
            setTimeout(function () {
                loginOverlay.style.display = "none";
            }, 350);
        loginForm.classList.remove("open"); 
        loginOverlay.classList.remove("open"); 
        }, 350);
    }
});

const panelOne = document.querySelector('.login-form__panel.one');
const panelTwo = document.querySelector('.login-form__panel.two');
const loginToggle = document.querySelector('.login-form__toggle');

panelTwo.addEventListener('click', function(e) {
    if(!panelTwo.classList.contains('active')){
        e.preventDefault();
        loginToggle.classList.add('visible')
        panelOne.classList.add('hidden');
        panelTwo.classList.add('active');
        loginForm.style.height = `${panelTwo.scrollHeight}px`;
    }
});

loginToggle.addEventListener('click', function(e) {
    e.preventDefault();
    loginToggle.classList.remove('visible')
    panelOne.classList.remove('hidden');
    panelTwo.classList.remove('active');
    loginForm.style.height = `${panelOne.scrollHeight}px`;
});


