var toggleButton = document.querySelector(".toggle-btn");
var navItems = document.querySelector(".navbar-links");
var bails = document.querySelectorAll(".toggle-btn .bails .bail");
var stumps = document.querySelectorAll(".toggle-btn .stumps .stump");
toggleButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
  bails.forEach(toggleActiveClass());
  stumps.forEach(toggleActiveClass());
});
function toggleActiveClass() {
  return (item) => item.classList.toggle("active");
}
