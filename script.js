// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect
const text = "Business Analytics Professional";
let index = 0;
const typewriter = document.querySelector('.typewriter');

function type() {
    if (index < text.length) {
        typewriter.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(type, 100);
    }
}

// Start typewriter effect when page loads
window.addEventListener('load', type);

// Reveal animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
}); 