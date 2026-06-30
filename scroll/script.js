
/* =========================
   HERO SLIDES DATA
========================= */

const heroSlides = [
    {
        image: "assets/images/hero1.jpg",
        category: "🌊 Mystery",
        title: "The Kraken and the Real Deep-Sea Monsters",
        description: "For centuries, sailors feared monstrous creatures beneath the waves. Modern science suggests colossal squid may have inspired the legend.",
        button: "Read Story"
    },
    {
        image: "assets/images/hero2.jpg",
        category: "🇵🇭 Folklore",
        title: "The Aswang: Myth or Misunderstood Legend?",
        description: "Passed down through generations, the Aswang remains one of the Philippines' most feared mythical creatures.",
        button: "Read Story",
        link: "scrolls/aswang.html"
    },
    {
        image: "assets/images/hero3.jpg",
        category: "🏺 History",
        title: "The Trojan War: Myth That Became Reality",
        description: "Archaeological evidence suggests the legendary war may have been real.",
        button: "Read Story"
    },
    {
        image: "assets/images/hero4.jpg",
        category: "🔬 Science",
        title: "IBM's Nano Chip Breakthrough",
        description: "A leap in computing technology pushing limits of modern engineering.",
        button: "Read Story"
    },
    {
        image: "assets/images/hero5.jpg",
        category: "🌍 Wonders",
        title: "Machu Picchu: The Lost City in the Clouds",
        description: "An ancient Incan city hidden high in the Andes mountains.",
        button: "Read Story"
    }
];

/* =========================
   ELEMENTS
========================= */

const img = document.getElementById("hero-img");
const category = document.getElementById("hero-category");
const title = document.getElementById("hero-title");
const description = document.getElementById("hero-description");
const button = document.getElementById("hero-btn");

const slideBox = document.querySelector(".slide");
const progressBar = document.querySelector(".bar");

/* =========================
   STATE
========================= */

let currentSlide = 0;

/* =========================
   LOAD SLIDE FUNCTION
========================= */

function loadSlide() {

    const slide = heroSlides[currentSlide];

    // safety check (prevents blank crashes)
    if (!slide) return;

    // fade out animation
    slideBox.classList.add("fade-out");

    setTimeout(() => {

        // update content
        img.src = slide.image;
        category.textContent = slide.category || "";
        title.textContent = slide.title || "";
        description.textContent = slide.description || "";
        button.textContent = slide.button || "Read Story →";

        // fade in
        slideBox.classList.remove("fade-out");

        // restart progress bar
        progressBar.style.transition = "none";
        progressBar.style.width = "0%";

        setTimeout(() => {
            progressBar.style.transition = "width 6s linear";
            progressBar.style.width = "100%";
        }, 50);

    }, 300);
}

/* =========================
   NEXT SLIDE
========================= */

function nextSlide() {
    currentSlide++;

    if (currentSlide >= heroSlides.length) {
        currentSlide = 0;
    }

    loadSlide();
}

/* =========================
   INIT
========================= */

loadSlide();

// auto slide every 6 seconds
setInterval(nextSlide, 6000);
document.getElementById("hero-btn").addEventListener("click", function (e) {

    e.preventDefault();

    const slide = heroSlides[currentSlide];

    if (slide.link) {
        window.location.href = slide.link;
    }
});
