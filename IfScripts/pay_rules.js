//Calculate gross pay

let payRate = 25.00;
let hoursWorked = 40;
let pay = payRate * hoursWorked;
let overTimeRate = payRate * 1.5;

if (hoursWorked > 40){
    var overTimeHours = hoursWorked - 40;
    pay = (payRate * 40) + (overTimeHours * overTimeRate);
}

console.log(pay);