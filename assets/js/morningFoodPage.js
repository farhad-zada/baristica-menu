


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
                ru: 'Копчёный лосось ,зелень, яйцо вареное, авокадо, крем сыр, огурец, бриошь, круассан, кофе',
                en: 'Greens , boiled egg, avocado, cream cheese, cucumber, brioche, croissant, coffee'
            },
            price: '15'
        },
        {
            dish: {
                az: 'HİND TOYUQU İLƏ SET',
                ru: 'СЕТ С ИНДЮШКОЙ',
                en: 'Turkey Pastrami set'
            },
            img: '../assets/images/morningFood/hind_chicken_set.png',
            description: {
                az: 'Hind toyuğu pastrami, yaşıl zeytun, miks göyərti, qayğanaq, kruasan, feta pendiri, çeri pomidoru, brioş, qəhvə',
                ru: 'Пастрами индейка, зеленые оливки, микс зелени, Яйца скрамбл, Помидоры черри, Круассан, Сыр фета и тост бриошь, Кофе',
                en: 'Turkey pastrami, green olives, mix salad scramble eggs, cherry tomatoes, feta cheese, brioche toast, croissant, coffee.'
            },
            price: '15'
        },
        {
            dish: {
                az: 'Benedict QIZIL BALIQ İLƏ',
                ru: 'Бенедикт с Лососем',
                en: 'Benedict with Salmon'
            },
            img: '../assets/images/morningFood/pashot_gold_fish.png',
            description: {
                az: 'İstəyə görə çörək, (Brioş, Vafli, Kruassan) az duzlu qızılbalıq, paşot yumurta, hollandez sousu ilə)',
                ru: 'Хлеб на выбор (Бриошь,Вафля,Круассан )копченый лосось, яйцо пашот, соус голландез',
                en: 'Bread of your choice, (Brioche, Waffle, Croissant) smoked salmon, poached eggs, hollandaise sauce'
            },
            price: '14-15'
        },
        {
            dish: {
                az: 'Benedict AVOKADO',
                ru: 'Бенедикт с Авокадо',
                en: 'Benedict with Avocado'
            },
            img: '../assets/images/morningFood/pashot_avocado.png',
            description: {
                az: 'İstəyə görə çörək, (Brioş, Vafli, Kruassan) avocado,paşot yumurta, hollandez sousu ilə',
                ru: 'Хлеб на выбор (Бриошь,Вафля,Круассан )авокадо, яйца пашот, соус голландез',
                en: 'Bread of your choice, (Brioche, Waffle, Croissant) avocado, poached eggs, hollandaise sauce'
            },
            price: '13-14'
        },
        {
            dish: {
                az: 'BRİOŞ SKRAMBL',
                ru: 'БРИОШЬ СКРЭМБЛ',
                en: 'BRIOCHE SCRAMBLED EGGS'
            },
            img: '../assets/images/morningFood/briosh_crambl.png',
            description: {
                az: 'Brioş, skrambl yumurta',
                ru: 'Бриошь, яичница болтунья',
                en: 'Brioche, scrambled eggs'
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
                az: 'Yumurta, qaymaq, kərə yağı seçimi ilə Çedar, Mozzarella və ya Qouda pendiri',
                ru: 'Яйца, сливки, сливочное масло с Чеддером, Моцареллой и Гаудой на выбор.',
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
                az: 'Giləmeyvəli sous və xama ilə servis edilir',
                ru: 'Подается с ягодным соусом и сметаной',
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
                az: 'Pomidor, yumurta, feta pendiri, bolqar bibəri, ədviyyatlar',
                ru: 'Помидоры, яйца, сыр фета, болгарский перец, специи',
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


