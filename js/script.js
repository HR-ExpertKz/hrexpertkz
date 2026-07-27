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


// =============================
// PRELOADER
// =============================

window.addEventListener("load",()=>{

    const preloader=document.getElementById("preloader");

    if(!preloader) return;

    setTimeout(()=>{

        preloader.classList.add("hide");

        setTimeout(()=>{

            preloader.remove();

        },900);

    },2800);

});
// =============================
// Анимация появления блоков
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-up").forEach(section => {

    observer.observe(section);

});


// =============================
// MOBILE MENU
// =============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuToggle.classList.remove("active");

        });

    });

}


// =============================
// Закрытие мобильного меню
// при увеличении экрана
// =============================

window.addEventListener("resize", () => {

    if (window.innerWidth > 992 && nav && menuToggle) {

        nav.classList.remove("active");
        menuToggle.classList.remove("active");

    }

});


// =============================
// Кнопка "Наверх"
// =============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

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
// Плавная прокрутка по меню
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});
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

