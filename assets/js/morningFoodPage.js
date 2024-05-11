


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
                az: 'QIZIL BALIQ İLƏ SET',
                ru: 'СЕТ С ЛОСОСЕМ',
                en: 'Smoked Salmon Set'
            },
            img: '../assets/images/morningFood/gold_fish_set.png',
            description: {
                az: 'Qızıl balıq, miks göyərti, avokado, krem pendir, xiyar, brioş, qaynadılmış yumurta, kruasan, qəhvə',
                ru: 'Лосось, микс зелени, авокадо, крем-сыр, огурец свежий, бриошь, яйцо отварное в смятку, круассан , кофе',
                en: 'Greens , boiled egg, avocado, cream cheese, cucumber, brioche, croissant, coffee'
            },
            price: '15'
        },
        {
            dish: {
                az: 'HİND TOYUQU İLƏ SET',
                ru: 'СЕТ С ИНДЮШКОЙ',
                en: 'Turkey Pasrami set'
            },
            img: '../assets/images/morningFood/hind_chicken_set.png',
            description: {
                az: 'Hind toyuğu pastrami, yaşıl zeytun, miks göyərti, qayğanaq, kruasan, feta pendiri, çeri pomidoru, brioş, qəhvə',
                ru: 'Пастрами индейка, зеленые оливки, микс зелени, Яйца скрамбл, Помидоры черри, Круассан, Сыр фета и тост бриошь, Кофе',
                en: 'Greens, scrambled eggs, cherry tomatoes, olives, feta cheese, brioche , croissant, coffee.'
            },
            price: '15'
        },
        {
            dish: {
                az: 'PAŞOT QIZIL BALIQ İLƏ',
                ru: 'ПАШОТ С ЛОСОСЕМ',
                en: 'PAŞOT QIZIL BALIQ İLƏ'
            },
            img: '../assets/images/morningFood/pashot_gold_fish.png',
            description: {
                az: 'Brioş, hisə verilmiş qızıl balıq, paşot yumurta, holland sousu',
                ru: 'Бриошь, копченый лосось, яйцо пашот, соус голландез',
                en: ''
            },
            price: '14'
        },
        {
            dish: {
                az: 'PAŞOT QIZIL BALIQ İLƏ VAFLİDƏ',
                ru: 'ПАШОТ С ЛОСОСЕМ В ВАФЛЕ',
                en: 'PAŞOT QIZIL BALIQ İLƏ VAFLİDƏ'
            },
            img: '../assets/images/morningFood/pashot_gold_fish_vaffle.png',
            description: {
                az: 'Vafli, hisə verilmiş qızıl balıq, paşot yumurta, holland sousu',
                ru: 'Вафли, копченый лосось, пашот, голландский соус',
                en: ''
            },
            price: '14'
        },
        {
            dish: {
                az: 'PAŞOT AVOKADO',
                ru: 'ПАШОТ С АВОКАДО',
                en: 'PAŞOT AVOKADO'
            },
            img: '../assets/images/morningFood/pashot_avocado.png',
            description: {
                az: 'Brioş və yaxud Kruasan, avokado, az qaynadılmış yumurta, hollandaise sousu',
                ru: 'Бриошь или Круассан, авокадо, яйцо пашот, соус голландез',
                en: ''
            },
            price: '13'
        },
        {
            dish: {
                az: 'BRİOŞ SKRAMBL',
                ru: 'БРИОШЬ СКРЭМБЛ',
                en: 'BRİOŞ SKRAMBL'
            },
            img: '../assets/images/morningFood/briosh_crambl.png',
            description: {
                az: 'Brioş və yaxud Kruasan skrambl yumurta',
                ru: 'Бриошь или Круассан, яичница болтунья',
                en: ''
            },
            price: '9'
        },
        {
            dish: {
                az: 'PENDİRLİ OMLET',
                ru: 'СЫРНЫЙ ОМЛЕТ',
                en: 'Cheese Omelette'
            },
            img: '../assets/images/morningFood/cheese_omlet.png',
            description: {
                az: 'Yumurta, Çeddar, Mozzarella, Gouda və yaxud kabaçok ilə',
                ru: 'Яйца, с сыром Чеддер, Моцарелла, Гауда или Кабачком на выбор',
                en: 'Eggs,cream,butter with choice of Cheddar, Mozzarella or  Gouda '
            },
            price: '5'
        },
        {
            dish: {
                az: 'SIRNİKİ',
                ru: 'СЫРНИКИ',
                en: 'Syrniki'
            },
            img: '../assets/images/morningFood/sirniki.png',
            description: {
                az: 'Giləmeyvəli sirop və şaftalı ilə',
                ru: 'Сырники с ягодным кули и персиком',
                en: 'Served with berries sauce and sour cream'
            },
            price: '10.5'
        },
        {
            dish: {
                az: 'ŞAKŞUKA',
                ru: 'ШАКШУКА',
                en: 'Shakshuka'
            },
            img: '../assets/images/morningFood/shakshuka.png',
            description: {
                az: 'Tomat, yumurta, soğan, feta pendiri ilə qırmızı bibər',
                ru: 'С помидорами, яйцами, луком, болгарским перцем и сыром фета',
                en: 'Tomatoes, eggs, feta cheese, bell pepper, species'
            },
            price: '10'
        },
        {
            dish: {
                az: 'FRANSIZ SAYAĞI TOST',
                ru: 'ФРАНЦУЗСКИЙ ТОСТ',
                en: 'French Tost'
            },
            img: '../assets/images/morningFood/french_tost.png',
            description: {
                az: 'Fransız sayağı brioş, şaftalı və kastard kremi ilə',
                ru: 'Бриошь во французском стиле с персиком и заварным кремом',
                en: 'French style brioche with peach and custard cream on the side'
            },
            price: '9.5'
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


