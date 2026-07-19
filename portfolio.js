document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // SELECT ELEMENTS
    // ==========================
    const menuToggle = document.querySelector("#mobile-menu");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-links");
    const clickableItems = document.querySelectorAll(".nav-links, .quote-btn");

    // ==========================
    // ACTIVE LINK LOGIC
    // ==========================
    let currentPage = window.location.pathname.split("/").pop();

    // Handle homepage
    if (currentPage === "") {
        currentPage = "index.html";
    }

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    // ==========================
    // MOBILE MENU TOGGLE
    // ==========================
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("is-active");
        navMenu.classList.toggle("active");
    });

    // ==========================
    // CLOSE MENU ON CLICK
    // ==========================
    clickableItems.forEach(item => {
        item.addEventListener("click", () => {
            menuToggle.classList.remove("is-active");
            navMenu.classList.remove("active");
        });
    });

    // ==========================
    // SCROLL EFFECT
    // ==========================
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");

        if (window.scrollY > 50) {
            navbar.style.height = "70px";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        } else {
            navbar.style.height = "85px";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal-item');

    // Trigger entrance animation with a slight delay for each element
    revealItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, 200 + (index * 150));
    });

    // Optional: Subtle Mouse Parallax for the glow circles
    const hero = document.querySelector('.portfolio-hero');
    const glows = document.querySelectorAll('.glow-circle');

    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        glows.forEach((glow, index) => {
            const speed = (index + 1) * 30;
            glow.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});


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

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Select all cards inside the grid
                const cards = entry.target.querySelectorAll('.reveal-up');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('active');
                    }, index * 150); // 150ms delay between each card
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const grid = document.querySelector('.stack-grid');
    if (grid) observer.observe(grid);
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

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const steps = entry.target.querySelectorAll('.reveal-step');
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.classList.add('active');
                    }, index * 200); // 200ms delay for each step
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const processGrid = document.querySelector('.process-steps');
    if (processGrid) observer.observe(processGrid);
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

document.addEventListener('DOMContentLoaded', () => {
    const ctaCard = document.querySelector('.reveal-cta');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once animated, stop observing
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.25 // Triggers when 25% of the card is visible
    });

    if (ctaCard) {
        observer.observe(ctaCard);
    }
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



// connected to filter out project

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.cat-card');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove active class from all buttons and add to clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // 2. Filter Projects
            projectCards.forEach(card => {
                // Initial fade out for smooth transition
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        // Trigger entrance animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300); // Matches CSS transition time
            });
        });
    });
});