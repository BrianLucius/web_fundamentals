// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

// Output:
// apples and apples;

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

// Output:
// apples and oranges

// While loops
var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// Output:
// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

// Reversing an array
function reverse(arr) {
    // arr.reverse();
    for (var i=arr.length-1; i >= 0; i--) {
        arr.push(arr[i]);
        arr.splice(i, 1);
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]