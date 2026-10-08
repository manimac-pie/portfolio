// Mobile menu toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

function setMenu(open) {
  links.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

// Close the menu after choosing a link
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

// Close the menu with Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
