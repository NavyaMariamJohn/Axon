document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation for demo purposes
    if (username === "admin" && password === "password123") {
    
        errorMessage.textContent = "";  // Clear any previous error messages
        
        window.location.href = "home.html";  // Redirect to quiz page
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});