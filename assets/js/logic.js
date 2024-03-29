
const toggleThemeButton = document.getElementById('toggleTheme');
const goBackButton = document.getElementById('goBack');

toggleThemeButton.addEventListener('click', () => {
    // Implement logic to toggle between light and dark mode
    document.body.classList.toggle('dark-mode');
});

goBackButton.addEventListener('click', () => {
    // Implement logic to navigate back to the landing page
    window.location.href = './index.html';
});

