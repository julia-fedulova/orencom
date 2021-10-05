const buttonYes = document.querySelector(".popup__button_green");
const buttonNo = document.querySelector(".popup__button_red");

const confirmOverlay = document.querySelector(".confirm-overlay");
const stopOverlay = document.querySelector(".stop-overlay");

const confirmPopup = document.querySelector(".confirm-popup");
const stopPopup = document.querySelector(".stop-popup");


/*setTimeout(function () {
    confirmOverlay.style.display = "block";
        setTimeout(function () {
            confirmOverlay.classList.add("open");
            setTimeout(function () {
                confirmPopup.classList.add("open");
            }, 350);
        }, 350);
}, 1000);

buttonYes.addEventListener("click", (event) => {
    setTimeout(function () {
        confirmOverlay.classList.remove("open");
        confirmPopup.classList.remove("open");
    }, 350);
});
      
buttonNo.addEventListener("click", (event) => {
    confirmOverlay.style.display = "none";
    stopOverlay.style.display = "block";
    stopOverlay.classList.add("open");
    setTimeout(function () {
        stopPopup.classList.add("open");
    }, 350);
}); */

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
})