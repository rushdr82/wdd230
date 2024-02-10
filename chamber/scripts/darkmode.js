// Get the checkbox element
const darkModeToggle = document.getElementById("darkModeToggle");

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Listen for checkbox changes
darkModeToggle.addEventListener("change", toggleDarkMode);