document.addEventListener('DOMContentLoaded', () => {

    initMenuBurg();
    initTheme();
    initSlider();
    initMenuTabs();
    initModal();
 });
const menuBtn = document.getElementById('menu-btn');
const burgerMenu = document.getElementById('burger-menu');

menuBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', () => {
    initMenuBurg();
});
function initMenuBurg() {
    const menuBtn = document.getElementById('menu-btn');
    const burgerMenu = document.getElementById('burger-menu');


    if (!menuBtn || !burgerMenu) {
        return;
    }

    menuBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
    });

    const burgerLinks = document.querySelectorAll('.burger-link');
    burgerLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('open');
        });
    });
}

function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle');
    const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
}
function initSlider() {
    const slides = document.querySelectorAll('.slider_track > div');
    const indicators = document.querySelectorAll('.slider__controls .slider__control');
    const btnPrev = document.querySelector('.slider_arrow-prev');
    const btnNext = document.querySelector('.slider_arrow-next');
if (!slides.length || !indicators.length || !btnPrev || !btnNext) return;

let currentIndex = 0;

function updateSlider(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        if (i === currentIndex) {
            slide.classList.add('tab-content--active', 'slider_item--active');
            slide.style.display = 'flex';
        } else {
            slide.classList.remove('tab-content--active', 'slider_item--active');
            slide.style.display = 'none';
        }
    });

    indicators.forEach((indicator, i) => {
        if (i === currentIndex) {
            indicator.classList.add('slider__indicator--active');
        } else {
            indicator.classList.remove('slider__indicator--active');
        }
    });
}

btnPrev.addEventListener('click', () => updateSlider(currentIndex - 1));
btnNext.addEventListener('click', () => updateSlider(currentIndex + 1));

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => updateSlider(i));
});

updateSlider(currentIndex);
}
function initMenuTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuGrids = document.querySelectorAll('.menu-grid');
if (!tabBtns.length || !menuGrids.length) return;

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('tab-btn--active'));
        btn.classList.add('tab-btn--active');

        const category = btn.getAttribute('data-category');

        menuGrids.forEach(grid => {
            if (grid.getAttribute('data-category') === category) {
                grid.style.display = 'grid';
            } else {
                grid.style.display = 'none';
            }
        });
    });
});
const popup = document.getElementById('menuPopup');
const popupImg = document.getElementById('popupImg');
const popupTitle = document.getElementById('popupTitle');
const popupDescription = document.getElementById('popupDescription');
const popupPrice = document.getElementById('popupPrice');
const closeBtn = document.querySelector('.popup-close-btn');

const optionsCoffee = document.getElementById('optionsCoffee');
const optionsTea = document.getElementById('optionsTea');

document.querySelectorAll('.menu-card__img').forEach(img => {
  img.style.cursor = 'pointer';

  img.addEventListener('click', () => {
    const card = img.closest('.menu-card');

    const grid = card.closest('[data-category]');
    const category = grid ? grid.getAttribute('data-category') : '';

    const title = card.querySelector('.menu-card__title').textContent;
    const description = card.querySelector('.menu-card__description').textContent;
    const price = card.querySelector('.menu-card__price').textContent;

    popupImg.src = img.src;
    popupImg.alt = img.alt;
    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupPrice.textContent = price;

    optionsCoffee.style.display = 'none';
    optionsTea.style.display = 'none';

    document.querySelectorAll('#menuPopup input').forEach(input => {
      if (input.type === 'checkbox') input.checked = false;
      if (input.type === 'radio' && input.value === '200') input.checked = true;
    });

    if (category === 'coffee') {
      optionsCoffee.style.display = 'block';
    } else if (category === 'tea') {
      optionsTea.style.display = 'block';
    }

    popup.showModal();
  });
});
closeBtn.addEventListener('click', () => {
  popup.close();
});

popup.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.close();
  }
});
}
