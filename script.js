  document.getElementById('burger-menu').addEventListener('click', function() {
            document.getElementById('side-menu').classList.add('active');
        });

        document.getElementById('close-btn').addEventListener('click', function() {
            document.getElementById('side-menu').classList.remove('active');
});
    let currentReview = 0;

function showReview(index) {
    const slider = document.getElementById('reviews-slider');
    const reviews = document.querySelectorAll('.review');
    if (index >= reviews.length) {
        currentReview = 0;
    } else if (index < 0) {
        currentReview = reviews.length - 1;
    } else {
        currentReview = index;
    }
    slider.style.transform = `translateX(-${currentReview * 100}%)`;
}

function prevReview() {
    showReview(currentReview - 1);
}

function nextReview() {
    showReview(currentReview + 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showReview(currentReview);
});
      document.addEventListener('DOMContentLoaded', function() {
    // Show the popup when the page loads
    document.getElementById('popup').style.display = 'flex';

    // Close the popup when the close button is clicked
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('popup')) {
            document.getElementById('popup').style.display = 'none';
        }
    });
});
