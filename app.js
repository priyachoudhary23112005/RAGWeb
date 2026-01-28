// Sticky header
window.addEventListener("scroll", () => {
    document.querySelector(".site-header")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});



document.querySelectorAll(".animate").forEach(el => observer.observe(el));
