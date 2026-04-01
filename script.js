/**
 * Get Connected - Cookie Management Script
 * Uses localStorage to persist user preference
 */

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const statusElement = document.getElementById('opt-status');

    // 1. Show banner if no preference is saved
    if (banner && !localStorage.getItem('cookies-accepted')) {
        banner.style.display = 'block';
    }

    // 2. Update status text on the Cookies page if the element exists
    if (statusElement) {
        const isAccepted = localStorage.getItem('cookies-accepted');
        statusElement.innerText = isAccepted ? "Accepted" : "Not set";
    }
});

/**
 * Called when user clicks "Accept" in the banner
 */
function acceptCookies() {
    localStorage.setItem('cookies-accepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.display = 'none';
    }
}

/**
 * Called on the cookies.html page to reset preferences
 */
function clearCookies() {
    localStorage.removeItem('cookies-accepted');
    alert('Your preferences have been cleared.');
    window.location.reload();
}