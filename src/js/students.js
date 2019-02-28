console.log("students.js loaded!");

let controller = new ScrollMagic.Controller();
let timeline1 = new TimelineMax();

timeline1.fromTo(
  ".StudentsPage__Landing-Text",
  0.3,
  {
    y: 50,
    autoAlpha: 0
  },
  {
    y: 0,
    autoAlpha: 1
  },
  "+=1"
);

let staggerTimeline = new TimelineMax();
let testimonials = document.querySelectorAll(".StudentsPage__Testimonial");

staggerTimeline
  .fromTo(
    ".StudentsPage__Testimonials-Wrapper > header",
    0.3,
    {
      y: 50,
      autoAlpha: 0
    },
    {
      y: 0,
      autoAlpha: 1
    },
    "+=0"
  )
  .staggerFromTo(
    testimonials,
    0.3,
    {
      y: 50,
      autoAlpha: 0
    },
    {
      y: 0,
      autoAlpha: 1
    },
    0.1
  );

let scene1 = new ScrollMagic.Scene({
  triggerElement: "#Students-Testimonials",
  triggerHook: 0.6,
  reverse: false
})
  .setTween(staggerTimeline)
  .addTo(controller);

let mainScene = new ScrollMagic.Scene({
  triggerElement: testimonials[3],
  triggerHook: 0.5
})
  .setTween(
    TweenMax.fromTo(
      ".GoToTop",
      0.3,
      {
        autoAlpha: 0,
        scale: 0,
        ease: Power2.easeInOut
      },
      {
        autoAlpha: 1,
        scale: 1
      }
    )
  )
  .addTo(controller);
