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