"use strict"

let interestRate = 12;
let balance = 10000;
let years = 72 / interestRate;
let worth = balance * 2;

console.log("At a " + interestRate + "% interest rate, your savings account will be worth " + worth.toFixed(2) + " in " + years.toFixed(1) + " years.");