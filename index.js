const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-menu-nav");
navToggle.addEventListener("click", () => {

    const visible = nav.getAttribute("visible-data");

    if (visible == "false") {
        nav.setAttribute("visible-data", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("visible-data", false);
        navToggle.setAttribute("aria-expanded", false);

    }

});