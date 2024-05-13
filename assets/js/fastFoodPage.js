
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
                az: 'HİSƏ VERİLMİŞ QIZILBALIQ İLƏ BRUSKETTA',
                ru: 'БРУСКЕТТА С КОПЧЕННЫМ ЛОСОСЕМ',
                en: 'Smoked Salmon Brushetta'
            },
            img: '../assets/images/fastFood/gold_fish_brusketta.png',
            description: {
                az: 'Çiabatta çörəyində, quakamole, stracciatella, hisə verilmiş qızılbalıq, rukkola, çerri pomidor',
                ru: 'Хлеб чиабаттa, гуакамоле, страчателлa, копченым лососем, руккола, черри помидоры',
                en: 'Ciabatta bread, guacamole, stracciatella and smoked salmon, arugula, cherry tomatoes'
            },
            price: '13'
        },
        {
            dish: {
                az: 'QIZARDILMIŞ MAL ƏTİ İLƏ BRUSKETTA',
                ru: 'БРУСКЕТТА С РОСТБИФОМ',
                en: 'Roast beef Brushetta'
            },
            img: '../assets/images/fastFood/meat_brusketta.png',
            description: {
                az: 'Çiabatta çörəyində quakamole, stracciatella rostbif, rukkola, çerri pomidor',
                ru: 'Хлеб чиабатта гуакамоле, страчателлой, ростбифом, рукола, черри помидоры',
                en: 'Ciabatta bread, guacamole, stracciatella, roast beef, arugula, cherry tomatoes'
            },
            price: '12'
        },
        {
            dish: {
                az: 'VETÇİNA VƏ PENDİRLİ TOST (HALAL)',
                ru: 'ТОСТ С ВЕТЧИНОЙ И СЫРОМ (HALAL)',
                en: ' Ham & Cheese Tost (HALAL)'
            },
            img: '../assets/images/fastFood/vetchine_cheese_tost.png',
            description: {
                az: 'Hind toyuqlu vetçina Mozarella pendiri ilə',
                ru: 'Ветчина из индейки с сыром Моцарелла',
                en: 'Tost, turkey ham with mozarella cheese'
            },
            price: '9'
        },
        {
            dish: {
                az: 'VETÇİNA VƏ PENDİR İLƏ KRUASSAN',
                ru: 'КРУАССАН С ВЕТЧИНОЙ И СЫРОМ',
                en: ' Ham & Cheese Croissant'
            },
            img: '../assets/images/fastFood/vetchine_cheese_kruassan.png',
            description: {
                az: 'Kruassan hind toyuqlu vetçina Mozarella pendiri ilə',
                ru: 'Круассан, ветчина из индейки с сыром моцарелла',
                en: 'Croissant, turkey ham with mozarella cheese'
            },
            price: '9'
        },
        {
            dish: {
                az: 'QIZIL BALIQ VƏ AVOKADO İLƏ KRUASSAN',
                ru: 'КРУАССАН С ЛОСОСЕМ И АВОКАДО',
                en: 'CROISSANT WITH SALMON AND AVOCADO'
            },
            img: '../assets/images/fastFood/gold_fish_avokado_kruassan.png',
            description: {
                az: 'Hisə verilmiş qızıl balıq, quakamole, krem pendir, kahı',
                ru: 'Копченый лосось, крем сыр, гукамоле',
                en: 'Smoked salmon, guacamole, cream cheese, lettuce'
            },
            price: '16'
        },
        {
            dish: {
                az: 'QIZARDILMIŞ TOYUQ İLƏ TOST',
                ru: 'ТОСТ С КУРИЦЕЙ',
                en: 'Roast Beef Tost'
            },
            img: '../assets/images/fastFood/chicken_tost.png',
            description: {
                az: 'Tost çörəyi, toyuq, mozzarella pendiri, təzə pomidor, təzə xıyar, yumurta, qırmızı kələm, mayonez',
                ru: 'Тост хлеб, курица, сыр моцарелла, жареное яйцо, свежие помидоры, свежие огурцы, красная капуста, майонез',
                en: 'Toast bread, roast beef, mozzarella cheese, fried eggs, fresh tomato, fresh cucumbers, red cabbage, mayo'
            },
            price: '10'
        },
        {
            dish: {
                az: 'HİND TOYUQU İLƏ TOST',
                ru: 'ТОСТ С ИНДЕЙКОЙ',
                en: 'Turkey Tost'
            },
            img: '../assets/images/fastFood/hind_chicken_tost.png',
            description: {
                az: 'Tost çörəyi, hind toyuğu, mozzarella pendiri, qızardılmış yumurta, təzə pomidor, turşu xıyar, qırmızı kələm, mayonez',
                ru: 'Тост хлеб, индейка, сыр моцарелла, жареное яйцо, свежие помидоры, маринованные огурцы, красная капуста, майонез',
                en: 'Toast bread, turkey, mozzarella cheese,fried eggs, fresh tomato, pickled cucumbers, red cabbage, mayo'
            },
            price: '11'
        },
        {
            dish: {
                az: 'QIZARDILMIŞ ƏT İLƏ TOST',
                ru: 'РОСТБИФ ТОСТ',
                en: 'Roast Beef Tost'
            },
            img: '../assets/images/fastFood/meat_tost.png',
            description: {
                az: 'Tost çörəyi, rostbif, mozzarella pendiri, təzə pomidor, təzə xıyar, yumurta, qırmızı kələm, mayonez',
                ru: 'Тост хлеб, ростбиф, сыр моцарелла, жареное яйцо, свежие помидоры, свежие огурцы, красная капуста, майонез',
                en: 'Toast bread, roast beef, mozzarella cheese, fried eggs, fresh tomato, fresh cucumbers, red cabbage, mayo'
            },
            price: '14'
        },
        {
            dish: {
                az: 'QIZIL BALIQ İLƏ TOST',
                ru: 'ТОСТ С КОПЧЕННЫМ ЛОСОСЕМ',
                en: 'Salmon Tost'
            },
            img: '../assets/images/fastFood/gold_fish_tost.png',
            description: {
                az: 'Tost çörəyi, hisə verilmiş qızılbalıq, aysberq kahı, xiyar, krem pendir',
                ru: 'Тост ,лосось средней копчености ,салат айсберг , крем сыр ,свежий огурец',
                en: 'Toast bread , smoked salmon , cream cheese , cucumber , aysberg lettuce'
            },
            price: '15'
        },
        {
            dish: {
                az: 'TOYUQ İLƏ SENDVİÇ VAFLİDƏ',
                ru: 'КУРИНЫЙ СЕНДВИЧ В ВАФЛЕ',
                en: 'Chicken Waffle sandwich'
            },
            img: '../assets/images/fastFood/chicken_sandwich_waffle.png',
            description: {
                az: 'Vafli, toyuq, mozzarella pendiri, təzə pomidor, təzə xıyar, qızardılmış yumurta, kahı, krem pesto sous',
                ru: 'Вафли, курица , жареное яйцо, сыр моцарелла,свежие помидоры, свежие огурцы, латук, сливочный соус песто',
                en: 'Waffle, chicken, mozzarella cheese, fresh tomato, fresh cucumber, fried eggs, lettuce, creamy peto sauce '
            },
            price: '10'
        },
        {
            dish: {
                az: 'HİND TOYUQU İLƏ SENDVİÇ VAFLİDƏ',
                ru: 'СЭНДВИЧ С ИНДЕЙКОЙ В ВАФЛЕ',
                en: 'Turkey Waffle Sandwich'
            },
            img: '../assets/images/fastFood/hind_chicken_sandwich_waffle.png',
            description: {
                az: 'Vafli, hind toyuğu pastrami, mozzarella pendiri, təzə pomidor və turşu xiyar,qızardılmış yumurta, kahı, krem pesto sousla',
                ru: 'Вафля, индейка, сыр моцарелла, свежие помидоры ,соленые огурцы, яйца, листья салата, крем песто соус',
                en: 'Waffle, turkey, mozzarella cheese, fresh tomato and cucumber,eggs, lettuce, cream pesto sauce'
            },
            price: '11'
        },
        {
            dish: {
                az: 'QIZARDILMIŞ ƏT İLƏ SENDVİÇ VAFLİDƏ',
                ru: 'СЭНДВИЧ С ГОВЯДИНОЙ В ВАФЛЕ',
                en: 'ROASTBEEF WAFFLE SANDWICH'
            },
            img: '../assets/images/fastFood/fried_meat_sandwich_vaffle.png',
            description: {
                az: 'Vafli, rozbif  ,mozzarella pendiri, təzə pomidor və  xiyar,qızardılmış yumurta, kahı, krem pesto sousla',
                ru: 'Вафля, ростбиф, сыр моцарелла, свежие помидоры и огурцы, яйца, листья салата, крем песто соус',
                en: 'Waffle ,roast beef, mozzarella cheese, fried eggs, fresh tomato and cucumber, red cabbage, cream pesto sauce'
            },
            price: '14'
        },
        {
            dish: {
                az: 'QIZIL BALIQ İLƏ SENDVİÇ VAFLİDƏ',
                ru: 'СЭНДВИЧ С КОПЧЕННЫМ ЛОСОСЕМ В ВАФЛЕ',
                en: ' Salmon Waffle Sandwich'
            },
            img: '../assets/images/fastFood/gold_fish_sandwich_vaffle.png',
            description: {
                az: 'Vafli, hisə verilmiş qızılbalıq, təzə xiyar, kahı, krem pendir ilə',
                ru: 'Вафля ,лосось средней копчёности ,салат айсберг , крем сыр , свежий огурец',
                en: 'Waffles ,smoked salmon , cream cheese , cucumber , iceberg lettuce'
            },
            price: '15'
        },
        {
            dish: {
                az: '‘SWEET & SOUR CRİSPY’ TOYUQ İLƏ SENDVİÇ',
                ru: '‘SWEET & SOUR CRİSPY’ СЭНДВИЧ С КУРИЦЕЙ',
                en: 'Sweet & Sour  Crispy Chicken Sendwich'
            },
            img: '../assets/images/fastFood/sweet_sour_chicken_sandwich.png',
            description: {
                az: 'Baristica Burger Çörəyi, Asiya ədviyyatları ilə qızardılmış toyuq, turşa-şirin sous, aysberq kahı, pomidor, küncüt',
                ru: 'Baristica Бургер Бан , жареная курица с азиатскими специями, кисло-сладкий соус, салат айсберг, помидоры, кунжут',
                en: 'Baristica  Burger Ban , Asian Spicies fried chicken , sweet&sour souce, iceberg lettuce, tomatoes, seasam'
            },
            price: '12'
        },
        {
            dish: {
                az: '‘CAPRİSE’ SENDVİÇ',
                ru: '‘CAPRİSE’ СЭНДВИЧ',
                en: '‘CAPRISE’ SANDWICH'
            },
            img: '../assets/images/fastFood/caprise_sandwich.png',
            description: {
                az: 'Barictica Çiabatta, italyan qarışıq göyərti, italyan təzə mozzarellası, krem pendir, pomidor, rukola, pesto sousu və qatılaşdırılmış balzamik',
                ru: 'Баристика Чиабатта, микс зелен итальянский, свежая итальянская моцарелла, крем сыр, помидоры, руккола, соус песто и бальзамик',
                en: 'Baristica Ciabatta, Italian mixed greens, fresh Italian mozzarella, cream cheese, tomatoes, arugula, pesto and balsamic'
            },
            price: '14'
        },
        {
            dish: {
                az: 'TOYUQ İLƏ ROLL',
                ru: 'РОЛЛ С КУРИЦЕЙ',
                en: 'Chicken Wrap'
            },
            img: '../assets/images/fastFood/chicken_roll.png',
            description: {
                az: 'Tortilla, qızardılmış toyuq, aysberq kahı, təzə pomidor, pendirli və ədviyyatlı sous',
                ru: 'Тортилья, жареная курица, салат айсберг, свежие помидоры, сыр и пикантный соус',
                en: 'Tortilla, fried chicken, iceberg lettuce fresh tomatoes, cheese and spicy sauce '
            },
            price: '10'
        },
        {
            dish: {
                az: 'ƏT İLƏ ROLL',
                ru: 'РОЛЛ С МЯСОМ',
                en: 'Beef Wrap'
            },
            img: '../assets/images/fastFood/meat_roll.png',
            description: {
                az: 'Tortilla, can əti, aysberq kahı, təzə pomidor, ikiqat pendirli sousu',
                ru: 'Тортилья, вырезка, салат айсберг, свежие помидоры, двойной сырный соус',
                en: 'Tortilla, tenderloin , iceberg lettuce, fresh tomatoes, double cheese sauce'
            },
            price: '13'
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

