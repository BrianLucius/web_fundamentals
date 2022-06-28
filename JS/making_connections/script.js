function editProfile(element) {
    var profileName = element.parentNode.parentNode.querySelector('H1');
    profileName.innerText = "John Smith";
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