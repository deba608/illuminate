// Participants list - Add all workshop participants here
const participants = [
    // Previous list
    "Abhash Dash",
    "Aditya Padhihari",
    "Ajitesh Kumar",
    "Akash Kumar Mishra",
    "AKASH SAHU",
    "Akshaya Rauta",
    "Alok Das",
    "AMIT KUMAR SAHOO",
    "ANKIT BISWAL",
    "Armish Kumar",
    "Arnab pattnaik",
    "Arpita Patnaik",
    "ARUNADITYA ACHARYA",
    "Ashish Abhisek Panda",
    "Ashutosh Khilar",
    "Ashutosh Rout",
    "Asish Kumar Dalei",
    "Astha Ranjan Pradhan",
    "Aurobind Bhuyan",
    "Ayush Dash",
    "Ayush Kumar Pradhan",
    "Ayush mukhi",
    "Ayushman Mishra",
    "Ayushman Mohapatra",
    "Bhukesh Barik",
    "Bhumika Mishra",
    "Bibhuprasad Samal",
    "Biplab Sahu",
    "Bishnupriya Sethi",
    "Biswajeet Behera",
    "Biswajit Pradhan",
    "Biswaranjan Behera",
    "Byapti Baibhabi Senapati",
    "Chikun Behera",
    "CHINTAMANI MOHANTA",
    "Chitesh Chand",
    "Dakhyesh Pradhan",
    "Debashis Sahoo",
    "Debashish Pradhan",
    "Debasis Behera",
    "Debiprasad Mohanta",
    "Deesa Rani Patel",
    "Dibakar Parida",
    "Dibya Prakash Bai",
    "Harsh Vardhan das",
    "HARSHIT RAI",
    "Haspit Gajibili",
    "Hritismita Sandha",
    "Indugu Ikshita Dora",
    "Jagdish Sahu",
    "Jaya Prakash Muduli",
    "Khirabdi Tanaya Patel",
    "Komrade Colossus Goutam",
    "Kousik swain",
    "Lawrencee Sethi",
    "LIPSA BEHERA",
    "Madhumati Mohanty",
    "Maheswar pradhan",
    "Manasi Panda",
    "Mrutyunjay jena",
    "Nishaant Kumar Das",
    "Omprakash Mahanta",
    "Omprakash mallick",
    "P. Brinda",
    "Piyush Palkesh Panda",
    "Prachi Purba Rout",
    "Pratik kumar mohanty",
    "Pratingya Swain",
    "Pratyush Pradhan",
    "Prayas Prasad Das",
    "Preeti Rani Nayak",
    "Preetish Swain",
    "Preyansh Mohanty",
    "PRIYAMBADA ARYA",
    "Priyanka Dey",
    "Priyanshu Das",
    "Priyansu Beriha",
    "Rabi Narayan Behera",
    "Rabi Narayan Behera",
    "Rajesh Kumar Sahoo",
    "Rohan Padhan",
    "RS SOYAM PRAKASH",
    "Rudra Pratap Palaka",
    "SAIRAJ BEHERA",
    "Sambit kumar maharana",
    "SANKET PRIYADARSHI",
    "Sarthak Sagar Bag",
    "Satwik Parasar Behera",
    "Satyajit Pradhan",
    "Sekharjit Padhan",
    "Shreemayee Sahoo",
    "Shruti Pattanayak",
    "Shubham Bindhani",
    "Shubham Kumar Behera",
    "Sibani priyadarshani",
    "Soham Mishra",
    "SONALI PANDA",
    "SOUMENDRA KUMAR SETHY",
    "Soumya Ranjan Jena",
    "Soumya Ranjan Sahoo",
    "Soumyadeepta Majhi",
    "Sovan Kumar Sahu",
    "Subham kumar sahoo",
    "Subham Mohapatra",
    "Subham sahu",
    "Swarna Prava Dwibedy",
    "SWAYMSHREE PANKAJ NATH",
    "SWYAM SIDDHA NANDA",
    "Tushar Kumar Martha",
    "Vaibhav Sahu",
    // New list
    "Adarsha Samantara",
    "Aditya Mishra",
    "Akash Gadanayak",
    "Alisa Biswal",
    "Aliva Simiran Patro",
    "Alok ranjan muduli",
    "Aniket panda",
    "Ankit Mohanty",
    "Anmol badhai",
    "Anurag Purohit",
    "Arpita Chand",
    "Arpita Pal",
    "Arya Abhishikta Baral",
    "Aryan Patra",
    "Aryan Shlok",
    "As Aditya sahu",
    "Ayush Kumar Pradhan",
    "Barsha rani Gadnayak",
    "Bidishna priyadarshini",
    "Bishal Agrawal",
    "Bishnu Prasad Senapati",
    "Chinmay Das",
    "Chiranjeev Mohapatra",
    "D Subham Senapati",
    "Debasnigdha Mohakud",
    "Dhanrujay hota",
    "Dhiraj Sahu",
    "GHANASYAM",
    "Jasmin Das",
    "KARTIK KUMAR SAHU",
    "Kaushik Kumar pujari",
    "Kaustav Jena",
    "Khyati Kshitija Panda",
    "Maitri mayee das",
    "Manyush Aroshis",
    "Mayuresh Mohanty",
    "Parnika Puhan",
    "prabhu ranjan senapati",
    "Prabhugyan Das",
    "Prabhupada Mishra",
    "Pratik kumar Samal",
    "Pratik Samantaray",
    "Prayash Kumar Das",
    "Preeti Priyadarshini",
    "Priyanka dash",
    "Rajalaxmi sahoo",
    "Rajashree priyadarshinee",
    "Rajib Dash",
    "Ranjeet Hansdah",
    "Rima chand",
    "Ritika Kukreja",
    "RITIKA SWAIN",
    "Roshan Paikary",
    "Rudra Madhab Sahu",
    "SAGRIKA KHATAI",
    "Sahin Faatma",
    "Sairaj Dalabehera",
    "Sanat Kumar Panda",
    "Sasmita samanta",
    "Satish Meher",
    "Satyajeet Behera",
    "Satyajit Nayak",
    "SHAIKH MOHAMMED NIHAL KHWAZA",
    "Shanya Keshri",
    "Shree Mohanty",
    "Sonali Sahoo",
    "Soumendra Mohanty",
    "Soumya Ranjan Behera",
    "Srikanta Kumar Mishra",
    "Srinibash Pattanayak",
    "Subha swastik Nanda",
    "Subhashree subhalaxmi Panda",
    "Subhranshu Sekhar Nayak",
    "Suchismita Mohanta",
    "SUGYAN MOHANTY",
    "Suman Kumar Majhi",
    "Susruta Sahu",
    "HARDIK KHANDELWAL",
    "Harshika H Chowhan",
    "Manas Ranjan Dikshit"
];


// State management using JavaScript variables
let currentParticipantName = '';
let selectedSuggestionIndex = -1;

// DOM Elements
const nameInput = document.getElementById('nameInput');
const searchBtn = document.getElementById('searchBtn');
const resultSection = document.getElementById('resultSection');
const successCard = document.getElementById('successCard');
const errorCard = document.getElementById('errorCard');
const participantNameSpan = document.getElementById('participantName');
const downloadBtn = document.getElementById('downloadBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const suggestionsContainer = document.getElementById('suggestions');

// Move suggestions container to document body so it escapes any local stacking contexts
// and avoids being covered by footer or other elements. We'll position it with JS.
if (suggestionsContainer && suggestionsContainer.parentElement !== document.body) {
    document.body.appendChild(suggestionsContainer);
    suggestionsContainer.style.position = 'fixed';
    suggestionsContainer.style.left = '0px';
    suggestionsContainer.style.top = '0px';
}

// Position the suggestions container under the input (or above if not enough space)
function positionSuggestions() {
    if (!suggestionsContainer || !nameInput) return;
    const rect = nameInput.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const maxHeight = 320; // matches CSS mobile max

    // default: place below
    let placeAbove = false;
    if (spaceBelow < 160 && rect.top > spaceBelow) {
        // not enough space below, and more space above -> place above
        placeAbove = true;
    }

    const left = rect.left;
    const width = rect.width;

    suggestionsContainer.style.width = Math.max(240, width) + 'px';
    suggestionsContainer.style.left = left + 'px';
    if (placeAbove) {
        // position above the input
        suggestionsContainer.style.top = (rect.top - Math.min(maxHeight, rect.top) - 8) + 'px';
        suggestionsContainer.style.maxHeight = Math.min(maxHeight, rect.top - 16) + 'px';
    } else {
        // position below the input
        suggestionsContainer.style.top = (rect.bottom + 8) + 'px';
        suggestionsContainer.style.maxHeight = Math.min(maxHeight, viewportHeight - rect.bottom - 24) + 'px';
    }
}

// Reposition on scroll/resize to keep it aligned
window.addEventListener('scroll', () => {
    if (suggestionsContainer && suggestionsContainer.classList.contains('visible')) positionSuggestions();
}, { passive: true });
window.addEventListener('resize', () => {
    if (suggestionsContainer && suggestionsContainer.classList.contains('visible')) positionSuggestions();
});

// Utility function to normalize names for comparison
function normalizeName(name) {
    return name.trim().toLowerCase();
}

// Function to find participant
function findParticipant(searchName) {
    const normalizedSearch = normalizeName(searchName);
    
    return participants.find(participant => {
        return normalizeName(participant) === normalizedSearch;
    });
}

// Function to generate certificate filename
function getCertificatePath(name) {
    return `certificates/${name}_Participant.pdf`;
}

// Function to show success state
function showSuccess(participantName) {
    currentParticipantName = participantName;
    
    // Hide error card, show success card
    errorCard.classList.add('hidden');
    successCard.classList.remove('hidden');
    resultSection.classList.remove('hidden');
    
    // Update participant name in success message
    participantNameSpan.textContent = participantName;
    
    // Scroll to result
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Function to show error state
function showError() {
    // Hide success card, show error card
    successCard.classList.add('hidden');
    errorCard.classList.remove('hidden');
    resultSection.classList.remove('hidden');
    
    // Scroll to result
    setTimeout(() => {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// Function to hide all results
function hideResults() {
    resultSection.classList.add('hidden');
    successCard.classList.add('hidden');
    errorCard.classList.add('hidden');
}

// Function to handle search
function handleSearch() {
    const searchName = nameInput.value.trim();
    
    // Validate input
    if (!searchName) {
        alert('Please enter your name');
        nameInput.focus();
        return;
    }
    
    // Search for participant
    const foundParticipant = findParticipant(searchName);
    
    if (foundParticipant) {
        showSuccess(foundParticipant);
    } else {
        showError();
    }
    hideSuggestions();
}

// Function to handle certificate download
function handleDownload() {
    if (!currentParticipantName) {
        alert('No certificate selected');
        return;
    }
    
    const certificatePath = getCertificatePath(currentParticipantName);
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = certificatePath;
    link.download = `${currentParticipantName}_Participant.pdf`;
    link.target = '_blank';
    
    // Add visual feedback
    downloadBtn.innerHTML = '<span class="button-text">Downloading...</span><div class="button-glow"></div>';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset button after a delay
    setTimeout(() => {
        downloadBtn.innerHTML = `
            <span class="button-text">Download Certificate</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <div class="button-glow"></div>
        `;
    }, 1500);
}

// Function to handle try again
function handleTryAgain() {
    hideResults();
    nameInput.value = '';
    nameInput.focus();
    currentParticipantName = '';
}

// Function to show suggestions
function showSuggestions(filteredParticipants) {
    suggestionsContainer.innerHTML = '';
    if (filteredParticipants.length > 0) {
        const ul = document.createElement('ul');
        filteredParticipants.forEach((participant) => {
            const li = document.createElement('li');
            li.textContent = participant;
            li.addEventListener('click', () => {
                nameInput.value = participant;
                handleSearch();
            });
            ul.appendChild(li);
        });
        suggestionsContainer.appendChild(ul);
        suggestionsContainer.classList.add('visible');
        // position it relative to the input
        positionSuggestions();
    } else {
        hideSuggestions();
    }
}

// Function to hide suggestions
function hideSuggestions() {
    suggestionsContainer.classList.remove('visible');
    selectedSuggestionIndex = -1;
}

// Function to update selected suggestion
function updateSelectedSuggestion(suggestions) {
    suggestions.forEach((li, index) => {
        if (index === selectedSuggestionIndex) {
            li.classList.add('selected');
            li.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            li.classList.remove('selected');
        }
    });
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);

nameInput.addEventListener('input', () => {
    const inputText = nameInput.value.trim();
    if (inputText.length > 0) {
        const filteredParticipants = participants.filter(participant =>
            normalizeName(participant).includes(normalizeName(inputText))
        );
        showSuggestions(filteredParticipants);
    } else {
        hideSuggestions();
    }
});

nameInput.addEventListener('keydown', (e) => {
    const suggestions = suggestionsContainer.querySelectorAll('li');
    if (suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestionIndex = (selectedSuggestionIndex + 1) % suggestions.length;
        updateSelectedSuggestion(suggestions);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedSuggestionIndex = (selectedSuggestionIndex - 1 + suggestions.length) % suggestions.length;
        updateSelectedSuggestion(suggestions);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedSuggestionIndex > -1) {
            nameInput.value = suggestions[selectedSuggestionIndex].textContent;
        }
        handleSearch();
    }
});

downloadBtn.addEventListener('click', handleDownload);
tryAgainBtn.addEventListener('click', handleTryAgain);

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!nameInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
        hideSuggestions();
    }
});

// Focus on input when page loads
window.addEventListener('load', () => {
    nameInput.focus();
});