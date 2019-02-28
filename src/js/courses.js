(function() {
  let readMoreButtons = Array.from(
    document.querySelectorAll('.CoursesPage__Competitive-Course > button'),
  );
  let sidebarButtons = Array.from(
    document.querySelectorAll('.CoursesPage__Sidebar-List_Item > button'),
  );

  const toggleDetails = e => {
    let detailsNode = e.currentTarget.parentNode.querySelector(
      '.CoursesPage__Competitive-Course__Details',
    );
    let table = detailsNode.querySelector(
      '.CoursesPage__Competitive-Course__Table-Wrapper',
    );
    let text = detailsNode.querySelector(
      '.CoursesPage__Competitive-Course__Details-Text',
    );

    let timeline = new TimelineMax();
    timeline
      .add(
        TweenMax.fromTo(
          detailsNode,
          0.3,
          {
            height: 0,
            autoAlpha: 0,
            padding: 0,
          },
          {
            height: '100%',
            autoAlpha: 1,
            padding: '0.5rem',
          },
          '+=0',
        ),
      )
      .add(
        TweenMax.fromTo(
          table,
          0.3,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          '+=0.1',
        ),
      )
      .add(
        TweenMax.fromTo(
          text,
          0.3,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          '+=0.1',
        ),
      );

    if (detailsNode.classList.contains('active')) {
      timeline.reverse();
      detailsNode.classList.remove('active');
      e.currentTarget.textContent = 'More Details';
    } else {
      timeline.play();
      detailsNode.classList.add('active');
      e.currentTarget.textContent = 'Less Details';
    }
  };

  const toggleContent = e => {
    let {target} = e.currentTarget.dataset;
    let selectedButton = e.currentTarget;
    let sources = Array.from(document.querySelectorAll(`article`));
    sources.map(source => (source.style.display = 'none'));
    sidebarButtons.map(
      button =>
        button.classList.contains('active') &&
        button.classList.remove('active'),
    );

    if (!selectedButton.classList.contains('active')) {
      selectedButton.classList.add('active');
    }

    let src = document.querySelector(`article[data-src=${target}]`);
    src.style.display = 'block';
  };

  sidebarButtons.map(el => el.addEventListener('click', toggleContent));
  readMoreButtons.map(el => el.addEventListener('click', toggleDetails));

  // Main Timeline
  let controller = new ScrollMagic.Controller();

  let mainTimeline = new TimelineMax();

  mainTimeline
    .fromTo(
      '.CoursePage__Page-Header',
      0.5,
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
    .fromTo(
      '.CoursesPage__Sidebar',
      0.5,
      {
        xPercent: -20,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
      },
      '+=0',
    )
    .fromTo(
      '.CoursesPage__Body',
      0.5,
      {
        xPercent: 20,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
      },
      '+=0',
    );

  let mainScene = new ScrollMagic.Scene({
    triggerElement: '.goToTop',
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(mainTimeline)
    .addTo(controller);
})();
