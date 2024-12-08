// Query selectors
const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

// Show popup
showPopup.addEventListener('click', () => {
    popupContainer.classList.add('active');
});

// Close popup
closeBtn.addEventListener('click', () => {
    popupContainer.classList.remove('active');
});
