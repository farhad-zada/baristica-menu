
var swiper = new Swiper('.swiper-container', {
    slidesPerView: '1',
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const coffeContent = [
    {
        dish: 'Espresso single',
        img: '../assets/images/coffee/espresso.png',
        description: '',
        price: '3'
    },
    {
        dish: 'Espresso',
        img: '../assets/images/coffee/espresso.png',
        description: '',
        price: '4'
    },
    {
        dish: 'Amerikano',
        img: '../assets/images/coffee/americano.png',
        description: '',
        price: '5.2'
    },
    {
        dish: 'Cappucino',
        img: '../assets/images/coffee/cappucino.png',
        description: '',
        price: '6'
    },
    {
        dish: 'Flat white',
        img: '../assets/images/coffee/flat_white.png',
        description: '',
        price: '6'
    },
    {
        dish: 'Latte',
        img: '../assets/images/coffee/latte.png',
        description: '',
        price: '7'
    },
    {
        dish: 'Spanish latte',
        img: '../assets/images/coffee/spanish_latte.png',
        description: 'Qatılaşdırılmış süd, espresso, süd',
        price: '7'
    },
    {
        dish: 'Klassik raf',
        img: '../assets/images/coffee/classic_raf.png',
        description: 'Vanil siropu, qaymaq, espresso',
        price: '7,5'
    },
    {
        dish: 'Mocha',
        img: '../assets/images/coffee/mocha.png',
        description: 'Belçika şokoladı, espresso, süd',
        price: '7.5'
    },
    {
        dish: 'LAVANDALI RAF',
        img: '../assets/images/coffee/lavanda_raf.png',
        description: 'Lavanda siropu, espresso, qaymaq, süd',
        price: '7.5'
    },
    {
        dish: 'LAYM-NANƏLİ RAF',
        img: '../assets/images/coffee/lime_mint_raf.png',
        description: 'Laym nanə sublimatı, süd, qaymaq, espresso',
        price: '7.5'
    },
    {
        dish: 'DUZLU KARAMEL İLƏ LATTE',
        img: '../assets/images/coffee/salt_karamel_latte.png',
        description: 'Duzlu karamel siropu, espresso, süd, duzlu püstə',
        price: '8'
    },
    {
        dish: 'LATTE KREM BRULE',
        img: '../assets/images/coffee/latte_krem_brule.png',
        description: '',
        price: '8'
    },
    {
        dish: 'FISTIQLI RAF',
        img: '../assets/images/coffee/nuts_raf.png',
        description: 'Fıstıq siropu, espresso, qaymaq, süd',
        price: '8'
    },
    {
        dish: 'PORTAĞAL LATTE',
        img: '../assets/images/coffee/orange_latte.png',
        description: 'Portağallı sublimat, süd, portağallı kurd, espresso',
        price: '9'
    },
    {
        dish: 'LATTE PÜSTƏLİ',
        img: '../assets/images/coffee/puste_latte.png',
        description: 'Püstə siropu, espresso, süd',
        price: '8'
    },
    {
        dish: 'FELLOW STAGG',
        img: '../assets/images/coffee/fellow_stagg.png',
        description: '',
        price: '7'
    },
    {
        dish: 'AEROPRESS',
        img: '../assets/images/coffee/aeropress.png',
        description: '',
        price: '7'
    },
    {
        dish: 'BREWISTA GEM',
        img: '../assets/images/coffee/brewista_gem.png',
        description: '',
        price: '7'
    },
    {
        dish: 'SYPHON',
        img: '../assets/images/coffee/syphon.png',
        description: '',
        price: '7'
    },
    {
        dish: 'V60 POUR OVER',
        img: '../assets/images/coffee/v60_pour_over.png',
        description: '',
        price: '7'
    },
    {
        dish: 'ICE FILTER COFFEE',
        img: '../assets/images/coffee/ice_filter_coffee.png',
        description: '',
        price: '7'
    },
    {
        dish: 'CHAI TEA LATTE',
        img: '../assets/images/coffee/chai_tea_latte.png',
        description: '',
        price: '7'
    },
    {
        dish: 'İSTİ ŞOKOLAD BANANLI',
        img: '../assets/images/coffee/hot_chocolate_banana.png',
        description: '',
        price: '8'
    },
    {
        dish: 'İSTİ ŞOKOLAD',
        img: '../assets/images/coffee/hot_chocolate.png',
        description: '',
        price: '7.5'
    },
    {
        dish: 'MATÇA LATTE',
        img: '../assets/images/coffee/matca_latte.png',
        description: '',
        price: '8'
    },
    {
        dish: 'SARIKÖK LATTE',
        img: '../assets/images/coffee/sarikok_latte.png',
        description: '',
        price: '8'
    },
]

const swiper_wrapper = document.querySelector('.swiper-wrapper')
swiper_wrapper.innerHTML = ''
coffeContent.map((content) => {
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