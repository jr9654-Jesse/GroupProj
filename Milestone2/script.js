document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove("active-link"));

            // Add active class to the clicked link
            e.target.classList.add("active-link");

            // Hide all sections
            sections.forEach(section => {
                section.classList.add("hidden");
                section.classList.remove("opacity-100");
            });

            // Show the target section
            const targetId = e.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove("hidden");
                setTimeout(() => {
                    targetSection.classList.add("opacity-100");
                }, 10);
            }
        });
    });
});
