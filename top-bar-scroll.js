// Function to handle the top bar hiding/showing on scroll
function initTopBarScroll() {
    const topBar = document.querySelector('.top-bar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function handleScroll() {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            topBar.classList.add('hidden');
        } else {
            // Scrolling up
            topBar.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
}

// Initialize the scroll functionality after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    fetch('top-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('top-bar-placeholder').innerHTML = data;
            initTopBarScroll(); // Initialize the scroll functionality after loading the top bar
        })
        .catch(error => console.error('Error loading top bar:', error));

    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    fetch('bottom-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bottom-bar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading bottom bar:', error));
});