// Exercise 2 page 102

let studentName = "Betty";
let studentMajor = "ENG";
let nameOfMajor;
let advisingLocation;

switch(studentMajor){
    case "BIOL":
        nameOfMajor = "Biology";
        advisingLocation = "Science Bldg, Room 310";
        break;
    case "CSCI":
        nameOfMajor = "Computer Science";
        advisingLocation = "Sheppard Hall, Room 314";
        break;
    case "ENG":
        nameOfMajor = "English";
        advisingLocation = "Kerr Hall, Room 201";
        break;
    case "HIST":
        nameOfMajor = "History";
        advisingLocation = "Kerr Hall, Room 114";
        break;
    case "MKT":
        nameOfMajor = "Marketing";
        advisingLocation = "Westly Hall, Room 310";
        break;
    default:
        nameOfMajor = "<unknown>";
        advisingLocation = "<unknown>";
        break;
}

console.log("Student: " + studentName);
console.log("Major: " + nameOfMajor);
console.log("Advising Location: " + advisingLocation);
