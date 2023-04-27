// Exercise 2 page 92

let hoursWorked = 45;
let hourlyRate = 10;
let grossPay = hoursWorked * hourlyRate;
let filingStatus = "Single";
let annualHours = hoursWorked * 52;
let taxRate;
let overTimeRate = hourlyRate * 1.5;

if (hoursWorked > 40){
    var overTimeHours = hoursWorked - 40;
    grossPay = (hourlyRate * 40) + (overTimeHours * overTimeRate);
}

let annualGrossIncome = grossPay * 52;

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
let taxWithheldWeek = grossPay * taxRate;
let taxWithheldAnnual = annualGrossIncome * taxRate;
let netPayWeek = grossPay - taxWithheldWeek;
let netPayYear = annualGrossIncome - taxWithheldAnnual;


console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $" + hourlyRate.toFixed(2) + " per hour, your gross pay is $" + grossPay.toFixed(2));
console.log("Your annual gross income is $" + annualGrossIncome.toFixed(2));
console.log("Your filing status is " + filingStatus);
console.log("Your tax withholdings this week is $" + taxWithheldWeek.toFixed(2));
console.log("Your net pay this week is $" + netPayWeek.toFixed(2));
console.log("Your tax withholdings this year is $" + taxWithheldAnnual.toFixed(2));
console.log("Your net pay this year is $" + netPayYear.toFixed(2));
