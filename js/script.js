const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.padding = "16px 0";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(15,23,42,.75)";
        header.style.padding = "25px 0";
        header.style.boxShadow = "none";

    }

});

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

/*==========================
SCROLL PROGRESS
==========================*/

const progressBar =
    document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight
        -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/*==========================
BACK TO TOP
==========================*/

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    }

    else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=====================================
MOBILE MENU
=====================================*/

const mobileBtn = document.getElementById("mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");

function closeMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

function openMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.classList.add("menu-open");
}

mobileBtn.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});
document
    .querySelectorAll(".gi-mobile-menu a")
    .forEach(link => {
        link.addEventListener("click", closeMenu);
    });

/*=====================================
NAVBAR SCROLL
=====================================*/

const giHeader = document.querySelector(".gi-header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        giHeader.classList.add("scrolled");
    }
    else {
        giHeader.classList.remove("scrolled");
    }
});

/*=====================================
ACTIVE MENU
=====================================*/
const navLinks = document.querySelectorAll(".gi-nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});