(function() {
  let controller = new ScrollMagic.Controller();
  let timeline1 = new TimelineMax();

  timeline1.fromTo(
    '.Parents-page__Landing-Text',
    0.3,
    {
      y: 50,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
    },
    '+=1',
  );

  let instructionsTimeline = new TimelineMax();
  let instructions = Array.from(
    document.querySelectorAll('.Parents-page__Instructions-Body > ul >li'),
  );

  instructionsTimeline
    .fromTo(
      '.Parents-page__Instructions-Wrapper > header',
      0.3,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      },
      '+=1',
    )
    .staggerFromTo(
      instructions,
      0.3,
      {
        autoAlpha: 0,
        x: -100,
      },
      {
        autoAlpha: 1,
        x: 0,
      },
      0.2,
    );

  let staggerTimeline = new TimelineMax();
  let testimonials = document.querySelectorAll('.Parents-page__Testimonial');

  staggerTimeline
    .fromTo(
      '.Parents-page__Testimonials-Wrapper > header',
      0.3,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      },
      '+=0',
    )
    .staggerFromTo(
      testimonials,
      0.3,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      },
      0.1,
    );

  let scene1 = new ScrollMagic.Scene({
    triggerElement: '.Parents-page__Instructions',
    triggerHook: 0.6,
    reverse: false,
  })
    .setTween(instructionsTimeline)
    .addTo(controller);

  let scene2 = new ScrollMagic.Scene({
    triggerElement: '#Parents-Testimonials',
    triggerHook: 0.6,
    reverse: false,
  })
    .setTween(staggerTimeline)
    .addTo(controller);

  let mainScene = new ScrollMagic.Scene({
    triggerElement: testimonials[3],
    triggerHook: 0.5,
  })
    .setTween(
      TweenMax.fromTo(
        '.GoToTop',
        0.3,
        {
          autoAlpha: 0,
          scale: 0,
          ease: Power2.easeInOut,
        },
        {
          autoAlpha: 1,
          scale: 1,
        },
      ),
    )
    .addTo(controller);
})();
