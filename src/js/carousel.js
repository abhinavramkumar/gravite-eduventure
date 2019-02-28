export const updateCarouselIndicators = () => {
  carouselIndicators.map(indicator => indicator.classList.remove("active"));
  carouselIndicators[carouselLanding.currentSlide].classList.add("active");
};

//---- New Carousel Functions
export const goToNext = e => {
  if (autoStartIntervalId) {
    stopCarousel();
  }
  carouselCards[carouselLanding.currentSlide].classList.remove("active");
  carouselLanding.next();
  carouselCards[carouselLanding.currentSlide].classList.add("active");
  updateCarouselIndicators();
};

export const goToNextAuto = e => {
  carouselCards[carouselLanding.currentSlide].classList.remove("active");
  carouselLanding.next();
  carouselCards[carouselLanding.currentSlide].classList.add("active");
  updateCarouselIndicators();
};

export const goToPrevious = e => {
  if (autoStartIntervalId) {
    stopCarousel();
  }
  carouselCards[carouselLanding.currentSlide].classList.remove("active");
  carouselLanding.prev();
  carouselCards[carouselLanding.currentSlide].classList.add("active");
  updateCarouselIndicators();
};

export const autoStartCarousel = e => {
  autoStartIntervalId = setInterval(goToNextAuto, 9000);
};

export const stopCarousel = e => {
  clearInterval(autoStartIntervalId);
};

export const goToCarouselCard = e => {
  carouselCards[carouselLanding.currentSlide].classList.remove("active");
  carouselLanding.goTo(carouselIndicators.indexOf(e.currentTarget));
  carouselCards[carouselLanding.currentSlide].classList.add("active");
  updateCarouselIndicators();
};
