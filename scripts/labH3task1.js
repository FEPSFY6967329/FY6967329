// Get a reference to the button element
var button = document.getElementById("colourButton");

// Function to change the button colour
function changeColour() {
    // Generate random hex colour code
    var randomColour = "#" + Math.floor(Math.random()*16777215).toString(16);

    // Set button's background colour to the random colour
    button.style.backgroundColour = randomColour;
}

// Add click event listener to button
button.addEventListener("click", changeColour)