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

// =======================
// banner
// =======================


document.addEventListener("mousemove", (e) => {
    const layers = document.querySelectorAll("[data-speed]");
    
    layers.forEach(layer => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 80;
        const y = (window.innerHeight - e.pageY * speed) / 80;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// =========================
// Company Introduction
// =========================

document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});

// ========================
// mission-vision
// ========================

document.querySelectorAll('.mv-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Intensity of rotation
        const rotateX = (centerY - y) / 20;
        const rotateY = (x - centerX) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
});

// =======================
// Years of Experience
// =======================

// 1. Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// 2. Intersection Observer to start counter when scrolled
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounter();
        observer.disconnect();
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-grid'));

// 3. 3D Tilt Effect
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});

// ========================
// Technology Expertise
// ========================

document.addEventListener('mousemove', (e) => {
    const hexagons = document.querySelectorAll('.hex-wrapper');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    hexagons.forEach(hex => {
        const rect = hex.getBoundingClientRect();
        const hexX = rect.left + rect.width / 2;
        const hexY = rect.top + rect.height / 2;

        // Calculate distance between mouse and hexagon center
        const distance = Math.sqrt(Math.pow(mouseX - hexX, 2) + Math.pow(mouseY - hexY, 2));
        
        // Create wave effect based on distance
        if (distance < 400) {
            const lift = (400 - distance) / 10; // Lift intensity
            const tiltX = (mouseY - hexY) / 15;
            const tiltY = (mouseX - hexX) / 15;
            
            hex.style.transform = `translateY(${-lift}px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg)`;
        } else {
            hex.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
        }
    });
});


// ========================
// founder
// ========================

document.addEventListener('DOMContentLoaded', () => {
    
    // Function to trigger reveal animations on scroll
    const revealOnScroll = () => {
        const revealElements = document.querySelectorAll('.reveal-left, .reveal-right');

        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150; // Adjust for trigger distance

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
            // Optional: Remove active to hide again on scroll up
            // else { element.classList.remove('active'); }
        });
    };

    // Trigger check immediately in case section is visible on load
    revealOnScroll();

    // Attach scroll listener
    window.addEventListener('scroll', revealOnScroll);

    // Optional 3D Parallax Tilt for Photo (Active only on Hover)
    const photoContainer = document.querySelector('.photo-stack-container');
    const mainPhoto = document.querySelector('.main-photo-card');

    if(photoContainer && mainPhoto) {
        photoContainer.addEventListener('mousemove', (e) => {
            const rect = photoContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20; // Lower number = stronger tilt
            const rotateY = (centerX - x) / 20;
            
            mainPhoto.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`;
        });

        photoContainer.addEventListener('mouseleave', () => {
            // Reset to default landed rotated state from CSS
            mainPhoto.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) rotate(-3deg)`;
        });
    }
});


// =====================
// Our Approach
// =====================

document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll('.reveal-block');

    const blockObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered effect (one by one)
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); 
            }
        });
    }, { threshold: 0.2 });

    blocks.forEach(block => {
        blockObserver.observe(block);
    });
});

// ======================
// Core Values
// ======================

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.value-card');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    cards.forEach(card => {
        // Adding a bit of randomness to each card for organic feel
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(10px)`;
    });
});

// Staggered Animation for Floating
document.querySelectorAll('.value-card').forEach((card, index) => {
    card.style.setProperty('--delay', index * 0.5);
});

//===========================
//FOOTER JS
//===========================

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