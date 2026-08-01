/*==================================================
    MAIN APPLICATION
==================================================*/

document.addEventListener("DOMContentLoaded", async () => {

    const path = window.location.pathname;

    const root =
        path.includes("/infotech/") ||
            path.includes("/institute/")
            ? "../"
            : "";

    await loadComponent(
        "navbar",
        root + "components/navbar.html"
    );

    await loadComponent(
        "footer",
        root + "components/footer.html"
    );

    setupNavigation(root);

    if (typeof initNavbar === "function") {
        initNavbar();
    }

    if (typeof initScroll === "function") {
        initScroll();
    }

    if (typeof initAnimation === "function") {
        initAnimation();
    }

    initCounter();

    initRoadmap();

    initFAQ();

    initContactForm();


});