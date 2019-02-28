// Navbar elements
const navbar = document.getElementById("Navbar");
const navbarToggle = document.querySelector(".Navbar__Hamburger-Toggle");
const navbarLinks = document.querySelector(".Navbar__Links");

// GoToTop Button
const goToTop = document.querySelector(".GoToTop");

// function scrollHandler(e) {
//   console.log("scroll");
//   //  Make the navbar sticky
//   if (pageYOffset >= 550) {
//     if (!navbar.classList.contains("fixed")) {
//       navbar.classList.add("fixed");
//     }
//   } else {
//     if (navbar.classList.contains("fixed")) {
//       navbar.classList.remove("fixed");
//     }
//   }

//   // Show and hide Go to top based on scroll position
//   if (pageYOffset >= 1200) {
//     if (!goToTop.classList.contains("active")) {
//       goToTop.classList.add("active");
//     }
//   } else {
//     if (goToTop.classList.contains("active")) {
//       goToTop.classList.remove("active");
//     }
//   }
// }

// DEBUG => Navbar Toggle Configuration
if (navbarToggle) {
  navbarToggle.addEventListener("click", e => {
    if (navbarLinks.classList.contains("visible")) {
      navbarLinks.classList.remove("visible");
    } else {
      navbarLinks.classList.add("visible");
    }
  });
}

if (document.body.clientWidth > 940) {
  navbarLinks.classList.remove("active");
}

// Slide page up or scroll to top - trigger on goToTop button click
const slidePageUp = e => {
  let x = TweenMax.to(window, 1, {
    scrollTo: {
      y: 0
    },
    ease: Power1.easeInOut
  });
};

// Handle scroll based animations
//document.addEventListener("scroll", scrollHandler);

//let controller = new ScrollMagic.Controller();

goToTop.addEventListener("click", slidePageUp);
