// function greetUser(firstName, lastName) {
//     console.log("Hello " + firstName + " " + lastName);
// }

// greetUser("Brian", "Lucius");
// greetUser("123", "456");


function sum(num1, num2) {
    return num1 + num2;
}

var someNum = sum(3,9) + sum(1,2);

console.log("The sum is: " + someNum);

// Code Flow - Functions
var x = 5;

function setX(newValue) {
    x = newValue; 
}

console.log(x);
setX(15);
console.log(x);

// Output:
// 5
// 15

// The Return of return
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// Output:
// 5
// -5
// 5


// Code Flow - Is the Array a Palindrome
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

// Output:
// Not a pal-indrome!
// Pal-indrome!