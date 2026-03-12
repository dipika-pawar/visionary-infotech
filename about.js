const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar"); // Target the class being animated
const navLinks = document.querySelectorAll(".nav-item");

// Toggle Menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        // When scrolling down: keep it white but maybe add a shadow
        header.style.background = '#ffffff';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        // When at the top: Ensure it stays solid white
        header.style.background = '#ffffff';
        header.style.boxShadow = 'none';
    }
});

// Ensure AOS is initialized
AOS.init({
    duration: 1000,
    once: true,
    offset: 200
});

// Animated Statistics Counter Function
const startStatsCounter = () => {
    const statsNumbers = document.querySelectorAll('.stat-number');
    const animationSpeed = 200; // Lower is faster

    statsNumbers.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Get target number
            const count = +counter.innerText; // Get current count (starts at 0)
            
            // Calculate increment based on speed and target
            const increment = target / animationSpeed; 

            if (count < target) {
                // If current count is less than target, add increment
                counter.innerText = Math.ceil(count + increment);
                // Call this function again after 1ms
                setTimeout(updateCount, 1);
            } else {
                // If target is reached, ensure it displays the exact target number
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer to trigger animation on scroll
const statsSection = document.querySelector('.stats-section');
const observerOptions = {
    root: null, // use the viewport
    threshold: 0.6 // Trigger when 60% of the section is visible
};

const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Section is visible, start the counter
            startStatsCounter();
            // Stop observing after the animation has run once
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing the stats section
if (statsSection) {
    statsObserver.observe(statsSection);
}