function sendVerificationCode() {
  var emailPhone = document.getElementById("email_phone").value;
  var verificationMethod = document.getElementById("verification_method").value;

  if (emailPhone === "" || verificationMethod === "") {
      alert("Please fill out all fields.");
      return;
  }

  fetch('/send-verification-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_phone: emailPhone, verification_method: verificationMethod })
  }).then(response => response.json())
  .then(data => {
      if (data.message === 'Verification code sent successfully!') {
          alert(data.message);
          document.getElementById("step1").style.display = "none";
          document.getElementById("step2").style.display = "block";
      } else {
          alert(data.message);
      }
  }).catch(error => {
      alert('Error sending verification code');
      console.error('Error:', error);
  });
}

function submitVerificationCode() {
  var emailPhone = document.getElementById("email_phone").value;
  var verificationCode = document.getElementById("verification_code").value;

  if (verificationCode === "") {
      alert("Please fill out the verification code.");
      return;
  }

  fetch('/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_phone: emailPhone, verification_code: verificationCode })
  }).then(response => response.json())
  .then(data => {
      if (data.message === 'Verification code is correct!') {
          alert(data.message);
          document.getElementById("step2").style.display = "none";
          document.getElementById("step3").style.display = "block";
      } else {
          alert(data.message);
      }
  }).catch(error => {
      alert('Error verifying the code');
      console.error('Error:', error);
  });
}

function submitNewPassword() {
  var emailPhone = document.getElementById("email_phone").value;
  var newPassword = document.getElementById("new_password").value;
  var confirmPassword = document.getElementById("confirm_password").value;

  if (newPassword === "" || confirmPassword === "") {
      alert("Please fill out all fields.");
      return;
  }

  if (newPassword.length < 6) {
      alert("New password must be at least 6 characters long.");
      return;
  }

  if (newPassword !== confirmPassword) {
      alert("Passwords don't match.");
      return;
  }

  fetch('/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email_phone: emailPhone, new_password: newPassword })
  }).then(response => response.json())
  .then(data => {
      if (data.message === 'Password reset successfully!') {
          alert(data.message);
          window.location.href = '/';  // Redirect to login page
      } else {
          alert(data.message);
      }
  }).catch(error => {
      alert('Error resetting password');
      console.error('Error:', error);
  });
}
