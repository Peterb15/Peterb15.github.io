// Function to display the popup ad
function displayPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("takeSurvey").style.display = "none";
    
    
}

// Function to close the popup ad
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("volumeChange").style.display = "block";
    document.getElementById() // Show volume change section after survey submission
}
// Function to reset everything
function Restart() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("volumeChange").style.display = "none";
    document.getElementById("email").value = "";
    document.getElementById("welcomeText").style.display = "block";
    document.getElementById("volumeInput").style.display = "block";
    document.getElementById("Enter").style.display = "block";
    document.getElementById("volumeText").style.display = "none";
    document.getElementById("Again").style.display = "none";
    document.getElementById("Adjust").style.display = "none";
    document.getElementById("volumeInput").value = "";
    document.getElementById("intro").style.display = "contents";
    document.getElementById("takeSurvey").style.display = "flex";

}

// Function to change volume
function changeVolume() {
    var volumeChange = getVolume();
    console.log(volumeChange);
    if (!isNaN(volumeChange)) {
        
        let message = "Volume has been changed by " + volumeChange + " dB.";
        console.log(message);

        document.getElementById("volumeText").innerText = message; // Display message
        document.getElementById("volumeText").style.display = "block"; // Show the message
        document.getElementById("volumeInput").style.display = "none";
        document.getElementById("welcomeText").style.display = "none";
        document.getElementById("Enter").style.display = "none";
        document.getElementById("Again").style.display = "block";
        document.getElementById("Adjust").style.display = "block";
    }
}

function checkEmail(){
    document.getElementById("emailCheck").style.display = "none";
    setTimeout(1000);
    let email =  document.getElementById("email").value;
    let realEmail = false;
    console.log(email.length);
    for(var i = 0; i < email.length; i++){
        console.log(email[i]);
        if(email[i] == '@'){
            realEmail = true;
        }
    }
    if(realEmail == true){
        closePopup();
    }
    else{
        console.log("FALSE");
        document.getElementById("emailCheck").style.display = "block";
    }
}

function adjustVolume(){
    document.getElementById("volumeChange").style.display = "none";
    document.getElementById("popup2").style.display = "block";
    document.getElementById("volume").innerText = getVolume() +"db";
}

function getVolume(){
    return(document.getElementById("volumeInput").value);
}

function lowerVolume(){
    document.getElementById("popup2").style.display = "none";
    document.getElementById("volumeInput").value--;
    document.getElementById("volume").innerText = getVolume() +"db";
    document.getElementById("popup3").style.display = "block";
}

function raiseVolume(){
    document.getElementById("popup2").style.display = "none";
    document.getElementById("volumeInput").value++;
    document.getElementById("volume").innerText = getVolume() +"db";
    document.getElementById("popup3").style.display = "block";
}

function Close(){
    document.getElementById("popup3").style.display = "none";
    document.getElementById("popup2").style.display = "block";
    document.getElementById("volume").innerText = getVolume() +"db";
}
