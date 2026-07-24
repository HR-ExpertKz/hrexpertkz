// Кнопка наверх
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};


topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};


// Анимация появления блоков
const items = document.querySelectorAll(".fade-up");

function showItems() {

    items.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", showItems);

showItems();


// Мобильное меню
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


// Форма отправки в Make + Telegram
const form = document.getElementById("contactForm");

if (form) {

    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const successMessage = document.getElementById("successMessage");


    form.addEventListener("submit", async function (e) {

        e.preventDefault();


        submitBtn.disabled = true;
        btnText.textContent = "Отправка...";


        const data = new FormData(form);


        try {


            await fetch("https://hook.eu1.make.com/qjyz7a9umkqbkgrstfh3gsvm71hwq5g4", {

                method: "POST",

                body: data

            });



            // очистка формы
            form.reset();


            // показать сообщение
            successMessage.classList.add("show");


            // вернуть кнопку
            submitBtn.disabled = false;
            btnText.textContent = "Получить консультацию";


            // убрать сообщение через 5 секунд
            setTimeout(() => {

                successMessage.classList.remove("show");

            }, 5000);



        } catch (error) {


            alert("Ошибка отправки. Попробуйте ещё раз.");


            submitBtn.disabled = false;
            btnText.textContent = "Получить консультацию";


        }


    });

}
// Закрывать меню после выбора пункта
document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});