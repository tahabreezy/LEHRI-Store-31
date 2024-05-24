// Create a link element for the CSS file
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'login.css';

// Append the link element to the head of the document
document.head.appendChild(linkElement);

// Your existing login logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  if (userName === "admin" && password === "313131") {
    window.location.href = 'index.html'; // Redirect to the home page
  } else {
    alert('Wrong Credentials');
  }
});

// Implement "remember me" functionality
const rememberMeCheckbox = document.getElementById('rememberMe');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

rememberMeCheckbox.addEventListener('change', function() {
    if (rememberMeCheckbox.checked) {
        // If "remember me" is checked, store the username and password in localStorage
        localStorage.setItem('username', usernameInput.value);
        localStorage.setItem('password', passwordInput.value);
    } else {
        // If "remember me" is unchecked, remove the stored username and password from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
});

// Check if there are stored credentials and populate the form
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

if (storedUsername && storedPassword) {
    usernameInput.value = storedUsername;
    passwordInput.value = storedPassword;
    rememberMeCheckbox.checked = true;
}
