
var swiper = new Swiper('.swiper-container', {
    slidesPerView: '1',
    spaceBetween: 30,
});

const foodContent = [
    {
        dish: 'İSPANAQ ŞORBASI',
        img: '../assets/images/hotFood/spanish_soup.png',
        description: 'Qaymaq və qatılaşdırılmış balzamiklə servis edilir',
        price: '6'
    },
    {
        dish: 'TOMAT ŞORBASI',
        img: '../assets/images/hotFood/tomato_soup.png',
        description: 'Pendir əridilmiş krutonlar və Pesto sousu süfrəyə verilir',
        price: '6'
    },
    {
        dish: 'GÖBƏLƏK KREM ŞORBASI',
        img: '../assets/images/hotFood/mushroom_cream_soup.png',
        description: 'Qaymaq və soğan ilə göbələk şorbası',
        price: '7'
    },
    {
        dish: 'QIZIL BALIQ VƏ KİM CHİ SOUSU İLƏ POKE',
        img: '../assets/images/hotFood/gold_fish_poke.png',
        description: 'Təzə qızıl balıq, düyü, kim chi sousu, çuka salatı, guacamole, edamame',
        price: '19'
    },
    {
        dish: 'TOYUQ VƏ TERİYAKİ SOUSU İLƏ POKE',
        img: '../assets/images/hotFood/chicken_teriyaki_poke.png',
        description: 'Toyuq filesi, teriyaki sousu, düyü, edamame, zəncəfil turşusu, çuka salatı, guacamole, nori',
        price: '15'
    },
    {
        dish: '‘POPKORN’ KREVETKA İLƏ',
        img: '../assets/images/hotFood/popkorn_krevetka.png',
        description: 'Xırtıldayan krivetlər Asiya ədviyyatlı mayonez ilə',
        price: '15'
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