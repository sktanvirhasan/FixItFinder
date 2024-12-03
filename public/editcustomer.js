document.addEventListener('DOMContentLoaded', () => {
    const areaSelect = document.getElementById('mainArea');
    const subAreaSelect = document.getElementById('subArea');
    const subAreaValue = document.getElementById('subAreaValue').value; // Holds the sub-area from backend

    // Function to fetch sub-areas based on the selected area
    function fetchSubAreas(area) {
        const subAreasByArea = {
                "Dhaka": ["Adabor", "Badda", "Bandar", "Bangshal", "Biman Bandar", "Cantonment", "Chawkbazar", "Dakshinkhan", "Darus Salam", "Demra", "Dhanmondi", "Gazipur Sadar", "Gendaria", "Gulshan", "Hazaribagh", "Jatrabari", "Kadamtali", "Kafrul", "Kalabagan", "Kamrangirchar", "Keraniganj", "Khilgaon", "Khilkhet", "Kotwali", "Lalbagh", "Mirpur-1", "Mirpur-10", "Mirpur-11", "Mirpur-11.5", "Mirpur-14", "Mirpur-2", "Mohammadpur", "Motijheel", "Narayanganj Sadar", "New Market [← Dhanmondi]", "Pallabi", "Paltan", "Ramna", "Rampura", "Sabujbagh", "Savar", "Shahbagh", "Sher-e-Bangla Nagar", "Shyampur", "Sutrapur", "Tejgaon", "Tejgaon Industrial Area", "Turag [← Uttara]", "Uttara"],
                "Chittagong": ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda", "Karnaphuli"],
                "Rajshahi": ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore", "Boalia", "Matihar", "Rajpara", "Shah Makdam", "Chandrima", "Katakhali", "Belpukur", "Airport", "Kashiadanga", "Kornohar", "Damkura"],
                "Faridpur": ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"],
                "Gazipur": ["Gazipur", "Kapasia", "Tongi", "Sripur", "Kaliganj", "Kaliakior"],
                "Gopalganj": ["Gopalganj", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
                "Kishoreganj": ["Kishoreganj Sadar", "Hossainpur", "Pakundia", "Katiadi", "Karimganj", "Tarail", "Itna", "Mithamoin", "Austagram", "Nikli", "Bajitpur", "Kuliarchar"],
                "Madaripur": ["Madaripur Sadar", "Kalkini", "Rajoir", "Shibchar", "Dasar"],
                "Manikganj": ["Ghior", "Daulatpur", "Manikganj Sadar", "Shibalaya", "Saturia", "Singair", "Harirampur"],
                "Munshiganj": ["Gazaria", "Tongibari", "Serajdikhan", "Lauhajong", "Sreenagar", "Munshiganj Sadar"],
                "Narayanganj": ["Narayanganj Sadar", "Bandor", "Rupganj", "Sonargaon", "Araihazar"],
                "Narsingdi": ["Belabo", "Monohardi", "Narshingdi Sadar", "Palash", "Raipura", "Shibpur"],
                "Rajbari": ["Baliakandi", "Goalanda", "Kalukhali", "Pangsha", "Rajbari Sadar", "Bhedarganj"],
                "Shariatpur": ["Damuddya", "Goshairhat", "Janjira", "Naria", "Shariatpur Sadar"],
                "Tangail": ["Basail", "Bhuapur", "Delduar", "Dhanbari", "Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Shakhipur", "Tangail Sadar"],
                "Bogura": ["Adamdighi", "Bogura Sadar", "Dhunot", "Dhupchancia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Shajahanpur", "Sherpur", "Shibganj", "Sonatala"],
                "Joypurhat": ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
                "Naogaon": ["Atrai", "Badalgachi", "Dhamoirhat", "Manda", "Mohadevpur", "Naogaon-Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Shapahar"],
                "Natore": ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Naldanga", "Natore Sadar", "Singra"],
                "Chapai Nawabganj": ["Bholahat", "Gomostapur", "Nachol", "Nawabganj Sadar", "Shibganj"],
                "Pabna": ["Atghoria", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"],
                "Sirajganj": ["Belkuchi", "Chowhali", "Kamarkhand", "Kazipur", "Raiganj", "Shahzadpur", "Sirajganj-S", "Tarash", "Ullapara"],
                "Bagerhat": ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sharankhola"],
                "Chuadanga": ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
                "Jashore": ["Abhoynagar", "Bagherpara", "Chowgacha", "Jashore-S", "Jhikargacha", "Keshabpur", "Monirampur", "Sarsha"],
                "Jhenaidah": ["Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Moheshpur", "Shailkupa"],
                "Khulna": ["Batiaghata", "Dacope", "Dighalia", "Dumuria", "Koira", "Paikgacha", "Phultala", "Rupsa", "Terokhada"],
                "Kushtia": ["Bheramara", "Daulatpur", "Khoksha", "Kumarkhali", "Kushtia Sadar", "Mirpur"],
                "Magura": ["Magura-S", "Mohammadpur", "Salikha", "Sreepur"],
                "Meherpur": ["Gangni", "Meherpur Sadar", "Mujib Nagar"],
                "Narail": ["Kalia", "Lohagara", "Narail Sadar"],
                "Satkhira": ["Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Satkhira-S", "Shyamnagar", "Tala"],
                "Jamalpur": ["Bakshiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melendah", "Sarishabari"],
                "Mymensingh": ["Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gouripur", "Haluaghat", "Ishwarganj", "Muktagacha", "Mymensingh Sadar", "Nandail", "Phulpur", "Tarakanda", "Trishal"],
                "Netrokona": ["Atpara", "Barhatta", "Durgapur", "Kalmakanda", "Kendua", "Khaliajuri", "Madan", "Mohanganj", "Netrakona Sadar", "Purbadhala"],
                "Sherpur": ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur-S", "Sreebordi"],
                "Bandarban": ["Alikadam", "Bandarban Sadar", "Lama", "Naikhyongchari", "Rowangchari", "Ruma", "Thanchi"],
                "Brahmanbaria": ["Akhaura", "Ashuganj", "Brahmanbaria Sadar", "Bancharampur", "Bijoynagar", "Kasba", "Nabinagar", "Nasirnagar", "Sarail"],
                "Chandpur": ["Chandpur Sadar", "Faridganj", "Haimchar", "Haziganj", "Kachua", "Matlab (Dakshin)", "Matlab (Uttar)", "Shahrasti"],
                "Comilla": ["Barura", "Brahmanpara", "Burichong", "Chandina", "Chouddagram", "Cumilla Sadar", "Cumilla Sadar Daksin", "Daudkandi", "Debidwar", "Homna", "Laksham", "Lalmai", "Meghna", "Monohorganj", "Muradnagar", "Nangalkot", "Titas"],
                "Cox's Bazar": ["Chakoria", "Cox'S Bazar Sadar", "Kutubdia", "Moheskhali", "Pekua", "Ramu", "Teknaf", "Ukhiya"],
                "Feni": ["Chhagalniya", "Daganbhuiyan", "Feni Sadar", "Fulgazi", "Porshuram", "Sonagazi"],
                "Khagracchari": ["Dighinala", "Guimara", "Khagrachari-S", "Laxmichari", "Mahalchari", "Manikchari", "Matiranga", "Panchari", "Ramgarh"],
                "Lakshmipur": ["Komol Nagar", "Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati"],
                "Noakhali": ["Begumganj", "Chatkhil", "Companiganj", "Hatiya", "Kabir Hat", "Noakhali Sadar", "Senbag", "Sonaimuri", "Subarna Char"],
                "Rangamati": ["Baghaichari", "Barkal", "Belaichari", "Juraichari", "Kaptai", "Kaukhali", "Langadu", "Nanniarchar", "Rajosthali", "Rangamati Sadar"],
                "Dinajpur": ["Birampur", "Birganj", "Birol", "Bochaganj", "Chirirbandar", "Dinajpur-S", "Fulbari", "Ghoraghat", "Hakimpur", "Kaharol", "Khanshama", "Nawabganj", "Parbatipur"],
                "Gaibandha": ["Fulchari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Saghata", "Sundarganj"],
                "Kurigram": ["Bhurungamari", "Chilmari", "Fulbari", "Kurigram Sadar", "Nageswari", "Rajarhat", "Rajibpur", "Rowmari", "Ulipur"],
                "Lalmonirhat": ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"],
                "Nilphamari": ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Sayedpur"],
                "Panchagarh": ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
                "Rangpur": ["Badarganj", "Gangachara", "Kaunia", "Mithapukur", "Pirgacha", "Pirganj", "Rangpur Sadar", "Taraganj"],
                "Thakurgaon": ["Baliadangi", "Haripur", "Pirganj", "Ranisankail", "Thakurgaon Sadar"],
                "Habiganj": ["Azmiriganj", "Bahubal", "Baniachong", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj", "Sayestaganj"],
                "Moulvibazar": ["Barlekha", "Juri", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal"],
                "Sunamganj": ["Biswamvarpur", "Chatak", "Dakhin Sunamganj", "Derai", "Dharmapasha", "Doarabazar", "Jagannathpur", "Jamalganj", "Sulla", "Sunamganj Sadar", "Tahirpur"],
                "Sylhet": ["Balaganj", "Beanibazar", "Biswanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Golapganj", "Gowainghat", "Jointiapur", "Kanaighat", "Osmaninagar", "Sylhet-S", "Zakiganj"],
                "Barguna": ["Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali"],
                "Barishal": ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Barishal-S", "Gouranadi", "Hizla", "Mehendiganj", "Muladi", "Uzirpur"],
                "Bhola": ["Bhola Sadar", "Borhanuddin", "Charfassion", "Daulatkhan", "Lalmohan", "Monpura", "Tazumuddin"],
                "Jhalokati": ["Jhalokathi Sadar", "Kathalia", "Nalchity", "Rajapur"],
                "Patuakhali": ["Bauphal", "Dashmina", "Dumki", "Galachipa", "Kalapara", "Mirjaganj", "Patuakhali Sadar", "Rangabali"],
                "Pirojpur": ["Bhandaria", "Kawkhali", "Mothbaria", "Nazirpur", "Nesarabad", "Pirojpur-S", "Zianagar"]
            
        };

        // Clear existing options
        subAreaSelect.innerHTML = '';

        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Select Sub-Area';
        defaultOption.value = '';
        subAreaSelect.appendChild(defaultOption);

        // Populate sub-area dropdown
        if (subAreasByArea[area]) {
            subAreasByArea[area].forEach(subArea => {
                const option = document.createElement('option');
                option.textContent = subArea;
                option.value = subArea;

                // Set selected if matches User.subArea
                if (subArea === subAreaValue) {
                    option.selected = true;
                }

                subAreaSelect.appendChild(option);
            });
        }
    }

    // Initial load: Fetch sub-areas for the current area value
    if (areaSelect.value) {
        fetchSubAreas(areaSelect.value);
    }

    // Event listener to fetch sub-areas when the area changes
    areaSelect.addEventListener('change', (event) => {
        fetchSubAreas(event.target.value);
    });
});


document.getElementById('file-input').addEventListener('change', function(event) {
    const fileLabel = document.getElementById('file-label');
    const fileUrlInput = document.getElementById('file-url');
    const file = event.target.files[0];

    if (file) {
        const fileName = file.name;
        const fileUrl = URL.createObjectURL(file);

        console.log(`Selected file: ${fileName}`);
        console.log(`File URL: ${fileUrl}`); 
        fileUrlInput.value = fileUrl;
    } else {
        fileLabel.innerHTML = 'Choose an Image';
        fileUrlInput.value = '';
    }
});


document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const fileUrlInput = document.getElementById('file-url');

    if (file) {
        const fileName = file.name;
        const fileUrl = URL.createObjectURL(file);
        console.log(`Selected file: ${fileName}`);
        console.log(`File URL: ${fileUrl}`);
        fileUrlInput.value = fileUrl;
    } else {
        fileUrlInput.value = '';
    }
});



// Function to show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification ' + (type === 'error' ? 'error' : '');
    notification.style.display = 'block';

    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Function to edit customer profile
async function editcustomer() {
    const form = document.getElementById('updateForm');
    const formData = new FormData(form);
    
    const response = await fetch(form.action, {
        method: 'POST',
        body: formData
    });

    const result = await response.json();

    if (response.ok) {
        showNotification(result.message);
        
        // Delay redirection to show notification
        setTimeout(() => {
            const userName = formData.get('userName'); // Extract username from form data
            window.location.href = `/User/${userName}`; // Redirect to the desired page
        }, 3000); // Wait for 3 seconds before redirecting
    } else {
        showNotification("Profile update failed. Please try again.", 'error');
    }
}

// Event listener for the Save Changes button
document.getElementById('saveChanges').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Check if token exists and continue if valid
        editcustomer(); // Call the editcustomer function
});


