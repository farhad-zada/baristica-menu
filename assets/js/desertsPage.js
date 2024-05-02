
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
        dish: 'KÖKLÜ PİROQ',
        img: '../assets/images/deserts/koklu_piroq.png',
        description: 'Qoz, muskat, darçın, zəncəfil və qaymaq ilə',
        price: '7.5'
    },
    {
        dish: 'TİRAMİSU KETO',
        img: '../assets/images/deserts/teramisu_keto.png',
        description: 'Badam unundan biskvit, espresso, mascarpone kremi, kakao Şəkərsiz və Qlutensiz',
        price: '12'
    },
    {
        dish: 'SAN SEBASTİAN (PƏHRİZ)',
        img: '../assets/images/deserts/san_sebastian.png',
        description: 'Bask sayağı, qaymaqlı çizkeyk',
        price: '10'
    },
    {
        dish: 'BALLI TORT',
        img: '../assets/images/deserts/honey_cake.png',
        description: 'Təbii baldan hazırlanmış biskvit və qaymaqlı krem',
        price: '11'
    },
    {
        dish: 'XURMA KAP',
        img: '../assets/images/deserts/xurma_kap.png',
        description: 'Təzə xurma, diplomat kremi və xırçıltılı şokolad dənələri ilə Şəkərsiz və Qlutensiz',
        price: '8.5'
    },
    {
        dish: 'BRAUİNİ',
        img: '../assets/images/deserts/brauni.png',
        description: 'Şokoladlı biskvit, qaymaqlı qanaş, namelaka kremi',
        price: '7.5'
    },
    {
        dish: 'KOKOS KETO',
        img: '../assets/images/deserts/kokos_keto.png',
        description: 'Badam unundan biskvit, kokos kremi, mascarpone kremi, kokos dənəcikləri Şəkərsiz və Qlutensiz',
        price: '10'
    },
    {
        dish: 'MİRENGA TORT',
        img: '../assets/images/deserts/kokos_keto.png',
        description: 'Biskvit beze ilə qaymaqlı krem muss',
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