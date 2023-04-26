"use strict"

let length = 30;
let width = 15;
let areaOfRoom = length * width;
let numberOfBox = (areaOfRoom + (areaOfRoom * 0.10)) / 12;


console.log("You will need " + Math.ceil(numberOfBox) + " box(es).");