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


document.addEventListener('DOMContentLoaded', () => {
    const careerContent = document.querySelector('.reveal-career');
    
    // Smooth reveal after a short delay
    setTimeout(() => {
        if(careerContent) careerContent.classList.add('active');
    }, 200);

    // Optional: Subtle Parallax for the blobs
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        const blobs = document.querySelectorAll('.blob');
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.reveal-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('active');
                    }, index * 150); // 150ms stagger
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const grid = document.querySelector('.jobs-grid');
    if (grid) observer.observe(grid);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.reveal-left').classList.add('active');
                entry.target.querySelector('.reveal-right').classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    const section = document.querySelector('.intern-box');
    if (section) observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    const cta = document.querySelector('.reveal-cta');
    if (cta) observer.observe(cta);
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