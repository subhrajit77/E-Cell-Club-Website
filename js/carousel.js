document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const slides = document.querySelectorAll('input[name="position"]');
    let currentIndex = 0;

    function updateCarousel(index) {
        slides[index].checked = true;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    });
});
