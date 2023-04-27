// Exercise 2 page 95

let studentName = "Betty";
let studentMajor = "ENG";
let nameOfMajor;
let advisingLocation;

if (studentMajor == "BIOL"){
    nameOfMajor = "Biology";
    advisingLocation = "Science Bldg, Room 310";
}
else if (studentMajor == "CSCI"){
    nameOfMajor = "Computer Science";
    advisingLocation = "Sheppard Hall, Room 314";
}
else if (studentMajor == "ENG"){
    nameOfMajor = "English";
    advisingLocation = "Kerr Hall, Room 201";
}
else if (studentMajor == "HIST"){
    nameOfMajor = "History";
    advisingLocation = "Kerr Hall, Room 114";
}
else if (studentMajor == "MKT"){
    nameOfMajor = "Marketing";
    advisingLocation = "Westly Hall, Room 310";
}
else{
    nameOfMajor = "<unknown>";
    advisingLocation = "<unknown>";
}


console.log("Student: " + studentName);
console.log("Major: " + nameOfMajor);
console.log("Advising Location: " + advisingLocation);
