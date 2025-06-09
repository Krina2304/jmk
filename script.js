
document.addEventListener("DOMContentLoaded", function() {

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const checkBox = document.getElementById('check');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            checkBox.checked = false; // Uncheck the checkbox to close the menu
        });
    });

    const contactForm = document.getElementById("contactForm");

    // Add an event listener for form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!fullName || !email || !phone || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Optional: You can add more validation for email format and phone number

        // Simulate form submission (you can replace this with an actual AJAX call)
        console.log("Form submitted successfully!");
        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", message);

        // Clear the form after submission
        contactForm.reset();

        // Provide feedback to the user
        alert("Thank you for contacting us! We will get back to you soon.");
    });
});
