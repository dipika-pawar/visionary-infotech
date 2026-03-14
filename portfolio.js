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


document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        // Logic to filter your project cards would go here
        const selectedCategory = this.getAttribute('data-filter');
        console.log("Filtering by:", selectedCategory);
    });
});


const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
            projectObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-project').forEach(card => projectObserver.observe(card));

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const title = document.querySelector('.animate-stack-title');
    if (title) observer.observe(title);

    document.querySelectorAll('.animate-stack-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 100}ms`;
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    const header = document.querySelector('.animate-process-in');
    if (header) processObserver.observe(header);

    document.querySelectorAll('.animate-process-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 150}ms`; // Staggered entry
        processObserver.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    const testimonialSection = document.querySelector('.animate-testimonial');
    if (testimonialSection) testimonialObserver.observe(testimonialSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    const ctaSection = document.querySelector('.animate-cta');
    if (ctaSection) ctaObserver.observe(ctaSection);
});


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