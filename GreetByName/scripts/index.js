"use strict";

window.onload = init;

function init(){
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked(){
    const greetName = document.getElementById("nameField").value;
    const message = `Hello ${greetName}`;
    alert(message);
}

