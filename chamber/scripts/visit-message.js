// Check if localStorage has a visit timestamp
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = new Date().getTime();

if (!lastVisit) {
    // First visit
    document.getElementById('visit-message').textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const timeDifference = currentDate - parseInt(lastVisit, 10);
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference <= 1) {
        document.getElementById('visit-message').textContent = 'Back so soon! Awesome!';
    } else {
        document.getElementById('visit-message').textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// Store the current visit timestamp
localStorage.setItem('lastVisit', currentDate.toString());