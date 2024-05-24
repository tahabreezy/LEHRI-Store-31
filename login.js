document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  if (userName === "admin" && password === "313131") {
    window.location.href = 'index.html'; // Redirect to the Home page
  } else {
    alert('Wrong Credentials');
  }
});
