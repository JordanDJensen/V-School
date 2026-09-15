let clickCount = parseInt(localStorage.getItem("click")) || 0;

// Get the display element
let clickDisplay = document.getElementById("click-count");

// Initialize the display with the current count
clickDisplay.textContent = clickCount;

// Add click event listener
window.addEventListener('click', function(){
    clickCount++
    localStorage.setItem("click", clickCount)
    clickDisplay.textContent = clickCount
});