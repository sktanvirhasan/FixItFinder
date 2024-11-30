document.getElementById('file-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    document.querySelector('.dp').style.backgroundImage = `url(${e.target.result})`;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
});

function logout() {
  const token = localStorage.getItem('token');
  if (!token) {
      alert("You're already logged out or not logged in.");
      window.location.href = "/frontpage.html"; // Redirect to front page
      return;
  }

  fetch('/logout', {
      method: 'POST',
      headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(data => {
          if (data.message === 'Logout successful!') {
              localStorage.removeItem('token'); // Clear token

              // Prevent back navigation to protected routes
              history.pushState(null, null, '/');
              window.addEventListener('popstate', function () {
                  history.pushState(null, null, '/');
              });

              window.location.href = "/frontpage.html"; // Redirect to front page
          } else {
              alert(data.message);
              window.location.href = "/frontpage.html"; // Redirect to front page
          }
      })
      .catch(error => {
          console.error('Logout error:', error);
          alert('An error occurred. Please try again.');
          window.location.href = "/frontpage.html"; // Redirect to front page
      });
}


function gotoservicepage() {
const token = localStorage.getItem('token');
if (token) {
    window.location.href = "/service_list_C.html"; // Proceed only if the token is present
} else {
    alert('You must be logged in to access services.');
    window.location.href = "/frontpage.html";
}
}

// Attach the logout function to the logout button
document.querySelector('.logout button').addEventListener('click', logout);
