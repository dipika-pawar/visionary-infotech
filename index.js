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