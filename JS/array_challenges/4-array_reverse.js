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
