/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            // If no email address is entered
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            // If a valid email address is entered
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            // Clear the input field after submission
            emailInput.value = "";
        }
    });
});

