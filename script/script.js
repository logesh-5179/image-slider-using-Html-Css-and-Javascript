document.addEventListener('DOMContentLoaded', function() {
    let curr = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function changeSlide(direction) {
        curr += direction;
        if (curr < 0) {
            curr = totalSlides - 1;
        } else if (curr >= totalSlides) {
            curr = 0;
        }
        showSlide(curr);
    }

    setInterval(() => changeSlide(1), 3000); // Automatically change slide every 3 seconds
});
