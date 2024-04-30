// Function to display the popup ad
function displayPopup() {
    document.getElementById("popup").style.display = "block";
    
}

// Function to close the popup ad
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("volumeChange").style.display = "block"; // Show volume change section after survey submission
}

function closePopupF() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("volumeChange").style.display = "none";
}

// Function to change volume
function changeVolume() {
    var volumeChange = parseFloat(document.getElementById("volumeInput").value);
    if (!isNaN(volumeChange)) {
        var message = "Volume has been changed by " + volumeChange + " dB.";
        document.getElementById("volumeMessage").innerText = message; // Display message on the website
        document.getElementById("volumeMessage").style.display = "block"; // Show the message div
        var changeAgain = confirm("Do you wish to change the volume again?");
        if (changeAgain) {
            // If user wants to change volume again, reset input and focus
            document.getElementById("volumeInput").value = "";
            document.getElementById("volumeInput").focus();
            document.getElementById("volumeMessage").style.display = "none"; // Hide the message div
        } else {
            // If user doesn't want to change volume again, hide volume change section
            document.getElementById("volumeChange").style.display = "none";
        }
    } else {
        alert("Please enter a valid number for volume change.");
    }
}