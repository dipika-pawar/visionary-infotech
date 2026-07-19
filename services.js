// ==========================
// navbar
// ==========================


document.addEventListener('DOMContentLoaded', () => {
    // 1. --- SELECT ELEMENTS ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const allLinks = document.querySelectorAll('.nav-links');
    const clickableItems = document.querySelectorAll('.nav-links, .quote-btn');

    // 2. --- ACTIVE PAGE INDICATOR ---
    // Get the current filename (e.g., "about.html")
    const currentPath = window.location.pathname.split("/").pop();

    allLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if current URL matches the link, or handle root/index.html
        if (currentPath === linkPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 3. --- MOBILE MENU TOGGLE ---
    const toggleMenu = () => {
        menuToggle.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleMenu);

    // 4. --- AUTO-CLOSE ON CLICK ---
    // Closes the mobile menu when a link is clicked (great for UX)
    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('is-active');
            navMenu.classList.remove('active');
        });
    });

    // 5. --- SCROLL EFFECT (Optional Bonus) ---
    // Adds a shadow to the navbar when the user scrolls down
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0"; // Slightly shrink navbar
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.padding = "0";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
        }
    });
});

// =========================
// services banner
// =========================

// 1. Particle Background Animation
const canvas = document.getElementById('lightTrailsCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.color = Math.random() > 0.5 ? '#00d2ff' : '#8a2387';
        this.opacity = Math.random() * 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
animate();

// 2. 3D Tilt Effect for Right Card
const tiltBox = document.getElementById('tilt-box');
document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    tiltBox.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Reset tilt on mouse out
document.addEventListener('mouseleave', () => {
    tiltBox.style.transform = `rotateY(0deg) rotateX(0deg)`;
    tiltBox.style.transition = "transform 0.5s ease";
});

document.addEventListener('mouseenter', () => {
    tiltBox.style.transition = "none";
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