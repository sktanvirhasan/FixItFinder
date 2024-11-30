document.addEventListener('DOMContentLoaded', function() {
    const signInButton = document.querySelector('.btn1');
    const phoneNumberInput = document.querySelector('#phnnumber .input-field');
    const passwordInput = document.querySelector('#password .input-field');
    const userTypeSelect = document.querySelector('#userType');

    signInButton.addEventListener('click', function(event) {
        event.preventDefault();

        const phoneNumber = phoneNumberInput.value.trim();
        const password = passwordInput.value.trim();
        const userType = userTypeSelect.value;

        if (!phoneNumber || !password || !userType) {
            alert('Please fill in all fields');
            return;
        }

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({
                identifier: phoneNumber,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            credentials: 'include', // Include cookies with the request
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.message === 'Login successful!') {
                alert('Login successful!');
                window.location.href = json.redirectTo;
            } else {
                alert(json.message);
            }
        })
        .catch((error) => {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again.');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Frontpage is loading");
});
