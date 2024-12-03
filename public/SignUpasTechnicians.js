const mainAreaDropdown = document.getElementById('mainArea');
const subAreaDropdown = document.getElementById('subArea');
    const subAreas = {
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
function populateSubAreas() {
    const selectedMainArea = mainAreaDropdown.value;
    subAreaDropdown.innerHTML = '';
    subAreas[selectedMainArea].forEach(subArea => {
        const option = document.createElement('option');
        option.textContent = subArea;
        option.value = subArea;
        subAreaDropdown.appendChild(option);
    });
}
mainAreaDropdown.addEventListener('change', populateSubAreas);

populateSubAreas();

function goToPage() {
    window.location.href = "/";
}
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileUrl = URL.createObjectURL(file);
        document.getElementById('file-url').textContent = fileUrl;
    }
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
document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Collect the form data

    try {
        const response = await fetch("https://fix-it-finder-seven.vercel.app/technicianregister", {
            method: 'POST',
            body: formData,
        });

        const result = await response.json(); // Parse the JSON response from the server

        if (response.ok) {
            alert(result.message); // Show the success message
            window.location.href = "frontpage.html"; // Redirect to the login page
        } else {
            alert("Registration failed. Please try again.");
        }
    } catch (error) {
        console.error("Error during registration:", error); // Log the error for debugging
        alert("Unable to connect to the server. Please try again later.");
    }
});
