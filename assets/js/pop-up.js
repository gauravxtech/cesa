// Function to show popup
function showEventPopup() {
    try {
        const popup = document.getElementById('eventPopup');
        const overlay = document.getElementById('popupOverlay');
        
        if (popup && overlay) {
            overlay.style.display = 'block';
            popup.style.display = 'block';
            setTimeout(() => {
                popup.classList.add('show');
                overlay.classList.add('show');
            }, 10);
        } else {
            console.warn('Popup elements not found');
        }
    } catch (error) {
        console.error('Error showing popup:', error);
    }
}

// Function to close popup
function closeEventPopup() {
    try {
        const popup = document.getElementById('eventPopup');
        const overlay = document.getElementById('popupOverlay');
        
        if (popup && overlay) {
            popup.classList.remove('show');
            overlay.classList.remove('show');
            setTimeout(() => {
                popup.style.display = 'none';
                overlay.style.display = 'none';
                // Dispatch popupClosed event to reset navbar state
                window.dispatchEvent(new CustomEvent('popupClosed'));
            }, 300);
        }
    } catch (error) {
        console.error('Error closing popup:', error);
    }
}

// Show popup when page loads (with a slight delay)
window.addEventListener('load', () => {
    setTimeout(() => {
        try {
            showEventPopup();
        } catch (error) {
            console.error('Error in load event:', error);
        }
    }, 2000); // Increased delay
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    try {
        const popup = document.getElementById('eventPopup');
        const overlay = document.getElementById('popupOverlay');
        
        if (e.target === overlay) {
            closeEventPopup();
        }
    } catch (error) {
        console.error('Error in click event:', error);
    }
}); 