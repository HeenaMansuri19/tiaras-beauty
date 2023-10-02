document.addEventListener("DOMContentLoaded", function () {
    let currentslide = 0;
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].offsetWidth;
    const totalSlides = slides.length;
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");

    function showSlide() {
        slides.forEach((slide) => (slide.style.display = "none"));

        for (let i = currentslide; i < currentslide + 6; i++) {
            slides[i % totalSlides].style.display = "block";
        }
        slider.scrollTo({
            left: currentslide * slideWidth,
            behavior: "smooth",
        });


    }
    prevButton.addEventListener("click", function () {
        currentslide = (currentslide - 1 * totalSlides) % totalSlides;
        showSlide();

    });
    nextButton.addEventListener("click", function () {
        currentslide = (currentslide + 1) % totalSlides;
        showSlide();
    });
    for (let i = 0; i < 7; i++) {
        slides[(currentslide * i) % totalSlides].style.display = "block";
    }
    showSlide();

});