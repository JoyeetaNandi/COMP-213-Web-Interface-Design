/*   
 *    Author: Joyeeta Nandi
 *    Date:   June 3, 2019

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}


function addFavorite() {
    var favoriteDiv = window.opener.document.getElementById("favorites");
    if (window.opener.favourites < 5) {
        var favImage = document.createElement("img");
        favImage.id = "fav" + window.opener.favCounter++;
        favImage.height = "100";
       
        favImage.src = figFilename;
        favoriteDiv.appendChild(favImage);
        window.opener.favourites += 1;
        window.opener.document.getElementById(favImage.id).addEventListener("click", window.opener.removeRoutine, false);
        window.close();
    } else {
        alert("You can only have 5 favorites. Remove at least one, before adding.")
    }
}

/* create event listener for close button */
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    closeWindowDiv.addEventListener("click", closeWin, false); 
    var addFavoriteDiv = document.getElementsByTagName("p")[1];
    addFavoriteDiv.addEventListener("click", addFavorite, false); 
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;