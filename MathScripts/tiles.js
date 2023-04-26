"use strict"

let length = 10;
let width = 20;
let areaOfRoom = length * width;
let numberOfBox = (areaOfRoom / 12) * 1.1;


console.log("You will need " + Math.ceil(numberOfBox) + " box(es).");