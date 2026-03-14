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

// =========================
// services banner
// =========================

const canvas = document.getElementById('lightTrailsCanvas');
const ctx = canvas.getContext('2d');

let width, height, lines = [];

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    lines = [];
    for (let i = 0; i < 60; i++) { // Lines count
        lines.push(new Line());
    }
}

class Line {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = Math.random() * 8 + 4;
        this.length = Math.random() * 150 + 50;
        this.color = Math.random() > 0.5 ? '#19d3da' : '#f28b30';
    }
    draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length, this.y - (this.length / 3));
        ctx.stroke();
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;

        this.x += this.speed;
        this.y -= this.speed / 3;

        if (this.x > width || this.y < 0) {
            this.reset();
            this.x = -this.length;
        }
    }
}

function animate() {
    ctx.fillStyle = 'rgba(2, 2, 5, 0.15)'; // Trail effect opacity
    ctx.fillRect(0, 0, width, height);
    lines.forEach(line => line.draw());
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();

// No Mouse Move Animation for Glass Header as requested.

// ========================
// Web Development
// ========================

document.addEventListener('mousemove', (e) => {
    const stack = document.getElementById('browserStack');
    const layers = document.querySelectorAll('.browser-layer');
    
    // Calculate mouse position relative to center
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;

    // Rotate the entire stack
    stack.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;

    // Separate layers on mouse move
    const top = document.querySelector('.layer-top');
    const middle = document.querySelector('.layer-middle');
    const bottom = document.querySelector('.layer-bottom');

    // Increasing the Z-gap dynamically
    top.style.transform = `translateZ(60px)`;
    middle.style.transform = `translateZ(0px)`;
    bottom.style.transform = `translateZ(-60px)`;
});

// Reset layers when mouse leaves the section
document.querySelector('.web-dev-section').addEventListener('mouseleave', () => {
    const top = document.querySelector('.layer-top');
    const middle = document.querySelector('.layer-middle');
    const bottom = document.querySelector('.layer-bottom');
    
    top.style.transform = `translateZ(0)`;
    middle.style.transform = `translateZ(-50px)`;
    bottom.style.transform = `translateZ(-100px)`;
});

// =======================
// Mobile App Development
// =======================

document.querySelectorAll('.point-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        // Remove active class from all boxes
        document.querySelectorAll('.point-box').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Get the target screen ID
        const screenType = this.getAttribute('data-screen');
        
        // Hide all screens
        document.querySelectorAll('.screen-content').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show specific screen logic
        if(screenType === 'android') document.getElementById('android-screen').classList.add('active');
        if(screenType === 'ios') document.getElementById('ios-screen').classList.add('active');
        if(screenType === 'hybrid' || screenType === 'uiux') document.getElementById('hybrid-screen').classList.add('active');
    });
});

// =======================
// UI/UX Design
// =======================

function transformDesign(step) {
    const renderLayer = document.getElementById('renderLayer');
    const canvas = document.getElementById('canvas3D');
    
    // Increase opacity and bring forward based on hover
    renderLayer.style.opacity = "1";
    renderLayer.style.transform = "translateZ(80px)";
    canvas.style.boxShadow = "0 0 50px rgba(233, 69, 96, 0.3)";

    // Change colors based on feature hover
    if(step === 1) renderLayer.style.background = "linear-gradient(135deg, #e94560, #16213e)";
    if(step === 4) renderLayer.style.boxShadow = "0 0 60px #19d3da";
}

// Revert on Mouse Out of the entire section
document.querySelector('.uiux-section').addEventListener('mouseleave', () => {
    const renderLayer = document.getElementById('renderLayer');
    const canvas = document.getElementById('canvas3D');
    
    renderLayer.style.opacity = "0";
    renderLayer.style.transform = "translateZ(50px)";
    canvas.style.transform = "rotateY(-20deg) rotateX(10deg)";
});

// Mouse tracking parallax for the canvas
document.addEventListener('mousemove', (e) => {
    const canvas = document.getElementById('canvas3D');
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    
    canvas.style.transform = `rotateY(${-x - 20}deg) rotateX(${y + 10}deg)`;
});

// ===============================
// API Development & Integration
// ===============================

document.addEventListener('mousemove', (e) => {
    const container = document.getElementById('cubeContainer');
    
    // Get mouse position relative to center of screen
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    // Apply 3D Rotation to the entire container
    container.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
    
    // Subtle parallax for nodes inside
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        const speed = (index + 1) * 0.2;
        node.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px) translateZ(50px)`;
    });
});

// Auto-animate lines pulsing
const lines1 = document.querySelectorAll('.neon-lines line');
setInterval(() => {
    lines.forEach(line => {
        line.style.opacity = Math.random() * 0.7 + 0.3;
    });
}, 500);


// ========================
// Cloud Solutions
// ========================

document.addEventListener('mousemove', (e) => {
    const stack = document.getElementById('cloudStack');
    const layers = document.querySelectorAll('.stack-layer');
    
    // Get mouse offset from center
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    // Apply rotation to the container
    stack.style.transform = `rotateX(${50 + y}deg) rotateZ(${-30 + x}deg)`;

    // Deep separation on hover/move
    const top = document.querySelector('.layer-top');
    const mid = document.querySelector('.layer-mid');
    const base = document.querySelector('.layer-base');

    top.style.transform = `translateZ(180px)`;
    mid.style.transform = `translateZ(60px)`;
    base.style.transform = `translateZ(-60px)`;
});

// Reset on Mouse Leave
document.querySelector('.cloud-section').addEventListener('mouseleave', () => {
    const top = document.querySelector('.layer-top');
    const mid = document.querySelector('.layer-mid');
    const base = document.querySelector('.layer-base');
    
    top.style.transform = `translateZ(120px)`;
    mid.style.transform = `translateZ(40px)`;
    base.style.transform = `translateZ(-40px)`;
});

// =========================
// Software Development
// =========================

document.addEventListener('mousemove', (e) => {
    const blueprint = document.getElementById('blueprintBox');
    const modules = document.querySelectorAll('.module');
    
    // Calculate rotation based on mouse
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    blueprint.style.transform = `rotateX(${60 + y}deg) rotateZ(${-45 + x}deg)`;

    // Blocks "Assembling" effect
    modules.forEach((mod, index) => {
        const height = (index + 1) * 40;
        // On mouse move, blocks rise up
        mod.style.transform = `translateZ(${height}px)`;
        mod.style.backgroundColor = `rgba(33, 147, 176, ${0.2 + (index * 0.15)})`;
        mod.style.boxShadow = `0 0 20px rgba(109, 213, 237, 0.4)`;
    });
});

// Reset blocks to ground when mouse stops/leaves
document.querySelector('.soft-dev-section').addEventListener('mouseleave', () => {
    const modules = document.querySelectorAll('.module');
    modules.forEach(mod => {
        mod.style.transform = `translateZ(0px)`;
        mod.style.backgroundColor = `rgba(33, 147, 176, 0.4)`;
        mod.style.boxShadow = `none`;
    });
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