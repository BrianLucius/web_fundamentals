// var num1 = "";
var result = 0
var entry = "";
var op = "";
var displayDiv = document.querySelector("#display");

function updateDisplay(value) {
    displayDiv.innerText = value;
}

function press(value) {
    console.log(value);
    entry+=value;
    updateDisplay(entry);
}

function setOP(operator) {
    console.log(operator);
    calculate();
    op = operator;
}

function calculate() {
    console.log("Calculating....");
    //eval has security risks - use only for a POC and DO NOT use on a production site!
    result = eval(Number(result) + op + Number(entry));
    updateDisplay(result);
    entry = "";
}

function clr() {
    console.log("Clearing");
    result = 0;
    entry = "";
    op = "";
    updateDisplay(result);
}