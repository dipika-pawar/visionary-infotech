document.addEventListener("DOMContentLoaded", () => {

  // 2. Hamburger Menu Toggle

  const hamburger = document.getElementById("hamburger");
  const navbar = document.querySelector(".navbar"); // Target the class being animated
  const navLinks = document.querySelectorAll(".nav-item");

  // Toggle Menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navbar.classList.remove("active");
    });
  });


});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.scroller-track');
    
    // Mobile var touch kela ki animation pause karnyasathi
    track.addEventListener('touchstart', () => {
        track.style.animationPlayState = 'paused';
    });

    track.addEventListener('touchend', () => {
        track.style.animationPlayState = 'running';
    });
});

// Accordion Logic
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all other items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Find all reveal elements inside the current observer entry or globally
                const revealElements = entry.target.parentElement.querySelectorAll('.reveal');
                
                revealElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add("active");
                    }, index * 150); // Staggered delay
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe the container to trigger all child animations
    const workContainer = document.querySelector(".work-steps-container");
    if(workContainer) observer.observe(workContainer);
});


