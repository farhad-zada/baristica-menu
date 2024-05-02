
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
        dish: 'LİMONLU NANƏLİ ÇAY',
        img: '../assets/images/tea/lemon_mint_tea.png',
        description: '',
        price: '5'
    },
    {
        dish: 'QARA ÇAY',
        img: '../assets/images/tea/black_tea.png',
        description: '',
        price: '5'
    },
    {
        dish: 'YAŞIL ÇAY',
        img: '../assets/images/tea/green_tea.png',
        description: '',
        price: '5'
    },
    {
        dish: 'YASƏMƏN ÇAY',
        img: '../assets/images/tea/yasemen_tea.png',
        description: '',
        price: '5'
    },
    {
        dish: 'MEYVƏLİ ÇAY',
        img: '../assets/images/tea/fruit_tea.png',
        description: '',
        price: '5'
    },
    {
        dish: 'BERQAMOT ÇAY',
        img: '../assets/images/tea/bergamot_tea.png',
        description: '',
        price: '5'
    },
    {
        dish: 'CASCARA ÇAYI',
        img: '../assets/images/tea/cascara_tea.png',
        description: 'Qəhvə giləmeyvələri',
        price: '7'
    }, 
    {
        dish: 'TROPİK MEYVƏLİ ÇAY',
        img: '../assets/images/tea/tropic_fruit_tea.png',
        description: 'Kumquat, portağal, jasmin çay, marakuya',
        price: '7'
    },
    {
        dish: 'GİLƏMEYVƏLİ ÇAY',
        img: '../assets/images/tea/gilemeyveli_tea.png',
        description: 'qarışıq giləmeyvələr, hibiskus çayı, rozmarin',
        price: '7'
    },
]

const swiper_wrapper = document.querySelector('.swiper-wrapper')
swiper_wrapper.innerHTML = ''
foodContent.map((content) => {
    swiper_wrapper.innerHTML += `
    <div class="swiper-slide dish-element">
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
    `
})