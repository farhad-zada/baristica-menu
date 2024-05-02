
var swiper = new Swiper('.swiper-container', {
    slidesPerView: '1',
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const foodContent = [
    {
        dish: 'QARA TONİK',
        img: '../assets/images/coldDrinks/black_tonic.png',
        description: 'Schweppes, ColdBrew kofe',
        price: '8'
    },
    {
        dish: 'BUZLU AMERİKANO',
        img: '../assets/images/coldDrinks/cold_americano.png',
        description: '',
        price: '7'
    },
    {
        dish: 'BUZLU MOCHA',
        img: '../assets/images/coldDrinks/cold_mocha.png',
        description: '',
        price: '8.2'
    },
    {
        dish: 'BUZLU LATTE',
        img: '../assets/images/coldDrinks/cold_latte.png',
        description: 'Qızardılmış krivet, qarışıq italyan göyərtisi, çerri pomidor, şam fistiğı, zeytun yağı və laym şirəsi',
        price: '7.6'
    },
    {
        dish: 'AFFOGATO',
        img: '../assets/images/coldDrinks/affogato.png',
        description: 'Gelato Vanil, Espresso, Püstə',
        price: '7.6'
    },
    {
        dish: 'BUMBLEBEE',
        img: '../assets/images/coldDrinks/bumblbee.png',
        description: 'Portağal şirəsi, espresso',
        price: '10'
    },
    {
        dish: 'FİZZY BREW',
        img: '../assets/images/coldDrinks/fizzy_brew.png',
        description: 'Schweppes, ColdBrew kofe, makaruya',
        price: '9'
    },
    {
        dish: 'ICE FILTER COFFEE',
        img: '../assets/images/coldDrinks/ice_filter.png',
        description: '',
        price: '7'
    },
    {
        dish: 'ALOE POMEGRANATE LİMONADI (ACILI)',
        img: '../assets/images/coldDrinks/aloe_pomegranade_lemonade.png',
        description: 'Ədviyyat siropu, aloe, nar, limon',
        price: '8.5'
    },
    {
        dish: 'PASSİON FRUİT & CUCUMBER LİMONADI',
        img: '../assets/images/coldDrinks/passion_cucumber_lemonade.png',
        description: 'Marakuya, xıyar şirəsi',
        price: '8.5'
    },
    {
        dish: 'JASMİNE & LİTCHİ LİMONADI',
        img: '../assets/images/coldDrinks/jasmine_litchi_lemonade.png',
        description: 'Litçi, jasmin çayı, laym',
        price: '8.5'
    },
    {
        dish: 'MATCHA & MELON LİMONADI',
        img: '../assets/images/coldDrinks/matcha_melon_lemonade.png',
        description: 'Yemiş siropu, matça, laym',
        price: '8.5'
    },
    {
        dish: 'RASPBERRY LİMONADI',
        img: '../assets/images/coldDrinks/raspberry_lemonade.png',
        description: 'Rozmarin siropu, moruq, laym',
        price: '8.5'
    },
    {
        dish: 'PEACH LİMONADI',
        img: '../assets/images/coldDrinks/peach_lemonade.png',
        description: 'Şaftalı püresi, jasmin cayı, laym',
        price: '8.5'
    },
    {
        dish: 'QREYPFRUT FREŞ',
        img: '../assets/images/coldDrinks/grapefruit_fresh.png',
        description: '',
        price: '9'
    },
    {
        dish: 'PORTAĞAL FREŞ',
        img: '../assets/images/coldDrinks/orange_fresh.png',
        description: '',
        price: '8'
    },
    {
        dish: 'MİKS FREŞ',
        img: '../assets/images/coldDrinks/mix_fresh.png',
        description: '',
        price: '10'
    },
    {
        dish: 'MORUQLU SMUZİ',
        img: '../assets/images/coldDrinks/moruq_smuzi.png',
        description: 'Moruq, banan, süd',
        price: '9'
    },
    {
        dish: 'MARAKUYA SMUZİ',
        img: '../assets/images/coldDrinks/marakuya_smuzi.png',
        description: 'Marakuya, banan, süd',
        price: '9'
    },
    {
        dish: 'MİKS GİLƏMEYVƏLİ SMUZİ',
        img: '../assets/images/coldDrinks/mix_smuzi.png',
        description: 'Çiyələk, banan, süd',
        price: '9'
    },
    {
        dish: 'ÇİYƏLƏKLİ MİLKSHAKE',
        img: '../assets/images/coldDrinks/ciyelek_milkshake.png',
        description: 'Gelato çiyələk, süd',
        price: '7'
    },
    {
        dish: 'ŞOKOLADLI MİLKSHAKE',
        img: '../assets/images/coldDrinks/chocolate_milkshake.png',
        description: 'Gelato şokolad, süd',
        price: '7'
    },
    {
        dish: 'BANANLI MİLKSHAKE',
        img: '../assets/images/coldDrinks/banana_milkshake.png',
        description: 'Gelato banan, süd',
        price: '7'
    },
    {
        dish: 'VANİLLİ MİLKSHAKE',
        img: '../assets/images/coldDrinks/vanille_milkshake.png',
        description: 'Gelato vanil, süd',
        price: '7'
    },
    {
        dish: 'QAZLI SU',
        img: '../assets/images/coldDrinks/sparkling_water.png',
        description: '',
        price: '4'
    },
    {
        dish: 'QAZSIZ SU',
        img: '../assets/images/coldDrinks/still_water.png',
        description: '',
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
                ${content.dish}
            </h2>
            <div class="dish-img">
                <img src="${content.img}" alt="">
            </div>
            <p class="dish-description">
                ${content.description}
            </p>
            <div class="dish-price">
                ${content.price} azn
            </div>
        </div>
    </div>
    `
})