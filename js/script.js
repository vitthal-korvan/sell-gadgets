//----------------- Slideshow -------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(function () {
  plusSlides(1);
}, 3000);

// --------------------- FAQ Toggle ---------------------

// FAQ toggle function
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        // Toggle the 'active' class
        this.classList.toggle('active');

        // Get the associated answer
        const answer = this.querySelector('.faq-answer');
        const toggleIcon = this.querySelector('.faq-toggle');

        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggleIcon.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggleIcon.textContent = '-';
        }
    });
});




// -------------- Initialize EmailJS ---------------------
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID");
})();

// Handle Sell Gadget Forms submission
document
  .getElementById("sellLaptopForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

document
  .getElementById("sellTabletForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

document
  .getElementById("sellOtherDevicesForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

// Handle Contact Us form submission
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    sendForm(this);
  });

// Function to send form via EmailJS
function sendForm(form) {
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form).then(
    function () {
      alert("Thanks for sharing details. We will get back to you soon.");
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
