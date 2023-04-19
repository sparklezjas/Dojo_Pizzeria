function pizzaOven(bread, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", "mozerella", ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozerella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("hand tossed", "alfredo", "mozerella", "pickles");
var pizza4 = pizzaOven("thin crust", "marinara", "cheddar", ["BBQ sauce", "chicken", "red onions"])
console.log(pizza1, pizza2, pizza3, pizza4);

var crustType = [
    "deep dish",
    "hand tossed",
    "thin crust",
]
var sauceType = [
    "traditional",
    "marinara",
    "alfredo",
]
var cheese = [
    "mozerella",
    "feta",
    "cheddar",
]
var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "onions",
    "pickles",
    "BBQ sauce",
    "chicken",
    "red onions",
]
function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
function randomPizza (){
    var pizza = {};
    pizza.crustType = [randomPick(crustType)];
    pizza.sauceType = randomPick(sauceType);
    pizza.cheese = [];
    pizza.toppings = [];
    for (var i=0; i<randomRange (3,1); i++) {
        pizza.cheese.push(randomPick(cheese));
    }
    for (var i=0; i <randomRange(9,0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}
console.log(randomPizza());