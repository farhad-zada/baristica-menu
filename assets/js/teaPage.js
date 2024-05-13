





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
                az: 'QARA ÇAY',
                ru: 'ЧЕРНЫЙ ЧАЙ',
                en: 'Black Tea'
            },
            img: '../assets/images/tea/black_tea.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '5'
        },
        {
            dish: {
                az: 'YAŞIL ÇAY',
                ru: 'ЗЕЛЕНЫЙ ЧАЙ',
                en: 'GREEN TEA'
            },
            img: '../assets/images/tea/green_tea.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '5'
        },
        {
            dish: {
                az: 'YASƏMƏN ÇAY',
                ru: 'ЧАЙ С ЖАСМИНОМ',
                en: 'JASMINE'
            },
            img: '../assets/images/tea/yasemen_tea.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '5'
        },
        {
            dish: {
                az: 'BERQAMOT ÇAY',
                ru: 'ЧАЙ С БЕРГАМОТОМ',
                en: 'GERGAMOT TEA'
            },
            img: '../assets/images/tea/bergamot_tea.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '5'
        },
        {
            dish: {
                az: 'CASCARA ÇAYI',
                ru: 'ЧАЙ КАСКАРА',
                en: 'CASCARA TEA'
            },
            img: '../assets/images/tea/cascara_tea.png',
            description: {
                az: 'Qəhvə giləmeyvələri',
                en: 'Coffee Cherries',
                ru: 'Кофейные ягоды'
            },

            price: '7'
        },
        {
            dish: {
                az: 'TROPİK MEYVƏLİ ÇAY',
                ru: 'ТРОПИЧЕСКИЙ ЧАЙ',
                en: 'Tropical Tea'
            },
            img: '../assets/images/tea/tropic_fruit_tea.png',
            description: {
                az: 'Kumquat, portağal, jasmin çay, marakuya',
                en: 'Kumquat, jasmine tea, orange, passion fruit',
                ru: 'Кумкват, чай жасмин, апельсин, маракуйя'
            },
            price: '7'
        },
        {
            dish: {
                az: 'GİLƏMEYVƏLİ ÇAY',
                ru: 'ЯГОДНЫЙ ЧАЙ',
                en: 'Mix berries tea'
            },
            img: '../assets/images/tea/gilemeyveli_tea.png',
            description: {
                az: 'Qarışıq giləmeyvələr, hibiskus çayı, rozmarin',
                en: 'Mix berries, hisbiscus tea, rosemary',
                ru: 'Микс ягод, гибискус, розмарин'
            },
            price: '7'
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

