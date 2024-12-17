
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();  // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Display a success message after form submission
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.classList.remove("hidden"); // Show the response message

    if (name && email && message) {
        // Update the message if all fields are valid
    alert( "Thank you for your message, " + name + ". We'll get back to you shortly.");
        alert.style.color = "green";
    } else {
        responseMessage.textContent = "Please fill out all fields.";
        responseMessage.style.color = "red";
    }

    // Optionally, clear the form after submission
    document.getElementById("contactForm").reset();

}