document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a"); // Select all nav links

    // Toggle menu on clicking hamburger icon
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked (on mobile)
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active"); // Hide the menu
        });
    });

    // Contact Form Submission (Web3Forms)
    const form = document.querySelector(".contact-form");

    if (form) { // Ensure the form exists before adding event listener
        form.addEventListener("submit", async function (event) {
            event.preventDefault(); // Prevent page refresh

            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                alert("✅ Message sent successfully! I will get back to you soon.");
                form.reset(); // Clear form fields after success
            } else {
                alert("❌ Error sending message. Please try again.");
            }
        });
    }
});
