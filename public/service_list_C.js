function searchService() {
    const service = document.getElementById('service-select').value;
    document.getElementById('service-name').textContent = service;

    fetch('/search', {
        method: 'POST',
        body: JSON.stringify({ service: service }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': localStorage.getItem('token')
        },
    })
    .then(response => {
        if (!response.ok) {
            // Check if response status is 404 and handle the "No technicians found" message
            if (response.status === 404) {
                return response.json().then(data => {
                    const ul = document.getElementById('service-man-ul');
                    ul.innerHTML = '<li>' + data.message + '</li>'; // Show the error message from the server
                    document.getElementById('service-search').style.display = 'none';
                    document.getElementById('service-man-list').style.display = 'block';
                });
            } else {
                throw new Error('An error occurred while fetching data.');
            }
        }
        return response.json();
    })
    .then(data => {
        const ul = document.getElementById('service-man-ul');
        ul.innerHTML = ''; // Clear previous list

        data.forEach(man => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${man.profileImage.replace('public', '')}" alt="${man.fullName}" class="service-man-image">
                <div class="service-man-details">
                    <span class="service-man-name">${man.fullName}</span>
                    <span class="service-man-mobile">${man.phoneNumber}</span>
                    <span class="rating">Rating:${man.ratings}/5</span>
                    <button class="portfolio-button" onclick="window.location.href='/portfolio?userName=${man.userName}'">See Details</button>
                    <select id="rating-select-${man.userName}">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                    </select>
                    <button class="rate-button" onclick="rateTechnician('${man.userName}')">Rate Technician</button>
                </div>
            `;
            ul.appendChild(li);
        });

        document.getElementById('service-search').style.display = 'none';
        document.getElementById('service-man-list').style.display = 'block';

        // Push a new state into the history stack
        history.pushState({ page: 'service-man-list' }, '', '');
    })
    .catch(error => console.error('Error fetching data:', error));
}

function rateTechnician(technicianUserName) {
    const rating = document.getElementById(`rating-select-${technicianUserName}`).value;
    const loged_user = localStorage.getItem('id');
    fetch('/rate-technician', {
        method: 'POST',
        body: JSON.stringify({ technicianUserName, ratingValue: rating ,loged_user}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else {
            alert('Rating submitted successfully!');
        }
    })
    .catch(error => console.error('Error submitting rating:', error));
}


function goBack() {
    document.getElementById('service-search').style.display = 'block';
    document.getElementById('service-man-list').style.display = 'none';
}