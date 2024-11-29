const mediaQuery = window.matchMedia("(max-width: 768px)");
const shareButton = document.getElementById('share-button');
const shareIcon = document.getElementById('share-icon');
const shareOptions = document.getElementById('social-media-options');
const userInfo = document.getElementById('user-info');
const userDetails = document.getElementById('user-details');
let isShareOptionsVisible = false;

function handleClick(event) {
    isShareOptionsVisible = !isShareOptionsVisible;
    if(isShareOptionsVisible) {
        shareOptions.style.display = 'flex'
        shareOptions.style.opacity = '1';
        // If screen size is smaller than 768px
        if (mediaQuery.matches)  {
            shareButton.classList.add('show-social-media');
            // userDetails.style.visibility = 'hidden';
            userDetails.style.display = 'none';
            userInfo.style.backgroundColor = 'hsl(217, 19%, 35%)';
        } else {
            shareButton.classList.add('tooltip');
        }
    } else {
        shareOptions.style.display = 'none';
        shareOptions.style.opacity = '0';
        // If screen size is smaller than 768px
        if (mediaQuery.matches) {
            shareButton.classList.remove('show-social-media');
            userDetails.style.display = 'flex';
            // userDetails.style.visibility = 'visible';
            userInfo.style.backgroundColor = 'white';
        } else {
            shareButton.classList.remove('tooltip');
        }
    }
}

shareButton.addEventListener('click', handleClick);