document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        alert('Registration successful');
        // Optionally redirect to login page
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  