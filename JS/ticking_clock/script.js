function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    // console.log(time);
    var seconds = (time*6)+180;
    var secondsElement = document.getElementById("seconds");
    secondsElement.style.transform = "rotate(" + seconds + "deg)";
    var minutes = ((time/60)*6)+180;
    var minutesElement = document.getElementById("minutes");
    minutesElement.style.transform = "rotate(" + minutes + "deg)";
    var hours = ((time/3600)*30)+180;
    var hoursElement = document.getElementById("hours");
    hoursElement.style.transform = "rotate(" + hours + "deg)";
}, 1000);
