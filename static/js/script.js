document.addEventListener("DOMContentLoaded", function () {

    /* ===== Footer Year ===== */
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ===== Mobile Hamburger Menu ===== */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("open");
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("open");
                navLinks.classList.remove("open");
            });
        });
    }

    /* ===== Scroll Reveal Animation ===== */
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );

    revealElements.forEach(function (el) {
        revealObserver.observe(el);
    });

    /* ===== Scroll To Top Button ===== */
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    function toggleScrollTopBtn() {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    }

    if (scrollTopBtn) {
        window.addEventListener("scroll", toggleScrollTopBtn);
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    /* ===== Floating Brand Tag Fade On Scroll (Home Page Only) ===== */
    const floatingTag = document.getElementById("floatingBrandTag");
    if (floatingTag) {
        window.addEventListener("scroll", function () {
            const fade = Math.max(0.35, 1 - window.scrollY / 500);
            floatingTag.style.opacity = fade.toFixed(2);
        });
    }

});
