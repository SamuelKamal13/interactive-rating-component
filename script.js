const ratingCard = document.querySelector('.ratingCard');
const thankYouCard = document.querySelector('.thankYouCard');
const submitButton = document.querySelector('.submitBtn');
const ratingButtons = document.querySelectorAll('.btn button');
let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remove the 'click' class from all buttons
        ratingButtons.forEach(btn => btn.classList.remove('click'));

        // Add 'click' class to the clicked button
        e.target.classList.add('click');

        // Get the selected rating
        selectedRating = e.target.textContent;
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating > 0) {
        // Hide the rating card and show the thank you card
        ratingCard.classList.remove('active');
        thankYouCard.classList.add('active');
        
        // Display the selected rating in the thank you card
        document.querySelector('.selected p').textContent = `You selected ${selectedRating} out of 5`;
    } else {
        alert('Please select a rating');
    }
});

// Initially show the rating card
ratingCard.classList.add('active');
