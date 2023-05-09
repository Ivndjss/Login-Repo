function login(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Perform login logic using email and password
    console.log("Login:", email, password);
    
    // Clear form
    document.getElementById("login-form").reset();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // DOM is ready
  });
  