const hamburger = document.getElementsByClassName("hamburger-wrapper")[0];
const navig = document.getElementsByClassName("nav")[0];
const arrow = document.getElementsByClassName("icon-arrow")[0];
;

hamburger.addEventListener('click', () => {
    navig.classList.toggle("show");
    arrow.style.display = "none";
    hamburger.classList.toggle("show");
});

