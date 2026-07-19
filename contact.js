// ==========================
// navbar
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  // 1. --- SELECT ELEMENTS ---
  const menuToggle = document.querySelector("#mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const allLinks = document.querySelectorAll(".nav-links");
  const clickableItems = document.querySelectorAll(".nav-links, .quote-btn");

  // 2. --- ACTIVE PAGE INDICATOR ---
  // Get the current filename (e.g., "about.html")
  const currentPath = window.location.pathname.split("/").pop();

  allLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Check if current URL matches the link, or handle root/index.html
    if (
      currentPath === linkPath ||
      (currentPath === "" && linkPath === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // 3. --- MOBILE MENU TOGGLE ---
  const toggleMenu = () => {
    menuToggle.classList.toggle("is-active");
    navMenu.classList.toggle("active");
  };

  menuToggle.addEventListener("click", toggleMenu);

  // 4. --- AUTO-CLOSE ON CLICK ---
  // Closes the mobile menu when a link is clicked (great for UX)
  clickableItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuToggle.classList.remove("is-active");
      navMenu.classList.remove("active");
    });
  });

  // 5. --- SCROLL EFFECT (Optional Bonus) ---
  // Adds a shadow to the navbar when the user scrolls down
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.padding = "10px 0"; // Slightly shrink navbar
      navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
      navbar.style.padding = "0";
      navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  const currentPath = window.location.pathname.split("/").pop();

  // Select all nav links
  const navLinks = document.querySelectorAll(".nav-links");

  navLinks.forEach((link) => {
    // Get the href attribute (e.g., 'about.html')
    const linkPath = link.getAttribute("href");

    // If current path matches link path, add the 'active' class
    if (
      currentPath === linkPath ||
      (currentPath === "" && linkPath === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".reveal-hero");
  if (hero) {
    // Subtle delay for premium feel
    setTimeout(() => {
      hero.classList.add("active");
    }, 200);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 },
  );

  const map = document.querySelector(".reveal-map");
  if (map) observer.observe(map);
});

//==========================
//contact form
//==========================
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // 1. Loading State: Disable button and show "Sending..."
    const submitBtn = this.querySelector(".submit-btn");
    const btnSpan = submitBtn.querySelector("span");
    const originalText = btnSpan.innerText;

    submitBtn.disabled = true;
    btnSpan.innerText = "Sending...";

    // 2. Collect Form Data using IDs from your HTML
    const formData = {
      full_name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phone").value,
      subject: document.getElementById("enquiry").value, // Mapping 'enquiry' dropdown to 'subject'
      message: document.getElementById("message").value,
    };

    console.log("Submitting Data:", formData);

    try {
      // 3. Send POST request to your Visionary Backend
      const response = await fetch("http://localhost:5000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // 4. Handle Server Response
      if (response.ok && data.success) {
        alert("Success! " + data.message);
        this.reset(); // Clear the form fields
      } else {
        alert("Error: " + (data.message || "Something went wrong."));
      }
    } catch (error) {
      // 5. Handle Network or Server Offline Errors
      console.error("Connection Error:", error);
      alert(
        "Could not connect to the server. Please ensure the Backend is running.",
      );
    } finally {
      // 6. Reset Button State
      submitBtn.disabled = false;
      btnSpan.innerText = originalText;
    }
  });

//===========================
//FOOTER JS
//===========================

document.addEventListener("DOMContentLoaded", () => {
  // Update Year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 },
  );

  document
    .querySelectorAll(".animate-box")
    .forEach((el) => observer.observe(el));
});
