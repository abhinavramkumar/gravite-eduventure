import Axios from 'axios';
import qs from 'querystringify';

(function() {
  console.log('contact.js loaded!');

  window.onload = function(e) {
    let controller = new ScrollMagic.Controller();

    // DEBUG => Contact Form
    const contactForm = document.getElementById('ContactForm');
    const contactFormError = document.querySelector('.ContactPage__Form-Error');

    let contactTimeline1 = new TimelineMax();
    let contactTimeline2 = new TimelineMax();

    // Main Scene - trigger go to top button
    let mainScene = new ScrollMagic.Scene({
      triggerElement: '#ContactPage',
      triggerHook: 0.5,
    })
      .setTween(
        TweenMax.fromTo(
          '.GoToTop',
          0.3,
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
          },
        ),
      )
      .addTo(controller);

    // Animation Tweens
    contactTimeline1
      .fromTo(
        '.ContactPage__Contact-Address',
        0.4,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
        },
        '+=0.5',
      )
      .fromTo(
        '.ContactPage__Contact-Map',
        0.3,
        {
          y: 50,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
        },
        '+=0.3',
      );

    contactTimeline2
      .fromTo(
        '.ContactPage__Form > .container > header',
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
      .fromTo(
        '.ContactPage__Body-Wrapper',
        0.4,
        {
          width: '0%',
          padding: '0',
        },
        {
          width: '100%',
          padding: '1rem',
        },
        '+=0',
      )
      .fromTo(
        '.ContactPage__Text-Wrapper',
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
      .fromTo(
        '.ContactPage__Form-Wrapper',
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
      );

    // Scene 2 - Show contact form animation
    let scene2 = new ScrollMagic.Scene({
      triggerElement: '#ContactPage__Form',
      triggerHook: 0.5,
      reverse: false,
    })
      .setTween(contactTimeline2)
      .addTo(controller);

    //  Messages
    let successMessage = `<p class="message message-success">Mail Sent Successfully</p>`;

    let failureMessage = `<p class="message message-failure">Mail Sending Failed! Try Again!</p>`;

    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      let firstName = contactForm.querySelector('#ContactForm-FirstName').value;
      let lastName = contactForm.querySelector('#ContactForm-LastName').value;
      let email = contactForm.querySelector('#ContactForm-Email').value;
      let phone = contactForm.querySelector('#ContactForm-Phone').value;
      let message = contactForm.querySelector('#ContactForm-Message').value;
      let name = firstName + ' ' + lastName;
      if (name && email && phone && message) {
        const data = {
          name,
          email,
          phone,
          message,
        };

        const encodedData = qs.stringify(data);

        Axios.post('./php/send-mail.php', encodedData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(res => res)
          .then(res => {
            if (res.status === 200) {
              contactFormError.innerHTML = successMessage;
            } else {
              contactFormError.innerHTML = failureMessage;
            }
          })
          .catch(e => console.log(new Error(e)));
      } else {
        let error = {
          name: undefined,
          email: undefined,
          phone: undefined,
          message: undefined,
        };
        if (!name) {
          error.name = `Name is required! Please make sure all fields are filled!`;
        }
        if (!email) {
          error.email = `Email is required! Please make sure all fields are filled!`;
        }
        if (!phone) {
          error.phone = `Phone is required! Please make sure all fields are filled!`;
        }
        if (!message) {
          error.message = `Message is required! Please make sure all fields are filled!`;
        }
        contactFormError.innerHTML = `
            ${error.name &&
              `<p class="message message-error">${error.name}</p>`}
            ${error.email &&
              `<p class="message message-error">${error.email}</p>`}
            ${error.phone &&
              `<p class="message message-error">${error.phone}</p>`}
            ${error.message &&
              `<p class="message message-error">${error.message}</p>`}
          `;
      }
    });
  };
})();
