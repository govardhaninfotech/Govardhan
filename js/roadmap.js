/*==========================================
CAREER ROADMAP
==========================================*/

function initRoadmap() {

    const roadmap = document.querySelector(".career-roadmap");

    if (!roadmap) return;

    const line = document.querySelector(".roadmap-line");

    const roadmapBody = document.querySelector(".roadmap");

    const steps = document.querySelectorAll(".roadmap-step");

    const orb = document.createElement("div");

    orb.className = "roadmap-progress";

    roadmapBody.appendChild(orb);

    function animateRoadmap() {

        const rect = roadmap.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        const progress = Math.max(
            0,
            Math.min(
                (windowHeight * 0.25 - rect.top) /
                roadmap.offsetHeight,
                1
            )
        );

        line.style.height = (progress * 100) + "%";

        orb.style.top = (progress * roadmapBody.offsetHeight) + "px";

        steps.forEach(step => {

            const icon = step.querySelector(".roadmap-icon");

            const iconTop = icon.getBoundingClientRect().top;

            if (iconTop < windowHeight * 0.65) {

                step.classList.add("active");

            }

        });

    }

    animateRoadmap();

    window.addEventListener("scroll", animateRoadmap);

}