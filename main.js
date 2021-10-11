const buttonYes = document.querySelector(".popup__button_green");
const buttonNo = document.querySelector(".popup__button_red");

const confirmOverlay = document.querySelector(".confirm-overlay");
const stopOverlay = document.querySelector(".stop-overlay");

const confirmPopup = document.querySelector(".confirm-popup");
const stopPopup = document.querySelector(".stop-popup");


setTimeout(function () {
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
});

const burgerButton = document.querySelector(".burger-menu__button")
let closeButton = document.querySelector(".burger-menu__close-button");
let burgerMenu = document.querySelector(".burger-menu");

burgerButton.onclick = function () {
    burgerMenu.classList.add("active");
};
closeButton.onclick = function () {
    burgerMenu.classList.remove("active");
};

