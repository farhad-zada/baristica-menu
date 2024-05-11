document.addEventListener("DOMContentLoaded", function () {
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

    // Устанавливаем текст для каждого элемента в соответствии с текущим языком
    const elements = document.querySelectorAll('.home-menu_element h2');
    elements.forEach(element => {
        if (storedLang === 'az') {
            element.textContent = element.textContent.replace('Səhər yeməyi setləri', 'Səhər yeməyi setləri')
                .replace('İsti yeməklər', 'İsti yeməklər')
                .replace('Salatlar', 'Salatlar')
                .replace('Soyuq içkilər', 'Soyuq içkilər')
                .replace('Coffee', 'Kofe')
                .replace('Fast food', 'Fast food')
                .replace('Çaylar', 'Çaylar')
                .replace('Desertlər', 'Desertlər');
        } else if (storedLang === 'en') {
            element.textContent = element.textContent.replace('Səhər yeməyi setləri', 'Morning Food Sets')
                .replace('İsti yeməklər', 'Hot Foods')
                .replace('Salatlar', 'Salads')
                .replace('Soyuq içkilər', 'Cold Drinks')
                .replace('Coffee', 'Coffee')
                .replace('Fast food', 'Fast Food')
                .replace('Çaylar', 'Teas')
                .replace('Desertlər', 'Desserts');
        } else if (storedLang === 'ru') {
            element.textContent = element.textContent.replace('Səhər yeməyi setləri', 'Завтраки')
                .replace('İsti yeməklər', 'Горячие блюда')
                .replace('Salatlar', 'Салаты')
                .replace('Soyuq içkilər', 'Холодные напитки')
                .replace('Coffee', 'Кофе')
                .replace('Fast food', 'Фастфуд')
                .replace('Çaylar', 'Чаи')
                .replace('Desertlər', 'Десерты');
        }
    });
});
