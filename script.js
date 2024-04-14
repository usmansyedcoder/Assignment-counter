// Get elements
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countElement = document.getElementById('count');

// Initialize count
let count = 0;

// Update count display
function updateCount() {
    countElement.textContent = count;
}

// Event listeners for buttons
decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});

incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
    

});

// Initial display
updateCount();
