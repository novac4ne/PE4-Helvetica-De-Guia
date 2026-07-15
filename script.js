// =====================================================
// HELVETICA WEBSITE
// SCRIPT.JS
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================================
    // MOBILE NAVIGATION
    // =====================================================

    const menuButton = document.getElementById("menu-btn");

    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("show");

        });

    }

    // =====================================================
    // DYNAMIC GREETING
    // =====================================================

    const greeting = document.getElementById("greeting");

    if (greeting) {

        const hour = new Date().getHours();

        let message = "";

        if (hour >= 5 && hour < 12) {

            message = "Good Morning.";

        }

        else if (hour >= 12 && hour < 18) {

            message = "Good Afternoon.";

        }

        else {

            message = "Good Evening.";

        }

        greeting.textContent = message;

    }

    // =====================================================
    // CURRENT DATE
    // =====================================================

    const currentDate = document.getElementById("current-date");

    if (currentDate) {

        const today = new Date();

        const options = {

            weekday: "long",

            year: "numeric",

            month: "long",

            day: "numeric"

        };

        currentDate.textContent =
            today.toLocaleDateString("en-US", options);

    }

    // =====================================================
    // CONTACT FORM VALIDATION
    // =====================================================

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const formMessage =
                document.getElementById("formMessage");

            // Reset message

            formMessage.style.color = "#198754";

            formMessage.textContent = "";

            // Name

            if (name === "") {

                formMessage.style.color = "#d32f2f";

                formMessage.textContent =
                    "Please enter your full name.";

                return;

            }

            // Email

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                formMessage.style.color = "#d32f2f";

                formMessage.textContent =
                    "Please enter a valid email address.";

                return;

            }

            // Subject

            if (subject === "") {

                formMessage.style.color = "#d32f2f";

                formMessage.textContent =
                    "Please enter a subject.";

                return;

            }

            // Message

            if (message.length < 10) {

                formMessage.style.color = "#d32f2f";

                formMessage.textContent =
                    "Your message should contain at least 10 characters.";

                return;

            }

            // Success

            formMessage.style.color = "#198754";

            formMessage.textContent =
                "Your message has been sent successfully.";

            form.reset();

        });

    }

    // =====================================================
    // SCROLL REVEAL ANIMATION
    // =====================================================

    const revealElements =
        document.querySelectorAll(

            ".hero, .about-preview, .feature, .statistics, .quote, .today, .timeline, .philosophy, .contact-section, .faq"

        );

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const windowHeight = window.innerHeight;

            const top = element.getBoundingClientRect().top;

            const visible = 120;

            if (top < windowHeight - visible) {

                element.classList.add("active");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

});