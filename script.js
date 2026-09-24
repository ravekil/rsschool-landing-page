document.addEventListener('DOMContentLoaded', () => { initTheme(); initMenuTabs(); initSlider(); });
function initTheme() {
    const themeBtn = document.querySelector('.theme-toggle');
    if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
function initMenuTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const grids = document.querySelectorAll('.menu-grid');
    if (tabBtns.length === 0) return;
    tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;

        tabBtns.forEach(b => b.classList.remove('tab-btn--active'));
        btn.classList.add('tab-btn--active');

        grids.forEach(grid => {
            if (grid.id === `grid-${category}`) {
                grid.style.display = 'grid';
            } else {
                grid.style.display = 'none';
            }
        });
    });
});
function initSlider() {
    const slider = document.querySelector('.slider'); if (!slider) return;
    const slides = slider.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.slider__btn--prev');
const nextBtn = slider.querySelector('.slider__btn--next');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
        slide.classList.toggle('slide--active', i === currentIndex);
    });
}

if (nextBtn) nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
if (prevBtn) prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
}
}
}