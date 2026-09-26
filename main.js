document.addEventListener('DOMContentLoaded', () => { initTheme(); initSlider(); initMenuTabs(); });
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
}