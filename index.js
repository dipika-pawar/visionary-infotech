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

// ======================
// banner section
// ====================== 

const card = document.getElementById('tilt-card');
const section = document.querySelector('.hero-section');

section.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

section.addEventListener('mouseleave', () => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


// ======================
// about section
// ====================== 

gsap.registerPlugin(ScrollTrigger);

// 1. Three.js: Sphere Logic
const container = document.getElementById('threejs-canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(2.6, 1);
const material = new THREE.MeshBasicMaterial({ 
    color: 0x00d2ff, 
    wireframe: true, 
    transparent: true, 
    opacity: 0.4 
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5.5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.003;
    sphere.rotation.x += 0.001;
    renderer.render(scene, camera);
}
animate();

// 2. Entrance Animations
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".premium-about-section",
        start: "top 75%",
    }
});

tl.from(".stagger-reveal", { y: 50, opacity: 0, duration: 1 })
  .from(".left-visual-sphere", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.6")
  .from(".sphere-overlay-label", { zoom: 0, opacity: 0, duration: 0.8 }, "-=0.4")
  .from(".right-content-text > *", { x: 30, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.8");

// 3. Counter Animation
document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    ScrollTrigger.create({
        trigger: counter,
        onEnter: () => {
            gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out"
            });
        }
    });
});
// ==========================
// Our Services Section
// ==========================

// Initialize Vanilla Tilt for 3D Cards
// हा कोड सर्व्हिसेस लोड झाल्यावर चालणे गरजेचे आहे
document.addEventListener("DOMContentLoaded", function() {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".service-card"), {
            max: 15,
            speed: 500,
            glare: true,
            "max-glare": 0.3,
            scale: 1.05,
            easing: "cubic-bezier(.03,.98,.52,.99)",
        });
    } else {
        console.error("VanillaTilt library not loaded!");
    }
});

// =======================
// Why Choose Us
// =======================

    document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.feature-card');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // कार्ड्स दिसल्यावर अ‍ॅनिमेशन क्लास लावणे
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 150); // स्टॅगर इफेक्ट
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // सुरुवातीला कार्ड्स खाली आणि अदृश्य ठेवणे
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
});

// =======================
// Technologies We Use
// =======================

const orbit = document.querySelector('.hologram-orbit');

// Mouse movement effect
document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 20;
    
    // Slightly tilt the hologram orbit based on mouse
    orbit.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

// ===========================
// Our Process Section
// ===========================

gsap.registerPlugin(ScrollTrigger);

// 1. Animate SVG Path Drawing
const path = document.querySelector("#draw-path");
const pathLength = path.getTotalLength();

gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".path-visualizer",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1.5 // स्क्रोल सोबत मार्ग आखला जाईल
    }
});

// 2. Animate Cards appearance
const steps = document.querySelectorAll(".step-box");

steps.forEach((step, i) => {
    gsap.from(step, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100, // डावीकडून आणि उजवीकडून येतील
        duration: 1,
        scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});

// ======================
// Our Clients
// ======================

document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById("marquee-track");
    const cards = track.innerHTML;
    
    // कार्ड्सना डबल करणे जेणेकरून लूपमध्ये खंड पडणार नाही
    track.innerHTML = cards + cards + cards;

    // Optional: 3D Tilt Effect on mouse move
    const reviewCards = document.querySelectorAll('.review-card-3d');
    
    reviewCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
        });
    });
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