// ==========================
// navbar
// ==========================


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links, .quote-btn');

// Toggle Mobile Menu
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Auto-Close Menu when any link or button is clicked
navLinks.forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));


//========================
// FOOTER
//=========================

document.addEventListener("DOMContentLoaded", () => {
    // Update Year
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-box').forEach(el => observer.observe(el));
});