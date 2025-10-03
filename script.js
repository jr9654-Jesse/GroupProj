document.addEventListener("DOMContentLoaded", () => {
    // 1. Navigation Logic (Handles Section Switching)
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

    // 2. Accordion Logic (Handles Notes Card Toggling)
    const accordionHeaders = document.querySelectorAll("#notes-accordion .accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const currentItem = header.closest(".accordion-item");
            const content = currentItem.querySelector(".accordion-content");
            const isActive = currentItem.classList.contains("active");

            // Close all items (Accordion behavior: only one open at a time)
            document.querySelectorAll("#notes-accordion .accordion-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                    item.querySelector(".accordion-content").style.maxHeight = 0;
                }
            });

            // Toggle the clicked item
            if (isActive) {
                // If already active, close it
                currentItem.classList.remove("active");
                content.style.maxHeight = 0;
            } else {
                // If not active, open it
                currentItem.classList.add("active");
                // Set max-height to its scroll height for a smooth, content-aware transition
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});