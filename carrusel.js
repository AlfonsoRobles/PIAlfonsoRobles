document.addEventListener("DOMContentLoaded", () => {

    /* =====================
       CARRUSEL
    ===================== */

    const track = document.querySelector(".carousel-track");
    const leftBtn = document.querySelector(".arrow.left");
    const rightBtn = document.querySelector(".arrow.right");

    const step = 220;

    if (track && leftBtn && rightBtn) {

        rightBtn.addEventListener("click", () => {
            track.scrollBy({
                left: step,
                behavior: "smooth"
            });
        });

        leftBtn.addEventListener("click", () => {
            track.scrollBy({
                left: -step,
                behavior: "smooth"
            });
        });
    }

    /* =====================
       MENU HAMBURGUESA
    ===================== */

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

    }

    /* =====================
       SUBMENUS MOVIL
    ===================== */

    document.querySelectorAll(".dropdown > a").forEach(enlace => {

        enlace.addEventListener("click", function (e) {

            if (window.innerWidth <= 768) {

                const submenu = this.nextElementSibling;

                if (submenu && submenu.classList.contains("submenu")) {

                    e.preventDefault();
                    submenu.classList.toggle("active");

                }

            }

        });

    });

});

/* =====================
   VOLVER ARRIBA
===================== */

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});