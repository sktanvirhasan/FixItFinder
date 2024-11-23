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
    fetch('/logout', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => {
          if (data.message === 'Logout successful!') {
              localStorage.removeItem('token'); // Remove token from local storage
              
              // Clear the browser history to prevent back navigation
              history.pushState(null, null, '/');
              window.addEventListener('popstate', function(event) {
                  history.pushState(null, null, '/');
              });

              window.location.href = "/frontpage.html"; // Redirect to front page
          } else {
              alert(data.message); // Show the error message
              
              // Redirect to front page after showing the alert
              window.location.href = "/frontpage.html";
          }
      });
}



// Check if the user is logged in
function checkLoginStatus() {
  const token = localStorage.getItem('token');
  if (!token) {
      // User is not logged in
      document.querySelector('.services button').disabled = true; // Disable "Our Services" button
  }
}

// Event listeners for navigation buttons
function gotofrontpage() {
  logout(); // Call logout function before redirecting
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

// Check login status on page load
checkLoginStatus();

 















// Get modal elements
const modal = document.getElementById('messageModal');
const messageBtn = document.getElementById('messageBtn');
const closeBtn = document.getElementsByClassName('close')[0];

// Open modal
messageBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal if clicked outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
const messageForm = document.getElementById('messageForm');
messageForm.onsubmit = async function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;

    // Send the message to the server using fetch (POST request)
    const response = await fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            technicianId: '<%= technician._id %>', // The technician's ID
            message: message,
        }),
    });

    if (response.ok) {
        alert('Message sent successfully!');
        modal.style.display = 'none'; // Close modal on success
    } else {
        alert('Failed to send message. Please try again.');
    }
};














