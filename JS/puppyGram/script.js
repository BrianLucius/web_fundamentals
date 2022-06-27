// console.log("Hello World");

// function acceptCookies(element) {
//     var cookieBox = document.getElementById(element);
//     cookieBox.parentNode.removeChild(cookieBox);
// }

function cookieMonster() {
    // console.log("cookie monsta!");
    var element = document.querySelector("#cookie-box");
    // console.log(element);
    element.remove();
}

function uploadPup(element) {
    // console.log("waaazzaaaa", element);
    element.innerText = "Uploaded! Thank you.";
}

function removeElement(element) {
    // console.log("Trying to remove something.");
    // console.log(element);
    element.remove();
}

function changeImg(element) {
    // console.log("changing image", element);
    element.src = "./resources/anothaPuppy.jpeg";
}