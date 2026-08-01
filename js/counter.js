/*==================================================
    COUNTER
==================================================*/

function initCounter() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    let started = false;

    function startCounter() {

        if (started) return;

        const section = document.querySelector(".gi-stats");

        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 120) {

            started = true;

            counters.forEach(counter => {

                const target = Number(counter.dataset.target);

                const isPercent = counter.dataset.suffix === "%";

                const duration = 1500; // 1.5 second

                const stepTime = 16;

                const steps = duration / stepTime;

                const increment = target / steps;

                let current = 0;

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.textContent =
                        Math.floor(current) +
                        (isPercent ? "%" : "+");

                }, stepTime);

            });

            window.removeEventListener("scroll", startCounter);

        }

    }

    window.addEventListener("scroll", startCounter);

    startCounter();

}