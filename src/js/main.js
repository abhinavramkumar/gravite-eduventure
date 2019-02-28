import Siema from 'siema';
import {TimelineMax} from 'gsap';

(function() {
  const controller = new ScrollMagic.Controller();

  const homepageLanding = document.querySelector('.Homepage__Landing');

  // Array of Carousel Cards
  const carouselCards = Array.from(
    document.querySelectorAll('.Homepage__Carousel-Card'),
  );

  // #region Carousel Configuration
  // Carousel Buttons
  const prevButton = document.querySelector(
    '.Homepage__Carousel-Buttons.left>button',
  );
  const nextButton = document.querySelector(
    '.Homepage__Carousel-Buttons.right>button',
  );

  // Carousel auto play interval
  let autoStartIntervalId = undefined;

  // Array of Carousel Indicators
  const carouselIndicators = Array.from(
    document.querySelectorAll('.Homepage__Carousel-Indicators > li'),
  );

  let carouselLanding = undefined;

  window.onload = () => {
    if (homepageLanding) {
      carouselLanding = new Siema({
        selector: '.Homepage__Carousel-Wrapper',
        startIndex: 0,
        perPage: 1,
        duration: 1000,
        easing: 'ease-in-out',
        loop: true,
        draggable: false,
      });

      autoStartCarousel();
    }
  };
  // DEBUG => New Carousel Functions
  const updateCarouselIndicators = () => {
    carouselIndicators.map(indicator => indicator.classList.remove('active'));
    carouselIndicators[carouselLanding.currentSlide].classList.add('active');
  };

  const goToNext = e => {
    if (autoStartIntervalId) {
      stopCarousel();
    }
    carouselCards[carouselLanding.currentSlide].classList.remove('active');
    carouselLanding.next();
    carouselCards[carouselLanding.currentSlide].classList.add('active');
    updateCarouselIndicators();
  };

  const goToNextAuto = e => {
    carouselCards[carouselLanding.currentSlide].classList.remove('active');
    carouselLanding.next();
    carouselCards[carouselLanding.currentSlide].classList.add('active');
    updateCarouselIndicators();
  };

  const goToPrevious = e => {
    if (autoStartIntervalId) {
      stopCarousel();
    }
    carouselCards[carouselLanding.currentSlide].classList.remove('active');
    carouselLanding.prev();
    carouselCards[carouselLanding.currentSlide].classList.add('active');
    updateCarouselIndicators();
  };

  const autoStartCarousel = e => {
    autoStartIntervalId = setInterval(goToNextAuto, 12000);
  };

  const stopCarousel = e => {
    clearInterval(autoStartIntervalId);
  };

  const goToCarouselCard = e => {
    carouselCards[carouselLanding.currentSlide].classList.remove('active');
    carouselLanding.goTo(carouselIndicators.indexOf(e.currentTarget));
    carouselCards[carouselLanding.currentSlide].classList.add('active');
    updateCarouselIndicators();
  };

  // On window load :-
  // 1) Assign active to first Carousel Card
  // 2) Configure Carousel & trigger autoStartCarousel
  // 3) Assign goToTop click event listener

  // DEBUG => Assign Event Listeners
  if (prevButton) {
    prevButton.addEventListener('click', goToPrevious);
  }

  if (nextButton) {
    nextButton.addEventListener('click', goToNext);
  }

  if (carouselIndicators) {
    carouselIndicators.map(li =>
      li.addEventListener('click', goToCarouselCard),
    );
  }

  // #endregion

  const aboutTimeline = new TimelineMax();
  
  aboutTimeline
    .fromTo(
      '.Homepage__About-Wrapper > header',
      0.3,
      {
        autoAlpha: 0,
        y: -50,
      },
      {
        autoAlpha: 1,
        y: 0,
      },
      '+=1',
    )
    .fromTo(
      '.Homepage__About-Text',
      0.3,
      {
        x: -100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      '+=0.3',
    )
    .fromTo(
      '.Homepage__About-Image',
      0.3,
      {
        scale: 0,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
      },
      '+=0.3',
    );

  let scene1 = new ScrollMagic.Scene({
    triggerElement: '.Homepage__About',
    triggerHook: 0.6,
    reverse: false,
  })
    .setTween(aboutTimeline)
    .addTo(controller);
})();
