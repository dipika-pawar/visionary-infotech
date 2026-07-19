//navbar
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

// =======================
// banner
// =======================

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.hero-content');
    
    // Initial state
    content.style.opacity = '0';
    content.style.transform = 'translateY(30px)';
    content.style.transition = 'all 1s ease-out';

    // Trigger animation
    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
});

// =========================
// Company Introduction
// =========================

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.phi-card');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 200); // Staggered entrance
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        // Initial state for animation
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.8s cubic-bezier(0.19, 1, 0.22, 1)";
        revealOnScroll.observe(card);
    });
});

// ========================
// mission-vision
// ========================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. 3D Parallax Mouse Tracking
    document.addEventListener('mousemove', (e) => {
        const cubes = document.querySelectorAll('.floating-cube');
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;

        cubes.forEach(cube => {
            const speed = cube.getAttribute('data-speed');
            cube.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * 2}deg)`;
        });
    });
});

// =======================
// Years of Experience
// =======================

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-3d-section');
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Lower is slower

    const startCounter = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger when visible
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                entry.target.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(statsSection);
});

// ========================
// Technology Expertise
// ========================

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
});


// ========================
// founder
// ========================

document.addEventListener('DOMContentLoaded', () => {
    const revealOnScroll = () => {
        const revealElements = document.querySelectorAll('.reveal-up');

        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);
});


// =====================
// Our Approach
// =====================

document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.approach-timeline');
    const progressLine = document.querySelector('.line-progress');
    const blocks = document.querySelectorAll('.approach-block');
    const header = document.querySelector('.approach-header');

    // 1. Reveal Elements on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    blocks.forEach(block => observer.observe(block));
    observer.observe(header);

    // 2. Scroll Progress Line Logic
    window.addEventListener('scroll', () => {
        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the timeline is visible
        let progress = (windowHeight - timelineRect.top) / timelineRect.height;
        
        // Clamp between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Offset slightly so it follows the user's scroll
        progressLine.style.height = `${progress * 100}%`;
    });
});

// ======================
// Core Values
// ======================

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on load
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