// Exercise 2 page 89
//Determine whether a given year is a leap year in the Gregorian Calendar.

let year = 2000;

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    console.log(year + " is a leap year.")
}
else{
    console.log(year + " is not a leap year.")
}