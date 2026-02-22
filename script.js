/* ===========================
   MOBILE NAVIGATION
=========================== */
document.getElementById("navToggle").onclick = function () {
  document.getElementById("navMenu").classList.toggle("active");
};

/* ===========================
   REVEAL ON SCROLL (UPGRADED)
=========================== */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .reveal-stagger");

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 120;

    if (isVisible) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===========================
   DARK / LIGHT MODE TOGGLE
=========================== */
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");

    document.body.animate(
      [
        { opacity: 0.6 },
        { opacity: 1 }
      ],
      { duration: 300 }
    );
  });
}

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  scrollBtn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(0.9)" },
      { transform: "scale(1)" }
    ],
    { duration: 300 }
  );
});

/* ===========================
   PAGE FADE TRANSITIONS
=========================== */
const transition = document.getElementById("pageTransition");

window.addEventListener("load", () => {
  setTimeout(() => {
    transition.classList.remove("active");
  }, 100);
});

document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    transition.classList.add("active");

    setTimeout(() => {
      window.location.href = href;
    }, 350);
  });
});

/* ===========================
   PRELOADER
=========================== */
const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 500);
});
/* ===========================
   TYPEWRITER EFFECT
=========================== */

const typewriterText = document.getElementById("typewriterText");
const typeMessage = "Mystic Orange Theme";  // text to type
let twIndex = 0;

function typeWriterEffect() {
  if (twIndex < typeMessage.length) {
    typewriterText.textContent += typeMessage.charAt(twIndex);
    twIndex++;
    setTimeout(typeWriterEffect, 90); // typing speed
  }
}

/* Start after preloader is hidden */
window.addEventListener("load", () => {
  setTimeout(() => {
    typeWriterEffect();
  }, 700);
});
/* ===========================
   HERO BUTTON DELAYED ENTRANCE
=========================== */

const heroBtn = document.querySelector(".hero .btn");

function showHeroButton() {
  heroBtn.classList.add("btn-enter");
}

/* Start button entrance AFTER typing is done */
window.addEventListener("load", () => {
  const totalTypingTime = 90 * "Mystic Orange Theme".length;

  setTimeout(() => {
    showHeroButton();
  }, 700 + totalTypingTime); 
});

