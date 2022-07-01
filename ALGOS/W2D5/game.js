// var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
//                 [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
//                 [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
//                 [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
//                 [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
//                 [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
//                 [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
//                 [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
//                 [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
//                 [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var theDojo = [];
var dojoDiv = document.querySelector("#the-dojo");
    
function generateTheDojo(width, height) {
    // Select numNinjas random numbers
    const numHiddenNinjas = 20;
    var ninjaCounter = 0;

    const numbers = Array(99).fill().map((_, index) => index +1);
    numbers.sort(() => Math.random() - 0.5);
    var randomNinjas = numbers.slice(0, numHiddenNinjas);
    console.log(randomNinjas);

    // Populate theDojo with ninjas
    for (y = 0; y < height; y++) {
        theDojo.push([]);
        for (x = 0; x < width; x++) {
            if (randomNinjas.includes(ninjaCounter)) {
                theDojo[y].push(1);
            } else {
                theDojo[y].push(0);
            }
            ninjaCounter++;
        }
    }
}

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    // console.log({i, j});  //* {y, x}
    // console.log(element);
    if (theDojo[i][j] != 0) {
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
        return;
    }

    var numNinjas = 0;
    for ( x = -1; x <= 1; x++) {
        for (y = -1; y <= 1; y++) {
            if ((y+i >= 0 && y+i < theDojo.length) && (JSON.stringify([x,y]) != JSON.stringify([0,0]))) {
                if ((x+j >= 0 && x+j < theDojo[i].length) && (JSON.stringify([x,y]) != JSON.stringify([0,0]))) {
                    numNinjas = numNinjas + theDojo[y+i][x+j];
                    }
                }
            }
        }
    //alert("Number of hiding ninjas: " + numNinjas);
    element.innerText = numNinjas;
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it  --done
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
generateTheDojo(10,10);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

