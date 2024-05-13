
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
                az: 'Espresso single',
                ru: 'Espresso single',
                en: 'Espresso single'
            },
            img: '../assets/images/coffee/espresso.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '3'
        },
        {
            dish: {
                az: 'Espresso',
                ru: 'Espresso',
                en: 'Espresso'
            },
            img: '../assets/images/coffee/espresso.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '4'
        },
        {
            dish: {
                az: 'Amerikano',
                ru: 'АМЕРИКАНО',
                en: 'Americano'
            },
            img: '../assets/images/coffee/americano.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '5.2'
        },
        {
            dish: {
                az: 'Cappucino',
                ru: 'КАПУЧИНО',
                en: 'Cappucino'
            },
            img: '../assets/images/coffee/cappucino.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '6'
        },
        {
            dish: {
                az: 'Flat white',
                ru: 'ФЛЭТ УАЙТ',
                en: 'Flat white'
            },
            img: '../assets/images/coffee/flat_white.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '6'
        },
        {
            dish: {
                az: 'Latte',
                ru: 'ЛАТТЕ',
                en: 'Latte'
            },
            img: '../assets/images/coffee/latte.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'Spanish latte',
                ru: 'Spanish latte',
                en: 'Spanish latte'
            },
            img: '../assets/images/coffee/spanish_latte.png',
            description: {
                az: 'Qatılaşdırılmış süd, espresso, süd',
                en: 'Condensed milk , espresso ,milk',
                ru: 'Сгущенное молоко ,эспрессо ,молоко',
            },
            price: '7'
        },
        {
            dish: {
                az: 'Klassik raf',
                ru: 'КЛАССИЧЕСКИЙ РАФ',
                en: 'Classic Raf'
            },
            img: '../assets/images/coffee/classic_raf.png',
            description: {
                az: 'Qaymaq ,espresso ,vanil siropu',
                ru: 'Ванильный сироп, сливки, эспрессо',
                en: 'Cream, espresso, Handmade vanilla syrup.'
            },
            price: '7,5'
        },
        {
            dish: {
                az: 'Mocha',
                ru: 'МОККА',
                en: 'MOCHA'
            },
            img: '../assets/images/coffee/mocha.png',
            description: {
                az: 'Belçika şokoladı, espresso, süd',
                ru: 'Бельгийский шоколад ,молоко ,эспрессо',
                en: 'Belgian Chocolate, espresso, milk'
            },
            price: '7.5'
        },
        {
            dish: {
                az: 'LAVANDALI RAF',
                ru: 'ЛАВАНДОВЫЙ РАФ',
                en: 'Raf Lavender'
            },
            img: '../assets/images/coffee/lavanda_raf.png',
            description: {
                az: 'Lavanda siropu, espresso, qaymaq, süd',
                ru: 'Сироп лаванды, эспрессо, сливки, молоко',
                en: 'Lavender syrup, milk, espresso'
            },
            price: '7.5'
        },
        {
            dish: {
                az: 'LAYM-NANƏLİ RAF',
                ru: 'РАФ ЛАЙМ-МЯТА',
                en: 'Lime Mint Raf'
            },
            img: '../assets/images/coffee/lime_mint_raf.png',
            description: {
                az: 'Laym nanə sublimatı, süd, qaymaq, espresso',
                ru: 'Сублимат из лайма и мяты, сливки, эспрессо',
                en: 'Lime Mint Sublimate, milk, cream, espresso'
            },
            price: '7.5'
        },
        {
            dish: {
                az: 'DUZLU KARAMEL İLƏ LATTE',
                ru: 'ЛАТТЕ СОЛЕНАЯ КАРАМЕЛЬ',
                en: 'Salted Cramael Latte'
            },
            img: '../assets/images/coffee/salt_karamel_latte.png',
            description: {
                az: 'Duzlu karamel siropu, espresso, süd, duzlu püstə',
                ru: 'Сироп солёная карамель, эспрессо, молоко',
                en: 'Handmade Salted Caramel syrup, milk, espresso, salted Pistacho.'
            },
            price: '8'
        },
        {
            dish: {
                az: 'LATTE KREM BRULE',
                ru: 'КРЕМ-БРЮЛЕ ЛАТТЕ',
                en: 'LATTE CREAM BRULE'
            },
            img: '../assets/images/coffee/latte_krem_brule.png',
            description: {
                az: 'Krem brule siropu , espresso , süd',
                ru: 'Сироп Крем-Брюле, молоко, эспрессо',
                en: 'Handmade Cream Brule syrup , espresso, milk'
            },
            price: '8'
        },
        {
            dish: {
                az: 'FISTIQLI RAF',
                ru: 'АРАХИСОВЫЙ РАФ',
                en: 'Peanut Raf'
            },
            img: '../assets/images/coffee/nuts_raf.png',
            description: {
                az: 'Fıstıq siropu, espresso, qaymaq, süd',
                ru: 'Арахисовый сироп, эспрессо, сливки',
                en: 'Handmade peanut syrup , cream, milk, espresso , peanut'
            },
            price: '8'
        },
        {
            dish: {
                az: 'PORTAĞAL LATTE',
                ru: 'АПЕЛЬСИНОВЫЙ ЛАТТЕ',
                en: 'Orange Latte'
            },
            img: '../assets/images/coffee/orange_latte.png',
            description: {
                az: 'Portağallı sublimat, süd, portağallı kurd, espresso',
                ru: 'Сублимат из апельсина, эспрессо, молоко, апельсиновый курд',
                en: 'Orange sublimate ,milk ,orange curd , espresso'
            },
            price: '9'
        },
        {
            dish: {
                az: 'LATTE PÜSTƏLİ',
                ru: 'ФИСТАШКОВОЕ ЛАТТЕ',
                en: 'Pistacho Latte'
            },
            img: '../assets/images/coffee/puste_latte.png',
            description: {
                az: 'Püstə siropu, espresso, süd',
                ru: 'Фисташковый сироп, эспрессо, молоко',
                en: 'Handmade Pistacho syrup, milk, espresso single'
            },
            price: '8'
        },
        {
            dish: {
                az: 'FELLOW STAGG',
                ru: 'FELLOW STAGG',
                en: 'FELLOW STAGG'
            },
            img: '../assets/images/coffee/fellow_stagg.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'AEROPRESS',
                ru: 'AEROPRESS',
                en: 'AEROPRESS'
            },
            img: '../assets/images/coffee/aeropress.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'BREWISTA GEM',
                ru: 'BREWISTA GEM',
                en: 'BREWISTA GEM'
            },
            img: '../assets/images/coffee/brewista_gem.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'SYPHON',
                ru: 'SYPHON',
                en: 'SYPHON'
            },
            img: '../assets/images/coffee/syphon.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'V60 POUR OVER',
                ru: 'V60 POUR OVER',
                en: 'V60 POUR OVER'
            },
            img: '../assets/images/coffee/v60_pour_over.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'ICE FILTER COFFEE',
                ru: 'ICE FILTER COFFEE',
                en: 'ICE FILTER COFFEE'
            },
            img: '../assets/images/coffee/ice_filter_coffee.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'CHAI TEA LATTE',
                ru: 'CHAI TEA LATTE',
                en: 'CHAI TEA LATTE'
            },
            img: '../assets/images/coffee/chai_tea_latte.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7'
        },
        {
            dish: {
                az: 'İSTİ ŞOKOLAD BANANLI',
                ru: 'ГОРЯЧИЙ ШОКОЛАД С БАНАНОМ',
                en: 'Hot Chocolate/ Banana'
            },
            img: '../assets/images/coffee/hot_chocolate_banana.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '8'
        },
        {
            dish: {
                az: 'İSTİ ŞOKOLAD',
                ru: 'ГОРЯЧИЙ ШОКОЛАД',
                en: 'HOT CHOCOLATE'
            },
            img: '../assets/images/coffee/hot_chocolate.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '7.5'
        },
        {
            dish: {
                az: 'MATÇA LATTE',
                ru: 'МАТЧА ЛАТТЕ',
                en: 'Matcha Latte'
            },
            img: '../assets/images/coffee/matca_latte.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '8'
        },
        {
            dish: {
                az: 'SARIKÖK LATTE',
                ru: 'КУРКУМА ЛАТТЕ',
                en: 'Turmeric Latte'
            },
            img: '../assets/images/coffee/sarikok_latte.png',
            description: {
                az: '',
                ru: '',
                en: ''
            },
            price: '8'
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
