
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: '1',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const az = document.querySelector('.az');
    const en = document.querySelector('.en');
    const ru = document.querySelector('.ru');

    // Функция для обработки клика и сохранения языка в localStorage и перезагрузки страницы
    function handleClickAndReload(lang) {
        localStorage.setItem('lang', lang);
        window.location.reload(); // Перезагрузка страницы
    }

    // Получаем значение языка из локального хранилища
    const storedLang = localStorage.getItem('lang');

    // Устанавливаем язык по умолчанию (азербайджанский), если его еще нет
    if (!storedLang) {
        localStorage.setItem('lang', 'az');
    }

    // Устанавливаем класс активности для кнопки, соответствующей текущему языку
    if (!storedLang || storedLang === 'az') {
        az.classList.add('active');
        en.classList.remove('active');
        ru.classList.remove('active');
    } else if (storedLang === 'en') {
        en.classList.add('active');
        az.classList.remove('active');
        ru.classList.remove('active');
    } else if (storedLang === 'ru') {
        ru.classList.add('active');
        az.classList.remove('active');
        en.classList.remove('active');
    }

    // Добавляем обработчики событий клика к каждому элементу
    az.addEventListener('click', () => {
        console.log('az');
        handleClickAndReload('az');
    });

    en.addEventListener('click', () => {
        console.log('en');
        handleClickAndReload('en');
    });

    ru.addEventListener('click', () => {
        console.log('ru');
        handleClickAndReload('ru');
    });

    const foodContent = [
        {
            dish: {
                az: '‘SESAME’ TOYUQ SALATI',
                ru: '‘SESAME’ КУРИНЫЙ САЛАТ',
                en: 'Sesame Chicken Salad'
            },
            img: '../assets/images/salads/sesame_chicken_salad.png',
            description: {
                az: 'Toyuq, aysberq kahı, çerri pomidor, xıyar, küncüt sousu',
                ru: 'Курица, салат айсберг, помидоры черри, огурцы, кунжутная заправка',
                en: 'Chicken, Italian mix greens, cherry tomatoes, cucumbers, sesame dressing'
            },
            price: '10'
        },
        {
            dish: {
                az: 'RUKKOLA & STRACCİATELLA SALATI',
                ru: 'САЛАТ ИЗ РУККОЛЫ И СТРАЧЧАТЕЛЛЫ',
                en: 'Arugula&Stracciatella Salad'
            },
            img: '../assets/images/salads/rukkola_salad.png',
            description: {
                az: 'Stracciatella alla Romana, rukkola, qırmızı və sarı pomidor, şam fıstığı, balzamik sirkəsi, qırmızı giləmeyvə və pesto sousu',
                ru: 'Страччателла по-романски, руккола, красные и желтые помидоры, кедровые орешки, бальзамический уксус, красные ягоды и соус песто',
                en: 'İtalian mix greens, cherry  tomtatoes, pine nuts, balsamic reduction, berries and pesto sauce'
            },
            price: '16'
        },
        {
            dish: {
                az: 'QIZARDILMIŞ AVOKADO MOZZARELLA SALATI',
                ru: 'САЛАТ С ЖАРЕНЫМ АВОКАДО И МОЦАРЕЛЛОЙ',
                en: 'Grilled Avocado Salad'
            },
            img: '../assets/images/salads/avokado_mozarella_salad.png',
            description: {
                az: 'İtalyan Mix göyərti, qızardılmış avokado, italyan təzə Mozzarella, çerri pomidor, İtalyan balzamik sousu ilə',
                ru: 'Итальянский микс из зелени, жареный авокадо, свежая итальянская моцарелла, помидоры черри, подаются с соусом из итальянского бальзамика',
                en: 'Italian Mix Greens and fresh Mozzarella, cherry tomatoes served with  balsamic reduction '
            },
            price: '17'
        },
        {
            dish: {
                az: 'QIZARDILMIŞ KRİVET SALATI',
                ru: 'САЛАТ ИЗ ЖАРЕННЫХ КРЕВЕТОК',
                en: 'Fried Prawns Salad'
            },
            img: '../assets/images/salads/fried_krivet_salad.png',
            description: {
                az: 'Qızardılmış krivet, qarışıq italyan göyərtisi, çerri pomidor, şam fistiğı, zeytun yağı və laym şirəsi',
                ru: 'Обжаренные креветки, смесь зелени, помидоров черри, кедровых орешков, оливкового масла и сока лайма',
                en: 'Fried Prawns, italian mix greens, cherry tomatoes, pine nuts, olive oil and lime juice'
            },
            price: '18'
        },
    ]



    const swiper_wrapper = document.querySelector('.swiper-wrapper')
    swiper_wrapper.innerHTML = ''
    foodContent.map((content) => {
        swiper_wrapper.innerHTML += `
    <div class="swiper-slide flex justify-center">
        <div class="dish-element">
            <h2 class="dish-heading">
                ${content.dish[storedLang]}
            </h2>
            <div class="dish-img">
                <img src="${content.img}" alt="">
            </div>
            <p class="dish-description">
                ${content.description[storedLang]}
            </p>
            <div class="dish-price">
                ${content.price} azn
            </div>
        </div>
    </div>
    `
    })
})

