let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(index) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const caption = document.getElementById("caption");

  index = Math.max(1, Math.min(index, slides.length));

  Array.from(slides).forEach(slide => (slide.style.display = "none"));
  Array.from(dots).forEach(dot => dot.classList.remove("active"));

  slides[index - 1].style.display = "block";
  dots[index - 1].classList.add("active");
  caption.innerHTML = dots[index - 1].alt;
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inquiriesForm");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const isValidInput = (input, errorMsg) => {
            if (input === "") {
                alert(errorMsg);
                event.preventDefault();
                return false;
            }
            return true;
        };

        const isValidPhone = (phone) => {
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Phone number must be 10 digits.");
                event.preventDefault();
                return false;
            }
            return true;
        };

        const isValidEmail = (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return false;
            }
            return true;
        };

        const isValidMessage = (message) => {
            if (message === "") {
                alert("Message is required.");
                event.preventDefault();
                return false;
            }
            return true;
        };

        if (!isValidInput(name, "Name is required.") ||
            !isValidPhone(phone) ||
            !isValidEmail(email) ||
            !isValidMessage(message)) {
            return;
        }

        event.preventDefault();
        alert("Form submitted successfully!");
    });
});

