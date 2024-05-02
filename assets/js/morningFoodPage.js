
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
        dish: 'QIZIL BALIQ İLƏ SET',
        img: '../assets/images/morningFood/gold_fish_set.png',
        description: 'Qızıl balıq, miks göyərti, avokado, kremli pendir, xiyar, brioş, qaynadılmış yumurta, kruasan, qəhvə',
        price: '15'
    },
    {
        dish: 'HİND TOYUQU İLƏ SET',
        img: '../assets/images/morningFood/hind_chicken_set.png',
        description: 'Hind toyuğu pastrami, yaşıl zeytun, miks göyərti, qayğanaq, kruasan, feta pendiri, çeri pomidoru, brioş, qəhvə',
        price: '15'
    },
    {
        dish: 'PAŞOT QIZIL BALIQ İLƏ',
        img: '../assets/images/morningFood/pashot_gold_fish.png',
        description: 'Brioş, hisə verilmiş qızıl balıq, paşot yumurta, holland sousu',
        price: '14'
    },
    {
        dish: 'PAŞOT QIZIL BALIQ İLƏ VAFLİDƏ',
        img: '../assets/images/morningFood/pashot_gold_fish_vaffle.png',
        description: 'Vafli, hisə verilmiş qızıl balıq, paşot yumurta, holland sousu',
        price: '14'
    },
    {
        dish: 'PAŞOT AVOKADO',
        img: '../assets/images/morningFood/pashot_avocado.png',
        description: 'Brioş və yaxud Kruasan, avokado, az qaynadılmış yumurta, hollandaise sousu',
        price: '13'
    },
    {
        dish: 'BRİOŞ SKRAMBL',
        img: '../assets/images/morningFood/briosh_crambl.png',
        description: 'Brioş və yaxud Kruasan skrambl yumurta',
        price: '9'
    },
    {
        dish: 'PENDİRLİ OMLET',
        img: '../assets/images/morningFood/cheese_omlet.png',
        description: 'Yumurta, Çeddar, Mozzarella, Gouda və yaxud kabaçok ilə',
        price: '5'
    },
    {
        dish: 'SIRNİKİ',
        img: '../assets/images/morningFood/sirniki.png',
        description: 'Giləmeyvəli sirop və şaftalı ilə',
        price: '10.5'
    },
    {
        dish: 'ŞAKŞUKA',
        img: '../assets/images/morningFood/shakshuka.png',
        description: 'Tomat, yumurta, soğan, feta pendiri ilə qırmızı bibər',
        price: '10'
    },
    {
        dish: 'FRANSIZ SAYAĞI TOST',
        img: '../assets/images/morningFood/french_tost.png',
        description: 'Fransız sayağı brioş, şaftalı və kastard kremi ilə',
        price: '9.5'
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