function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses   = cheeses;
    pizza.toppings  = toppings;
    return pizza;
}

function randomPizza() {
    var crustTypes = ["deep dish", "hand tossed", "thin crust", "gluten free"];
    var sauceTypes = ["traditional", "marinara", "white", "olive oil"];
    var cheeseTypes = ["mozzarella", "feta", "none"];
    var toppingTypes = ["pepperoni", "sausage", "mushrooms","olives", "canadian bacon", "pineapple", "onions", "green peppers"];

    return pizzaOven(crustTypes[Math.floor(Math.random()*(crustTypes.length))],
                     sauceTypes[Math.floor(Math.random()*(sauceTypes.length))],
                     cheeseTypes[Math.floor(Math.random()*(cheeseTypes.length))],
                     toppingTypes[Math.floor(Math.random()*(toppingTypes.length))]);
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p1);

var p1 = pizzaOven("thin crust", "traditional", ["mozzarella"], ["canadian bacon", "pineapple"]);
console.log(p1);

var p1 = pizzaOven("gluten free", "white", ["mozzarella"], ["tomatoes", "basil"]);
console.log(p1);

var p1 = randomPizza();
console.log(p1);