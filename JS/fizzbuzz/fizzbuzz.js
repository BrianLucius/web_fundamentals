// solution 1
for (var i=1; i<=100; i++) {
    var output = "";
    if (i % 3 == 0 && i % 5 != 0){
        console.log("Fizz");
    }
    if (i % 3 != 0 && i % 5 == 0) {
        console.log("Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i*10)
    }
}

//solution 2 - preferred approach
for (i=1; i<=100; i++) {
    var output = "";
    if (i % 3 == 0) {
        output+="Fizz";
    }
    if (i % 5 == 0) {
        output+="Buzz";
    }
    if (output != "") {
        console.log(output);
    } else {
        console.log(i);
    }
}