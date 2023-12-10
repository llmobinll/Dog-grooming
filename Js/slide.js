var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide(n) {
  // پنهان کردن تمام اسلایدها
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // نمایش اسلاید مورد نظر
  slides[n].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function previousSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}