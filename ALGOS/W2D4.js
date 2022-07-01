var nums=[23,0,30,24,8,6,1,22];
var nums2=[4,8,0,2,5];

//Search through an array for a number and return the index for the found number.
//If number is not found, return -1.
function searchForNum(arr, numToFind) {
    for (var i=0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] == numToFind) {
            return i;
        }
    }
    return -1;
}

console.log(searchForNum(nums, 1));


// Nested arrays:
var nestedNums = [[4,8,16,32],[3,6,9],[23,24,99]];
// console.log(nestedNums[0][3]);

function searchNestedArray(arr, numToFind) {
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == numToFind) {
                // return "["+i+"]["+j+"]";
                return {i, j};
            }
        }
    }
}

console.log(searchNestedArray(nestedNums, 23));


// Nesting Arrays
var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

function isPresent2d(arr, value) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == value) {
                return true;
            }
        }
    }
    return false;

}

console.log(isPresent2d(arr2d, 11));

// Flatten Array
// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (i = 0; i < arr2d.length; i++) {
        for (j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


