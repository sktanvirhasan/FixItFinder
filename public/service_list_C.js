function searchService() {
    const service = document.getElementById('service-select').value;
    document.getElementById('service-name').textContent = service;

    // Show a loading message while fetching data
    const ul = document.getElementById('service-man-ul');
    ul.innerHTML = '<li>Loading...</li>';
    document.getElementById('service-search').style.display = 'none';
    document.getElementById('service-man-list').style.display = 'block';

    fetch('/search', {
        method: 'POST',
        body: JSON.stringify({ service }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': localStorage.getItem('token'),
        },
    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    return response.json().then(data => {
                        ul.innerHTML = `<li>${data.message}</li>`;
                        throw new Error('No technicians found.');
                    });
                }
                throw new Error('An error occurred while fetching data.');
            }
            return response.json();
        })
        .then(data => {
            ul.innerHTML = ''; // Clear loading message

            if (data.length === 0) {
                ul.innerHTML = '<li>No technicians available for this service.</li>';
            } else {
                data.forEach(man => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <img src="/profile-image/${man.userName}" alt="${man.fullName}" class="service-man-image">
                        <div class="service-man-details">
                            <span class="service-man-name">${man.fullName}</span>
                            <span class="service-man-mobile">${man.phoneNumber}</span>
                            <span class="rating">Rating: ${man.ratings}/5</span>
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
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            ul.innerHTML = '<li>Error fetching service technicians. Please try again later.</li>';
        });
}

function rateTechnician(technicianUserName) {
    const rating = document.getElementById(`rating-select-${technicianUserName}`).value;
    const loggedUser = localStorage.getItem('id');

    fetch('/rate-technician', {
        method: 'POST',
        body: JSON.stringify({ technicianUserName, ratingValue: rating, loggedUser }),
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