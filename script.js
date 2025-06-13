document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling effect for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Expanding project descriptions
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("click", function() {
            this.classList.toggle("expanded");
        });
    });
});
