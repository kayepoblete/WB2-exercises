// Exercise 2 page 92

let hoursWorked = 45;
let hourlyRate = 28;
let grossPay = hoursWorked * hourlyRate;
let filingStatus = "Joint";
let annualHours = hoursWorked * 52;
let annualGrossIncome = grossPay * 52;
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
taxWithheld = annualGrossIncome * taxRate;
netPay = annualGrossIncome - taxWithheld;


console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $" + hourlyRate.toFixed(2) + " per hour, your gross pay is $" + grossPay.toFixed(2));
console.log("Your annual gross income is $" + annualGrossIncome.toFixed(2));
console.log("Your filing status is " + filingStatus);
console.log("Your tax withholdings this year is $" + taxWithheld.toFixed(2));
console.log("Your net pay is $" + netPay.toFixed(2));
