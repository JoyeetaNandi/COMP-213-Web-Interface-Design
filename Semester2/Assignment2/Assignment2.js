// JavaScript source code

var row = document.getElementById("row");
var colum = document.getElementById("colum");
var generate = document.getElementById("btnGenerate");
var container = document.getElementById("container");

function showTable() {
    container.innerHTML = "";
    var table = document.createElement("table");
    table.setAttribute("style", "display:flex;flex-direction:column;justify-content:space-around;align-items:center;");
    table.setAttribute("border", "1");
         
    container.appendChild(table);
    var i, j;
    for (i = 1; i <= row.value; i++) {
        var tRow = document.createElement("tr");
        //tRow.setAttribute("id", "calRow" + j);
        table.appendChild(tRow);
        for (var j = 1; j <= colum.value; j++) {
            var tCell = document.createElement("td");
            //tCell.setAttribute("id", "calCell" + j);
            var t = document.createTextNode(i+", "+ j);
            tCell.appendChild(t);
            tRow.appendChild(tCell);
            //document.getElementById("calRow" + i).appendChild(tCell);
            tCell.setAttribute("height", "50px");
            tCell.setAttribute("width", "50px");
            //tcell.style.fontSize = "12px";
        }
    }
}
    function listenButton() {
        if (window.createEventListeners) {
            window.addEventListener("load", listenButton, false);
        } else if (window.addEventListeners) {
            window.addEventListener("load", listenButton, false);
        }
        generate.addEventListener("click", showTable, false);
        row.addEventListener("change", function () {
            if (row.value > 15) {
                alert("Not allowed");
                row.value = 15;
            }
        }, false);
        colum.addEventListener("change", function () {
            if (colum.value > 15) {
                alert("Not allowed");
                colum.value = 15;
            }
        }, false);
}

function createEventListeners() {
    calculate.addEventListener("click", showTable, false);

//}
//function resetForm() {
//    row.value = 1;
//    colum.value = 1;
//    document.getElementById('btnGenerate').checked = true;
//    createEventListeners();
}
//window.addEventListener("load", resetForm, false);
window.addEventListener("load", listenButton, false);

