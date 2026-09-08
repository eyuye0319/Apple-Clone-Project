// Get the mobile menu button
const menuButton = document.querySelector(".menu-button");

// Get the main navigation
const mainNav = document.querySelector(".main-nav");

// Open and close the mobile menu
menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("menu-open");
});
