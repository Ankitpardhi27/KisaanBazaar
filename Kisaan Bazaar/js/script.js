// Add any interactive homepage logic here, e.g., slider, dynamic loading
console.log("Welcome to Kisaan Bazaar");
// js/index.js


document.addEventListener("DOMContentLoaded", () => {
  console.log("Kisaan Bazaar homepage loaded successfully!");

  // Optional: Scroll to top button, navbar shrink on scroll, etc.
  const nav = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("navbar-scrolled");
    } else {
      nav.classList.remove("navbar-scrolled");
    }
  });

  
});
