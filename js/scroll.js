/*==================================================
SCROLL
==================================================*/

function initScroll() {

    const progressBar =
        document.querySelector(".progress-bar");

    const header =
        document.querySelector(".gi-header");

    window.addEventListener("scroll", () => {

        if (header) {

            if (window.scrollY > 60) {

                header.classList.add("scrolled");

            }

            else {

                header.classList.remove("scrolled");

            }

        }

        if (progressBar) {

            const total =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const progress =
                (window.scrollY / total) * 100;

            progressBar.style.width =
                progress + "%";

        }

    });

}