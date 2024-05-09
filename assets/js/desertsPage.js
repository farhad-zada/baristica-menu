




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
                az:'KÖKLÜ PİROQ',
                ru:'ИМБИРЕВЫЙ ПИРОГ',
                en:'GİNGER PİE'
            },
            img: '../assets/images/deserts/koklu_piroq.png',
            description: {
                az:'Qoz, muskat, darçın, zəncəfil və qaymaq ilə',
                ru:'C грецкими орехами, мускатным орехом, специями, имбирем и с насыщенным кремом',
                en:'With walnuts, nutmeg, spices, ginger and rich cream'
            },
            price: '7.5'
        },
        {
            dish: {
                az:'TİRAMİSU KETO',
                ru:'TİRAMİSU KETO',
                en:''
            },
            img: '../assets/images/deserts/teramisu_keto.png',
            description: {
                az:'Badam unundan biskvit, espresso, mascarpone kremi, kakao Şəkərsiz və Qlutensiz',
                ru:'Миндально-ореховый бисквит, пропитанный шотом эспрессо, сливочным маскарпоне, какао Без глютена и сахара',
                en:'Gluten and sugar  free almond biscuit , socked in espresso shut, creamy mascarpone, cacao powder '
            },
            price: '12'
        },
        {
            dish: {
                az:'SAN SEBASTİAN (PƏHRİZ)',
                ru:'САН СЕБАСТЬЯН',
                en:'SAN SEBASTİAN'
            },
            img: '../assets/images/deserts/san_sebastian.png',
            description: {
                az:'Bask sayağı, qaymaqlı çizkeyk',
                ru:'Баскский сливочный чизкейк',
                en:'Basque creamy cheesecake    '
            },
            price: '10'
        },
        {
            dish: {
                az:'BALLI TORT',
                ru:'МЕДОВЫЙ ТОРТ',
                en:'HONEY CAKE'
            },
            img: '../assets/images/deserts/honey_cake.png',
            description: {
                az:'Təbii baldan hazırlanmış biskvit və qaymaqlı krem',
                ru:'Натуральное медовое коржи с насыщенным заварным кремом',
                en:'Natural honey cake with rich custard'
            },
            price: '11'
        },
        {
            dish: {
                az:'XURMA KAP',
                ru:'Хурма Кап',
                en:'Persimmon Cup'
            },
            img: '../assets/images/deserts/xurma_kap.png',
            description: {
                az:'Təzə xurma, diplomat kremi və xırçıltılı şokolad dənələri ilə Şəkərsiz və Qlutensiz',
                ru:'Свежая хурма, сливочный крем с экспрессом, шоколадная крамбл',
                en:'Fresh persimmon, express cream, chocolate crumble'
            },
            price: '8.5'
        },
        {
            dish: {
                az:'BRAUİNİ',
                ru:'БРАУНИ',
                en:'Brownie'
            },
            img: '../assets/images/deserts/brauni.png',
            description: {
                az:'Şokoladlı biskvit, qaymaqlı qanaş, namelaka kremi',
                ru:'Шоколадный торт, со сливочным ганашем и кремом намелака',
                en:'Chocolate cake with creamy ganache, cream namelaka '
            },
            price: '7.5'
        },
        {
            dish: {
                az:'KOKOS KETO',
                ru:'Кокос кето',
                en:'COCONUT KETO'
            },
            img: '../assets/images/deserts/kokos_keto.png',
            description: {
                az:'Badam unundan biskvit, kokos kremi, mascarpone kremi, kokos dənəcikləri Şəkərsiz və Qlutensiz',
                ru:'Безглютеновая, безсахарная миндально-ореховий бисквит, кокосовый  крем, крем маскарпоне, кокосовой стружки',
                en:'Gluten and sugar-free mix of  almond hazelnut biscuit, coconut cream, mascarpone cream, coconut flakes'
            },
            price: '10'
        },
        {
            dish: {
                az:'MİRENGA TORT',
                ru:'ТОРТ МИРЕНГА',
                en:'MERENGUE CAKE'
            },
            img: '../assets/images/deserts/kokos_keto.png',
            description: {
                az:'Biskvit beze ilə qaymaqlı krem muss',
                ru:'Нежный сливочный мусс с бисквитным безе',
                en:'Delicate creamy mousse with biscuit meringue'
            },
            price: '9'
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

