

// Get references to the button and the body
const modeToggleButton = document.getElementById('modeToggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {
    // Toggle the 'light-mode' class on the body
    body.classList.toggle('light-mode');

    // Change the button text based on the current mode
    if (body.classList.contains('light-mode')) {
        modeToggleButton.textContent = 'Switch to Dark Mode'; // Change button text
    } else {
        modeToggleButton.textContent = 'Switch to Light Mode'; // Change button text
    }
});