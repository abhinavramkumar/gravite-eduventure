(function() {
  console.log("about.js loaded!");
  let controller = new ScrollMagic.Controller();

  // For got to top
  let mainScene;

  // for about content
  let landingTween = new TimelineMax();

  landingTween
    .fromTo(
      ".AboutPage__Landing-Wrapper> header",
      0.5,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      {
        y: 0,
        autoAlpha: 1
      },
      "+=0"
    )
    .staggerFromTo(
      ".AboutPage__Landing-Text > p",
      0.5,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      {
        y: 0,
        autoAlpha: 1
      },
      "0.3",
      "+=0.3"
    )
    .fromTo(
      ".AboutPage__Landing-Image",
      0.5,
      {
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "50% 50%",
        ease: Power1.easeOut
      },
      {
        scale: 1,
        autoAlpha: 1
      },
      "+=0.3"
    );

  let landingScene = new ScrollMagic.Scene({
    triggerElement: ".AboutPage__Landing",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(landingTween)
    .addTo(controller);

  // For team images
  let teamImages = Array.from(
    document.querySelectorAll(".AboutPage__Team-Member-Image")
  );
  let teamNames = Array.from(
    document.querySelectorAll(".AboutPage__Team-Member-Detail")
  );

  let teamTimeline = new TimelineMax();

  teamTimeline
    .fromTo(
      ".AboutPage__Team-Container > header",
      0.5,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      {
        y: 0,
        autoAlpha: 1
      },
      "+=0.2"
    )
    .staggerFromTo(
      teamImages,
      0.5,
      {
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "50% 50%",
        ease: Power1.easeOut
      },
      {
        scale: 1,
        autoAlpha: 1
      },
      "0.3",
      "+=0.3"
    )
    .staggerFromTo(
      teamNames,
      0.4,
      {
        autoAlpha: 0,
        width: 0,
        ease: Power1.easeOut
      },
      {
        autoAlpha: 1,
        width: "100%"
      },
      "0.3",
      "+=0.3"
    );

  let teamScene = new ScrollMagic.Scene({
    triggerElement: "#AboutPage__Team",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(teamTimeline)
    .addTo(controller);
})();
