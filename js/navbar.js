/*==================================================
NAVBAR
==================================================*/

function initNavbar() {

    const mobileBtn =
        document.getElementById("mobileBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileOverlay =
        document.getElementById("mobileOverlay");

    const mobileClose =
        document.getElementById("mobileClose");

    if (!mobileBtn) return;

    function openMenu() {

        mobileMenu.classList.add("active");

        mobileOverlay.classList.add("active");

        document.body.classList.add("menu-open");

    }

    function closeMenu() {

        mobileMenu.classList.remove("active");

        mobileOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

    mobileBtn.addEventListener("click", openMenu);

    mobileClose.addEventListener("click", closeMenu);

    mobileOverlay.addEventListener("click", closeMenu);

}