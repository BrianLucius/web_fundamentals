function updateProfile(element) {
    var profileName = document.querySelector('#userName');
    var newUsername = document.querySelector('#usernameField');
    profileName.innerText = newUsername.value;
    modal.style.display = "none";
}

function acceptConnection(element) {
    var connection = element.parentNode.parentNode;
    connection.remove();
    
    var requestCount = document.querySelector('#requests-count');
    requestCount.innerText--;

    var connectionCount = document.querySelector('#connection-count');
    connectionCount.innerText++;
}

function declineConnection(element) {
    var connection = element.parentNode.parentNode;
    connection.remove();

    var requestCount = document.querySelector('#requests-count');
    requestCount.innerText--;
}

/* Courtesy of: https://www.w3schools.com/howto/howto_css_modals.asp */
// Get the modal
var modal = document.getElementById("editProfileModal");

// Get the button that opens the modal
var btn = document.getElementById("editProfile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}