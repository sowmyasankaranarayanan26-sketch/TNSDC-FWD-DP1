document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight active section in console (fun effect)
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      console.log("📍 Currently viewing:", sec.id);
    }
  });
});