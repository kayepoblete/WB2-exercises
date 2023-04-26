"use strict"

let numberOfPeople = 38;
let amountSeats = 15
let numberOfVans = numberOfPeople / amountSeats;
let cost = 250;

numberOfVans = Math.ceil(numberOfVans);
let splitCost = (numberOfVans*cost) / numberOfPeople;

console.log("Total vans needed: " + numberOfVans + " for " + numberOfPeople + " people.");
console.log("It would cost $" + splitCost.toFixed(2) + " per person.");


// if (numberOfPeople % 15 == 0){
//     console.log("Total vans needed: " + numberOfVans + " for " + numberOfPeople + " people.");
//     console.log("Total cost is $" + totalCost);
//     console.log("It would cost $" + splitCost.toFixed(2) + " per person.");
// }
// else{
//     var newNumberOfVans = (Math.floor(numberOfVans) + 1);
//     console.log("Total vans needed: " + newNumberOfVans + " for " + numberOfPeople + " people.");
//     var newTotalCost = newNumberOfVans * 250;
//     console.log("Total cost is $" + newTotalCost);
//     var newSplitCost = newTotalCost / numberOfPeople;
//     console.log("It would cost $" + newSplitCost.toFixed(2) + " per person.");
// }

