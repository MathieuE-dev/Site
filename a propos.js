document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let index = 0;

    nextBtn.addEventListener('click', function () {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    function updateCarousel() {
        const position = -index * 100 + '%';
        track.style.transform = 'translateX(' + position + ')';
    }
});
