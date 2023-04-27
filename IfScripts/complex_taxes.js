// Exercise 2 page 92

let hoursWorked = 45;
let hourlyRate;
let grossPay;
let filingStatus = "Joint";
let annualGrossIncome = 38000;
let taxRate;
let taxWithheld;
let netPay;

if (filingStatus == "Single") {
    if (annualGrossIncome < 12000){
        taxRate = 0.05;
    }
    else if (annualGrossIncome < 25000) {
        taxRate = 0.10;
    }
    else if (annualGrossIncome < 75000) {
        taxRate = 0.15;
    }
    else {
        taxRate = 0.20;
    }
}
else if (filingStatus == "Joint") {
    if (annualGrossIncome < 12000){
        taxRate = 0;
    }
    else if (annualGrossIncome < 25000) {
        taxRate = 0.06;
    }
    else if (annualGrossIncome < 75000) {
        taxRate = 0.11;
    }
    else {
        taxRate = 0.20;
    }
}



// console.log("You worked " + hoursWorked + " hours this period.");
// console.log("Because you earn $" + hourlyRate + " per hour, your gross pay is $" + grossPay);
// console.log("Your filing status is " + filingStatus);
// console.log("Your tax withholdings this period is $" + taxWithheld);
// console.log("Your net pay is $" + netPay);
