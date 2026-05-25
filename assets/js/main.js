/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== UNIFIED MODALS HANDLER ===============*/
const modalTriggers = document.querySelectorAll(".services__button, .work__open");
const activeModals = [];

function closeAllModals() {
  activeModals.forEach((modal) => {
    modal.classList.remove("active-modal");
  });
  activeModals.length = 0;
  document.body.style.overflow = "";
}

modalTriggers.forEach((trigger) => {
  // Find the modal in the same card container
  const card = trigger.closest(".services__card, .work__card");
  const modal = card?.querySelector(".services__modal, .work__modal");
  const closeBtn = modal?.querySelector(".services__modal-close, .work__modal-close");

  if (!modal) return;

  // Move modal to body to prevent z-index/parent overflow bugs
  document.body.appendChild(modal);

  trigger.addEventListener("click", () => {
    closeAllModals();
    modal.classList.add("active-modal");
    document.body.style.overflow = "hidden";
    if (!activeModals.includes(modal)) {
      activeModals.push(modal);
    }
  });

  closeBtn?.addEventListener("click", (event) => {
    event.stopPropagation();
    closeAllModals();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeAllModals();
    }
  });
});

// Close modals on Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAllModals();
  }
});

/*=============== WORK FILTER ===============*/
const workLinks = document.querySelectorAll(".work__item");
const workCards = document.querySelectorAll(".work__card");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    const filter = wl.dataset.filter;

    activeWork(wl);

    workCards.forEach((card) => {
      const shouldShow =
        filter === "all" ||
        card.classList.contains(filter.replace(".", ""));

      card.classList.toggle("work__card--hidden", !shouldShow);
    });

    closeAllModals();
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: false, // Disabled loop since we only have 2 cards to avoid layout glitching
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    const navLink = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (!navLink) {
      return;
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";

// Check local storage
const selectedTheme = localStorage.getItem("selected-theme");

// Apply theme based on stored value (default to dark if none stored)
if (selectedTheme === "light") {
  document.body.classList.add(lightTheme);
  themeButton.classList.remove("bx-moon");
  themeButton.classList.add("bx-sun");
} else {
  document.body.classList.remove(lightTheme);
  themeButton.classList.remove("bx-sun");
  themeButton.classList.add("bx-moon");
}

// Toggle theme on button click
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle("bx-moon");
  themeButton.classList.toggle("bx-sun");

  // Save current selection
  const currentTheme = document.body.classList.contains(lightTheme) ? "light" : "dark";
  localStorage.setItem("selected-theme", currentTheme);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__visual`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.impact__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, .services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.architecture__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.footer, .footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

/*=============== CONTACT FORM SUBMISSION ===============*/
const contactForm = document.querySelector(".contact__form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      return;
    }

    const submitBtn = contactForm.querySelector("button");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Use Web3Forms API to send actual email.
    const web3formsAccessKey = "0db6676d-dd71-4f32-a2f7-619e578dd97f";

    const formData = new FormData(contactForm);
    formData.append("access_key", web3formsAccessKey);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    .then(async (response) => {
      const json = await response.json();
      if (response.ok) {
        submitBtn.textContent = "Message Sent! ✓";
        submitBtn.style.backgroundColor = "#27ae60"; // green success color
        submitBtn.style.color = "#ffffff";
        contactForm.reset();
      } else {
        console.error(json);
        submitBtn.textContent = "Error! Try again.";
        submitBtn.style.backgroundColor = "#c0392b"; // red error color
        submitBtn.style.color = "#ffffff";
      }
    })
    .catch((error) => {
      console.error(error);
      submitBtn.textContent = "Network Error!";
      submitBtn.style.backgroundColor = "#c0392b"; // red error color
      submitBtn.style.color = "#ffffff";
    })
    .finally(() => {
      // Restore button after 3 seconds
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "";
        submitBtn.style.color = "";
      }, 3000);
    });
  });
}
