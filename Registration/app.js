function register(event) {
    event.preventDefault();
    
    // Get form values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const middlename = document.getElementById("middlename").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    
    // Perform registration logic using the form values
    
    console.log("Registration:", firstname, lastname, middlename, email, phone, address);
    
    // Clear form
    document.getElementById("registration-form").reset();
  }
  
  function oauthSignup(provider) {
    console.log(`OAuth sign up with ${provider}`);
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    // DOM is ready
  });
  