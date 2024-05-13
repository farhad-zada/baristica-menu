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
                az: 'İSPANAQ ŞORBASI',
                ru: 'СУП ИЗ ШПИНАТА',
                en: 'Spinach Soup'
            },
            img: '../assets/images/hotFood/spanish_soup.png',
            description: {
                az: 'Qaymaq və qatılaşdırılmış balzamiklə servis edilir',
                ru: 'Подается со взбитыми сливками и бальзамическим соусом',
                en: 'Served with whipped cream and balsamic reduction'
            },
            price: '6'
        },
        {
            dish: {
                az: 'TOMAT ŞORBASI',
                ru: 'ТОМАТНЫЙ СУП',
                en: 'Tomato soup'
            },
            img: '../assets/images/hotFood/tomato_soup.png',
            description: {
                az: 'Pendir əridilmiş krutonlar və Pesto sousu süfrəyə verilir',
                ru: 'Подается с пармезаном, сухариками, сливками и соусом песто.',
                en: 'Served with parmesan, croutons, cream and pesto sauce'
            },
            price: '6'
        },
        {
            dish: {
                az: 'GÖBƏLƏK KREM ŞORBASI',
                ru: 'ГРИБОЙ КРЕМ-СУП',
                en: 'Mushrooms Soup'
            },
            img: '../assets/images/hotFood/mushroom_cream_soup.png',
            description: {
                az: 'Şampinyon və veşinka göbələkləri, qaymaq',
                ru: 'Грибы шампиньоны и вешенки, сливки',
                en: 'Mushrooms champignon and oyster, cream'
            },
            price: '7'
        },
        {
            dish: {
                az: 'QIZIL BALIQ VƏ KİM Çİ SOUSU İLƏ POKE',
                ru: 'ПОКЕ С ЛОСОСЕМ И СОУСОМ КИМЧИ',
                en: 'Salmon Poke'
            },
            img: '../assets/images/hotFood/gold_fish_poke.png',
            description: {
                az: 'Az duzlu qızıl balıq, düyü, çuka , turşu zəncəfil, edamame, quakamole, kim çi sousla',
                ru: 'Малосольный лосось, рис, чука, маринованный имбирь, эдамаме, гуакамоле, соус кимчи',
                en: 'Salted salmon, rice, chuka , pickled ginger, edamame, guacamole, kim chi sauce '
            },
            price: '19'
        },
        {
            dish: {
                az: 'TOYUQ VƏ TERİYAKİ SOUSU İLƏ POKE',
                ru: 'ПОКЕ С КУРИЦЕЙ И СОУСОМ ТЕРИЯКИ',
                en: 'Chicken Poke'
            },
            img: '../assets/images/hotFood/chicken_teriyaki_poke.png',
            description: {
                az: 'Toyuq filesi, teriyaki sousu, düyü, edamame, zəncəfil turşusu, çuka salatı, guacamole, nori',
                ru: 'Куриное филе, соус терияки, белый рис, эдамаме, маринованный имбирь, салат чука, гуакамоле',
                en: 'Chicken, rice, Chuka , edamame, guacamole, pickled ginger, teriyaki sauce '
            },
            price: '15'
        },
        {
            dish: {
                az: '‘POPKORN’ KREVETKA İLƏ',
                ru: 'Креветки Попкорн',
                en: 'Prawn Popcorn'
            },
            img: '../assets/images/hotFood/popkorn_krevetka.png',
            description: {
                az: 'Xırtıldayan krivetlər Asiya ədviyyatlı mayonez ilə',
                ru: 'Хрустящие креветки с острым азиатским соусом',
                en: 'Crispy Prawns with  Asian  spicy sauce'
            },
            price: '15'
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


