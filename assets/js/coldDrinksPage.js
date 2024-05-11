
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
                az: 'QARA TONİK',
                ru: 'ЧЕРНЫЙ ТОНИК',
                en: 'Black Tonic'
            },
            img: '../assets/images/coldDrinks/black_tonic.png',
            description: {
                az: 'Schweppes, ColdBrew kofe',
                ru: 'Schweppes, ColdBrew кофе',
                en: 'Schweppes, ColdBrew coffee'
            },
            price: '8'
        },
        {
            dish: {
                az: 'BUZLU AMERİKANO',
                ru: 'ХОЛОДНЫЙ АМЕРИКАНО',
                en: 'Iced Americano'
            },
            img: '../assets/images/coldDrinks/cold_americano.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'BUZLU MOCHA',
                ru: 'ХОЛОДНЫЙ МОККА',
                en: 'Iced Mocha'
            },
            img: '../assets/images/coldDrinks/cold_mocha.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '8.2'
        },
        {
            dish: {
                az: 'BUZLU LATTE',
                ru: 'ХОЛОДНЫЙ ЛАТТЕ',
                en: 'Iced Latte'
            },
            img: '../assets/images/coldDrinks/cold_latte.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7.6'
        },
        {
            dish: {
                az:'AFFOGATO',
                ru:'Affogato',
                en:'Affogato'
            },
            img: '../assets/images/coldDrinks/affogato.png',
            description: {
                az:'Gelato Vanil, Espresso, Püstə',
                ru:'Мороженное Gelato, эспрессо, фисташки',
                en:'Gelato Ice Cream, Espresso, Pistacho.'
            },
            price: '7.6'
        },
        {
            dish: {
                az:'BUMBLEBEE',
                ru:'BUMBLEBEE',
                en:'BUMBLEBEE'
            },
            img: '../assets/images/coldDrinks/bumblbee.png',
            description: {
                az:'Portağal şirəsi, espresso',
                ru:'Апельсиновый фреш, эспрессо',
                en:'Orange juice, espresso'
            },
            price: '10'
        },
        {
            dish: {
                az:'FİZZY BREW',
                ru:'Fizzy Brew',
                en:'Fizzy Brew'
            },
            img: '../assets/images/coldDrinks/fizzy_brew.png',
            description: {
                az:'Schweppes, ColdBrew kofe, makaruya',
                ru:'Schweppes, ColdBrew кофе, маракуйа',
                en:'Schweppes, ColdBrew coffee, Passion Fruit.'
            },
            price: '9'
        },
        {
            dish: {
                az:'ICE FILTER COFFEE',
                ru:'ICE FILTER COFFEE',
                en:'ICE FILTER COFFEE'
            },
            img: '../assets/images/coldDrinks/ice_filter.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az:'ALOE POMEGRANATE LİMONADI (ACILI)',
                ru:'ОСТРЫЙ ЛЕМОНАД АЛОЭ ПОМЕГРАНАТ',
                en:'ALOE POMEGRANATE LEMONADE SPICY'
            },
            img: '../assets/images/coldDrinks/aloe_pomegranade_lemonade.png',
            description: {
                az:'Ədviyyat siropu, aloe, nar, limon',
                ru:'Пряный сироп, гранат, алоэ, лимон',
                en:'Aloe, Pomegranate, Handmade Spicy syrup, '
            },
            price: '8.5'
        },
        {
            dish: {
                az:'PASSİON FRUİT & CUCUMBER LİMONADI',
                ru:'Passion Cucumber',
                en:'Passion Cucumber'
            },
            img: '../assets/images/coldDrinks/passion_cucumber_lemonade.png',
            description: {
                az:'Marakuya, xıyar şirəsi',
                ru:'Маракуйа, свежий огурец',
                en:'Passion fruit, cucumber fresh'
            },
            price: '8.5'
        },
        {
            dish: {
                az:'JASMİNE & LİTCHİ LİMONADI',
                ru:'Jasmine Litchi',
                en:'Jasmine Litchi'
            },
            img: '../assets/images/coldDrinks/jasmine_litchi_lemonade.png',
            description: {
                az:'Litçi, jasmin çayı, laym',
                ru:'Литчи, лайм, чай жасмин',
                en:'Jasmine tea, Litchi fruit'
            },
            price: '8.5'
        },
        {
            dish: {
                az:'MATCHA & MELON LİMONADI',
                ru:'Matcha&Melon',
                en:'Matcha&Melon'
            },
            img: '../assets/images/coldDrinks/matcha_melon_lemonade.png',
            description: {
                az:'Yemiş siropu, matça, laym',
                ru:'Сироп дыни, матча',
                en:'Matcha, Melon syrup'
            },
            price: '8.5'
        },
        {
            dish: {
                az:'RASPBERRY LİMONADI',
                ru:'Raspberry',
                en:'Raspberry'
            },
            img: '../assets/images/coldDrinks/raspberry_lemonade.png',
            description: {
                az:'Rozmarin siropu, moruq, laym',
                ru:'Сироп розмарин, малина',
                en:'Raspberry, rosemary'
            },
            price: '8.5'
        },
        {
            dish: {
                az:'PEACH LİMONADI',
                ru:'ПЕРСИКОВЫЙ ЛИМОНАД',
                en:'Peach'
            },
            img: '../assets/images/coldDrinks/peach_lemonade.png',
            description: {
                az:'Şaftalı püresi, jasmin cayı, laym',
                ru:'Персиковое пюре, чай жасмин, лимон',
                en:'Peach syrup, jasmine tea'
            },
            price: '8.5'
        },
        {
            dish: {
                az:'QREYPFRUT FREŞ',
                ru:'ГРЕЙПФРУТОВЫЙ ФРЕШ',
                en:'Greypruit Fresh'
            },
            img: '../assets/images/coldDrinks/grapefruit_fresh.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '9'
        },
        {
            dish: {
                az:'PORTAĞAL FREŞ',
                ru:'АПЕЛЬСИНОВЫЙ ФРЕШ',
                en:'ORANGE FRESH'
            },
            img: '../assets/images/coldDrinks/orange_fresh.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '8'
        },
        {
            dish: {
                az:'MİKS FREŞ',
                ru:'МИКС ФРЕШ',
                en:'Mix Citrus Fresh'
            },
            img: '../assets/images/coldDrinks/mix_fresh.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '10'
        },
        {
            dish: {
                az:'MORUQLU SMUZİ',
                ru:'МАЛИНОВЫЙ СМУЗИ',
                en:'Rasprberry'
            },
            img: '../assets/images/coldDrinks/moruq_smuzi.png',
            description: {
                az:'Moruq, banan, süd',
                ru:'Малина, банан молоко',
                en:'Raspberry, Banana, Milk'
            },
            price: '9'
        },
        {
            dish: {
                az:'MARAKUYA SMUZİ',
                ru:'МАРАКУЙА СМУЗИ',
                en:'Passion Fruit'
            },
            img: '../assets/images/coldDrinks/marakuya_smuzi.png',
            description: {
                az:'Marakuya, banan, süd',
                ru:'Маракуйа, банан, молоко',
                en:'Passion Fruit, banana, milk'
            },
            price: '9'
        },
        {
            dish: {
                az:'MİKS GİLƏMEYVƏLİ SMUZİ',
                ru:'ЯГОДНЫЙ СМУЗИ',
                en:'Strawberry'
            },
            img: '../assets/images/coldDrinks/mix_smuzi.png',
            description: {
                az:'Çiyələk, banan, süd',
                ru:'Клубника, банан, молоко',
                en:'Strawberry, Banana, Milk'
            },
            price: '9'
        },
        {
            dish: {
                az:'ÇİYƏLƏKLİ MİLKSHAKE',
                ru:'КЛУБНИЧНЫЙ МИЛКШЕЙК',
                en:'Strawberry MILKSHAKE'
            },
            img: '../assets/images/coldDrinks/ciyelek_milkshake.png',
            description: {
                az:'Gelato çiyələk, süd',
                ru:'Мороженное Gelato, молоко',
                en:'Gelato Strawberry ice cream, milk, ice'
            },
            price: '7'
        },
        {
            dish: {
                az:'ŞOKOLADLI MİLKSHAKE',
                ru:'ШОКОЛАДНЫЙ МИЛКШЕЙК',
                en:'Chocolate / ChocoCherry MILKSHAKE'
            },
            img: '../assets/images/coldDrinks/chocolate_milkshake.png',
            description: {
                az:'Gelato şokolad, süd',
                ru:'Мороженное Gelato, молоко',
                en:' Gelato Chocolate / with Cherry ice cream, milk, ice'
            },
            price: '7'
        },
        {
            dish: {
                az:'BANANLI MİLKSHAKE',
                ru:'БАНАНОВЫЙ МИЛКШЕЙК',
                en:'Banana MILKSHAKE'
            },
            img: '../assets/images/coldDrinks/banana_milkshake.png',
            description:{
                az: 'Gelato banan, süd',
                ru:'Мороженное Gelato, молоко',
                en:'Gelato Banana iced cream, milk, ice'
            },
            price: '7'
        },
        {
            dish: {
                az:'VANİLLİ MİLKSHAKE',
                ru:'ВАНИЛЬНЫЙ МИЛКШЕЙК',
                en:'Vanilla MILKSHAKE'
            },
            img: '../assets/images/coldDrinks/vanille_milkshake.png',
            description: {
                az:'Gelato vanil, süd',
                ru:'Мороженное Gelato, молоко',
                en:'Gelato Vanilla ice cream, milk, ice'
            },
            price: '7'
        },
        {
            dish: {
                az:'QAZLI SU',
                ru:'ВОДА С ГАЗОМ',
                en:'Sparkling Water'
            },
            img: '../assets/images/coldDrinks/sparkling_water.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '4'
        },
        {
            dish: {
                az:'QAZSIZ SU',
                ru:'ВОДА БЕЗ ГАЗА',
                en:'Still Water'
            },
            img: '../assets/images/coldDrinks/still_water.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '4'
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

