// Smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// Toggle menu
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

// Close menu after click
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav-links").classList.remove("active");
    });
});