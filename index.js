document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Example validation (you should implement more robust validation)
    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Example of what you might do with the form data (e.g., send to server, store locally)
    alert("Registration successful!\nName: " + fullName + "\nEmail: " + email);

    // Clear form fields after submission (optional)
    document.getElementById("registrationForm").reset();

    // Redirect to another page after successful registration
    window.location.href = "dashboard.html";
  });
