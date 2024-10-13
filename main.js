

// Declare doms
const modeToggleButton = document.getElementById('modeToggle');
const body = document.body;

modeToggleButton.addEventListener('click', () => {

    body.classList.toggle('light-mode');

    // Change the button text based on the current mode
    if (body.classList.contains('light-mode')) {
        modeToggleButton.textContent = 'Switch to Dark Mode';
    } else {
        modeToggleButton.textContent = 'Switch to Light Mode';
    }
});