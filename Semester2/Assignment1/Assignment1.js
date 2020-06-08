//variable declaration starts
var age = document.getElementById('age'); //input type number with id age
var gender = document.getElementById('gender'); //select with id gender
var activity = document.getElementById('activity'); //select with id activity_level
var height_cm = document.getElementById('height'); //input type number with id height_ft
var weight = document.getElementById('weight'); //input type number with id weight
var bmr;
var cals;
var result = document.getElementById('result'); //span with id result
var resultI = document.getElementById('resultI'); //span with id resultI
var calculate = document.getElementById('btnCalculate');
//variable declaration ends

function createEventListeners() {
    calculate.addEventListener("click", calculateBMR, false);

}
function displayResults() {
    result.value = bmr.toFixed(2);
    resultI.value = cals.toFixed(2);
}


function calculateCalorie() {
    if (activity.value === "1") {
        cals = bmr * 1.53;
    } else if (activity.value === "2") {


        cals = bmr * 1.76;

    } else {


        cals = bmr * 2.25;

    }

    displayResults();
}


function female() {

    bmr = 655.1 + (9.563 * weight.value) + (1.850 * height_cm.value) - (4.676 * age.value);
}

function male() {

    bmr = 66.5 + (13.75 * weight.value) + (5.003 * height_cm.value) - (6.755 * age.value);
}
function femaleImp() {
    bmr = 655.1 + (4.35 * weight.value) + (4.7 * height_cm.value) - (4.7 * age.value);
}

function maleImp() {
    bmr = 33.5 + (6.2 * weight.value) + (12.7 * height_cm.value) - (6.76 * age.value);
}
function calculateBMR() {
    if (document.getElementById('metric').checked) {
        gender.value === 'M' ? male() : female();
    } else if (document.getElementById('imperial').checked){
        gender.value === 'M' ? maleImp() : femaleImp();
    }

    calculateCalorie();
}
function resetForm() {

    gender.value = "M";
    age.value = 20;
    height_cm.value = 160;
    weight.value = 60;
    activity.value = "1";
    document.getElementById('metric').checked = true;

    createEventListeners();
}
window.addEventListener("load", resetForm, false);
