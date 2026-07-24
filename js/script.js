// =======================================
// HR Expert KZ
// script.js
// =======================================

// =============================
// Всегда открывать страницу сверху
// =============================

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", () => {

    setTimeout(() => {

        window.scrollTo(0, 0);

    }, 50);

});

// =============================
// PRELOADER
// =============================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 700);

    }

});

// =============================
// Кнопка "Наверх"
// =============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =============================
// Появление блоков
// =============================

const fadeItems = document.querySelectorAll(".fade-up");

if (fadeItems.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    fadeItems.forEach(item => observer.observe(item));

}

// =============================
// Мобильное меню
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}
// =============================
// Отправка формы в Make
// =============================

const form = document.getElementById("contactForm");

if (form) {

    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        if (submitBtn) {

            submitBtn.disabled = true;

        }

        if (btnText) {

            btnText.textContent = "Отправка...";

        }

        const data = new FormData(form);

        try {

            const response = await fetch(
                "https://hook.eu1.make.com/qjyz7a9umkqbkgrstfh3gsvm71hwq5g4",
                {
                    method: "POST",
                    body: data
                }
            );

            if (!response.ok) {

                throw new Error("Ошибка");

            }

            form.reset();

            if (successMessage) {

                successMessage.classList.add("show");

            }

            if (btnText) {

                btnText.textContent = "✓ Заявка отправлена";

            }

            setTimeout(() => {

                if (successMessage) {

                    successMessage.classList.remove("show");

                }

                if (submitBtn) {

                    submitBtn.disabled = false;

                }

                if (btnText) {

                    btnText.textContent = "Получить консультацию";

                }

            }, 4000);

        }

        catch (error) {

            alert("Не удалось отправить заявку. Попробуйте ещё раз.");

            if (submitBtn) {

                submitBtn.disabled = false;

            }

            if (btnText) {

                btnText.textContent = "Получить консультацию";

            }

        }

    });

}

// =============================
// Плавная прокрутка меню
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

// =============================
// Конец файла
// =============================