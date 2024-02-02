document.addEventListener("DOMContentLoaded", () => {
    var button = document.querySelector(".layout__menu-toogle");
    let aside = document.querySelector(".layout__aside");
    let icon__bars = document.querySelector(".fa-bars");
    let icon__xmark = document.querySelector(".fa-xmark");
    button.addEventListener("click", () => {
        let visible = document.querySelector(".layout__aside--visible");
        if (!visible) {
            aside.classList.add("layout__aside--visible");
            icon__bars.style.opacity = 0;
            icon__xmark.style.opacity = 1;
        } else {
            aside.classList.remove("layout__aside--visible");
            icon__bars.style.opacity = 1;
            icon__xmark.style.opacity = 0;
        }
    });
    window.addEventListener("resize", () => {
        let size = parseInt(document.body.clientWidth)
        if (size <= 1060) {
            aside.classList.remove("layout__aside--visible");
            icon__bars.style.opacity = 1;
            icon__xmark.style.opacity = 0;
        }
    })
});