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

// ======================
// banner section
// ====================== 

const heroVisual = document.querySelector('.hero-visual');
const card = document.querySelector('.glass-card');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Only apply on desktop
    if(window.innerWidth > 992) {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
});

// Reset on Mouse Leave
heroVisual.addEventListener('mouseleave', () => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(-20deg) rotateX(10deg)`;
});

heroVisual.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});


// ======================
// about section
// ====================== 

// 1. Three.js - 3D Floating Particle Sphere
const init3D = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 2 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const container = document.getElementById('threejs-canvas-container');
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const material = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.15 });
    const sphere = new THREE.Points(geometry, material);
    scene.add(sphere);

    camera.position.z = 20;

    const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.003;
        sphere.rotation.x += 0.001;
        renderer.render(scene, camera);
    };
    animate();
};

// 2. GSAP Animations
const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Letter-by-letter fade up for Header
    const header = document.querySelector('.stagger-header');
    header.innerHTML = header.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    gsap.from(".letter", {
        scrollTrigger: {
            trigger: ".stagger-header",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out"
    });

    // Scan line (Glow Trace) Animation
    gsap.to(".scan-line", {
        scrollTrigger: {
            trigger: ".intro-text-box",
            start: "top 80%",
        },
        left: "100%",
        duration: 2,
        repeat: -1,
        ease: "none"
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        gsap.to(counter, {
            scrollTrigger: { trigger: counter, start: "top 90%" },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            onUpdate: function() { counter.innerHTML = Math.ceil(this.targets()[0].innerText) + "+"; }
        });
    });
};

window.onload = () => {
    init3D();
    initAnimations();
};

// ==========================
// Our Services Section
// ==========================

// Vanilla JavaScript for 3D Tilt Effect
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset rotation when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = "all 0.5s ease";
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = "none";
    });
});

// =======================
// Why Choose Us
// =======================

gsap.registerPlugin(ScrollTrigger);

// Animate Totems on Scroll
gsap.to(".totem-pillar", {
    scrollTrigger: {
        trigger: ".totem-grid",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 1.2,
    stagger: 0.2, // This creates the staggered "one-by-one" effect
    ease: "power4.out"
});

// Pulse effect for icons when hovered
document.querySelectorAll('.totem-pillar').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.floating-icon'), {
            scale: 1.3,
            duration: 0.3,
            ease: "back.out(2)"
        });
    });
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.floating-icon'), {
            scale: 1,
            duration: 0.3
        });
    });
});


// =======================
// Technologies We Use
// =======================

// सर्व होलोग्राम आयकॉन्स सिलेक्ट करा
const items = document.querySelectorAll('.holo-item');

// माऊस होव्हर केल्यावर अ‍ॅनिमेशन थांबवण्यासाठी (Optional)
const scene = document.querySelector('.hologram-icons');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        scene.style.animationPlayState = 'paused';
    });
    item.addEventListener('mouseleave', () => {
        scene.style.animationPlayState = 'running';
    });
});


// ===========================
// Our Process Section
// ===========================

// 1. AOS (Animate On Scroll) लायब्ररी इनिशियलाइज करा
// यामुळे स्क्रोल करताना कार्ड्स ३D मध्ये वर येतील
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,   // ॲनिमेशनचा वेग (1 सेकंद)
        easing: 'ease-out-back', // बाऊन्स बॅक इफेक्ट
        once: false,      // स्क्रोल अप-डाऊन दोन्ही वेळी ॲनिमेशन व्हावे
        mirror: true,     // वर स्क्रोल करताना पुन्हा ॲनिमेट होईल
        anchorPlacement: 'top-bottom', // कार्ड स्क्रीनवर आल्यावर लगेच सुरू होईल
    });

    // 2. Light Pulse Interaction
    // जेव्हा माऊस कार्डवर जाईल, तेव्हा बॅकग्राउंडच्या SVG पाथचा ग्लो वाढवण्यासाठी
    const cards = document.querySelectorAll('.step-card');
    const path = document.querySelector('.process-svg-path');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // होव्हर केल्यावर रस्त्याचा प्रकाश वाढवा
            path.style.filter = "drop-shadow(0 0 20px #00AEEF) brightness(1.5)";
            path.style.transition = "0.3s ease";
        });

        card.addEventListener('mouseleave', () => {
            // माऊस काढल्यावर मूळ प्रकाश परत आणा
            path.style.filter = "drop-shadow(0 0 10px #00AEEF)";
        });
    });

    // 3. Simple Parallax Effect for 3D Floating Path
    // स्क्रोल करताना रस्ता थोडा हालल्यासारखा वाटण्यासाठी
    window.addEventListener('scroll', () => {
        let scrollValue = window.scrollY;
        // रस्ता संथ गतीने वर-खाली होईल
        if(path) {
            path.style.transform = `translateY(${scrollValue * 0.05}px)`;
        }
    });
});

// ======================
// Our Clients
// ======================

const marqueeContent = document.getElementById('marquee-content');

// Clone the existing cards to create a seamless infinite loop
const cloneCards = () => {
    const cards = Array.from(marqueeContent.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        marqueeContent.appendChild(clone);
    });
};

// Initialize clone
cloneCards();

// Animation speed adjust (Optional)
// Tumhi ithe animation speed dynamically change karu sakta

