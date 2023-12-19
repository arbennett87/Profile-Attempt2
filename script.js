// test connection
// alert('Hello World')

// Change User Name by clicking edit profile link
function change_text(){
    document.getElementById("user-name").innerHTML="What's My Name Again??"
}

// Remove a div by clicking either button & increase/decrease connection counts

function acceptRequest(button) {
    // Get the parent <li> element of the clicked button
    var listItem = button.parentNode;

    // Get the counts
    var connectionRequestsCount = parseInt(document.getElementById("connection-requests-count").innerText);
    var yourConnectionsCount = parseInt(document.getElementById("your-connections-count").innerText);

    // Remove the entire connection from the list
    listItem.remove();

    // Update counts
    connectionRequestsCount--;
    yourConnectionsCount++;

    // Update the HTML
    document.getElementById("connection-requests-count").innerText = connectionRequestsCount;
    document.getElementById("your-connections-count").innerText = yourConnectionsCount;
}

function denyRequest(button) {
    // Get the parent <li> element of the clicked button
    var listItem = button.parentNode;

    // Get the count
    var connectionRequestsCount = parseInt(document.getElementById("connection-requests-count").innerText);

    // Remove the entire connection from the list
    listItem.remove();

    // Update count
    connectionRequestsCount--;

    // Update the HTML
    document.getElementById("connection-requests-count").innerText = connectionRequestsCount;
}
