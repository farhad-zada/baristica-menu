
var swiper = new Swiper('.swiper-container', {
    slidesPerView: '1',
    spaceBetween: 30,
});

const foodContent = [
    {
        dish: 'HİSƏ VERİLMİŞ QIZILBALIQ İLƏ BRUSKETTA',
        img: '../assets/images/fastFood/gold_fish_brusketta.png',
        description: 'Çiabatta çörəyində, quakamole, stracciatella, hisə verilmiş qızılbalıq, rukkola, çerri pomidor',
        price: '13'
    },
    {
        dish: 'QIZARDILMIŞ MAL ƏTİ İLƏ BRUSKETTA',
        img: '../assets/images/fastFood/meat_brusketta.png',
        description: 'Çiabatta çörəyində quakamole, stracciatella rostbif, rukkola, çerri pomidor',
        price: '12'
    },
    {
        dish: 'VETÇİNA VƏ PENDİRLİ TOST (HALAL)',
        img: '../assets/images/fastFood/vetchine_cheese_tost.png',
        description: 'Hind toyuqlu vetçina Mozarella pendiri ilə',
        price: '9'
    },
    {
        dish: 'VETÇİNA VƏ PENDİR İLƏ KRUASSAN',
        img: '../assets/images/fastFood/vetchine_cheese_kruassan.png',
        description: 'Kruassan hind toyuqlu vetçina Mozarella pendiri ilə',
        price: '9'
    },
    {
        dish: 'QIZIL BALIQ VƏ AVOKADO İLƏ KRUASSAN',
        img: '../assets/images/fastFood/gold_fish_avokado_kruassan.png',
        description: 'Hisə verilmiş qızıl balıq, quakamole, krem pendir, kahı',
        price: '16'
    },
    {
        dish: 'QIZARDILMIŞ TOYUQ İLƏ TOST',
        img: '../assets/images/fastFood/chicken_tost.png',
        description: 'Tost çörəyi, toyuq, mozzarella pendiri, təzə pomidor, təzə xıyar, yumurta, qırmızı kələm, mayonez',
        price: '10'
    },
    {
        dish: 'HİND TOYUQU İLƏ TOST',
        img: '../assets/images/fastFood/hind_chicken_tost.png',
        description: 'Tost çörəyi, hind toyuğu, mozzarella pendiri, qızardılmış yumurta, təzə pomidor, turşu xıyar, qırmızı kələm, mayonez',
        price: '11'
    },
    {
        dish: 'QIZARDILMIŞ ƏT İLƏ TOST',
        img: '../assets/images/fastFood/meat_tost.png',
        description: 'Tost çörəyi, rostbif, mozzarella pendiri, təzə pomidor, təzə xıyar, yumurta, qırmızı kələm, mayonez',
        price: '14'
    },
    {
        dish: 'QIZIL BALIQ İLƏ TOST',
        img: '../assets/images/fastFood/gold_fish_tost.png',
        description: 'Hisə verilmiş qızıl balıq, qarışıq göyərti, kremetta pendir ilə qızardılmış tost',
        price: '15'
    },
    {
        dish: 'TOYUQ İLƏ SENDVİÇ VAFLİDƏ',
        img: '../assets/images/fastFood/chicken_sandwich_waffle.png',
        description: 'Vafli, toyuq, mozzarella pendiri, təzə pomidor, təzə xıyar, qızardılmış yumurta, kahı, krem pesto sous',
        price: '10'
    },
    {
        dish: 'HİND TOYUQU İLƏ SENDVİÇ VAFLİDƏ',
        img: '../assets/images/fastFood/hind_chicken_sandwich_waffle.png',
        description: 'Hind toyuğu, turşu xıyar, qızardılmış yumurta, təzə pomidor ilə qızardılmış vafli',
        price: '11'
    },
    {
        dish: 'QIZARDILMIŞ ƏT İLƏ SENDVİÇ VAFLİDƏ',
        img: '../assets/images/fastFood/fried_meat_sandwich_vaffle.png',
        description: 'Vafli, qızardılmış mal əti, mozzarella pendiri, qızardılmış yumurta, təzə xiyar, pomidor, kahı, mayonez',
        price: '14'
    },
    {
        dish: 'QIZIL BALIQ İLƏ SENDVİÇ VAFLİDƏ',
        img: '../assets/images/fastFood/gold_fish_sandwich_vaffle.png',
        description: 'Hisə verilmiş qızıl balıq, qarışıq göyərti, kremetta pendiri ilə qızardılmış tost',
        price: '15'
    },
    {
        dish: '‘SWEET & SOUR CRİSPY’ TOYUQ İLƏ SENDVİÇ',
        img: '../assets/images/fastFood/sweet_sour_chicken_sandwich.png',
        description: 'Baristica Burger Çörəyi, Asiya ədviyyatları ilə qızardılmış toyuq, turşa-şirin sous, aysberq kahı, pomidor, küncüt',
        price: '12'
    },
    {
        dish: '‘CAPRİSE’ SENDVİÇ',
        img: '../assets/images/fastFood/caprise_sandwich.png',
        description: 'Barictica Çiabatta, italyan qarışıq göyərti, italyan təzə mozzarellası, krem pendir, pomidor, rukola, pesto sousu və qatılaşdırılmış balzamik',
        price: '14'
    },
    {
        dish: 'TOYUQ İLƏ ROLL',
        img: '../assets/images/fastFood/chicken_roll.png',
        description: 'Tortilla, qızardılmış toyuq, aysberq kahı, təzə pomidor, pendirli və ədviyyatlı sous',
        price: '10'
    },
    {
        dish: 'ƏT İLƏ ROLL',
        img: '../assets/images/fastFood/meat_roll.png',
        description: 'Tortilla, can əti, aysberq kahı, təzə pomidor, ikiqat pendirli sousu',
        price: '13'
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