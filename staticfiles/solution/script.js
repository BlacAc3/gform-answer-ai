// Get references to elements
const loadingScreen = document.getElementById('loading-screen');
const startButton = document.getElementById('start-button');

// Function to show the loading screen
function showLoadingScreen() {
    loadingScreen.style.display = 'flex';
}

// Function to hide the loading screen
function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
}

// Simulate an async operation
startButton.addEventListener('submit', () => {
    showLoadingScreen();

    // Simulate a delay (e.g., fetch data or process)
});
