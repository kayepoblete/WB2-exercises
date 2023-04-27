// Exercise 1 page 89
//Calculate gross pay

let payRate = 10.00;
let hoursWorked = 45;
let pay = payRate * hoursWorked;
let overTimeRate = payRate * 1.5;

if (hoursWorked > 40){
    var overTimeHours = hoursWorked - 40;
    pay = (payRate * 40) + (overTimeHours * overTimeRate);
}

console.log(pay.toFixed(2));