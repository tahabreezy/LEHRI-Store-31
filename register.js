document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Perform form validation
      if (validateForm()) {
          // If form is valid, you can proceed with registration process
          alert('Registration successful!');
          window.location.href = 'index.html';
          // You can also send form data to a server using AJAX if needed
          // Example: sendFormData();
      }
  });

  function validateForm() {
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const password = form.querySelector('input[name="password"]').value.trim();
      const confirmPassword = form.querySelector('input[name="confirmPassword"]').value.trim();
      const policyCheckbox = form.querySelector('input[type="checkbox"]');

      if (name === '') {
          alert('Please enter your name.');
          return false;
      }

      if (email === '') {
          alert('Please enter your email.');
          return false;
      }

      // You can add more complex email validation if needed

      if (password === '') {
          alert('Please create a password.');
          return false;
      }

      if (password.length < 6) {
          alert('Password must be at least 6 characters long.');
          return false;
      }

      if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return false;
      }

      if (!policyCheckbox.checked) {
          alert('Please accept the terms & conditions.');
          return false;
      }

      return true;
  }

  // You can define additional functions here if needed
});
