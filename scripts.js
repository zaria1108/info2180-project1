document.addEventListener("DOMContentLoaded", function () { 
    var form = document.querySelector(".newsletter form"); 
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".message");

    form.addEventListener("submit", function (event) { // Handle form submission
        
        event.preventDefault(); // Stop the page from reloading

        var email = emailInput.value.trim();

        if (email === "" || !emailInput.checkValidity()) { // Check if the email is empty or invalid
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =  // Display a success message
            "Thank you! Your email address " + email +
            " has been added to our mailing list!";
        form.reset();
    });
});