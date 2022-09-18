let body = document.querySelector("body");
let sideMenu = document.querySelector(".side-menu");

sideMenu.addEventListener('click', function() {
    if (sideMenu.checked) {
        body.classList.add('lock');
    } else {
        body.classList.remove('lock');
    }
});

