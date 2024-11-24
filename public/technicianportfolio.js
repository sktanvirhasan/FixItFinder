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
    // Helper function to get cookie by name
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Retrieve the token from the __vercel_live_token cookie
    const token = getCookie('__vercel_live_token'); // Use the '__vercel_live_token' cookie name

    // If the token is found, proceed with logout
    if (token) {
        fetch('/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`, // Pass the token as 'Bearer' in the Authorization header
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
          .then(data => {
              if (data.message === 'Logout successful!') {
                  // Remove the token cookie from the client
                  document.cookie = '__vercel_live_token=; path=/; Secure; HttpOnly; SameSite=Strict; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                  // Redirect to the home page or login page
                  window.location.href = '/';
              } else {
                  alert(data.message); // Show error message if logout failed
              }
          })
          .catch((error) => {
              console.error('Error during logout:', error);
              alert('An error occurred during logout. Please try again.');
          });
    } else {
        alert('No token found. Please log in again.');
    }
}




// Check if the user is logged in
function checkLoginStatus() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const token = getCookie('token');

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
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const token = getCookie('token');
    
  if (token) {
      window.location.href = "/service_list_C.html"; // Proceed only if the token is present
  } else {
      alert('You must be logged in to access services.');
      window.location.href = "/";
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














