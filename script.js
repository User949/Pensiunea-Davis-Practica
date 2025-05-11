document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('[data-slide-to]');
    links.forEach(link => {
        link.addEventListener('click', function () {
            const slideIndex = this.getAttribute('data-slide-to');
            const carousel = document.querySelector('#carouselExample');
            $(carousel).carousel(parseInt(slideIndex));
        });
    });
});