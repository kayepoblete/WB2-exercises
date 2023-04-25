"use strict"

let numberOfPeople = 38;
let numberOfVans = numberOfPeople / 15;
let totalCost = numberOfVans * 250;
let splitCost = totalCost / numberOfPeople;

if (numberOfPeople % 15 == 0){
    console.log("Total vans needed: " + numberOfVans + " for " + numberOfPeople + " people.");
    console.log("Total cost is $" + totalCost);
    console.log("It would cost $" + splitCost.toFixed(2) + " per person.");
}
else{
    var newNumberOfVans = (Math.floor(numberOfVans) + 1);
    console.log("Total vans needed: " + newNumberOfVans + " for " + numberOfPeople + " people.");
    var newTotalCost = newNumberOfVans * 250;
    console.log("Total cost is $" + newTotalCost);
    var newSplitCost = newTotalCost / numberOfPeople;
    console.log("It would cost $" + newSplitCost.toFixed(2) + " per person.");
}

