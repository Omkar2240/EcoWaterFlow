// Get buttons and sections
const shortsBtn = document.getElementById('shorts-btn');
const videosBtn = document.getElementById('videos-btn');
const shortsSection = document.getElementById('shorts-section');
const videosSection = document.getElementById('videos-section');

// Add event listeners to toggle buttons
shortsBtn.addEventListener('click', () => {
    shortsBtn.classList.add('active');
    videosBtn.classList.remove('active');
    shortsSection.classList.add('active');
    videosSection.classList.remove('active');
});

videosBtn.addEventListener('click', () => {
    videosBtn.classList.add('active');
    shortsBtn.classList.remove('active');
    videosSection.classList.add('active');
    shortsSection.classList.remove('active');
});
