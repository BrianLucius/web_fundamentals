function acceptCookies() {
    var element = document.querySelector("#cookie-time");
    element.remove();
}

function setTemperatures(element) {
    var d1h=document.querySelector("#day1 .ht");
    var d1l=document.querySelector("#day1 .lt");
    var d2h=document.querySelector("#day2 .ht");
    var d2l=document.querySelector("#day2 .lt");
    var d3h=document.querySelector("#day3 .ht");
    var d3l=document.querySelector("#day3 .lt");
    var d4h=document.querySelector("#day4 .ht");
    var d4l=document.querySelector("#day4 .lt");

    if (element.value == "F") {
        d1h.innerText=Math.round((parseInt(d1h.innerText)*(9/5))+32);
        d1l.innerText=Math.round((parseInt(d1l.innerText)*(9/5))+32);
        d2h.innerText=Math.round((parseInt(d2h.innerText)*(9/5))+32);
        d2l.innerText=Math.round((parseInt(d2l.innerText)*(9/5))+32);
        d3h.innerText=Math.round((parseInt(d3h.innerText)*(9/5))+32);
        d3l.innerText=Math.round((parseInt(d3l.innerText)*(9/5))+32);
        d4h.innerText=Math.round((parseInt(d4h.innerText)*(9/5))+32);
        d4l.innerText=Math.round((parseInt(d4l.innerText)*(9/5))+32);
    }
    if (element.value == "C") {
        d1h.innerText=Math.round((parseInt(d1h.innerText)-32)*(5/9));
        d1l.innerText=Math.round((parseInt(d1l.innerText)-32)*(5/9));
        d2h.innerText=Math.round((parseInt(d2h.innerText)-32)*(5/9));
        d2l.innerText=Math.round((parseInt(d2l.innerText)-32)*(5/9));
        d3h.innerText=Math.round((parseInt(d3h.innerText)-32)*(5/9));
        d3l.innerText=Math.round((parseInt(d3l.innerText)-32)*(5/9));
        d4h.innerText=Math.round((parseInt(d4h.innerText)-32)*(5/9));
        d4l.innerText=Math.round((parseInt(d4l.innerText)-32)*(5/9));
    }
}