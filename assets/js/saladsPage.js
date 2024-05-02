
var swiper = new Swiper('.swiper-container', {
    slidesPerView: '1',
    spaceBetween: 30,
});

const foodContent = [
    {
        dish: '‘SESAME’ TOYUQ SALATI',
        img: '../assets/images/salads/sesame_chicken_salad.png',
        description: 'Toyuq, aysberq kahı, çerri pomidor, xıyar, küncüt sousu',
        price: '10'
    },
    {
        dish: 'RUKKOLA & STRACCİATELLA SALATI',
        img: '../assets/images/salads/rukkola_salad.png',
        description: 'Stracciatella alla Romana, rukkola, qırmızı və sarı pomidor, şam fıstığı, balzamik sirkəsi, qırmızı giləmeyvə və pesto sousu',
        price: '16'
    },
    {
        dish: 'QIZARDILMIŞ AVOKADO MOZZARELLA SALATI',
        img: '../assets/images/salads/avokado_mozarella_salad.png',
        description: 'İtalyan Mix göyərti, qızardılmış avokado, italyan təzə Mozzarella, çerri pomidor, İtalyan balzamik sousu ilə',
        price: '17'
    },
    {
        dish: 'QIZARDILMIŞ KRİVET SALATI',
        img: '../assets/images/salads/fried_krivet_salad.png',
        description: 'Qızardılmış krivet, qarışıq italyan göyərtisi, çerri pomidor, şam fistiğı, zeytun yağı və laym şirəsi',
        price: '18'
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