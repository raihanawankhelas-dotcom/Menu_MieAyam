/* ==========================
   MOBILE MENU
========================== */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {

        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

}

/* ==========================
   AUTO ACTIVE NAVBAR
========================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {

    const linkPage = link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")
    ) {
        link.classList.add("active");
    }

});

/* ==========================
   HIDE HEADER ON SCROLL
========================== */

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (currentScroll > lastScroll && currentScroll > 150) {

        header.classList.add("hide");

    } else {

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

/* ==========================
   CONTACT FORM -> WHATSAPP
========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", e => {

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        const nomorWA = "6285658874357";

        const text = `Halo Admin CC Mie Ayam & Bakso

Nama: ${nama}
Email: ${email}

Pesan:
${pesan}`;

        const url =
            `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

        contactForm.reset();

    });

}

/* ==========================
   REVEAL ANIMATION
========================== */

const reveals = document.querySelectorAll(`
.card,
.contact-card,
.vision-card,
.stat-box,
.about-image,
.about-content
`);

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

reveals.forEach(item => {

    item.classList.add("reveal");

    revealObserver.observe(item);

});

/* ==========================
   PAGE LOADED EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});