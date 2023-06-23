//* Hamburger menu

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//* Fermeture du menu lors du click d'un lien

const navLink = document.querySelectorAll(".nav_link");

function closeNavMenu() {
  const navMenu = document.querySelector("#nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", closeNavMenu));

//* Effet de flou sur le header

function blurHeader() {
  const header = document.querySelector("#header");
  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
}

window.addEventListener("scroll", blurHeader);

//* Envoi d'email

const contactForm = document.querySelector("#contact_form");
const contactMessage = document.querySelector("#contact_message");

function sendEmail(e) {
  e.preventDefault();

  // Récupération des valeurs des champs du formulaire
  const nom = contactForm.querySelector("input[name=nom]").value;
  const email = contactForm.querySelector("input[name=email]").value;
  const message = contactForm.querySelector("textarea[name=message]").value;

  // Vérification des champs
  if (nom.trim() === "" || email.trim() === "" || message.trim() === "") {
    // Au moins un des champs est vide, afficher un message d'erreur
    contactMessage.textContent = "Veuillez remplir tous les champs ❌";
    return; // Arrêter l'exécution de la fonction
  }

  // Envoi du formulaire avec EmailJS
  emailjs
    .send(
      "service_tlr0gdd",
      "template_hkya058",
      {
        nom: nom,
        email: email,
        message: message,
      },
      "kNI1t7Fsf_3QPX1Dp"
    )
    .then(
      () => {
        // Message de succès
        contactMessage.textContent = "Message envoyé avec succès ✅";
        // Suppression du message après 5 secondes
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        // Suppression des inputs
        contactForm.reset();
      },
      () => {
        // Message d'erreur
        contactMessage.textContent = "Erreur lors de l'envoi du message ❌";
      }
    );
}

contactForm.addEventListener("submit", sendEmail);

//* Scroll Up button

function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

//* Active link

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(".nav_menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//* Scroll reveal

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  /* reset: true, */
});

sr.reveal(`.home_data, .home_social, .contact_container, .footer_container`);
sr.reveal(`.home_image`, { origin: "bottom" });
sr.reveal(`.about_data, .skills_data`, { origin: "left" });
sr.reveal(`.about_image, .skills_content`, { origin: "right" });
sr.reveal(`.services_card, .projects_card`, { interval: 100 });
